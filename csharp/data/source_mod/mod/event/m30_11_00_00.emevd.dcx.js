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
    RegisterBonfire(73011, 30111950, 0, 0, 0, 5);
    $InitializeEvent(0, 30112800);
    $InitializeEvent(0, 30112810);
    $InitializeEvent(0, 30112849);
    $InitializeEvent(0, 30112811);
    $InitializeCommonEvent(0, 90005616, 30117000, 30112700);
    $InitializeCommonEvent(0, 90005650, 30110540, 30111540, 30111541, 30113541, 27115);
    $InitializeCommonEvent(0, 90005651, 30110540, 30111540);
    $InitializeEvent(0, 30112580);
    $InitializeCommonEvent(0, 90005646, 30110800, 30112840, 30112841, 30111840, 30112840, 30, 11, 0, 0);
    $InitializeEvent(0, 30110790, 30111520, 30110800);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005211, 30110200, 30003, 20003, 30112200, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110201, 30003, 20003, 30112201, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110202, 30003, 20003, 30112202, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110203, 30003, 20003, 30112203, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110205, 30003, 20003, 30112205, 1, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110206, 30003, 20003, 30112205, 1, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30110207, 30003, 20003, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 30110208, 30003, 20003, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110209, 30003, 20003, 30112209, 1, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110210, 30003, 20003, 30112209, 1, 5.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110211, 30003, 20003, 30112209, 1, 10.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110212, 30003, 20003, 30112209, 1, 15.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110213, 30003, 20003, 30112213, 0, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110214, 30003, 20003, 30112213, 0, 1.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110215, 30003, 20003, 30112215, 3, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110216, 30003, 20003, 30112215, 3, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30110217, 30003, 20003, 30112217, 3, 8.5, 0, 0, 0, 0);
});

// 梯子登録 -- ladder registration
$Event(30112580, Default, function() {
    RegisterLadder(30110580, 30110581, 30111580);
});

// ボス部屋報酬宝箱の開放制限 -- Restrictions on opening boss room reward treasure chests
$Event(30110790, Restart, function(assetEntityId, eventFlagId) {
    EndIf(ThisEventSlot());
    DisableObjAct(assetEntityId, -1);
    if (EventFlag(eventFlagId)) {
        EnableObjAct(assetEntityId, -1);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && EventFlag(eventFlagId) && !ThisEventSlot());
    SetThisEventSlot(ON);
    EnableObjAct(assetEntityId, -1);
    EndEvent();
});

//black knife assassin
$Event(30112800, Restart, function() {
    EndIf(!EventFlag(1049308107)); //end if boss not selected
    EndIf(EventFlag(30110800));
    WaitFor(CharacterHPValue(30110800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30110800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30110800));
    HandleBossDefeatAndDisplayBanner(30110800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304102, 1049304000, 1049304006, -1, 1049304408, 1049304409, 1049304410, 1049304411, -1, 1049304223, 1049304226, 1049304229, 1049300102);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307507);
});

// m30_11ボス出現 -- m30_11 boss appears
$Event(30112810, Restart, function() {
    if (EventFlag(30110800)) {
        DisableCharacter(30110800);
        DisableCharacterCollision(30110800);
        ForceCharacterDeath(30110800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30110800);
    DisableCharacterHPBarDisplay(30110800);
    DisableObjAct(30111670, -1);
    ForceAnimationPlayback(30110800, 30000, false, false, false);
    WaitFor(EventFlag(30112805) && InArea(10000, 30112800));
L2:
    EnableCharacterAI(30110800);
    SetNetworkUpdateRate(30110800, true, CharacterUpdateFrequency.AlwaysUpdate);
    SetSpEffect(30110800, 4404);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 30110800, 0, 902100300);
    WaitFixedTimeSeconds(0.7);
    ForceAnimationPlayback(30110800, 20000, false, false, false);
});

// ボス激昂 -- boss rage
$Event(30112811, Restart, function() {
    EndIf(EventFlag(30110800));
    WaitFor(HPRatio(30110800) <= 0.6);
    SetEventFlagID(30112802, ON);
});

// m30_11_ボス_イベント起動 -- m30_11_Boss_Event activation
$Event(30112849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30110800, 30111800, 30112800, 30112805, 30115800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30110800, 30111800, 30112800, 30112805, 30112806, 10000);
    $InitializeCommonEvent(0, 9005811, 30110800, 30111800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30110800, 921500, 30112805, 30112806, 0, 30112802, 0, 0);
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(30112900, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(eventFlagId2) && !EventFlag(700690));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, eventFlagId, 1);
    SetEventFlagID(700690, ON);
});

