// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeCommonEvent(0, 9005810, 21000850, 21000001, 21000951, 21001951, 0);
    RegisterBonfire(21000002, 21001952, 0, 0, 0, 0);
    RegisterBonfire(21000006, 21001956, 0, 0, 0, 0);
    RegisterBonfire(21000007, 21001957, 0, 0, 0, 0);
    RegisterBonfire(21000008, 21001958, 0, 0, 0, 0);
    RegisterBonfire(21000009, 21001959, 0, 0, 0, 0);
    $InitializeEvent(0, 21002850);
    $InitializeEvent(0, 21002860);
    $InitializeEvent(0, 21002861);
    $InitializeEvent(0, 21002899);
    $InitializeCommonEvent(0, 90005795, 7623, 0, 2048459292, 21002141, 21002142, 2080603, 209053, 21001735, 30010);
    if (CeremonyActive(20)) {
        $InitializeCommonEvent(0, 90005799, 7623, 21000735, TextBannerType.HostVanquished, 21002141, 21002729, 21000736, 20004825);
    }
    $InitializeEvent(0, 21002144);
    $InitializeCommonEvent(0, 90005795, 7624, 0, 2048459292, 21012151, 21012152, 2080604, 209054, 21001745, 30000);
    if (CeremonyActive(30)) {
        $InitializeCommonEvent(0, 90005798, 7624, 21000745, TextBannerType.BloodyFingerVanquished, 21002151, 21002739, 20004824);
    }
    $InitializeEvent(0, 21002154);
    $InitializeEvent(0, 21002470, 21000472);
    $InitializeEvent(1, 21002470, 21000473);
    $InitializeEvent(0, 21002320);
    $InitializeEvent(0, 21002450);
    $InitializeCommonEvent(0, 90005301, 21000470, 21000470, 21001991, 0, 2);
    $InitializeCommonEvent(0, 90005301, 21000471, 21000471, 21001993, 0, 2);
    $InitializeCommonEvent(0, 90005301, 21000453, 21000453, 21001995, 0, 2);
    $InitializeEvent(0, 21002206);
    $InitializeCommonEvent(0, 900005610, 21001590, 100, 800, 0);
    $InitializeCommonEvent(0, 900005610, 21001591, 100, 800, 0);
    $InitializeCommonEvent(0, 90005501, 21000510, 21000511, 0, 21001510, 21001511, 21001512, 21000512);
    $InitializeCommonEvent(0, 90005501, 21000515, 21000516, 0, 21001515, 21001516, 21001517, 21000517);
    $InitializeCommonEvent(0, 90005501, 21000520, 21000521, 0, 21001520, 21001521, 21001522, 21000522);
    $InitializeCommonEvent(0, 90005501, 21000525, 21000526, 1, 21001525, 21001526, 21001527, 21000527);
    $InitializeCommonEvent(0, 90005501, 21000530, 21000531, 0, 21001530, 21001531, 21001532, 21000532);
    $InitializeCommonEvent(0, 90005501, 21000535, 21000536, 0, 21001535, 21001536, 21001537, 21000537);
    $InitializeCommonEvent(0, 21002515, 21001521);
    $InitializeCommonEvent(1, 21002515, 21001531);
    $InitializeEvent(0, 21002510);
    $InitializeEvent(0, 21002520);
    $InitializeCommonEvent(0, 90005511, 21000560, 21001560, 21003560, -1, 0);
    $InitializeCommonEvent(0, 90005512, 21000560, 21002560, 21002561);
    $InitializeCommonEvent(0, 90005510, 21008562, 21001562, 21003562, 1427027, 20208036, 0);
    $InitializeCommonEvent(0, 90005525, 21000570, 21001570);
    $InitializeCommonEvent(0, 90005525, 21000572, 21001572);
    $InitializeEvent(0, 21002580);
    $InitializeCommonEvent(0, 90005615, 21002690, 21009230);
    $InitializeEvent(0, 21002600, 580120, 21001600, 80120);
    $InitializeCommonEvent(0, 90005780, 21000850, 21002160, 21002161, 21000700, SummonSignType.NPCWhiteSign, 21002160, 0, true, 0); //enable summon sign visibility
    $InitializeCommonEvent(0, 90005781, 21000850, 21002160, 21002161, 21000700);
    $InitializeEvent(0, 21002890, 21002160, 21002855, 21000700, 21002850, 21002859, 0);
    $InitializeEvent(0, 21002198, 21000850, 21002160, 21000700, 21002899);
    $InitializeCommonEvent(0, 90005780, 21000850, 21002164, 21002165, 21000720, SummonSignType.NPCWhiteSign, 21002164, 0, true, 0); //enable summon sign visibility
    $InitializeCommonEvent(0, 90005781, 21000850, 21002164, 21002165, 21000720);
    $InitializeEvent(1, 21002890, 21002164, 21002855, 21000720, 21002850, 21002859, 0);
    $InitializeEvent(1, 21002198, 21000850, 21002164, 21000720, 21002899);
    $InitializeEvent(0, 21000700, 21000710, 4340, 4341, 4342, 4343, 4345, 4346, 4860, 4358, 21002707, 21002706, 21009211, 90103, 45, 90100, 21009230);
    $InitializeCommonEvent(0, 90005750, 21001711, 4350, 106910, 400692, 400692, 21009213, 0);
    $InitializeEvent(0, 21000701, 21009208, 21002710, 21002705);
    $InitializeEvent(0, 21000702, 21002710, 21002711, 21002712, 21000710, 711, 21001710, 711, 0.2, 90212, -1, -1, 1.1, 2.4, 21009220, 21002715, 21009222, 0.05, 21009210, 90213, 21009211);
    $InitializeEvent(0, 21000703, 21002713, 21002714, 21002712, 21000710, 90202, 1, -1, 9600, 0, 21009210, 90201, 21009211);
    $InitializeEvent(0, 21000704, 21002715, 21009221, 0.05);
    $InitializeEvent(0, 21000705, 21000710, 21009214, 21009212, 90205, 21009210, 90203, 21009211, 21009212, 3.2, 21009213, 106900, 21009230);
    $InitializeEvent(0, 21000706, 21009210, 21002706, 21009212, 21002707);
    $InitializeEvent(0, 21000711, 7623, 4363, 4360, 4364, 4892, 2048459220);
    $InitializeEvent(0, 21000712, 21000735, 21002744, 7623);
    $InitializeEvent(0, 21000714, 21002728, 21000730, 21002726, 7623);
    $InitializeEvent(1, 21000714, 21002745, 21000735, 21002746, 7623);
    $InitializeCommonEvent(0, 90005769, 21000735, 21002743, 21000730, 21002722, 21002729, 7623, 7624);
    $InitializeCommonEvent(0, 90005776, 400614, 7623, 116100);
    $InitializeEvent(0, 21000735, 21000735, 21000730, 20);
    $InitializeEvent(1, 21000712, 21000745, 21002735, 7624);
    $InitializeEvent(2, 21000714, 21002758, 21000740, 21002757, 7624);
    $InitializeEvent(3, 21000714, 21002737, 21000745, 21002736, 7624);
    $InitializeCommonEvent(0, 90005769, 21000745, 21002732, 21000740, 21002752, 21002739, 7623, 7624);
    $InitializeCommonEvent(0, 90005776, 400594, 7624, 105920);
    $InitializeEvent(1, 21000735, 21000745, 21000740, 30);
    $InitializeEvent(0, 21000725, 4363, 21000850, 21010800, 4898, 21019205, 2048459220, 21002749);
    $InitializeCommonEvent(0, 90005706, 21000750, 30010, 0);
});

$Event(50, Default, function() {
    $InitializeEvent(0, 21000050);
    $InitializeEvent(0, 21002500);
    if (EventFlag(124)) {
        DisableHit(21007500);
    }
L0:
    $InitializeCommonEvent(0, 90005221, 21000200, 30003, 20003, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000201, 30001, 20001, 21002201, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000202, 30001, 20001, 21002201, 1, 0.3, 1, 0, 0, 0);
    $InitializeEvent(0, 21002203, 21000203, 30001, 20001, 21002203, 0, 1);
    $InitializeCommonEvent(0, 90005261, 21000204, 21002204, 1, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000205, 21002205, 1, 0, 0);
    $InitializeCommonEvent(0, 90005251, 21000207, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000208, 30003, 20003, 21002208, 1, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000209, 21002240, 1, 0.3, 0);
    $InitializeCommonEvent(0, 90005211, 21000210, 30002, 20002, 21002210, 1, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000211, 21002210, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000212, 30001, 20001, 21002212, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000213, 21002212, 1, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000214, 21002246, 1, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000240, 21002240, 1, 1, -1);
    $InitializeCommonEvent(0, 90005261, 21000241, 21002241, 1, 0, 3000);
    $InitializeCommonEvent(0, 90005261, 21000242, 21002242, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000244, 21002244, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000246, 21002246, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000282, 21002283, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000283, 21002283, 1, 0.5, -1);
    $InitializeCommonEvent(0, 90005261, 21000284, 21002284, 1, 0, 3001);
    $InitializeCommonEvent(0, 90005211, 21000285, 30000, 20000, 21002285, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000287, 21002287, 1, 0, 3001);
    $InitializeCommonEvent(0, 90005261, 21000288, 21002287, 1, 0.4, 3001);
    $InitializeCommonEvent(0, 90005211, 21000290, 30000, 20000, 21002290, 0.5, 0.5, 1, 0, 0, 0);
    $InitializeEvent(0, 21002292, 21000292, 21002292);
    $InitializeEvent(0, 21002292, 21000293, 21002293);
    $InitializeEvent(0, 21002292, 21000294, 21002294);
    $InitializeCommonEvent(0, 90005221, 21000260, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000261, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000262, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000263, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000264, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000265, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000266, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000267, 30006, 20006, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000450, 21002450, 1, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000451, 21002451, 1, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000452, 21002452, 1, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000453, 21002320, 1, 1, 0);
    $InitializeCommonEvent(0, 90005261, 21000454, 21002454, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000300, 30002, 20002, 21002300, 1, 0.5, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000301, 30001, 20001, 21002300, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000303, 30001, 20001, 21002302, 1, 0.7, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000304, 30002, 20002, 21002302, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000305, 30001, 20001, 21002305, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000306, 30001, 20001, 21002306, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000307, 30001, 20001, 21002305, 1, 1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000315, 30000, 20000, 21002320, 1, 2, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000316, 30001, 20001, 21002320, 1, 4.5, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000317, 30002, 20002, 21002320, 1, 3.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000318, 30000, 20000, 21002320, 1, 2.2, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000340, 30001, 20001, 21002306, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000350, 21002350, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000351, 21002351, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000352, 21002351, 1, 0, 3022);
    $InitializeCommonEvent(0, 90005211, 21000355, 30000, 20000, 21002355, 3, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000356, 30000, 20000, 21002356, 3, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000368, 21002368, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000369, 21002368, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 21000370, 21002368, 1, 0, -1);
    $InitializeCommonEvent(0, 90005211, 21000380, 30001, 20001, 21002380, 3, 0.7, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005221, 21000381, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005261, 21000382, 21002382, 1, 0, 3014);
    $InitializeCommonEvent(0, 90005211, 21000470, 30002, 20002, 21002470, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000471, 30002, 20002, 21002471, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000472, 30002, 20002, 21002472, 1, 0.1, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 21000473, 30002, 20002, 21002473, 1, 0.1, 1, 0, 0, 0);
});

$Event(21000050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(21000525, ON);
});

$Event(21002144, Restart, function() {
    EndIf(!CeremonyActive(20));
    DisableCharacterHPBarDisplay(21000736);
    SetEventFlagID(1099002100, OFF);
    SetBossBGM(943000, BossBGMState.Start);
    WaitFor(CharacterRatioDead(21000735));
    SetBossBGM(943000, BossBGMState.Stop1);
});

$Event(21002154, Restart, function() {
    EndIf(!CeremonyActive(30));
    SetEventFlagID(1099002100, OFF);
    SetBossBGM(943000, BossBGMState.Start);
    WaitFor(CharacterRatioDead(21000745));
    SetBossBGM(943000, BossBGMState.Stop1);
});

$Event(21002198, Restart, function(eventFlagId, eventFlagId2, npcEntityId, areaEntityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId) || (EventFlag(eventFlagId2) && InArea(10000, areaEntityId)));
    EndIf(EventFlag(eventFlagId));
    SendNPCSummonHome(npcEntityId);
    EndEvent();
});

$Event(21002203, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, timeSeconds, value) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    WaitFor(
        !InArea(chrEntityId, areaEntityId)
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        SetSpecialStandbyEndedFlag(chrEntityId, ON);
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

$Event(21002206, Restart, function() {
    EndIf(ThisEventSlot());
    DisableCharacterAI(21000206);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(21000206, 481)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90110)
        && !CharacterHasSpEffect(21000206, 90160);
    sp2 = CharacterHasSpEffect(21000206, 482)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90120)
        && !CharacterHasSpEffect(21000206, 90160)
        && !CharacterHasSpEffect(21000206, 90162);
    sp3 = CharacterHasSpEffect(21000206, 483)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90140)
        && !CharacterHasSpEffect(21000206, 90160)
        && !CharacterHasSpEffect(21000206, 90161);
    sp4 = CharacterHasSpEffect(21000206, 484)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90130)
        && !CharacterHasSpEffect(21000206, 90161)
        && !CharacterHasSpEffect(21000206, 90162);
    sp5 = CharacterHasSpEffect(21000206, 487)
        && !CharacterHasSpEffect(21000206, 90100)
        && !CharacterHasSpEffect(21000206, 90150)
        && !CharacterHasSpEffect(21000206, 90160);
    area = InArea(10000, 21002206) || InArea(10000, 21002207);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(21000206, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(21000206, 436)
            || CharacterHasStateInfo(21000206, 2)
            || CharacterHasStateInfo(21000206, 5)
            || CharacterHasStateInfo(21000206, 6)
            || CharacterHasStateInfo(21000206, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (InArea(10000, 21002206)) {
        ForceAnimationPlayback(21000206, 3010, false, false, false);
    }
    EnableCharacterAI(21000206);
});

$Event(21002292, Restart, function(entityId, chrEntityId) {
    EndIf(ThisEventSlot());
    EndIf(!EventFlag(21008540));
    IssueShortWarpRequest(entityId, TargetEntityType.Area, chrEntityId, -1);
});

$Event(21002320, Restart, function() {
    if (CharacterDead(21000453) && EventFlag(21002320)) {
        ForceCharacterDeath(21000315, true);
        ForceCharacterDeath(21000316, true);
        ForceCharacterDeath(21000317, true);
        ForceCharacterDeath(21000318, true);
        ForceCharacterDeath(21005320, true);
        DisableGenerator(21003320);
        DisableGenerator(21003321);
        DisableGenerator(21003322);
        EndEvent();
    }
L0:
    if (!EventFlag(21002320)) {
        DisableCharacter(21005320);
        DisableCharacterCollision(21005320);
    }
    DisableGenerator(21003320);
    DisableGenerator(21003321);
    DisableGenerator(21003322);
    WaitFor(EventFlag(124) && InArea(10000, 21002320));
    WaitFixedTimeSeconds(5);
    EnableGenerator(21003320);
    EnableGenerator(21003321);
    EnableGenerator(21003322);
    EnableCharacter(21005320);
    EnableCharacterCollision(21005320);
    WaitFor(
        CharacterDead(21000453)
            || !InArea(10000, 21002320)
            || CharacterAIState(21000453, AIStateType.Combat, NotEqual, 1));
    RestartEvent();
});

$Event(21002450, Restart, function() {
    WaitFor(EventFlag(124) && InArea(10000, 21002320));
    WaitFixedTimeSeconds(2);
    hp &= CharacterRatioHPRatio(21000453) == 100;
    EndIf(hp);
    ForceAnimationPlayback(21000453, 20000, false, false, false);
    WaitFixedTimeSeconds(5);
    hp &= CharacterRatioHPRatio(21000453) == 100;
    EndIf(hp);
    ForceAnimationPlayback(21000453, 3028, false, false, false);
});

$Event(21002470, Restart, function(chrEntityId) {
    if (ThisEventSlot() || EventFlag(124)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        EndEvent();
    }
L0:
    EnableCharacterImmortality(chrEntityId);
    WaitFor(
        EventFlag(124)
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260));
    if (!EventFlag(124)) {
        ForceAnimationPlayback(chrEntityId, 20003, false, true, false);
    }
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    EndEvent();
});

$Event(21002500, Restart, function() {
    if (PlayerIsInOwnWorld()) {
        WaitFor(EventFlag(6910));
    }
    DisableCharacterCollision(21000509);
    DisableCharacterGravity(21000509);
    DisableLockOnPoint(21000509, 220);
    SetCharacterTeamType(21000509, TeamType.Disabled);
    DisableCharacterAI(21000509);
    if (EventFlag(124)) {
        if (!EventFlag(21000500) && InArea(10000, 21002501)) {
            if (PlayerIsInOwnWorld()) {
                PlayCutsceneToPlayerAndWarp(21000020, CutscenePlayMode.Skippable, 21002500, 21000000, 10000, 21000000, false);
            } else {
                PlayCutsceneToPlayer(21000020, CutscenePlayMode.Skippable, 10000);
            }
            WaitFixedTimeRealFrames(1);
        }
L1:
        SetNetworkconnectedEventFlagID(21000500, ON);
        DisableObjAct(21001500, -1);
        ForceAnimationPlayback(21001500, 12, false, false, false);
        DisableAssetInvunerability(21001502);
        DisableAsset(21006500);
        DisableHit(21007500);
        WarpAssetToCharacter(21001509, 21000509, -1);
        ReproduceAssetAnimation(21001509, 10);
        EnableCharacter(21005500);
        WaitFixedTimeSeconds(1);
        EnableCharacter(21005470);
        EndEvent();
    }
L0:
    DisableCharacter(21005500);
    DisableCharacter(21005470);
    EnableAssetInvunerability(21001502);
    if (!(HasMultiplayerState(MultiplayerState.MultiplayerPending)
        && !HasMultiplayerState(MultiplayerState.Multiplayer))) {
        EnableObjAct(21001500, -1);
        WaitFor(
            PlayerIsInOwnWorld()
                && (ObjActEventFlag(21003500)
                    || (HasMultiplayerState(MultiplayerState.MultiplayerPending)
                        && !HasMultiplayerState(MultiplayerState.Multiplayer))));
        if (!(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && !HasMultiplayerState(MultiplayerState.Multiplayer))) {
            SetNetworkconnectedEventFlagID(124, ON);
            SetNetworkconnectedEventFlagID(9021, ON);
            if (PlayerIsInOwnWorld()) {
                PlayCutsceneToPlayerAndWarp(21000020, CutscenePlayMode.Skippable, 21002500, 21000000, 10000, 21000000, false);
            } else {
                PlayCutsceneToPlayer(21000020, CutscenePlayMode.Skippable, 10000);
            }
            WaitFixedTimeRealFrames(1);
            SetNetworkconnectedEventFlagID(21000500, ON);
            DisableAssetInvunerability(21001502);
            DisableAsset(21006500);
            DisableHit(21007500);
            WarpAssetToCharacter(21001509, 21000509, -1);
            ReproduceAssetAnimation(21001509, 10);
            EnableCharacter(21005500);
            WaitFixedTimeSeconds(1);
            EnableCharacter(21005470);
        }
    }
L1:
    DisableObjAct(21001500, -1);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

$Event(21002505, Restart, function() {
    DisableNetworkSync();
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9710, 21001576));
    WaitFixedTimeSeconds(0.1);
    SetEventFlagID(9021, ON);
    SetPlayerRespawnPoint(2049472020);
    SaveRequest();
    PlayCutsceneToPlayerAndWarp(21000000, CutscenePlayMode.Skippable, 2049472020, 61494700, 10000, 21000000, false);
    WaitFixedTimeRealFrames(1);
    PlayCutsceneToPlayer(21000010, CutscenePlayMode.SkippableWithFadeOutSkip, 10000);
    WaitFixedTimeFrames(1);
    WaitFixedTimeSeconds(1);
});

$Event(21002510, Default, function() {
    $InitializeCommonEvent(0, 90005500, 21000510, 21000511, 0, 21001510, 21001511, 21003511, 21001512, 21003512, 21002511, 21002512, 21000512, 21000513, 0);
    $InitializeCommonEvent(0, 90005500, 21000515, 21000516, 0, 21001515, 21001516, 21003516, 21001517, 21003517, 21002516, 21002517, 21000517, 21000518, 0);
    $InitializeCommonEvent(0, 90005500, 21000520, 21000521, 0, 21001520, 21001521, 21003521, 21001522, 21003522, 21002521, 21002522, 21000522, 21000523, 0);
    $InitializeCommonEvent(0, 90005500, 21000525, 21000526, 1, 21001525, 21001526, 21003526, 21001527, 21003527, 21002526, 21002527, 21000527, 21000528, 0);
    $InitializeCommonEvent(0, 90005500, 21000530, 21000531, 0, 21001530, 21001531, 21003531, 21001532, 21003532, 21002531, 21002532, 21000532, 21000533, 0);
    $InitializeCommonEvent(0, 90005500, 21000535, 21000536, 0, 21001535, 21001536, 21003536, 21001537, 21003537, 21002536, 21002537, 21000537, 21000538, 0);
});

$Event(21002515, Restart, function(assetEntityId) {
    DisableNetworkSync();
    if (EventFlag(124)) {
        EnableObjAct(assetEntityId, -1);
        EndEvent();
    }
    WaitFixedTimeFrames(2);
    DisableObjAct(assetEntityId, -1);
    WaitFor(ActionButtonInArea(8301, assetEntityId) || EventFlag(124));
    if (!EventFlag(124)) {
        DisplayGenericDialog(4000, PromptType.OKCANCEL, NumberofOptions.OneButton, 0, 3);
    }
    RestartEvent();
});

$Event(21002520, Restart, function() {
    DisableNetworkSync();
    if (EventFlag(21008540)) {
        DisableObjAct(21001540, -1);
        EndEvent();
    }
L0:
    if (EventFlag(21000850)) {
        EnableObjAct(21001540, -1);
    } else {
        WaitFixedTimeFrames(1);
        DisableObjAct(21001540, -1);
        flagOnlineAct &= EventFlag(21000850);
        WaitFor(flagOnlineAct);
        EnableObjAct(21001540, -1);
    }
L0:
    flagOnlineAct &= PlayerIsInOwnWorld() && ActionButtonInArea(7101, 21001540);
    WaitFor(flagOnlineAct || EventFlag(21008540));
    EndIf(EventFlag(21008540));
    DisplayGenericDialog(4010, PromptType.OKCANCEL, NumberofOptions.OneButton, 21001540, 3);
    RestartEvent();
});

$Event(21002580, Restart, function() {
    RegisterLadder(21000580, 21000581, 21001580);
    if (!(CeremonyActive(20) || CeremonyActive(30))) {
        RegisterLadder(21000582, 21000583, 21001582);
    }
    RegisterLadder(21000584, 21000585, 21001584);
    RegisterLadder(21000586, 21000587, 21001586);
});

$Event(21002600, Restart, function(eventFlagId, assetEntityId, itemLotId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(!PlayerIsInOwnWorld());
    DeleteAssetfollowingSFX(assetEntityId, false);
    CreateAssetfollowingSFX(assetEntityId, 200, 806845);
    WaitFor(PlayerIsInOwnWorld() && ActionButtonInArea(9310, assetEntityId));
    DeleteAssetfollowingSFX(assetEntityId, true);
    PlaySE(assetEntityId, SoundType.SFX, 806841);
    WaitFixedTimeSeconds(0.1);
    AwardItemsIncludingClients(itemLotId);
});

//golden hippo
$Event(21002850, Restart, function() {
    EndIf(!EventFlag(1049308169) && !EventFlag(1049309718) && !EventFlag(1049309719)); //end if boss not selected
    EndIf(EventFlag(21000850));
    WaitFor(CharacterHPValue(21000850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(21000850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(21000850));
    HandleBossDefeatAndDisplayBanner(21000850, TextBannerType.GreatEnemyFelled);
    //boss rewards (6 bonus items, DLC version)
    InitializeCommonEvent(0, 90001046, 1049304284, 1049304152, 1049304158, 1049307216, 1049307217, 1049307218, 1049307219, 1049307220, 1049307221, 1049307222, 1049306354, 1049306356, 1049306358, 1049306362, 1049306367, 1049306369, 1049306371, 1049300284);
    //boss defeat and warp
    if (EventFlag(1049308169)) //full fight
        $InitializeCommonEvent(0, 90009810, 1049307569);
    else if (EventFlag(1049309718)) //phase 2 restore hp
        $InitializeCommonEvent(0, 90009810, 1049307718);
    else if (EventFlag(1049309719)) //phase 2 normal hp
        $InitializeCommonEvent(0, 90009810, 1049307719);
});

$Event(21002860, Restart, function() {
    if (EventFlag(21000850)) {
        DisableCharacter(21005850);
        DisableCharacterCollision(21005850);
        ForceCharacterDeath(21005850, false);
        EndEvent();
    }
L0:
    if (EventFlag(1049309718) || EventFlag(1049309719)) //if phase 2 selected
        SetSpEffect(21000850, 10010050);
    DisableCharacterAI(21005850);
    if (!EventFlag(21000851)) {
        SetSpEffect(21000100, 9531);
        ForceAnimationPlayback(21000850, 30000, false, false, false);
        DisableCharacterCollision(21000850);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 21002851))
                || HasDamageType(21000850, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(21000851, ON);
        ForceAnimationPlayback(21000850, 20000, false, false, false);
        EnableCharacterCollision(21000850);
    } else {
L1:
        ForceAnimationPlayback(21000850, 30000, false, false, false);
        DisableCharacterCollision(21000850);
        WaitFor(EventFlag(21002855) && InArea(10000, 21002850));
        ForceAnimationPlayback(21000850, 20000, false, false, false);
        EnableCharacterCollision(21000850);
    }
L2:
    EnableCharacterAI(21005850);
    SetNetworkUpdateRate(21005800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(21000100, 9532);
    WaitFixedTimeSeconds(0.5);
    DisplayBossHealthBar(Enabled, 21000850, 0, 905010000);
    if (EventFlag(1049309719)) { //if phase 2 & normal hp
        WaitFixedTimeFrames(5);
        SetSpEffect(21000850, 10493042);
    }
});

//hippo p2
$Event(21002861, Restart, function() {
    EndIf(EventFlag(21000850));
    WaitFor(CharacterHasSpEffect(21000850, 10010050));
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(21002852, ON);
});

$Event(21002890, Restart, function(eventFlagId, eventFlagId2, chrEntityId, areaEntityId, areaEntityId2, animationId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    if (!InArea(chrEntityId, 21002890)) {
        RequestCharacterAICommand(chrEntityId, 10, 0);
        RequestCharacterAIReplan(chrEntityId);
        SetEventPoint(chrEntityId, areaEntityId2, 0);
        WaitFor(InArea(chrEntityId, areaEntityId2));
        if (Signed(animationId) != 0) {
            RotateCharacter(chrEntityId, areaEntityId, animationId, true);
        } else {
            RotateCharacter(chrEntityId, areaEntityId, 60060, true);
        }
        time = ElapsedSeconds(3);
        WaitFor(time || InArea(chrEntityId, areaEntityId));
        RestartIf(time.Passed);
        RequestCharacterAICommand(chrEntityId, -1, 0);
        RequestCharacterAIReplan(chrEntityId);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    }
L10:
    EndEvent();
});

$Event(21002899, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 21000850, 21001850, 21002850, 21002855, 21005850, 10000, 21000851, 21002851);
    $InitializeCommonEvent(0, 9005801, 21000850, 21001850, 21002850, 21002855, 21002856, 10000);
    $InitializeCommonEvent(0, 9005811, 21000850, 21001850, 5, 21000851);
    $InitializeCommonEvent(0, 9005822, 21000850, 920600, 21002855, 21002856, 0, 21002852, 0, 0);
    $InitializeCommonEvent(0, 9005812, 21000850, 21001851, 5, 21000851, 0);
    $InitializeCommonEvent(0, 9005812, 21000850, 21001852, 5, 21000851, 0);
});

$Event(21000700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, eventFlagId8, eventFlagId9, eventFlagId10, eventFlagId11, animationId, range, animationId2, eventFlagId12) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetEventFlagID(eventFlagId12, OFF);
    if (!EventFlag(eventFlagId6)) {
        WaitFor(EventFlag(eventFlagId6) || (EventFlag(eventFlagId5) && EventFlag(eventFlagId7)));
        if (EventFlag(eventFlagId7)) {
            SetEventFlagID(eventFlagId8, ON);
            WaitFixedTimeFrames(1);
        }
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L2, EventFlag(eventFlagId2));
    GotoIf(L3, EventFlag(eventFlagId3));
    GotoIf(L4, EventFlag(eventFlagId4));
L1:
    EndIf(EventFlag(eventFlagId9) && EventFlag(eventFlagId10));
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetEventFlagID(eventFlagId12, ON);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    EnableCharacterInvincibility(chrEntityId);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ResetCharacterPosition(chrEntityId);
    GotoIf(S0, !(EventFlag(eventFlagId9) && EventFlag(eventFlagId11)));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    Goto(L20);
S0:
    SetCharacterTalkRange(chrEntityId, range);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    Goto(L20);
L2:
    Goto(L20);
L3:
    Goto(L20);
L4:
    Goto(L20);
L20:
    WaitFor(!EventFlag(eventFlagId6));
    RestartEvent();
});

$Event(21000701, Restart, function(eventFlagId, areaEntityId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(InArea(20000, areaEntityId) || EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    SetEventFlagID(eventFlagId2, ON);
    EndEvent();
});

$Event(21000702, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, dummypolyId, assetEntityId, dummypolyId2, targetDistance, animationId, animationId2, spEffectId, targetDistance2, targetTimeSeconds, eventFlagId4, eventFlagId5, eventFlagId6, timeSeconds, eventFlagId7, animationId3, eventFlagId8) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId6, OFF);
    WaitFor(EventFlag(eventFlagId));
    if (Signed(dummypolyId) != 0) {
        GotoIf(L0, assetEntityId == 0);
        WarpAssetToCharacter(assetEntityId, chrEntityId, dummypolyId2);
        WaitFixedTimeRealFrames(1);
        area &= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance, 1);
        GotoIf(S0, !area);
        SetEventFlagID(eventFlagId2, ON);
        SetEventFlagID(eventFlagId6, ON);
        Goto(L15);
S0:
        GotoIf(S1, 
            !(EntityInRadiusOfEntity(10000, assetEntityId, targetDistance2, 1)
                && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2, 1)));
        SetEventFlagID(eventFlagId2, ON);
        SetEventFlagID(eventFlagId6, ON);
        Goto(L15);
S1:
        RotateCharacter(10000, assetEntityId, -1, true);
        RotateCharacter(10000, assetEntityId, 90006, false);
        Goto(L8);
    }
L0:
    RotateCharacter(10000, chrEntityId, -1, true);
    area &= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    GotoIf(L9, area);
    RotateCharacter(10000, chrEntityId, 90006, false);
    Goto(L8);
L8:
    SetEventFlagID(eventFlagId4, ON);
    WaitFixedTimeRealFrames(1);
    SetEventFlagID(eventFlagId4, OFF);
    sp = !CharacterHasSpEffect(10000, 9900);
    flagTime = !EventFlag(eventFlagId) || ElapsedSeconds(targetTimeSeconds);
    spFlagTimeArea |= sp || flagTime;
    if (Signed(dummypolyId) != 0) {
        GotoIf(S2, assetEntityId == 0);
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, assetEntityId, targetDistance, 1);
    } else {
S2:
        spFlagTimeArea |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    }
    WaitFor(spFlagTimeArea);
    GotoIf(L20, sp.Passed);
    GotoIf(L19, flagTime.Passed);
L9:
    SetEventFlagID(eventFlagId2, ON);
    if (Signed(dummypolyId) != 0) {
        RequestCharacterAnimationReset(10000, Disabled);
        GotoIf(S3, EventFlag(eventFlagId6));
        RotateCharacter(10000, chrEntityId, -1, true);
        RotateCharacter(10000, chrEntityId, animationId, false);
        Goto(S4);
    }
S3:
    Goto(L15);
S4:
    SetEventFlagID(eventFlagId5, ON);
    WaitFixedTimeSeconds(timeSeconds);
L15:
    if (eventFlagId3 != 0) {
        SetEventFlagID(eventFlagId3, ON);
    }
    if (Signed(dummypolyId) != 0) {
        IssueShortWarpRequest(10000, TargetEntityType.Character, chrEntityId, dummypolyId);
    }
    if (Signed(spEffectId) != -1) {
        RotateCharacter(10000, chrEntityId, animationId, false);
        Goto(S5);
    }
    GotoIf(S6, !EventFlag(eventFlagId7));
S5:
    RotateCharacter(10000, chrEntityId, animationId, true);
S6:
    if (EventFlag(eventFlagId8)) {
        RotateCharacter(10000, chrEntityId, animationId3, true);
    }
    Goto(L8);
L8:
    WaitFixedTimeRealFrames(1);
    sp2 = !CharacterHasSpEffect(10000, 9900);
    WaitFor(!EventFlag(eventFlagId) || sp2);
    if (!sp2.Passed) {
        if (Signed(animationId2) != -1) {
            if (Signed(spEffectId) != -1) {
                sp3 = !CharacterHasSpEffect(10000, 9900);
                WaitFor(CharacterHasSpEffect(10000, spEffectId) || sp3);
                GotoIf(L20, sp3.Passed);
            }
L10:
            SetEventFlagID(eventFlagId2, OFF);
            ForceAnimationPlayback(10000, animationId2, false, true, false);
            RestartEvent();
        }
L18:
        SetEventFlagID(eventFlagId2, OFF);
        RestartEvent();
    }
L19:
    SetEventFlagID(eventFlagId, OFF);
    ForceAnimationPlayback(10000, 0, false, false, false);
    RestartEvent();
L20:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(21000703, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, chrEntityId, animationId, value, value2, spEffectId, timeSeconds, eventFlagId4, animationId2, eventFlagId5) {
    EndIf(!PlayerIsInOwnWorld());
    if (eventFlagId3 != 0) {
        cond &= EventFlag(eventFlagId3);
    }
    cond &= EventFlag(eventFlagId);
    WaitFor(cond);
    SetEventFlagID(eventFlagId2, ON);
    if (eventFlagId3 != 0) {
        SetEventFlagID(eventFlagId3, OFF);
    }
    if (value != 1) {
        if (Signed(spEffectId) != -1) {
            if (EventFlag(eventFlagId4)) {
                ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
            }
            if (EventFlag(eventFlagId5)) {
                ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
            }
            Goto(S0);
        }
        GotoIf(S1, !EventFlag(eventFlagId4));
S0:
        ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
S1:
        if (EventFlag(eventFlagId5)) {
            ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
        }
    } else {
L0:
        if (Signed(spEffectId) != -1) {
            if (EventFlag(eventFlagId4)) {
                RotateCharacter(chrEntityId, 10000, animationId, false);
            }
            if (EventFlag(eventFlagId5)) {
                RotateCharacter(chrEntityId, 10000, animationId2, false);
            }
            Goto(S2);
        }
        GotoIf(S3, !EventFlag(eventFlagId4));
S2:
        RotateCharacter(chrEntityId, 10000, animationId, false);
S3:
        if (EventFlag(eventFlagId5)) {
            RotateCharacter(chrEntityId, 10000, animationId2, false);
        }
        Goto(L10);
    }
L10:
    cond &= !EventFlag(eventFlagId);
    if (Signed(spEffectId) != -1) {
        cond &= CharacterHasSpEffect(chrEntityId, spEffectId);
    }
    WaitFor(cond);
    if (Signed(value2) != -1) {
        SetEventFlagID(eventFlagId2, OFF);
        WaitFixedTimeSeconds(timeSeconds);
        RestartEvent();
    }
L19:
    SetEventFlagID(eventFlagId2, OFF);
    WaitFixedTimeSeconds(timeSeconds);
    RestartEvent();
L20:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(21000704, Restart, function(eventFlagId, eventFlagId2, timeSeconds) {
    WaitFixedTimeFrames(1);
    WaitFor(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId2, ON);
    WaitFixedTimeSeconds(timeSeconds);
L0:
    SetEventFlagID(eventFlagId, OFF);
    SetEventFlagID(eventFlagId2, OFF);
    RestartEvent();
});

$Event(21000705, Restart, function(chrEntityId, eventFlagId, eventFlagId2, animationId, eventFlagId3, animationId2, eventFlagId4, eventFlagId5, timeSeconds, eventFlagId6, itemLotId, eventFlagId7) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    if (!EventFlag(eventFlagId2)) {
        WaitFor(EventFlag(eventFlagId));
        if (EventFlag(eventFlagId3)) {
            ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        }
        if (EventFlag(eventFlagId4)) {
            ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
        }
        SetEventFlagID(eventFlagId5, ON);
        WaitFixedTimeSeconds(timeSeconds);
        if (EventFlag(eventFlagId3)) {
            DisableCharacter(chrEntityId);
            SetCharacterBackreadState(chrEntityId, true);
            AwardItemLot(itemLotId);
            SetEventFlagID(eventFlagId7, OFF);
        }
    }
L1:
    if (EventFlag(eventFlagId4)) {
        SetEventFlagID(eventFlagId6, ON);
    }
    WaitFor(!EventFlag(eventFlagId) || EventFlag(eventFlagId2));
    RestartIf(!EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
});

$Event(21000706, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId2) && EventFlag(eventFlagId4));
    if (EventFlag(eventFlagId)) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
    if (EventFlag(eventFlagId3)) {
        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
    }
    RestartIf(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, eventFlagId3));
});

$Event(21000711, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(eventFlagId2) && EventFlag(eventFlagId));
    BatchSetNetworkconnectedEventFlags(eventFlagId3, eventFlagId4, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId6, OFF);
    SaveRequest();
    SetEventFlagID(4378, ON);
});

$Event(21000712, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(eventFlagId2));
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified) && !CharacterDead(chrEntityId));
    SetEventFlagID(eventFlagId, ON);
});

$Event(21000714, Restart, function(eventFlagId, chrEntityId, eventFlagId2, eventFlagId3) {
    WaitFixedTimeFrames(1);
    EndIf(EventFlag(eventFlagId3));
    WaitFor(CharacterHPValue(10000) <= 0 || CharacterHPValue(chrEntityId) <= 0);
    if (CharacterHPValue(10000) <= 0) {
        SetEventFlagID(eventFlagId, ON);
    }
    if (CharacterHPValue(chrEntityId) <= 0) {
        SetEventFlagID(eventFlagId2, ON);
    }
});

$Event(21000725, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    GotoIf(L0, !EventFlag(eventFlagId7));
    Goto(L1);
L0:
    flag = EventFlag(eventFlagId)
        || EventFlag(eventFlagId2)
        || EventFlag(eventFlagId3)
        || EventFlag(eventFlagId4)
        || EventFlag(eventFlagId5);
    WaitFor(flag || EventFlag(eventFlagId6));
    EndIf(flag.Passed);
    SetEventFlagID(eventFlagId7, ON);
    RestartEvent();
L1:
    WaitFor(
        EventFlag(eventFlagId)
            || EventFlag(eventFlagId2)
            || EventFlag(eventFlagId3)
            || EventFlag(eventFlagId4)
            || EventFlag(eventFlagId5)
            || !EventFlag(eventFlagId7));
    SetEventFlagID(eventFlagId7, OFF);
    RestartEvent();
});

$Event(21000735, Restart, function(chrEntityId, chrEntityId2, ceremonyId) {
    WaitFixedTimeFrames(1);
    EndIf(!CeremonyActive(ceremonyId));
    WaitFor(CharacterHPValue(chrEntityId) <= 0 || CharacterDead(chrEntityId));
    DisableCharacterAI(chrEntityId2);
});
