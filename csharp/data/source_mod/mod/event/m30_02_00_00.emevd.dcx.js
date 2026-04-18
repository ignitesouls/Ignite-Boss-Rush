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
    RegisterBonfire(300200, 30021950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005646, 30020800, 30022840, 30022841, 30021840, 30022840, 30, 2, 0, 0);
    $InitializeEvent(0, 30022800);
    $InitializeEvent(0, 30022810);
    $InitializeEvent(0, 30022849);
    $InitializeEvent(0, 30022811);
    $InitializeCommonEvent(0, 90005550, 30020680, 30021680, 30023680);
    $InitializeCommonEvent(0, 90005650, 30020540, 30021540, 30021541, 30023541, 27115);
    $InitializeCommonEvent(0, 90005651, 30020540, 30021540);
    $InitializeCommonEvent(0, 90005680, 30020500, 30020501, 30020502, 30020503, 30021500);
    $InitializeCommonEvent(0, 90005680, 30020505, 30020506, 30020507, 30020508, 30021505);
    $InitializeEvent(0, 30022510);
    $InitializeEvent(0, 30022580);
    $InitializeCommonEvent(0, 90005706, 30020700, 930025, 30021700);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(30020700, true);
    $InitializeCommonEvent(0, 90005211, 30020200, 30010, 20010, 30022200, 1.5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 30020201, 30022201, 0, 0, 3006);
    $InitializeCommonEvent(0, 90005211, 30020202, 30010, 20010, 30022202, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020203, 30010, 20010, 30022203, 1, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020204, 30010, 20010, 30022204, 1, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020205, 30003, 20003, 30022205, 1, 4.8, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020206, 30003, 20003, 30022206, 0, 0.4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020207, 30003, 20003, 30022206, 0, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020208, 30002, 20002, 30022206, 0, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020209, 30010, 20010, 30022206, 0, 0.9, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020210, 30010, 20010, 30022206, 0, 0.1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020212, 30010, 20010, 30022212, 0, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020213, 30010, 20010, 30022212, 0, 2.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 30020214, 30003, 20003, 30022214, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 30020215, 30022215, 1, 0, 0);
    $InitializeEvent(0, 30020050);
});

// m30_02_00_00用初期フラグ設定 -- Initial flag setting for m30_02_00_00
$Event(30020050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30020500, ON);
    SetEventFlagID(30020505, ON);
});

// エレベータイベント起動 -- Elevator event activation
$Event(30022510, Default, function() {
    $InitializeCommonEvent(0, 90005681, 30020500, 30020501, 30020502, 30020503, 30021500);
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101070, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101060, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101050, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101040, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101030, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101020, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101010, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005682, 30020502, 30021500, 30022500, 30020500, 801101000, 801101005, 101, 0, 0, 0);
    }
    $InitializeCommonEvent(0, 90005681, 30020505, 30020506, 30020507, 30020508, 30021505);
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101070, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101060, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101050, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101040, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101030, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101020, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101010, 801101005, 101, 0, 0, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005682, 30020507, 30021505, 30022505, 30020505, 801101000, 801101005, 101, 0, 0, 0);
    }
});

// 梯子登録 -- ladder registration
$Event(30022580, Default, function() {
    RegisterLadder(30020580, 30020581, 30021580);
});

// 英雄の墓_火吹き像_火炎処理_緑前半 -- Hero's Tomb_Fire-breathing statue_Flame treatment_First half of green
$Event(30022610, Default, function(eventFlagId, entityId, areaEntityId, chrEntityId, behaviorId, behaviorId2, dummypolyId, dummypolyId2, dummypolyId3, dummypolyId4) {
    flagArea &= EventFlag(eventFlagId);
    if (areaEntityId != 0) {
        flagArea &= InArea(10000, areaEntityId);
    }
    WaitFor(flagArea);
    CreateBulletOwner(chrEntityId);
    if (Signed(dummypolyId) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId, 801101000, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId, 801101005, 0, 0, 0);
        }
    }
L1:
    if (Signed(dummypolyId2) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId2, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId2, 801101000, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId2, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId2, 801101005, 0, 0, 0);
        }
    }
L2:
    if (Signed(dummypolyId3) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId3, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId3, 801101000, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId3, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId3, 801101005, 0, 0, 0);
        }
    }
L3:
    if (Signed(dummypolyId4) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId4, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId4, 801101000, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId4, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId4, 801101005, 0, 0, 0);
        }
    }
L4:
    WaitFixedTimeSeconds(7.2);
    RestartEvent();
});

// チュートリアルメッセージ_バディ解放 -- Tutorial message_Buddy release
$Event(30022650, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    WaitFor(
        HasMultiplayerState(MultiplayerState.Singleplayer)
            && !PlayerHasItemIncludingBBox(ItemType.Goods, 9111)
            && PlayerInMap(30, 2, 0, 0)
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

//watchdog
$Event(30022800, Restart, function() {
    EndIf(!EventFlag(1049308108)); //end if boss not selected
    EndIf(EventFlag(30020800));
    WaitFor(CharacterHPValue(30020800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30020800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30020800));
    HandleBossDefeatAndDisplayBanner(30020800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304103, 1049304002, -1, 1049304008, 1049304412, 1049304413, 1049304414, 1049304415, -1, 1049304231, 1049304234, 1049304236, 1049300103);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307508);
});

// m30_02ボス出現 -- m30_02 boss appears
$Event(30022810, Restart, function() {
    if (EventFlag(30020800)) {
        DisableCharacter(30020800);
        DisableCharacterCollision(30020800);
        ForceCharacterDeath(30020800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30020800);
    WaitFor(EventFlag(30022805) && InArea(10000, 30022800));
    if (PlayerIsInOwnWorld()) {
        SetNetworkconnectedEventFlagID(30020801, ON);
    }
L2:
    EnableCharacterAI(30020800);
    SetNetworkUpdateRate(30020800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30020800, 0, 904260301);
});

// ボス激昂 -- boss rage
$Event(30022811, Restart, function() {
    EndIf(EventFlag(30020800));
    WaitFor(HPRatio(30020800) <= 0.6);
    SetEventFlagID(30022802, ON);
});

// m30_02ボスイベント起動 -- m30_02 boss event activation
$Event(30022849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30020800, 30021800, 30022800, 30022805, 30025800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30020800, 30021800, 30022800, 30022805, 30022806, 10000);
    $InitializeCommonEvent(0, 9005811, 30020800, 30021800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30020800, 930000, 30022805, 30022806, 0, 30022802, 0, 0);
});

