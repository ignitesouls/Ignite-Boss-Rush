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
    $InitializeCommonEvent(0, 90005600, 1050570000, 1050571950, 5, 1050570480);
    if (EventFlag(1049308087)) { //if boss selected (death rite bird)
        $InitializeEvent(0, 1050572820, 1050570800, 30000, 20000, 1050572800, 0, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90005870, 1050570800, 904980600, 24);
        $InitializeCommonEvent(0, 90005860, 1050570800, 0, 1050570800, 0, 30530, 0);
    }
    if (EventFlag(1049308096)) { //if boss selected (putrid avatar)
        $InitializeCommonEvent(0, 90005870, 1050570850, 904811600, 18);
        $InitializeCommonEvent(0, 90005860, 1050570850, 0, 1050570850, 0, 30555, 0);
        $InitializeCommonEvent(0, 90005872, 1050570850, 18, 0);
    }
    $InitializeEvent(0, 1050572320, 1050570320, 1051570320, 5030);
    $InitializeEvent(0, 1050572330, 1050570320, 5021);
    $InitializeEvent(0, 1050572340, 1050570320, 1050572320, 1050572330);
    $InitializeEvent(0, 1050572200, 1050575200);
    $InitializeEvent(0, 1050572250);
    $InitializeEvent(1, 1050572250);
});

// 野生動物霊体化 -- wild animal spirit form
$Event(1050572200, Restart, function(chrEntityId) {
    DisableCharacterCollision(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    EndEvent();
});

// 雷地帯_弾丸イベント_XX -- Thunder Zone_Bullet Event_XX
$Event(1050572250, Restart, function() {
    DisableNetworkSync();
    CreateBulletOwner(1050570250);
    WaitFor(InArea(10000, 1050572250));
    WaitRandomTimeSeconds(1, 10);
    if (EventFlag(50)) {
        ShootBullet(1050570250, 1050572251, 900, 802105000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1050570250, 1050572251, 900, 802105010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1050570250, 1050572251, 900, 802105020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1050570250, 1050572251, 900, 802105030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1050570250, 1050572251, 900, 802105040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1050570250, 1050572251, 900, 802105050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1050570250, 1050572251, 900, 802105060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1050570250, 1050572251, 900, 802105070, 0, 0, 0);
    }
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 夜の王の眷属巨大骸骨_位置合わせ_XX -- Night King's Heir Giant Skeleton_Position_XX
$Event(1050572320, Restart, function(chrEntityId, chrEntityId2, spEffectId) {
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Asset, chrEntityId2, 90, chrEntityId);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 夜の王の眷属巨大骸骨_遠隔用特殊効果 -- Night King's Heir Giant Skeleton_Remote Special Effects
$Event(1050572330, Restart, function(chrEntityId, spEffectId) {
    SetSpEffect(chrEntityId, spEffectId);
});

// 夜の王の眷属巨大骸骨_思考ロジック有効化_領域判定_xx -- Night King's Heir Giant Skeleton_Thought Logic Activation_Area Judgment_xx
$Event(1050572340, Restart, function(chrEntityId, areaEntityId, eventFlagId) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    WaitFor(CharacterBackreadStatus(chrEntityId));
    if (!EventFlag(eventFlagId)) {
        WaitFor(
            (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && !AllPlayersInArea(areaEntityId))
                || EventFlag(eventFlagId));
        SetSpEffect(chrEntityId, 15338);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    }
L0:
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, areaEntityId))
            || !EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId, OFF);
    SetSpEffect(chrEntityId, 15339);
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

// 死の鳥_特殊待機_領域判定 -- Bird of Death_Special Standby_Area Judgment
$Event(1050572820, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, areaEntityId)
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
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
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
        EnableCharacterAI(chrEntityId);
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
