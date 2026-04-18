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
    RegisterBonfire(1042380000, 1042381950, 0, 0, 0, 5);
    if (EventFlag(1049308051)) { //if boss selected (deathbird)
        $InitializeCommonEvent(0, 90005860, 1042380800, 0, 1042380800, 0, 1042380400, 0);
        $InitializeCommonEvent(0, 90005870, 1042380800, 904980601, 24);
    }
    $InitializeEvent(0, 1042382350);
    $InitializeCommonEvent(0, 90005460, 1042380210);
    $InitializeCommonEvent(0, 90005461, 1042380210);
    $InitializeCommonEvent(0, 90005462, 1042380210);
    if (EventFlag(1049308050)) { //if boss selected (bell bearing hunter)
        $InitializeCommonEvent(0, 90005760, 1042380850, 1042380850, 1042382360, 1042382718);
        $InitializeCommonEvent(0, 90005770, 1042380701);
        $InitializeCommonEvent(0, 90005860, 1042380850, 0, 1042380850, 0, 1042380410, 0);
        $InitializeCommonEvent(0, 90005870, 1042380850, 903100600, 10);
        $InitializeCommonEvent(0, 90005872, 1042380850, 10, 0);
    }
    $InitializeEvent(0, 1042383700, 1042380710);
    $InitializeCommonEvent(0, 90005704, 1042380710, 3881, 3880, 1042389251, 3);
    $InitializeCommonEvent(0, 90005703, 1042380710, 3881, 3882, 1042389251, 3881, 3880, 3884, -1);
    $InitializeCommonEvent(0, 90005702, 1042380710, 3883, 3880, 3884);
    $InitializeCommonEvent(0, 90005630, 61423800, 1042381500, 127);
    $InitializeCommonEvent(0, 90005560, 1042380600, 1042381600, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1042380710, true);
    $InitializeCommonEvent(0, 90005251, 1042380220, 40, 0, 3011);
    $InitializeCommonEvent(0, 90005261, 1042380240, 1042382240, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380241, 1042382240, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380242, 1042382240, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380243, 1042382240, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380254, 1042382254, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380255, 1042382254, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380256, 1042382254, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380262, 1042382254, 1, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1042380263, 1042382254, 1, 0, -1);
    $InitializeEvent(0, 1042382300);
    $InitializeCommonEvent(0, 90005211, 1042380800, 30000, 20000, 1042382340, 10, 0, 0, 0, 0, 0);
});

// コンストラクタ_LOD2 -- constructor_LOD2
$Event(200, Default, function() {
    $InitializeEvent(0, 1042382290);
});

// エジンバラ前砂塵SFX切り替え -- Edinburgh front dust SFX switching
$Event(1042382290, Restart, function() {
    DisableNetworkSync();
    EndIf(InArea(10000, 1043392396));
    GotoIf(L0, EventFlag(1042372800));
    GotoIf(L2, InArea(10000, 1042402390));
    if (!(InArea(10000, 1042382290)
        || InArea(10000, 1042382291)
        || InArea(10000, 1042382292)
        || InArea(10000, 1042382293)
        || InArea(10000, 1042382294)
        || InArea(10000, 1042382295)
        || InArea(10000, 1042382296)
        || InArea(10000, 1042382297)
        || InArea(10000, 1042382298))) {
L0:
        ClearSpEffect(10000, 4211);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L1:
    SetSpEffect(10000, 4211);
L2:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 王軍死体化 -- royal army corpse
$Event(1042382300, Restart, function() {
    ForceCharacterTreasure(1042385200);
});

// 死の鳥登場イベント -- Death Bird Appearance Event
$Event(1042382340, Restart, function(chrEntityId, areaEntityId, timeSeconds, animationId) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaTime = InArea(10000, areaEntityId) && TimeOfDayInRange(20, 0, 0, 5, 0, 0);
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
    areaTimeChrSp = areaTime && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaTimeChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (areaTimeChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

// トロル飛び降りイベント -- troll jumping event
$Event(1042382350, Restart, function() {
    EndIf(SpecialStandbyEndedFlag(1042380350));
    chrSpAreaDmg = ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && (InArea(10000, 1042382350)
            || (InArea(10000, 1042382351)
                && (HasDamageType(1042380350, 0, DamageType.Unspecified)
                    || CharacterHasStateInfo(1042380350, 436)
                    || CharacterHasStateInfo(1042380350, 2)
                    || CharacterHasStateInfo(1042380350, 5)
                    || CharacterHasStateInfo(1042380350, 6)
                    || CharacterHasStateInfo(1042380350, 260)
                    || CharacterAIState(1042380350, AIStateType.Combat))));
    sp = CharacterHasSpEffect(1042380350, 481)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90110)
        && !CharacterHasSpEffect(1042380350, 90160);
    sp2 = CharacterHasSpEffect(1042380350, 482)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90120)
        && !CharacterHasSpEffect(1042380350, 90160)
        && !CharacterHasSpEffect(1042380350, 90162);
    sp3 = CharacterHasSpEffect(1042380350, 483)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90140)
        && !CharacterHasSpEffect(1042380350, 90160)
        && !CharacterHasSpEffect(1042380350, 90161);
    sp4 = CharacterHasSpEffect(1042380350, 484)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90130)
        && !CharacterHasSpEffect(1042380350, 90161)
        && !CharacterHasSpEffect(1042380350, 90162);
    sp5 = CharacterHasSpEffect(1042380350, 487)
        && !CharacterHasSpEffect(1042380350, 90100)
        && !CharacterHasSpEffect(1042380350, 90150)
        && !CharacterHasSpEffect(1042380350, 90160);
    WaitFor(sp || sp2 || sp3 || sp4 || sp5 || chrSpAreaDmg);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(1042380350, ON);
    ForceAnimationPlayback(1042380350, 20016, false, true, false);
    ChangeCharacterPatrolBehavior(1042380350, 1042383350);
});

// 彫像宝箱のイベント -- statue treasure chest event
$Event(1042382600, Restart, function(eventFlagId, assetEntityId) {
    if (EventFlag(eventFlagId)) {
        ReproduceAssetDestruction(assetEntityId, 1);
        EndEvent();
    }
L0:
    WaitFor(AssetDestroyed(assetEntityId, Equal, 1));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
});

// チュートリアルメッセージ_バディ召喚可能範囲 -- Tutorial message_Buddy summonable range
$Event(1042382650, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(eventFlagId)
            && EventFlag(6580)
            && EventFlag(710550)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 42, 38, 0));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, eventFlagId, 1);
});

// チュートリアルメッセージ_バディ解放 -- Tutorial message_Buddy release
$Event(1042382651, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(60, 42, 38, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Goods, 215000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 240000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 243000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 234000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 244000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 236000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 232000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 212000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 241000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 213000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 233000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)
                || PlayerHasItemIncludingBBox(ItemType.Goods, 203000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, eventFlagId, 1);
});

// NPC326火山館最強の騎士_NPC初期化イベント_初期状態 -- NPC326 Volcano Hall Strongest Knight_NPC initialization event_Initial state
$Event(1042383700, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3880)) {
            SetEventFlagID(1042389253, OFF);
        }
    }
L10:
    if (!EventFlag(1042382719)) {
        SetNetworkconnectedEventFlagID(1042382718, OFF);
        if (TimeOfDayInRange(20, 0, 0, 5, 30, 0)
            && !EventFlag(1042380850)
            && (EventFlag(1042380701)
                || EventFlag(3881)
                || EventFlag(3882)
                || EventFlag(3883)
                || !EventFlag(3885))) {
            SetNetworkconnectedEventFlagID(1042382718, ON);
        }
    }
L19:
    SetNetworkconnectedEventFlagID(1042382719, ON);
    GotoIf(L5, EventFlag(3885));
    GotoIf(L4, EventFlag(3888));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    WaitFor(EventFlag(3885) || EventFlag(3888));
    RestartEvent();
L5:
    GotoIf(L1, EventFlag(3880));
    GotoIf(L2, EventFlag(3881));
    GotoIf(L3, EventFlag(3882));
    GotoIf(L4, EventFlag(3883));
L1:
    GotoIf(S0, !EventFlag(1042382718));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
S0:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 90101, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    GotoIf(S1, !EventFlag(1042382718));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
S1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    GotoIf(S2, !EventFlag(1042382718));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
S2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3885) || EventFlag(3888)));
    RestartEvent();
});
