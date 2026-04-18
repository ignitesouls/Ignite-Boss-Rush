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
    $InitializeCommonEvent(0, 90005600, 76357, 1037531950, 5, 0);
    if (EventFlag(1049308080)) { //if boss selected (demi-human queen maggie)
        $InitializeCommonEvent(0, 90005870, 1037530800, 904130600, 16);
        $InitializeEvent(0, 1037532345);
        $InitializeEvent(0, 1037532350);
        $InitializeCommonEvent(0, 90005860, 1037530800, 1037530800, 1037530800, 0, 30395, 0);
        $InitializeCommonEvent(0, 90005872, 1037530800, 16, 0);
        $InitializeEvent(0, 1037532450, 1037530800, 1037532400, 10, 0, -1);
    }
    $InitializeCommonEvent(1, 90005261, 1037530350, 1037532400, 5, 2, -1);
    $InitializeCommonEvent(2, 90005261, 1037530351, 1037532400, 5, 2, -1);
    $InitializeCommonEvent(3, 90005261, 1037530352, 1037532400, 5, 10, -1);
    $InitializeCommonEvent(0, 90005300, 1037530400, 1037530400, 40332, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1037540370, 30001, 20001, 1037542370, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1037540370, 1037542370, 5, 0, -1);
    $InitializeCommonEvent(1, 90005211, 1037540371, 30002, 20002, 1037542370, 5, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005261, 1037540371, 1037542370, 5, 1.5, -1);
    $InitializeCommonEvent(2, 90005211, 1037540372, 30002, 20002, 1037542370, 5, 4, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005261, 1037540372, 1037542370, 5, 4, -1);
    $InitializeCommonEvent(3, 90005211, 1037540373, 30001, 20001, 1037542370, 5, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(3, 90005261, 1037540373, 1037542370, 5, 1, -1);
    $InitializeCommonEvent(4, 90005211, 1037540374, 30001, 20001, 1037542370, 5, 2, 0, 0, 0, 0);
    $InitializeCommonEvent(4, 90005261, 1037540374, 1037542370, 5, 2, -1);
    $InitializeCommonEvent(5, 90005211, 1037540375, 30001, 20001, 1037542370, 5, 3.3, 0, 0, 0, 0);
    $InitializeCommonEvent(5, 90005261, 1037540375, 1037542370, 5, 3.3, -1);
    $InitializeCommonEvent(0, 90005211, 1037530360, 30000, 20010, 1037532360, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1037530365, 30000, 20000, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1037530366, 30000, 20000, 5, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 1037532400, 1037530300, 1037532300, 1037530310);
    $InitializeEvent(1, 1037532400, 1037530301, 1037532300, 1037530310);
    $InitializeEvent(2, 1037532400, 1037530302, 1037532300, 1037530310);
    $InitializeEvent(3, 1037532400, 1037530303, 1037532300, 1037530310);
    $InitializeEvent(0, 1037532201);
    $InitializeEvent(0, 1037532200, 1037531200, 4.2);
    $InitializeEvent(1, 1037532200, 1037531201, 4.6);
    $InitializeEvent(2, 1037532200, 1037531202, 1.8);
    $InitializeEvent(3, 1037532200, 1037531203, 5);
    $InitializeEvent(4, 1037532200, 1037531204, 1.9);
    $InitializeEvent(5, 1037532200, 1037531205, 2);
    $InitializeEvent(6, 1037532200, 1037531206, 3);
    $InitializeEvent(7, 1037532200, 1037531207, 11);
    $InitializeEvent(8, 1037532200, 1037531208, 2.5);
    $InitializeEvent(9, 1037532200, 1037531209, 1.5);
    $InitializeEvent(10, 1037532200, 1037531210, 2);
    $InitializeEvent(11, 1037532200, 1037531211, 7.1);
    $InitializeEvent(12, 1037532200, 1037531212, 2.2);
    $InitializeEvent(13, 1037532200, 1037531213, 2.3);
    $InitializeEvent(14, 1037532200, 1037531214, 1.9);
    $InitializeEvent(15, 1037532200, 1037531215, 4.6);
    $InitializeEvent(16, 1037532200, 1037531216, 4);
    $InitializeCommonEvent(0, 900005610, 1037531680, 100, 800, 1037538620);
    $InitializeEvent(0, 1037533700, 1037530700);
});

// エネミー睡眠禁止 -- No energy sleep
$Event(1037532300, Restart, function() {
    ClearSpEffect(1037530210, 5070);
    ClearSpEffect(1037530211, 5070);
    ClearSpEffect(1037530212, 5070);
    ClearSpEffect(1037530213, 5070);
    ClearSpEffect(1037530214, 5070);
    ClearSpEffect(1037530215, 5070);
    ClearSpEffect(1037530216, 5070);
    ClearSpEffect(1037530217, 5070);
    ClearSpEffect(1037530218, 5070);
    ClearSpEffect(1037530219, 5070);
    ClearSpEffect(1037530220, 5070);
    ClearSpEffect(1037530221, 5070);
    ClearSpEffect(1037530222, 5070);
    ClearSpEffect(1037530223, 5070);
    ClearSpEffect(1037530224, 5070);
    ClearSpEffect(1037530225, 5070);
    ClearSpEffect(1037530226, 5070);
    ClearSpEffect(1037530227, 5070);
    ClearSpEffect(1037530228, 5070);
});

// 亜人王視界強化 -- Demi-King vision enhancement
$Event(1037532345, Restart, function() {
    EndIf(ThisEventSlot());
    SetSpEffect(1037530800, 8087);
    SetThisEventSlot(ON);
    EndEvent();
});

// 亜人王が死んだら周囲の取り巻きも死ぬイベント -- An event where when the demi-king dies, his surrounding people also die.
$Event(1037532350, Restart, function() {
    if (!EventFlag(1037530800)) {
        WaitFor(EventFlag(1037530800));
        ForceCharacterDeath(1037530350, true);
        ForceCharacterDeath(1037530351, true);
        ForceCharacterDeath(1037530352, true);
        ForceCharacterDeath(1037530353, true);
        ForceCharacterDeath(1037530354, true);
        EndEvent();
    }
L0:
    DisableCharacter(1037530350);
    DisableCharacter(1037530351);
    DisableCharacter(1037530352);
    DisableCharacter(1037530353);
    DisableCharacter(1037530354);
    EndEvent();
});

// 間欠泉_XX -- Geyser_XX
$Event(1037532200, Restart, function(entityId, timeSeconds) {
    WaitFor(EntityInRadiusOfEntity(10000, entityId, 70, 1));
    if (!ThisEventSlot()) {
        WaitFixedTimeSeconds(timeSeconds);
        SetThisEventSlot(ON);
    }
L0:
    if (EventFlag(50)) {
        ShootBullet(1037530299, entityId, -1, 802803200, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(1037530299, entityId, -1, 802803210, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(1037530299, entityId, -1, 802803220, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(1037530299, entityId, -1, 802803230, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(1037530299, entityId, -1, 802803240, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(1037530299, entityId, -1, 802803250, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(1037530299, entityId, -1, 802803260, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(1037530299, entityId, -1, 802803270, 0, 0, 0);
    }
    WaitFixedTimeSeconds(6);
    RestartIf(mainGroupAbuse);
});

// 間欠泉_弾丸オーナー作成 -- Geyser_Bullet owner created
$Event(1037532201, Restart, function() {
    CreateBulletOwner(1037530299);
});

// ストームオオカミ出現_XX -- Storm wolf appears_XX
$Event(1037532400, Restart, function(chrEntityId, areaEntityId, chrEntityId2) {
    EndIf(CharacterDead(chrEntityId));
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    DisableCharacter(chrEntityId);
    CreateBulletOwner(chrEntityId2);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive);
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
    areaChrSp = InArea(10000, areaEntityId) && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    PlaySE(areaEntityId, SoundType.CharacterMotion, 407008100);
    WaitFixedTimeSeconds(1);
    if (!(!InArea(10000, areaEntityId)
        && (CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom)))) {
        WaitRandomTimeSeconds(0, 0.5);
        ShootBullet(chrEntityId2, 10000, 900, 100920, 0, 0, 0);
    }
L0:
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
    SetSpEffect(chrEntityId, 8090);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(chrEntityId, 8090);
});

// 思考ロジック有効化_領域／距離判定_村奥亜人王用 -- Enabling thought logic_area/distance judgment_for Murokuku Demi-King
$Event(1037532450, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
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
    area = InArea(10000, areaEntityId) || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || CharacterAIState(1037530351, AIStateType.Alert)
            || CharacterAIState(1037530351, AIStateType.Combat)
            || CharacterAIState(1037530352, AIStateType.Alert)
            || CharacterAIState(1037530352, AIStateType.Combat)
            || areaChrSp
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

// NPC111アズール死亡 -- NPC111 Azure dies
$Event(1037533700, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    EndIf(EventFlag(400441));
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacterImmortality(chrEntityId);
    DisableCharacterHPBarDisplay(chrEntityId);
    WaitFor(EventFlag(14009267));
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacterImmortality(chrEntityId);
    EndEvent();
});
