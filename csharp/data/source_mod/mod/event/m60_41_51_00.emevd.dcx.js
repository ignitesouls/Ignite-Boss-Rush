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
    $InitializeCommonEvent(0, 90005870, 1041510800, 903251600, 12);
    $InitializeCommonEvent(0, 90005870, 1041510801, 903251600, 12);
    $InitializeEvent(0, 1041512800, 1041510800, 0, 1041510800, 0, 30335, 1041510801);
    $InitializeCommonEvent(0, 90005261, 1041510800, 1041512500, 10, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1041510801, 1041512500, 10, 0, 0);
    $InitializeEvent(0, 1041512310, 1041510800, 1041510801);
    $InitializeEvent(0, 1041512321, 1041510800, 1041510801, 12, 1041512815);
    $InitializeEvent(0, 1041512320, 1041510800, 1041510801);
    $InitializeCommonEvent(0, 90005261, 1041510202, 1041512202, 10, 0, 0);
    $InitializeEvent(0, 1041512200, 1041510200);
    $InitializeEvent(1, 1041512200, 1041510201);
    $InitializeCommonEvent(0, 90005300, 1041510410, 1041510410, 0, 0, 0);
    $InitializeEvent(0, 1041512270);
    $InitializeEvent(1, 1041512270);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005250, 1041510410, 1041512410, 0, 700);
    $InitializeCommonEvent(0, 90005201, 1041510452, 30016, 20016, 100, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1041510450, 30017, 20017, 1041512450, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1041510451, 30017, 20017, 1041512450, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1041510453, 30016, 20016, 1041512453, 0, 0, 0, 0, 0);
});

// 上位騎兵_視覚強化_XX -- High rank cavalry_Visual enhancement_XX
$Event(1041512200, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8092);
    SetNetworkconnectedThisEventSlot(ON);
});

// 雷地帯_弾丸イベント_XX -- Thunder Zone_Bullet Event_XX
$Event(1041512270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1041510270);
    WaitFor(InArea(10000, 1041512270));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1041510270, 1041512271, 900, 802103000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1041510270, 1041512271, 900, 802103010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1041510270, 1041512271, 900, 802103020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1041510270, 1041512271, 900, 802103030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1041510270, 1041512271, 900, 802103040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1041510270, 1041512271, 900, 802103050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1041510270, 1041512271, 900, 802103060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1041510270, 1041512271, 900, 802103070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ツリーガード_お互いをターゲット指定する -- Tree Guard_Specify each other as targets
$Event(1041512310, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(1041510800));
    WaitFor(
        CharacterAIState(chrEntityId, AIStateType.Combat)
            || CharacterAIState(chrEntityId2, AIStateType.Combat));
    WaitFixedTimeSeconds(30);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    RestartEvent();
});

// ツリーガード_BGMHU管理 -- Tree guard_BGMHU management
$Event(1041512320, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(1041510800));
    WaitFor(
        CharacterDead(chrEntityId)
            || CharacterDead(chrEntityId2)
            || (HPRatio(chrEntityId) <= 0.5 && HPRatio(chrEntityId2) <= 0.5));
    SetNetworkconnectedEventFlagID(1041512815, ON);
});

// フィールドボス_HU通知_ボス2体用 -- Field boss_HU notification_for 2 bosses
$Event(1041512321, Default, function(chrEntityId, chrEntityId2, npcThreatLevel, eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId) && FieldBattleBGMActive(npcThreatLevel));
    SetFieldBattleBGMHeatUp(npcThreatLevel, true);
    WaitFor(
        (CharacterDead(chrEntityId) && CharacterDead(chrEntityId2))
            || !FieldBattleBGMActive(npcThreatLevel));
    SetFieldBattleBGMHeatUp(npcThreatLevel, false);
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

// ツリガ２体戦_フィールドボス撃破 -- Tsuriga 2-body battle_defeat field boss
$Event(1041512800, Restart, function(eventFlagId, eventFlagId2, chrEntityId, value, itemLotId, chrEntityId2) {
    if (Signed(itemLotId) != 0) {
        Unknown200476(eventFlagId, itemLotId);
    }
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(itemLotId) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(itemLotId);
        EndEvent();
    }
L0:
    EndIf(!EventFlag(1049308077)); //end if boss not selected
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    WaitFor(CharacterHPValue(chrEntityId) <= 0 && CharacterHPValue(chrEntityId2) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(chrEntityId) && CharacterDead(chrEntityId2));
    GotoIf(S0, value == 3);
    if (value != 2) {
        if (value != 1) {
            HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.EnemyFelled);
            Goto(L1);
        }
        HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.GreatEnemyFelled);
    }
    Goto(L1);
S0:
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.DemigodFelled);
    Goto(L1);
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.LegendFelled);
L1:
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304200, 1049304099, -1, 1049304004, 1049304853, 1049304854, 1049304855, 1049304856, 1049305386, 1049305388, 1049305390, 1049305395, 1049300200);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307477);
    EndEvent(); //end
    SetEventFlagID(eventFlagId, ON);
    if (eventFlagId2 != 0) {
        SetEventFlagID(eventFlagId2, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(itemLotId) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(itemLotId);
    EndEvent();
});

