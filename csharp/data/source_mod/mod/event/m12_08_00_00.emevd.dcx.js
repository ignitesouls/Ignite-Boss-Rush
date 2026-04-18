// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.6.1
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    
    $InitializeEvent(0, 12082849);
    $InitializeEvent(0, 12082800);
    $InitializeEvent(0, 12082810);
    $InitializeEvent(0, 12082848);
});

// 地下迷宮平原へワープ -- Warp to the underground labyrinth plain
$Event(12082848, Default, function() {
    if (!EventFlag(12080800)) {
        DeleteAssetfollowingSFX(12081848, false);
        WaitFor(PlayerIsInOwnWorld() && EventFlag(12080800));
    }
L0:
    DeleteAssetfollowingSFX(12081848, true);
    CreateAssetfollowingSFX(12081848, 190, 1300);
    WaitFor(
        !(HasMultiplayerState(MultiplayerState.MultiplayerPending)
            || HasMultiplayerState(MultiplayerState.Multiplayer))
            && ActionButtonInArea(9526, 12081848));
    ForceAnimationPlayback(10000, 60460, false, false, false);
    WaitFixedTimeSeconds(2.5);
    SetPlayerRespawnPoint(12022200);
    SaveRequest();
    WarpPlayer(12, 2, 0, 0, 12022200, 0);
});

//ancestor spirit
$Event(12082800, Default, function() {
    EndIf(!EventFlag(1049308021)); //end if boss not selected
    EndIf(EventFlag(12080800));
    WaitFor(HPRatio(12080800) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(12080800, SoundType.SFX, 77777777);
    WaitFor(CharacterDead(12080800));
    HandleBossDefeatAndDisplayBanner(12080800, TextBannerType.GreatEnemyFelled);
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304131, 1049307010, -1, -1, 1049304535, 1049304536, 1049304537, 1049304538, 1049304539, -1, 1049304536, 1049304539, 1049304543, 1049304545, 1049300131);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307421);
});

// 祖霊出現 -- Ancestral spirits appear
$Event(12082810, Restart, function() {
    if (EventFlag(12080800)) {
        DisableCharacter(12080800);
        DisableCharacterCollision(12080800);
        ForceCharacterDeath(12080800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(12080800);
    WaitFor(EventFlag(12082805) && InArea(10000, 12082800));
L2:
    EnableCharacterAI(12080800);
    SetNetworkUpdateRate(12080800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 12080800, 0, 904670000);
});

// 祖霊戦イベント起動 -- Ancestral spirit battle event started
$Event(12082849, Default, function() {
    $InitializeCommonEvent(0, 9005800, 12080800, 12081800, 12082800, 12082805, 12085800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 12080800, 12081800, 12082800, 12082805, 12082806, 10000);
    $InitializeCommonEvent(0, 9005811, 12080800, 12081800, 8, 0);
    $InitializeCommonEvent(0, 9005822, 12080800, 467000, 12082805, 12082806, 0, 12082802, 0, 0);
});
