// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common.emevd\u0000N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000"
// @linked    [0,72,154,220]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterLadder(49381500, 49381501, 1049381500);
    RegisterLadder(49381502, 49381503, 1049381502);
    RegisterLadder(49381504, 49381505, 1049381504);
    $InitializeCommonEvent(0, 9005810, 1049380800, 1049380000, 1049380950, 1049381950, 5);
    RegisterBonfire(1049380001, 1049381951, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76418, 76413, 1049381981, 77400, 5, 78400, 78401, 78402, 78403, 78404, 78405, 78406, 78407, 78408, 78409);
    $InitializeCommonEvent(0, 90005511, 1049380560, 1049381560, 1049383560, 99020, 0);
    $InitializeCommonEvent(0, 90005512, 1049380560, 1049382560, 1049382561);
    $InitializeCommonEvent(0, 90005780, 1049380800, 1049382160, 1049382161, 1049380700, SummonSignType.NPCWhiteSign, 1049382701, 0, true, 0);
    $InitializeCommonEvent(0, 90005781, 1049380800, 1049382160, 1049382161, 1049380700);
    $InitializeCommonEvent(0, 90005783, 1049380800, 1049382160, 1049382161, 1049380700, 1049382700, 1049382400, 0);
    $InitializeCommonEvent(0, 90005300, 1049380290, 1049380290, 40404, 0, 0);
    $InitializeEvent(0, 1049382210);
    $InitializeEvent(0, 1049382211, 1049381235, 6);
    $InitializeEvent(1, 1049382211, 1049381236, 12);
    $InitializeEvent(2, 1049382211, 1049381237, 3);
    $InitializeEvent(3, 1049382211, 1049381238, 2);
    $InitializeEvent(4, 1049382211, 1049381239, 10);
    $InitializeEvent(5, 1049382211, 1049381240, 14);
    $InitializeEvent(6, 1049382211, 1049381241, 8);
    $InitializeEvent(7, 1049382211, 1049381242, 5);
    $InitializeEvent(8, 1049382211, 1049381243, 4);
    $InitializeCommonEvent(0, 90005250, 1049380399, 1049382399, 0, -1);
    $InitializeEvent(0, 1049382200, 1049380200, 14807);
    $InitializeEvent(1, 1049382200, 1049380201, 14807);
    $InitializeEvent(2, 1049382200, 1049380202, 14807);
    $InitializeCommonEvent(0, 90005250, 1049380200, 1049382200, 0, -1);
    $InitializeCommonEvent(0, 90005250, 1049380201, 1049382200, 0, -1);
    $InitializeCommonEvent(0, 90005250, 1049380202, 1049382200, 0, -1);
    $InitializeCommonEvent(0, 90005200, 1049380311, 30002, 20002, 1049382311, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 1049380306, 1049382311, 82, -1);
    $InitializeCommonEvent(0, 90005250, 1049380310, 1049382311, 22, -1);
    $InitializeCommonEvent(0, 90005250, 1049380312, 1049382311, 115, -1);
    $InitializeCommonEvent(0, 90005250, 1049380313, 1049382311, 50, -1);
    if (EventFlag(1049308026)) { //if boss selected (o'neil)
        $InitializeCommonEvent(0, 90005251, 1049380800, 35, 0, -1);
        $InitializeCommonEvent(0, 90005870, 1049380800, 903050600, 11);
        $InitializeCommonEvent(0, 90005860, 1049380800, 0, 1049380800, 1, 30405, 0);
        $InitializeCommonEvent(0, 90005872, 1049380800, 11, 0);
        $InitializeEvent(0, 1049382820, 1049380800, 1049385800, 11130, 20015);
        $InitializeEvent(0, 1049382824, 1049380800, 1049385801, 11131, 20015);
        $InitializeEvent(0, 1049382821, 1049380800, 1049385800, 1049385801, 20016);
    }
});

// 距離で現消する -- disappear with distance
$Event(1049382200, Restart, function(chrEntityId, spEffectId) {
    SetSpEffect(chrEntityId, spEffectId);
});

// 間欠泉_弾丸オーナー作成 -- Geyser_Bullet owner created
$Event(1049382210, Restart, function() {
    CreateBulletOwner(1049380299);
});

// 間欠泉_XX -- Geyser_XX
$Event(1049382211, Restart, function(entityId, timeSeconds) {
    EnableNetworkSync();
    WaitFixedTimeSeconds(8);
    WaitFor(EntityInRadiusOfEntity(10000, entityId, 70, 1));
    WaitFixedTimeSeconds(timeSeconds);
    if (GameCycle() == 0) {
        ShootBullet(1049380299, entityId, -1, 802700000, 0, 0, 0);
    } else if (GameCycle() == 1) {
        ShootBullet(1049380299, entityId, -1, 802700010, 0, 0, 0);
    } else if (GameCycle() == 2) {
        ShootBullet(1049380299, entityId, -1, 802700020, 0, 0, 0);
    } else if (GameCycle() == 3) {
        ShootBullet(1049380299, entityId, -1, 802700030, 0, 0, 0);
    } else if (GameCycle() == 4) {
        ShootBullet(1049380299, entityId, -1, 802700040, 0, 0, 0);
    } else if (GameCycle() == 5) {
        ShootBullet(1049380299, entityId, -1, 802700050, 0, 0, 0);
    } else if (GameCycle() == 6) {
        ShootBullet(1049380299, entityId, -1, 802700060, 0, 0, 0);
    } else if (GameCycle() >= 7) {
        ShootBullet(1049380299, entityId, -1, 802700070, 0, 0, 0);
        Goto(L0);
    }
L0:
    RestartEvent();
});

// スカラベ_メタル個体ミニゲーム_イベント -- Scarab_Metal Individual Mini Game_Event
$Event(1049382399, Default, function(chrEntityId, chrEntityId2, spEffectId) {
    EndIf(CharacterDead(chrEntityId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20025, true, false, false);
    RequestCharacterAIReplan(chrEntityId);
});

// 老いた宿将イベント_お供の喪失兵士を呼び出す -- Old Commander Event_Calling the Lost Soldier to Accompany
$Event(1049382820, Restart, function(chrEntityId, chrEntityId2, spEffectId, animationId) {
    if (EventFlag(1049380800)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    if (!EventFlag(1049382300)) {
        DisableCharacterAI(chrEntityId2);
        DisableCharacter(chrEntityId2);
        WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
        RequestCharacterAICommand(chrEntityId, -1, 0);
    }
L1:
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    if (!EventFlag(1049382300)) {
        SetEventFlagID(1049382300, ON);
        ForceAnimationPlayback(chrEntityId2, animationId, false, true, false);
    }
});

// 老いた宿将イベント_お供の喪失兵士を帰還させる -- Old Warlord Event_Returning the lost soldiers who accompanied you
$Event(1049382821, Restart, function(eventFlagId, chrEntityId, chrEntityId2, animationId) {
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    WaitFor(CharacterDead(eventFlagId));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, true);
    ForceAnimationPlayback(chrEntityId2, animationId, false, false, true);
    WaitFixedTimeSeconds(3);
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    ForceCharacterDeath(chrEntityId, false);
    DisableCharacter(chrEntityId2);
    DisableCharacterCollision(chrEntityId2);
    ForceCharacterDeath(chrEntityId2, false);
    EndEvent();
});

// 老いた宿将イベント_お供の喪失兵士を呼び出す_第二波 -- Old Commander Event_Calling Lost Soldiers to Accompany_Second Wave
$Event(1049382824, Restart, function(chrEntityId, chrEntityId2, spEffectId, animationId) {
    if (EventFlag(1049380800)) {
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        EndEvent();
    }
L0:
    if (!EventFlag(1049382301)) {
        DisableCharacterAI(chrEntityId2);
        DisableCharacter(chrEntityId2);
        WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
        RequestCharacterAICommand(chrEntityId, -1, 0);
    }
L1:
    EnableCharacter(chrEntityId2);
    EnableCharacterCollision(chrEntityId2);
    EnableCharacterAI(chrEntityId2);
    if (!EventFlag(1049382301)) {
        SetEventFlagID(1049382301, ON);
        ForceAnimationPlayback(chrEntityId2, animationId, false, true, false);
    }
});
