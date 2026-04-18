// SPDX-License-Identifier: GPL-3.0-only
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using IgniteBossRush.Core.Io;
using IgniteBossRush.Core.Models;
using IgniteBossRush.Core.Prng;

namespace IgniteBossRush.Core.Generation;

/// <summary>
/// Deterministic generator for the Boss Rush shop. Given a competition seed
/// and a curated <see cref="ShopPoolFile"/>, produces a
/// <see cref="TierRewardsPlan"/> that fully enumerates every per-tier shop
/// slot for all 9 tiers (99 slots total), then serialises it to
/// <c>tier_rewards.json</c> alongside the existing <c>drops.json</c>.
///
/// Determinism contract:
///   - Same seed + same shop_pool.json bytes → byte-identical tier_rewards.json.
///   - Domain tag per tier is <c>"{base_tag}_{tier}"</c> (e.g.
///     "kale_shop_tier_1"), guaranteeing that tier rolls are independent of
///     boss-drop rolls and of each other (tier 5 doesn't shift if tier 4's
///     pool changes). This matches the convention used in
///     <see cref="DropGenerator"/> (domain "drop-rolls-v1").
///   - Inside a tier, the 11 slots are rolled in fixed order: three weapons,
///     three talismans, three AoW, two tears. This sequence of
///     <see cref="ShakeDeterministicRng.RandBelow"/> calls is part of the
///     determinism contract — reordering the slot loop changes every output.
///   - Sampling is **without replacement within a category for that tier**:
///     each weapon/talisman/AoW/tear is unique within its tier so the
///     player never sees three identical slots. Across tiers items may
///     repeat (intentional — a Tier 3 Uchigatana is a different cost-decision
///     than a Tier 8 one).
///
/// Sampling without replacement is implemented as a Fisher–Yates partial
/// shuffle driven by <see cref="ShakeDeterministicRng.RandBelow"/>. We must
/// NOT use <c>OrderBy(rng.Next())</c>-style sorts: those would consume an
/// indeterminate number of PRNG draws (depending on .NET's sort comparator)
/// and break Python parity if we ever port this.
/// </summary>
public sealed class ShopRollGenerator
{
    public const string ToolName = "IgniteRush-ShopRoll";
    public const string ToolVersion = "0.1.0";

    /// <summary>9 tiers × 11 slots/tier.</summary>
    public const int TierCount = 9;
    public const int WeaponsPerTier = 3;
    public const int TalismansPerTier = 3;
    public const int AshOfWarPerTier = 3;
    public const int TearsPerTier = 2;
    public const int SlotsPerTier =
        WeaponsPerTier + TalismansPerTier + AshOfWarPerTier + TearsPerTier; // = 11

    /// <summary>Tier visibility / award flags — owned by IgniteBossRush, NOT
    /// part of the base Ignite Rush mod's flag scheme. Documented in
    /// patcher_summary.md (TODO: add once patcher lands).</summary>
    private const int TierFlagBase = 1049308300;          // tier_flag        = base + tier
    private const int ShopVisibilityFlagBase = 1049308400;// shop_visibility  = base + tier
    // Placed in the only clean 10-slot gap in the 1049308xxx plateau — between
    // the two BatchSetEventFlags reset windows 1049308000..219 (wiped in event
    // 90009800, `warp to boss`) and 1049308250..275 (wiped in the init event).
    // Earlier picks 1049308500 and 1049308200 both failed — see the detailed
    // history in TierClearConstants.ShardAwardEventFlagBase. Must stay in sync
    // with that constant.
    private const int ShardAwardEventFlagBase = 1049308220;// shard_award_one_shot = base + tier

    public const int ShardAwardPerTier = 5;

    public ShopRollGeneratorOptions Options { get; }

    public ShopRollGenerator(ShopRollGeneratorOptions options)
    {
        Options = options ?? throw new ArgumentNullException(nameof(options));
    }

    /// <summary>
    /// Build the in-memory plan and write it to <paramref name="outDir"/>
    /// as <c>tier_rewards.json</c>. Returns the result with the on-disk path
    /// and a SHA-256 fingerprint of the canonical bytes (for inclusion in
    /// SEED_INFO.txt — same fingerprinting story as <see cref="DropGenerator"/>).
    /// </summary>
    public ShopRollResult Generate(string outDir)
    {
        Directory.CreateDirectory(outDir);

        var pool = JsonLoader.LoadFile<ShopPoolFile>(Options.ShopPoolPath);
        ValidatePool(pool);

        TierRewardsPlan plan = BuildPlan(Options.Seed, pool);

        // Serialise canonically so re-runs are byte-identical and so a future
        // Python port (parity with generate.py) is straightforward.
        Dictionary<string, object> rootDict = ToCanonicalDict(plan);
        byte[] bytes = CanonicalJsonWriter.Serialize(rootDict);

        string outPath = Path.Combine(outDir, "tier_rewards.json");
        File.WriteAllBytes(outPath, bytes);

        string fingerprint = ToHexLower(SHA256.HashData(bytes));
        return new ShopRollResult(
            TierRewardsPath: outPath,
            Fingerprint: fingerprint,
            TierCount: plan.Tiers.Count,
            SlotCount: plan.Tiers.Sum(t => t.Slots.Count));
    }

    // ----------------------------------------------------------------------
    // In-memory plan construction (no I/O — unit-testable in isolation)
    // ----------------------------------------------------------------------
    public static TierRewardsPlan BuildPlan(string seed, ShopPoolFile pool)
    {
        if (string.IsNullOrEmpty(seed))
            throw new ArgumentException("seed must not be empty", nameof(seed));

        // Apply exclusions once up-front so each tier draws from the same
        // post-exclusion pool. Order of survivors is preserved from the
        // source list, which is part of the determinism contract.
        var weapons = pool.Pools.Weapons
            .Where(w => !pool.Exclusions.Weapons.Contains(w.ParamId)).ToList();
        var talismans = pool.Pools.Talismans
            .Where(t => !pool.Exclusions.Talismans.Contains(t.ParamId)).ToList();
        var aow = pool.Pools.AshOfWar
            .Where(a => !pool.Exclusions.AshOfWar.Contains(a.ParamId)).ToList();
        var tears = pool.Pools.CrystalTears
            .Where(t => !pool.Exclusions.CrystalTears.Contains(t.ParamId)).ToList();

        RequireMinSize(weapons.Count,   WeaponsPerTier,   "weapons");
        RequireMinSize(talismans.Count, TalismansPerTier, "talismans");
        RequireMinSize(aow.Count,       AshOfWarPerTier,  "ash_of_war");
        RequireMinSize(tears.Count,     TearsPerTier,     "crystal_tears");

        var tiers = new List<TierPlan>(TierCount);
        for (int tierIdx = 1; tierIdx <= TierCount; tierIdx++)
        {
            // Per-tier domain tag isolates rolls — see class-level XML doc.
            string domain = $"{pool.DomainTag}_{tierIdx}";
            var rng = new ShakeDeterministicRng(seed, domain);

            // Order is load-bearing: weapons → talismans → AoW → tears.
            // Each call below issues exactly N RandBelow draws at most
            // (Fisher–Yates style — see SampleWithoutReplacement).
            var picks = new List<ShopSlot>(SlotsPerTier);
            int shopBase = 8000000 + tierIdx * 100;
            int slotIdx = 0;

            foreach (var w in SampleWithoutReplacement(rng, weapons, WeaponsPerTier))
            {
                picks.Add(new ShopSlot
                {
                    ShopId = shopBase + slotIdx++,
                    Kind = ShopSlotKinds.Weapon,
                    ParamId = w.ParamId,
                    CostAmberShards = 1,
                });
            }
            foreach (var t in SampleWithoutReplacement(rng, talismans, TalismansPerTier))
            {
                picks.Add(new ShopSlot
                {
                    ShopId = shopBase + slotIdx++,
                    Kind = ShopSlotKinds.Talisman,
                    ParamId = t.ParamId,
                    CostAmberShards = 1,
                });
            }
            foreach (var a in SampleWithoutReplacement(rng, aow, AshOfWarPerTier))
            {
                picks.Add(new ShopSlot
                {
                    ShopId = shopBase + slotIdx++,
                    Kind = ShopSlotKinds.AshOfWar,
                    ParamId = a.ParamId,
                    CostAmberShards = 1,
                });
            }
            foreach (var tear in SampleWithoutReplacement(rng, tears, TearsPerTier))
            {
                picks.Add(new ShopSlot
                {
                    ShopId = shopBase + slotIdx++,
                    Kind = ShopSlotKinds.Tear,
                    ParamId = tear.ParamId,
                    CostAmberShards = 1,
                });
            }

            tiers.Add(new TierPlan
            {
                Tier = tierIdx,
                TierFlag = TierFlagBase + tierIdx,
                ShopVisibilityFlag = ShopVisibilityFlagBase + tierIdx,
                ShardAwardCount = ShardAwardPerTier,
                ShardAwardEventFlag = ShardAwardEventFlagBase + tierIdx,
                Slots = picks,
            });
        }

        return new TierRewardsPlan
        {
            CompetitionSeed = seed,
            DomainTag = pool.DomainTag,
            Tiers = tiers,
        };
    }

    // ----------------------------------------------------------------------
    // Sampling: deterministic, RandBelow-only.
    // ----------------------------------------------------------------------
    /// <summary>
    /// Fisher–Yates partial shuffle over a defensive copy: pick k distinct
    /// items from <paramref name="source"/> without replacement, in pick-order.
    /// Issues exactly k <see cref="ShakeDeterministicRng.RandBelow"/> calls.
    /// Equivalent to Python's <c>random.sample(seq, k)</c> when driven by the
    /// same RNG.
    /// </summary>
    internal static IEnumerable<T> SampleWithoutReplacement<T>(
        ShakeDeterministicRng rng, IReadOnlyList<T> source, int k)
    {
        if (k > source.Count)
            throw new ArgumentException(
                $"Cannot sample {k} items from a pool of {source.Count}");

        // Defensive copy so we can mutate without disturbing the caller.
        var pool = new T[source.Count];
        for (int i = 0; i < source.Count; i++) pool[i] = source[i];

        int remaining = pool.Length;
        for (int draw = 0; draw < k; draw++)
        {
            int pickIdx = rng.RandBelow(remaining);
            yield return pool[pickIdx];
            // Move the picked element out of the unpicked window by swapping
            // it with the last unpicked slot. Standard Fisher–Yates trick.
            pool[pickIdx] = pool[remaining - 1];
            remaining--;
        }
    }

    // ----------------------------------------------------------------------
    // JSON canonicalisation helpers
    // ----------------------------------------------------------------------
    /// <summary>
    /// Translate the strongly-typed plan into the loose dictionary shape that
    /// <see cref="CanonicalJsonWriter"/> understands. Field names here ARE
    /// the on-disk schema — keep in sync with the documented schema in
    /// patcher_summary.md.
    /// </summary>
    internal static Dictionary<string, object> ToCanonicalDict(TierRewardsPlan plan)
    {
        var tiersList = new List<object>(plan.Tiers.Count);
        foreach (var t in plan.Tiers)
        {
            var slotsList = new List<object>(t.Slots.Count);
            foreach (var s in t.Slots)
            {
                slotsList.Add(new Dictionary<string, object>
                {
                    ["shop_id"] = s.ShopId,
                    ["kind"] = s.Kind,
                    ["param_id"] = s.ParamId,
                    ["cost_amber_shards"] = s.CostAmberShards,
                });
            }
            tiersList.Add(new Dictionary<string, object>
            {
                ["tier"] = t.Tier,
                ["tier_flag"] = t.TierFlag,
                ["shop_visibility_flag"] = t.ShopVisibilityFlag,
                ["shard_award_count"] = t.ShardAwardCount,
                ["shard_award_event_flag"] = t.ShardAwardEventFlag,
                ["slots"] = slotsList,
            });
        }

        return new Dictionary<string, object>
        {
            ["schema_version"] = plan.SchemaVersion,
            ["competition_seed"] = plan.CompetitionSeed,
            ["domain_tag"] = plan.DomainTag,
            ["tiers"] = tiersList,
        };
    }

    // ----------------------------------------------------------------------
    // Validation
    // ----------------------------------------------------------------------
    private static void ValidatePool(ShopPoolFile pool)
    {
        if (pool.SchemaVersion != 1)
            throw new InvalidDataException(
                $"Unsupported shop_pool.json schema_version {pool.SchemaVersion} (expected 1)");
        if (string.IsNullOrEmpty(pool.DomainTag))
            throw new InvalidDataException("shop_pool.json domain_tag must not be empty");
    }

    private static void RequireMinSize(int actual, int min, string poolName)
    {
        if (actual < min)
            throw new InvalidDataException(
                $"shop_pool.json '{poolName}' has only {actual} entries after exclusions; need at least {min}");
    }

    private static string ToHexLower(byte[] data)
    {
        var sb = new StringBuilder(data.Length * 2);
        foreach (var b in data) sb.Append(b.ToString("x2", CultureInfo.InvariantCulture));
        return sb.ToString();
    }
}

public sealed record ShopRollResult(
    string TierRewardsPath,
    string Fingerprint,
    int TierCount,
    int SlotCount);

public sealed class ShopRollGeneratorOptions
{
    public required string Seed { get; init; }
    public required string ShopPoolPath { get; init; }
}
