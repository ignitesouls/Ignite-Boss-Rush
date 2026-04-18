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
    RegisterBonfire(1051430000, 1051431950, 0, 0, 0, 5);
    if (EventFlag(1049308091)) { //if boss selected (black blade kindred)
        $InitializeCommonEvent(0, 90005870, 1051430800, 904770600, 16);
        $InitializeCommonEvent(0, 90005860, 1051430800, 0, 1051430800, 0, 30425, 0);
        $InitializeCommonEvent(0, 90005872, 1051430800, 16, 0);
    }
    $InitializeEvent(0, 1051432209);
    $InitializeEvent(0, 1051432200, 1051430800, 55, 0, -1);
    $InitializeEvent(0, 1051430700, 1051430700);
    $InitializeCommonEvent(0, 90005703, 1051430700, 3641, 3642, 1051439201, 1051439212, 3640, 3643, -1);
    $InitializeCommonEvent(0, 90005704, 1051430700, 1051439212, 3640, 1051439201, 3);
    $InitializeCommonEvent(0, 90005702, 1051430700, 3643, 3640, 3643);
    $InitializeEvent(0, 1051430702, 1051430700, 0.9);
    $InitializeEvent(0, 1051430703, 1051430700);
});

// ガーゴイル用思考ロジック有効化_距離判定 -- Enabling thinking logic for gargoyle_Distance judgment
$Event(1051432200, Restart, function(chrEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    areaFlagChrSp = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
        && !EventFlag(1051430210)
        && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom));
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaFlagChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaFlagChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

// ワープフラグをリセット -- Reset warp flag
$Event(1051432209, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EntityInRadiusOfEntity(10000, 1051430800, 160, 1));
    SetNetworkconnectedEventFlagID(1051430210, OFF);
});

// NPC202_マリケス_NPC初期化イベント -- NPC202_Marikes_NPC initialization event
$Event(1051430700, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3640)) {
            SetEventFlagID(1051439202, OFF);
            SetEventFlagID(1051439212, OFF);
        }
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && EventValue(1051439230, 5) >= 1
            && (EventFlag(3645) || EventFlag(3647))) {
            BatchSetEventFlags(1051439240, 1051439249, OFF);
            RandomlySetEventFlagInRange(1051439240, 1051439249, ON);
            GotoIf(S0, EventFlag(1051439220));
            GotoIf(S1, !EventFlag(1051439240));
S0:
            SetNetworkconnectedEventFlagID(1051432703, ON);
        }
S1:
L4:
        NoOp();
    }
L10:
    GotoIf(L5, EventFlag(3645));
    GotoIf(L6, EventFlag(3646));
    GotoIf(L7, EventFlag(3647));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    WaitFor(EventFlag(3645) || EventFlag(3646) || EventFlag(3647));
    RestartEvent();
L5:
L7:
    GotoIf(L0, EventFlag(3640));
    GotoIf(L1, EventFlag(3641));
    GotoIf(L3, EventFlag(3643));
L0:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    GotoIf(S2, !EventFlag(1051432704));
    ForceAnimationPlayback(chrEntityId, 930016, false, false, false);
    Goto(L20);
S2:
    GotoIf(S3, !EventFlag(1051432703));
    ForceAnimationPlayback(chrEntityId, 930015, false, false, false);
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1051432700, 900, chrEntityId);
    Goto(L20);
S3:
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    Goto(L20);
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20034, false, false, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3645) || EventFlag(3647)));
    RestartEvent();
L6:
    GotoIf(L0, EventFlag(3640));
    GotoIf(L1, EventFlag(3641));
    GotoIf(L2, EventFlag(3642));
    GotoIf(L3, EventFlag(3643));
L0:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    Goto(L20);
L1:
L2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20034, false, false, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3646));
    RestartEvent();
});

// NPC敵対化処理_マリケス個別 -- NPC hostile processing_Mariquez individual
$Event(1051430701, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5, eventFlagId6, value) {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(!EventFlag(eventFlagId4) && EventFlag(eventFlagId5));
    dmg = HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
        || HasDamageType(chrEntityId, 40000, DamageType.Unspecified);
    if (HPRatio(chrEntityId) >= 1) {
        hpDmg &= HPRatio(chrEntityId) < 0.65;
    } else if (HPRatio(chrEntityId) >= 0.9) {
        hpDmg &= HPRatio(chrEntityId) < 0.55;
    } else if (HPRatio(chrEntityId) >= 0.8) {
        hpDmg &= HPRatio(chrEntityId) < 0.45;
    } else if (HPRatio(chrEntityId) >= 0.7) {
        hpDmg &= HPRatio(chrEntityId) < 0.35;
    } else if (HPRatio(chrEntityId) >= 0.7) {
        hpDmg &= HPRatio(chrEntityId) < 0.25;
    } else {
        hpDmg &= HPRatio(chrEntityId) < 0.15;
        Goto(L10);
    }
L10:
    hpDmg &= dmg;
    hpFlagDmg = HPRatio(chrEntityId) > 0 && (EventFlag(eventFlagId3) || hpDmg);
    flag = EventFlag(eventFlagId4) || !EventFlag(eventFlagId5);
    WaitFor(flag || hpFlagDmg);
    RestartIf(flag.Passed);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    ForceAnimationPlayback(chrEntityId, 20034, false, false, false);
    if (Signed(1) != value) {
        BatchSetNetworkconnectedEventFlags(eventFlagId5, eventFlagId6, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    } else {
L0:
        BatchSetNetworkconnectedEventFlags(eventFlagId5, eventFlagId6, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L9:
    SaveRequest();
    RestartEvent();
});

// NPC202_マリケス_正気に戻る -- NPC202_Marikes_Return to sanity
$Event(1051430702, Restart, function(chrEntityId, targetHPRatio) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    WaitFor(EventFlag(3642) && HPRatio(chrEntityId) <= targetHPRatio);
    ForceAnimationPlayback(chrEntityId, 20039, false, false, false);
    WaitFixedTimeFrames(1);
    RestartIf(!CharacterHasSpEffect(chrEntityId, 9663));
    BatchSetNetworkconnectedEventFlags(3640, 3643, OFF);
    SetNetworkconnectedEventFlagID(3640, ON);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    SetEventFlagID(1051439212, ON);
    SaveRequest();
    WaitFixedTimeSeconds(8);
    SetEventFlagID(1051439212, OFF);
    SaveRequest();
});

// NPC202_マリケス_死の根を全て渡したら消える -- NPC202_Marikes_Disappears after handing over all the roots of death
$Event(1051430703, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(3647) && EventValue(1051439235, 5) >= 9);
    SetEventFlagID(1051439212, ON);
    EnableCharacterInvincibility(chrEntityId);
});

// NPC202_マリケス_敵対状態リセット -- NPC202_Marikes_hostile status reset
$Event(1051433705, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3641));
    BatchSetNetworkconnectedEventFlags(3640, 3644, OFF);
    SetNetworkconnectedEventFlagID(3640, ON);
    SaveRequest();
    SetNetworkconnectedEventFlagID(1051439201, OFF);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    EndEvent();
});

// NPC202_マリケス_混ぜ物入りを渡していたら免罪不可 -- NPC202_Marikes_If you give adulterated food, you cannot be exonerated.
$Event(1051433706, Restart, function(eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(1051439224));
    BatchSetNetworkconnectedEventFlags(3640, 3644, OFF);
    SetNetworkconnectedEventFlagID(3642, ON);
    SaveRequest();
    SetEventFlagID(eventFlagId, ON);
    EndEvent();
});

// NPC202_マリケス_眠りチェック -- NPC202_Marikes_Sleep check
$Event(1051433707, Restart, function(eventFlagId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(3645));
    SetEventFlagID(eventFlagId2, OFF);
    EndIf(!(EventFlag(1051439225) && !EventFlag(1051439227)));
    SetEventFlagID(eventFlagId2, ON);
    SetEventFlagID(eventFlagId, ON);
    EndEvent();
});

// NPC202_マリケス_アクションボタン表記切り替え -- NPC202_Marikes_Action button notation switching
$Event(1051433708, Restart, function(itemId, itemId2, itemId3, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(3643));
    EndIf(!EventFlag(3645));
    GotoIf(L1, EventFlag(1051439226));
    GotoIf(L1, EventFlag(1051439219));
    GotoIf(L1, 
        !PlayerHasItem(ItemType.Goods, itemId)
            && !PlayerHasItem(ItemType.Goods, itemId2)
            && !PlayerHasItem(ItemType.Goods, itemId3));
    GotoIf(L2, 
        PlayerHasItem(ItemType.Goods, itemId)
            && !PlayerHasItem(ItemType.Goods, itemId2)
            && !PlayerHasItem(ItemType.Goods, itemId3));
    GotoIf(L3, 
        !PlayerHasItem(ItemType.Goods, itemId)
            && PlayerHasItem(ItemType.Goods, itemId2)
            && !PlayerHasItem(ItemType.Goods, itemId3));
    GotoIf(L4, 
        !PlayerHasItem(ItemType.Goods, itemId)
            && !PlayerHasItem(ItemType.Goods, itemId2)
            && PlayerHasItem(ItemType.Goods, itemId3));
    Goto(L5);
L1:
    BatchSetEventFlags(eventFlagId, eventFlagId5, OFF);
    SetEventFlagID(eventFlagId, ON);
    WaitFor(
        (PlayerHasItem(ItemType.Goods, itemId)
            || PlayerHasItem(ItemType.Goods, itemId2)
            || PlayerHasItem(ItemType.Goods, itemId3))
            && !EventFlag(1051439226)
            && !EventFlag(1051439219));
    RestartEvent();
L2:
    BatchSetEventFlags(eventFlagId, eventFlagId5, OFF);
    SetEventFlagID(eventFlagId2, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || !PlayerHasItem(ItemType.Goods, itemId)
            || PlayerHasItem(ItemType.Goods, itemId2)
            || PlayerHasItem(ItemType.Goods, itemId3));
    RestartEvent();
L3:
    BatchSetEventFlags(eventFlagId, eventFlagId5, OFF);
    SetEventFlagID(eventFlagId3, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || PlayerHasItem(ItemType.Goods, itemId)
            || !PlayerHasItem(ItemType.Goods, itemId2)
            || PlayerHasItem(ItemType.Goods, itemId3));
    RestartEvent();
L4:
    BatchSetEventFlags(eventFlagId, eventFlagId5, OFF);
    SetEventFlagID(eventFlagId4, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || PlayerHasItem(ItemType.Goods, itemId)
            || PlayerHasItem(ItemType.Goods, itemId2)
            || !PlayerHasItem(ItemType.Goods, itemId3));
    RestartEvent();
L5:
    BatchSetEventFlags(eventFlagId, eventFlagId5, OFF);
    SetEventFlagID(eventFlagId5, ON);
    WaitFor(
        EventFlag(1051439226)
            || EventFlag(1051439219)
            || (!PlayerHasItem(ItemType.Goods, itemId) && !PlayerHasItem(ItemType.Goods, itemId2))
            || (!PlayerHasItem(ItemType.Goods, itemId) && !PlayerHasItem(ItemType.Goods, itemId3))
            || (!PlayerHasItem(ItemType.Goods, itemId2) && !PlayerHasItem(ItemType.Goods, itemId3)));
    RestartEvent();
});
