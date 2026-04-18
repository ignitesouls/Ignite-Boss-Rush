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
    RegisterBonfire(1052530000, 1052531950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76510, 76508, 1052531980, 77500, 7, 78500, 78501, 78502, 78503, 78504, 78505, 78506, 78507, 78508, 78509);
    $InitializeEvent(0, 1052532500);
    $InitializeEvent(0, 1052532510);
    $InitializeCommonEvent(0, 90005771, 1052530950, 1052532710);
    $InitializeEvent(0, 1052533700);
    $InitializeEvent(0, 1052533701);
});

// 巨人ボス部屋バディ石碑_使用可能判定 -- Giant boss room buddy stone monument_usable determination
$Event(1052532500, Restart, function() {
    if (EventFlag(1252520800)) {
        EndEvent();
    }
L0:
    SetSpEffect(1052530100, 9531);
    if (!EventFlag(1252520801)) {
        WaitFor(EventFlag(1252520801));
        GotoIf(L2, mainGroupAbuse);
    }
L1:
    WaitFor(
        HasDamageType(1052520801, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(1052520801, 436)
            || CharacterHasStateInfo(1052520801, 2)
            || CharacterHasStateInfo(1052520801, 5)
            || CharacterHasStateInfo(1052520801, 6)
            || CharacterHasStateInfo(1052520801, 260)
            || EntityInRadiusOfEntity(1052520801, 10000, 120, 1)
            || ((InArea(10000, 1052532800) || InArea(10000, 1052532801)) && EventFlag(1252522805)));
L2:
    SetSpEffect(1052530100, 9532);
    EndEvent();
});

// バディ召喚距離を延ばすイベント -- Event that increases buddy summoning distance
$Event(1052532510, Restart, function() {
    EndIf(EventFlag(1254560800));
    SetCharacterTalkRange(1052530100, 300);
});

// コンストラクタ_LOD2 -- constructor_LOD2
$Event(200, Default, function() {
    $InitializeCommonEvent(0, 90005781, 1252520800, 1252532160, 1252532161, 1052530700);
    $InitializeCommonEvent(0, 90005783, 1252520800, 1252532160, 1252532161, 1052530700, 1052532700, 1052532162, 2);
    $InitializeCommonEvent(0, 90005781, 1252520800, 1252532164, 1252532165, 1052530701);
    $InitializeCommonEvent(0, 90005783, 1252520800, 1252532164, 1252532165, 1052530701, 1052532701, 1052532162, 2);
    $InitializeEvent(0, 1052532400, 1252520800, 1252532160, 1252532161, 1052530700, 1052532700, 0, false, 1252532400, 1252532401); //enable summon visibility
    $InitializeEvent(1, 1052532400, 1252520800, 1252532164, 1252532165, 1052530701, 1052532701, 0, false, 1252532401, 1252532400); //enable summon visibility
});

// 協力NPC_召喚_xx -- Cooperation NPC_Summon_xx
$Event(1052532400, Default, function(eventFlagId, eventFlagId2, eventFlagId3, npcEntityId, areaEntityId, eventFlagId4, unknown, eventFlagId5, eventFlagId6) {
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(npcEntityId, AuthorityLevel.Forced);
    }
    EndIf(EventFlag(eventFlagId));
    if (0 != eventFlagId4) {
        flagOnlineChrArea &= EventFlag(eventFlagId4);
    }
    flagOnlineChrArea &= PlayerIsInOwnWorld()
        && CharacterBackreadStatus(npcEntityId)
        && EntityInRadiusOfEntity(10000, npcEntityId, 10, 1);
    WaitFor(flagOnlineChrArea);
    EndIf(EventFlag(eventFlagId6));
    SetEventFlagID(eventFlagId5, ON);
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1252520804, ON);
    }
L1:
    PlaceNPCSummonSign(SummonSignType.NPCWhiteSign, npcEntityId, areaEntityId, eventFlagId2, eventFlagId3, unknown);
});

// NPC220壺マイヤー_共闘して勝利イベント -- NPC220 Tsubo Meyer_Fight together and win event
$Event(1052533700, Restart, function() {
    EndIf(EventFlag(1052520800));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1052520800) && (EventFlag(1252532160) || EventFlag(1252532164)));
    SetNetworkconnectedEventFlagID(13009259, ON);
    EndEvent();
});

// NPC220壺マイヤー_白霊召喚停止イベント -- NPC220 Jarmeyer_White Spirit Summoning Stop Event
$Event(1052533701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(3661, 3663));
    SetNetworkconnectedEventFlagID(1035539209, OFF);
    EndEvent();
});


