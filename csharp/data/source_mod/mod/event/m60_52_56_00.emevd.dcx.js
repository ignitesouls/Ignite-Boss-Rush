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
    RegisterBonfire(1052560000, 1052561950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76510, 76520, 1052561980, 77500, 5, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    if (EventFlag(1049308088)) { //if boss selected (erdtree avatar)
        $InitializeCommonEvent(0, 90005860, 1052560800, 0, 1052560800, 0, 30525, 0);
        $InitializeEvent(0, 1052562815, 1052560800, 904810601, 18);
        $InitializeCommonEvent(0, 90005872, 1052560800, 18, 0);
        $InitializeCommonEvent(0, 90005211, 1052560800, 30000, 20000, 1052562800, 5, 0, 0, 0, 0, 0);
    }
    $InitializeCommonEvent(0, 90005211, 1052560211, 30001, 20001, 0, 0, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 1052562820);
    $InitializeEvent(0, 1052562821);
    $InitializeEvent(0, 1052562830, 1052560801, 30001, 20020, 0, 0, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005771, 1052560950, 1052562700);
});

// 世界樹のデーモン__ボスイベント_フィールドボスHPゲージ -- World Tree Demon_Boss Event_Field Boss HP Gauge
$Event(1052562815, Default, function(chrEntityId, nameId, npcThreatLevel) {
    DisableNetworkSync();
    WaitFor(
        (CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(npcThreatLevel));
    GotoIf(L0, !EventFlag(9290));
    GotoIf(L1, !EventFlag(9291));
    WaitFixedTimeSeconds(5);
    RestartEvent();
L0:
    SetEventFlagID(9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 1052560803, 0, nameId);
    WaitFor(
        !((CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(npcThreatLevel))
            || CharacterDead(chrEntityId)
            || EventFlag(9000));
    if (CharacterDead(chrEntityId)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, 1052560803, 0, nameId);
    SetEventFlagID(9290, OFF);
    RestartEvent();
L1:
    SetEventFlagID(9291, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 1052560803, 1, nameId);
    WaitFor(
        !((CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(1052560801, AIStateType.Combat))
            && FieldBattleBGMActive(npcThreatLevel))
            || CharacterDead(chrEntityId)
            || EventFlag(9000));
    if (CharacterDead(chrEntityId)) {
        WaitFixedTimeSeconds(3);
    } else if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, 1052560803, 1, nameId);
    SetEventFlagID(9291, OFF);
    RestartEvent();
});

// 世界樹のデーモン_ボスイベント_出現 -- World Tree Demon_Boss Event_Appearance
$Event(1052562820, Restart, function() {
    SetSpEffect(1052560800, 17320);
    SetSpEffect(1052560801, 17321);
    SetSpEffect(1052560802, 17322);
    DisableCharacterHPBarDisplay(1052560800);
    DisableCharacterHPBarDisplay(1052560801);
    DisableCharacterHPBarDisplay(1052560802);
    DisableCharacterHPBarDisplay(1052560803);
    DisableCharacterGravity(1052560803);
    DisableCharacterCollision(1052560803);
    CreateReferredDamagePair(1052560800, 1052560803);
    CreateReferredDamagePair(1052560801, 1052560803);
    CreateReferredDamagePair(1052560802, 1052560803);
});

// 世界樹のデーモン_ボスイベント_撃破 -- World Tree Demon_Boss Event_Defeated
$Event(1052562821, Restart, function() {
    if (EventFlag(1052560800)) {
        DisableCharacterCollision(1052560800);
        DisableCharacterCollision(1052560801);
        DisableCharacterCollision(1052560802);
        DisableCharacterCollision(1052560803);
        ForceCharacterDeath(1052560800, false);
        ForceCharacterDeath(1052560801, false);
        ForceCharacterDeath(1052560802, false);
        ForceCharacterDeath(1052560803, false);
        EndEvent();
    }
L0:
    WaitFor(
        CharacterHPValue(1052560800) == 0
            || CharacterHPValue(1052560801) == 0
            || CharacterHPValue(1052560802) == 0
            || CharacterHPValue(1052560803) == 0);
    ForceCharacterDeath(1052560800, false);
    ForceCharacterDeath(1052560801, false);
    ForceCharacterDeath(1052560802, false);
    ForceCharacterDeath(1052560803, false);
});

// 世界樹のデーモン_ボスイベント_召喚 -- World Tree Demon_Boss Event_Summon
$Event(1052562830, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, timeSeconds, timeSeconds2, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != areaEntityId) {
        areaSp |= InArea(10000, areaEntityId);
    }
    areaSp |= CharacterHasSpEffect(1052560800, 17325) || CharacterHasSpEffect(1052560801, 17326);
    areaSpChr &= areaSp
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
        areaSpChr &= chr;
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
    areaSpChr &= chrSp;
    WaitFor(
        areaSpChr
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        SetSpecialStandbyEndedFlag(chrEntityId, ON);
        WaitFixedTimeSeconds(timeSeconds2);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        EnableCharacterAI(chrEntityId);
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Character, 1052560800, 900, 1052560800);
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        WaitFixedTimeSeconds(5);
        SetSpEffect(1052560800, 17327);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    WaitFixedTimeSeconds(5);
    SetSpEffect(1052560800, 17327);
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
});
