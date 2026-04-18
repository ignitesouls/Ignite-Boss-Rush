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
    RegisterBonfire(1044350000, 1044351950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76161, 76106, 1044351980, 77110, 0, 78110, 78111, 78112, 78113, 78114, 78115, 78116, 78117, 78118, 78119);
    if (EventFlag(1049308097)) { //if boss selected (darriwil)
        $InitializeCommonEvent(0, 90005880, 1044350800, 1044350805, 1044352800, 1044350800, 30130, 60, 44, 35, 0, 1044352805);
        $InitializeCommonEvent(0, 90005881, 1044350800, 1044350805, 1044352801, 1044352802, 20300, 1044351805, 60, 44, 35, 0, 1044352805);
        $InitializeCommonEvent(0, 90005882, 1044350800, 1044350805, 1044352800, 1044350800, 1044352806, 1044355810, 1044351800, 1044350810, 1044352810, 904290520, -1, 20021);
        $InitializeCommonEvent(0, 90005883, 1044350800, 1044350805, 1044351805);
        $InitializeCommonEvent(0, 90005885, 1044350800, 0, 1044352806, 1044352807, 0, 1);
    } 
    $InitializeCommonEvent(0, 90005390, 1035430270, 1035432270, 1035430270, 1035430280, 1, 1044350100);
    $InitializeCommonEvent(0, 90005391, 1035430270, 1035432270, 1035430270, 1035430280, 1);
    $InitializeCommonEvent(0, 90005701, 1044350720, 3981, 3982, 1044359301, 3);
    $InitializeCommonEvent(0, 90005700, 1044350720, 3981, 3982, 1044359301, 0.65, 3980, 3983, -1);
    $InitializeCommonEvent(0, 90005702, 1044350720, 3983, 3980, 3983);
    $InitializeEvent(0, 1044353720, 1044350720);
    $InitializeEvent(0, 1044352740, 1044350710, 1044350705);
    $InitializeCommonEvent(0, 90005780, 1044350800, 1044352160, 1044352161, 1044350702, SummonSignType.NPCWhiteSign, 1044352720, 1044349257, false, 0);
    $InitializeCommonEvent(0, 90005781, 1044350800, 1044352160, 1044352161, 1044350702);
    $InitializeCommonEvent(0, 90005783, 1044350800, 1044352160, 1044352161, 1044350702, 1044352720, 0, 0);
    $InitializeEvent(0, 1044352600, 1044351600, 1044352600);
    $InitializeEvent(0, 1044352650, 1520, 710520, 1770, 710770, 69090, 69370);
    $InitializeEvent(0, 1044350710, 1044350700, 1044350701);
    $InitializeCommonEvent(0, 90005704, 1044350700, 3601, 3600, 1044359251, 3);
    $InitializeCommonEvent(0, 90005703, 1044350700, 3601, 3602, 1044359251, 3603, 3600, 3603, -1);
    $InitializeCommonEvent(0, 90005702, 1044350700, 3603, 3600, 3604);
    $InitializeEvent(0, 1044350715, 1044350700, 1044350701);
    $InitializeCommonEvent(0, 90005730, 1044359257, 20, 1044359265, 3615, 1044359255, 1044359256);
    $InitializeCommonEvent(0, 90005731, 1044359265, 1044350701, 30, 50);
    $InitializeEvent(0, 1044350711);
    $InitializeEvent(0, 1044350713);
    $InitializeEvent(0, 1044350712, 1044350703);
    $InitializeEvent(0, 1044350791); //blaidd summon sign handling
});

//enable blaidd summon only after entering evergaol
$Event(1044350791, Default, function() {
    SetEventFlagID(1044349257, OFF);
    WaitFor(EventFlag(1044352800));
    SetEventFlagID(1044349257, ON);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1044350700, true);
    SetCharacterBackreadState(1044350701, true);
    $InitializeEvent(0, 1044352250);
    $InitializeCommonEvent(0, 90005251, 1044350200, 5, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044350201, 5, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044350202, 5, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044350203, 5, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044350230, 15, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044350231, 15, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1044350220, 1044352220, 10, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044350221, 55, 0, -1);
});

// 亜人死体化 -- demihuman corpse
$Event(1044352250, Restart, function() {
    ForceCharacterDeath(1044350250, false);
    ForceCharacterDeath(1044350251, false);
});

// テスト用イベント_鳴子作動_XX -- Test event_Naruko activation_XX
$Event(1044352600, Restart, function(entityId, areaEntityId) {
    WaitFor(
        HasDamageType(entityId, 0, DamageType.Unspecified)
            || (InArea(10000, areaEntityId)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    WaitFixedTimeSeconds(0.1);
    PlaySE(entityId, SoundType.GeometrySet, 810000099);
    ForceAnimationPlayback(entityId, 1, false, false, false);
    TriggerAISound(7000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(2);
    TriggerAISound(7000, areaEntityId, TargetEntityType.Area);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// チュートリアルメッセージ_騎乗 -- Tutorial message_Riding
$Event(1044352650, Restart, function(tutorialParamId, eventFlagId, tutorialParamId2, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 44, 35, 0)
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

// 傭兵剣士_非表示イベント -- Mercenary swordsman_hidden event
$Event(1044352740, Restart, function(chrEntityId, chrEntityId2) {
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
});

// NPC216_狼頭の戦士_NPC初期化イベント_牢に囚われている -- NPC216_Wolf Head Warrior_NPC initialization event_Captive in prison
$Event(1044350710, Restart, function(chrEntityId, chrEntityId2) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3600)) {
            SetEventFlagID(1044359252, OFF);
        }
    }
L19:
    if (!EventFlag(3615)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        DisableCharacter(chrEntityId2);
        SetCharacterBackreadState(chrEntityId2, true);
        WaitFor(EventFlag(3615));
        RestartEvent();
    }
L15:
    GotoIf(L0, EventFlag(3600));
    GotoIf(L1, EventFlag(3601));
    GotoIf(L3, EventFlag(3603));
L0:
    GotoIf(L5, EventFlag(1044350715));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    EnableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterTalkRange(chrEntityId2, 100);
    Goto(L20);
L5:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    Goto(L20);
L1:
    GotoIf(L5, EventFlag(1044350715));
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    Goto(L20);
L5:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
    Goto(L20);
L3:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3615));
    RestartEvent();
});

// NPC216_狼頭の戦士_ダリウィル戦_召喚可否監視 -- NPC216_Wolf Head Warrior_Daliwill Battle_Monitoring whether or not to summon
$Event(1044350711, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044350800));
    WaitFor(EventFlag(3605) && EventFlag(1044352800));
    SetEventFlagID(1044352717, ON);
    SetEventFlagID(3618, ON);
});

// NPC216_狼頭の戦士_ダリウィル戦自動会話キック -- NPC216_Wolf-Headed Warrior_Dariwill battle automatic conversation kick
$Event(1044350712, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1044352160));
    SetCharacterTalkRange(chrEntityId, 100);
    SetEventFlagID(1044352715, ON);
});

// NPC216_狼頭の戦士_ダリウィル撃破時に召喚していたかを見る -- NPC216_Wolf Head Warrior_See if it was summoned when defeating Dariwill
$Event(1044350713, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1044350800));
    WaitFor(EventFlag(1044350800));
    EndIf(!EventFlag(1044352160));
    SetEventFlagID(1044349258, ON);
});

// NPC216_狼頭の戦士_白霊初期化 -- NPC216_Wolf Head Warrior_White Spirit Initialization
$Event(1044350714, Restart, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    EndIf(!EventFlag(1044350800) && EventFlag(3605) && EventFlag(3600));
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
});

// NPC216_狼頭の戦士_牢に囚われている_封牢から解放 -- NPC216_Wolf-Headed Warrior_Captive in prison_Release from imprisonment
$Event(1044350715, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(ThisEventSlot());
    SetEventFlagID(1044359260, OFF);
    WaitFor(EventFlag(3615) && EventFlag(1044359260) && PlayerIsInOwnWorld());
    SetThisEventSlot(ON);
    WaitFixedTimeFrames(1);
    DisableCharacter(chrEntityId2);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterTalkRange(chrEntityId2, 17);
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 20039, false, false, false);
    EndEvent();
});

// NPCNPC801赤目モブ１_NPC初期化イベント -- NPCNPC801 Red Eye Mob 1_NPC Initialization Event
$Event(1044353720, Default, function(assetEntityId) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1044359300, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3980) && EventFlag(1044352720)) {
            SetEventFlagID(1044352720, OFF);
        }
    }
L10:
    DisableCharacter(assetEntityId);
    SetCharacterBackreadState(assetEntityId, true);
L0:
    GotoIf(L1, EventFlag(3980));
    GotoIf(L2, EventFlag(3981));
    GotoIf(L4, EventFlag(3983));
L1:
    EnableCharacter(assetEntityId);
    SetCharacterBackreadState(assetEntityId, false);
    ForceAnimationPlayback(assetEntityId, 30003, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(assetEntityId);
    SetCharacterBackreadState(assetEntityId, false);
    SetCharacterTeamType(assetEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(assetEntityId);
    DisableCharacter(assetEntityId);
    SetCharacterBackreadState(assetEntityId, true);
    DisableAsset(assetEntityId);
    Goto(L20);
L20:
    WaitFor(EventFlag(1044359300));
    RestartEvent();
});
