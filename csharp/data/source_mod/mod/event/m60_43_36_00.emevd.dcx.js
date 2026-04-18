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
    $InitializeEvent(1, 1043362210, 1043360213, 30, 430008500);
    $InitializeEvent(2, 1043362210, 1043360214, 30, 430008501);
    $InitializeEvent(3, 1043362210, 1043360215, 30, 430008502);
    $InitializeEvent(5, 1043362210, 1043360217, 30, 430008503);
    $InitializeEvent(6, 1043362210, 1043360218, 30, 430008501);
    $InitializeEvent(7, 1043362210, 1043360219, 30, 430008502);
    $InitializeCommonEvent(0, 90005633, 580300, 580000, 1043360220, 30015, 20015, 1043361220, 1043361610);
    if (EventFlag(1049308020)) { //if boss selected (agheel)
        $InitializeEvent(0, 1043362340, 1043360800, 1043362340, 1043362360);
        $InitializeEvent(1, 1043362340, 1043360800, 1043362341, 1043362361);
        $InitializeEvent(2, 1043362340, 1043360800, 1043362342, 1043362362);
        $InitializeEvent(3, 1043362340, 1043360800, 1043362343, 1043362363);
        $InitializeEvent(4, 1043362340, 1043360800, 1043362344, 1043362364);
        $InitializeEvent(5, 1043362340, 1043360800, 1043362345, 1043362365);
        $InitializeEvent(6, 1043362340, 1043360800, 1043362346, 1043362366);
        $InitializeEvent(7, 1043362340, 1043360800, 1043362347, 1043362367);
        $InitializeEvent(8, 1043362340, 1043360800, 1043362348, 1043362368);
        $InitializeEvent(9, 1043362340, 1043360800, 1043362349, 1043362369);
        $InitializeEvent(10, 1043362340, 1043360800, 1043362350, 1043362370);
        $InitializeEvent(11, 1043362340, 1043360800, 1043362351, 1043362371);
        $InitializeEvent(12, 1043362340, 1043360800, 1043362352, 1043362372);
        $InitializeCommonEvent(0, 90005861, 1043360800, 0, 1043360800, 1, 30110, 30060, 0);
        $InitializeCommonEvent(0, 90005870, 1043360800, 904500600, 25);
    }
    $InitializeEvent(0, 1043362380);
    $InitializeEvent(0, 1043362510, 1043361510, 1043362510, 1043362500, 1043363600);
    $InitializeCommonEvent(0, 90005781, 1043360800, 1043362700, 1043362701, 1043360700);
    $InitializeCommonEvent(0, 90005780, 1043360800, 1043362700, 1043362701, 1043360700, SummonSignType.NPCWhiteSign, 1043362700, 0, false, 0); //enable summon visibility
    $InitializeCommonEvent(0, 90005783, 1043360800, 1043362700, 1043362701, 1043360700, 1043362700, 1043362100, 0);
    $InitializeEvent(0, 1043363700);
    $InitializeEvent(0, 1043363701, 1043360700);
    $InitializeEvent(0, 1043363702, 1043360700);
    $InitializeEvent(0, 1043363704);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1043360700, true);
    $InitializeCommonEvent(0, 90005251, 1043360212, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360213, 10, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360214, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360215, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360216, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360217, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360218, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360219, 20, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1043360200, 5, 0, -1);
});

// 貴人セリフ再生_XX -- Nobleman dialogue playback_XX
$Event(1043362210, Restart, function(chrEntityId, targetDistance, soundId) {
    DisableNetworkSync();
    WaitRandomTimeSeconds(4, 18);
    if (EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
        && CharacterDead(chrEntityId, NotEqual, 1)
        && CharacterAIState(chrEntityId, AIStateType.Normal)) {
        PlaySE(chrEntityId, SoundType.CharacterMotion, soundId);
        WaitRandomTimeSeconds(4, 18);
    }
L0:
    RestartEvent();
});

// 絵画イベント貴人_出現 -- Painting event nobleman_appearance
$Event(1043362220, Restart, function(chrEntityId, assetEntityId, eventFlagId, eventFlagId2, targetDistance, animationId, assetEntityId2) {
    if (EventFlag(eventFlagId)) {
        DisableAsset(assetEntityId);
        DisableAsset(assetEntityId2);
        DisableAssetTreasure(assetEntityId);
        DisableCharacter(chrEntityId);
        EndEvent();
    }
L0:
    DisableAsset(assetEntityId);
    DisableAsset(assetEntityId2);
    DisableAssetTreasure(assetEntityId);
    SetSpEffect(chrEntityId, 10124);
    DisableCharacterInvincibility(chrEntityId);
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId2)
            && EntityInRadiusOfEntity(chrEntityId, 10000, targetDistance, 1));
    EnableAsset(assetEntityId);
    EnableAsset(assetEntityId2);
    EnableAssetTreasure(assetEntityId);
    ClearSpEffect(chrEntityId, 10124);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    EndEvent();
});

// 絵画イベント貴人_消滅 -- Painting event Nobleman_Disappearance
$Event(1043362221, Restart, function(chrEntityId, eventFlagId, eventFlagId2, animationId, assetEntityId) {
    EndIf(EventFlag(eventFlagId));
    if (PlayerIsInOwnWorld()) {
        WaitFor(
            CharacterType(10000, TargetType.Alive)
                && EntityInRadiusOfEntity(chrEntityId, 10000, 7, 1)
                && EventFlag(eventFlagId2));
        ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
        ForceAnimationPlayback(assetEntityId, 1, false, false, false);
        WaitFixedTimeSeconds(3.8);
    }
L0:
    DisableCharacter(chrEntityId);
    DisableAsset(assetEntityId);
    SetEventFlagID(eventFlagId, ON);
    EndEvent();
});

// ワイバーン着地_ワープ判定_XX -- Wyvern landing_warp judgment_XX
$Event(1043362340, Restart, function(chrEntityId, areaEntityId, chrEntityId2) {
    if (EventFlag(1043360340)) {
        EnableCharacter(chrEntityId);
        EnableCharacterCollision(chrEntityId);
        SetNetworkconnectedEventFlagID(1043362379, ON);
        EndEvent();
    }
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30005, true, false, false);
    WaitFor(
        !EventFlag(1043360340)
            && InArea(10000, areaEntityId)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20005, true, false, false);
    SetNetworkconnectedEventFlagID(1043360340, ON);
    EndEvent();
});

// ワイバーン初回出現後_貴人無効化 -- After Wyvern appears for the first time_nobility disabled
$Event(1043362380, Restart, function() {
    if (EventFlag(1043360380)) {
        DisableCharacter(1043365340);
        DisableCharacterCollision(1043365340);
        DisableCharacterAI(1043365340);
        DisableCharacterGravity(1043365340);
        ReproduceAssetDestruction(1043361300, 1);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(1043362379) || EventFlag(1043360341));
    DisableCharacter(1043365340);
    DisableCharacterCollision(1043365340);
    DisableCharacterAI(1043365340);
    DisableCharacterGravity(1043365340);
    ReproduceAssetDestruction(1043361300, 1);
    SetEventFlagID(1043360380, ON);
});

// 宝箱ワープトラップ -- treasure chest warp trap
$Event(1043362510, Restart, function(assetEntityId, areaEntityId, eventFlagId, objactEventFlag) {
    DisableNetworkSync();
    if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
        if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
            if (!EventFlag(eventFlagId)) {
                WaitFor(
                    ObjActEventFlag(objactEventFlag)
                        || HasMultiplayerState(MultiplayerState.MultiplayerPending)
                        || HasMultiplayerState(MultiplayerState.Multiplayer));
                if (!HasMultiplayerState(MultiplayerState.MultiplayerPending)) {
                    if (!HasMultiplayerState(MultiplayerState.Multiplayer)) {
                        SetEventFlagID(eventFlagId, ON);
                        WaitFixedTimeSeconds(1.3);
                        WaitFixedTimeSeconds(0.9);
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.Multiplayer));
                        GotoIf(L20, CharacterHPValue(10000) == 0);
                        GotoIf(L20, !InArea(10000, areaEntityId));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L2, HasMultiplayerState(MultiplayerState.Multiplayer));
                        FadeToBlack(0, 0, true, -1);
                        DisplayGenericDialog(20700, PromptType.YESNO, NumberofOptions.NoButtons, 0, 5);
                        WaitFixedTimeSeconds(0.7);
                        SetSpEffect(10000, 4090);
                        PlaySE(10000, SoundType.CharacterMotion, 8700);
                        WaitFixedTimeSeconds(2.7);
                        DisableCharacter(10000);
                        GotoIf(L20, CharacterHPValue(10000) == 0);
                        GotoIf(L3, HasMultiplayerState(MultiplayerState.MultiplayerPending));
                        GotoIf(L3, HasMultiplayerState(MultiplayerState.Multiplayer));
                        SetSpEffect(10000, 4091);
                        FadeToBlack(0, 0, false, -1);
                        SetEventFlagID(32080650, ON);
                        WarpPlayer(32, 8, 0, 0, 32082650, 60);
                        SaveRequest();
                        SetPlayerRespawnPoint(32082650);
                        EndEvent();
L20:
                        SetSpEffect(10000, 4091);
                        EnableCharacter(10000);
                        FadeToBlack(0, 0, false, -1);
                        WaitFixedTimeSeconds(4.4);
L19:
                        ForceAnimationPlayback(assetEntityId, 2, false, true, false);
                        SetEventFlagID(eventFlagId, OFF);
                        EnableObjAct(assetEntityId, -1);
                        RestartEvent();
                    }
                }
            }
L0:
            ReproduceAssetAnimation(assetEntityId, 2);
            SetEventFlagID(eventFlagId, OFF);
            EnableObjAct(assetEntityId, -1);
            RestartEvent();
L3:
            DisableObjAct(assetEntityId, -1);
            SetSpEffect(10000, 4091);
            EnableCharacter(10000);
            ForceAnimationPlayback(10000, 60131, false, false, false);
            FadeToBlack(0, 0, false, -1);
L2:
            DisableObjAct(assetEntityId, -1);
            ForceAnimationPlayback(assetEntityId, 2, false, true, false);
            SetEventFlagID(eventFlagId, OFF);
        }
    }
L1:
    DisableObjAct(assetEntityId, -1);
    WaitFor(
        !HasMultiplayerState(MultiplayerState.MultiplayerPending)
            && !HasMultiplayerState(MultiplayerState.Multiplayer));
    EnableObjAct(assetEntityId, -1);
    RestartEvent();
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(1043362651, Restart, function(tutorialParamId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId2)
            && !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, eventFlagId3, 1);
});

// チュートリアルメッセージ_バディ召喚可能範囲 -- Tutorial message_Buddy summonable range
$Event(1043362652, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 36, 0)
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
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, eventFlagId2, 1);
});

// チュートリアルメッセージ_魔石取得 -- Tutorial message_Magic stone acquisition
$Event(1043362653, Restart, function(tutorialParamId, eventFlagId, eventFlagId2, tutorialParamId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 43, 36, 0)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9116));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(eventFlagId2, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    ShowTutorialPopup(tutorialParamId2, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9116, eventFlagId, 1);
});

// チュートリアルメッセージ_バディ解放 -- Tutorial message_Buddy release
$Event(1043362654, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(60, 43, 36, 0)
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
                || PlayerHasItemIncludingBBox(ItemType.Goods, 245000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9111, eventFlagId, 1);
});

// NPC318_混沌の宿主_飛竜アギールに攻撃した -- NPC318_Host of Chaos_Attacked the flying dragon Agir.
$Event(1043363700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043359258));
    EndIf(EventFlag(1043360800));
    WaitFor(HasDamageType(1043360800, 10000, DamageType.Unspecified));
    SetEventFlagID(1043359258, ON);
    EndEvent();
});

// NPC318_混沌の宿主_白霊非表示 -- NPC318_Host of Chaos_White Spirit Hide
$Event(1043363701, Restart, function(chrEntityId) {
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    if (EventFlag(1043360800)) {
        SetCharacterBackreadState(chrEntityId, true);
    }
    EndEvent();
});

// NPC318_混沌の宿主_アギール湖_召喚可否監視 -- NPC318_Host of Chaos_Lake Agir_Monitoring whether or not it is possible to summon
$Event(1043363702, Restart, function(entityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043360800));
    if (!(EventFlag(3625) || EventFlag(3626))) {
        SetEventFlagID(1043369200, OFF);
        EndEvent();
    }
    WaitFor(
        EntityInRadiusOfEntity(entityId, 20000, 10, 1)
            && EventFlag(1043360340)
            && EventFlag(1043359256));
    EndIf(!EventFlag(3620));
    EndIf(EventFlag(1043360800));
    SetEventFlagID(1043369200, ON);
    EndEvent();
});

// NPC318_混沌の宿主_召喚後にPCが範囲外に出た -- NPC318_Host of Chaos_PC went out of range after summoning
$Event(1043363703, Restart, function(npcEntityId, entityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043360800));
    EndIf(!(EventFlag(3625) || EventFlag(3626)));
    WaitFor(
        (!EntityInRadiusOfEntity(10000, entityId, 80, 1) && EventFlag(1043362700))
            || EventFlag(1043360800));
    EndIf(EventFlag(1043360800));
    SendNPCSummonHome(npcEntityId);
    SetEventFlagID(1043369200, OFF);
    EndEvent();
});

// NPC318_混沌の宿主_竜撃破後処理 -- NPC318_Host of Chaos_Processing after defeating the dragon
$Event(1043363704, Restart, function() {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043360800));
    EndIf(!(EventFlag(3625) || EventFlag(3626)));
    WaitFor(EventFlag(1043360800));
    if (EventFlag(1043362700)) {
        SetEventFlagID(1043369201, ON);
    }
    SetEventFlagID(1043369200, OFF);
    EndEvent();
});
