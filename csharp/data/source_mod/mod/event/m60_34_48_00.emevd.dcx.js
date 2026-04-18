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
    RegisterBonfire(1034480000, 1034481950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76214, 76212, 1034481980, 77220, 2, 78220, 78221, 78222, 78223, 78224, 78225, 78226, 78227, 78228, 78229);
    $InitializeCommonEvent(0, 90005460, 1034480200);
    $InitializeCommonEvent(0, 90005461, 1034480200);
    $InitializeCommonEvent(0, 90005462, 1034480200);
    $InitializeCommonEvent(0, 90005460, 1034480201);
    $InitializeCommonEvent(0, 90005461, 1034480201);
    $InitializeCommonEvent(0, 90005462, 1034480201);
    $InitializeCommonEvent(0, 90005525, 1034480610, 1034481610);
    $InitializeCommonEvent(0, 90005525, 1034480611, 1034481611);
    $InitializeEvent(0, 1034482600, 1034481620, 1034481621, 82022);
    $InitializeEvent(0, 1034482800);
    $InitializeEvent(0, 1034482810);
    $InitializeEvent(0, 1034482849);
    $InitializeEvent(0, 1034482610, 1034481640, 1034482640, 1034480640);
    $InitializeEvent(1, 1034482610, 1034481641, 1034482641, 1034480640);
    $InitializeEvent(2, 1034482610, 1034481642, 1034482642, 1034480640);
    $InitializeEvent(3, 1034482610, 1034481643, 1034482643, 1034480640);
    $InitializeEvent(4, 1034482610, 1034481644, 1034482644, 1034480640);
    $InitializeEvent(5, 1034482610, 1034481645, 1034482645, 1034480640);
    $InitializeEvent(6, 1034482610, 1034481646, 1034482646, 1034480640);
    $InitializeEvent(7, 1034482610, 1034481647, 1034482647, 1034480640);
    $InitializeEvent(8, 1034482610, 1034481648, 1034482648, 1034480640);
    $InitializeEvent(9, 1034482610, 1034481649, 1034482649, 1034480640);
    $InitializeEvent(0, 1034482260, 1034480250, 1034481250, 1034480250, 0, 0, 0, 0, 0, 0, 0);
    $InitializeEvent(1, 1034482260, 1034480251, 1034481251, 1034480251, 0, 0, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 1034482261, 1034480250, 1034481250, 1034480250, 1034485260, 0, 0, 0, 0, 0, 1034481300, 1034482250);
    $InitializeEvent(1, 1034482261, 1034480251, 1034481251, 1034480251, 1034485263, 0, 0, 0, 0, 0, 1034481310, 1034482251);
    $InitializeEvent(0, 1034482262, 1034480250, 0, 1034480250, 0, 1034480260, 30010, 20010, 20, 0, 0, 1034482250);
    $InitializeEvent(1, 1034482262, 1034480250, 0, 1034480250, 0, 1034480261, 30010, 20010, 20, 0, 0, 1034482250);
    $InitializeEvent(3, 1034482262, 1034480250, 0, 1034480250, 0, 1034480262, 30010, 20010, 20, 0, 0, 1034482250);
    $InitializeEvent(4, 1034482262, 1034480251, 0, 1034480251, 0, 1034480263, 30010, 20010, 20, 0, 0, 1034482251);
    $InitializeEvent(5, 1034482262, 1034480251, 0, 1034480251, 0, 1034480264, 30010, 20010, 20, 0, 0, 1034482251);
    $InitializeCommonEvent(0, 90005706, 1034480700, 930023, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1034480700, true);
    $InitializeCommonEvent(0, 90005251, 1034480210, 2, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1034480210, 1034482210, 10, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1034480212, 1034482210, 15, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1034480213, 1034482210, 15, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1034480214, 1034482210, 15, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1034480215, 1034482210, 15, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1034480211, 1034482211, 15, 0, 0);
});

// 気球待機イベント_XX -- Balloon standby event_XX
$Event(1034482260, Restart, function(eventFlagId, chrEntityId, entityId, timeSeconds, timeSeconds2, timeSeconds3, timeSeconds4, timeSeconds5, timeSeconds6, timeSeconds7) {
    EndIf(EventFlag(eventFlagId));
    EndIf(HasDamageType(entityId, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, 0, false, false, false);
    IssueShortWarpRequest(entityId, TargetEntityType.Asset, chrEntityId, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(timeSeconds);
    WaitFixedTimeSeconds(timeSeconds2);
    WaitFixedTimeSeconds(timeSeconds3);
    WaitFixedTimeSeconds(timeSeconds4);
    WaitFixedTimeSeconds(timeSeconds5);
    WaitFixedTimeSeconds(timeSeconds6);
    WaitFixedTimeSeconds(timeSeconds7);
});

// 気球破壊イベント_XX -- Balloon destruction event_XX
$Event(1034482261, Restart, function(eventFlagId, assetEntityId, chrEntityId, chrEntityId2, timeSeconds, timeSeconds2, timeSeconds3, timeSeconds4, timeSeconds5, itemLotId, eventFlagId2) {
    if (EventFlag(eventFlagId)) {
        if (!EventFlag(eventFlagId2)) {
            DisableAsset(assetEntityId);
            DisableCharacter(chrEntityId);
            DisableCharacterCollision(chrEntityId);
            ForceCharacterDeath(chrEntityId, false);
            DisableCharacter(chrEntityId2);
            DisableCharacterCollision(chrEntityId2);
            ForceCharacterDeath(chrEntityId2, false);
            EndEvent();
        }
L1:
        DisableAsset(assetEntityId);
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(assetEntityId, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(chrEntityId, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(chrEntityId, 436)
        || CharacterHasStateInfo(chrEntityId, 2)
        || CharacterHasStateInfo(chrEntityId, 5)
        || CharacterHasStateInfo(chrEntityId, 6)
        || CharacterHasStateInfo(chrEntityId, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(eventFlagId, ON);
    ForceAnimationPlayback(assetEntityId, 1, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(assetEntityId);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(itemLotId);
    }
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
    WaitFixedTimeSeconds(timeSeconds2);
    WaitFixedTimeSeconds(timeSeconds3);
    WaitFixedTimeSeconds(timeSeconds4);
    WaitFixedTimeSeconds(timeSeconds5);
});

// 人形兵解除イベント_XX -- Puppet soldier release event_XX
$Event(1034482262, Restart, function(eventFlagId, timeSeconds, entityId, timeSeconds2, chrEntityId, animationId, animationId2, targetDistance, timeSeconds3, timeSeconds4, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(entityId, 20000, DamageType.Unspecified)
        || HasDamageType(chrEntityId, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(chrEntityId, 436)
        || CharacterHasStateInfo(chrEntityId, 2)
        || CharacterHasStateInfo(chrEntityId, 5)
        || CharacterHasStateInfo(chrEntityId, 6)
        || CharacterHasStateInfo(chrEntityId, 260)
        || EntityInRadiusOfEntity(chrEntityId, 20000, targetDistance, 1);
    WaitFor(
        (CharacterHasSpEffect(eventFlagId, 481)
            && !CharacterHasSpEffect(eventFlagId, 90100)
            && !CharacterHasSpEffect(eventFlagId, 90110)
            && !CharacterHasSpEffect(eventFlagId, 90160))
            || (CharacterHasSpEffect(eventFlagId, 482)
                && !CharacterHasSpEffect(eventFlagId, 90100)
                && !CharacterHasSpEffect(eventFlagId, 90120)
                && !CharacterHasSpEffect(eventFlagId, 90160)
                && !CharacterHasSpEffect(eventFlagId, 90162))
            || (CharacterHasSpEffect(eventFlagId, 483)
                && !CharacterHasSpEffect(eventFlagId, 90100)
                && !CharacterHasSpEffect(eventFlagId, 90140)
                && !CharacterHasSpEffect(eventFlagId, 90160)
                && !CharacterHasSpEffect(eventFlagId, 90161))
            || (CharacterHasSpEffect(eventFlagId, 484)
                && !CharacterHasSpEffect(eventFlagId, 90100)
                && !CharacterHasSpEffect(eventFlagId, 90130)
                && !CharacterHasSpEffect(eventFlagId, 90161)
                && !CharacterHasSpEffect(eventFlagId, 90162))
            || (CharacterHasSpEffect(eventFlagId, 487)
                && !CharacterHasSpEffect(eventFlagId, 90100)
                && !CharacterHasSpEffect(eventFlagId, 90150)
                && !CharacterHasSpEffect(eventFlagId, 90160))
            || (dmgChrArea && chrSp));
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    WaitFixedTimeSeconds(timeSeconds3);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
    WaitFixedTimeSeconds(timeSeconds2);
    WaitFixedTimeSeconds(timeSeconds4);
});

// 地図石碑光SFX切り替え -- Map stone monument light SFX switching
$Event(1034482600, Restart, function(assetEntityId, entityId, eventFlagId) {
    if (!EventFlag(eventFlagId)) {
        CreateAssetfollowingSFX(assetEntityId, 200, 803220);
    }
L0:
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 1, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
});

// ニト剣トラップ_起動_XX -- Nito sword trap_activation_XX
$Event(1034482610, Restart, function(assetEntityId, eventFlagId, chrEntityId) {
    EndIf(EventFlag(eventFlagId));
    EndIf(AssetDestroyed(assetEntityId, Equal, 1));
    CreateBulletOwner(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgArea = HasDamageType(assetEntityId, 20000, DamageType.Unspecified)
        || EntityInRadiusOfEntity(assetEntityId, 20000, 2, 1);
    WaitFor(dmgArea && chrSp);
    RequestAssetDestruction(assetEntityId, 0);
    if (EventFlag(50)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(chrEntityId, assetEntityId, 100, 802402070, 0, 0, 0);
    }
    EndEvent();
});

//royal revenant
$Event(1034482800, Restart, function() {
    EndIf(!EventFlag(1049308157)); //end if boss not selected
    EndIf(EventFlag(1034480800));
    WaitFor(CharacterHPValue(1034480800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1034480800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1034480800));
    HandleBossDefeatAndDisplayBanner(1034480800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304139, 1049304051, 1049304049, -1, 1049304573, 1049304574, 1049304575, 1049304576, 1049304577, -1, 1049304635, 1049304637, 1049304641, 1049304643, 1049300139);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307557);
});

// ボス出現 -- Boss appears
$Event(1034482810, Restart, function() {
    if (EventFlag(1034480800)) {
        DisableCharacter(1034480800);
        DisableCharacterCollision(1034480800);
        ForceCharacterDeath(1034480800, false);
        EnableObjAct(1034481540, -1);
        EndEvent();
    }
L0:
    ForceAnimationPlayback(1034480800, 30000, true, false, false);
    DisableCharacterAI(1034480800);
    WaitFor(EventFlag(1034482805) && InArea(10000, 1034482800));
L2:
    EnableCharacterAI(1034480800);
    SetNetworkUpdateRate(1034480800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(1034480800, 20000, false, false, false);
    DisplayBossHealthBar(Enabled, 1034480800, 0, 904020540);
    DisableObjAct(1034481540, -1);
});

// ボス_ナズグル_イベント起動 -- Boss_Nazgul_Event activation
$Event(1034482849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 1034480800, 1034481800, 1034482800, 1034482805, 1034485800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 1034480800, 1034481800, 1034482800, 1034482805, 1034482806, 10000);
    $InitializeCommonEvent(0, 9005811, 1034480800, 1034481800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 1034480800, 920900, 1034482805, 1034482806, 0, 1034482802, 0, 0);
    $InitializeCommonEvent(0, 9005812, 1034480800, 1034481801, 3, 0, 0);
});

