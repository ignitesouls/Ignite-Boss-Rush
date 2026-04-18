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
    RegisterBonfire(73009, 30091950, 0, 0, 0, 5);
    $InitializeEvent(0, 30090100, 30090540, 30091540, 30093540, 27041);
    $InitializeCommonEvent(0, 90005501, 30090510, 30091510, 2, 30091510, 30091511, 30091512, 30090511);
    $InitializeEvent(0, 30092510);
    $InitializeCommonEvent(0, 90005680, 30090500, 30090501, 30090502, 30090503, 30091500);
    $InitializeEvent(0, 30092500);
    $InitializeEvent(0, 30092580);
    $InitializeCommonEvent(0, 90005616, 30097000, 30092700);
    $InitializeCommonEvent(0, 90005250, 30090200, 30092200, 0.2, 0);
    $InitializeCommonEvent(1, 90005250, 30090201, 30092200, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30090205, 30003, 20003, 30092205, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30090206, 30092206, 0, 3000);
    $InitializeCommonEvent(0, 90005250, 30090219, 30092219, 0, 3026);
    $InitializeCommonEvent(0, 90005200, 30090210, 30003, 20003, 30092210, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005200, 30090211, 30003, 20003, 30092210, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30090215, 30003, 20003, 30092215, 1.3, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005200, 30090217, 30003, 20003, 30092215, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30090234, 30092230, 0, 0);
    $InitializeCommonEvent(0, 90005221, 30090230, 30000, 20000, 0, 0);
    $InitializeCommonEvent(1, 90005221, 30090231, 30000, 20000, 0, 0);
    $InitializeCommonEvent(2, 90005221, 30090232, 30000, 20000, 0, 0);
    $InitializeCommonEvent(3, 90005221, 30090233, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30090235, 30000, 20000, 30092235, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005200, 30090236, 30000, 20000, 30092235, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30090239, 30092258, 0, 701);
    $InitializeCommonEvent(0, 90005221, 30090240, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30090250, 30092250, 0, 3009);
    $InitializeCommonEvent(1, 90005250, 30090251, 30092250, 3, 0);
    $InitializeCommonEvent(0, 90005250, 30090258, 30092258, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30090254, 30092254, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30090255, 30092254, 0, 3010);
    $InitializeCommonEvent(0, 90005250, 30090270, 30092270, 0, 5003);
    $InitializeCommonEvent(1, 90005250, 30090301, 30092301, 0, 5003);
    $InitializeCommonEvent(0, 90005250, 30090300, 30092300, 0, -1);
    $InitializeCommonEvent(0, 90005250, 30090400, 30092400, 1, -1);
    $InitializeEvent(0, 30092400, 30090400);
    $InitializeEvent(0, 30092410, 30090400, 30092431, 30093420, 30092421, 30093421);
    $InitializeCommonEvent(0, 90005250, 30090410, 30092410, 0, -1);
    $InitializeEvent(1, 30092400, 30090410);
    $InitializeEvent(0, 30092399);
    $InitializeEvent(3, 30092410, 30090410, 30092451, 30093440, 30092441, 30093441);
    $InitializeEvent(4, 30092410, 30090410, 30092452, 30093441, 30092442, 30093442);
    $InitializeEvent(0, 30092800);
    $InitializeEvent(0, 30092810);
    $InitializeEvent(0, 30092849);
    $InitializeEvent(0, 30092811);
    $InitializeCommonEvent(0, 90005646, 30090800, 30092840, 30092841, 30091840, 30092840, 30, 9, 0, 0);
    $InitializeEvent(0, 30090790, 30091670, 30090800);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 30090050);
    $InitializeEvent(0, 30090519);
});

// m30_09_00_00用初期フラグ設定 -- Initial flag setting for m30_09_00_00
$Event(30090050, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30090500, ON);
});

// 英雄の墓_扉開放_レバー無しver -- Tomb of the Hero_door open_no lever ver.
$Event(30090100, Default, function(eventFlagId, assetEntityId, objactEventFlag, objactParamId) {
    if (EventFlag(eventFlagId)) {
        ReproduceAssetAnimation(assetEntityId, 2);
        DisableObjAct(assetEntityId, objactParamId);
        EndEvent();
    }
L0:
    WaitFor(PlayerIsInOwnWorld() && ObjActEventFlag(objactEventFlag));
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    ForceAnimationPlayback(assetEntityId, 1, false, false, false);
    EndEvent();
});

// エレベータイベント起動 -- Elevator event activation
$Event(30092510, Default, function() {
    $InitializeCommonEvent(0, 90005500, 30090510, 30091510, 2, 30091510, 30091511, 30093511, 30091512, 30093512, 30092511, 30092512, 30090511, 30092512, 0);
});

// エレベータ初期フラグ -- Elevator initial flag
$Event(30090519, Default, function() {
    EndIf(ThisEventSlot());
    SetEventFlagID(30090510, ON);
});

// 火吹き像起動 -- Fire-breathing statue activated
$Event(30092500, Restart, function() {
    $InitializeCommonEvent(0, 90005681, 30090500, 30090501, 30090502, 30090503, 30091500);
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103270, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103260, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103250, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103240, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103230, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103220, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103210, 801103205, 100, 101, 0, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005682, 30090502, 30091500, 30092500, 30090500, 801103200, 801103205, 100, 101, 0, 0);
    }
});

// チャリオットダメージ作成_中央 -- Chariot damage creation_center
$Event(30092300, Restart, function(eventFlagId, entityId) {
    WaitFor(
        EntityInRadiusOfEntity(eventFlagId, 10000, 2.4, 1)
            || EntityInRadiusOfEntity(eventFlagId, entityId, 2.4, 1));
    CreateDamagingAsset(eventFlagId, eventFlagId, 100, 103000, DamageTargetType.Character, 2.3, 1, 0);
    WaitFixedTimeFrames(1);
    DeleteAssetEvent(eventFlagId);
    WaitFixedTimeSeconds(0.7);
    RestartEvent();
});

// チャリオットダメージ作成_左右 -- Chariot damage creation_left and right
$Event(30092305, Restart, function(eventFlagId, entityId) {
    WaitFor(
        EntityInRadiusOfEntity(eventFlagId, 10000, 3.1, 1)
            || EntityInRadiusOfEntity(eventFlagId, entityId, 3.1, 1));
    CreateDamagingAsset(eventFlagId, eventFlagId, 100, 103000, DamageTargetType.Character, 3.1, 1, 0);
    WaitFixedTimeFrames(1);
    DeleteAssetEvent(eventFlagId);
    WaitFixedTimeSeconds(0.7);
    RestartEvent();
});

// チャリオット_乗れる化 -- Chariot_ridable
$Event(30092399, Restart, function() {
    ChangeCharacterDispmask(30090410, 10, OFF);
    ChangeCharacterDispmask(30090410, 11, OFF);
    ChangeCharacterHitmask(30090410, 5, OFF);
    AttachAssetToCharacter(30090410, 110, 30091410);
});

// 英雄の墓_チャリオット初期設定 -- Hero's Tomb_Chariot initial settings
$Event(30092400, Restart, function(chrEntityId) {
    EnableCharacterInvincibility(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    DisableCharacterHPBarDisplay(chrEntityId);
    SetSpEffect(chrEntityId, 5000);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    if (PlayerIsInOwnWorld()) {
        SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
    }
    EndEvent();
});

// チャリオット巡回ルート指定_XX -- Chariot patrol route specification_XX
$Event(30092410, Restart, function(chrEntityId, areaEntityId, patrolInformationEntityId, areaEntityId2, patrolInformationEntityId2) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(InArea(chrEntityId, areaEntityId));
    if (!InArea(10000, areaEntityId2)) {
        ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId);
    } else {
L1:
        ChangeCharacterPatrolBehavior(chrEntityId, patrolInformationEntityId2);
        Goto(L20);
    }
L20:
    WaitFor(!InArea(chrEntityId, areaEntityId));
    RestartEvent();
});

// 梯子登録 -- ladder registration
$Event(30092580, Default, function() {
    RegisterLadder(30090580, 30090581, 30091580);
    RegisterLadder(30090582, 30090583, 30091582);
});

// 英雄の墓_火吹き像_火炎処理_高山火山 -- Hero's Tomb_Fire-breathing statue_Flame treatment_Alpine volcano
$Event(30092610, Default, function(eventFlagId, entityId, areaEntityId, chrEntityId, behaviorId, behaviorId2, dummypolyId, dummypolyId2, dummypolyId3, dummypolyId4) {
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
            ShootBullet(chrEntityId, entityId, dummypolyId, 801103200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId, 801103205, 0, 0, 0);
        }
    }
L1:
    if (Signed(dummypolyId2) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId2, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId2, 801103200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId2, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId2, 801103205, 0, 0, 0);
        }
    }
L2:
    if (Signed(dummypolyId3) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId3, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId3, 801103200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId3, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId3, 801103205, 0, 0, 0);
        }
    }
L3:
    if (Signed(dummypolyId4) != 0) {
        if (Signed(behaviorId) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId4, behaviorId, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId4, 801103200, 0, 0, 0);
        }
        if (Signed(behaviorId2) != 0) {
            ShootBullet(chrEntityId, entityId, dummypolyId4, behaviorId2, 0, 0, 0);
        } else {
            ShootBullet(chrEntityId, entityId, dummypolyId4, 801103205, 0, 0, 0);
        }
    }
L4:
    WaitFixedTimeSeconds(7.2);
    RestartEvent();
});

// ボス部屋報酬宝箱の開放制限 -- Restrictions on opening boss room reward treasure chests
$Event(30090790, Restart, function(assetEntityId, eventFlagId) {
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

//red wolf
$Event(30092800, Restart, function() {
    EndIf(!EventFlag(1049308123)); //end if boss not selected
    EndIf(EventFlag(30090800));
    WaitFor(CharacterHPValue(30090800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30090800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30090800));
    HandleBossDefeatAndDisplayBanner(30090800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304186, 1049304073, -1, -1, 1049304791, 1049304792, 1049304793, 1049304794, 1049305217, 1049305219, 1049305221, 1049305224, 1049300186);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307523);
});

// ボス出現 -- Boss appears
$Event(30092810, Restart, function() {
    if (EventFlag(30090800)) {
        DisableCharacter(30090800);
        DisableCharacterCollision(30090800);
        ForceCharacterDeath(30090800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30090800);
    EnableObjAct(30091520, -1);
    WaitFor(EventFlag(30092805) && InArea(10000, 30092800));
L2:
    EnableCharacterAI(30090800);
    SetNetworkUpdateRate(30090800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30090800, 0, 903181300);
});

// ボス激昂 -- boss rage
$Event(30092811, Restart, function() {
    EndIf(EventFlag(30090800));
    WaitFor(HPRatio(30090800) <= 0.6);
    SetEventFlagID(30092802, ON);
});

// ルーンウルフ_大剣_イベント起動 -- Rune Wolf_Great Sword_Event activation
$Event(30092849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 30090800, 30091800, 30092800, 30092805, 30095800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30090800, 30091800, 30092800, 30092805, 30092806, 10000);
    $InitializeCommonEvent(0, 9005811, 30090800, 30091800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 30090800, 921400, 30092805, 30092806, 0, 30092802, 0, 0);
});

