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
    if (EventFlag(1049308101)) { //if boss selected (bols)
        $InitializeCommonEvent(0, 90005880, 1033450800, 1033450805, 1033452800, 1033450800, 30250, 60, 33, 45, 0, 1033452805);
        $InitializeCommonEvent(0, 90005881, 1033450800, 1033450805, 1033452801, 1033452802, 20300, 1033451805, 60, 33, 45, 0, 1033452805);
        $InitializeCommonEvent(0, 90005882, 1033450800, 1033450805, 1033452800, 1033450800, 1033452806, 1033455810, 1033451800, 1033450810, 1033452810, 904600520, -1, 20005);
        $InitializeCommonEvent(0, 90005883, 1033450800, 1033450805, 1033451805);
        $InitializeCommonEvent(0, 90005885, 1033450800, 0, 1033452806, 1033452807, 0, 1);
    }
    $InitializeEvent(0, 1033452200, 1033450200, 12603, 1033452200, 1033452201, 1033452202);
    $InitializeCommonEvent(0, 90005300, 1033450200, 1033450200, 40264, 0, 0);
});

// [チャレンジバトル]周囲の敵消し -- [Challenge Battle] Eliminate surrounding enemies
$Event(1033452360, Restart, function() {
    WaitFor(EventFlag(1033452800) && PlayerIsInOwnWorld());
    DisableCharacter(1033455800);
    DisableCharacterCollision(1033455800);
    WaitFor(EventFlag(1033450800));
    WaitFixedTimeSeconds(7);
    EnableCharacter(1033455800);
    EnableCharacterCollision(1033455800);
});

// スカラベ_メタル個体ミニゲーム_イベント -- Scarab_Metal Individual Mini Game_Event
$Event(1033452200, Default, function(chrEntityId, spEffectId, areaEntityId, areaEntityId2, areaEntityId3) {
    EndIf(EventFlag(1233450200));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId)
            && !EventFlag(1233450200)
            && !CharacterDead(chrEntityId));
    SetEventFlagID(1033452201, OFF);
    SetEventFlagID(1033452202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1033452201, 1033452202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(chrEntityId, areaEntityId));
    GotoIf(L2, InArea(chrEntityId, areaEntityId2));
    GotoIf(L3, InArea(chrEntityId, areaEntityId3));
L1:
    GotoIf(S0, EventFlag(1033452201));
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
    GotoIf(S2, EventFlag(1033452201));
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
    GotoIf(S4, EventFlag(1033452201));
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
