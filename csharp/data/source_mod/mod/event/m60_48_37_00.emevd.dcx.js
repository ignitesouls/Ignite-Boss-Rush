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
    RegisterBonfire(1048370000, 1048371950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76458, 76405, 1048371980, 77410, 0, 78410, 78411, 78412, 78413, 78414, 78415, 78416, 78417, 78418, 78419);
    if (EventFlag(1049308030)) { //if boss selected (ekzykes)
        $InitializeCommonEvent(0, 90005201, 1048370800, 30000, 20000, 50, 0, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90005870, 1048370800, 904501600, 25);
        $InitializeCommonEvent(0, 90005861, 1048370800, 0, 1048370800, 1, 30400, 30064, 0);
    }
    $InitializeEvent(0, 1048372200, 1048370299, 12603, 1048372299, 1048372298, 1048372297);
    $InitializeCommonEvent(0, 90005300, 1048370299, 1048370299, 40406, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1048370700, true);
});

// スカラベ_メタル個体ミニゲーム_イベント -- Scarab_Metal Individual Mini Game_Event
$Event(1048372200, Default, function(chrEntityId, spEffectId, areaEntityId, areaEntityId2, areaEntityId3) {
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
    SetEventFlagID(1048372201, OFF);
    SetEventFlagID(1048372202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1048372201, 1048372202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(chrEntityId, areaEntityId));
    GotoIf(L2, InArea(chrEntityId, areaEntityId2));
    GotoIf(L3, InArea(chrEntityId, areaEntityId3));
L1:
    GotoIf(S0, EventFlag(1048372201));
    Goto(S1);
S0:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId2, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, true, false);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId3, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, true, false);
    Goto(L0);
L2:
    GotoIf(S2, EventFlag(1048372201));
    Goto(S3);
S2:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, true, false);
    Goto(L0);
S3:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId3, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, true, false);
    Goto(L0);
L3:
    GotoIf(S4, EventFlag(1048372201));
    Goto(S5);
S4:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, true, false);
    Goto(L0);
S5:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, areaEntityId2, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, true, false);
    Goto(L0);
L0:
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
