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
    $InitializeCommonEvent(0, 90005620, 1039500570, 1039501570, 1039501571, 0, 1039502571, 1039502572, 1039502573);
    $InitializeEvent(0, 1039502580, 1039500800, 1039500805, 1039502800, 1039500800, 1039500100, 60, 39, 50, 0, 1039502805);
    $InitializeCommonEvent(0, 90005882, 1039500800, 1039500805, 1039502800, 1039500800, 1039502806, 1039505810, 1039501800, 1039500810, 1039502810, 904750520, -1, 20012);
    $InitializeCommonEvent(0, 90005885, 1039500800, 921100, 1039502806, 1039502807, 0, 1);
    $InitializeEvent(0, 1039502575, 1039500800, 1039500805, 1039502801, 1039502802, 20300, 1039501805, 60, 39, 50, 0, 1039502805, 1039500570);
    $InitializeEvent(0, 1039502576, 1039500800, 1039500805, 1039501805, 1039500570);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005251, 1039500400, 30, 1, 3022);
    $InitializeCommonEvent(0, 90005251, 1039500450, 20, 0, 3020);
    $InitializeCommonEvent(0, 90005251, 1039500451, 20, 0, 3020);
    $InitializeCommonEvent(0, 90005211, 1039500307, 30000, 20000, 1039502300, 5, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1039500302, 30000, 20000, 1039502300, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1039500303, 30000, 20000, 1039502300, 1.5, 0, 0, 0, 0);
});

// ガーゴイル像_円形サークルボス開始 -- Gargoyle statue_Circular circle boss start
$Event(1039502575, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, messageId, entityId, areaId, blockId, regionId, indexId, initialAreaEntityId, eventFlagId5) {
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
$Event(1039502576, Restart, function(eventFlagId, eventFlagId2, entityId, eventFlagId3) {
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

// 円形サークルボス撃破_小探索系 -- Defeat circular circle boss_Small exploration system
$Event(1039502580, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, itemLotId, areaId, blockId, regionId, indexId, initialAreaEntityId) {
    EndIf(!EventFlag(1049308105)); //end if boss not selected
    EndIf(EventFlag(eventFlagId));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId2));
    WaitFor(CharacterDead(chrEntityId));
    WaitFixedTimeSeconds(3);
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.GreatEnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304194, 1049304112, -1, 1049304004, 1049304826, 1049304827, 1049304828, 1049304829, 1049305312, 1049305314, 1049305317, 1049305322, 1049300194);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307505);
    DeactivateGparamOverride(10);
    EndEvent(); //end
    AwardItemsIncludingClients(itemLotId);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(5);
    SetSpEffect(20000, 8870);
    WaitFixedTimeSeconds(2);
    SetEventFlagID(eventFlagId3, ON);
    SetEventFlagID(9295, ON);
    WarpPlayer(areaId, blockId, regionId, indexId, initialAreaEntityId, 0);
    EndEvent();
});
