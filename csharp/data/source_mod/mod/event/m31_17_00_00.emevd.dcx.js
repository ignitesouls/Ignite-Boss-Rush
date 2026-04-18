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
    RegisterBonfire(311700, 31171950, 0, 0, 0, 5);
    $InitializeEvent(0, 31172800);
    $InitializeEvent(0, 31172499);
    $InitializeEvent(0, 31172810);
    $InitializeEvent(0, 31172811);
    $InitializeEvent(0, 31172849);
    $InitializeCommonEvent(0, 90005646, 31170800, 31172840, 31172841, 31171840, 31172840, 31, 17, 0, 0);
    $InitializeEvent(0, 31172500);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 31170200, 31172200, 2, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170201, 30005, 20005, 31172204, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170203, 30001, 20001, 31172204, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170204, 30004, 20004, 31172204, 2, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170212, 30001, 20001, 31172212, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170213, 30004, 20004, 31172212, 2, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170216, 30000, 20000, 31172216, 2, 2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170217, 30001, 20001, 31172216, 2, 1.5, 0, 0, 0, 0);
    $InitializeEvent(0, 31172216, 31170216);
    $InitializeEvent(1, 31172216, 31170217);
    $InitializeCommonEvent(0, 90005211, 31170218, 30001, 20001, 31172218, 5, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170245, 30001, 20001, 31172245, 5, 0, 0, 0, 0, 0);
    $InitializeEvent(7, 31172208, 31170203);
    $InitializeEvent(8, 31172208, 31170204);
    $InitializeCommonEvent(0, 90005211, 31170207, 30003, 20003, 31172207, 1.5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170219, 30003, 20003, 31172219, 1.5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170220, 30003, 20003, 31172220, 1.5, 0, 0, 0, 0, 0);
    $InitializeEvent(3, 31172218, 31170240, 31172240, 4, 0, 3001);
    $InitializeCommonEvent(0, 90005261, 31170250, 31172250, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 31170254, 31172250, 2, 2, 0);
    $InitializeEvent(0, 31172254);
    $InitializeCommonEvent(0, 90005211, 31170251, 30000, 20000, 31172251, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170252, 30000, 20000, 31172252, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170253, 30000, 20000, 31172252, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31170258, 31172258, 2, 1, 0);
    $InitializeCommonEvent(0, 90005211, 31170259, 30000, 20000, 31172258, 2, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31170260, 31172260, 2, 5, 0);
    $InitializeCommonEvent(0, 90005261, 31170261, 31172260, 2, 10, 0);
    $InitializeCommonEvent(0, 90005261, 31170300, 31172300, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31170301, 31172300, 2, 0.5, 0);
    $InitializeCommonEvent(0, 90005261, 31170302, 31172302, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31170303, 31172302, 2, 0.3, 0);
    $InitializeCommonEvent(0, 90005261, 31170308, 31172308, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31170309, 31172309, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31170310, 31172309, 2, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31170340, 30002, 20002, 31172340, 3, 0, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005460, 31170340);
    $InitializeCommonEvent(0, 90005461, 31170340);
    $InitializeCommonEvent(0, 90005462, 31170340);
});

// 吊り篝火無効化 -- Disable hanging bonfire
$Event(31172500, Restart, function() {
    DisableAsset(31171500);
});

// オオカミ_接近時止まらない用特殊効果_XX -- Wolf_Special effects for not stopping when approaching_XX
$Event(31172208, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8081);
    SetSpEffect(chrEntityId, 8082);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, chrEntityId, 4, 1));
    ClearSpEffect(chrEntityId, 8081);
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

// オオカミ_急接近用特殊効果_XX -- Wolf_Special effects for sudden approach_XX
$Event(31172216, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8081);
    SetSpEffect(chrEntityId, 8082);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, chrEntityId, 3, 1));
    ClearSpEffect(chrEntityId, 8081);
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

// オオカミ飛び掛かり奇襲待機テスト_XX -- Wolf pounce surprise attack standby test_XX
$Event(31172218, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    chrSpArea = chrSp && InArea(10000, areaEntityId);
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
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

// コウモリに視界延長の特殊効果付与_XX -- Adds special effect to bats to extend vision_XX
$Event(31172254, Restart, function() {
    SetSpEffect(31170254, 10525);
});

// ボス演出用特殊判定 -- Special judgment for boss production
$Event(31172499, Restart, function() {
    EndIf(EventFlag(31170800));
    areaDmg = InArea(10000, 31172390) || HasDamageType(31170800, 0, DamageType.Unspecified);
    chr = CharacterHasStateInfo(31170800, 436)
        || CharacterHasStateInfo(31170800, 2)
        || CharacterHasStateInfo(31170800, 5)
        || CharacterHasStateInfo(31170800, 6)
        || CharacterHasStateInfo(31170800, 260);
    WaitFor(areaDmg);
    SetEventFlagID(31172499, ON);
});

//guardian golem
$Event(31172800, Restart, function() {
    EndIf(!EventFlag(1049308134)); //end if boss not selected
    EndIf(EventFlag(31170800));
    WaitFor(CharacterHPValue(31170800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31170800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31170800));
    HandleBossDefeatAndDisplayBanner(31170800, TextBannerType.EnemyFelled);
    //boss reward (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304105, 1049304002, -1, -1, 1049304420, 1049304421, 1049304422, 1049304423, 1049304424, -1, 1049304251, 1049304254, 1049304256, 1049304258, 1049300105);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307534);
});

// ボス出現 -- Boss appears
$Event(31172810, Restart, function() {
    if (EventFlag(31170800)) {
        DisableCharacter(31170800);
        DisableCharacterCollision(31170800);
        ForceCharacterDeath(31170800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31170800);
    DisableLockOnPoint(31170800, 220);
    WaitFor(EventFlag(31172805) && EventFlag(31172499));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(31170801, ON);
    }
L2:
    EnableCharacterAI(31170800);
    SetNetworkUpdateRate(31170800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31170800, 0, 904660310);
    EnableLockOnPoint(31170800, 220);
});

// ボス激昂 -- boss rage
$Event(31172811, Restart, function() {
    EndIf(EventFlag(31170800));
    WaitFor(HPRatio(31170800) <= 0.6);
    SetEventFlagID(31172802, ON);
});

// 高路のガーディアン_イベント起動 -- Guardian of Takaji_Event activation
$Event(31172849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31170800, 31171800, 31172800, 31172805, 31175800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31170800, 31171800, 31172800, 31172805, 31172806, 10000);
    $InitializeCommonEvent(0, 9005811, 31170800, 31171800, 5, 0);
    $InitializeCommonEvent(0, 9005822, 31170800, 931000, 31172805, 31172806, 31172499, 31172802, 0, 0);
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(31172900, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(eventFlagId2) && !EventFlag(700690));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, eventFlagId, 1);
    SetEventFlagID(700690, ON);
});

