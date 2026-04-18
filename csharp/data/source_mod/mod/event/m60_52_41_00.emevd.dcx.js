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
    RegisterBonfire(1052410000, 1052411950, 0, 0, 0, 5);
    $InitializeEvent(0, 1052412220);
    $InitializeEvent(0, 1052412270);
    $InitializeEvent(1, 1052412270);
    $InitializeEvent(0, 1052412200, 1052410210, 1052411210, 1052412210);
    if (EventFlag(1049308092)) { //if boss selected (night's cavalry)
        $InitializeCommonEvent(0, 90005300, 1052410850, 1052410851, 0, 0, 0);
        $InitializeCommonEvent(0, 90005476, 1052410850, 1052410851);
        $InitializeEvent(0, 1052412291, 1052410850, 1052410851);
        $InitializeCommonEvent(0, 90005871, 1052410850, 903150606, 10, 1052410851);
        $InitializeCommonEvent(0, 90005860, 1052410850, 0, 1052410850, 0, 1052410100, 0);
        $InitializeCommonEvent(0, 90005872, 1052410850, 10, 0);
    }
    $InitializeEvent(0, 1052412510);
    $InitializeCommonEvent(0, 90005501, 1052410510, 1052410511, 0, 1052411510, 1052411511, 1052411512, 1052410512);
    if (EventFlag(1049308046)) { //if boss selected (greyll)
        $InitializeCommonEvent(0, 90005870, 1052410800, 904500601, 25);
        $InitializeCommonEvent(0, 90005860, 1052410800, 0, 1052410800, 1, 30420, 0);
    }
    $InitializeEvent(0, 1052412230);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 1052410519);
});

// ゴロゴロ鉄球 -- rumbling iron ball
$Event(1052412200, Restart, function(chrEntityId, assetEntityId, eventFlagId) {
    DisableCharacter(chrEntityId);
    EndIf(EventFlag(eventFlagId));
    EndIf(CharacterDead(chrEntityId));
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(
        InArea(10000, eventFlagId)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    CreateAssetfollowingSFX(assetEntityId, 100, 620383);
    EnableCharacter(chrEntityId);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(2);
    DeleteAssetfollowingSFX(assetEntityId, true);
    ForceAnimationPlayback(chrEntityId, 20001, false, false, false);
    WaitFixedTimeSeconds(1.9);
    ForceAnimationPlayback(chrEntityId, 20004, false, false, false);
    WaitFixedTimeSeconds(2);
    ForceAnimationPlayback(chrEntityId, 20004, false, false, false);
    WaitFixedTimeSeconds(1);
    DisableCharacter(chrEntityId);
    ForceCharacterDeath(chrEntityId, false);
    EndEvent();
});

// 魔術師塔イベント_霧壁 -- Magician Tower Event_Mist Wall
$Event(1052412220, Restart, function() {
    CreateAssetfollowingSFX(1052411200, 200, 1500);
});

// 飛竜初期設定 -- Hiryu initial settings
$Event(1052412230, Restart, function() {
    SetCharacterEnableDistanceAndUnknown200484(1052410800, 220, 40);
});

// ルーン狩りの騎士_時間帯によって馬召喚を禁止する -- Rune Hunting Knight_Horse summoning is prohibited depending on the time of day.
$Event(1052412291, Restart, function(chrEntityId, chrEntityId2) {
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

// エレベータイベント起動 -- Elevator event activation
$Event(1052412510, Default, function() {
    $InitializeCommonEvent(0, 90005500, 1052410510, 1052410511, 0, 1052411510, 1052411511, 1052413511, 1052411512, 1052413512, 1052412511, 1052412512, 1052410512, 1052410513, 0);
});

// エレベーター初期フラグ -- Elevator initial flag
$Event(1052410519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(1052410510, OFF);
});

// 雷地帯_弾丸イベント_XX -- Thunder Zone_Bullet Event_XX
$Event(1052412270, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1052410270);
    WaitFor(EntityInRadiusOfEntity(10000, 1052410270, 60, 1));
    WaitRandomTimeSeconds(1, 8);
    if (GameCycle() == 0) {
        ShootBullet(1052410270, 1052412271, 900, 802104200, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1052410270, 1052412271, 900, 802104210, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1052410270, 1052412271, 900, 802104220, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1052410270, 1052412271, 900, 802104230, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1052410270, 1052412271, 900, 802104240, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1052410270, 1052412271, 900, 802104250, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1052410270, 1052412271, 900, 802104260, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1052410270, 1052412271, 900, 802104270, 0, 0, 0);
        Goto(L0);
    }
L0:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});
