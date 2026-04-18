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
    RegisterBonfire(76302, 1038511950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76314, 76302, 1038511980, 77300, 1, 78300, 78301, 78302, 78303, 78304, 78305, 78306, 78307, 78308, 78309);
    $InitializeEvent(0, 1038512800);
    $InitializeEvent(0, 1038512810);
    $InitializeEvent(0, 1038512849);
    $InitializeEvent(0, 1038512500);
    $InitializeCommonEvent(0, 90005300, 1038510500, 1038510500, 40302, 0, 0);
    $InitializeEvent(0, 1038513700, 1038510700, 1038511700);
    $InitializeCommonEvent(0, 90005752, 1038511700, 200, 120, 3);
    $InitializeEvent(0, 1038513701);
    $InitializeEvent(0, 1038513702, 1038511700, 1038510700);
    $InitializeEvent(0, 1038513703);
    $InitializeCommonEvent(0, 90005740, 1038512725, 1038512726, 1038512727, 1038510700, 703, 1038511701, 703, 0.2, 90203, -1, -1, 1.2);
    $InitializeCommonEvent(0, 90005741, 1038512728, 1038512729, 1038512727, 1038510700, 90201, 0, -1, -1, 0.5);
    $InitializeEvent(0, 1038513705, 1038510705);
    $InitializeCommonEvent(0, 90005704, 1038510705, 4181, 4180, 1038519251, 3);
    $InitializeCommonEvent(0, 90005703, 1038510705, 4181, 4182, 1038519251, 1059481190, 4180, 4184, -1);
    $InitializeCommonEvent(0, 90005702, 1038510705, 4183, 4180, 4184);
    $InitializeCommonEvent(0, 90005771, 1038510950, 1038512700);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1038510700, true);
    SetCharacterBackreadState(1038510705, true);
    DisableAsset(1038511700);
    $InitializeCommonEvent(0, 90005261, 1038510301, 1038512301, 3, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1038510302, 1038512301, 3, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038510400, 30002, 20002, 1038512400, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038510401, 30002, 20002, 1038512400, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038510402, 30002, 20002, 1038512400, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1038510600, 1038512600, 2, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1038510602, 30000, 20000, 4, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 1038510482, 1038512482, 0, 3005);
    $InitializeEvent(0, 1038512405, 1038510405, 30003, 20003, 2, 0, 0, 0, 0, 0);
    $InitializeEvent(1, 1038512405, 1038510406, 30003, 20003, 2, 0, 0, 0, 0, 0);
    $InitializeEvent(2, 1038512405, 1038510451, 30003, 20003, 2, 0, 0, 0, 0, 0);
    $InitializeEvent(3, 1038512405, 1038510480, 30003, 20003, 2, 0, 0, 0, 0, 0);
    $InitializeEvent(4, 1038512405, 1038510489, 30003, 20003, 2, 0, 0, 0, 0, 0);
    $InitializeEvent(5, 1038512405, 1038510490, 30002, 20002, 2, 0, 0, 0, 0, 0);
});

// 亜人_特殊待機_距離と初回咆哮で判定_XX -- Demi-human_Special standby_Determined by distance and first roar_XX
$Event(1038512405, Restart, function(chrEntityId, animationId, animationId2, targetDistance, timeSeconds, value, value2, value3, value4) {
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
    areaChrSp &= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
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
    sp = CharacterHasSpEffect(1038510404, 10530)
        || CharacterHasSpEffect(1038510409, 10530)
        || CharacterHasSpEffect(1038510481, 10531);
    sp2 = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp3 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp4 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp5 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp6 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp &= chrSp;
    WaitFor(
        sp
            || areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || sp2
            || sp3
            || sp4
            || sp5
            || sp6);
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

// 高山入り口_イントロ再生 -- Takayama entrance_Intro playback
$Event(1038512500, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 1038512500));
    EndIf(EventFlag(1038500500));
    SetEventFlagID(1038500500, ON);
    PlaySE(1038512500, SoundType.BGM, 990000020);
});

//demi-human queen gilika
$Event(1038512800, Restart, function() {
    EndIf(!EventFlag(1049308161)); //end if boss not selected
    EndIf(EventFlag(1038510800));
    WaitFor(CharacterHPValue(1038510800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1038510800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1038510800));
    HandleBossDefeatAndDisplayBanner(1038510800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304162, 1049304051, -1, -1, 1049304681, 1049304682, 1049304683, 1049304684, 1049304685, -1, 1049304925, 1049304928, 1049304932, 1049304934, 1049300162);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307561);
});

// ボス出現 -- Boss appears
$Event(1038512810, Restart, function() {
    if (EventFlag(1038510800)) {
        DisableCharacter(1038510800);
        DisableCharacterCollision(1038510800);
        ForceCharacterDeath(1038510800, false);
        EnableObjAct(1038511560, 1110064);
        EndEvent();
    }
L0:
    DisableCharacterAI(1038510800);
    ForceAnimationPlayback(1038510800, 30000, true, false, false);
    WaitFor(EventFlag(1038512805) && InArea(10000, 1038512800));
L2:
    ForceAnimationPlayback(1038510800, 20000, false, false, false);
    EnableCharacterAI(1038510800);
    SetNetworkUpdateRate(1038510800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1038510800, 0, 904130540);
    DisableObjAct(1038511560, 1110064);
});

// ボス_亜人の王_イベント起動 -- Boss_King of Demijin_Event activation
$Event(1038512849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 1038510800, 1038511800, 1038512800, 1038512805, 1038515800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 1038510800, 1038511800, 1038512800, 1038512805, 1038512806, 10000);
    $InitializeCommonEvent(0, 9005811, 1038510800, 1038511800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 1038510800, 931000, 1038512805, 1038512806, 0, 1038512802, 0, 0);
    $InitializeCommonEvent(0, 9005812, 1038510800, 1038511801, 3, 0, 0);
});

// NPC313火山館の勧誘者_NPC初期化イベント_火山館へ招待_遺跡 -- NPC313 Volcano Hall Recruiter_NPC Initialization Event_Invitation to Volcano Hall_Ruins
$Event(1038513700, Restart, function(chrEntityId, assetEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3420)) {
            SetEventFlagID(1038519203, OFF);
        }
        if (EventFlag(1038519207)) {
            SetNetworkconnectedEventFlagID(1038512720, ON);
        }
    }
L10:
    if (!(EventFlag(3426) && (EventFlag(1038519207) || EventFlag(1038512720)))) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        DisableAsset(assetEntityId);
        WaitFor(EventFlag(3426) && (EventFlag(1038519207) || EventFlag(1038512720)));
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
    WaitFor(!(EventFlag(3426) && (EventFlag(1038519207) || EventFlag(1038512720))));
    RestartEvent();
});

// NPC313火山館の勧誘者_火山館へ招待_遺跡に近づいた判定 -- NPC313 Volcano Pavilion Recruiter_Invite to Volcano Pavilion_Judgment of approaching the ruins
$Event(1038513701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFixedTimeRealFrames(1);
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038519207) || EventFlag(1038509205));
    EndIf(EntityInRadiusOfEntity(10000, 1038500952, 5, 1));
    WaitFor(
        InArea(10000, 1038512700) || EventFlag(16000860) || EventFlag(76301) || EventFlag(76302));
    EndIf(EventFlag(1038519207) || EventFlag(1038509205));
    SetEventFlagID(1038519207, ON);
    EndEvent();
});

// NPC313火山館の勧誘者_火山館へ招待_遺跡_被ダメ系会話再生処理 -- NPC313 Volcano Pavilion Recruiter_Invitation to Volcano Pavilion_Ruins_Damaged conversation playback processing
$Event(1038513702, Restart, function(entityId, entityId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038509205));
    EndIf(EventFlag(1038512704));
    GotoIf(L1, !EventFlag(1038512701));
    Goto(L2);
L1:
    WaitFor(HasDamageType(entityId, 20000, DamageType.Unspecified));
    Goto(L3);
L2:
    dmg = HasDamageType(entityId, 20000, DamageType.Unspecified);
    WaitFor(dmg || ElapsedSeconds(4));
    if (dmg.Passed) {
L3:
        GotoIf(L5, !EventFlag(1038512701));
        GotoIf(L6, !EventFlag(1038512703));
        RestartEvent();
L5:
        if (EntityInRadiusOfEntity(20000, entityId2, 10, 1)) {
            SetEventFlagID(1038512700, ON);
            WaitFor(EventFlag(1038512706));
        }
        RestartEvent();
L6:
        if (EntityInRadiusOfEntity(20000, entityId2, 10, 1)) {
            SetEventFlagID(1038512702, ON);
            WaitFor(EventFlag(1038512707));
        }
        RestartEvent();
    }
L7:
    SetEventFlagID(1038512704, ON);
    EndEvent();
});

// NPC313火山館の勧誘者_火山館へ招待_ワープ実行_遺跡 -- NPC313 Volcano Hall Recruiter_Invite to Volcano Hall_Execute warp_Ruins
$Event(1038513703, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3426));
    EndIf(EventFlag(1038509205));
    WaitFor(EventFlag(1038519205) && EventFlag(1038519207));
    SetEventFlagID(16008540, ON);
    SendAllPhantomsHome();
    WarpPlayer(16, 0, 0, 0, 16002701, 0);
    EndEvent();
});

// NPC348マレニアの娘_ﾌｪｰｽﾞ3_NPC初期化イベント -- NPC348 Marenia's Daughter_Phase 3_NPC initialization event
$Event(1038513705, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(1050389265, OFF);
        SetNetworkconnectedEventFlagID(1038519255, OFF);
        SetNetworkconnectedEventFlagID(4197, OFF);
        if (EventFlag(4180)) {
            SetEventFlagID(1050389253, OFF);
        }
    }
L19:
    GotoIf(L6, EventFlag(4187) && EventFlag(1050389266));
    GotoIf(S0, PlayerIsInOwnWorld());
    GotoIf(L6, EventFlag(4187) && EventFlag(4197));
S0:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    WaitFor(EventFlag(4187) && EventFlag(1050389266));
    RestartEvent();
L6:
    SetNetworkconnectedEventFlagID(1050389265, OFF);
    SetNetworkconnectedEventFlagID(1038519255, ON);
    SetNetworkconnectedEventFlagID(4197, ON);
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
    WaitFor(!(EventFlag(4187) && EventFlag(1050389266)));
    RestartEvent();
});

