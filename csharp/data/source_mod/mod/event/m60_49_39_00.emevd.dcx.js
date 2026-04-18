// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(1049390000, 1049391950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76418, 76414, 1049391980, 77400, 7, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    $InitializeCommonEvent(0, 9005810, 1049390800, 1049390001, 1049390951, 1049391951, 5);
    RegisterBonfire(1049390002, 1049391952, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76418, 76416, 1049391982, 77400, 6, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    $InitializeEvent(0, 1049392210);
    $InitializeEvent(0, 1049392211, 1049391200, 19);
    $InitializeEvent(1, 1049392211, 1049391201, 12);
    $InitializeEvent(2, 1049392211, 1049391202, 5);
    $InitializeEvent(3, 1049392211, 1049391203, 18);
    $InitializeEvent(4, 1049392211, 1049391204, 11);
    $InitializeEvent(5, 1049392211, 1049391205, 4);
    $InitializeEvent(7, 1049392211, 1049391207, 17);
    $InitializeEvent(8, 1049392211, 1049391208, 10);
    $InitializeEvent(10, 1049392211, 1049391210, 3);
    $InitializeEvent(12, 1049392211, 1049391212, 16);
    $InitializeEvent(13, 1049392211, 1049391213, 9);
    $InitializeEvent(14, 1049392211, 1049391214, 2);
    $InitializeEvent(15, 1049392211, 1049391215, 1);
    $InitializeEvent(16, 1049392211, 1049391216, 14);
    $InitializeEvent(17, 1049392211, 1049391217, 7);
    $InitializeEvent(0, 1049392580, 49390580, 49390851, 1049391580);
    $InitializeEvent(1, 1049392580, 49390582, 49390853, 1049391582);
    $InitializeEvent(0, 1049392300);
    $InitializeEvent(1, 1049392301);
    $InitializeEvent(1, 1049392302, 1049391601, 1049390201);
    $InitializeEvent(0, 1049392303, 1049391600, 1049390200);
    $InitializeEvent(0, 1049392849);
    $InitializeEvent(0, 1049390800);
    $InitializeEvent(0, 1049392810);
    $InitializeCommonEvent(0, 9005811, 1049390800, 1049391801, 3, 0);
    if (EventFlag(1049308103)) { //if boss selected (hugues)
        $InitializeCommonEvent(0, 90005880, 1049390850, 1049390855, 1049392850, 1049390850, 1049390850, 60, 49, 39, 0, 1049392855);
        $InitializeCommonEvent(0, 90005881, 1049390850, 1049390855, 1049392851, 1049392852, 20300, 1049391855, 60, 49, 39, 0, 1049392855);
        $InitializeCommonEvent(0, 90005882, 1049390850, 1049390855, 1049392850, 1049390850, 1049392856, 1049395860, 1049391850, 1049390860, 1049392860, 903704520, -1, 20004);
        $InitializeCommonEvent(0, 90005883, 1049390850, 1049390855, 1049391855);
        $InitializeCommonEvent(0, 90005885, 1049390850, 0, 1049392856, 1049392857, 0, 1);
    }
    $InitializeCommonEvent(0, 90005251, 1049390200, 17, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1049390204, 8, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1049390208, 17, 0, -1);
    $InitializeEvent(0, 1049392200, 1049390200, 14809);
    $InitializeEvent(1, 1049392200, 1049390201, 14807);
    $InitializeEvent(2, 1049392200, 1049390202, 14809);
    $InitializeEvent(3, 1049392200, 1049390309, 10113);
    $InitializeEvent(4, 1049392200, 1049390204, 14807);
    $InitializeEvent(5, 1049392200, 1049390205, 14809);
    $InitializeEvent(7, 1049392200, 1049390207, 14808);
    $InitializeEvent(9, 1049392200, 1049390208, 14809);
    $InitializeCommonEvent(0, 90005201, 1049390296, 30000, 20000, 20, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 1049392350, 1049390299, 12603, 1049392299, 1049392298, 1049392297);
    $InitializeCommonEvent(0, 90005300, 1049390299, 1049390299, 40418, 0, 0);
    $InitializeCommonEvent(0, 90005300, 1049390298, 1049390298, 40416, 0, 0);
    $InitializeEvent(0, 1049392201, 1049390308, 10113, 3, 5);
    $InitializeEvent(2, 1049392201, 1049390310, 10113, 6, 2);
    $InitializeEvent(3, 1049392201, 1049390203, 10113, 9, 3);
    $InitializeCommonEvent(0, 90005250, 1049390405, 1049392405, 0, -1);
});

// 距離で現消する -- disappear with distance
$Event(1049392200, Restart, function(chrEntityId, spEffectId) {
    DisableNetworkSync();
    SetSpEffect(chrEntityId, spEffectId);
});

// 距離で現消する_ループ -- Disappearing with distance_loop
$Event(1049392201, Restart, function(chrEntityId, spEffectId, timeSeconds, timeSeconds2) {
    DisableNetworkSync();
    SetSpEffect(chrEntityId, spEffectId);
    WaitFixedTimeSeconds(timeSeconds2);
    ClearSpEffect(chrEntityId, spEffectId);
    WaitFixedTimeSeconds(timeSeconds);
    RestartEvent();
});

// 間欠泉_弾丸オーナー作成 -- Geyser_Bullet owner created
$Event(1049392210, Restart, function() {
    CreateBulletOwner(1049390297);
});

// 間欠泉_XX -- Geyser_XX
$Event(1049392211, Restart, function(entityId, timeSeconds) {
    EnableNetworkSync();
    WaitFixedTimeSeconds(8);
    WaitFor(EntityInRadiusOfEntity(10000, entityId, 70, 1));
    WaitFixedTimeSeconds(timeSeconds);
    if (GameCycle() == 0) {
        ShootBullet(1049390297, entityId, -1, 802700000, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1049390297, entityId, -1, 802700010, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1049390297, entityId, -1, 802700020, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1049390297, entityId, -1, 802700030, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1049390297, entityId, -1, 802700040, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1049390297, entityId, -1, 802700050, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1049390297, entityId, -1, 802700060, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1049390297, entityId, -1, 802700070, 0, 0, 0);
        Goto(L0);
    }
L0:
    RestartEvent();
});

// 魔法封印設置_小_XX -- Magic seal installation_small_XX
$Event(1049392300, Default, function() {
    EnableNetworkSync();
});

// 魔法封印設置_大_XX -- Magic seal installation_large_XX
$Event(1049392301, Default, function() {
    EnableNetworkSync();
});

// 焚火を起動_大用_XX -- Start a bonfire_important_XX
$Event(1049392302, Default, function(entityId, eventFlagId) {
    EnableNetworkSync();
    if (!EventFlag(eventFlagId)) {
        WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9520, entityId));
        RotateCharacter(10000, entityId, -1, true);
        ForceAnimationPlayback(10000, 60010, false, false, false);
        WaitFixedTimeSeconds(1.3);
        SetEventFlagID(eventFlagId, ON);
        DisplayGenericDialog(30000, PromptType.OKCANCEL, NumberofOptions.NoButtons, entityId, 3);
    }
L0:
    EndEvent();
});

// 焚火を起動_小用_XX -- Start a bonfire_Small_XX
$Event(1049392303, Default, function(entityId, eventFlagId) {
    EnableNetworkSync();
    if (!EventFlag(eventFlagId)) {
        WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9520, entityId));
        RotateCharacter(10000, entityId, -1, true);
        ForceAnimationPlayback(10000, 60010, false, false, false);
        WaitFixedTimeSeconds(1.3);
        SetEventFlagID(eventFlagId, ON);
        SetEventFlagID(1050390200, ON);
        DisplayGenericDialog(30000, PromptType.OKCANCEL, NumberofOptions.NoButtons, entityId, 3);
    }
L0:
    EndEvent();
});

// スカラベ_メタル個体ミニゲーム_イベント -- Scarab_Metal Individual Mini Game_Event
$Event(1049392350, Default, function(chrEntityId, spEffectId, areaEntityId, areaEntityId2, areaEntityId3) {
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1049392201, 1049392202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(chrEntityId, areaEntityId));
    GotoIf(L2, InArea(chrEntityId, areaEntityId2));
    GotoIf(L3, InArea(chrEntityId, areaEntityId3));
L1:
    GotoIf(S0, EventFlag(1049392201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId2, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId3, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1049392201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId3, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1049392201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId2, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ハシゴ登録：町_XX -- Ladder registration: Town_XX
$Event(1049392580, Default, function(eventFlagId, eventFlagId2, assetEntityId) {
    RegisterLadder(eventFlagId, eventFlagId2, assetEntityId);
});

//nox duo
$Event(1049390800, Restart, function() {
    EndIf(!EventFlag(1049308059)); //end if boss not selected
    EndIf(EventFlag(1049390800));
    WaitFor(CharacterHPValue(1049390800) <= 0 && CharacterHPValue(1049390801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1049390800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1049390800));
    HandleBossDefeatAndDisplayBanner(1049390800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304153, 1049304058, -1, -1, 1049304635, 1049304636, 1049304637, 1049304638, -1, 1049304809, 1049304811, 1049304816, 1049300153);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307459);
});

// ボス出現 -- Boss appears
$Event(1049392810, Restart, function() {
    if (EventFlag(1049390800)) {
        DisableCharacter(1049390800);
        DisableCharacterCollision(1049390800);
        ForceCharacterDeath(1049390800, false);
        DisableCharacter(1049390801);
        DisableCharacterCollision(1049390801);
        ForceCharacterDeath(1049390801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(1049390800);
    DisableCharacterAI(1049390801);
    WaitFor(EventFlag(1049392805) && InArea(10000, 1049392800) && EventFlag(1049392805));
    EnableCharacterAI(1049390800);
    EnableCharacterAI(1049390801);
    SetNetworkUpdateRate(1049390800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(1049390801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1049390800, 0, 903300560);
    DisplayBossHealthBar(Enabled, 1049390801, 1, 903300561);
});

// ボス_イベント起動 -- Boss_event activation
$Event(1049392849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 1049390800, 1049391800, 1049392800, 1049392805, 1049395800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 1049390800, 1049391800, 1049392800, 1049392805, 1049392806, 10000);
    $InitializeCommonEvent(0, 9005811, 1049390800, 1049391800, 4, 0);
    $InitializeCommonEvent(0, 9005822, 1049390800, 920900, 1049392805, 1049392806, 0, 1049392802, 0, 0);
});
