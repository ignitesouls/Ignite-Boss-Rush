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
    RegisterBonfire(301400, 30141950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 900005610, 30141150, 100, 800, 0);
    $InitializeEvent(0, 30142800);
    $InitializeEvent(0, 30142801);
    $InitializeEvent(0, 30142849);
    $InitializeEvent(0, 30142811);
    $InitializeCommonEvent(0, 90005200, 30140200, 30001, 20001, 30142262, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140201, 30010, 20010, 30142201, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30140268, 30142251, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30140202, 30142202, 0, -1);
    $InitializeCommonEvent(0, 90005200, 30140252, 30001, 20001, 30142256, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30140251, 30142264, 0, 3003);
    $InitializeCommonEvent(0, 90005250, 30140253, 30142261, 0.5, 3004);
    $InitializeCommonEvent(0, 90005200, 30140269, 30001, 20001, 30142265, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140270, 30001, 20001, 30142265, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140271, 30001, 20001, 30142265, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140272, 30001, 20001, 30142265, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140261, 30000, 20000, 30142258, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140262, 30010, 20010, 30142258, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140263, 30010, 20010, 30142258, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30140213, 30009, 20009, 4, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30140214, 30009, 20009, 4, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30140216, 30142215, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30140217, 30142215, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30140264, 30142215, 0, -1);
    $InitializeCommonEvent(0, 90005200, 30140210, 30000, 20000, 30142210, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140211, 30000, 20000, 30142210, 3.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140212, 30000, 20000, 30142210, 4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140219, 30009, 20009, 30142219, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140220, 30009, 20009, 30142219, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140222, 30009, 20009, 30142219, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30140219, 30142219, 1, -1);
    $InitializeCommonEvent(0, 90005250, 30140220, 30142219, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30140222, 30142219, 0.5, -1);
    $InitializeCommonEvent(0, 90005250, 30140223, 30142223, 0, -1);
    $InitializeCommonEvent(0, 90005200, 30140260, 30000, 20000, 30142257, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140265, 30000, 20000, 30142263, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140266, 30000, 20000, 30142263, 0.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30140267, 30000, 20000, 30142263, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005650, 30140540, 30141540, 30141541, 30143541, 27115);
    $InitializeCommonEvent(0, 90005651, 30140540, 30141540);
    $InitializeCommonEvent(0, 90005501, 30140510, 30141510, 0, 30141510, 30141511, 30141512, 30140511);
    $InitializeEvent(0, 30142510);
    $InitializeEvent(0, 30142580);
    $InitializeCommonEvent(0, 90005646, 30140800, 30142840, 30142841, 30141840, 30142840, 30, 14, 0, 0);
    $InitializeCommonEvent(0, 91005600, 30142800, 30141695, 5);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 30140519);
});

// エレベータイベント起動 -- Elevator event activation
$Event(30142510, Default, function() {
    $InitializeCommonEvent(0, 90005500, 30140510, 30141510, 0, 30141510, 30141511, 30143511, 30141512, 30143512, 30142511, 30142512, 30140511, 30142512, 0);
});

// エレベータ初期フラグ -- Elevator initial flag
$Event(30140519, Default, function() {
    EndIf(EventFlag(30140519));
    SetEventFlagID(30140510, ON);
});

// 洞窟_ボス部屋報酬宝箱の開放制限 -- Cave_Boss room reward treasure chest opening limit
$Event(30142520, Restart, function(eventFlagId, assetEntityId, eventFlagId2) {
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

// 梯子登録 -- ladder registration
$Event(30142580, Default, function() {
    RegisterLadder(30140580, 30140581, 30141580);
});

//watchdogs
$Event(30142800, Restart, function() {
    EndIf(!EventFlag(1049308118)); //end if boss not selected
    EndIf(EventFlag(30140800));
    WaitFor(CharacterHPValue(30140800) <= 0 && CharacterHPValue(30140801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30140800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30140800) && CharacterDead(30140801));
    HandleBossDefeatAndDisplayBanner(30140800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304148, 1049304047, -1, -1, 1049304614, 1049304615, 1049304616, 1049304617, -1, 1049304756, 1049304758, 1049304760, 1049300148);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307518);
});

// ボス出現 -- Boss appears
$Event(30142801, Restart, function() {
    if (EventFlag(30140800)) {
        DisableCharacter(30140800);
        DisableCharacterCollision(30140800);
        ForceCharacterDeath(30140800, false);
        DisableCharacter(30140801);
        DisableCharacterCollision(30140801);
        ForceCharacterDeath(30140801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30140800);
    DisableCharacterAI(30140801);
    WaitFor(EventFlag(30142805) && InArea(10000, 30142800));
L2:
    EnableCharacterAI(30140800);
    SetNetworkUpdateRate(30140800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30140800, 0, 904260304);
    EnableCharacterAI(30140801);
    SetNetworkUpdateRate(30140801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30140801, 1, 904260305);
});

// ボス激昂 -- boss rage
$Event(30142811, Restart, function() {
    EndIf(EventFlag(30140800));
    WaitFor(HPRatio(30140800) <= 0.6);
    SetEventFlagID(30142802, ON);
});

// 番犬ゴーレム_イベント起動 -- Watchdog Golem_Event activation
$Event(30142849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30140800, 30141800, 30142800, 30142805, 30145800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30140800, 30141800, 30142800, 30142805, 30142806, 10000);
    $InitializeCommonEvent(0, 9005811, 30140800, 30141800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30140800, 930000, 30142805, 30142806, 0, 30142802, 0, 0);
});

