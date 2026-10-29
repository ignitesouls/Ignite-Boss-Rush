// SPDX-License-Identifier: GPL-3.0-only
using System;
using System.IO;
using System.Linq;
using System.Text.Json;
using IgniteBossRush.Core.Generation;
using IgniteBossRush.Core.Io;
using IgniteBossRush.Core.Models;
using Xunit;

namespace IgniteBossRush.Tests;

/// <summary>
/// Per-item shop pricing: <c>cost_amber_shards</c> on pool entries and the
/// <c>prices_csv</c> sheet merged by <see cref="ShopPoolLoader"/>.
/// Hermetic temp fixtures, same style as <see cref="ShopRollGeneratorTests"/>.
/// </summary>
public class ShopPricingTests
{
    [Fact]
    public void BuildPlan_NoPricesSet_UsesCategoryDefaults()
    {
        var plan = FirstPlanWithRune(MakePool());
        foreach (var slot in plan.Tiers.SelectMany(t => t.Slots))
        {
            int expected = slot.Kind == ShopSlotKinds.GreatRune
                ? ShopRollGenerator.GreatRuneCostAmberShards
                : ShopRollGenerator.BaseSlotCostAmberShards;
            Assert.Equal(expected, slot.CostAmberShards);
        }
    }

    [Fact]
    public void BuildPlan_PerItemCost_IsWrittenToThatItemsSlot()
    {
        var pool = MakePool();
        // Give every item a price derived from its id so we can check each
        // slot carries its own item's price, not a category-wide value.
        foreach (var (_, entries) in pool.Pools.ByCategory())
        foreach (var e in entries)
            e.CostAmberShards = 1 + (e.ParamId % 50);

        var plan = FirstPlanWithRune(pool);
        foreach (var slot in plan.Tiers.SelectMany(t => t.Slots))
            Assert.Equal(1 + (slot.ParamId % 50), slot.CostAmberShards);
    }

    [Fact]
    public void BuildPlan_Repricing_DoesNotChangeWhichItemsRoll()
    {
        var plain = MakePool();
        var priced = MakePool();
        foreach (var (_, entries) in priced.Pools.ByCategory())
        foreach (var e in entries)
            e.CostAmberShards = 42;

        var a = ShopRollGenerator.BuildPlan("reprice-seed", plain);
        var b = ShopRollGenerator.BuildPlan("reprice-seed", priced);

        Assert.Equal(
            a.Tiers.SelectMany(t => t.Slots).Select(s => (s.ShopId, s.Kind, s.ParamId)),
            b.Tiers.SelectMany(t => t.Slots).Select(s => (s.ShopId, s.Kind, s.ParamId)));
    }

    [Theory]
    [InlineData(0)]
    [InlineData(100)]
    [InlineData(-5)]
    public void BuildPlan_CostOutOfRange_Throws(int badCost)
    {
        var pool = MakePool();
        pool.Pools.Talismans[3].CostAmberShards = badCost;
        var ex = Assert.Throws<InvalidDataException>(
            () => ShopRollGenerator.BuildPlan("range-seed", pool));
        Assert.Contains(pool.Pools.Talismans[3].Name, ex.Message);
    }

    [Fact]
    public void Loader_AppliesCsv_OverridingJsonAndSkippingBlanks()
    {
        using var fx = new TempDir();
        var pool = MakePool();
        pool.PricesCsv = "prices.csv";
        pool.Pools.Weapons[0].CostAmberShards = 9;   // JSON price, overridden by CSV below
        pool.Pools.Weapons[1].CostAmberShards = 8;   // JSON price, CSV row is blank → kept
        fx.WriteJson(pool);
        fx.WriteText("prices.csv",
            "﻿category,param_id,name,cost_amber_shards\n" +   // BOM, as Excel writes it
            "# comment lines are ignored\n" +
            "\n" +
            $"weapons,{pool.Pools.Weapons[0].ParamId},\"Sword, with comma\",4\n" +
            $"weapons,{pool.Pools.Weapons[1].ParamId},W1,\n" +
            $"great_runes,{pool.Pools.GreatRunes[0].ParamId},Rune0,12\n" +
            $"CRYSTAL_TEARS,{pool.Pools.CrystalTears[2].ParamId},Tear2,2\n");

        var loaded = ShopPoolLoader.Load(fx.PoolPath);

        Assert.Equal(4, loaded.Pools.Weapons[0].CostAmberShards);
        Assert.Equal(8, loaded.Pools.Weapons[1].CostAmberShards);
        Assert.Null(loaded.Pools.Weapons[2].CostAmberShards);
        Assert.Equal(12, loaded.Pools.GreatRunes[0].CostAmberShards);
        Assert.Equal(2, loaded.Pools.CrystalTears[2].CostAmberShards);
    }

    [Fact]
    public void Loader_NoPricesCsv_LeavesJsonPrices()
    {
        using var fx = new TempDir();
        var pool = MakePool();
        pool.Pools.AshOfWar[5].CostAmberShards = 6;
        fx.WriteJson(pool);

        var loaded = ShopPoolLoader.Load(fx.PoolPath);
        Assert.Equal(6, loaded.Pools.AshOfWar[5].CostAmberShards);
    }

    [Theory]
    [InlineData("weapons,123,Nope,2\n", "not in shop_pool.json")]
    [InlineData("swords,2000000,Bad category,2\n", "unknown category")]
    [InlineData("weapons,2000000,W0,two\n", "not an integer")]
    [InlineData("weapons,2000000,W0,2\nweapons,2000000,W0 again,3\n", "duplicate row")]
    public void Loader_BadCsvRow_ThrowsWithLineNumber(string rows, string expected)
    {
        using var fx = new TempDir();
        var pool = MakePool();
        pool.PricesCsv = "prices.csv";
        fx.WriteJson(pool);
        fx.WriteText("prices.csv", "category,param_id,name,cost_amber_shards\n" + rows);

        var ex = Assert.Throws<InvalidDataException>(() => ShopPoolLoader.Load(fx.PoolPath));
        Assert.Contains(expected, ex.Message);
        Assert.Contains("line ", ex.Message);
    }

    [Fact]
    public void Loader_MissingCsvFile_Throws()
    {
        using var fx = new TempDir();
        var pool = MakePool();
        pool.PricesCsv = "does_not_exist.csv";
        fx.WriteJson(pool);
        Assert.Throws<FileNotFoundException>(() => ShopPoolLoader.Load(fx.PoolPath));
    }

    [Fact]
    public void Generate_CsvPrices_LandInTierRewardsJson()
    {
        using var fx = new TempDir();
        var pool = MakePool();
        pool.PricesCsv = "prices.csv";
        fx.WriteJson(pool);
        // Price every weapon at 5 through the sheet.
        fx.WriteText("prices.csv",
            "category,param_id,name,cost_amber_shards\n" +
            string.Concat(pool.Pools.Weapons.Select(w => $"weapons,{w.ParamId},{w.Name},5\n")));

        var r = new ShopRollGenerator(new ShopRollGeneratorOptions
        {
            Seed = "csv-end-to-end",
            ShopPoolPath = fx.PoolPath,
        }).Generate(Path.Combine(fx.Root, "out"));

        using var doc = JsonDocument.Parse(File.ReadAllBytes(r.TierRewardsPath));
        foreach (var tier in doc.RootElement.GetProperty("tiers").EnumerateArray())
        foreach (var slot in tier.GetProperty("slots").EnumerateArray())
        {
            int expected = slot.GetProperty("kind").GetString() switch
            {
                ShopSlotKinds.Weapon => 5,
                ShopSlotKinds.GreatRune => ShopRollGenerator.GreatRuneCostAmberShards,
                _ => ShopRollGenerator.BaseSlotCostAmberShards,
            };
            Assert.Equal(expected, slot.GetProperty("cost_amber_shards").GetInt32());
        }
    }

    // ------------------------------------------------------------------

    private static ShopPoolFile MakePool() => new()
    {
        SchemaVersion = 1,
        DomainTag = "kale_shop_tier",
        Pools = new ShopPools
        {
            Weapons = Enumerable.Range(0, 20)
                .Select(i => new WeaponPoolEntry { ParamId = 2000000 + i * 1000, Name = $"W{i}" }).ToList(),
            Talismans = Enumerable.Range(0, 20)
                .Select(i => new TalismanPoolEntry { ParamId = 1000 + i, Name = $"T{i}" }).ToList(),
            AshOfWar = Enumerable.Range(0, 20)
                .Select(i => new AshOfWarPoolEntry { ParamId = 10000 + i * 100, Name = $"A{i}" }).ToList(),
            CrystalTears = Enumerable.Range(0, 10)
                .Select(i => new CrystalTearPoolEntry { ParamId = 10100 + i, Name = $"Tear{i}" }).ToList(),
            GreatRunes = Enumerable.Range(0, 5)
                .Select(i => new GreatRunePoolEntry { ParamId = 191 + i, Name = $"Rune{i}" }).ToList(),
        },
        Exclusions = new ShopExclusions(),
    };

    /// <summary>Great Rune slots are a per-tier 15% roll, so walk seeds until
    /// one produces at least one rune slot — keeps rune pricing covered.</summary>
    private static TierRewardsPlan FirstPlanWithRune(ShopPoolFile pool)
    {
        for (int i = 0; i < 200; i++)
        {
            var plan = ShopRollGenerator.BuildPlan($"pricing-seed-{i}", pool);
            if (plan.Tiers.Any(t => t.Slots.Any(s => s.Kind == ShopSlotKinds.GreatRune)))
                return plan;
        }
        throw new InvalidOperationException("no seed in 0..199 produced a Great Rune slot");
    }

    private sealed class TempDir : IDisposable
    {
        public string Root { get; } = Path.Combine(Path.GetTempPath(),
            "ignite-pricing-tests-" + Guid.NewGuid().ToString("N"));
        public string PoolPath => Path.Combine(Root, "shop_pool.json");

        public TempDir() => Directory.CreateDirectory(Root);

        public void WriteJson(ShopPoolFile pool) =>
            File.WriteAllText(PoolPath, JsonSerializer.Serialize(pool));

        public void WriteText(string name, string text) =>
            File.WriteAllText(Path.Combine(Root, name), text);

        public void Dispose()
        {
            try { Directory.Delete(Root, recursive: true); }
            catch { /* best-effort cleanup */ }
        }
    }
}
