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
    $InitializeCommonEvent(0, 90005300, 1048550200, 1048550200, 40522, 0, 0);
});

// コンストラクタ_LOD2 -- constructor_LOD2
$Event(200, Default, function() {
    $InitializeCommonEvent(0, 90005421, 1248550300, 1248551301, 1248558301);
    $InitializeCommonEvent(0, 90005422, 1248558301, 1248551300, 1248553301);
    $InitializeCommonEvent(0, 90005424, 1248551300, 1248550302, 1248550303, 1248550300, 1248551301);
    $InitializeCommonEvent(0, 90005423, 1248550302);
    $InitializeCommonEvent(0, 90005423, 1248550303);
    $InitializeCommonEvent(0, 90005476, 1248550800, 1248550810);
    $InitializeCommonEvent(0, 90005476, 1248550801, 1248550811);
    $InitializeEvent(0, 1248552820, 1248550800, 0);
    $InitializeEvent(1, 1248552820, 1248550801, 0);
    $InitializeEvent(0, 1248552830, 1248550800, 1248550810);
    $InitializeEvent(1, 1248552830, 1248550801, 1248550811);
    $InitializeEvent(0, 1248552840, 1248550800, 1248550810, 1248552800);
    $InitializeEvent(1, 1248552840, 1248550801, 1248550811, 1248552801);
    $InitializeCommonEvent(0, 90005871, 1248550800, 903150608, 10, 1248550810);
    $InitializeCommonEvent(0, 90005871, 1248550801, 903150609, 10, 1248550811);
    $InitializeCommonEvent(0, 1248552800, 1248550800, 0, 1248550800, 0, 1048550700, 1248550801, 1048550710);
    $InitializeEvent(0, 1248552321, 1248550800, 1248550801, 10, 1248552815);
    $InitializeEvent(0, 1248552320, 1248550800, 1248550801);
});

// プリコンストラクタ_LOD2 -- Preconstructor_LOD2
$Event(250, Default, function() {
    $InitializeCommonEvent(0, 90005420, 1248550300, 1248551300, 1248551301, 1248550301, 1248550302, 1248550303, 0);
});

// ツリーガード_BGMHU管理 -- Tree guard_BGMHU management
$Event(1248552320, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(1248550800));
    WaitFor(
        CharacterDead(chrEntityId)
            || CharacterDead(chrEntityId2)
            || (HPRatio(chrEntityId) <= 0.5 && HPRatio(chrEntityId2) <= 0.5));
    SetNetworkconnectedEventFlagID(1248552815, ON);
});

// フィールドボス_HU通知_ボス2体用 -- Field boss_HU notification_for 2 bosses
$Event(1248552321, Default, function(chrEntityId, chrEntityId2, npcThreatLevel, eventFlagId) {
    DisableNetworkSync();
    WaitFor(EventFlag(eventFlagId) && FieldBattleBGMActive(npcThreatLevel));
    SetFieldBattleBGMHeatUp(npcThreatLevel, true);
    WaitFor(
        (CharacterDead(chrEntityId) && CharacterDead(chrEntityId2))
            || !FieldBattleBGMActive(npcThreatLevel));
    SetFieldBattleBGMHeatUp(npcThreatLevel, false);
    WaitFixedTimeSeconds(0.3);
    RestartEvent();
});

// ルーン狩りの騎士２体戦_フィールドボス撃破 -- Battle of 2 Rune Hunting Knights_Defeat the field boss
$Event(1248552800, Restart, function(eventFlagId, eventFlagId2, chrEntityId, value, itemLotId, chrEntityId2, itemLotId2) {
    if (Signed(itemLotId) != 0) {
        Unknown200476(eventFlagId, itemLotId);
    }
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId, false);
        ForceCharacterDeath(chrEntityId2, false);
        DisableCharacter(1248550810);
        DisableCharacterCollision(1248550810);
        ForceCharacterDeath(1248550810, false);
        DisableCharacter(1248550811);
        DisableCharacterCollision(1248550811);
        ForceCharacterDeath(1248550811, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(itemLotId) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(itemLotId2);
        AwardItemsIncludingClients(itemLotId);
        EndEvent();
    }
L0:
    EndIf(!EventFlag(1049308095)); //end if boss not selected
    WaitFor(CharacterHPValue(chrEntityId) <= 0 && CharacterHPValue(chrEntityId2) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(chrEntityId) && CharacterDead(chrEntityId2));
    GotoIf(S0, value == 3);
    if (value != 2) {
        if (value != 1) {
            HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.EnemyFelled);
            Goto(L1);
        }
        HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.GreatEnemyFelled);
    }
    Goto(L1);
S0:
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.DemigodFelled);
    Goto(L1);
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.LegendFelled);
L1:
    //boss rewards (2 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001032, 1049304259, 1049304148, -1, -1, 1049307108, 1049307109, 1049307110, 1049306059, 1049306064, 1049306066, 1049300259);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307495);
    EndEvent(); //end
    SetEventFlagID(eventFlagId, ON);
    if (eventFlagId2 != 0) {
        SetEventFlagID(eventFlagId2, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(itemLotId) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(itemLotId2);
    AwardItemsIncludingClients(itemLotId);
    EndEvent();
});

// ルーン狩りの騎士_時間帯によって馬召喚を禁止する_xx -- Knight of the Rune Hunt_Horse summoning is prohibited depending on the time of day_xx
$Event(1248552820, Restart, function(chrEntityId, timeSeconds) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(chrEntityId, 11825)) {
        WaitFor(TimeOfDayInRange(19, 59, 59, 5, 59, 59));
        SetSpEffect(chrEntityId, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(TimeOfDayInRange(5, 59, 59, 19, 59, 59));
    SetSpEffect(chrEntityId, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
    WaitFixedTimeSeconds(timeSeconds);
});

// ルーン狩りの騎士_時間帯によってキャラ当たりを無効化する_xx -- Rune Hunting Knight_Disable character hits depending on the time of day_xx
$Event(1248552830, Restart, function(chrEntityId, chrEntityId2) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    WaitFor(CharacterBackreadStatus(chrEntityId));
    if (!CharacterHasSpEffect(chrEntityId, 11830)) {
        sp &= CharacterHasSpEffect(chrEntityId, 11830);
        WaitFor(sp);
        DisableCharacterCollision(chrEntityId);
        DisableCharacterCollision(chrEntityId2);
        EnableCharacterInvincibility(chrEntityId);
        EnableCharacterInvincibility(chrEntityId2);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    DisableCharacterCollision(chrEntityId);
    DisableCharacterCollision(chrEntityId2);
    EnableCharacterInvincibility(chrEntityId);
    EnableCharacterInvincibility(chrEntityId2);
    sp &= CharacterHasSpEffect(chrEntityId, 11831);
    WaitFor(sp);
    EnableCharacterCollision(chrEntityId);
    EnableCharacterCollision(chrEntityId2);
    DisableCharacterInvincibility(chrEntityId);
    DisableCharacterInvincibility(chrEntityId2);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// ルーン狩りの騎士_初期ワープ_xx -- Rune Hunting Knight_Initial Warp_xx
$Event(1248552840, Restart, function(chrEntityId, chrEntityId2, chrEntityId3) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    WaitFor(CharacterBackreadStatus(chrEntityId));
    DisableCharacterAI(chrEntityId);
    DisableCharacterAI(chrEntityId2);
    WaitFixedTimeSeconds(1.5);
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId3, -1, chrEntityId);
    WarpCharacterAndCopyFloor(chrEntityId2, TargetEntityType.Area, chrEntityId3, -1, chrEntityId2);
    EnableCharacterAI(chrEntityId);
    EnableCharacterAI(chrEntityId2);
});

