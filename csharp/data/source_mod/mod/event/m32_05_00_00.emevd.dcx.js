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
    RegisterBonfire(32050000, 32051950, 0, 0, 0, 5);
    $InitializeEvent(0, 32052800);
    $InitializeEvent(0, 32052810);
    $InitializeEvent(0, 32052811);
    $InitializeEvent(0, 32052849);
    $InitializeCommonEvent(0, 90005501, 32050510, 32050511, 0, 32051510, 32051511, 32051512, 32050512);
    $InitializeEvent(0, 32052510);
    $InitializeCommonEvent(0, 90005646, 32050800, 32052840, 32052841, 32051840, 32052840, 32, 5, 0, 0);
    $InitializeCommonEvent(0, 900005610, 32051680, 100, 800, 0);
    $InitializeEvent(0, 32052200, 32050208, 30002, 20002, 0, 0, 0, 0, 0, 32051605, 32051606, 32051607, 0);
    $InitializeEvent(1, 32052200, 32050209, 30000, 20000, 0, 0, 0, 0, 0, 32051608, 0, 0, 0);
    $InitializeEvent(2, 32052200, 32050210, 30001, 20001, 0, 0, 0, 0, 0, 32051609, 0, 0, 0);
    $InitializeEvent(0, 32052250, 32050211, 30005, 20005, 0, 0, 0, 0, 0, 32051211, 0, 0, 0, 32050211);
    $InitializeEvent(0, 32052270, 32050211, 30007, 20007, 32050211, 5, 0, 0, 1, 0, 0);
    $InitializeEvent(0, 32052400);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 32050519);
    $InitializeEvent(0, 32052820);
    $InitializeCommonEvent(0, 90005250, 32050200, 32052200, 0, -1);
    $InitializeCommonEvent(0, 90005251, 32050201, 20, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050205, 32052205, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050212, 32052212, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050250, 32052200, 0, -1);
    $InitializeCommonEvent(0, 90005261, 32050255, 32052206, 2, 0, -1);
    $InitializeCommonEvent(0, 90005261, 32050257, 32052206, 2, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050256, 32052205, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050258, 32052212, 1, 3033);
    $InitializeCommonEvent(0, 90005250, 32050259, 32052212, 1, 3033);
    $InitializeCommonEvent(0, 90005250, 32050300, 32052300, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050301, 32052300, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050302, 32052300, 0, 3011);
    $InitializeCommonEvent(0, 90005250, 32050305, 32052305, 0, -1);
    $InitializeCommonEvent(0, 90005260, 32050306, 32052306, 10, 0, 3011);
    $InitializeCommonEvent(0, 90005250, 32050307, 32052306, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32050308, 32052306, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050310, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050311, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050312, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050313, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050314, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050315, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050316, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050317, 0, -1);
    $InitializeCommonEvent(0, 90005271, 32050318, 0, -1);
});

// エレベータイベント起動 -- Elevator event activation
$Event(32052510, Default, function() {
    $InitializeCommonEvent(0, 90005500, 32050510, 32050511, 0, 32051510, 32051511, 32053511, 32051512, 32053512, 32052511, 32052512, 32050512, 32050513, 0);
});

// エレベータ初期フラグ -- Elevator initial flag
$Event(32050519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32050510, ON);
    SetThisEventSlot(ON);
});

// 亡者鉱夫_採掘中止_XX -- Dead Miner_Mining Canceled_XX
$Event(32052200, Restart, function(chrEntityId, animationId, animationId2, timeSeconds, value, value2, value3, value4, assetEntityId, assetEntityId2, assetEntityId3, assetEntityId4) {
    EndIf(ThisEventSlot());
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(assetEntityId, Equal, 1)
        || AssetDestroyed(assetEntityId2, Equal, 1)
        || AssetDestroyed(assetEntityId3, Equal, 1)
        || AssetDestroyed(assetEntityId4, Equal, 1))
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
        assetChrSp &= chr;
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
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
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
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
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

// 亡者鉱夫_採掘中止_武器強化素材_XX -- Dead Miner_Mining Canceled_Weapon Enhancement Materials_XX
$Event(32052250, Restart, function(chrEntityId, animationId, animationId2, timeSeconds, value, value2, value3, value4, assetEntityId, assetEntityId2, assetEntityId3, assetEntityId4, eventFlagId) {
    EndIf(EventFlag(eventFlagId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(assetEntityId, Equal, 1)
        || AssetDestroyed(assetEntityId2, Equal, 1)
        || AssetDestroyed(assetEntityId3, Equal, 1)
        || AssetDestroyed(assetEntityId4, Equal, 1))
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
        assetChrSp &= chr;
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
    assetChrSp &= chrSp;
    WaitFor(
        assetChrSp
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
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetEventFlagID(eventFlagId, ON);
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

// 亡者鉱夫_採掘中止_武器強化素材_終了後待機_XX -- Dead Miner_Canceling mining_Weapon enhancement materials_Waiting after completion_XX
$Event(32052270, Restart, function(chrEntityId, animationId, animationId2, eventFlagId, targetDistance, timeSeconds, value, value2, value3, value4) {
    EndIf(ThisEventSlot());
    EndIf(!EventFlag(eventFlagId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
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
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
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

// アステール_坑道向け特殊効果の付与 -- Aster_Special effects for mine shafts
$Event(32052400, Restart, function() {
    if (!CharacterHasSpEffect(31180400, 16747)) {
        WaitFor(
            ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom))
                && InArea(10000, 32052401));
        SetSpEffect(31180400, 16747);
    }
L0:
    WaitFixedTimeSeconds(3);
    RestartEvent();
});

//crystalian x2
$Event(32052800, Restart, function() {
    EndIf(!EventFlag(1049308164)); //end if boss not selected
    EndIf(EventFlag(32050800));
    WaitFor(CharacterHPValue(32050800) <= 0 && CharacterHPValue(32050801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32050800, SoundType.SFX, 888880000);
    WaitFor(CharacterHPValue(32050800) == 0 && CharacterHPValue(32050801) == 0);
    HandleBossDefeatAndDisplayBanner(32050800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304176, 1049304075, -1, -1, 1049304745, 1049304746, 1049304747, 1049304748, 1049305099, 1049305101, 1049305104, 1049305106, 1049300176);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307564);
});

// ボス出現 -- Boss appears
$Event(32052810, Restart, function() {
    if (EventFlag(32050800)) {
        DisableCharacter(32050800);
        DisableCharacter(32050801);
        DisableCharacterCollision(32050800);
        DisableCharacterCollision(32050801);
        ForceCharacterDeath(32050800, false);
        ForceCharacterDeath(32050801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32050800);
    DisableCharacterAI(32050801);
    if (!EventFlag(32050801)) {
        ForceAnimationPlayback(32050800, 30000, true, false, false);
        ForceAnimationPlayback(32050801, 30000, true, false, false);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32052801))
                || HasDamageType(32050800, 10000, DamageType.Unspecified)
                || HasDamageType(32050801, 10000, DamageType.Unspecified));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(32050801, ON);
        }
        ForceAnimationPlayback(32050800, 20000, false, false, false);
        ForceAnimationPlayback(32050801, 20000, false, false, false);
    } else {
L1:
        ForceAnimationPlayback(32050800, 30000, true, false, false);
        ForceAnimationPlayback(32050801, 30000, true, false, false);
        WaitFor(EventFlag(32052805) && InArea(10000, 32052800));
        ForceAnimationPlayback(32050800, 20000, false, false, false);
        ForceAnimationPlayback(32050801, 20000, false, false, false);
    }
L2:
    EnableCharacterAI(32050800);
    EnableCharacterAI(32050801);
    SetNetworkUpdateRate(32050800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetNetworkUpdateRate(32050801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32050800, 0, 903350321);
    DisplayBossHealthBar(Enabled, 32050801, 1, 903350322);
});

// ボス激昂 -- boss rage
$Event(32052811, Restart, function() {
    EndIf(EventFlag(32050800));
    WaitFor(
        (HPRatio(32050800) <= 0.6 && HPRatio(32050800) <= 0.6)
            || CharacterDead(32050800)
            || CharacterDead(32050801));
    SetEventFlagID(32052802, ON);
});

// ボス閉鎖 -- boss closure
$Event(32052820, Restart, function() {
    EndIf(EventFlag(32050800));
    EndIf(EventFlag(32050801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32058590));
    SetEventFlagID(32058590, OFF);
});

// ボスイベント起動 -- Boss event activation
$Event(32052849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 32050800, 32051800, 32052800, 32052805, 32055800, 10000, 32050801, 32052801);
    $InitializeCommonEvent(0, 9005801, 32050800, 32051800, 32052800, 32052805, 32052806, 10000);
    $InitializeCommonEvent(0, 9005811, 32050800, 32051800, 7, 32050801);
    $InitializeCommonEvent(0, 9005822, 32050800, 931000, 32052805, 32052806, 0, 32052802, 0, 0);
});

