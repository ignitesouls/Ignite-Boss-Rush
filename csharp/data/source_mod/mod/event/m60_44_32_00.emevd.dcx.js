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
    $InitializeEvent(0, 1044322200, 1044320200, 12603, 1044322200, 1044322201, 1044322202);
    $InitializeCommonEvent(0, 90005300, 1044320200, 1044320200, 40138, 0, 0);
    if (EventFlag(1049308055)) { //if boss selected (deathbird)
        $InitializeCommonEvent(0, 90005860, 1044320800, 0, 1044320340, 0, 1044320400, 0);
        $InitializeCommonEvent(0, 90005870, 1044320340, 904980602, 24);
    }
    if (EventFlag(1049308057)) { //if boss selected (night's cavalry)
        $InitializeCommonEvent(0, 90005300, 1044320850, 1044320344, 0, 0, 0);
        $InitializeCommonEvent(0, 90005476, 1044320342, 1044320344);
        InitializeCommonEvent(0, 90005477, 0);
        $InitializeEvent(0, 1044322340, 1044320342, 1044320344);
        $InitializeCommonEvent(0, 90005860, 1044320850, 0, 1044320342, 0, 1044320410, 0);
        $InitializeCommonEvent(0, 90005871, 1044320342, 903150601, 10, 1044320344);
        $InitializeCommonEvent(0, 90005872, 1044320342, 10, 0);
    }
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005211, 1044320340, 30000, 20000, 1044322340, 10, 0, 0, 0, 0, 0);
});

// スカラベ_メタル個体ミニゲーム_イベント -- Scarab_Metal Individual Mini Game_Event
$Event(1044322200, Default, function(chrEntityId, spEffectId, areaEntityId, areaEntityId2, areaEntityId3) {
    EndIf(EventFlag(1044320200));
    WaitFor(
        CharacterHasSpEffect(chrEntityId, spEffectId)
            && !EventFlag(1044320200)
            && !CharacterDead(chrEntityId));
    SetEventFlagID(1044322201, OFF);
    SetEventFlagID(1044322202, OFF);
    WaitFixedTimeFrames(1);
    RandomlySetEventFlagInRange(1044322201, 1044322202, ON);
    WaitFixedTimeFrames(1);
    GotoIf(L1, InArea(chrEntityId, areaEntityId));
    GotoIf(L2, InArea(chrEntityId, areaEntityId2));
    GotoIf(L3, InArea(chrEntityId, areaEntityId3));
L1:
    GotoIf(S0, EventFlag(1044322201));
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
    GotoIf(S2, EventFlag(1044322201));
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
    GotoIf(S4, EventFlag(1044322201));
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

// 地図石碑光SFX切り替え -- Map stone monument light SFX switching
$Event(1044322210, Restart, function(assetEntityId, entityId, eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        CreateAssetfollowingSFX(assetEntityId, 200, 803220);
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 1, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
});

// ルーン狩りの騎士の馬の対応 -- Rune hunting knight horse response
$Event(1044322340, Restart, function(chrEntityId, chrEntityId2) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(chrEntityId, 11825)) {
        WaitFor(CharacterBackreadStatus(chrEntityId2));
        SetSpEffect(chrEntityId, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(chrEntityId2));
    SetSpEffect(chrEntityId, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// アセット無効化 -- Asset invalidation
$Event(1044322600, Restart, function() {
    DisableAsset(1044321600);
    DisableAsset(1044321601);
    DisableAsset(1044321602);
    DisableAsset(1044321603);
    DisableAsset(1044321604);
});
