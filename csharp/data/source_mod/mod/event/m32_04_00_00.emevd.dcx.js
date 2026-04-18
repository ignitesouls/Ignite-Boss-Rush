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
    RegisterBonfire(32040000, 32041950, 0, 0, 0, 5);
    $InitializeEvent(0, 32042800);
    $InitializeEvent(0, 32042810);
    $InitializeEvent(0, 32042811);
    $InitializeEvent(0, 32042849);
    $InitializeEvent(0, 32042200, 32040206, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32041682, 0, 0, 0);
    $InitializeEvent(0, 32042250, 32040207, 30000, 20000, 16572, 0, 0, 0, 0, 0, 32041207, 0, 0, 0, 32040207);
    $InitializeEvent(0, 32042270, 32040207, 30005, 20005, 32040207, 3, 0, 0, 1, 0, 0);
    $InitializeEvent(2, 32042200, 32040210, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32041681, 0, 0, 0);
    $InitializeEvent(3, 32042200, 32040211, 30004, 20004, 16576, 0, 0, 0, 0, 0, 32041680, 0, 0, 0);
    $InitializeEvent(0, 32042510);
    $InitializeCommonEvent(0, 90005501, 32040510, 32040511, 0, 32041510, 32041511, 32041512, 32040512);
    $InitializeEvent(0, 32042580);
    $InitializeCommonEvent(0, 90005646, 32040800, 32042840, 32042841, 32041840, 32042840, 32, 4, 0, 0);
    $InitializeEvent(0, 32049570, 32040570, 32041570, 32042570, 32042571, 32042572);
    $InitializeEvent(0, 32042569, 32040570, 32041570, 32041571, 32041572, 32041573);
    $InitializeCommonEvent(0, 900005610, 32041690, 100, 800, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 32040519);
    $InitializeCommonEvent(0, 90005250, 32040200, 32042200, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040217, 32042217, 0, -1);
    $InitializeCommonEvent(0, 90005201, 32040221, 30005, 20005, 3, 0, 0, 1, 0, 0);
    $InitializeCommonEvent(0, 90005251, 32040250, 15, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040302, 32042213, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040303, 32042213, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040306, 32042305, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040350, 32042305, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040351, 32042351, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040400, 32042200, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040410, 32042410, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040411, 32042410, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32040412, 32042217, 0, -1);
});

// エレベータイベント起動 -- Elevator event activation
$Event(32042510, Default, function() {
    $InitializeCommonEvent(0, 90005500, 32040510, 32040511, 0, 32041510, 32041511, 32043511, 32041512, 32043512, 32042511, 32042512, 32040512, 32040513, 0);
});

// エレベータ初期フラグ設定 -- Elevator initial flag setting
$Event(32040519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(32040510, ON);
    SetThisEventSlot(ON);
});

// 消費鍵のガーゴイル像A_会話 -- Consumption key gargoyle statue A_Conversation
$Event(32049570, Restart, function(eventFlagId, chrEntityId, eventFlagId2, eventFlagId3, eventFlagId4) {
    EndIf(EventFlag(eventFlagId) || !PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId2, OFF);
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(ActionButtonInArea(9220, chrEntityId));
    DisplayGenericDialogAndSetEventFlags(108000, PromptType.YESNO, NumberofOptions.TwoButtons, chrEntityId, 3, eventFlagId2, eventFlagId3, eventFlagId3);
    if (!EventFlag(eventFlagId2)) {
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    StoreItemAmountHeldInEventValue(ItemType.Goods, 8000, eventFlagId4, 2);
    if (EventValue(eventFlagId4, 6) < 2) {
        WaitFixedTimeFrames(1);
        ForceAnimationPlayback(10000, 50050, false, false, false);
        WaitFixedTimeSeconds(1.5);
        DisplayGenericDialog(308000, PromptType.OKCANCEL, NumberofOptions.NoButtons, chrEntityId, 3);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L2:
    IssueShortWarpRequest(10000, TargetEntityType.Asset, chrEntityId, 191);
    ForceAnimationPlayback(10000, 60810, false, false, false);
    WaitFixedTimeSeconds(1.33);
    ForceAnimationPlayback(10000, 60811, false, false, false);
    WaitFixedTimeSeconds(1.5);
    DisplayGenericDialog(208000, PromptType.OKCANCEL, NumberofOptions.NoButtons, chrEntityId, 3);
    RemoveItemFromPlayer(ItemType.Goods, 8000, 2);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

// 消費鍵のガーゴイル像A_壁制御 -- Gargoyle statue of consumption key A_Wall control
$Event(32042569, Restart, function(eventFlagId, assetEntityId, assetEntityId2, assetEntityId3, assetEntityId4) {
    EndIf(ThisEventSlot());
    if (EventFlag(eventFlagId)) {
        DeleteAssetfollowingSFX(assetEntityId, true);
        DeleteAssetfollowingSFX(assetEntityId4, true);
        EnableAsset(assetEntityId2);
        EnableAsset(assetEntityId3);
        DisableAsset(assetEntityId4);
        EndEvent();
    }
    DeleteAssetfollowingSFX(assetEntityId, true);
    DeleteAssetfollowingSFX(assetEntityId4, true);
    DisableAsset(assetEntityId2);
    DisableAsset(assetEntityId3);
    CreateAssetfollowingSFX(assetEntityId, 200, 806040);
    CreateAssetfollowingSFX(assetEntityId, 201, 806040);
    CreateAssetfollowingSFX(assetEntityId4, 101, 806042);
    WaitFor(EventFlag(eventFlagId));
    EnableAsset(assetEntityId2);
    WaitFixedTimeSeconds(1.33);
    EnableAsset(assetEntityId3);
    WaitFixedTimeSeconds(0.5);
    DeleteAssetfollowingSFX(assetEntityId, true);
    DeleteAssetfollowingSFX(assetEntityId4, false);
    DisableAsset(assetEntityId4);
});

// 梯子登録 -- ladder registration
$Event(32042580, Restart, function() {
    RegisterLadder(32040530, 32040531, 32041530);
    RegisterLadder(32040532, 32040533, 32041532);
});

// 亡者鉱夫_採掘中止_XX -- Dead Miner_Mining Canceled_XX
$Event(32042200, Restart, function(chrEntityId, animationId, animationId2, spEffectId, timeSeconds, value, value2, value3, value4, assetEntityId, assetEntityId2, assetEntityId3, assetEntityId4) {
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
        SetSpEffect(chrEntityId, 16571);
        SetSpEffect(chrEntityId, spEffectId);
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
$Event(32042250, Restart, function(chrEntityId, animationId, animationId2, spEffectId, timeSeconds, value, value2, value3, value4, assetEntityId, assetEntityId2, assetEntityId3, assetEntityId4, eventFlagId) {
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
        SetSpEffect(chrEntityId, 16571);
        SetSpEffect(chrEntityId, spEffectId);
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
$Event(32042270, Restart, function(chrEntityId, animationId, animationId2, eventFlagId, targetDistance, timeSeconds, value, value2, value3, value4) {
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

//stonedigger troll
$Event(32042800, Restart, function() {
    EndIf(!EventFlag(1049308163)); //end if boss not selected
    EndIf(EventFlag(32040800));
    WaitFor(CharacterHPValue(32040800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32040800));
    HandleBossDefeatAndDisplayBanner(32040800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304171, 1049304058, -1, -1, 1049304723, 1049304724, 1049304725, 1049304726, 1049305036, 1049305039, 1049305041, 1049305047, 1049300171);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307563);
});

// ボス出現 -- Boss appears
$Event(32042810, Restart, function() {
    if (EventFlag(32040800)) {
        DisableCharacter(32040800);
        DisableCharacterCollision(32040800);
        ForceCharacterDeath(32040800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32040800);
    ForceAnimationPlayback(32040800, 30000, true, false, false);
    WaitFor(EventFlag(32042805) && InArea(10000, 32042800));
    ForceAnimationPlayback(32040800, 20000, false, false, false);
L2:
    EnableCharacterAI(32040800);
    SetNetworkUpdateRate(32040800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32040800, 0, 904600321);
});

// ボス激昂 -- boss rage
$Event(32042811, Restart, function() {
    EndIf(EventFlag(32040800));
    WaitFor(HPRatio(32040800) <= 0.6);
    SetEventFlagID(32042802, ON);
});

// ボスイベント起動 -- Boss event activation
$Event(32042849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 32040800, 32041800, 32042800, 32042805, 32045800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 32040800, 32041800, 32042800, 32042805, 32042806, 10000);
    $InitializeCommonEvent(0, 9005811, 32040800, 32041800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 32040800, 931000, 32042805, 32042806, 0, 32042802, 0, 0);
});

