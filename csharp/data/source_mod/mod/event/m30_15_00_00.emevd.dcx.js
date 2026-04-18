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
    RegisterBonfire(301500, 30151950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 900005610, 30151150, 100, 800, 0);
    $InitializeCommonEvent(0, 90005200, 30150300, 30000, 20000, 30152400, 0.8, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30150301, 30000, 20000, 30152400, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30150302, 30000, 20000, 30152400, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30150200, 30152214, 0, 3028);
    $InitializeCommonEvent(0, 90005250, 30150310, 30152310, 0, 3003);
    $InitializeCommonEvent(0, 90005211, 30150201, 30003, 20003, 30152213, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30150303, 30000, 20000, 30152217, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30150304, 30000, 20000, 30152211, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30150305, 30000, 20000, 30152217, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30150306, 30000, 20000, 30152217, 2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30150307, 30152200, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30150308, 30152200, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30150309, 30152200, 0, -1);
    $InitializeCommonEvent(0, 90005650, 30150540, 30151540, 30151541, 30153541, 27115);
    $InitializeCommonEvent(0, 90005651, 30150540, 30151540);
    $InitializeCommonEvent(0, 90005525, 30150570, 30151570);
    $InitializeCommonEvent(0, 90005525, 30150571, 30151571);
    $InitializeEvent(0, 30152800);
    $InitializeEvent(0, 30152810);
    $InitializeEvent(0, 30152849);
    $InitializeEvent(0, 30152811);
    $InitializeCommonEvent(0, 90005646, 30150800, 30152840, 30152841, 30151840, 30152840, 30, 15, 0, 0);
    $InitializeCommonEvent(0, 91005600, 30152800, 30151695, 5);
});

// 洞窟_ボス部屋報酬宝箱の開放制限 -- Cave_Boss room reward treasure chest opening limit
$Event(30152520, Restart, function(eventFlagId, assetEntityId, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    DisableObjAct(assetEntityId, -1);
    if (EventFlag(eventFlagId2)) {
        EnableObjAct(assetEntityId, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(eventFlagId2) && !EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    EnableObjAct(assetEntityId, -1);
});

//cemetery shade
$Event(30152800, Restart, function() {
    EndIf(!EventFlag(1049308117)); //end if boss not selected
    EndIf(EventFlag(30150800));
    WaitFor(CharacterHPValue(30150800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30150800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30150800));
    HandleBossDefeatAndDisplayBanner(30150800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304145, 1049304051, -1, -1, 1049304602, 1049304603, 1049304604, 1049304605, -1, 1049304720, 1049304723, 1049304727, 1049300145);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307517);
});

// ボス出現 -- Boss appears
$Event(30152810, Restart, function() {
    if (EventFlag(30150800)) {
        DisableCharacter(30150800);
        DisableCharacterCollision(30150800);
        ForceCharacterDeath(30150800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30150800);
    WaitFor(EventFlag(30152805) && InArea(10000, 30152800));
L2:
    SetNetworkUpdateRate(30150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30150800, 0, 903664301);
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(30150800);
});

// ボス激昂 -- boss rage
$Event(30152811, Restart, function() {
    EndIf(EventFlag(30150800));
    WaitFor(HPRatio(30150800) <= 0.6);
    SetEventFlagID(30152802, ON);
});

// 墓所影_イベント起動 -- Tomb Shadow_Event activation
$Event(30152849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30150800, 30151800, 30152800, 30152805, 30155800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30150800, 30151800, 30152800, 30152805, 30152806, 10000);
    $InitializeCommonEvent(0, 9005811, 30150800, 30151800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30150800, 930000, 30152805, 30152806, 0, 30152802, 0, 0);
});

