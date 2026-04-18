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
    RegisterBonfire(301200, 30121950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 900005610, 30121150, 100, 800, 0);
    $InitializeCommonEvent(0, 90005201, 30120200, 30000, 20000, 7, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30120201, 30000, 20000, 30122201, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30120250, 30122250, 0, 0);
    $InitializeCommonEvent(1, 90005250, 30120251, 30122250, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30120205, 30122205, 0, 3000);
    $InitializeCommonEvent(0, 90005250, 30120208, 30122208, 0, -1);
    $InitializeCommonEvent(0, 90005271, 30120209, 0, -1);
    $InitializeCommonEvent(0, 90005271, 30120210, 0, -1);
    $InitializeCommonEvent(0, 90005271, 30120211, 0, -1);
    $InitializeCommonEvent(0, 90005271, 30120212, 0, -1);
    $InitializeEvent(0, 30122300, 30120213);
    $InitializeEvent(1, 30122300, 30120214);
    $InitializeEvent(2, 30122300, 30120215);
    $InitializeEvent(3, 30122300, 30120216);
    $InitializeEvent(4, 30122300, 30120217);
    $InitializeEvent(5, 30122300, 30120218);
    $InitializeEvent(6, 30122300, 30120219);
    $InitializeEvent(7, 30122300, 30120220);
    $InitializeEvent(8, 30122300, 30120221);
    $InitializeEvent(9, 30122300, 30120222);
    $InitializeEvent(10, 30122300, 30120223);
    $InitializeEvent(11, 30122300, 30120224);
    $InitializeEvent(0, 30122502, 30120500, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30120500, 30122502, 0, 0);
    $InitializeEvent(0, 30122500);
    $InitializeEvent(0, 30122501);
    $InitializeCommonEvent(0, 90005650, 30120540, 30121540, 30121541, 30123541, 27115);
    $InitializeCommonEvent(0, 90005651, 30120540, 30121540);
    $InitializeEvent(0, 30122800);
    $InitializeEvent(0, 30122810);
    $InitializeEvent(0, 30122849);
    $InitializeEvent(0, 30122811);
    $InitializeCommonEvent(0, 90005646, 30120800, 30122840, 30122841, 30121840, 30122840, 30, 12, 0, 0);
    $InitializeCommonEvent(0, 91005600, 30122800, 30121695, 5);
});

// 洞窟_ボス部屋報酬宝箱の開放制限 -- Cave_Boss room reward treasure chest opening limit
$Event(30122520, Restart, function(eventFlagId, assetEntityId, eventFlagId2) {
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

// 死亡待機 -- Waiting for death
$Event(30122300, Restart, function(chrEntityId) {
    ForceCharacterDeath(chrEntityId, false);
    EndEvent();
});

// 忌み子奇襲_ボス部屋手前まで進んだ判定 -- Abominable child surprise attack_Judgment when progressing to the front of the boss room
$Event(30122500, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        InArea(10000, 30122500)
            && CharacterBackreadStatus(30120500)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetNetworkconnectedThisEventSlot(ON);
    EndEvent();
});

// 忌み子奇襲_本体 -- Abominable child surprise attack_main body
$Event(30122501, Restart, function() {
    EndIf(EventFlag(30122502));
    WaitFor(
        InArea(10000, 30122501)
            && CharacterBackreadStatus(30120500)
            && EventFlag(30122500)
            && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                || CharacterType(10000, TargetType.Alive)
                || CharacterType(10000, TargetType.GrayPhantom)
                || CharacterType(10000, TargetType.WhitePhantom)));
    SetNetworkconnectedEventFlagID(30122502, ON);
    WaitFixedTimeSeconds(0);
    ForceAnimationPlayback(30120500, 3024, true, true, false);
    EnableCharacterAI(30120500);
    EndEvent();
});

// 忌み子用_思考ロジック有効化_ダメージ判定 -- For Abandoned Child_Thought Logic Activation_Damage Judgment
$Event(30122502, Restart, function(chrEntityId, timeSeconds, animationId) {
    EndIf(EventFlag(30122502));
    DisableCharacterAI(chrEntityId);
    WaitFor(HasDamageType(chrEntityId, 0, DamageType.Unspecified));
    SetNetworkconnectedEventFlagID(30122502, ON);
    if (and1.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

//tricia
$Event(30122800, Restart, function() {
    EndIf(!EventFlag(1049308120)); //end if boss not selected
    EndIf(EventFlag(30120800));
    WaitFor(CharacterHPValue(30120800) <= 0 && CharacterHPValue(30120801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30100800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30120800) && CharacterDead(30120801));
    HandleBossDefeatAndDisplayBanner(30120800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001034, 1049304169, 1049304164, -1, -1, 1049304713, 1049304714, 1049304715, 1049304716, 1049304717, 1049305009, 1049305011, 1049305013, 1049305016, 1049305021, 1049300169);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307520);
});

// ボス出現 -- Boss appears
$Event(30122810, Restart, function() {
    if (EventFlag(30120800)) {
        DisableCharacter(30120800);
        DisableCharacterCollision(30120800);
        ForceCharacterDeath(30120800, false);
        DisableCharacter(30120801);
        DisableCharacterCollision(30120801);
        ForceCharacterDeath(30120801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30120800);
    DisableCharacterAI(30120801);
    ForceAnimationPlayback(30120800, 30001, true, false, false);
    WaitFor(EventFlag(30122805) && InArea(10000, 30122800));
    ForceAnimationPlayback(30120800, 20001, false, false, false);
L2:
    EnableCharacterAI(30120800);
    SetNetworkUpdateRate(30120800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30120800, 0, 903460300);
    EnableCharacterAI(30120801);
    SetNetworkUpdateRate(30120801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30120801, 1, 903700300);
});

// ボス激昂 -- boss rage
$Event(30122811, Restart, function() {
    EndIf(EventFlag(30120800));
    WaitFor(HPRatio(30120800) <= 0.6 || CharacterDead(30120801));
    SetEventFlagID(30122802, ON);
});

// ボス_イベント起動 -- Boss_event activation
$Event(30122849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30120800, 30121800, 30122800, 30122805, 30125800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30120800, 30121800, 30122800, 30122805, 30122806, 10000);
    $InitializeCommonEvent(0, 9005811, 30120800, 30121800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30120800, 930000, 30122805, 30122806, 0, 30122802, 0, 0);
});

