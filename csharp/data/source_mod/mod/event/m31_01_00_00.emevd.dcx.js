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
    RegisterBonfire(31010000, 31011950, 0, 0, 0, 5);
    $InitializeEvent(0, 31012800);
    $InitializeEvent(0, 31012810);
    $InitializeEvent(0, 31012849);
    $InitializeEvent(0, 31012811);
    $InitializeEvent(0, 31012830);
    $InitializeCommonEvent(0, 90005646, 31010800, 31012840, 31012841, 31011840, 31012840, 31, 1, 0, 0);
    $InitializeEvent(0, 31012500);
    $InitializeCommonEvent(0, 900005610, 31011200, 100, 800, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 31010201, 31012201, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31010202, 31012201, 2, 0, 0);
    $InitializeEvent(0, 31012200, 31010201, 31013201);
    $InitializeEvent(1, 31012200, 31010202, 31013202);
    $InitializeEvent(0, 31012230, 31010201);
    $InitializeEvent(1, 31012230, 31010202);
    $InitializeEvent(0, 31012207, 31010207, 31012207, 2, 7, 0);
    $InitializeEvent(1, 31012207, 31010208, 31012207, 2, 10, 0);
    $InitializeEvent(2, 31012207, 31010209, 31012207, 2, 15, 0);
    $InitializeCommonEvent(0, 90005261, 31010221, 31012221, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31010222, 31012221, 2, 0, 0);
    $InitializeEvent(3, 31012207, 31010300, 31012207, 3, 3, 0);
    $InitializeEvent(0, 31012220, 31010207);
    $InitializeEvent(1, 31012220, 31010208);
    $InitializeEvent(2, 31012220, 31010209);
    $InitializeEvent(3, 31012220, 31010300);
});

// 落とし穴 -- Pitfall
$Event(31012500, Restart, function() {
    if (EventFlag(31010500)) {
        DisableAsset(31011500);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 31012500));
    RequestAssetDestruction(31011500, 1);
    SetEventFlagID(31010500, ON);
});

// 犬ネズミ伏兵登場_XX -- Dog and mouse ambush appears_XX
$Event(31012200, Restart, function(chrEntityId, patrolInformationEntityId) {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(31010207, AIStateType.Combat)
            || CharacterAIState(31010208, AIStateType.Combat)
            || CharacterAIState(31010209, AIStateType.Combat)
            || CharacterAIState(31010300, AIStateType.Combat));
    EnableCharacterAI(chrEntityId);
    SetSpEffect(chrEntityId, 5000);
    ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    SetNetworkconnectedThisEventSlot(ON);
});

// 落とし穴波状攻撃用_思考ロジック有効化_領域／距離判定_XX -- For pitfall wave attack_Thought logic activation_Area/distance judgment_XX
$Event(31012207, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId);
    area2 = area || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
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
    areaChrSp = area2 && chrSp;
    dmg = HasDamageType(chrEntityId, 0, DamageType.Unspecified);
    WaitFor(
        CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || dmg
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (area.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

// 犬ネズミ_接近かダメージ受けて即起動_XX -- Dog and rat_Immediately activated when approaching or receiving damage_XX
$Event(31012220, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
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
    areaChrSp = EntityInRadiusOfEntity(10000, chrEntityId, 1.5, 1) && chrSp;
    WaitFor(
        CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    EnableCharacterAI(chrEntityId);
});

// 犬ネズミ伏兵_突進止まらない用特殊効果_XX -- Dog and Rat Ambush_Special effects for charging and not stopping_XX
$Event(31012230, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8081);
    SetSpEffect(chrEntityId, 8082);
    WaitFor(
        (((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && EntityInRadiusOfEntity(10000, chrEntityId, 7, 1))
            || HasDamageType(31010201, 0, DamageType.Unspecified)
            || HasDamageType(31010202, 0, DamageType.Unspecified));
    ClearSpEffect(chrEntityId, 8081);
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

//runebear
$Event(31012800, Restart, function() {
    EndIf(!EventFlag(1049308137)); //end if boss not selected
    EndIf(EventFlag(31010800));
    WaitFor(CharacterHPValue(31010800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31010800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31010800));
    HandleBossDefeatAndDisplayBanner(31010800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304113, 1049304016, -1, -1, 1049304455, 1049304456, 1049304457, 1049304458, -1, 1049304332, 1049304335, 1049304337, 1049300113);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307537);
});

// ボス出現 -- Boss appears
$Event(31012810, Restart, function() {
    if (EventFlag(31010800)) {
        DisableCharacter(31010800);
        DisableCharacterCollision(31010800);
        ForceCharacterDeath(31010800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31010800);
    ForceAnimationPlayback(31010800, 30000, false, false, false);
    if (!EventFlag(31010801)) {
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 31012801))
                || HasDamageType(31010800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(31010801, ON);
    } else {
L1:
        WaitFor(EventFlag(31012805) && InArea(10000, 31012800));
    }
L2:
    EnableCharacterAI(31010800);
    ForceAnimationPlayback(31010800, 20000, false, false, false);
    SetNetworkUpdateRate(31010800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31010800, 0, 904630310);
});

// ボス激昂 -- boss rage
$Event(31012811, Restart, function() {
    EndIf(EventFlag(31010800));
    WaitFor(HPRatio(31010800) <= 0.6);
    SetEventFlagID(31012802, ON);
});

// ボス部屋バディ石碑_使用可能判定 -- Boss room buddy stone monument_usable determination
$Event(31012830, Restart, function() {
    EndIf(EventFlag(31010801));
    SetSpEffect(31010100, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 31010801);
    SetSpEffect(31010100, 9532);
});

// ルーンベア_イベント起動 -- Runebear_event activation
$Event(31012849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31010800, 31011800, 31012800, 31012805, 31015800, 10000, 31010801, 31012801);
    $InitializeCommonEvent(0, 9005801, 31010800, 31011800, 31012800, 31012805, 31012806, 10000);
    $InitializeCommonEvent(0, 9005811, 31010800, 31011800, 3, 31010801);
    $InitializeCommonEvent(0, 9005822, 31010800, 931000, 31012805, 31012806, 0, 31012802, 0, 0);
});
