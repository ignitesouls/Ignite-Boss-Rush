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
    if (EventFlag(1049308074)) { //if boss selected (godskin apostle)
        $InitializeCommonEvent(0, 9005810, 1042550800, 1042550000, 1042550950, 1042551950, 5);
        $InitializeCommonEvent(0, 90005870, 1042550800, 903560600, 27);
        $InitializeCommonEvent(0, 90005860, 1042550800, 0, 1042550800, 0, 30325, 0);
        $InitializeCommonEvent(0, 90005780, 1042550800, 1042552160, 1042552161, 1042550705, SummonSignType.NPCWhiteSign, 1042552700, 0, false, 0); //enable summon visibility
        $InitializeCommonEvent(0, 90005781, 1042550800, 1042552160, 1042552161, 1042550705);
        $InitializeCommonEvent(0, 90005783, 1042550800, 1042552160, 1042552161, 1042550705, 1042552700, 1041542701, 1);
    }
    $InitializeEvent(0, 1042553710, 1042550700);
    $InitializeCommonEvent(0, 90005704, 1042550700, 4181, 4180, 1042559201, 3);
    $InitializeCommonEvent(0, 90005703, 1042550700, 4181, 4182, 1042559201, 1059481190, 4180, 4184, -1);
    $InitializeCommonEvent(0, 90005702, 1042550700, 4183, 4180, 4184);
    $InitializeEvent(0, 1042553711);
    $InitializeEvent(0, 1042553712);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1042550700, true);
    $InitializeCommonEvent(0, 90005251, 1042550800, 50, 0, 0);
});

// NPC348マレニアの娘_ﾌｪｰｽﾞ4_NPC初期化イベント -- NPC348 Marenia's Daughter_Phase 4_NPC initialization event
$Event(1042553710, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    if (!EventFlag(4188)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(4188));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4180));
    GotoIf(L2, EventFlag(4181));
    GotoIf(L4, EventFlag(4183));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90101, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4188));
    RestartEvent();
});

// NPC348マレニアの娘_共闘して勝利イベント -- NPC348 Daughter of Marenia_Fight together and win event
$Event(1042553711, Restart, function() {
    EndIf(EventFlag(1042550800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1042552160) && EventFlag(1042550800));
    SetNetworkconnectedEventFlagID(1042559204, ON);
    EndEvent();
});

// NPC348マレニアの娘_神肌_ツリガ_ガーゴイル_白霊召喚停止イベント -- NPC348 Marenia's Daughter_Divine Skin_Tsuriga_Gargoyle_White Spirit Summoning Stop Event
$Event(1042553712, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!AnyBatchEventFlags(1042559207, 1042559209));
    WaitFor(AnyBatchEventFlags(4181, 4183));
    BatchSetNetworkconnectedEventFlags(1042559207, 1042559209, OFF);
    EndEvent();
});
