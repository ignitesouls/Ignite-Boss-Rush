// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(1049370000, 1049371950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005251, 1049370200, 20, 0, -1);
    if (EventFlag(1049308069)) { //if boss selected (night's cavalry)
        $InitializeCommonEvent(0, 90005300, 1049370800, 1049370801, 0, 0, 0);
        $InitializeCommonEvent(0, 90005476, 1049370800, 1049370801);
        $InitializeEvent(0, 1049372291, 1049370800, 1049370801);
        $InitializeCommonEvent(0, 90005871, 1049370800, 903150605, 10, 1049370801);
        $InitializeCommonEvent(0, 90005860, 1049370800, 0, 1049370800, 0, 1049370100, 0);
        $InitializeCommonEvent(0, 90005872, 1049370800, 10, 0);
    }
    if (EventFlag(1049308068)) { //if boss selected (death rite bird)
        $InitializeCommonEvent(0, 90005870, 1049370850, 904980606, 24);
        $InitializeCommonEvent(0, 90005860, 1049370850, 0, 1049370850, 0, 1049370110, 0);
    }
    $InitializeEvent(0, 1049372299);
    $InitializeCommonEvent(0, 90005300, 1049370299, 1049370299, 1049370700, 0, 0);
    $InitializeCommonEvent(0, 90005725, 4780, 4781, 4783, 1049379205, 1049370700, 1049370701, 1049376700);
    $InitializeCommonEvent(0, 90005703, 1049370700, 4781, 4782, 1049379206, 4781, 4780, 4784, 0);
    $InitializeCommonEvent(0, 90005704, 1049370700, 4781, 4780, 1049379206, 3);
    $InitializeCommonEvent(0, 90005702, 1049370700, 4783, 4780, 4784);
    $InitializeCommonEvent(0, 90005703, 1049370701, 4781, 4782, 1049379207, 4781, 4780, 4784, 0);
    $InitializeCommonEvent(0, 90005704, 1049370701, 4781, 4780, 1049379207, 3);
    $InitializeCommonEvent(0, 90005728, 1049370701, 1049372706, 1049372707);
    $InitializeCommonEvent(0, 90005727, 4781, 1049370700, 1049370701, 4780, 4783);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1049370700, true);
    SetCharacterBackreadState(1049370701, true);
});

// ルーン狩りの騎士_時間帯によって馬召喚を禁止する -- Rune Hunting Knight_Horse summoning is prohibited depending on the time of day.
$Event(1049372291, Restart, function(chrEntityId, chrEntityId2) {
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

// 老獅子にルート付与 -- Root given to old lion
$Event(1049372299, Restart, function() {
    WaitFor(InArea(10000, 1049372299));
    ChangeCharacterPatrolBehavior(1049370299, 1049373299);
});
