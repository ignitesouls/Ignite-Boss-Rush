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
    RegisterBonfire(31100000, 31101950, 0, 0, 0, 5);
    $InitializeEvent(0, 31102800);
    $InitializeEvent(0, 31102801);
    $InitializeEvent(0, 31102802);
    $InitializeEvent(0, 31102810);
    $InitializeEvent(0, 31102811);
    $InitializeEvent(0, 31102815);
    $InitializeEvent(0, 31102849);
    $InitializeEvent(0, 31102860);
    $InitializeEvent(0, 31102830);
    $InitializeCommonEvent(0, 90005646, 31100800, 31102840, 31102841, 31101840, 31102840, 31, 10, 0, 0);
    $InitializeCommonEvent(0, 900005610, 31101200, 100, 800, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 31102255, 31100252, 31103252);
    $InitializeEvent(1, 31102255, 31100253, 31103253);
    $InitializeCommonEvent(0, 90005261, 31100270, 31102270, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31100350, 31102350, 2, 0, 0);
    $InitializeEvent(0, 31102360);
    $InitializeCommonEvent(0, 90005261, 31100201, 31102201, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31100202, 31102201, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31100205, 31102205, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31100236, 31102236, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31100237, 31102236, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31100238, 31102238, 2, 0, 0);
    $InitializeEvent(1, 31102200, 31100238);
});

// 動物なかなか逃げ出さない_XX -- Animals don't easily escape_XX
$Event(31102200, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8081);
    SetSpEffect(chrEntityId, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(chrEntityId, 10000, 2, 1))
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified));
    ClearSpEffect(chrEntityId, 8081);
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

// 思考ロジック有効化_領域／距離判定_逆流対策_XX -- Enabling thought logic_Area/distance judgment_Backflow countermeasures_XX
$Event(31102250, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, areaEntityId);
    WaitFor(
        CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || chrSpArea
            || (chrSp && EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1))
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
    SetNetworkconnectedThisEventSlot(ON);
    if (chrSpArea.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

// オオカミ_巡回ルート設定_XX -- Wolf_Patrol route setting_XX
$Event(31102255, Restart, function(chrEntityId, patrolInformationEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31102252)
            && (CharacterAIState(chrEntityId, AIStateType.Normal)
                || CharacterAIState(chrEntityId, AIStateType.Recognition)
                || CharacterAIState(chrEntityId, AIStateType.Alert)
                || CharacterAIState(chrEntityId, AIStateType.PassiveAlert)
                || CharacterAIState(chrEntityId, AIStateType.ActiveAlert)
                || CharacterAIState(chrEntityId, AIStateType.WaitBeforeForget)));
    SetNetworkconnectedThisEventSlot(ON);
    ClearCharactersAITarget(chrEntityId);
    WaitFixedTimeFrames(10);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
});

// ルーンベアの帰巣 -- Return of Rune Bear
$Event(31102360, Default, function() {
    cond = ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, 31102365);
    WaitFor(
        CharacterAIState(31100350, AIStateType.Combat)
            || CharacterAIState(31100350, AIStateType.ActiveAlert));
    WaitFor(cond);
    SetCharacterHome(31102350, 31102361);
});

//beastman of farum azula x2
$Event(31102800, Restart, function() {
    EndIf(!EventFlag(1049308151)); //end if boss not selected
    EndIf(EventFlag(31100800));
    WaitFor(CharacterDead(31100800) && CharacterDead(31100801));
    WaitFixedTimeSeconds(4);
    HandleBossDefeatAndDisplayBanner(31100800, TextBannerType.EnemyFelled);
    //boss rewards
    InitializeCommonEvent(0, 90001033, 1049304238, 1049304134, -1, -1, 1049307020, 1049307021, 1049307022, 1049307023, 1049305821, 1049305823, 1049305826, 1049305829, 1049300238);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307551);
});

// 知性ある獣の末裔_大型武器_死亡時の撃破演出 -- Descendants of intelligent beasts_Large weapons_Defeat animation upon death
$Event(31102801, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(CharacterHPValue(31100800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31100800, SoundType.SFX, 888880000);
});

// 知性ある獣の末裔_投擲＋盾_死亡時の撃破演出 -- Descendants of intelligent beasts_Throwing + Shield_Death effect upon death
$Event(31102802, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(CharacterHPValue(31100801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31100801, SoundType.SFX, 888880000);
});

// ボス_ルート制御 -- Boss_root control
$Event(31102830, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(HPRatio(31100800) <= 0.85);
    ChangeCharacterPatrolBehavior(31100801, 31103830);
    ClearSpEffect(31100801, 8085);
    SetSpEffect(31100801, 8090);
    SetCharacterAIId(0, 0);
});

// ボス出現 -- Boss appears
$Event(31102810, Restart, function() {
    if (EventFlag(31100800)) {
        DisableCharacter(31100800);
        DisableCharacter(31100801);
        DisableCharacterCollision(31100800);
        DisableCharacterCollision(31100801);
        ForceCharacterDeath(31100800, false);
        ForceCharacterDeath(31100801, false);
        EndEvent();
    }
L0:
    if (!EventFlag(31100801)) {
        WaitFor(
            (HasDamageType(31100800, 10000, DamageType.Unspecified)
                || HasDamageType(31100801, 10000, DamageType.Unspecified)
                || CharacterAIState(31100800, AIStateType.Combat)
                || CharacterAIState(31100801, AIStateType.Combat))
                && InArea(10000, 31102805)
                && PlayerIsInOwnWorld());
        SetNetworkconnectedEventFlagID(31100801, ON);
    } else {
L1:
        WaitFor(
            (HasDamageType(31100800, 10000, DamageType.Unspecified)
                || HasDamageType(31100801, 10000, DamageType.Unspecified)
                || CharacterAIState(31100800, AIStateType.Combat)
                || CharacterAIState(31100801, AIStateType.Combat))
                && InArea(10000, 31102805)
                && EventFlag(31102805));
    }
L2:
    SetNetworkUpdateRate(31100800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(31100801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31100800, 0, 903970311);
    DisplayBossHealthBar(Enabled, 31100801, 1, 903970312);
});

// ボス激昂 -- boss rage
$Event(31102811, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(CharacterDead(31100800) || CharacterDead(31100801));
    SetEventFlagID(31102842, ON);
});

// ホストがボス部屋入場 -- Host enters boss room
$Event(31102815, Restart, function() {
    if (!EventFlag(31100800)) {
        WaitFixedTimeFrames(1);
        if (31100801 != 0) {
            GotoIf(L0, EventFlag(31100801));
            WaitFor(
                ((EventFlagState(ON, TargetEventFlagType.EventIDSlotNumber, 31102810)
                    || EventFlag(31100801))
                    && PlayerIsInOwnWorld())
                    || EventFlag(31100800));
            RestartIf(EventFlag(31100800));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(31100800)
                    || (PlayerIsInOwnWorld()
                        && !EventFlag(31100800)
                        && ActionButtonInArea(10000, 31101800)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(31100800));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, 31102800, 60060, true);
            } else {
                RotateCharacter(10000, 31102800, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(31102805));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, 31102800) || time) && PlayerIsInOwnWorld() && !EventFlag(31100800))
                || EventFlag(31100800));
        RestartIf(EventFlag(31100800));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            if (!EventFlag(31100801)) {
                IssueBossRoomEntryNotification();
            }
            SetNetworkUpdateAuthority(31105800, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(31105800);
        SetNetworkconnectedEventFlagID(31102805, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(31100800)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, 31101800));
    RotateCharacter(10000, 31102800, 60060, true);
    SendInvadingPhantomsHome(0);
    RestartEvent();
});

// ホスト入場フラグ_2回目以上 -- Host entry flag_2nd or more time
$Event(31102860, Restart, function() {
    EndIf(EventFlag(31100800));
    WaitFor(
        EventFlag(31102805)
            && (HasDamageType(31100800, 10000, DamageType.Unspecified)
                || CharacterAIState(31100800, AIStateType.Combat)
                || CharacterHasStateInfo(31100800, 436)
                || CharacterHasStateInfo(31100800, 2)
                || CharacterHasStateInfo(31100800, 5)
                || CharacterHasStateInfo(31100800, 6)
                || CharacterHasStateInfo(31100800, 260)
                || HasDamageType(31100801, 10000, DamageType.Unspecified)
                || CharacterAIState(31100801, AIStateType.Combat)
                || CharacterHasStateInfo(31100801, 436)
                || CharacterHasStateInfo(31100801, 2)
                || CharacterHasStateInfo(31100801, 5)
                || CharacterHasStateInfo(31100801, 6)
                || CharacterHasStateInfo(31100801, 260))
            && InArea(10000, 31102805)
            && PlayerIsInOwnWorld());
    SetNetworkconnectedEventFlagID(31102865, ON);
    IssueBossRoomEntryNotification();
});

// ボス_イベント起動 -- Boss_event activation
$Event(31102849, Restart, function() {
    $InitializeCommonEvent(0, 9005801, 31100800, 31101800, 31102800, 31102865, 31102806, 10000);
    $InitializeCommonEvent(0, 9005811, 31100800, 31101800, 3, 31100801);
    $InitializeCommonEvent(0, 9005822, 31100800, 931000, 31102805, 31102806, 31102810, 31102842, 0, 0);
});

