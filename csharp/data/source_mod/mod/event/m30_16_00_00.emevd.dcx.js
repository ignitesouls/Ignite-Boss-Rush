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
    RegisterBonfire(301600, 30161950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 900005610, 30161200, 100, 800, 0);
    $InitializeEvent(0, 30162800);
    $InitializeEvent(0, 30162810);
    $InitializeEvent(0, 30162849);
    $InitializeEvent(0, 30162811);
    $InitializeCommonEvent(0, 90005200, 30160316, 30000, 20000, 30162316, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30160314, 30001, 20001, 30162242, 8, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 30162622);
    $InitializeCommonEvent(0, 90005250, 30160221, 30162221, 0, -1);
    $InitializeCommonEvent(0, 90005650, 30160540, 30161540, 30161541, 30163541, 27115);
    $InitializeCommonEvent(0, 90005651, 30160540, 30161540);
    $InitializeCommonEvent(0, 90005646, 30160800, 30162840, 30162841, 30161840, 30162840, 30, 16, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005200, 30160212, 30008, 20008, 30162212, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160230, 30010, 20010, 30162230, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160235, 30010, 20010, 30162230, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160216, 30008, 20008, 30162216, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30160211, 30162221, 0, 3006);
    $InitializeCommonEvent(0, 90005200, 30160204, 30002, 20002, 30162204, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30160205, 30162205, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160206, 30010, 20010, 30162206, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30160200, 30010, 20010, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30160201, 30010, 20010, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30160202, 30010, 20010, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30160203, 30010, 20010, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160308, 30003, 20003, 30162244, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160301, 30003, 20003, 30162301, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160300, 30003, 20003, 30162244, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160302, 30003, 20003, 30162302, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160304, 30003, 20003, 30162210, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160303, 30003, 20003, 30162210, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160213, 30008, 20008, 30162210, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160214, 30008, 20008, 30162210, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30160340, 30001, 20001, 30162210, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 30162602, 30160341, 30160340, 20001);
    $InitializeEvent(1, 30162602, 30160342, 30160341, 20001);
    $InitializeEvent(0, 30162621, 30165290);
});

// 敵ジェネレータ_PCが領域に入ったらジェネレータを起動_XX -- Enemy generator_Start the generator when the PC enters the area_XX
$Event(30162601, Restart, function(areaEntityId, generatorEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, areaEntityId)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    EnableGenerator(generatorEntityId);
    SetNetworkconnectedThisEventSlot(ON);
});

// キャラの生存状況を見て特殊待機解除する_XX -- Check the character's survival status and cancel special standby_XX
$Event(30162602, Restart, function(chrEntityId, chrEntityId2, animationId) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    DisableCharacter(chrEntityId);
    WaitFor(CharacterDead(chrEntityId2));
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
});

// PCが領域に入ったら特殊効果をかける_XX -- Apply special effects when the PC enters the area_XX
$Event(30162511, Restart, function(chrEntityId, spEffectId, areaEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, areaEntityId)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetSpEffect(chrEntityId, spEffectId);
});

// 窓口弓騎士振り向かう制御 -- Control of the counter bow knight turning around
$Event(30162622, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, 30162245)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    ChangeCharacterPatrolBehavior(30160314, 30163314);
});

// 交戦シチュエーショ制御_XX -- Engagement situation control_XX
$Event(30162621, Restart, function(chrEntityId) {
    EndIf(EventFlagState(ON, TargetEventFlagType.EventIDSlotNumber, 30162621));
    SetSpEffect(chrEntityId, 4802);
    SetSpEffect(chrEntityId, 4800);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(30160303, 10000, DamageType.Unspecified)
                || HasDamageType(30160304, 10000, DamageType.Unspecified)
                || HasDamageType(30160213, 10000, DamageType.Unspecified)
                || HasDamageType(30160214, 10000, DamageType.Unspecified)
                || HasDamageType(30160340, 10000, DamageType.Unspecified)
                || HasDamageType(30160341, 10000, DamageType.Unspecified)
                || HasDamageType(30160342, 10000, DamageType.Unspecified)
                || HasDamageType(30160303, 35000, DamageType.Unspecified)
                || HasDamageType(30160304, 35000, DamageType.Unspecified)
                || HasDamageType(30160213, 35000, DamageType.Unspecified)
                || HasDamageType(30160214, 35000, DamageType.Unspecified)
                || HasDamageType(30160340, 35000, DamageType.Unspecified)
                || HasDamageType(30160341, 35000, DamageType.Unspecified)
                || HasDamageType(30160342, 35000, DamageType.Unspecified)
                || CharacterHasStateInfo(chrEntityId, 436)
                || CharacterHasStateInfo(chrEntityId, 2)
                || CharacterHasStateInfo(chrEntityId, 5)
                || CharacterHasStateInfo(chrEntityId, 6)
                || CharacterHasStateInfo(chrEntityId, 260)
                || EntityInRadiusOfEntity(10000, chrEntityId, 5, 1)
                || EntityInRadiusOfEntity(35000, chrEntityId, 5, 1)));
    SetNetworkconnectedEventFlag(TargetEventFlagType.EventIDSlotNumber, 30162621, ON);
    ClearSpEffect(chrEntityId, 4800);
    SetSpEffect(chrEntityId, 4802);
    WaitFixedTimeSeconds(90);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea &= chrSp;
    if (chrSp && InArea(10000, 30162256)) {
        InvokeEnemyGenerator(30163256);
    }
    chrSpArea &= InArea(10000, 30162258);
    if (chrSpArea) {
        InvokeEnemyGenerator(30163258);
    }
    RestartEvent();
});

// 地下墓地_ボス部屋報酬宝箱の開放制限 -- Catacombs_Boss room reward treasure chest opening restrictions
$Event(30162520, Restart, function(eventFlagId, assetEntityId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    DisableObjAct(assetEntityId, -1);
    if (EventFlag(eventFlagId2)) {
        EnableObjAct(assetEntityId, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(eventFlagId2) && !EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    EnableObjAct(assetEntityId, -1);
});

//putrid tree spirit
$Event(30162800, Restart, function() {
    EndIf(!EventFlag(1049308128)); //end if boss not selected
    EndIf(EventFlag(30160800));
    WaitFor(CharacterHPValue(30160800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30160800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30160800));
    HandleBossDefeatAndDisplayBanner(30160800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304239, 1049304134, 1049304138, -1, 1049307024, 1049307025, 1049307026, 1049307027, 1049305831, 1049305833, 1049305835, 1049305837, 1049300239);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307528);
});

// ボス出現 -- Boss appears
$Event(30162810, Restart, function() {
    if (EventFlag(30160800)) {
        DisableCharacter(30160800);
        DisableCharacterCollision(30160800);
        ForceCharacterDeath(30160800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30160800);
    DisableCharacterHPBarDisplay(30160800);
    ForceAnimationPlayback(30160800, 30002, true, false, false);
    WaitFor(EventFlag(30162805) && InArea(10000, 30162800));
    ForceAnimationPlayback(30160800, 20002, false, false, false);
L2:
    EnableCharacterAI(30160800);
    SetNetworkUpdateRate(30160800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(4.3);
    DisplayBossHealthBar(Enabled, 30160800, 0, 904640300);
    SetNetworkconnectedEventFlagID(30162803, ON);
});

// ボス激昂 -- boss rage
$Event(30162811, Restart, function() {
    EndIf(EventFlag(30160800));
    WaitFor(HPRatio(30160800) <= 0.6);
    SetEventFlagID(30162802, ON);
});

// 蛇霊_赤腐敗_イベント起動 -- Snake spirit_red rot_event activation
$Event(30162849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30160800, 30161800, 30162800, 30162805, 30165800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30160800, 30161800, 30162800, 30162805, 30162806, 10000);
    $InitializeCommonEvent(0, 9005811, 30160800, 30161800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30160800, 920600, 30162805, 30162806, 30162803, 30162802, 0, 0);
});

// 地下迷宮奥地へのワープ -- Warp to the depths of the underground labyrinth
$Event(30162900, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(30160800));
    CreateAssetfollowingSFX(30161900, 90, 1300);
    WaitFor(ActionButtonInArea(9000, 30161900));
    WarpPlayer(12, 5, 0, 0, 12052900, 0);
});

