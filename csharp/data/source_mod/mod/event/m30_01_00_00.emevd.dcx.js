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
    $InitializeCommonEvent(0, 90005646, 30010800, 30012840, 30012841, 30011840, 30012840, 30, 1, 0, 0);
    RegisterBonfire(73001, 30011950, 0, 0, 0, 5);
    $InitializeEvent(0, 30012800);
    $InitializeEvent(0, 30012810);
    $InitializeEvent(0, 30012849);
    $InitializeEvent(0, 30012811);
    $InitializeCommonEvent(0, 90005211, 30010810, 30010, 20010, 30012800, 1, 2.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010811, 30010, 20010, 30012800, 1, 2.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010812, 30010, 20010, 30012800, 1, 2.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010813, 30010, 20010, 30012800, 1, 2.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005920, 30010520, 30011520, 30013520);
    $InitializeCommonEvent(0, 90005650, 30010540, 30011540, 30011541, 30013541, 27115);
    $InitializeCommonEvent(0, 90005651, 30010540, 30011540);
    $InitializeEvent(0, 30012505);
    $InitializeEvent(0, 30012506);
    $InitializeCommonEvent(0, 90005670, 30012500, 30012510, 30012511, 30011500, 30012500, 30012502, 0);
    $InitializeEvent(0, 30012520);
    $InitializeEvent(0, 30012580);
    $InitializeEvent(0, 30010790, 30011520, 30010800);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005211, 30010200, 30004, 20004, 30012200, 0, 0.8, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010201, 30002, 20002, 30012201, 1, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010203, 30002, 20002, 30012203, 1, 2.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010204, 30000, 20000, 30012204, 1, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010205, 30000, 20000, 30012205, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010207, 30009, 20009, 30012207, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010209, 30009, 20009, 30012209, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010321, 30000, 20000, 30012315, 5, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30010301, 30000, 20000, 30012312, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30010302, 30000, 20000, 30012312, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30010304, 30000, 20000, 30012312, 0.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30010305, 30000, 20000, 30012312, 0.4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010303, 30000, 20000, 30012322, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010306, 30000, 20000, 30012322, 5, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010312, 30000, 20000, 30012322, 5, 0.9, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010308, 30000, 20000, 30012322, 5, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010307, 30000, 20000, 30012322, 5, 2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010309, 30000, 20000, 30012322, 5, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010310, 30000, 20000, 30012322, 5, 3.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30010311, 30000, 20000, 30012322, 5, 3.9, 0, 0, 0, 0);
});

// 腐った亡者_無限湧き_XX -- Rotten Dead_Infinite Spring_XX
$Event(30012330, Restart, function(chrEntityId, generatorEntityId) {
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 30012301)
            && !CharacterDead(chrEntityId));
    InvokeEnemyGenerator(generatorEntityId);
    RestartEvent();
});

// [小探索_墓3]バディユニーク_思考ロジック有効化_領域／距離判定 -- [Small Exploration_Grave 3] Buddy Unique_Thought Logic Activation_Area/Distance Judgment
$Event(30012910, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaChrSp = area && chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260));
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        EnableCharacter(chrEntityId);
        EnableCharacterCollision(chrEntityId);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    WaitFixedTimeSeconds(0.3);
    WarpCharacterAndCopyFloor(30010800, TargetEntityType.Area, 30012901, -1, 30010800);
    EnableCharacterAI(chrEntityId);
});

// [小探索_墓3]トラップエレベータ -- [Small exploration_grave 3] Trap elevator
$Event(30012500, Default, function() {
    if (!EventFlag(30010500)) {
        chrArea &= (CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 30012500);
        WaitFor(chrArea);
        ForceAnimationPlayback(30011500, 12, false, true, false);
    }
L0:
    chrArea &= !AllPlayersInArea(30012500);
    if (!chrArea) {
        SetEventFlagID(30010500, ON);
        ForceAnimationPlayback(30011500, 20, false, true, false);
        RestartEvent();
    }
L1:
    SetEventFlagID(30010500, OFF);
    ForceAnimationPlayback(30011500, 21, false, true, false);
    RestartEvent();
});

// [小探索_墓3]針ダメージ -- [Small exploration_grave 3] Needle damage
$Event(30012505, Default, function() {
    WaitFor(EventFlag(30012510) && InArea(10000, 30012502) && CharacterHasSpEffect(10000, 4195));
    WarpAssetToCharacter(30011501, 10000, 93);
    WaitFixedTimeFrames(1);
    if (EventFlag(50)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301200, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(51)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301210, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(52)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301220, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(53)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301230, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(54)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301240, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(55)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301250, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(56)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301260, DamageTargetType.Character, 2, 0.1, 0);
    }
    if (EventFlag(57)) {
        CreateDamagingAsset(30013501, 30011501, 100, 801301270, DamageTargetType.Character, 2, 0.1, 0);
    }
    WaitFixedTimeFrames(1);
    DeleteAssetEvent(30013501);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// [小探索_墓3]針ダメージ_特殊効果付与 -- [Small exploration_grave 3] Needle damage_special effects added
$Event(30012506, Default, function() {
    WaitFor(EventFlag(30012510) && InArea(10000, 30012501));
    SetSpEffect(10000, 4195);
    WaitFixedTimeSeconds(0.5);
    RestartEvent();
});

// 針EVの非揮発フラグ立ちっぱなしになってたら折るイベント -- Event to fold if the needle EV non-volatile flag remains standing
$Event(30012520, End, function() {
    SetEventFlagID(30010500, OFF);
    EndEvent();
});

// 梯子登録 -- ladder registration
$Event(30012580, Default, function() {
    RegisterLadder(30010580, 30010581, 30011580);
});

// ボス部屋報酬宝箱の開放制限 -- Restrictions on opening boss room reward treasure chests
$Event(30010790, Restart, function(assetEntityId, eventFlagId) {
    EndIf(ThisEventSlot());
    DisableObjAct(assetEntityId, -1);
    if (EventFlag(eventFlagId)) {
        EnableObjAct(assetEntityId, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(eventFlagId) && !ThisEventSlot());
    SetThisEventSlot(ON);
    EnableObjAct(assetEntityId, -1);
    EndEvent();
});

//erdtree burial watchdog
$Event(30012800, Restart, function() {
    EndIf(!EventFlag(1049308111)); //end if boss not selected
    EndIf(EventFlag(30010800));
    WaitFor(CharacterHPValue(30010800) <= 0);
    ForceCharacterDeath(30015800, false);
    WaitFixedTimeSeconds(4);
    PlaySE(30010800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30010800));
    HandleBossDefeatAndDisplayBanner(30010800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304111, 1049304014, 1049304006, -1, 1049304447, 1049304448, 1049304449, 1049304450, -1, 1049304314, 1049304316, 1049304319, 1049300111);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307511);
});

// m30_01ボス出現 -- m30_01 boss appears
$Event(30012810, Restart, function() {
    if (EventFlag(30010800)) {
        DisableCharacter(30015800);
        DisableCharacterCollision(30015800);
        ForceCharacterDeath(30015800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30010800);
    WaitFor(EventFlag(30012805) && InArea(10000, 30012800));
L2:
    EnableCharacterAI(30010800);
    SetNetworkUpdateRate(30010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30010800, 0, 904260301);
});

// ボス激昂 -- boss rage
$Event(30012811, Restart, function() {
    EndIf(EventFlag(30010800));
    WaitFor(HPRatio(30010800) <= 0.6);
    SetEventFlagID(30012802, ON);
});

// m30_01_イベント起動 -- m30_01_Event activation
$Event(30012849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30010800, 30011800, 30012800, 30012805, 30015800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30010800, 30011800, 30012800, 30012805, 30012806, 10000);
    $InitializeCommonEvent(0, 9005811, 30010800, 30011800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30010800, 930000, 30012805, 30012806, 0, 30012802, 0, 0);
});

