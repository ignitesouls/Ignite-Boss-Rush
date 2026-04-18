// SPDX-License-Identifier: GPL-3.0-only
using System;
using System.Collections.Generic;

namespace IgniteBossRush.Core.Patching;

/// <summary>
/// Names and IDs referenced by the regulation.bin patcher.
///
/// Values are drawn from (a) the Elden Ring PARAM layout as documented in
/// community references (Paramdex, Smithbox's stripped row-name files under
/// <c>.smithbox/Project/Stripped Row Names/</c>) and (b) the locked Boss Rush
/// shop spec. They're surfaced here as <c>const</c>s so a future change (e.g.
/// FromSoftware rearranges PARAM paths in a patch, or the spec moves the
/// ShopLineupParam row range) touches exactly one file.
/// </summary>
public static class RegulationConstants
{
    // ---- PARAM file paths inside the regulation.bin BND4 ---------------
    // Elden Ring stores its PARAMs under "param/GameParam/" with a ".param"
    // extension. The paths use backslashes in the binder — SoulsFormatsNEXT
    // returns them verbatim from the binder file headers.
    public const string EquipParamGoodsPath = @"N:\GR\data\Param\param\GameParam\EquipParamGoods.param";
    public const string ItemLotParamMapPath = @"N:\GR\data\Param\param\GameParam\ItemLotParam_map.param";
    public const string ItemLotParamEnemyPath = @"N:\GR\data\Param\param\GameParam\ItemLotParam_enemy.param";
    public const string ShopLineupParamPath = @"N:\GR\data\Param\param\GameParam\ShopLineupParam.param";

    /// <summary>
    /// Short basenames (no path, no extension) of the PARAM files this patcher
    /// touches. Used for filename-suffix matching so we're resilient to binder
    /// path prefix changes across game versions / regional releases.
    /// </summary>
    public static readonly IReadOnlyList<string> RequiredParamBaseNames = new[]
    {
        "EquipParamGoods",
        "ItemLotParam_map",
        "ShopLineupParam",
    };

    // ---- Shop currency (EquipParamGoods) -------------------------------
    /// <summary>Goods row id used as the shop's currency.
    /// Points at the vanilla DLC <b>Starlight Shards</b> row (1290) — see
    /// <see cref="TierClearConstants.AmberShardGoodsId"/> for the full
    /// rationale. The regulation patcher no longer mutates EquipParamGoods;
    /// this id is referenced by (a) the tier-clear EMEVD for RemoveItem /
    /// AwardItemLot targeting, and (b) by ItemLotParam_map slot granting
    /// five copies per tier clear.</summary>
    public const int AmberShardGoodsId = TierClearConstants.AmberShardGoodsId; // 1290 (vanilla Starlight Shards)

    // ---- Per-tier ItemLot (ItemLotParam_map) ---------------------------
    /// <summary>First row id for the 9 shard-award lots
    /// (<c>ShardAwardItemLotBase + tier</c>, tiers 1..9 → 9000001..9000009).
    /// Pulled through from <see cref="TierClearConstants"/> so the EMEVD
    /// AwardItemLot opcodes and the regulation rows agree by construction.</summary>
    public const int ShardAwardItemLotBase = TierClearConstants.ShardAwardItemLotBase; // 9000000

    /// <summary>Each tier-clear awards 5 Amber Shards (locked spec: 45 total over
    /// a full 9-tier run = 5 × 9).</summary>
    public const int ShardsPerTierClear = 5;

    /// <summary>ItemLot category byte for <i>Goods</i>. Elden Ring's
    /// lotItemCategory uses a wider encoding than EMEVD's ItemType byte: 1 =
    /// Goods, 2 = Weapon, 3 = Protector (armor), 4 = Accessory (talisman),
    /// 5 = Gem (Ash of War). Cross-check: Paramdex/ItemLotParam.xml.</summary>
    public const int ItemLotCategoryGoods = 1;
    public const int ItemLotCategoryWeapon = 2;
    public const int ItemLotCategoryAccessory = 4;
    public const int ItemLotCategoryGem = 5;

    // ---- Shop rows (ShopLineupParam) -----------------------------------
    /// <summary>
    /// Row-id formula: <c>ShopLineupRowBase + tier*100 + slotIndex</c>.
    /// Example: tier 1 slot 0 = 8000100, tier 9 slot 10 = 8000910. The +100
    /// stride per tier gives 89 spare IDs between tiers for future additions
    /// without renumbering.
    /// </summary>
    public const int ShopLineupRowBase = 8000000;

    /// <summary>Per-tier stride in the ShopLineupParam row id layout. See
    /// <see cref="ShopLineupRowBase"/>.</summary>
    public const int ShopLineupTierStride = 100;

    /// <summary>11 slots per tier: 3 weapons + 3 talismans + 3 AoW + 2 tears.
    /// Matches <see cref="Models.TierPlan.Slots"/>.Count invariant.</summary>
    public const int ShopSlotsPerTier = 11;

    /// <summary>ShopType byte value for Kalé's goods/wares entries. Vanilla ER
    /// uses 0 for "standard merchant goods". Gems (Ashes of War) and weapons
    /// sold in the shop share this value; the distinguishing field is
    /// <c>equipType</c>.</summary>
    public const byte ShopTypeMerchant = 0;

    /// <summary>
    /// <c>costType</c> enum value (SHOP_LINEUP_COSTTYPE) for
    /// <b>Starlight Shards</b>. The ER engine hardcodes this currency's
    /// goods id internally — setting <c>costType=2</c> makes the shop
    /// deduct Starlight Shards (<see cref="AmberShardGoodsId"/> = 1290) on
    /// purchase without us needing to wire <c>mtrlId</c>. Athena
    /// Randomizer's DLC starlight-shop uses the same value; see
    /// <c>RandomizerServiceDlc.cs</c> (field
    /// <c>starlightShardCostType = 2</c>).
    /// </summary>
    public const byte ShopCostTypeStarlightShards = 2;

    /// <summary>EquipType byte inside a ShopLineupParam row. Matches
    /// <see cref="ItemLotCategoryWeapon"/> semantics but uses the shop param's
    /// narrower enum: 0 = Weapon, 1 = Protector, 2 = Accessory, 3 = Goods,
    /// 4 = Gem.</summary>
    public const byte ShopEquipTypeWeapon = 0;
    public const byte ShopEquipTypeAccessory = 2; // talisman
    public const byte ShopEquipTypeGoods = 3;     // crystal tear
    public const byte ShopEquipTypeGem = 4;       // ash of war

    /// <summary>Cost currency id for the Boss Rush shop slots: vanilla
    /// Starlight Shards (<see cref="AmberShardGoodsId"/> = 1290). Retained
    /// as a named alias because callers (ItemLot mutation, EMEVD
    /// RemoveItemFromPlayer) read "currency id" as the concept they want,
    /// independent of which vanilla row backs it.</summary>
    public const int ShopCurrencyGoodsId = AmberShardGoodsId;

    /// <summary>Per-spec cost: one Starlight Shard per shop slot. The
    /// shop row's <c>value</c> field is set to this when
    /// <c>costType = 2</c> (Starlight Shards). Phase B refuses to patch
    /// when any <see cref="Models.ShopSlot.CostAmberShards"/> disagrees —
    /// fail loud rather than silently mis-charge. Multi-shard costs are
    /// now trivially supported (just set <c>value</c> to the desired
    /// count), but the locked spec is 1; loosening the validator is a
    /// one-line change when/if the spec changes.</summary>
    public const int ShopCostPerSlotAmberShards = 1;

    // ---- PARAMDEF embedded-resource filenames ---------------------------
    /// <summary>Filename (no path) of the Paramdex XML we ship as an embedded
    /// resource for <c>EquipParamGoods.param</c>. The Core project embeds
    /// <c>Patching/Paramdefs/*.xml</c>; <see cref="ParamdefLoader"/> looks
    /// up the resource by suffix-matching on this basename.</summary>
    public const string EquipParamGoodsDefXml = "EquipParamGoods.xml";

    /// <summary>Paramdex XML filename for <c>ItemLotParam_map.param</c>.
    /// Paramdex ships one <c>ItemLotParam.xml</c> that is valid for both
    /// <c>ItemLotParam_map</c> and <c>ItemLotParam_enemy</c> — they share
    /// the same row layout.</summary>
    public const string ItemLotParamDefXml = "ItemLotParam.xml";

    /// <summary>Paramdex XML filename for <c>ShopLineupParam.param</c>.</summary>
    public const string ShopLineupParamDefXml = "ShopLineupParam.xml";

    // ---- ShopLineupParam field internal names ---------------------------
    // These are the exact InternalName strings in Paramdex's ShopLineupParam.xml
    // (FormatVersion 203 / DataVersion 3). Hoisted to named constants so a
    // Paramdex schema rename would surface as a single compile-time break
    // rather than a silent miss inside the cell-lookup loop.
    public const string ShopLineupField_EquipId           = "equipId";
    public const string ShopLineupField_EquipType         = "equipType";
    public const string ShopLineupField_Value             = "value";
    public const string ShopLineupField_MtrlId            = "mtrlId";
    public const string ShopLineupField_SellQuantity      = "sellQuantity";
    public const string ShopLineupField_EventFlagForStock = "eventFlag_forStock";
    // "販売解禁イベントフラグ" — the sales-unlock gate. When this flag is ON the
    // row appears in the merchant's menu; when OFF it's hidden. DISTINCT from
    // eventFlag_forStock, which stores the sold-count bit and (when pointed
    // at a set flag) immediately reads as "1 sold", silently driving the row
    // to out-of-stock the moment the flag flips ON. Pointing the visibility
    // flag at _forRelease instead of _forStock is the fix for the "Kalé's
    // shop is always out of stock" bug.
    public const string ShopLineupField_EventFlagForRelease = "eventFlag_forRelease";
    public const string ShopLineupField_SetNum            = "setNum";
    public const string ShopLineupField_CostType          = "costType";
    // Menu-display override fields. Paramdef defaults are -1 (= don't override),
    // but we initialize these explicitly on freshly-created rows so a
    // SoulsFormats.PARAM.Row constructor that silently zero-fills cells can't
    // leave iconId=0/nameMsgId=0 — which the game interprets as "override
    // icon with #0 / name with message #0" and renders as "ICON" + "?WeaponName?"
    // in the shop UI even though EquipParamWeapon stats resolve normally.
    public const string ShopLineupField_IconId            = "iconId";
    public const string ShopLineupField_NameMsgId         = "nameMsgId";
    public const string ShopLineupField_MenuTitleMsgId    = "menuTitleMsgId";
    public const string ShopLineupField_MenuIconId        = "menuIconId";
    public const string ShopLineupField_ValueMagnification = "value_Magnification";

    // ---- ItemLotParam field internal names (slot 01 only) ---------------
    public const string ItemLotField_LotItemId01       = "lotItemId01";
    public const string ItemLotField_LotItemCategory01 = "lotItemCategory01";
    public const string ItemLotField_LotItemBasePoint01 = "lotItemBasePoint01";
    public const string ItemLotField_LotItemNum01      = "lotItemNum01";

    /// <summary>Row-level "acquired flag" on ItemLotParam. ItemLotParam.xml
    /// description: "取得済みフラグとザクザク枠兼用(0:フラグ無効)" —
    /// "Acquired flag dual-use (0: flag disabled)". The engine checks this
    /// flag atomically at award time: if OFF, it awards the lot's items and
    /// then sets the flag ON; if already ON, the award is a silent no-op.
    ///
    /// <para>
    /// We exploit this for engine-level atomic idempotency on the per-tier
    /// Amber Shard drop. Before this was introduced the OnTierClear EMEVD
    /// body did its own check-then-set with a SkipIfEventFlag / SetEventFlag
    /// pair, but event 90009921 (the shared warp-back handler we splice
    /// into) fires ~20 times during a single tier-clear warp sequence —
    /// each fire spawns 9 concurrent OnTierClear coroutines, and EMEVD
    /// instructions interleave at tick boundaries, so the check-then-set
    /// was NOT atomic. All copies saw the guard OFF at the same tick and
    /// all awarded 5 shards, producing the observed 10/75/100-shard
    /// regressions. Pushing the idempotency into the regulation param row
    /// lets the engine serialise the whole award at the native layer.
    /// </para></summary>
    public const string ItemLotField_GetItemFlagId = "getItemFlagId";

    /// <summary>100% lot weight in slot 01. ItemLotParam sums base-points
    /// across all 8 lot slots to compute probabilities; putting 100 on slot 01
    /// and 0 on every other slot makes slot 01 the sole winner every roll.</summary>
    public const int ItemLotFullWeightSlot01 = 100;

    // ---- Validation helpers ---------------------------------------------
    // ---- Boss NPC drop zero-out (ItemLotParam_enemy) -------------------
    /// <summary>
    /// First row id in the boss-drop bundle range that the source mod
    /// populates in <c>ItemLotParam_enemy</c>. The Ignite Rush Alpha mod
    /// uses the same id range in both <c>ItemLotParam_map</c> (awarded by
    /// event 11107822's bulk "receive all shop items" grant) and
    /// <c>ItemLotParam_enemy</c> (the NPC-death auto-drop the engine
    /// resolves from <c>NpcParam.itemLotId_1..6</c>). Because the two
    /// params are separate, we can zero the <c>_enemy</c> rows to kill the
    /// post-boss-kill "ENEMY FELLED" loadout toast while leaving the
    /// <c>_map</c> rows intact for event 11107822.
    /// </summary>
    public const int BossDropLotRangeBegin = 1049301000;

    /// <summary>Inclusive last row id in the boss-drop bundle range.
    /// Matches the highest <c>AwardItemLot</c> id in event 11107822
    /// (<c>1049301370</c>). See <see cref="BossDropLotRangeBegin"/>.</summary>
    public const int BossDropLotRangeEnd = 1049301370;

    /// <summary>Stride between successive boss-drop bundle row ids. The
    /// source mod uses a stride of 10 (1049301000, 1049301010, ...,
    /// 1049301370 = 38 rows). A row that exists in the range but isn't on
    /// this stride is left untouched — we only zero rows we know are
    /// bundle lots.</summary>
    public const int BossDropLotRangeStride = 10;

    /// <summary>Count of boss-drop bundle rows we expect to zero on a
    /// clean run: <c>(End - Begin) / Stride + 1</c> = 38. Used as an
    /// invariant assertion in the patcher so a future range-drift bug
    /// fails loud rather than silently zeroing fewer rows.</summary>
    public const int BossDropLotExpectedRowCount = 38;

    /// <summary>
    /// ItemLot row slot count. Elden Ring's ItemLotParam stores 8 reward
    /// slots per row (slots 01..08), each with its own id/category/weight/
    /// count quadruple. Zeroing a row means zeroing all 8 slot quadruples
    /// plus the row-level <c>getItemFlagId</c>.
    /// </summary>
    public const int ItemLotSlotCount = 8;

    /// <summary>ItemLotParam per-slot field name prefixes. Each prefix is
    /// suffixed with a 2-digit 1-based slot index (<c>01</c>..<c>08</c>) to
    /// form the full <c>InternalName</c>. The patcher loops these across
    /// all 8 slots when zeroing a row.</summary>
    public static readonly IReadOnlyList<string> ItemLotSlotFieldPrefixes = new[]
    {
        "lotItemId",
        "lotItemCategory",
        "lotItemBasePoint",
        "lotItemNum",
    };

    /// <summary>
    /// Deterministic ShopLineupParam row id for a given tier + slot index.
    /// </summary>
    public static int ShopLineupRowId(int tier, int slotIndex)
    {
        if (tier < TierClearConstants.FirstTier || tier > TierClearConstants.LastTier)
            throw new ArgumentOutOfRangeException(nameof(tier),
                $"tier must be in [{TierClearConstants.FirstTier}, {TierClearConstants.LastTier}], got {tier}");
        if (slotIndex < 0 || slotIndex >= ShopSlotsPerTier)
            throw new ArgumentOutOfRangeException(nameof(slotIndex),
                $"slotIndex must be in [0, {ShopSlotsPerTier}), got {slotIndex}");
        return ShopLineupRowBase + tier * ShopLineupTierStride + slotIndex;
    }

    /// <summary>
    /// Deterministic ItemLotParam_map row id for a given tier.
    /// </summary>
    public static int ShardAwardLotId(int tier)
    {
        if (tier < TierClearConstants.FirstTier || tier > TierClearConstants.LastTier)
            throw new ArgumentOutOfRangeException(nameof(tier),
                $"tier must be in [{TierClearConstants.FirstTier}, {TierClearConstants.LastTier}], got {tier}");
        return ShardAwardItemLotBase + tier;
    }
}
