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
    RegisterBonfire(31120000, 31121950, 0, 0, 0, 5);
    $InitializeEvent(0, 31122800);
    $InitializeEvent(0, 31122810);
    $InitializeEvent(0, 31122849);
    $InitializeEvent(0, 31122811);
    $InitializeCommonEvent(0, 900005610, 31121200, 100, 800, 0);
    $InitializeCommonEvent(0, 90005646, 31120800, 31122840, 31122841, 31121840, 31122840, 31, 12, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005200, 31120201, 30000, 20000, 31122201, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 31120213, 30000, 20000, 31122201, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 31120203, 30000, 20000, 31122204, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 31120214, 30000, 20000, 31122204, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 31120200, 31122203, 0, 1700);
    $InitializeCommonEvent(0, 90005250, 31120211, 31122203, 0, 1700);
    $InitializeCommonEvent(0, 90005250, 31120227, 31122205, 0, 0);
    $InitializeCommonEvent(0, 90005250, 31120227, 31122220, 0, 0);
    $InitializeCommonEvent(0, 90005250, 31120228, 31122205, 0, 0);
    $InitializeCommonEvent(0, 90005250, 31120228, 31122220, 0, 0);
});

//misbegotten crusader
$Event(31122800, Restart, function() {
    EndIf(!EventFlag(1049308152)); //end if boss not selected
    EndIf(EventFlag(31120800));
    WaitFor(CharacterHPValue(31120800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31120800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31120800));
    HandleBossDefeatAndDisplayBanner(31120800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304244, 1049304140, 1049304134, -1, 1049307044, 1049307045, 1049307046, 1049307047, 1049305882, 1049305885, 1049305887, 1049305893, 1049300244);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307552);
});

// ボス出現 -- Boss appears
$Event(31122810, Restart, function() {
    if (EventFlag(31120800)) {
        DisableCharacter(31120800);
        DisableCharacterCollision(31120800);
        ForceCharacterDeath(31120800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31120800);
    DisableCharacterCollision(31120800);
    GotoIf(L1, EventFlag(31120802));
    flagArea = EventFlag(31122805) && InArea(10000, 31122800);
    dmg = HasDamageType(31120800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
L2:
    EnableCharacterAI(31120800);
    EnableCharacterCollision(31120800);
    SetNetworkUpdateRate(31120800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31120800, 0, 903460310);
});

// ボス激昂 -- boss rage
$Event(31122811, Restart, function() {
    EndIf(EventFlag(31120800));
    WaitFor(HPRatio(31120800) <= 0.6);
    SetEventFlagID(31122802, ON);
});

// ボス_イベント起動 -- Boss_event activation
$Event(31122849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31120800, 31121800, 31122800, 31122805, 31125800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31120800, 31121800, 31122800, 31122805, 31122806, 10000);
    $InitializeCommonEvent(0, 9005811, 31120800, 31121800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 31120800, 950000, 31122805, 31122806, 0, 31122802, 0, 0);
});

