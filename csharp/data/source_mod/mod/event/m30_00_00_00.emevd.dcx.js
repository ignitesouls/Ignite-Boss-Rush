// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(73000, 30001950, 0, 0, 0, 5);
    $InitializeEvent(0, 30002800);
    $InitializeEvent(0, 30002810);
    $InitializeEvent(0, 30002829);
    $InitializeEvent(0, 30002811);
    $InitializeCommonEvent(0, 90005550, 30000620, 30001620, 30003620);
    $InitializeCommonEvent(0, 90005550, 30000621, 30001621, 30003621);
    $InitializeCommonEvent(0, 90005550, 30000622, 30001622, 30003622);
    $InitializeCommonEvent(0, 90005550, 30000623, 30001623, 30003623);
    $InitializeCommonEvent(0, 90005650, 30000540, 30001540, 30001541, 30003541, 27115);
    $InitializeCommonEvent(0, 90005651, 30000540, 30001540);
    $InitializeCommonEvent(0, 90005680, 30000500, 30000501, 30000502, 30000503, 30001500);
    $InitializeEvent(0, 30002510);
    $InitializeCommonEvent(0, 90005620, 30000570, 30001570, 30001571, 0, 30002571, 30002572, 30002573);
    $InitializeCommonEvent(0, 90005621, 30000570, 30001573);
    $InitializeCommonEvent(0, 90005646, 30000800, 30002840, 30002841, 30001840, 30002840, 30, 0, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 30000050);
    $InitializeCommonEvent(0, 90005211, 30000200, 30003, 20003, 30002200, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000201, 30003, 20003, 30002201, 1, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30000204, 30003, 20003, 8, 0, 0, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000205, 30003, 20003, 30002205, 1, 0.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000206, 30003, 20003, 30002205, 1, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000207, 30003, 20003, 30002207, 1, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000208, 30003, 20003, 30002207, 1, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30000211, 30003, 20003, 5, 0, 0, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000212, 30003, 20003, 30002212, 1, 0.9, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000213, 30003, 20003, 30002215, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30000214, 30003, 20003, 3, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000215, 30003, 20003, 30002215, 1, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000216, 30003, 20003, 30002215, 1, 1.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000217, 30003, 20003, 30002215, 1, 1.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30000218, 30003, 20003, 30002215, 1, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30000223, 30003, 20003, 30002223, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30000224, 30003, 20003, 30002223, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30000225, 30003, 20003, 3, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005251, 30000226, 3, 0, 0);
});

// m30_00_00_00用初期フラグ設定 -- Initial flag setting for m30_00_00_00
$Event(30000050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30000500, ON);
});

// 火吹き像エレベータ_移動 -- Fire-breathing statue elevator_move
$Event(30002500, Default, function() {
    if (!ThisEventSlot()) {
        ReproduceAssetAnimation(30001500, 12);
    }
    if (!EventFlag(30000500)) {
        WaitFor(!EventFlag(30000500) && HasDamageType(30001500, 20000, DamageType.Unspecified));
        ForceAnimationPlayback(30001500, 12, false, true, false);
        SetEventFlagID(30000500, ON);
        RestartEvent();
    }
L0:
    WaitFor(EventFlag(30000500) && HasDamageType(30001500, 20000, DamageType.Unspecified));
    SetEventFlagID(30000500, OFF);
    ForceAnimationPlayback(30001500, 21, false, true, false);
    RestartEvent();
});

// 消費鍵のガーゴイル像B_会話 -- Consumption key gargoyle statue B_Conversation
$Event(30009570, Restart, function(eventFlagId, chrEntityId, eventFlagId2, eventFlagId3, timeSeconds) {
    EndIf(EventFlag(eventFlagId) || !PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId2, OFF);
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(ActionButtonInArea(9220, chrEntityId));
    DisplayGenericDialogAndSetEventFlags(108000, PromptType.YESNO, NumberofOptions.TwoButtons, chrEntityId, 3, eventFlagId2, eventFlagId3, eventFlagId3);
    if (!EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    if (!PlayerHasItem(ItemType.Goods, 8000)) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.4);
        DisplayGenericDialog(308000, PromptType.OKCANCEL, NumberofOptions.NoButtons, chrEntityId, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, chrEntityId, 191);
    RotateCharacter(10000, chrEntityId, 60010, false);
    WaitFixedTimeSeconds(timeSeconds);
    DisplayGenericDialog(208000, PromptType.OKCANCEL, NumberofOptions.NoButtons, chrEntityId, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8000, 1);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

// 消費鍵のガーゴイル像B_壁制御 -- Gargoyle statue of consumption key B_Wall control
$Event(30002570, Restart, function(eventFlagId, assetEntityId, assetEntityId2, assetEntityId3) {
    EndIf(EventFlag(30002570));
    DeleteAssetfollowingSFX(assetEntityId, true);
    DeleteAssetfollowingSFX(assetEntityId2, true);
    DisableAsset(assetEntityId3);
    CreateAssetfollowingSFX(assetEntityId, 200, 806040);
    CreateAssetfollowingSFX(assetEntityId2, 101, 806041);
    WaitFor(EventFlag(eventFlagId));
    DeleteAssetfollowingSFX(assetEntityId2, false);
    WaitFixedTimeSeconds(2);
    DisableAsset(assetEntityId2);
    DisableAsset(30001572);
    EnableAsset(assetEntityId3);
    DeleteAssetfollowingSFX(assetEntityId, true);
    DeleteAssetfollowingSFX(assetEntityId2, false);
});

// 英雄の墓_火吹き像_火炎処理_緑後半 -- Hero's Tomb_Fire-breathing statue_Flame treatment_Late green
$Event(30002610, Default, function(eventFlagId, entityId, areaEntityId, chrEntityId, behaviorId, behaviorId2, dummypolyId, dummypolyId2, dummypolyId3, dummypolyId4) {
    flagArea &= EventFlag(eventFlagId);
    if (areaEntityId != 0) {
        flagArea &= InArea(10000, areaEntityId);
    }
    WaitFor(flagArea);
    CreateBulletOwner(chrEntityId);
    if (Signed(dummypolyId) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId, 801101200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId, 801101205, 0, 0, 0);
        }
    }
L1:
    if (Signed(dummypolyId2) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId2, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId2, 801101200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId2, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId2, 801101205, 0, 0, 0);
        }
    }
L2:
    if (Signed(dummypolyId3) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId3, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId3, 801101200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId3, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId3, 801101205, 0, 0, 0);
        }
    }
L3:
    if (Signed(dummypolyId4) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId4, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId4, 801101200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId4, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId4, 801101205, 0, 0, 0);
        }
    }
L4:
    WaitFixedTimeSeconds(7.2);
    RestartEvent();
});

// 火吹き像エレベータ_ブレス -- Fire-breathing statue elevator_breath
$Event(30002611, Default, function() {
    WaitFor(EventFlag(30000500) && InArea(10000, 30002500));
    CreateBulletOwner(30000500);
    ShootBullet(30000500, 30001500, 100, 101100, 0, 0, 0);
    ShootBullet(30000500, 30001500, 100, 101102, 0, 0, 0);
    ShootBullet(30000500, 30001500, 101, 101100, 0, 0, 0);
    ShootBullet(30000500, 30001500, 101, 101102, 0, 0, 0);
    WaitFixedTimeSeconds(6);
    RestartEvent();
});

// エレベータイベント起動 -- Elevator event activation
$Event(30002510, Default, function() {
    $InitializeCommonEvent(0, 90005681, 30000500, 30000501, 30000502, 30000503, 30001500);
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101270, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101260, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101250, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101240, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101230, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101220, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101210, 801101205, 100, 101, 0, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005682, 30000502, 30001500, 30002500, 30000500, 801101200, 801101205, 100, 101, 0, 0);
    }
});

//cemetery shade
$Event(30002800, Restart, function() {
    EndIf(!EventFlag(1049308110)); //end if boss not selected
    EndIf(EventFlag(30000800));
    WaitFor(CharacterHPValue(30000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30008000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30000800));
    HandleBossDefeatAndDisplayBanner(30000800, TextBannerType.EnemyFelled);
    //boss reward (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304110, 1049304010, -1, 1049304008, 1049304442, 1049304443, 1049304444, 1049304445, 1049304446, -1, 1049304303, 1049304305, 1049304308, 1049304310, 1049300110);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307510);
});

// m30_00ボス出現 -- m30_00 boss appears
$Event(30002810, Restart, function() {
    if (EventFlag(30000800)) {
        DisableCharacter(30005800);
        DisableCharacterCollision(30005800);
        ForceCharacterDeath(30005800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30005800);
    WaitFor(EventFlag(30002805) && InArea(10000, 30002800));
    EnableCharacterAI(30005800);
    SetNetworkUpdateRate(30005800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30000800, 0, 903664300);
});

// m30_00ボス激昂 -- m30_00Boss rage
$Event(30002811, Restart, function() {
    EndIf(EventFlag(30000800));
    WaitFor(HPRatio(30000800) <= 0.6);
    SetEventFlagID(30002802, ON);
});

// m30_00ボスイベント起動 -- m30_00 boss event activated
$Event(30002829, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30000800, 30001800, 30002800, 30002805, 30005800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30000800, 30001800, 30002800, 30002805, 30002806, 10000);
    $InitializeCommonEvent(0, 9005811, 30000800, 30001800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30000800, 930000, 30002805, 30002806, 0, 30002802, 0, 0);
});

