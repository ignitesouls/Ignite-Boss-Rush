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
    RegisterBonfire(310300, 31031950, 0, 0, 0, 5);
    $InitializeEvent(0, 31032800);
    $InitializeEvent(0, 31032810);
    $InitializeEvent(0, 31032811);
    $InitializeEvent(0, 31032849);
    $InitializeCommonEvent(0, 90005646, 31030800, 31032840, 31032841, 31031840, 31032840, 31, 3, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 31030202, 31032202, 2, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31030210, 30000, 20000, 31032210, 6, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31030211, 30005, 20005, 31032210, 8, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31030216, 30001, 20001, 31032216, 2, 0, 0, 0, 0, 0);
});

// チュートリアルメッセージ_エリクサー瓶取得 -- Tutorial message_Elixir bottle acquisition
$Event(31032650, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(PlayerHasItemIncludingBBox(ItemType.Goods, 250));
    WaitFor(
        PlayerHasItemIncludingBBox(ItemType.Goods, 250)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9115, eventFlagId, 1);
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(31032651, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId2)
            && !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, eventFlagId, 1);
});

//beastman of farum azula
$Event(31032800, Restart, function() {
    EndIf(!EventFlag(1049308132)); //end if boss not selected
    EndIf(EventFlag(31030800));
    WaitFor(CharacterHPValue(31030800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31030800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31030800));
    HandleBossDefeatAndDisplayBanner(31030800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304101, 1049304002, -1, 1049304004, 1049304404, 1049304405, 1049304406, 1049304407, -1, 1049304214, 1049304217, 1049304219, 1049300101);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307532);
});

// ボス出現 -- Boss appears
$Event(31032810, Restart, function() {
    if (EventFlag(31030800)) {
        DisableCharacter(31030800);
        DisableCharacterCollision(31030800);
        ForceCharacterDeath(31030800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31030800);
    DisableCharacterCollision(31030800);
    ForceAnimationPlayback(31030800, 30003, false, false, false);
    WaitFor(PlayerIsInOwnWorld() && InArea(10000, 31032800));
    SetNetworkconnectedEventFlagID(31030801, ON);
    Goto(L2);
L1:
L2:
    EnableCharacterAI(31030800);
    EnableCharacterCollision(31030800);
    SetNetworkUpdateRate(31030800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31030800, 0, 903970310);
    WaitFixedTimeSeconds(1);
    ForceAnimationPlayback(31030800, 20003, false, false, false);
});

// ボス激昂 -- boss rage
$Event(31032811, Restart, function() {
    EndIf(EventFlag(31030800));
    WaitFor(HPRatio(31030800) <= 0.6);
    SetEventFlagID(31032802, ON);
});

// 知性ある獣の末裔_イベント起動 -- Descendants of intelligent beasts_event activation
$Event(31032849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31030800, 31031800, 31032800, 31032805, 31035800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31030800, 31031800, 31032800, 31032805, 31032806, 10000);
    $InitializeCommonEvent(0, 9005811, 31030800, 31031800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 31030800, 931000, 31032805, 31032806, 0, 31032802, 0, 0);
});

