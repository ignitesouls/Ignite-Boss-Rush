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
    RegisterBonfire(1042360000, 1042361950, 0, 0, 0, 5);
    RegisterBonfire(1042360001, 1042361951, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 71001, 76100, 1042361980, 77100, 1, 78100, 78101, 78102, 78103, 78104, 78105, 78106, 78107, 78108, 78109);
    $InitializeCommonEvent(0, 90005100, 71001, 76101, 1042361981, 77100, 0, 78100, 78101, 78102, 78103, 78104, 78105, 78106, 78107, 78108, 78109);
    if (EventFlag(1049308054)) { //if boss selected (tree sentinel)
        $InitializeCommonEvent(0, 90005870, 1042360800, 903251600, 12);
        $InitializeCommonEvent(0, 90005860, 1042360800, 0, 1042360800, 0, 30100, 0);
        $InitializeCommonEvent(0, 90005872, 1042360800, 12, 0);
    }
    $InitializeCommonEvent(0, 90005683, 62103, 1042361684, 210, 78190, 78190);
    $InitializeEvent(0, 1042363700, 1042360700, 1042361701);
    $InitializeCommonEvent(0, 90005704, 1042360700, 3181, 3180, 1042369201, 3);
    $InitializeCommonEvent(0, 90005703, 1042360700, 3181, 3182, 1042369201, 3181, 3180, 3183, -1);
    $InitializeCommonEvent(0, 90005702, 1042360700, 3183, 3180, 3183);
    $InitializeCommonEvent(0, 1042363701);
    $InitializeCommonEvent(0, 1042363702);
    $InitializeCommonEvent(0, 1042363703);
    $InitializeEvent(0, 1042360710, 1042360730, 1042361711);
    $InitializeCommonEvent(0, 90005704, 1042360730, 1042369401, 3746, 1042369401, 3);
    $InitializeCommonEvent(0, 90005709, 1042360730, 905, 603000);
    $InitializeCommonEvent(0, 90005709, 1042360730, 960, 603050);
    $InitializeEvent(0, 1042360711, 1042360750);
    $InitializeEvent(0, 1042360712, 1042360730, 1042361711);
    $InitializeEvent(0, 1042360713, 1042360730, 1042361711, 1042360750);
    $InitializeCommonEvent(0, 90005750, 1042361710, 4350, 103900, 400390, 400390, 1042369413, 0);
    $InitializeCommonEvent(0, 90005708, 1042360730, 3746, 0);
    $InitializeEvent(0, 1042363720, 1042360710, 1042360711);
    $InitializeCommonEvent(0, 90005704, 1042360710, 4701, 4700, 1042369301, 3);
    $InitializeCommonEvent(0, 90005703, 1042360710, 4701, 4702, 1042369301, 4701, 4700, 4704, -1);
    $InitializeCommonEvent(0, 90005702, 1042360710, 4703, 4700, 4704);
    $InitializeCommonEvent(0, 90005704, 1042360711, 4701, 4700, 1042369327, 3);
    $InitializeCommonEvent(0, 90005703, 1042360711, 4701, 4702, 1042369327, 4701, 4700, 4704, 0);
    $InitializeCommonEvent(0, 90005728, 1042360711, 1042362715, 1042362716);
    $InitializeCommonEvent(0, 90005727, 4701, 1042360710, 1042360711, 4700, 4703);
    $InitializeEvent(0, 1042360724, 1042360710, 1042360711);
    $InitializeEvent(0, 1042363730, 1042360720);
    $InitializeEvent(0, 1042363740, 78100, 1042360951, 1042369450);
    $InitializeEvent(0, 1042363741, 78101, 1042360950, 1042369452);
    $InitializeEvent(0, 1042363742, 1042360951, 1042369450);
    $InitializeEvent(0, 1042363743, 1042360951, 1042369451);
    $InitializeEvent(0, 1042363744, 1042360950, 1042369452);
    $InitializeEvent(0, 1042363745, 1042360950, 1042369453);
    $InitializeEvent(0, 1042363746, 1042360951, 1042369451);
    $InitializeEvent(0, 1042363747, 1042360950, 1042369453);
    $InitializeEvent(0, 1042360750, 1042360740);
    $InitializeEvent(0, 1042362215, 1042360215, 1042362215);
    $InitializeEvent(1, 1042362215, 1042360216, 1042362215);
    $InitializeEvent(2, 1042362215, 1042360217, 1042362217);
    $InitializeEvent(0, 1042362650, 1500, 710500, 69070);
    $InitializeEvent(0, 1042362652, 1520, 710520, 1770, 710770, 69090, 69370);
    $InitializeEvent(0, 1042362656, 1740, 710740, 69310);
    $InitializeEvent(0, 1042362660, 1730, 710730, 69300);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1042360700, true);
    SetCharacterBackreadState(1042360710, true);
    SetCharacterBackreadState(1042360711, true);
    SetCharacterBackreadState(1042360730, true);
    $InitializeCommonEvent(0, 90005300, 1042360200, 1042365200, 0, 0, 0);
});

// 最初の教会前_コウモリ篝火点火後は無効化_XX -- In front of the first church_Disabled after lighting the bat bonfire_XX
$Event(1042362200, Restart, function(chrEntityId) {
    EndIf(!EventFlag(1042360000));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
});

// コウモリ_視界拡大 -- Bat_Visibility expansion
$Event(1042362215, Restart, function(chrEntityId, areaEntityId) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    EndIf(CharacterDead(chrEntityId));
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp3 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp4 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp5 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    dmgAreaChr = HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
        || InArea(10000, areaEntityId)
        || CharacterHasStateInfo(chrEntityId, 436)
        || CharacterHasStateInfo(chrEntityId, 2)
        || CharacterHasStateInfo(chrEntityId, 5)
        || CharacterHasStateInfo(chrEntityId, 6)
        || CharacterHasStateInfo(chrEntityId, 260);
    WaitFor(sp || sp2 || sp3 || sp4 || sp5 || chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    SetSpEffect(chrEntityId, 8080);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(chrEntityId, 8080);
});

// チュートリアルメッセージ_地図 -- Tutorial message_map
$Event(1042362650, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 1042362657)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    EndIf(EventFlag(eventFlagId2));
    DirectlyGivePlayerItem(ItemType.Goods, 9107, eventFlagId, 1);
    SetEventFlagID(eventFlagId2, ON);
});

// チュートリアルメッセージ_騎乗 -- Tutorial message_Riding
$Event(1042362652, Restart, function(tutorialParamId, eventFlagId, tutorialParamId2, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 42, 36, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(eventFlagId, ON);
    SetEventFlagID(eventFlagId2, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId2, true, true);
    EndIf(EventFlag(eventFlagId3));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, eventFlagId, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, eventFlagId2, 1);
    SetEventFlagID(eventFlagId3, ON);
    SetEventFlagID(eventFlagId4, ON);
});

// チュートリアルメッセージ_鍛冶場台 -- Tutorial message_Blacksmith stand
$Event(1042362656, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        PlayerIsInOwnWorld()
            && InArea(10000, 1042362656)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    EndIf(EventFlag(eventFlagId2));
    DirectlyGivePlayerItem(ItemType.Goods, 9131, eventFlagId, 1);
    SetEventFlagID(eventFlagId2, ON);
});

// チュートリアルメッセージ_地図ワープ -- Tutorial message_Map warp
$Event(1042362660, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(76100)
            && !EventFlag(eventFlagId)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(3);
    ShowTutorialPopup(tutorialParamId, true, true);
    EndIf(EventFlag(eventFlagId2));
    DirectlyGivePlayerItem(ItemType.Goods, 9130, eventFlagId, 1);
    SetEventFlagID(eventFlagId2, ON);
});

// 英雄の墓_メッセージ表示 -- Hero's Tomb_Message Display
$Event(1042360684, Default, function(entityId, eventFlagId, eventFlagId2, eventFlagId3) {
    DisableNetworkSync();
    WaitFor(ActionButtonInArea(9260, entityId));
    DisplayGenericDialog(4210, PromptType.OKCANCEL, NumberofOptions.NoButtons, entityId, 3);
    if (!EventFlag(eventFlagId)) {
        if (!EventFlag(eventFlagId2)) {
            if (!EventFlag(eventFlagId3)) {
                SetEventFlagID(eventFlagId, ON);
                SetEventFlagID(eventFlagId2, ON);
            }
        }
    }
L0:
    WaitFixedTimeSeconds(1);
    EndEvent();
});

// 英雄の墓_指示像レーザー -- Hero's Tomb_Instruction Statue Laser
$Event(1042360690, Restart, function(assetEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId3)) {
        DeleteAssetfollowingSFX(assetEntityId, true);
        SetEventFlagID(eventFlagId, OFF);
        SetEventFlagID(eventFlagId2, OFF);
        EndEvent();
    }
L0:
    if (!EventFlag(eventFlagId4)) {
        WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
        CreateAssetfollowingSFX(assetEntityId, 210, 800530);
        SetEventFlagID(eventFlagId4, ON);
    }
L1:
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// NPC301戦場医師_NPC初期化イベント -- NPC301 Battlefield Doctor_NPC initialization event
$Event(1042363700, Restart, function(chrEntityId, assetEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3180)) {
            SetEventFlagID(1042369205, OFF);
        }
    }
L10:
    if (!EventFlag(3185)) {
        if (!EventFlag(3187)) {
            if (!EventFlag(3191)) {
                DisableCharacter(chrEntityId);
                SetCharacterBackreadState(chrEntityId, true);
                DisableAsset(assetEntityId);
                WaitFor(EventFlag(3185) || EventFlag(3187) || EventFlag(3191));
                RestartEvent();
            }
        }
    }
L5:
    EnableAsset(assetEntityId);
    GotoIf(L1, EventFlag(3180));
    GotoIf(L2, EventFlag(3181));
    GotoIf(L3, EventFlag(3182));
    GotoIf(L4, EventFlag(3183));
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 90100, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableAsset(assetEntityId);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3185) || EventFlag(3187) || EventFlag(3191)));
    RestartEvent();
});

// NPC301_戦場医師_湖に移動した血文字出現 -- NPC301_Battlefield Doctor_Blood letters appear in the lake
$Event(1042363701, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(1042369249, OFF);
    EndIf(!(EventFlag(3188) || EventFlag(3189) || EventFlag(3190)));
    EndIf(!EventFlag(3180));
    SetEventFlagID(1042369249, ON);
    EndEvent();
});

// NPC301_戦場医師_大ルーンを得た後_リアルタイム遷移 -- NPC301_Battlefield Doctor_After obtaining the Great Rune_Real-time transition
$Event(1042363702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3185) && !EventFlag(3187));
    EndIf(!EventFlag(181));
    SetEventFlagID(3198, ON);
    EndEvent();
});

// NPC301_戦場医師_NPC血文字でジェスチャー入手 -- NPC301_Battlefield Doctor_Get gesture with NPC blood letters
$Event(1042363703, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(60826));
    WaitFor(EventFlag(400035));
    SetEventFlagID(60826, ON);
    AwardGesture(60);
    EndEvent();
});

// NPC106_ラニ_NPC初期化イベント -- NPC106_Rani_NPC initialization event
$Event(1042360710, Restart, function(chrEntityId, assetEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
    }
L19:
    if (!EventFlag(3746)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(3746));
        RestartEvent();
    }
L6:
    if (PlayerIsInOwnWorld()) {
        SetCurrentTime(22, 30, 0, false, false, false, 0, 0, 0);
        CreateAssetfollowingSFX(assetEntityId, 100, 800227);
        SetCameraAngle(0, -115.86);
    }
L19:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTalkRange(chrEntityId, 30);
    EnableCharacterImmortality(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 930000, false, false, false);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3746));
    RestartEvent();
});

// NPC106_ラニ_教会出現監視イベント -- NPC106_Rani_Church appearance monitoring event
$Event(1042360711, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    if (EventFlag(4680)
        && !EventFlag(9000)
        && EntityInRadiusOfEntity(1042361950, 20000, 5, 1)
        && CharacterHPValue(chrEntityId) > 0) {
        SetEventFlagID(1042369411, ON);
        SetEventFlagID(3758, ON);
        EndEvent();
    }
L0:
    ForceCharacterDeath(chrEntityId, false);
    EndEvent();
});

// NPC106_ラニ_教会から消える -- NPC106_Rani_Disappears from the church
$Event(1042360712, Restart, function(entityId, assetEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042369410));
    flag = EventFlag(1042369401);
    WaitFor(EventFlag(1042362732) || flag);
    SetEventFlagID(1042369415, OFF);
    if (flag.Passed) {
        SetEventFlagID(1042369410, ON);
    }
L0:
    WaitFixedTimeFrames(1);
    WaitFor(!EventFlag(1042362733));
    SetEventFlagID(1042362734, ON);
    ForceAnimationPlayback(entityId, 20013, false, false, false);
    SetEventFlagID(4718, ON);
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(1042369413, ON);
    SetEventFlagID(3758, ON);
});

// NPC106_ラニ_出現したが帰る -- NPC106_Rani_appears but returns
$Event(1042360713, Restart, function(entityId, assetEntityId, chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042369410));
    WaitFor(EventFlag(3746) && TimeOfDayInRange(20, 0, 0, 5, 30, 0));
    flagAreaTimeChr = !EventFlag(1042362733)
        && (!InArea(20000, 1042362710)
            || TimeOfDayInRange(5, 30, 0, 20, 0, 0)
            || PlayerTargeted(1, 31, AIStateType.Combat));
    flag = EventFlag(1042369410);
    WaitFor(flagAreaTimeChr || flag);
    EndIf(flag.Passed);
    SetEventFlagID(1042369415, OFF);
    ForceAnimationPlayback(entityId, 20013, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
    SetEventFlagID(4718, ON);
    ForceCharacterDeath(chrEntityId, false);
    WaitFixedTimeSeconds(6);
    SetEventFlagID(3758, ON);
});

// NPC800_赤目商人カーレ_NPC初期化イベント_初期状態 -- NPC800_Red-Eyed Merchant Kaare_NPC initialization event_Initial state
$Event(1042363720, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4700)) {
            SetEventFlagID(1042369303, OFF);
        }
    }
L10:
    GotoIf(L5, EventFlag(4705));
    GotoIf(L17, EventFlag(4717));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    WaitFor(EventFlag(4705));
    RestartEvent();
L5:
    GotoIf(L1, EventFlag(4700));
    GotoIf(L2, EventFlag(4701));
    GotoIf(L3, EventFlag(4702));
    GotoIf(L4, EventFlag(4703));
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    SetCharacterTeamType(chrEntityId2, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 930003, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    Goto(L20);
L3:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(4705));
    RestartEvent();
L17:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId2, false);
    EnableCharacter(chrEntityId2);
    SetCharacterTeamType(chrEntityId, TeamType.Disabled);
    SetCharacterTeamType(chrEntityId2, TeamType.Disabled);
    ForceAnimationPlayback(chrEntityId, 930011, false, false, false);
    ForceAnimationPlayback(chrEntityId2, 930017, false, false, false);
    WaitFor(!(EventFlag(4705) || EventFlag(4717)));
    RestartEvent();
});

// NPC800_赤目商人カーレ_ロバ敵対時アニメ再生 -- NPC800_Red-Eyed Merchant Kare_Donkey Anime playback when hostile
$Event(1042363723, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(4700));
    WaitFor(
        EventFlag(4701)
            && (CharacterHasSpEffect(chrEntityId, 9603) || CharacterHasSpEffect(chrEntityId, 9604)));
    GotoIf(L3, CharacterHasSpEffect(chrEntityId, 9603));
    GotoIf(L4, CharacterHasSpEffect(chrEntityId, 9604));
L3:
    ForceAnimationPlayback(chrEntityId, 20009, false, false, false);
    EndEvent();
L4:
    ForceAnimationPlayback(chrEntityId, 20014, false, false, false);
    EndEvent();
});

// NPC800_赤目商人カーレ_ラニがいなくなったので起きる -- NPC800_Red-Eyed Merchant Kaare_Wake up because Rani is gone
$Event(1042360724, Default, function(chrEntityId, chrEntityId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042369410));
    WaitFor(EventFlag(4700) && EventFlag(4717));
    WaitFor(EventFlag(4705));
    ForceAnimationPlayback(chrEntityId, 20019, false, false, false);
    ForceAnimationPlayback(chrEntityId2, 20017, false, false, false);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    SetCharacterTeamType(chrEntityId2, TeamType.FriendlyNPC);
});

// NPC700話す死体①_NPC初期化イベント -- NPC700 talking corpse①_NPC initialization event
$Event(1042363730, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    WaitFixedTimeFrames(1);
    ForceAnimationPlayback(chrEntityId, 30021, false, false, false);
    WaitFixedTimeFrames(30);
    ForceAnimationPlayback(chrEntityId, 30021, false, false, false);
});

// NPC100娘マリカ_導き会話許可_スタート地点 -- NPC100 daughter Marika_Guide conversation permission_Starting point
$Event(1042363740, Restart, function(eventFlagId, entityId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(
        EventFlag(eventFlagId)
            && EntityInRadiusOfEntity(20000, entityId, 5, 1)
            && !EventFlag(eventFlagId2));
    SetEventFlagID(1042372701, ON);
    WaitFor(
        !EventFlag(eventFlagId)
            || !EntityInRadiusOfEntity(20000, entityId, 5, 1)
            || EventFlag(eventFlagId2));
    SetEventFlagID(1042372701, OFF);
    RestartEvent();
});

// NPC100娘マリカ_導き会話許可_最初の教会 -- NPC100 daughter Marika_Guided conversation permission_First church
$Event(1042363741, Restart, function(eventFlagId, entityId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(
        EventFlag(eventFlagId)
            && EntityInRadiusOfEntity(20000, entityId, 5, 1)
            && !EventFlag(eventFlagId2));
    SetEventFlagID(1042372701, ON);
    WaitFor(
        !EventFlag(eventFlagId)
            || !EntityInRadiusOfEntity(20000, entityId, 5, 1)
            || EventFlag(eventFlagId2));
    SetEventFlagID(1042372701, OFF);
    RestartEvent();
});

// NPC100娘マリカ_契約会話再生監視_スタート地点 -- NPC100 daughter Marika_Contract conversation playback monitoring_Start point
$Event(1042363742, Restart, function(entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4680));
    WaitFor(EventFlag(4680));
    if (EntityInRadiusOfEntity(20000, entityId, 5, 1)) {
        SetEventFlagID(eventFlagId, ON);
    }
    EndEvent();
});

// NPC100娘マリカ_導き会話再生監視_スタート地点 -- NPC100 daughter Marika_Guide conversation playback monitoring_Start point
$Event(1042363743, Restart, function(entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(1042379203));
    if (EntityInRadiusOfEntity(20000, entityId, 5, 1)) {
        SetEventFlagID(eventFlagId, ON);
    }
    EndEvent();
});

// NPC100娘マリカ_契約会話再生監視_最初の教会 -- NPC100 daughter Marika_Contract conversation playback monitoring_First church
$Event(1042363744, Restart, function(entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(4680));
    WaitFor(EventFlag(4680));
    if (EntityInRadiusOfEntity(20000, entityId, 5, 1)) {
        SetEventFlagID(eventFlagId, ON);
    }
    EndEvent();
});

// NPC100娘マリカ_導き会話再生監視_最初の教会 -- NPC100 daughter Marika_Guide conversation playback monitoring_First church
$Event(1042363745, Restart, function(entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379203));
    WaitFor(EventFlag(1042379203));
    if (EntityInRadiusOfEntity(20000, entityId, 5, 1)) {
        SetEventFlagID(eventFlagId, ON);
    }
    EndEvent();
});

// NPC100娘マリカ_目的会話再生禁止_スタート地点 -- NPC100 Daughter Marika_Objective conversation playback prohibited_Start point
$Event(1042363746, Restart, function(entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379207));
    WaitFor(EntityInRadiusOfEntity(20000, entityId, 5, 1) && EventFlag(eventFlagId));
    SetEventFlagID(1042372702, ON);
    WaitFor(!EntityInRadiusOfEntity(20000, entityId, 5, 1));
    SetEventFlagID(1042372702, OFF);
    RestartEvent();
});

// NPC100娘マリカ_目的会話再生禁止_最初の教会 -- NPC100 Daughter Marika_Objective conversation playback prohibited_First Church
$Event(1042363747, Restart, function(entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1042379207));
    WaitFor(EntityInRadiusOfEntity(20000, entityId, 5, 1) && EventFlag(eventFlagId));
    SetEventFlagID(1042372702, ON);
    WaitFor(!EntityInRadiusOfEntity(20000, entityId, 5, 1));
    SetEventFlagID(1042372702, OFF);
    RestartEvent();
});

// NPC602_下位鍛冶台_重力アタリ無効 -- NPC602_lower blacksmith table_gravity attack disabled
$Event(1042360750, Restart, function(chrEntityId) {
    DisableCharacterGravity(chrEntityId);
    DisableCharacterCollision(chrEntityId);
});
