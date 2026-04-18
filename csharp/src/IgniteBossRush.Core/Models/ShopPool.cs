// SPDX-License-Identifier: GPL-3.0-only
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace IgniteBossRush.Core.Models;

/// <summary>
/// Deserialized shape of <c>shop_pool.json</c> — the curated catalogue of
/// items eligible to appear in Merchant Kalé's per-tier Boss Rush shop.
///
/// Four pools are sampled independently: weapons, talismans, ashes of war,
/// and crystal tears. Per the locked spec each tier's shop has 11 slots
/// arranged W,W,W, T,T,T, A,A,A, Tear,Tear (3+3+3+2). Drawn deterministically
/// from <see cref="ShakeDeterministicRng"/> using domain tag
/// <c>"kale_shop_tier_N"</c> per tier.
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
}

public sealed class WeaponPoolEntry
{
    [JsonPropertyName("equipParamWeapon_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";

    /// <summary>0..25 (regular) or 0..10 (somber). Defaults to 0 if omitted.</summary>
    [JsonPropertyName("default_upgrade")]
    public int DefaultUpgrade { get; set; }
}

public sealed class TalismanPoolEntry
{
    [JsonPropertyName("equipParamAccessory_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";
}

public sealed class AshOfWarPoolEntry
{
    [JsonPropertyName("equipParamGem_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";
}

public sealed class CrystalTearPoolEntry
{
    [JsonPropertyName("equipParamGoods_id")]
    public int ParamId { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = "";
}
