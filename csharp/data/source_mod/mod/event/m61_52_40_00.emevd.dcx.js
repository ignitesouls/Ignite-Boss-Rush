// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2052400000, 2052401950, 0, 0, 0, 5);
    if (EventFlag(1049308203)) { //if boss selected (jagged peak drake x2)
        $InitializeCommonEvent(0, 90005860, 2052400800, 0, 2052400800, 1, 30800, 0);
        $InitializeEvent(0, 2052400202, 2052400800, 905580600, 920300, 70, 120, 2052400200);
        $InitializeEvent(0, 2052402812);
        $InitializeEvent(0, 2052402800, 2052400800);
        $InitializeEvent(0, 2052402203, 2052400800);
    }
    $InitializeEvent(1, 2052402203, 2052400200);
    $InitializeEvent(0, 2052402811);
    $InitializeEvent(0, 2052402201, 2052400200);
    $InitializeEvent(0, 2052402200, 2052405200, 2052402200);
    $InitializeEvent(0, 2052400700, 2052400700, 4260, 4261, 4262, 4263, 4267, 4268, 2052409202, 200, 2052409211);
    $InitializeEvent(0, 2052400702, 4267, 4261, 90405, 2052400700, 4263, 7, 2);
    $InitializeCommonEvent(0, 90005744, 2052400700, 2052409209, 4268, 90207);
    $InitializeEvent(0, 2052400701, 2052409209, 2052402703, 2052402705, 10, 4261, 4263, 2052402706, 2052402707);
    $InitializeCommonEvent(0, 90005703, 2052400700, 4261, 4262, 2052409201, 4261, 4260, 4264, 0);
    $InitializeCommonEvent(0, 90005704, 2052400700, 4261, 4260, 2052409201, 3);
    $InitializeCommonEvent(0, 90005702, 2052400700, 4263, 4260, 4264);
    $InitializeCommonEvent(0, 90005750, 2052401700, 4350, 107110, 400712, 400712, 2052409211, 6102);
    $InitializeCommonEvent(0, 90005750, 2052401700, 4350, 107120, 400714, 400714, 2052409212, 6102);
    $InitializeEvent(0, 2052400704, 2052400800, 4278, 4265);
    $InitializeEvent(0, 2052400703, 2052400701, 4260, 4261, 4262, 4263, 4268);
});

$Event(2052402200, Restart, function(chrEntityId, areaEntityId) {
    SetSpEffect(chrEntityId, 4800);
    SetSpEffect(chrEntityId, 5651);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                || HasDamageType(chrEntityId, 35000, DamageType.Unspecified)
                || HasDamageType(35000, chrEntityId, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, chrEntityId, 10, 1)
                || EntityInRadiusOfEntity(35000, chrEntityId, 10, 1)
                || InArea(10000, areaEntityId)
                || InArea(35000, areaEntityId)));
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    ClearSpEffect(chrEntityId, 5651);
    ClearSpEffect(chrEntityId, 4800);
});

$Event(2052402201, Restart, function(chrEntityId) {
    if (EventFlag(2052400800)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
    DisableCharacterHPBarDisplay(chrEntityId);
    SetSpEffect(chrEntityId, 4403);
    SetSpEffect(chrEntityId, 20012700);
    SetCharacterTeamType(chrEntityId, TeamType.Unknown70);
    WaitFixedTimeSeconds(3);
    EnableCharacterHPBarDisplay(chrEntityId);
    WaitFor(CharacterDead(2052400800));
    SetSpEffect(chrEntityId, 20012700);
});

$Event(2052400202, Default, function(chrEntityId, nameId, bgmBossConvParamId, targetDistance, targetDistance2, chrEntityId2) {
    DisableNetworkSync();
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            && !EventFlag(9000)
            && (HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                || HasDamageType(chrEntityId, 35000, DamageType.Unspecified)
                || HasDamageType(35000, chrEntityId, DamageType.Unspecified)
                || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
                || EntityInRadiusOfEntity(35000, chrEntityId, targetDistance, 1)));
    SetSpEffect(chrEntityId, 20012704);
    ClearSpEffect(chrEntityId2, 4800);
    ClearSpEffect(chrEntityId, 4800);
    if (EventFlag(9290)) {
        GotoIf(L1, !EventFlag(9291));
        WaitFixedTimeSeconds(5);
        RestartEvent();
    }
L0:
    SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    SetEventFlagID(9290, ON);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, chrEntityId, 0, nameId);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    chr = !CharacterAIState(chrEntityId, AIStateType.Combat);
    WaitFor(
        CharacterDead(chrEntityId)
            || EventFlag(9000)
            || !(EntityInRadiusOfEntity(10000, chrEntityId, targetDistance2, 1)
                || (!(CharacterType(10001, TargetType.BlackPhantom)
                    || CharacterType(10001, TargetType.Invader)
                    || CharacterType(10001, TargetType.Invader3)
                    || CharacterType(10001, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10001, chrEntityId, targetDistance2, 1))
                || (!(CharacterType(10002, TargetType.BlackPhantom)
                    || CharacterType(10002, TargetType.Invader)
                    || CharacterType(10002, TargetType.Invader3)
                    || CharacterType(10002, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10002, chrEntityId, targetDistance2, 1))
                || (!(CharacterType(10003, TargetType.BlackPhantom)
                    || CharacterType(10003, TargetType.Invader)
                    || CharacterType(10003, TargetType.Invader3)
                    || CharacterType(10003, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10003, chrEntityId, targetDistance2, 1))
                || (!(CharacterType(10004, TargetType.BlackPhantom)
                    || CharacterType(10004, TargetType.Invader)
                    || CharacterType(10004, TargetType.Invader3)
                    || CharacterType(10004, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10004, chrEntityId, targetDistance2, 1))
                || (!(CharacterType(10004, TargetType.BlackPhantom)
                    || CharacterType(10004, TargetType.Invader)
                    || CharacterType(10004, TargetType.Invader3)
                    || CharacterType(10004, TargetType.Invader2))
                    && EntityInRadiusOfEntity(10004, chrEntityId, targetDistance2, 1))
                || EntityInRadiusOfEntity(35000, chrEntityId, targetDistance2, 1)));
    SetSpEffect(chrEntityId2, 4800);
    SetSpEffect(chrEntityId, 4800);
    SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
    if (CharacterDead(chrEntityId)) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
        EndEvent();
    }
    if (!EventFlag(9000)) {
        WaitFixedTimeSeconds(1);
    }
    DisplayBossHealthBar(Disabled, chrEntityId, 0, nameId);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
        SetNetworkUpdateRate(chrEntityId, false, CharacterUpdateFrequency.AtLeastEvery2Frames);
    }
    SetEventFlagID(9290, OFF);
    RestartEvent();
});

$Event(2052402800, Restart, function(chrEntityId) {
    EndIf(EventFlag(2052400800));
    SetSpEffect(chrEntityId, 20012700);
    SetCharacterTeamType(chrEntityId, TeamType.Unknown67);
    WaitFor(CharacterDead(2052400200));
    SetSpEffect(chrEntityId, 20012700);
});

$Event(2052402811, Restart, function() {
    EndIf(EventFlag(2052400800));
    SetSpEffect(2052400800, 20012706);
    WaitFixedTimeSeconds(20.1);
    RestartEvent();
});

$Event(2052402812, Restart, function() {
    SetCharacterEnableDistanceAndUnknown200484(2052400800, 300, 100);
    SetCharacterEnableDistanceAndUnknown200484(2052400200, 300, 100);
});

$Event(2052402203, Restart, function(chrEntityId) {
    EndIf(CharacterDead(2052400200) || CharacterDead(2052400800));
    WaitFor(!InArea(chrEntityId, 2052402803) && !CharacterHasSpEffect(chrEntityId, 20011655));
    SetCharacterEventTarget(chrEntityId, 2052400803);
    SetSpEffect(chrEntityId, 20011655);
    RestartEvent();
});

$Event(2052400700, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7, range, eventFlagId8) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(eventFlagId)) {
            SetEventFlagID(eventFlagId7, OFF);
        }
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (!EventFlag(eventFlagId5)) {
        WaitFor(EventFlag(eventFlagId5));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L2, EventFlag(eventFlagId2));
    GotoIf(L3, EventFlag(eventFlagId3));
    GotoIf(L4, EventFlag(eventFlagId4));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ResetCharacterPosition(chrEntityId);
    if (EventFlag(eventFlagId5)) {
        SetCharacterTalkRange(chrEntityId, range);
        ForceAnimationPlayback(chrEntityId, 90102, false, false, false);
    }
    if (EventFlag(eventFlagId6)) {
        SetCharacterTeamType(chrEntityId, TeamType.Disabled);
        ForceAnimationPlayback(chrEntityId, 90103, false, false, false);
    }
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ResetCharacterPosition(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    ForceAnimationPlayback(chrEntityId, 90102, false, false, false);
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L3:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    ForceAnimationPlayback(chrEntityId, 90102, false, false, false);
    Goto(L20);
L4:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (!EventFlag(eventFlagId8)) {
        ForceCharacterTreasure(chrEntityId);
    }
    Goto(L20);
L20:
    WaitFor(!(EventFlag(eventFlagId5) || EventFlag(eventFlagId6)));
    RestartEvent();
});

$Event(2052400701, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, targetTimeSeconds, eventFlagId4, eventFlagId5, eventFlagId6, eventFlagId7) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId5));
    GotoIf(L1, !EventFlag(eventFlagId2) && !EventFlag(eventFlagId3));
    GotoIf(L2, EventFlag(eventFlagId2) && !EventFlag(eventFlagId3));
    EndEvent();
L1:
    WaitFor(EventFlag(eventFlagId2) && !EventFlag(eventFlagId3));
    RestartEvent();
L2:
    if (EventFlag(eventFlagId6)) {
        SetEventFlagID(eventFlagId6, OFF);
    }
    WaitFor(
        ElapsedSeconds(targetTimeSeconds)
            || EventFlag(eventFlagId4)
            || EventFlag(eventFlagId5)
            || EventFlag(eventFlagId6)
            || EventFlag(eventFlagId7));
    EndIf(EventFlag(eventFlagId4));
    EndIf(EventFlag(eventFlagId5));
    RestartIf(EventFlag(eventFlagId6));
    if (EventFlag(eventFlagId7)) {
        SetEventFlagID(eventFlagId2, OFF);
        SetEventFlagID(eventFlagId3, OFF);
        SetEventFlagID(eventFlagId7, OFF);
        RestartEvent();
    }
    SetEventFlagID(eventFlagId3, ON);
    SetEventFlagID(eventFlagId2, OFF);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(2052400702, Restart, function(eventFlagId, eventFlagId2, animationId, entityId, eventFlagId3, targetDistance, targetTimeSeconds) {
    WaitFixedTimeFrames(2);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId3));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, eventFlagId);
    if (!(EventFlag(eventFlagId) && !EventFlag(eventFlagId2))) {
        WaitFor(
            EventFlag(eventFlagId)
                && EventFlag(eventFlagId2)
                && (HasDamageType(entityId, 20000, DamageType.Unspecified)
                    || (EntityInRadiusOfEntity(20000, entityId, targetDistance, 1)
                        && ElapsedSeconds(targetTimeSeconds))));
        ForceAnimationPlayback(entityId, animationId, true, false, false);
        WaitFixedTimeSeconds(5.5);
        RestartEvent();
    }
L10:
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    ForceAnimationPlayback(entityId, animationId, true, false, false);
    WaitFixedTimeSeconds(5.5);
    RestartEvent();
});

$Event(2052400703, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    GotoIf(L10, !PlayerIsInOwnWorld());
    GotoIf(S0, !EventFlag(eventFlagId));
L10:
S0:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (!EventFlag(eventFlagId5)) {
        WaitFor(EventFlag(eventFlagId5));
        RestartEvent();
    }
L0:
    GotoIf(L1, EventFlag(eventFlagId));
    GotoIf(L1, EventFlag(eventFlagId2));
    GotoIf(L1, EventFlag(eventFlagId3));
    GotoIf(L4, EventFlag(eventFlagId4));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    WaitFor(CharacterBackreadStatus(chrEntityId));
    ResetCharacterPosition(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    ForceAnimationPlayback(chrEntityId, 90103, false, false, false);
    WaitFixedTimeRealFrames(1);
    Goto(L20);
L4:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(eventFlagId5));
    RestartEvent();
});

$Event(2052400704, Restart, function(eventFlagId, eventFlagId2, eventFlagId3) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId3));
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId2, ON);
});

$Event(2052400705, Restart, function(eventFlagId, itemId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId, OFF);
    EndIf(EventFlag(eventFlagId2));
    WaitFor(PlayerHasItem(ItemType.Goods, itemId));
    SetEventFlagID(eventFlagId, ON);
});

$Event(2052400706, Restart, function(assetEntityId, actionButtonParameterId, itemLotId, eventFlagId, eventFlagId2, eventFlagId3, sfxId, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        EventFlag(eventFlagId3)
            && !AllBatchEventFlags(eventFlagId, eventFlagId2)
            && !EventFlag(eventFlagId4));
    if (Signed(sfxId) != 0) {
        CreateAssetfollowingSFX(assetEntityId, 90, sfxId);
    } else {
        CreateAssetfollowingSFX(assetEntityId, 90, 6101);
    }
    flag = !EventFlag(eventFlagId3) || AllBatchEventFlags(eventFlagId, eventFlagId2);
    WaitFor(ActionButtonInArea(actionButtonParameterId, assetEntityId) || flag);
    if (!flag.Passed) {
        DeleteAssetfollowingSFX(assetEntityId, true);
        AwardItemsIncludingClients(itemLotId);
        EzstateInstructionRequest(10000, 60070, 0);
        EndEvent();
    }
L0:
    DeleteAssetfollowingSFX(assetEntityId, true);
    RestartEvent();
});
