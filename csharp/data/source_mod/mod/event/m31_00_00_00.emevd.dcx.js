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
    RegisterBonfire(31000000, 31001950, 0, 0, 0, 5);
    $InitializeEvent(0, 31002800);
    $InitializeEvent(0, 31002810);
    $InitializeEvent(0, 31002849);
    $InitializeEvent(0, 31002811);
    $InitializeEvent(0, 31002813);
    $InitializeEvent(0, 31002814);
    $InitializeEvent(0, 31002850);
    $InitializeEvent(0, 31002860);
    $InitializeEvent(0, 31002899);
    $InitializeEvent(0, 31002861);
    $InitializeEvent(0, 31002863);
    $InitializeEvent(0, 31002845);
    $InitializeEvent(0, 31002875);
    $InitializeEvent(0, 31002876, 31000845, 31002840, 31002841, 31001840, 31002840, 31, 0, 0, 0);
    $InitializeEvent(0, 31002500, 31001500, 31002500);
    $InitializeEvent(1, 31002500, 31001501, 31002501);
    $InitializeEvent(2, 31002500, 31001502, 31002502);
    $InitializeEvent(0, 31003700, 31000701);
    $InitializeEvent(0, 31003710, 31000703);
    $InitializeEvent(0, 31003701, 31000701, 31002709, 31009201, 31000800);
    $InitializeEvent(0, 31003711, 31000703, 31002709, 31009201, 31000850);
    $InitializeEvent(0, 31003702, 31000800);
    $InitializeEvent(0, 31003703);
    $InitializeEvent(0, 31003704, 31000800, 10);
    $InitializeEvent(0, 31003705, 31000800);
    $InitializeEvent(0, 31003707);
    $InitializeEvent(0, 31003713, 31000850);
    $InitializeEvent(0, 31003714, 31000850, 10);
    $InitializeEvent(0, 31003715, 31000850);
    $InitializeCommonEvent(0, 90005704, 31000800, 31009219, 3680, 31009201, 3);
    $InitializeCommonEvent(0, 90005703, 31000800, 3681, 3682, 31009201, 31009219, 3680, 3684, -1);
    $InitializeEvent(0, 31003706, 31000800, 3683, 3680, 3684);
    $InitializeCommonEvent(0, 90005704, 31000701, 31009219, 3680, 31009201, 3);
    $InitializeCommonEvent(0, 90005703, 31000701, 3681, 3682, 31009201, 31009219, 3680, 3684, -1);
    $InitializeCommonEvent(0, 90005702, 31000701, 3683, 3680, 3684);
    $InitializeCommonEvent(0, 90005704, 31000703, 3681, 3680, 31009201, 3);
    $InitializeCommonEvent(0, 90005703, 31000703, 3681, 3682, 31009201, 3681, 3680, 3684, -1);
    $InitializeCommonEvent(0, 90005702, 31000703, 3683, 3680, 3684);
    $InitializeCommonEvent(0, 90005704, 31000850, 31009269, 3680, 31009201, 3);
    $InitializeCommonEvent(0, 90005703, 31000850, 3681, 3682, 31009201, 31009269, 3680, 3684, -1);
    $InitializeEvent(0, 31003716, 31000850, 3683, 3680, 3684);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(31000700, true);
    SetCharacterBackreadState(31000701, true);
    SetCharacterBackreadState(31000702, true);
    SetCharacterBackreadState(31000703, true);
    $InitializeEvent(0, 31002230, 31000200, 31002200, 2, 0, 0);
    $InitializeEvent(0, 31002200, 31000201, 30010, 20010, 31002202, 2, 0, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    $InitializeEvent(0, 31002210, 31000205, 31002205, 3, 0, 0, 31002500, 31002501, 31002502);
    $InitializeEvent(1, 31002210, 31000206, 31002205, 3, 0, 0, 31002500, 31002501, 31002502);
    $InitializeEvent(1, 31002200, 31000209, 30010, 20010, 31002209, 2, 0.8, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    $InitializeEvent(2, 31002200, 31000210, 30010, 20010, 31002209, 2, 0.6, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    $InitializeEvent(3, 31002200, 31000211, 30010, 20010, 31002209, 2, 0.3, 0, 0, 0, 0, 31002500, 31002501, 31002502);
    $InitializeEvent(0, 31003712);
});

// テスト用イベント_鳴子作動_XX -- Test event_Naruko activation_XX
$Event(31002500, Restart, function(entityId, areaEntityId) {
    WaitFor(
        HasDamageType(entityId, 0, DamageType.Unspecified)
            || (InArea(10000, areaEntityId)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(entityId, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(entityId, 1, false, false, false);
    TriggerAISound(7000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 鳴子対応_特殊待機_領域／距離判定_XX -- Naruko response_Special standby_Area/distance determination_XX
$Event(31002200, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, timeSeconds, value, value2, value3, value4, areaEntityId2, areaEntityId3, areaEntityId4) {
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
    if (0 != areaEntityId) {
        area |= InArea(10000, areaEntityId);
    }
    area |= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaChrSp &= area
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
        areaChrSp &= chr;
    }
L9:
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || InArea(10000, areaEntityId2)
            || InArea(10000, areaEntityId3)
            || InArea(10000, areaEntityId4)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
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

// 鳴子対応_思考ロジック有効化_領域／距離判定_XX -- Naruko compatible_Thought logic activation_Area/distance judgment_XX
$Event(31002210, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId, areaEntityId2, areaEntityId3, areaEntityId4) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || areaChrSp
            || InArea(10000, areaEntityId2)
            || InArea(10000, areaEntityId3)
            || InArea(10000, areaEntityId4)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

// 雑兵思考ロジック有効化_領域／距離判定 -- Activation of casual soldier thinking logic_area/distance judgment
$Event(31002230, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

//patches
$Event(31002800, Restart, function() {
    EndIf(!EventFlag(1049308135)); //end if boss not selected
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(CharacterHPValue(31000800) <= 0);
    EndIf(EventFlag(31000800));
    WaitFixedTimeSeconds(4);
    PlaySE(31000800, SoundType.SFX, 888880000);
    if (EventFlag(1049300500)) //if full death dialogue enabled
        WaitFor(
            (PlayerIsInOwnWorld() && CharacterDead(31000850) && !CharacterHasSpEffect(10000, 9646))
                || EventFlag(31000850));
    else
        WaitFor(
            (PlayerIsInOwnWorld() && CharacterDead(31000850))
                || EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31000800, ON);
    HandleBossDefeatAndDisplayBanner(31000800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304107, 1049304014, -1, -1, 1049304430, 1049304431, 1049304432, 1049304433, -1, 1049304273, 1049304276, 1049304281, 1049300107);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307535);
});

// ボス出現 -- Boss appears
$Event(31002810, Restart, function() {
    if (EventFlag(31000800) || EventFlag(3683) || EventFlag(3691)) {
        DisableCharacter(31000800);
        DisableCharacterCollision(31000800);
        SetCharacterBackreadState(31000800, true);
        ForceCharacterDeath(31000800, false);
        if (!EventFlag(31000800)) {
            SetEventFlagID(31000800, ON);
        }
        EndEvent();
    }
L0:
    DisableCharacterAI(31000800);
    SetSpEffect(31000800, 9643);
    if (EventFlag(31008521)) {
        SetNetworkconnectedEventFlagID(31008820, ON);
        WarpCharacterAndCopyFloor(31000800, TargetEntityType.Area, 31002820, -1, 31000800);
        ChangeCharacterPatrolBehavior(31000800, 0);
    }
L1:
    WaitFor(EventFlag(31002805) && InArea(10000, 31002800));
    if (!EventFlag(31008820)) {
        SetNetworkconnectedEventFlagID(31008821, ON);
        DisableCharacter(31000800);
        EndEvent();
    }
    SetCharacterTeamType(31000800, TeamType.Enemy);
    EnableCharacterAI(31000800);
    SetNetworkUpdateRate(31000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31000800, 0, 130900);
    SetNetworkconnectedEventFlagID(31000811, ON);
});

//patches
$Event(31002811, Restart, function() {
    EndIf(!EventFlag(1049308135)); //end if boss not selected
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(EventFlag(31009810));
    SetCharacterTeamType(31000800, TeamType.FriendlyNPC);
    if (EventFlag(1049300500)) //if full death dialogue enabled
        WaitFor((PlayerIsInOwnWorld() && !CharacterHasSpEffect(10000, 9646)) || EventFlag(31000800));
    else
        WaitFor(PlayerIsInOwnWorld() || EventFlag(31000800));
    SetNetworkconnectedEventFlagID(31000800, ON);
    PlaySE(31000800, SoundType.SFX, 888880000);
    HandleBossDefeatAndDisplayBanner(31000800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304107, 1049304014, -1, -1, 1049304430, 1049304431, 1049304432, 1049304433, -1, 1049304273, 1049304276, 1049304281, 1049300107);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307535);
});

// ボス部屋入場処理 -- Boss room entry process
$Event(31002813, Restart, function() {
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31008521));
    EndIf(!EventFlag(31008821));
    EnableCharacter(31000800);
    WaitFixedTimeSeconds(4);
    SetCharacterTeamType(31000800, TeamType.Enemy);
    EnableCharacterAI(31000800);
    SetNetworkUpdateRate(31000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(5);
    DisplayBossHealthBar(Enabled, 31000800, 0, 130900);
    SetNetworkconnectedEventFlagID(31000811, ON);
    SetCharacterHome(31000800, 31002820);
});

// ボス降参後また敵対する -- After the boss surrenders, he will become hostile again.
$Event(31002814, Restart, function() {
    EndIf(EventFlag(31000800) || EventFlag(3683) || EventFlag(3691));
    WaitFor(EventFlag(31002713));
    EnableCharacterAI(31000800);
    SetCharacterTeamType(31000800, TeamType.Enemy);
});

// ボス_パッチ特殊対応1回目_イベント起動 -- Boss_patch special response 1st_event activation
$Event(31002849, Restart, function() {
    $InitializeEvent(0, 31002830, 31000800, 31001800, 31002800, 31002805, 31005800, 10000, 0, 0);
    $InitializeEvent(0, 31002831, 31000800, 31001800, 31002800, 31002805, 31002806, 10000);
    $InitializeEvent(0, 31002832, 31000800, 31001800, 4, 0);
    $InitializeEvent(0, 31002833, 31000800, 931000, 31002805, 31002806, 31000811, 0, 0, 0);
});

// ゲストがボス部屋入場_1回目 -- Guest enters boss room_1st time
$Event(31002831, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, eventFlagId3, actionButtonParameterId) {
    EndIf(EventFlag(3691));
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        !EventFlag(eventFlagId)
            && EventFlag(eventFlagId2)
            && CharacterType(10000, TargetType.WhitePhantom)
            && ActionButtonInArea(actionButtonParameterId, entityId));
    SuppressSoundForFogGate(5);
    RotateCharacter(10000, areaEntityId, 60060, true);
    time = ElapsedSeconds(3);
    WaitFor(CharacterType(10000, TargetType.WhitePhantom) && (InArea(10000, areaEntityId) || time));
    RestartIf(time.Passed);
    SetEventFlagID(eventFlagId3, ON);
    RestartEvent();
});

// ホストがボス部屋入場_1回目 -- Host enters boss room_1st time
$Event(31002830, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, chrEntityId, actionButtonParameterId, eventFlagId3, areaEntityId2) {
    EndIf(EventFlag(3691));
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
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

// ボス用白扉処理_1回目 -- Boss white door processing_1st time
$Event(31002832, Restart, function(eventFlagId, assetEntityId, sfxId, eventFlagId2) {
    EndIf(EventFlag(3691));
    DisableNetworkSync();
    DisableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(eventFlagId);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(eventFlagId);
    if (0 != eventFlagId2) {
        flag &= EventFlag(eventFlagId2);
    }
    flag &= !EventFlag(eventFlagId);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    EnableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    CreateAssetfollowingSFX(assetEntityId, 101, sfxId);
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(eventFlagId);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(eventFlagId);
    if (0 != eventFlagId2) {
        flag2 &= EventFlag(eventFlagId2);
    }
    flag2 &= !EventFlag(eventFlagId);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    RestartEvent();
});

// ボス戦BGM再生_２曲_1回目 -- Boss battle BGM playback_2 songs_1st time
$Event(31002833, Restart, function(eventFlagId, bgmBossConvParamId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, value, value2) {
    EndIf(EventFlag(3691));
    DisableNetworkSync();
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(eventFlagId2, OFF);
    }
    flag &= EventFlag(eventFlagId2);
    if (!PlayerIsInOwnWorld()) {
        flag &= EventFlag(eventFlagId3);
    }
    if (0 != eventFlagId4) {
        flag &= EventFlag(eventFlagId4);
    }
    WaitFor(flag);
    WaitFixedTimeFrames(1);
    if (!EventFlag(eventFlagId5)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFor(EventFlag(eventFlagId5) || EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (Signed(value) != 0) {
        }
        SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
        WaitFor(EventFlag(eventFlagId));
    }
L1:
    if (Signed(value2) != 1) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
        EndEvent();
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.Stop1);
});

// ボス_パッチ特殊対応2回目_イベント起動 -- Boss_Patch special response 2nd time_Event activation
$Event(31002899, Restart, function() {
    $InitializeEvent(0, 31002870, 31000850, 31001800, 31002800, 31002855, 31005850, 10000, 0, 0);
    $InitializeEvent(0, 31002872, 31000850, 31001800, 4, 0);
    $InitializeEvent(0, 31002873, 31000850, 931000, 31002855, 31002856, 31000861, 0, 0, 0);
});

//patches
$Event(31002850, Restart, function() {
    EndIf(!EventFlag(1049308135)); //end if boss not selected
    EndIf(EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691));
    WaitFor(CharacterHPValue(31000850) <= 0);
    EndIf(EventFlag(31000850));
    WaitFixedTimeSeconds(4);
    PlaySE(31000850, SoundType.SFX, 888880000);
    if (EventFlag(1049300500)) //if full death dialogue enabled
        WaitFor(
            (PlayerIsInOwnWorld() && CharacterDead(31000850) && !CharacterHasSpEffect(10000, 9646))
                || EventFlag(31000850));
    else
        WaitFor(
            (PlayerIsInOwnWorld() && CharacterDead(31000850))
                || EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31000850, ON);
    HandleBossDefeatAndDisplayBanner(31000850, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304107, 1049304014, -1, -1, 1049304430, 1049304431, 1049304432, 1049304433, -1, 1049304273, 1049304276, 1049304281, 1049300107);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307535);
});

// ボス出現_2回目 -- Boss appearance_2nd time
$Event(31002860, Restart, function() {
    if (EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691)) {
        DisableCharacter(31000850);
        DisableCharacterCollision(31000850);
        SetCharacterBackreadState(31000850, true);
        ForceCharacterDeath(31000850, false);
        if (EventFlag(3683)) {
            SetEventFlagID(31000850, ON);
        }
        EndEvent();
    }
L0:
    DisableCharacterAI(31000850);
    SetSpEffect(31000850, 9643);
    if (EventFlag(31008523)) {
        SetNetworkconnectedEventFlagID(31008870, ON);
        WarpCharacterAndCopyFloor(31000850, TargetEntityType.Area, 31002820, -1, 31000850);
        ChangeCharacterPatrolBehavior(31000850, 0);
    }
L1:
    WaitFor(EventFlag(31002855) && InArea(10000, 31002800));
    if (!EventFlag(31008870)) {
        SetNetworkconnectedEventFlagID(31008871, ON);
        DisableCharacter(31000850);
        EndEvent();
    }
    SetCharacterTeamType(31000850, TeamType.Enemy);
    EnableCharacterAI(31000850);
    SetNetworkUpdateRate(31000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31000850, 0, 130900);
    SetNetworkconnectedEventFlagID(31000861, ON);
});

//patches
$Event(31002861, Restart, function() {
    EndIf(!EventFlag(1049308135)); //end if boss not selected
    EndIf(EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691));
    WaitFor(EventFlag(31009889));
    SetCharacterTeamType(31000850, TeamType.FriendlyNPC);
    if (EventFlag(1049300500)) //if full death dialogue enabled
        WaitFor((PlayerIsInOwnWorld() && !CharacterHasSpEffect(10000, 9646)) || EventFlag(31000850));
    else
        WaitFor(PlayerIsInOwnWorld() || EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31000850, ON);
    PlaySE(31000850, SoundType.SFX, 888880000);
    HandleBossDefeatAndDisplayBanner(31000850, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304107, 1049304014, -1, -1, 1049304430, 1049304431, 1049304432, 1049304433, -1, 1049304273, 1049304276, 1049304281, 1049300107);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307535);
});

// ボス部屋入場処理_2回目 -- Boss room entry process_2nd time
$Event(31002863, Restart, function() {
    EndIf(EventFlag(31000850) || EventFlag(3683) || !EventFlag(3691));
    WaitFor(EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31008523));
    EndIf(!EventFlag(31008871));
    EnableCharacter(31000850);
    WaitFixedTimeSeconds(4);
    SetCharacterTeamType(31000850, TeamType.Enemy);
    EnableCharacterAI(31000850);
    SetNetworkUpdateRate(31000850, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(5);
    DisplayBossHealthBar(Enabled, 31000850, 0, 130900);
    SetNetworkconnectedEventFlagID(31000861, ON);
    SetCharacterHome(31000850, 31002820);
});

// ホストがボス部屋入場_2回目 -- Host enters boss room_2nd time
$Event(31002870, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, chrEntityId, actionButtonParameterId, eventFlagId3, areaEntityId2) {
    EndIf(!EventFlag(3691));
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
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

// ボス用白扉処理_2回目 -- Boss white door processing_2nd time
$Event(31002872, Restart, function(eventFlagId, assetEntityId, sfxId, eventFlagId2) {
    EndIf(!EventFlag(3691));
    DisableNetworkSync();
    DisableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    chrFlag = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(eventFlagId);
    chrFlag2 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(eventFlagId);
    if (0 != eventFlagId2) {
        flag &= EventFlag(eventFlagId2);
    }
    flag &= !EventFlag(eventFlagId);
    WaitFor(
        chrFlag
            || chrFlag2
            || flag
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            || ((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    EnableAsset(assetEntityId);
    DeleteAssetfollowingSFX(assetEntityId, true);
    CreateAssetfollowingSFX(assetEntityId, 101, sfxId);
    chrFlag3 = (CharacterType(10000, TargetType.BlackPhantom)
        || CharacterType(10000, TargetType.Invader)
        || CharacterType(10000, TargetType.Invader2)
        || CharacterType(10000, TargetType.Invader3))
        && !EventFlag(eventFlagId);
    chrFlag4 = (CharacterType(10000, TargetType.WhitePhantom) || CharacterType(10000, TargetType.BluePhantom))
        && !EventFlag(eventFlagId);
    if (0 != eventFlagId2) {
        flag2 &= EventFlag(eventFlagId2);
    }
    flag2 &= !EventFlag(eventFlagId);
    WaitFor(
        !chrFlag3
            && !chrFlag4
            && !flag2
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && !CharacterType(10000, TargetType.WhitePhantom))
            && !((HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
                && EventFlag(eventFlagId)
                && CharacterType(10000, TargetType.WhitePhantom)
                && !EntityInRadiusOfEntity(10000, assetEntityId, 1, 1)));
    RestartEvent();
});

// ボス戦BGM再生_２曲_2回目 -- Boss battle BGM play_2 songs_2nd time
$Event(31002873, Restart, function(eventFlagId, bgmBossConvParamId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, value, value2) {
    EndIf(!EventFlag(3691));
    DisableNetworkSync();
    if (EventFlag(eventFlagId)) {
        EndEvent();
    }
L0:
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(eventFlagId2, OFF);
    }
    flag &= EventFlag(eventFlagId2);
    if (!PlayerIsInOwnWorld()) {
        flag &= EventFlag(eventFlagId3);
    }
    if (0 != eventFlagId4) {
        flag &= EventFlag(eventFlagId4);
    }
    WaitFor(flag);
    WaitFixedTimeFrames(1);
    if (!EventFlag(eventFlagId5)) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Start);
    }
    WaitFor(EventFlag(eventFlagId5) || EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (Signed(value) != 0) {
        }
        SetBossBGM(bgmBossConvParamId, BossBGMState.HeatUp);
        WaitFor(EventFlag(eventFlagId));
    }
L1:
    if (Signed(value2) != 1) {
        SetBossBGM(bgmBossConvParamId, BossBGMState.Stop2);
        EndEvent();
    }
    SetBossBGM(bgmBossConvParamId, BossBGMState.Stop1);
});

// ボス部屋セーブ制限対応 -- Supports boss room save restrictions
$Event(31002845, Restart, function() {
    GotoIf(L2, EventFlag(3863));
    GotoIf(L0, !EventFlag(31000800));
    GotoIf(L1, EventFlag(31000800) && !EventFlag(3691));
    GotoIf(L3, !EventFlag(31000850) && EventFlag(3691));
    GotoIf(L4, EventFlag(31000850));
L2:
    SetEventFlagID(31000845, ON);
    Goto(L10);
L0:
    SetEventFlagID(31000845, OFF);
    Goto(L10);
L1:
    SetEventFlagID(31000845, ON);
    Goto(L10);
L3:
    SetEventFlagID(31000845, OFF);
    Goto(L10);
L4:
    SetEventFlagID(31000845, ON);
    Goto(L10);
L10:
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31000800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 31000850)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3691)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 3683));
    WaitFixedTimeSeconds(0.1);
    RestartEvent();
});

// ボス部屋宝箱切替え -- Boss room treasure chest switch
$Event(31002875, Restart, function() {
    if (!EventFlag(3691)) {
        EnableAsset(31001521);
        if (!EventFlag(31008521)) {
            EnableObjAct(31001521, 200);
        }
        DisableAsset(31001523);
        DisableObjAct(31001523, 200);
        DisableAssetTreasure(31001523);
        EndEvent();
    }
L0:
    DisableAsset(31001521);
    DisableObjAct(31001521, 200);
    DisableAssetTreasure(31001521);
    EnableAsset(31001523);
    if (!EventFlag(31008523)) {
        EnableObjAct(31001523, 200);
    }
});

// 地下小探索_迷宮脱出スペル -- Small underground exploration_labyrinth escape spell
$Event(31002876, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, initialAreaEntityId, areaId, blockId, regionId, indexId) {
    EndIf(!PlayerIsInOwnWorld());
    if (!EventFlag(eventFlagId4)) {
        DeleteAssetfollowingSFX(eventFlagId4, false);
    }
    WaitFixedTimeSeconds(0.5);
    WaitFor(PlayerIsInOwnWorld() && EventFlag(eventFlagId));
    if (!ThisEventSlot()) {
        CreateAssetfollowingSFX(eventFlagId4, 190, 1300);
    }
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && ActionButtonInArea(9290, eventFlagId4));
    DisplayGenericDialogAndSetEventFlags(4100, PromptType.YESNO, NumberofOptions.TwoButtons, eventFlagId4, 3, eventFlagId2, eventFlagId3, eventFlagId3);
    if (!EventFlag(eventFlagId2)) {
        SetEventFlagID(eventFlagId3, ON);
        WaitFixedTimeSeconds(2);
        RestartEvent();
    }
L1:
    ForceAnimationPlayback(10000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    WarpPlayer(areaId, blockId, regionId, indexId, initialAreaEntityId, 0);
});

// NPC309_盗賊の頭_NPC初期化イベント_宝箱トラップ待ち -- NPC309_Thief Head_NPC initialization event_Waiting for treasure chest trap
$Event(31003700, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (!EventFlag(3686)) {
        if (!(EventFlag(3685) && EventFlag(31000800) && !EventFlag(31002704))) {
            DisableCharacter(chrEntityId);
            SetCharacterBackreadState(chrEntityId, true);
            WaitFor(
                EventFlag(3686) || (EventFlag(3685) && EventFlag(31000800) && !EventFlag(31002704)));
            RestartEvent();
        }
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
    GotoIf(L20, mainGroupAbuse);
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
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    GotoIf(L20, EventFlag(31002714));
    ForceCharacterTreasure(chrEntityId);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3686) || (EventFlag(3685) && EventFlag(31000800) && !EventFlag(31002704))));
    RestartEvent();
});

// NPC309_盗賊の頭_初期状態_土下座で敵対解除 -- NPC309_Head of the thief_Initial state_Dismiss hostility by prostrate
$Event(31003701, Restart, function(chrEntityId, eventFlagId, eventFlagId2, chrEntityId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3685) && !EventFlag(3686));
    GotoIf(L1, !EventFlag(3681));
    GotoIf(L2, EventFlag(3686));
    GotoIf(L2, !EventFlag(31002704));
    Goto(L3);
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
L3:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, chrEntityId2, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(chrEntityId2, TeamType.FriendlyNPC);
    ClearCharactersAITarget(chrEntityId2);
    RequestCharacterAIReplan(chrEntityId2);
    EndEvent();
});

// NPC309_盗賊の頭_初期状態_会話処理限界を伸ばす -- NPC309_Thief Head_Initial state_Extend conversation processing limit
$Event(31003702, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3685));
    EndIf(EventFlag(3683));
    WaitFor(EventFlag(31008521) && EventFlag(31002805));
    SetCharacterTalkRange(chrEntityId, 50);
    EndEvent();
});

// NPC309_盗賊の頭_初戦開始前_敵対フラグON -- NPC309_Head of the thieves_Before the start of the first battle_Hostile flag ON
$Event(31003703, Restart, function() {
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000800));
    SetEventFlagID(31009810, OFF);
    SetEventFlagID(31009215, OFF);
    SetEventFlagID(31009214, OFF);
    SetEventFlagID(31009217, OFF);
    WaitFixedTimeFrames(1);
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3682, ON);
    WaitFor(EventFlag(31000800));
    SetEventFlagID(31009219, OFF);
    EndEvent();
});

// NPC309_盗賊の頭_初期状態_降伏イベント -- NPC309_Thief Head_Initial state_Surrender event
$Event(31003704, Restart, function(chrEntityId, targetTimeSeconds) {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3685));
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000800));
    if (!EventFlag(31002713)) {
        if (!EventFlag(31002704)) {
            SetEventFlagID(31009811, OFF);
        }
        if (!EventFlag(31002704)) {
            EnableCharacterImmortality(chrEntityId);
            WaitFor(HPRatio(chrEntityId) <= 0.5);
            DisableCharacterImmortality(chrEntityId);
            EndIf(EventFlag(3683));
            SetEventFlagID(31002704, ON);
            SetEventFlagID(31009811, ON);
        }
L1:
        WaitFixedTimeFrames(1);
        SetSpEffect(chrEntityId, 9701);
        SetSpEffect(chrEntityId, 5005);
        SetSpEffect(chrEntityId, 9703);
        SetSpEffect(chrEntityId, 9645);
        if (PlayerIsInOwnWorld()) {
            ClearSpEffect(chrEntityId, 9703);
        }
        SetSpEffect(chrEntityId, 9647);
        SetSpEffect(chrEntityId, 9642);
        SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
        dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
        time = ElapsedSeconds(targetTimeSeconds);
        WaitFor(dmg || time || EventFlag(31002713));
        if (!EventFlag(31002713)) {
            EndIf(EventFlag(3683));
            if (!time.Passed) {
                RestartEvent();
            }
            SetEventFlagID(31009215, ON);
            SetEventFlagID(31009810, ON);
            SetEventFlagID(31009201, OFF);
            BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
            SetNetworkconnectedEventFlagID(3680, ON);
            SaveRequest();
            SetCharacterTalkRange(chrEntityId, 17);
            SetSpEffect(chrEntityId, 9702);
            SetSpEffect(chrEntityId, 5006);
            EndIf(!PlayerIsInOwnWorld());
            EndIf(EventFlag(60819));
            WaitFor(CharacterDead(chrEntityId, NotEqual, 1) && EventFlag(31000800));
            SetEventFlagID(60819, ON);
            AwardGesture(41);
            EndEvent();
        }
    }
L2:
    WaitFixedTimeRealFrames(1);
    SetSpEffect(chrEntityId, 9702);
    SetSpEffect(chrEntityId, 5006);
    SetSpEffect(chrEntityId, 9704);
    SetSpEffect(chrEntityId, 9644);
    SetSpEffect(chrEntityId, 9643);
    SetCharacterTeamType(chrEntityId, TeamType.Enemy);
    EndEvent();
});

// NPC309_盗賊の頭_初期状態_降伏後の攻撃回数監視 -- NPC309_Thief Head_Initial state_Monitor the number of attacks after surrender
$Event(31003705, Restart, function(chrEntityId) {
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeFrames(1);
        EndIf(!EventFlag(3685));
        EndIf(EventFlag(3683));
        EndIf(EventFlag(31000800));
        SetEventFlagID(31009212, OFF);
        SetEventFlagID(31009211, OFF);
        SetEventFlagID(31009213, OFF);
        WaitFor(EventFlag(31002703) && !EventFlag(3683) && PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(2.5);
        EndIf(EventFlag(31000800));
        WaitFixedTimeFrames(1);
        WaitFor(
            HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                && !EventFlag(3683)
                && PlayerIsInOwnWorld());
        EndIf(EventFlag(31000800));
        WaitFixedTimeFrames(1);
        WaitFor(
            HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                && !EventFlag(3683)
                && PlayerIsInOwnWorld());
        EndIf(EventFlag(31000800));
        WaitFixedTimeFrames(1);
        WaitFor(
            HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                && !EventFlag(3683)
                && PlayerIsInOwnWorld());
        EndIf(EventFlag(31000800));
        SetNetworkconnectedEventFlagID(31002713, ON);
        EndEvent();
    }
L1:
    WaitFor(EventFlag(31002713));
    EndIf(EventFlag(31000800));
    SetCharacterTeamType(chrEntityId, TeamType.Enemy);
    EndEvent();
});

// NPC309_盗賊の頭_NPC死亡処理_ボス用 -- NPC309_Thief's head_NPC death processing_For boss
$Event(31003706, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(31000800));
    WaitFor(!EventFlag(eventFlagId) && EventFlag(3685) && CharacterDead(chrEntityId));
    SetEventFlagID(31002714, ON);
    BatchSetNetworkconnectedEventFlags(eventFlagId2, eventFlagId3, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SaveRequest();
});

// NPC309_盗賊の頭_宝箱トラップ待ち_ワープ実行 -- NPC309_Thief Head_Waiting for treasure chest trap_Executing warp
$Event(31003707, Restart, function() {
    WaitFixedTimeFrames(1);
    if (EventFlag(3685) || EventFlag(3691) || EventFlag(3692) || EventFlag(3694)) {
        DisableAsset(31001700);
        DisableObjAct(31001700, 200);
        EndEvent();
    }
    EnableAsset(31001700);
    EnableObjAct(31001700, 200);
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(31008522)) {
        DisableObjAct(31001700, 200);
        EndEvent();
    }
    WaitFor(EventFlag(31008522));
    SpawnOneshotSFX(TargetEntityType.Asset, 31001700, 90, 806881);
    SpawnOneshotSFX(TargetEntityType.Asset, 31001700, 90, 806882);
    FadeToBlack(0, 0, true, 0);
    WaitFixedTimeSeconds(2.2);
    if (CharacterHPValue(10000) != 0) {
        DisplayGenericDialog(20700, PromptType.YESNO, NumberofOptions.NoButtons, 0, 5);
        WaitFixedTimeSeconds(2.8);
        if (CharacterHPValue(10000) != 0) {
            FadeToBlack(0, 0, false, 0);
            GotoIf(L1, EventFlag(3683));
            GotoIf(L1, !EventFlag(3686));
            GotoIf(L2, EventFlag(31009231));
            Goto(L3);
L1:
            WarpPlayer(60, 45, 37, 0, 1045372710, 0);
            EndEvent();
L2:
            PlayCutsceneToPlayerAndWarp(31000001, CutscenePlayMode.Skippable, 1045372710, 60453700, 10000, 0, true);
            EndEvent();
L3:
            PlayCutsceneToPlayerAndWarp(31000000, CutscenePlayMode.Skippable, 1045372710, 60453700, 10000, 0, true);
            EndEvent();
        }
    }
L20:
    FadeToBlack(0, 0, false, 0);
    EndEvent();
});

// NPC309盗賊の頭_ボス以外無効化 -- NPC309 Thief Head_Disabled except for bosses
$Event(31003709, Restart, function() {
    DisableCharacter(31000702);
    DisableCharacter(31000703);
    SetCharacterBackreadState(31000702, true);
    SetCharacterBackreadState(31000703, true);
    EndEvent();
});

// NPC309_盗賊の頭_NPC初期化イベント_最後のショップ -- NPC309_Thief Head_NPC Initialization Event_Last Shop
$Event(31003710, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3680)) {
            SetEventFlagID(31009205, OFF);
        }
    }
L10:
    if (!EventFlag(3692)) {
        if (!EventFlag(3694)) {
            if (!(EventFlag(3691) && EventFlag(31000850) && EventFlag(3683))) {
                DisableCharacter(chrEntityId);
                SetCharacterBackreadState(chrEntityId, true);
                WaitFor(
                    EventFlag(3692)
                        || EventFlag(3694)
                        || (EventFlag(3691) && EventFlag(31000850) && EventFlag(3683)));
                RestartEvent();
            }
        }
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
    GotoIf(L20, mainGroupAbuse);
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
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    GotoIf(L20, EventFlag(31002723));
    ForceCharacterTreasure(chrEntityId);
    Goto(L20);
L20:
    WaitFor(
        !(EventFlag(3692)
            || EventFlag(3694)
            || (EventFlag(3691) && EventFlag(31000850) && EventFlag(3683))));
    RestartEvent();
});

// NPC309_盗賊の頭_2戦目以降_土下座で敵対解除 -- NPC309_Head of the thieves_After the 2nd battle_Dogeza to cancel hostility
$Event(31003711, Restart, function(chrEntityId, eventFlagId, eventFlagId2, chrEntityId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3683));
    EndIf(!EventFlag(3691) && !EventFlag(3692) && !EventFlag(3694));
    GotoIf(L1, !EventFlag(3681));
    GotoIf(L2, EventFlag(3686));
    GotoIf(L2, !EventFlag(31002727));
    Goto(L3);
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
L3:
    WaitFor(CharacterHasSpEffect(10000, 9700) && EntityInRadiusOfEntity(10000, chrEntityId2, 5, 1));
    BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
    SetNetworkconnectedEventFlagID(3680, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SetNetworkconnectedEventFlagID(eventFlagId2, OFF);
    SetNetworkconnectedEventFlagID(31002701, OFF);
    SetNetworkconnectedEventFlagID(31002707, OFF);
    SetNetworkconnectedEventFlagID(31002700, OFF);
    SetNetworkconnectedEventFlagID(31009205, OFF);
    SetCharacterTeamType(chrEntityId2, TeamType.FriendlyNPC);
    ClearCharactersAITarget(chrEntityId2);
    RequestCharacterAIReplan(chrEntityId2);
    EndEvent();
});

// NPC309盗賊の頭_ボス戦2に遷移させない用フラグON -- NPC309 Thief Head_Flag ON to prevent transition to boss battle 2
$Event(31003712, Restart, function() {
    if (PlayerIsInOwnWorld()) {
        SetEventFlagID(31002715, ON);
    }
    EndEvent();
});

// NPC309_盗賊の頭_追い剥ぎとして再会_2戦目開始前準備 -- NPC309_Head of the thieves_Reunited as a robber_Preparation before the start of the second battle
$Event(31003713, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3691));
    EndIf(EventFlag(3683));
    if (!EventFlag(31000850)) {
        SetEventFlagID(31009889, OFF);
        BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
        SetNetworkconnectedEventFlagID(3682, ON);
        SaveRequest();
        WaitFor(EventFlag(31008523) && EventFlag(31002855));
        SetCharacterTalkRange(chrEntityId, 50);
        WaitFor(EventFlag(31000850));
    }
L1:
    SetEventFlagID(31009269, OFF);
    EndEvent();
});

// NPC309_盗賊の頭_追い剥ぎとして再会_降伏イベント -- NPC309_Head of the Bandit_Reunion as a robber_Surrender event
$Event(31003714, Restart, function(chrEntityId, targetTimeSeconds) {
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3691));
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000850));
    if (!EventFlag(31002722)) {
        if (!EventFlag(31002730)) {
            EnableCharacterImmortality(chrEntityId);
            WaitFor(EventFlag(31009257));
            if (!EventFlag(31002855)) {
                WaitFor(EventFlag(31002855));
            }
L5:
            WaitFixedTimeSeconds(3);
            DisableCharacterImmortality(chrEntityId);
            SetSpEffect(chrEntityId, 18670);
            EndIf(EventFlag(3683));
            SetEventFlagID(31002721, ON);
            WaitFor(EventFlag(31002730));
        }
L1:
        WaitFixedTimeFrames(1);
        SetSpEffect(chrEntityId, 9701);
        SetSpEffect(chrEntityId, 5005);
        SetSpEffect(chrEntityId, 9703);
        SetSpEffect(chrEntityId, 9645);
        if (PlayerIsInOwnWorld()) {
            ClearSpEffect(chrEntityId, 9703);
        }
        SetSpEffect(chrEntityId, 9647);
        SetSpEffect(chrEntityId, 9642);
        SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
        dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
        time = ElapsedSeconds(targetTimeSeconds);
        WaitFor(dmg || time || EventFlag(31002722));
        if (!EventFlag(31002722)) {
            EndIf(EventFlag(3683));
            if (!time.Passed) {
                RestartEvent();
            }
            SetEventFlagID(31002728, ON);
            SetEventFlagID(31009889, ON);
            SetEventFlagID(31009201, OFF);
            SetSpEffect(chrEntityId, 9706);
            BatchSetNetworkconnectedEventFlags(3680, 3684, OFF);
            SetNetworkconnectedEventFlagID(3680, ON);
            SaveRequest();
            SetCharacterTalkRange(chrEntityId, 17);
            SetSpEffect(chrEntityId, 9702);
            SetSpEffect(chrEntityId, 5006);
            EndIf(!PlayerIsInOwnWorld());
            EndIf(EventFlag(60832));
            WaitFor(CharacterDead(chrEntityId, NotEqual, 1) && EventFlag(31000850));
            SetEventFlagID(60832, ON);
            AwardGesture(90);
            EndEvent();
        }
    }
L2:
    WaitFixedTimeRealFrames(1);
    SetSpEffect(chrEntityId, 9702);
    SetSpEffect(chrEntityId, 5006);
    SetSpEffect(chrEntityId, 9704);
    SetSpEffect(chrEntityId, 9644);
    SetSpEffect(chrEntityId, 9706);
    SetSpEffect(chrEntityId, 9643);
    SetCharacterTeamType(chrEntityId, TeamType.Enemy);
    EndEvent();
});

// NPC309_盗賊の頭_追い剥ぎとして再会_降伏後の攻撃回数監視 -- NPC309_Head of the thieves_Reunited as a robber_Monitor the number of attacks after surrendering
$Event(31003715, Restart, function(entityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeFrames(1);
    EndIf(!EventFlag(3691));
    EndIf(EventFlag(3683));
    EndIf(EventFlag(31000850));
    WaitFor(EventFlag(31002720) && !EventFlag(3683) && PlayerIsInOwnWorld());
    WaitFixedTimeSeconds(2.5);
    EndIf(EventFlag(31000850));
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Unspecified)
            && !EventFlag(3683)
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(31000850));
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Unspecified)
            && !EventFlag(3683)
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(31000850));
    WaitFixedTimeFrames(1);
    WaitFor(
        HasDamageType(entityId, 10000, DamageType.Unspecified)
            && !EventFlag(3683)
            && PlayerIsInOwnWorld());
    EndIf(EventFlag(31000850));
    SetNetworkconnectedEventFlagID(31002722, ON);
    EndEvent();
});

// NPC309_盗賊の頭_NPC死亡処理_ボス二戦目用 -- NPC309_Thief's head_NPC death processing_For second boss battle
$Event(31003716, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(31000800));
    EndIf(EventFlag(31000850));
    WaitFor(!EventFlag(eventFlagId) && EventFlag(3691) && CharacterDead(chrEntityId));
    SetEventFlagID(31002723, ON);
    BatchSetNetworkconnectedEventFlags(eventFlagId2, eventFlagId3, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    SaveRequest();
});

