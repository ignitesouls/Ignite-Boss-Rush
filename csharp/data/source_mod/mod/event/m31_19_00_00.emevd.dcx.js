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
    RegisterBonfire(31190000, 31191950, 0, 0, 0, 5);
    $InitializeEvent(0, 31192800);
    $InitializeEvent(0, 31192810);
    $InitializeEvent(0, 31192849);
    $InitializeEvent(0, 31192830);
    $InitializeEvent(0, 31192811);
    $InitializeEvent(0, 31192850);
    $InitializeEvent(0, 31192860);
    $InitializeEvent(0, 31192899);
    $InitializeEvent(0, 31192861);
    $InitializeEvent(0, 31192862);
    $InitializeEvent(0, 31192880);
    $InitializeEvent(0, 31192863, 31190381, 31192870);
    $InitializeEvent(1, 31192863, 31190382, 31192871);
    $InitializeCommonEvent(0, 900005610, 31191200, 100, 800, 0);
    $InitializeCommonEvent(0, 90005261, 31190200, 31192200, 3, 0, 0);
    $InitializeEvent(0, 31192210, 31190210, 31192210, 2, 0, 0);
    $InitializeEvent(1, 31192210, 31190211, 31192210, 2, 0, 0);
    $InitializeEvent(2, 31192210, 31190212, 31192210, 2, 0, 0);
    $InitializeEvent(3, 31192210, 31190213, 31192210, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 31190217, 31192219, 3, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31190219, 31192219, 3, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31190220, 31192220, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31190300, 31192219, 3, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31190280, 31192218, 3, 0, 3001);
    $InitializeCommonEvent(0, 90005525, 31190600, 31191600);
    $InitializeCommonEvent(0, 90005525, 31190601, 31191601);
    $InitializeCommonEvent(0, 90005525, 31190602, 31191602);
    $InitializeCommonEvent(0, 90005525, 31190603, 31191603);
    $InitializeCommonEvent(0, 90005525, 31190604, 31191604);
    $InitializeCommonEvent(0, 90005525, 31190605, 31191605);
    $InitializeCommonEvent(0, 90005646, 31190800, 31192840, 31192841, 31191840, 31192840, 31, 19, 0, 0);
    $InitializeCommonEvent(0, 90005646, 31190850, 31192890, 31192891, 31191890, 31192840, 31, 19, 0, 0);
});

// 思考ロジック有効化_領域／距離判定_集積部屋_XX -- Enabling thought logic_area/distance determination_accumulation room_XX
$Event(31192210, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpAreaFlag = chrSp && InArea(10000, areaEntityId) && EventFlag(31190603);
    chrSpAreaFlag2 = chrSp && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1) && EventFlag(31190603);
    dmgChr = HasDamageType(31190210, 0, DamageType.Unspecified)
        || CharacterHasStateInfo(31190210, 436)
        || CharacterHasStateInfo(31190210, 2)
        || CharacterHasStateInfo(31190210, 5)
        || CharacterHasStateInfo(31190210, 6)
        || CharacterHasStateInfo(31190210, 260)
        || CharacterAIState(31190210, AIStateType.Combat)
        || CharacterHasStateInfo(chrEntityId, 436)
        || CharacterHasStateInfo(chrEntityId, 2)
        || CharacterHasStateInfo(chrEntityId, 5)
        || CharacterHasStateInfo(chrEntityId, 6)
        || CharacterHasStateInfo(chrEntityId, 260);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || chrSpAreaFlag
            || chrSpAreaFlag2
            || dmgChr);
    SetNetworkconnectedThisEventSlot(ON);
    if (dmgChr.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
    }
L1:
    if (Signed(animationId) != -1) {
        ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    }
    EnableCharacterAI(chrEntityId);
});

// 特殊待機_領域／距離判定_集積部屋_XX -- Special standby_area/distance determination_accumulation room_XX
$Event(35002250, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, areaEntityId);
    chrSpArea2 &= chrSp
        && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        chrSpArea2 &= chr;
    }
L9:
    cond = chrSpArea2
        || chrSpArea
        || HasDamageType(31190210, 0, DamageType.Unspecified)
        || CharacterAIState(31190210, AIStateType.Combat)
        || CharacterHasStateInfo(31190210, 436)
        || CharacterHasStateInfo(31190210, 2)
        || CharacterHasStateInfo(31190210, 5)
        || CharacterHasStateInfo(31190210, 6)
        || CharacterHasStateInfo(31190210, 260);
    WaitFor(cond);
    WaitFor(cond);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
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

// 魔法壁_XX -- Magic wall_XX
$Event(31190600, Restart, function(eventFlagId, assetEntityId) {
    if (!EventFlag(eventFlagId)) {
        WaitFor(
            PlayerIsInOwnWorld() && HasDamageType(assetEntityId, 20000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
        ForceAnimationPlayback(assetEntityId, 1, false, true, false);
    }
L0:
    DisableAsset(assetEntityId);
});

//bk assassin
$Event(31192800, Restart, function() {
    EndIf(!EventFlag(1049308146)); //end if boss not selected
    EndIf(EventFlag(31190800));
    WaitFor(CharacterHPValue(31190800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31190800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31190800));
    HandleBossDefeatAndDisplayBanner(31190800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304190, 1049304075, 1049304081, -1, 1049304810, 1049304811, 1049304812, 1049304813, 1049305267, 1049305269, 1049305272, 1049305275, 1049300190);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307546);
});

// ボス出現 -- Boss appears
$Event(31192810, Restart, function() {
    if (EventFlag(31190800)) {
        DisableCharacter(31190800);
        DisableCharacterCollision(31190800);
        ForceCharacterDeath(31190800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31190800);
    DisableCharacterCollision(31190800);
    GotoIf(L1, EventFlag(31190802));
    flagArea = EventFlag(31192805) && InArea(10000, 31192800);
    dmg = HasDamageType(31190800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
L2:
    EnableCharacterAI(31190800);
    EnableCharacterCollision(31190800);
    SetNetworkUpdateRate(31190800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31190800, 0, 902100310);
});

// ボス激昂 -- boss rage
$Event(31192811, Restart, function() {
    EndIf(EventFlag(31190800));
    WaitFor(HPRatio(31190800) <= 0.6);
    SetEventFlagID(31192802, ON);
});

// ボス_黒き刃の末裔_姿隠し暴き -- Boss_Descendant of the Black Blade_Hidden figure revealed
$Event(31192830, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(31190800));
    WaitFor(CharacterHasSpEffect(20000, 416));
    SetSpEffect(20000, 14508);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

//garris
$Event(31192850, Restart, function() {
    EndIf(!EventFlag(1049308148)); //end if boss not selected
    EndIf(EventFlag(31190850));
    WaitFor(CharacterHPValue(31190850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31190850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31190850));
    HandleBossDefeatAndDisplayBanner(31190850, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001034, 1049304197, 1049304075, 1049304093, -1, 1049304840, 1049304841, 1049304842, 1049304843, 1049304844, 1049305349, 1049305351, 1049305353, 1049305355, 1049305359, 1049300197);
    ForceCharacterDeath(31195850, false);
    DisableGenerator(31193821);
    DisableGenerator(31193820);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307548);
});

// 隠しボス_ボス出現 -- Hidden boss_boss appearance
$Event(31192860, Restart, function() {
    if (EventFlag(31190850)) {
        DisableCharacter(31190850);
        DisableCharacterCollision(31190850);
        ForceCharacterDeath(31190850, false);
        DisableCharacter(31195850);
        DisableCharacterCollision(31195850);
        ForceCharacterDeath(31195850, false);
        DisableGenerator(31193821);
        DisableGenerator(31193820);
        EndEvent();
    }
L0:
    DisableCharacterAI(31190850);
    ForceAnimationPlayback(31190850, 68011, false, false, false);
    DisableCharacterAI(31190380);
    ForceAnimationPlayback(31190380, 30000, false, false, false);
    DisableLockOnPoint(31190380, 220);
    WaitFor(EventFlag(31192855) && InArea(10000, 31192850));
    ForceAnimationPlayback(31190850, 68012, false, false, false);
    EnableCharacterAI(31190850);
    SetNetworkUpdateRate(31190850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31190850, 0, 137600);
    ForceAnimationPlayback(31190380, 20000, false, false, false);
    EnableCharacterAI(31190380);
    WaitFixedTimeSeconds(3);
    EnableLockOnPoint(31190380, 220);
});

// 隠しボス激昂 -- Hidden boss rage
$Event(31192861, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(31190850));
    WaitFor(HPRatio(31190850) <= 0.6);
    SetEventFlagID(31192852, ON);
    EndIf(EventFlag(31190850));
    EnableGenerator(31193821);
    SetNetworkconnectedEventFlagID(31192871, ON);
});

// 隠しボス_敵ジェネレータAを有効化 -- Hidden boss_enable enemy generator A
$Event(31192862, Restart, function() {
    DisableNetworkSync();
    EndIf(EventFlag(31190850));
    WaitFor(CharacterDead(31190380));
    EndIf(EventFlag(31190850));
    EnableGenerator(31193820);
    SetNetworkconnectedEventFlagID(31192870, ON);
});

// マルチドーピング対応_XX -- Multi-doping compatible_XX
$Event(31192863, Restart, function(chrEntityId, eventFlagId) {
    DisableNetworkSync();
    EndIf(EventFlag(31190850));
    WaitFor(
        EventFlag(eventFlagId)
            && !CharacterDead(chrEntityId)
            && !HasMultiplayerState(MultiplayerState.Singleplayer));
    ActivateMultiplayerdependantBuffs(chrEntityId);
    SetNetworkconnectedEventFlagID(31192875, ON);
    WaitFixedTimeSeconds(3);
    spOnlineChrFlag |= CharacterHasSpEffect(chrEntityId, 7800)
        || CharacterHasSpEffect(chrEntityId, 7801)
        || CharacterHasSpEffect(chrEntityId, 7802)
        || CharacterHasSpEffect(chrEntityId, 7820)
        || CharacterHasSpEffect(chrEntityId, 7821)
        || CharacterHasSpEffect(chrEntityId, 7822);
    if (!spOnlineChrFlag) {
        RestartEvent();
    }
    spOnlineChrFlag |= (PlayerIsInOwnWorld() && CharacterDead(chrEntityId)) || EventFlag(31192875);
    WaitFor(spOnlineChrFlag);
    SetNetworkconnectedEventFlagID(31192875, ON);
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// 隠しボスマルチ権限対応 -- Hidden boss multi-authority support
$Event(31192880, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    flag = (EventFlag(31190605) && !EventFlag(31190850)) || !EventFlag(31190800);
    SetEventFlagID(31190890, ON);
    if (flag) {
        SetEventFlagID(31190890, OFF);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31190800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31190850)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31190605));
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ボス_イベント起動 -- Boss_event activation
$Event(31192849, Restart, function() {
    $InitializeEvent(0, 31192845, 31190800, 31191800, 31192800, 31192805, 31195800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31190800, 31191800, 31192800, 31192805, 31192806, 10000);
    $InitializeCommonEvent(0, 9005813, 31190800, 31191800, 3, 0, 3);
    $InitializeCommonEvent(0, 9005822, 31190800, 921500, 31192805, 31192806, 0, 31192802, 0, 0);
});

// 隠しボス_イベント起動 -- Hidden boss_event activation
$Event(31192899, Restart, function() {
    $InitializeEvent(1, 31192845, 31190850, 31191850, 31192850, 31192855, 31195850, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31190850, 31191850, 31192850, 31192855, 31192856, 10000);
    $InitializeCommonEvent(0, 9005813, 31190850, 31191850, 3, 0, 3);
    $InitializeCommonEvent(0, 9005822, 31190850, 920100, 31192855, 31192856, 0, 31192852, 0, 0);
});

// ホストがボス部屋入場_ガストも帰還する -- Host enters boss room_Gust also returns
$Event(31192845, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, chrEntityId, actionButtonParameterId, eventFlagId3, areaEntityId2) {
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (eventFlagId3 != 0) {
            GotoIf(L0, EventFlag(eventFlagId3));
            if (areaEntityId2 != 0) {
                areaFlag |= InArea(10000, areaEntityId2);
            }
            areaFlag |= EventFlag(eventFlagId3);
            WaitFor((areaFlag && PlayerIsInOwnWorld()) || EventFlag(eventFlagId));
            RestartIf(EventFlag(eventFlagId));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(eventFlagId)
                    || (PlayerIsInOwnWorld()
                        && !EventFlag(eventFlagId)
                        && ActionButtonInArea(actionButtonParameterId, entityId)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(eventFlagId));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, areaEntityId, 60060, true);
            } else {
                RotateCharacter(10000, areaEntityId, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(eventFlagId2));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, areaEntityId) || time)
                && PlayerIsInOwnWorld()
                && !EventFlag(eventFlagId))
                || EventFlag(eventFlagId));
        RestartIf(EventFlag(eventFlagId));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            IssueBossRoomEntryNotification();
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(chrEntityId);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, entityId));
    RotateCharacter(10000, areaEntityId, 60060, true);
    SendAllPhantomsHome();
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

