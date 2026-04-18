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
    if (EventFlag(1049308061)) { //if boss selected (deathbird)
        $InitializeCommonEvent(0, 90005860, 1037420800, 0, 1037420340, 0, 1037420400, 0);
        $InitializeCommonEvent(0, 90005870, 1037420340, 904980603, 24);
    }
    RegisterBonfire(1037420000, 1037421950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76206, 76203, 1037421980, 77200, 3, 78200, 78201, 78202, 78203, 78204, 78205, 78206, 78207, 78208, 78209);
    $InitializeCommonEvent(0, 90005605, 1037421610, 60, 35, 45, 0, 1035452630, 0, 1037422610, 1037422611, 1037422612, 0, 0, 0, 0);
    InitializeEvent(0, 1037422600, 0);
    $InitializeCommonEvent(0, 90005630, 61374200, 1037421500, 123);
    $InitializeEvent(0, 1037423700, 1037420700, 1037421700);
    $InitializeEvent(0, 1037423702, 1037422704, 1037422703, 1037429207, 20);
    $InitializeEvent(0, 1037423703, 1037421700, 1037420700);
    $InitializeCommonEvent(0, 90005752, 1037421700, 200, 120, 3);
    $InitializeEvent(0, 1037423710, 1037420720, 1037421720);
    $InitializeEvent(0, 1037423711, 1037420720, 1037422731, 1038419251);
    $InitializeEvent(0, 1037423712);
    $InitializeCommonEvent(0, 90005704, 1037420720, 3681, 3680, 1038419251, 3);
    $InitializeCommonEvent(0, 90005703, 1037420720, 3681, 3682, 1038419251, 3681, 3680, 3684, -1);
    $InitializeCommonEvent(0, 90005702, 1037420720, 3683, 3680, 3684);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1037420700, true);
    SetCharacterBackreadState(1037420705, true);
    DisableAsset(1037421700);
    $InitializeCommonEvent(0, 90005261, 1037420200, 1037422200, 2, 0, 1700);
    $InitializeCommonEvent(0, 90005251, 1037420201, 10, 0, 1705);
    $InitializeCommonEvent(0, 90005251, 1037420207, 10, 0, 1705);
    $InitializeCommonEvent(0, 90005251, 1037420203, 10, 0, 1705);
    $InitializeCommonEvent(0, 90005251, 1037420204, 10, 0, 1705);
    $InitializeCommonEvent(0, 90005251, 1037420205, 10, 0, 1705);
    $InitializeCommonEvent(0, 90005251, 1037420206, 10, 0, 1705);
    $InitializeCommonEvent(0, 90005261, 1037420221, 1037422200, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 1037420222, 1037422200, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 1037420223, 1037422200, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 1037420224, 1037422200, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 1037420225, 1037422200, 2, 1, -1);
    $InitializeCommonEvent(0, 90005251, 1037420213, 10, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1037420340, 1037422340, 10, 0, 1700);
    $InitializeCommonEvent(0, 90005460, 1037420300);
    $InitializeCommonEvent(0, 90005461, 1037420300);
    $InitializeCommonEvent(0, 90005462, 1037420300);
    $InitializeCommonEvent(0, 90005460, 1037420301);
    $InitializeCommonEvent(0, 90005461, 1037420301);
    $InitializeCommonEvent(0, 90005462, 1037420301);
});

// 汎用ワープOBJイベント_開始 -- General purpose warp OBJ event_start
$Event(1037422610, Restart, function(entityId, areaId, blockId, regionId, indexId, initialAreaEntityId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    WaitFor(
        ActionButtonInArea(9140, entityId) && HasMultiplayerState(MultiplayerState.Singleplayer));
    DisplayGenericDialogAndSetEventFlags(4300, PromptType.YESNO, NumberofOptions.TwoButtons, entityId, 3, eventFlagId, eventFlagId2, eventFlagId2);
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    RotateCharacter(10000, entityId, -1, true);
    ForceAnimationPlayback(10000, 60490, false, false, false);
    WaitFixedTimeSeconds(3);
    WarpPlayer(areaId, blockId, regionId, indexId, initialAreaEntityId, 0);
});

// NPC313火山館の勧誘者_NPC初期化イベント_初期状態 -- NPC313 Volcano Hall Recruiter_NPC initialization event_Initial state
$Event(1037423700, Restart, function(chrEntityId, assetEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3420)) {
            SetEventFlagID(1038519203, OFF);
        }
    }
L10:
    if (!EventFlag(3425)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        DisableAsset(assetEntityId);
        WaitFor(EventFlag(3425));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3420));
    GotoIf(L2, EventFlag(3421));
    GotoIf(L3, EventFlag(3422));
    GotoIf(L4, EventFlag(3423));
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    EnableAsset(assetEntityId);
    WarpAssetToCharacter(assetEntityId, chrEntityId, -1);
    ForceAnimationPlayback(chrEntityId, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    EnableAsset(assetEntityId);
    WarpAssetToCharacter(assetEntityId, chrEntityId, -1);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    EnableAsset(assetEntityId);
    WarpAssetToCharacter(assetEntityId, chrEntityId, -1);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    WarpAssetToCharacter(assetEntityId, chrEntityId, -1);
    DisableAsset(assetEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3425));
    RestartEvent();
});

// NPC313火山館の勧誘者_初期状態_二回目自動会話処理 -- NPC313 Volcano Hall Recruiter_Initial state_Second automatic conversation process
$Event(1037423702, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, timeSeconds) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3420));
    EndIf(!EventFlag(3425));
    EndIf(EventFlag(eventFlagId3));
    SetCharacterTalkRange(1037420700, 30);
    WaitFor(EventFlag(eventFlagId2));
    WaitFixedTimeSeconds(timeSeconds);
    SetEventFlagID(eventFlagId, ON);
    EndEvent();
});

// NPC313火山館の勧誘者_初期状態_被ダメ系会話再生処理 -- NPC313 Volcano Hall Recruiter_Initial state_Damaged conversation playback processing
$Event(1037423703, Restart, function(entityId, entityId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3425));
    EndIf(EventFlag(1037422708));
    GotoIf(L1, !EventFlag(1037422701));
    Goto(L2);
L1:
    WaitFor(HasDamageType(entityId, 20000, DamageType.Unspecified));
    WaitFixedTimeSeconds(0.1);
    Goto(L3);
L2:
    dmg = HasDamageType(entityId, 20000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(7));
    if (dmg.Passed) {
        WaitFixedTimeSeconds(0.1);
L3:
        GotoIf(L5, !EventFlag(1037422701));
        GotoIf(L6, !EventFlag(1037422707));
        RestartEvent();
L5:
        if (EntityInRadiusOfEntity(20000, entityId2, 10, 1)) {
            SetEventFlagID(1037422702, ON);
        }
        WaitFor(EventFlag(1037422701));
        RestartEvent();
L6:
        if (EntityInRadiusOfEntity(20000, entityId2, 10, 1)) {
            SetEventFlagID(1037422706, ON);
        }
        WaitFor(EventFlag(1037422707));
        RestartEvent();
    }
L7:
    SetEventFlagID(1037422708, ON);
    EndEvent();
});

// NPC309_盗賊の頭_NPC初期化イベント_新_湖で再会 -- NPC309_Thief Head_NPC initialization event_New_Reunion at the lake
$Event(1037423710, Restart, function(chrEntityId, assetEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3687)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        DisableAsset(assetEntityId);
        WaitFor(EventFlag(3687));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3680));
    GotoIf(L2, EventFlag(3681));
    GotoIf(L3, EventFlag(3682));
    GotoIf(L4, EventFlag(3683));
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 90100, false, false, false);
    EnableAsset(assetEntityId);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableAsset(assetEntityId);
    Goto(L20);
L3:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableAsset(assetEntityId);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableAsset(assetEntityId);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3687));
    RestartEvent();
});

// NPC309_盗賊の頭_新_湖で再会_土下座で敵対解除 -- NPC309_Head of the thieves_New_Reunion at the lake_Dismiss hostility by prostrate
$Event(1037423711, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3685) && !EventFlag(3686) && !EventFlag(3687));
    GotoIf(L1, !EventFlag(3681));
    Goto(L2);
L1:
    WaitFor(EventFlag(3681));
    RestartEvent();
L2:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, chrEntityId, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ClearCharactersAITarget(chrEntityId);
    RequestCharacterAIReplan(chrEntityId);
    EndEvent();
});

// NPC309_盗賊の頭_新_湖で再会_リアルタイム遷移 -- NPC309_Thief Head_New_Reunion at the lake_Real-time transition
$Event(1037423712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(31009206));
    EndIf(EventFlag(1038419254));
    EndIf(!EventFlag(3685) && !EventFlag(3686) && !EventFlag(3687));
    SetEventFlagID(1038419254, ON);
    WaitFixedTimeFrames(1);
    SetEventFlagID(3698, ON);
    EndEvent();
});
