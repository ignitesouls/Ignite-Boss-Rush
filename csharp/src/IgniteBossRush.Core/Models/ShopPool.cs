// SPDX-License-Identifier: GPL-3.0-only
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IgniteBossRush.Core.Models;

/// <summary>
/// Deserialized shape of <c>shop_pool.json</c> — the curated catalogue of
/// items eligible to appear in Merchant Kalé's per-tier Boss Rush shop.
///
/// Four pools are sampled independently: weapons, talismans, ashes of war,
/// and crystal tears. Per the locked spec each tier's shop has 7 slots
/// arranged W,W, T,T, A,A, Tear (2+2+2+1). Drawn deterministically from
/// <see cref="ShakeDeterministicRng"/> using a per-category domain tag
/// (<c>"kale_shop_tier_weapons"</c>, <c>"..._talismans"</c>, etc.). Sampling
/// is without-replacement GLOBALLY across all 9 tiers per category, so once
/// an item rolls into one tier's shop it never reappears in a later tier.
///
/// Field ordering inside each list is load-bearing: it controls the
/// permutation index the SHAKE-256 PRNG resolves against, so two competitions
/// with the same seed but different list orders would diverge. Sort upstream
/// before committing the pool file.
/// </summary>
public sealed class ShopPoolFile
{
    [JsonPropertyName("schema_version")]
    public int SchemaVersion { get; set; }

    [JsonPropertyName("domain_tag")]
    public string DomainTag { get; set; } = "kale_shop_tier";

    [JsonPropertyName("pools")]
    public ShopPools Pools { get; set; } = new();

    [JsonPropertyName("exclusions")]
    public ShopExclusions Exclusions { get; set; } = new();

    /// <summary>
    /// Optional path to a CSV price sheet (relative to this JSON file) whose
    /// rows override <c>cost_amber_shards</c> per item. See
    /// <see cref="Io.ShopPriceCsv"/> for the format. Prices never feed the
    /// PRNG, so editing them cannot change which items roll for a seed.
    /// </summary>
    [JsonPropertyName("prices_csv")]
    public string? PricesCsv { get; set; }
}

/// <summary>Common surface of every pool entry, so price resolution and the
/// CSV override can treat all five categories uniformly.</summary>
public interface IShopPoolEntry
{
    int ParamId { get; }
    string Name { get; }

    /// <summary>Per-item price in Starlight Shards. <c>null</c> = use the
    /// category default (<see cref="Generation.ShopRollGenerator.BaseSlotCostAmberShards"/>
    /// or <see cref="Generation.ShopRollGenerator.GreatRuneCostAmberShards"/>).</summary>
    int? CostAmberShards { get; set; }
}

public sealed class ShopPools
{
    [JsonPropertyName("weapons")]
    public List<WeaponPoolEntry> Weapons { get; set; } = new();

    [JsonPropertyName("talismans")]
    public List<TalismanPoolEntry> Talismans { get; set; } = new();

    [JsonPropertyName("ash_of_war")]
    public List<AshOfWarPoolEntry> AshOfWar { get; set; } = new();

    [JsonPropertyName("crystal_tears")]
    public List<CrystalTearPoolEntry> CrystalTears { get; set; } = new();

    /// <summary>
    /// Activated Great Runes (goods IDs 191..195 in vanilla ER). Sampled
    /// probabilistically — each tier has a <see cref="Generation.ShopRollGenerator.GreatRuneChancePercent"/>%
    /// chance of getting a bonus 8th slot containing one rune from this
    /// pool. Empty by default; populating this list enables the feature.
    /// </summary>
    [JsonPropertyName("great_runes")]
    public List<GreatRunePoolEntry> GreatRunes { get; set; } = new();

    /// <summary>The five pools keyed by their shop_pool.json category name,
    /// in file order. Used by price validation and the CSV price sheet.</summary>
    public IEnumerable<(string Category, IEnumerable<IShopPoolEntry> Entries)> ByCategory()
    {
        yield return ("weapons",       Weapons);
        yield return ("talismans",     Talismans);
        yield return ("ash_of_war",    AshOfWar);
        yield return ("crystal_tears", CrystalTears);
        yield return ("great_runes",   GreatRunes);
    }
}

public sealed class ShopExclusions
{
    [JsonPropertyName("weapons")]
    public List<int> Weapons { get; set; } = new();

    [JsonPropertyName("talismans")]
    public List<int> Talismans { get; set; } = new();

    [JsonPropertyName("ash_of_war")]
    public List<int> AshOfWar { get; set; } = new();

    [JsonPropertyName("crystal_tears")]
    public List<int> CrystalTears { get; set; } = new();

    [JsonPropertyName("great_runes")]
    public List<int> GreatRunes { get; set; } = new();
}

public sealed class WeaponPoolEntry : IShopPoolEntry
{
    [JsonPropertyName("equipParamWeapon_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    /// <summary>0..25 (regular) or 0..10 (somber). Defaults to 0 if omitted.</summary>
    [JsonPropertyName("default_upgrade")]
    public int DefaultUpgrade { get; set; }

    [JsonPropertyName("cost_amber_shards")]
    public int? CostAmberShards { get; set; }
}

public sealed class TalismanPoolEntry : IShopPoolEntry
{
    [JsonPropertyName("equipParamAccessory_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    [JsonPropertyName("cost_amber_shards")]
    public int? CostAmberShards { get; set; }
}

public sealed class AshOfWarPoolEntry : IShopPoolEntry
{
    [JsonPropertyName("equipParamGem_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    [JsonPropertyName("cost_amber_shards")]
    public int? CostAmberShards { get; set; }
}

public sealed class CrystalTearPoolEntry : IShopPoolEntry
{
    [JsonPropertyName("equipParamGoods_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    [JsonPropertyName("cost_amber_shards")]
    public int? CostAmberShards { get; set; }
}

public sealed class GreatRunePoolEntry : IShopPoolEntry
{
    /// <summary>EquipParamGoods row id of the <b>activated</b> Great Rune
    /// (191..195 in vanilla ER — <c>goodsType=15</c>, what the game places
    /// in the Great Rune inventory slot). Do NOT use the 8148..8153 range
    /// here — those are the pre-Divine-Tower "unactivated" variants that
    /// get consumed during the activation ritual.</summary>
    [JsonPropertyName("equipParamGoods_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    [JsonPropertyName("cost_amber_shards")]
    public int? CostAmberShards { get; set; }
}
