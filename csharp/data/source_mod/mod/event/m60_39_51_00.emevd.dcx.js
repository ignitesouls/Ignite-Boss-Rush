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
    RegisterBonfire(76303, 1039511950, 0, 0, 0, 3);
    $InitializeCommonEvent(0, 90005100, 76314, 76303, 1039511980, 77300, 2, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    if (EventFlag(1049308076)) { //if boss selected (night's cavalry)
        $InitializeCommonEvent(0, 90005476, 1039510800, 1039510801);
        $InitializeEvent(0, 1039512451, 1039510800, 1039510801);
        $InitializeCommonEvent(0, 90005871, 1039510800, 903150604, 10, 1039510801);
        $InitializeCommonEvent(0, 90005860, 1039510800, 0, 1039510800, 0, 1039510200, 0);
        $InitializeCommonEvent(0, 90005300, 1039510800, 1039510801, 0, 0, 0);
        $InitializeCommonEvent(0, 90005872, 1039510800, 10, 0);
    }
    $InitializeCommonEvent(0, 90005300, 1039510500, 1039510500, 40304, 0, 0);
    $InitializeCommonEvent(0, 90005703, 1039510700, 3941, 3942, 1039409251, 3941, 3940, 3943, 0);
    $InitializeCommonEvent(0, 90005704, 1039510700, 3941, 3940, 1039409251, 3);
    $InitializeCommonEvent(0, 90005702, 1039510700, 3943, 3940, 3944);
    $InitializeEvent(0, 1039513700, 1039510700);
    $InitializeEvent(0, 1039513701, 1039510700);
    $InitializeCommonEvent(0, 90005771, 1039510950, 1039512710);
    $InitializeCommonEvent(0, 90005771, 1039510950, 1039512711);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1039510700, true);
    $InitializeCommonEvent(0, 90005201, 1039510201, 30000, 20000, 12, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1039510202, 30001, 20001, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1039510300, 1039512300, 5, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1039510406, 30001, 20001, 7, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1039510407, 30010, 20010, 18, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1039510408, 30010, 20010, 18, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 1039510350, 1039512350, 0, 3003);
    $InitializeCommonEvent(0, 90005201, 1039510363, 30000, 20000, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 1039510361, 1039512361, 0, -1);
});

// ルーン狩りの騎士_時間帯によって馬召喚を禁止する -- Rune Hunting Knight_Horse summoning is prohibited depending on the time of day.
$Event(1039512451, Restart, function(chrEntityId, chrEntityId2) {
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

// NPC223亜人針子_NPC初期化イベント_三叉路の篝火近く -- NPC223 Demi-Seamiko_NPC initialization event_Near the bonfire at the three-way intersection
$Event(1039513700, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L0:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (!(EventFlag(3947) && !EventFlag(11109819) && !EventFlag(3957))) {
        flag &= EventFlag(3947) && !EventFlag(11109819) && !EventFlag(3957);
        WaitFor(flag);
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    if (!EventFlag(3956)) {
        if (!EventFlag(1039519209)) {
            flag &= EventFlag(76303) && EventFlag(9000);
            WaitFor(flag);
        }
    }
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    SetNetworkconnectedEventFlagID(1039519209, ON);
    SetNetworkconnectedEventFlagID(3956, ON);
    Goto(L20);
L2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3947) && !EventFlag(11109819) && !EventFlag(3957)));
    RestartEvent();
});

// NPC223亜人針子_母の声イベント -- NPC223 Demi-human seamstress_Mother's voice event
$Event(1039513701, Restart, function(entityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3943) || !EventFlag(3947) || EventFlag(1039409259));
    WaitFor(EntityInRadiusOfEntity(entityId, 20000, 4, 1) && CharacterHasSpEffect(20000, 9690));
    SetNetworkconnectedEventFlagID(1039402710, ON);
    EndEvent();
});
