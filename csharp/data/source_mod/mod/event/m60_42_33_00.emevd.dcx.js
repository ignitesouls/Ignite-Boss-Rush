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
    RegisterBonfire(1042330000, 1042331950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005300, 1042330220, 1042330220, 40132, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1042330405, 1042332400, 5, 0, 3006);
    $InitializeCommonEvent(0, 90005620, 1042330570, 1042331570, 1042331571, 0, 1042332570, 1042332571, 1042332572);
    if (EventFlag(1049308098)) { //if boss selected (ancient hero of zamor)
        $InitializeCommonEvent(0, 90005880, 1042330800, 1042330805, 1042332800, 1042330800, 1042330100, 60, 42, 33, 0, 1042332805);
        $InitializeCommonEvent(0, 90005882, 1042330800, 1042330805, 1042332800, 1042330800, 1042332806, 1042335810, 1042331800, 1042330810, 1042332810, 907100520, -1, 20002);
        $InitializeCommonEvent(0, 90005885, 1042330800, 0, 1042332806, 1042332807, 0, 1);
        $InitializeEvent(0, 1042332575, 1042330800, 1042330805, 1042332801, 1042332802, 20300, 1042331805, 60, 42, 33, 0, 1042332805, 1042330570);
        $InitializeEvent(0, 1042332576, 1042330800, 1042330805, 1042331805, 1042330570);
    }
    $InitializeCommonEvent(0, 90005400, 1042330230, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005401, 0, 1042330230);
    $InitializeEvent(0, 1042332200, 1042330200, 0);
    $InitializeEvent(1, 1042332200, 1042330201, 2);
    $InitializeEvent(2, 1042332200, 1042330202, 1);
    $InitializeEvent(3, 1042332200, 1042330203, 0.5);
    $InitializeEvent(4, 1042332200, 1042330204, 1.5);
    $InitializeEvent(5, 1042332200, 1042330205, 2);
    $InitializeEvent(6, 1042332200, 1042330206, 0);
    $InitializeEvent(7, 1042332200, 1042330207, 2.5);
    $InitializeEvent(8, 1042332200, 1042330208, 3);
    $InitializeEvent(9, 1042332200, 1042330209, 0.5);
    $InitializeEvent(10, 1042332200, 1042330210, 0);
    $InitializeEvent(11, 1042332200, 1042330212, 0);
    $InitializeEvent(12, 1042332200, 1042330213, 2.5);
    $InitializeEvent(13, 1042332200, 1042330214, 3);
});

// 霊廟守りイベント -- Mausoleum protection event
$Event(1042332200, Restart, function(chrEntityId, timeSeconds) {
    if (EventFlag(1242330400)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(1242330400));
    WaitFor(mainGroupAbuse);
    WaitFixedTimeSeconds(timeSeconds);
    ForceCharacterDeath(chrEntityId, false);
});

// ガーゴイル像_円形サークルボス開始 -- Gargoyle statue_Circular circle boss start
$Event(1042332575, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, messageId, entityId, areaId, blockId, regionId, indexId, initialAreaEntityId, eventFlagId5) {
    SetEventFlagID(eventFlagId3, OFF);
    SetEventFlagID(eventFlagId4, OFF);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && ActionButtonInArea(9230, entityId));
    DisplayGenericDialogAndSetEventFlags(messageId, PromptType.YESNO, NumberofOptions.TwoButtons, entityId, 3, eventFlagId3, eventFlagId4, eventFlagId4);
    RestartIf(EventFlag(eventFlagId4));
    RestartIf(
        HasMultiplayerState(MultiplayerState.Multiplayer)
            || HasMultiplayerState(MultiplayerState.MultiplayerPending));
    if (!EventFlag(eventFlagId5)) {
        WaitFixedTimeSeconds(0.5);
        DisplayGenericDialog(20510, PromptType.OKCANCEL, NumberofOptions.NoButtons, entityId, 5);
        WaitFixedTimeSeconds(3);
        RestartEvent();
    }
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(10000, 60450, false, false, false);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloorWithFadeout(10000, TargetEntityType.Area, initialAreaEntityId, -1, 10000, true, true);
    SetEventFlagID(9021, ON);
    EndEvent();
    WarpPlayer(areaId, blockId, regionId, indexId, initialAreaEntityId, 0);
});

// ガーゴイル像_円形サークルトリガー出現 -- Gargoyle statue_Circular circle trigger appears
$Event(1042332576, Restart, function(eventFlagId, eventFlagId2, entityId, eventFlagId3) {
    ForceAnimationPlayback(entityId, 0, true, false, false);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && EventFlag(eventFlagId3));
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(entityId, 1, true, false, false);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.Singleplayer)
            && !HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    WaitFixedTimeFrames(1);
    RestartEvent();
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1042330700, true);
});

// コンストラクタ_LOD2 -- constructor_LOD2
$Event(200, Default, function() {
    $InitializeCommonEvent(0, 90005451, 1042330400, 1042336420);
    $InitializeCommonEvent(0, 90005452, 1042330400, 1242330400);
    $InitializeCommonEvent(0, 90005454, 1042330400, 1242332400, 1242330400);
    $InitializeCommonEvent(0, 90005458, 1042330400, 1042331401);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331420, 101, 0);
    $InitializeCommonEvent(1, 90005453, 1042330400, 1042331421, 102, 0.1);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331422, 103, 0.2);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331423, 104, 0.3);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331424, 105, 0.4);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331425, 106, 0.5);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331426, 107, 0.6);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331427, 108, 0.7);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331428, 109, 0.8);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331429, 110, 0.9);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331430, 111, 1);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331436, 117, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331437, 118, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331438, 119, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331439, 120, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331440, 121, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331441, 122, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331442, 123, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331443, 124, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331444, 125, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331445, 126, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331446, 127, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331447, 128, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331452, 133, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331453, 134, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331454, 135, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331455, 136, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331456, 137, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331457, 138, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331458, 139, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331459, 140, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331460, 141, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331461, 142, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331468, 149, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331469, 150, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331470, 151, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331471, 152, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331472, 153, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331473, 154, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331474, 155, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331475, 156, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331476, 157, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331477, 158, 0);
    $InitializeCommonEvent(0, 90005453, 1042330400, 1042331478, 159, 0);
    $InitializeCommonEvent(0, 90005456, 1042330400, 1042331410, 1042331418, 1042330400);
});

// プリコンストラクタ_LOD2 -- Preconstructor_LOD2
$Event(250, Default, function() {
    $InitializeCommonEvent(0, 90005450, 1042330400, 1042331400, 1042331410, 1042331418);
});

// [チャレンジバトル2]周囲の敵消し -- [Challenge Battle 2] Eliminate surrounding enemies
$Event(1042332800, Restart, function() {
    WaitFor(EventFlag(1042332800) && PlayerIsInOwnWorld());
    DisableCharacter(1042335800);
    DisableCharacterCollision(1042335800);
    DisableAsset(1042335801);
    WaitFor(EventFlag(1042330800));
    WaitFixedTimeSeconds(7);
    EnableCharacter(1042335800);
    EnableCharacterCollision(1042335800);
    EnableAsset(1042335801);
});
