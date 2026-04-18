// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2049410000, 2049411950, 0, 0, 0, 0);
    if (EventFlag(1049308196)) { //if boss selected (jagged peak drake)
        $InitializeCommonEvent(0, 90005201, 2049410800, 30000, 20000, 20, 0, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90005870, 2049410800, 905580601, 25);
        $InitializeCommonEvent(0, 90005860, 2049410800, 0, 2049410800, 1, 30850, 0);
    }
    $InitializeCommonEvent(0, 90005734, 4265, 2048429222, 2049412710, 2049412710, 2048429222, -1);
    $InitializeEvent(0, 2049410700, 2048429224, 4260, 4265, 2048429222);
});

$Event(2049412200, Restart, function(chrEntityId, chrEntityId2) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011451) && CharacterHasSpEffect(chrEntityId, 20011450));
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Character, 10000, 12, 10000);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    ClearSpEffect(chrEntityId, 20011450);
    RestartEvent();
});

$Event(2049412201, Restart, function(chrEntityId) {
    WaitFor(
        !CharacterHasSpEffect(chrEntityId, 20011450)
            && CharacterRatioAIState(chrEntityId, AIStateType.Normal));
    SetSpEffect(chrEntityId, 20011450);
    ClearSpEffect(chrEntityId, 20011452);
    RestartEvent();
});

$Event(2049412202, Restart, function(chrEntityId) {
    WaitFor(
        CharacterHasSpEffect(chrEntityId, 20011453) || CharacterHasSpEffect(chrEntityId, 20011451));
    if (!CharacterHasSpEffect(chrEntityId, 20011451)) {
        SetSpEffect(10000, 20011454);
    } else {
L0:
        SetSpEffect(10000, 20011455);
    }
L1:
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

$Event(2049412203, Restart, function(chrEntityId) {
    cond |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
        || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
        || CharacterAIState(chrEntityId, AIStateType.Combat);
    WaitFor(cond);
    chr = CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
    chr2 = CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
    chr3 = CharacterAIState(chrEntityId, AIStateType.Combat);
    GotoIf(L0, chr);
    GotoIf(L1, chr2);
    GotoIf(L2, chr3);
L0:
    SetSpEffect(chrEntityId, 20011458);
    cond |= !CharacterRidingMount(10000) || CharacterHasSpEffect(chrEntityId, 20011462);
    if (!cond) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(chrEntityId, 20011462);
    }
    Goto(L20);
L1:
    SetSpEffect(chrEntityId, 20011459);
    Goto(L20);
L2:
    SetSpEffect(chrEntityId, 20011460);
    cond |= !CharacterRidingMount(10000) || CharacterHasSpEffect(chrEntityId, 20011462);
    if (!cond) {
        SetSpEffect(10000, 20011461);
        SetSpEffect(chrEntityId, 20011462);
    }
    Goto(L20);
L20:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(2049410700, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    SetEventFlagID(eventFlagId, OFF);
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId2) || !EventFlag(eventFlagId3));
    WaitFor(EventFlag(eventFlagId2) && EventFlag(eventFlagId3) && EventFlag(eventFlagId4));
    SetEventFlagID(eventFlagId, ON);
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId2)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId4));
    RestartEvent();
});
