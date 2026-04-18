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
    RegisterBonfire(310200, 31021950, 0, 0, 0, 5);
    $InitializeEvent(0, 31022800);
    $InitializeEvent(0, 31022810);
    $InitializeEvent(0, 31022811);
    $InitializeEvent(0, 31022849);
    $InitializeCommonEvent(0, 90005250, 31025800, 31022361, 0, 0);
    $InitializeCommonEvent(0, 900005610, 31021200, 100, 800, 0);
    $InitializeCommonEvent(0, 90005646, 31020800, 31022840, 31022841, 31021840, 31022840, 31, 2, 0, 0);
    $InitializeEvent(0, 31022900, 1580, 710580);
    $InitializeEvent(0, 31022901, 1690, 710690, 31020040);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 31020200, 31022200, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020201, 31022201, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020205, 31022205, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020206, 31022206, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020207, 31022206, 2, 0.5, 0);
    $InitializeCommonEvent(0, 90005261, 31020211, 31022200, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020212, 31022200, 2, 0, 0);
    $InitializeEvent(0, 31022211, 31020211);
    $InitializeEvent(1, 31022211, 31020212);
    $InitializeEvent(0, 31022223, 31020218, 30001, 20001, 31022218, 1, 0.8, 0, 0, 0, 0, 31020219, 31020220);
    $InitializeEvent(1, 31022223, 31020219, 30001, 20001, 31022218, 1, 0.5, 0, 0, 0, 0, 31020218, 31020220);
    $InitializeEvent(2, 31022223, 31020220, 30001, 20001, 31022218, 1, 0, 0, 0, 0, 0, 31020218, 31020219);
    $InitializeCommonEvent(0, 90005261, 31020250, 31022250, 2, 0, 0);
    $InitializeEvent(0, 31022255);
    $InitializeEvent(0, 31022256);
    $InitializeCommonEvent(0, 90005261, 31020251, 31022251, 2, 0, 0);
    $InitializeEvent(0, 31022250, 31020250);
    $InitializeEvent(0, 31022250, 31020260);
    $InitializeEvent(0, 31022250, 31020261);
    $InitializeCommonEvent(0, 90005261, 31020260, 31022260, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020261, 31022260, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020266, 31022266, 2, 0.3, 0);
    $InitializeEvent(0, 31022260, 31020250);
    $InitializeEvent(1, 31022260, 31020251);
    $InitializeEvent(2, 31022260, 31020260);
    $InitializeEvent(3, 31022260, 31020261);
    $InitializeEvent(4, 31022260, 31020262);
    $InitializeEvent(5, 31022260, 31020263);
    $InitializeEvent(6, 31022260, 31020264);
    $InitializeEvent(7, 31022260, 31020265);
    $InitializeEvent(8, 31022260, 31020266);
    $InitializeCommonEvent(0, 90005211, 31020301, 30000, 20000, 31022300, 2, 0, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31020302, 30000, 20000, 31022300, 2, 0.5, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31020303, 30000, 20000, 31022303, 2, 0, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31020304, 30000, 20000, 31022304, 2, 0, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020350, 31022350, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020351, 31022350, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020357, 31022357, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020358, 31022358, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31020359, 31022358, 2, 0, 0);
});

// 巡回信徒_索敵タイミング調整_XX -- Patrolling believer_enemy search timing adjustment_XX
$Event(31022211, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8081);
    SetSpEffect(chrEntityId, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31022212))
            || HasDamageType(31020211, 0, DamageType.Unspecified)
            || HasDamageType(31020212, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31020211, 436)
            || CharacterHasStateInfo(31020211, 2)
            || CharacterHasStateInfo(31020211, 5)
            || CharacterHasStateInfo(31020211, 6)
            || CharacterHasStateInfo(31020211, 260)
            || CharacterHasStateInfo(31020212, 436)
            || CharacterHasStateInfo(31020212, 2)
            || CharacterHasStateInfo(31020212, 5)
            || CharacterHasStateInfo(31020212, 6)
            || CharacterHasStateInfo(31020212, 260));
    ClearSpEffect(chrEntityId, 8081);
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

// 毒信徒_特殊待機_集団集中祈祷_XX -- Poison believers_Special standby_Group concentrated prayer_XX
$Event(31022223, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, timeSeconds, value, value2, value3, value4, chrEntityId2, entityId) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != areaEntityId) {
        area |= InArea(10000, areaEntityId);
    }
    area |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaChrSp &= area
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        areaChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || HasDamageType(chrEntityId2, 0, DamageType.Unspecified)
            || HasDamageType(entityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || CharacterHasStateInfo(chrEntityId2, 436)
            || CharacterHasStateInfo(chrEntityId2, 2)
            || CharacterHasStateInfo(chrEntityId2, 5)
            || CharacterHasStateInfo(chrEntityId2, 6)
            || CharacterHasStateInfo(chrEntityId2, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

// 犬ネズミ_大廻通路_突進止まらない用特殊効果_XX -- Dog Mouse_Omawari Passage_Special effects for charging and not stopping_XX
$Event(31022250, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8081);
    SetSpEffect(chrEntityId, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, chrEntityId, 7, 1))
            || HasDamageType(31020250, 0, DamageType.Unspecified)
            || HasDamageType(31020260, 0, DamageType.Unspecified)
            || HasDamageType(31020261, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31020250, 436)
            || CharacterHasStateInfo(31020250, 2)
            || CharacterHasStateInfo(31020250, 5)
            || CharacterHasStateInfo(31020250, 6)
            || CharacterHasStateInfo(31020250, 260));
    ClearSpEffect(chrEntityId, 8081);
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

// 追いつめ大ネズミ_思考ロジック有効化_PC奥まで行った判定 -- Chasing Big Mouse_Thought Logic Activation_Judgment of going deep into the PC
$Event(31022255, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31022255));
    SetNetworkconnectedThisEventSlot(ON);
});

// 追いつめ大ネズミ_思考ロジック有効化 -- Chasing Big Rat_Thought Logic Enabled
$Event(31022256, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(31020250);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, 31022250);
    chrSpAreaFlag = chrSp && InArea(10000, 31022256) && EventFlag(31022255);
    WaitFor(
        chrSpAreaFlag
            || chrSpArea
            || HasDamageType(31020250, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(31020250, 436)
            || CharacterHasStateInfo(31020250, 2)
            || CharacterHasStateInfo(31020250, 5)
            || CharacterHasStateInfo(31020250, 6)
            || CharacterHasStateInfo(31020250, 260)
            || (CharacterHasSpEffect(31020250, 481)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90110)
                && !CharacterHasSpEffect(31020250, 90160))
            || (CharacterHasSpEffect(31020250, 482)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90120)
                && !CharacterHasSpEffect(31020250, 90160)
                && !CharacterHasSpEffect(31020250, 90162))
            || (CharacterHasSpEffect(31020250, 483)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90140)
                && !CharacterHasSpEffect(31020250, 90160)
                && !CharacterHasSpEffect(31020250, 90161))
            || (CharacterHasSpEffect(31020250, 484)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90130)
                && !CharacterHasSpEffect(31020250, 90161)
                && !CharacterHasSpEffect(31020250, 90162))
            || (CharacterHasSpEffect(31020250, 487)
                && !CharacterHasSpEffect(31020250, 90100)
                && !CharacterHasSpEffect(31020250, 90150)
                && !CharacterHasSpEffect(31020250, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (chrSpAreaFlag.Passed) {
    }
L1:
    EnableCharacterAI(31020250);
});

// 犬ネズミに毒無効の特殊効果付与_XX -- Gives special effect of poison immunity to dogs and rats_XX
$Event(31022260, Restart, function(chrEntityId) {
    SetSpEffect(chrEntityId, 90000);
});

//miranda
$Event(31022800, Restart, function() {
    EndIf(!EventFlag(1049308136)); //end if boss not selected
    EndIf(EventFlag(31020800));
    WaitFor(CharacterHPValue(31020800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31020800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31020800));
    HandleBossDefeatAndDisplayBanner(31020800, TextBannerType.EnemyFelled);
    ForceCharacterDeath(31025800, false);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304112, 1049304089, 1049304012, -1, 1049304451, 1049304452, 1049304453, 1049304454, -1, 1049304323, 1049304326, 1049304328, 1049300112);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307536);
});

// ボス出現 -- Boss appears
$Event(31022810, Restart, function() {
    if (EventFlag(31020800)) {
        DisableCharacter(31020800);
        DisableCharacterCollision(31020800);
        ForceCharacterDeath(31025800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31020800);
    WaitFor(EventFlag(31022805) && InArea(10000, 31022800));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(31020801, ON);
    }
L2:
    EnableCharacterAI(31020800);
    SetNetworkUpdateRate(31020800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31020800, 0, 904480311);
});

// ボス激昂 -- boss rage
$Event(31022811, Restart, function() {
    EndIf(EventFlag(31020800));
    WaitFor(HPRatio(31020800) <= 0.6);
    SetEventFlagID(31022802, ON);
});

// ルーンを喰らう花_親株_イベント起動 -- Rune-eating flower_parent plant_event activation
$Event(31022849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31020800, 31021800, 31022800, 31022805, 31025800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31020800, 31021800, 31022800, 31022805, 31022806, 10000);
    $InitializeCommonEvent(0, 9005811, 31020800, 31021800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 31020800, 931000, 31022805, 31022806, 0, 31022802, 0, 0);
});

// チュートリアルメッセージ_壺系入手 -- Tutorial message_Obtaining pot type
$Event(31022900, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerHasItem(ItemType.Goods, 9500) && PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, false);
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(31022901, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2) && PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, false);
});

