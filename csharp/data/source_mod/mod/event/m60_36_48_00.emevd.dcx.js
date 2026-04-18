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
    RegisterBonfire(1036480000, 1036481950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76209, 76207, 1036481980, 77210, 0, 78210, 78211, 78212, 78213, 78214, 78215, 78216, 78217, 78218, 78219);
    $InitializeCommonEvent(0, 90005261, 1036480200, 1036482200, 10, 0, -1);
    $InitializeCommonEvent(0, 90005300, 1036480800, 1036480341, 0, 0, 0);
    if (EventFlag(1049308065)) { //if boss selected (night's cavalry)
        $InitializeCommonEvent(0, 90005476, 1036480340, 1036480341);
        InitializeCommonEvent(0, 90005477, 0);
        $InitializeEvent(0, 1036482340, 1036480340, 1036480341);
        $InitializeCommonEvent(0, 90005860, 1036480800, 0, 1036480340, 0, 1036480400, 0);
        $InitializeCommonEvent(0, 90005872, 1036480340, 10, 0);
        $InitializeCommonEvent(0, 90005871, 1036480340, 903150603, 10, 1036480341);
    }
    $InitializeCommonEvent(0, 90005703, 1036480700, 3941, 3942, 1039409251, 3941, 3940, 3943, 0);
    $InitializeCommonEvent(0, 90005704, 1036480700, 3941, 3940, 1039409251, 3);
    $InitializeCommonEvent(0, 90005702, 1036480700, 3943, 3940, 3944);
    $InitializeEvent(0, 1036483700, 1036480700);
    $InitializeEvent(0, 1036483701, 1036480700);
    $InitializeCommonEvent(0, 90005705, 1036480710);
    $InitializeCommonEvent(0, 90005771, 1036480950, 1036482710);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1036480700, true);
    SetCharacterBackreadState(1036480710, true);
});

// ルーン狩りの騎士の馬の対応 -- Rune hunting knight horse response
$Event(1036482340, Restart, function(chrEntityId, chrEntityId2) {
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

// NPC223亜人針子_NPC初期化イベント_紋章関門前の篝火近く -- NPC223 Demi-Seamiko_NPC initialization event_Near the bonfire in front of the coat of arms gate
$Event(1036483700, Restart, function(chrEntityId) {
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
    if (!(EventFlag(3947)
        && !EventFlag(1039519209)
        && !EventFlag(11109819)
        && !EventFlag(3956)
        && !EventFlag(3957))) {
        flag &= EventFlag(3947)
            && !EventFlag(1039519209)
            && !EventFlag(11109819)
            && !EventFlag(3956)
            && !EventFlag(3957);
        WaitFor(flag);
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    if (!EventFlag(3955)) {
        if (!EventFlag(1036489213)) {
            flag &= EventFlag(76207) && EventFlag(9000);
            WaitFor(flag);
        }
    }
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    SetNetworkconnectedEventFlagID(1036489213, ON);
    SetNetworkconnectedEventFlagID(3955, ON);
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
    WaitFor(
        !(EventFlag(3947)
            && !EventFlag(1039519209)
            && !EventFlag(11109819)
            && !EventFlag(3956)
            && !EventFlag(3957)));
    RestartEvent();
});

// NPC223亜人針子_母の声イベント -- NPC223 Demi-human seamstress_Mother's voice event
$Event(1036483701, Restart, function(entityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3943) || !EventFlag(3947) || EventFlag(1039409259));
    WaitFor(EntityInRadiusOfEntity(entityId, 20000, 4, 1) && CharacterHasSpEffect(20000, 9690));
    SetNetworkconnectedEventFlagID(1039402710, ON);
    EndEvent();
});
