// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 90005301, 2048380800, 2048380800, 2048380020, 5, 0);
    $InitializeEvent(0, 2048382806);
    $InitializeEvent(0, 2048382809, 2048380800, 2048383800, 2048383801, 2048383802, 15300, 15310, 15311, 15312);
    $InitializeEvent(0, 2048382801, 2048380800, 2048382810, 15310, 2048380800);
    $InitializeEvent(1, 2048382801, 2048380800, 2048382811, 15311, 2048380800);
    $InitializeEvent(2, 2048382801, 2048380800, 2048382812, 15312, 2048380800);
    $InitializeEvent(0, 2048382800, 2048380800, 2048380800, 15302, 15310, 15311, 15312, 2048382800, 2048382801, 2048382802);
    $InitializeEvent(0, 2048382808, 2048380800, 2048380800, 2048385200);
    $InitializeEvent(0, 2048382810, 2048380810);
    $InitializeEvent(1, 2048382810, 2048380811);
    $InitializeEvent(2, 2048382810, 2048380812);
    if (EventFlag(1049308188)) { //if boss selected (ghostflame dragon)
        $InitializeEvent(0, 2048382870, 2048380850, 30005, 20005, 2048382850, 2048380870, 0, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90005870, 2048380850, 905860601, 22);
        $InitializeCommonEvent(0, 90005860, 2048380850, 0, 2048380850, 1, 30840, 0);
    }
    $InitializeEvent(0, 2048382865);
    $InitializeEvent(0, 2048382871);
    $InitializeEvent(0, 2048382866, 2048380851, 5032, 2048380850);
    $InitializeEvent(1, 2048382866, 2048380852, 5026, 2048380850);
    $InitializeEvent(3, 2048382866, 2048380854, 5026, 2048380850);
    $InitializeEvent(6, 2048382866, 2048380857, 5029, 2048380850);
    $InitializeEvent(5, 2048382866, 2048380856, 5032, 2048380850);
    $InitializeEvent(4, 2048382866, 2048380855, 5033, 2048380850);
    $InitializeEvent(2, 2048382866, 2048380853, 5034, 2048380850);
    $InitializeEvent(7, 2048382866, 2048380858, 5030, 2048380850);
    $InitializeEvent(8, 2048382866, 2048380859, 5028, 2048380850);
    $InitializeEvent(0, 2048382351, 2048385860);
    $InitializeCommonEvent(0, 90005211, 2048380306, 30016, 20016, 2048382300, 0, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2048380307, 30016, 20016, 2048382300, 0, 2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2048380308, 30016, 20016, 2048382300, 0, 4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005780, 2048380850, 2048382160, 2048382161, 2048380700, SummonSignType.NPCWhiteSign, 2048382701, 0, false, 0); //enable summon visibility
    $InitializeCommonEvent(0, 90005781, 2048380850, 2048382160, 2048382161, 2048380700);
    $InitializeCommonEvent(0, 90005783, 2048380850, 2048382160, 2048382161, 2048380700, 2048382701, 2048382400, 1);
});

$Event(2048382800, Restart, function(chrEntityId, eventFlagId, spEffectId, spEffectId2, spEffectId3, spEffectId4, chrEntityId2, chrEntityId3, chrEntityId4) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    GotoIf(L1, CharacterHasSpEffect(chrEntityId, spEffectId2));
    GotoIf(L2, CharacterHasSpEffect(chrEntityId, spEffectId3));
    GotoIf(L3, CharacterHasSpEffect(chrEntityId, spEffectId4));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
    Goto(L0);
L1:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId3, -1, chrEntityId);
    Goto(L0);
L2:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId4, -1, chrEntityId);
    Goto(L0);
L3:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId3, -1, chrEntityId);
    Goto(L0);
L0:
    ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

$Event(2048382801, Restart, function(chrEntityId, areaEntityId, spEffectId, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        InArea(chrEntityId, areaEntityId) && CharacterHasSpEffect(chrEntityId, spEffectId, Equal, 0));
    SetSpEffect(chrEntityId, spEffectId);
    RestartEvent();
});

$Event(2048382806, Restart, function() {
    SetSpEffect(2048380800, 20011750);
    EndEvent();
});

$Event(2048382808, Restart, function(eventFlagId, chrEntityId, chrEntityId2) {
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(mainGroupAbuse);
    ForceCharacterDeath(chrEntityId2, false);
    DisableGenerator(2048383800);
    DisableGenerator(2048383801);
    DisableGenerator(2048383802);
    WaitFixedTimeSeconds(2);
    ForceCharacterDeath(chrEntityId2, false);
    WaitFixedTimeSeconds(7);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    EndEvent();
});

$Event(2048382809, Restart, function(eventFlagId, generatorEntityId, generatorEntityId2, generatorEntityId3, spEffectId, spEffectId2, spEffectId3, spEffectId4) {
    if (EventFlag(2048380800)) {
        DisableGenerator(generatorEntityId);
        DisableGenerator(generatorEntityId2);
        DisableGenerator(generatorEntityId3);
        EndEvent();
    }
L0:
    WaitFor(CharacterHasSpEffect(eventFlagId, spEffectId) && !EventFlag(eventFlagId));
    if (CharacterHasSpEffect(eventFlagId, spEffectId2)) {
        EnableGenerator(generatorEntityId);
    }
    if (CharacterHasSpEffect(eventFlagId, spEffectId3)) {
        EnableGenerator(generatorEntityId2);
    }
    if (CharacterHasSpEffect(eventFlagId, spEffectId4)) {
        EnableGenerator(generatorEntityId3);
    }
    WaitFixedTimeSeconds(1);
    DisableGenerator(generatorEntityId);
    DisableGenerator(generatorEntityId2);
    DisableGenerator(generatorEntityId3);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2048382810, Restart, function(chrEntityId) {
    EndIf(EventFlag(2048380800));
    WaitFor(CharacterHasSpEffect(2048380800, 15300));
    GotoIf(L0, CharacterHasSpEffect(chrEntityId, 7860));
    GotoIf(L1, CharacterHasSpEffect(chrEntityId, 7861));
    GotoIf(L2, CharacterHasSpEffect(chrEntityId, 7862));
    RestartEvent();
L0:
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 7860);
    Goto(L10);
L1:
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 7861);
    Goto(L10);
L2:
    WaitFixedTimeSeconds(1);
    SetSpEffect(chrEntityId, 7862);
    Goto(L10);
L10:
    RestartEvent();
});

$Event(2048382865, Restart, function() {
    EndIf(EventFlag(2048380850));
    WaitFor(CharacterHasSpEffect(2048380850, 5036));
    ForceAnimationPlayback(2048380850, 3019, false, false, false);
});

$Event(2048382866, Restart, function(chrEntityId, spEffectId, chrEntityId2) {
    DisableCharacterAI(chrEntityId);
    EnableCharacterDefaultBackread(chrEntityId);
    EnableCharacterInvincibility(chrEntityId);
    EndIf(EventFlag(2048380850));
    WaitFor(CharacterHasSpEffect(2048380850, 20011653));
    WaitRandomTimeSeconds(0, 0.3);
    EnableCharacterAI(chrEntityId);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    SetSpEffect(2048380850, 20011667);
    WaitFixedTimeRealFrames(1);
    SetSpEffect(chrEntityId, spEffectId);
    DisableCharacterInvincibility(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20003, false, false, false);
});

$Event(2048382351, Restart, function(chrEntityId) {
    if (EventFlag(2048380850)) {
        DisableCharacterCollision(chrEntityId);
        DisableCharacter(chrEntityId);
        EndEvent();
    }
L0:
    EndEvent();
});

$Event(2048382870, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, eventFlagId, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    EndIf(EventFlag(eventFlagId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, areaEntityId)
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
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
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

$Event(2048382871, Default, function() {
    EndIf(EventFlag(2048380870));
    SetSpEffect(2048380102, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 2048380870);
    SetSpEffect(2048380102, 9532);
});
