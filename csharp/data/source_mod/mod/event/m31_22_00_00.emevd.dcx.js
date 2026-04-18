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
    RegisterBonfire(31220000, 31221950, 0, 0, 0, 5);
    $InitializeEvent(0, 31222800);
    $InitializeEvent(0, 31222810);
    $InitializeEvent(0, 31222811);
    $InitializeEvent(0, 31222812);
    $InitializeEvent(0, 31222849);
    $InitializeEvent(0, 31222813, 31220800, 31222821);
    $InitializeEvent(1, 31222813, 31220802, 31222820);
    $InitializeCommonEvent(0, 900005610, 31221200, 100, 800, 0);
    $InitializeEvent(0, 31222500);
    $InitializeCommonEvent(0, 90005646, 31220800, 31222840, 31222841, 31221840, 31222840, 31, 22, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005250, 31220211, 31222304, 0, 0);
    $InitializeCommonEvent(0, 90005250, 31220212, 31222304, 0, 0);
    $InitializeEvent(0, 31222300);
    $InitializeEvent(0, 31222306);
    $InitializeEvent(0, 31222312);
    $InitializeEvent(0, 31222305);
    $InitializeEvent(0, 31222317);
    $InitializeEvent(0, 31222301);
    $InitializeEvent(0, 31222316);
    $InitializeEvent(0, 31222303);
    $InitializeEvent(0, 31222313);
    $InitializeEvent(0, 31222304);
    $InitializeEvent(0, 31222330);
    $InitializeEvent(0, 31222340, 31220400, 31222304, 0.1);
    $InitializeEvent(1, 31222340, 31220402, 31222305, 0.1);
    $InitializeEvent(2, 31222340, 31220403, 31222306, 0.1);
});

// 狼召喚_森奥地 -- Wolf Summon_Forest Deep
$Event(31222300, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31222300)
            && CharacterHasSpEffect(31220300, 15007)
            && CharacterDead(31220304));
    EnableGenerator(31223300);
    SetNetworkconnectedThisEventSlot(ON);
});

// 狼召喚_穴通路 -- Wolf summon_hole passage
$Event(31222301, Restart, function() {
    EndIf(EventFlag(31222301));
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 31222301)
            && CharacterHasSpEffect(31220302, 15007));
    EnableGenerator(31223301);
    SetNetworkconnectedEventFlagID(31222301, ON);
});

// 狼召喚_小森 -- Wolf summon_Komori
$Event(31222303, Restart, function() {
    EndIf(flagChrSpArea);
    flagChrSpArea |= ThisEventSlot();
    flagChrSpArea |= ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, 31222303)
        && CharacterHasSpEffect(31220301, 15007);
    WaitFor(flagChrSpArea);
    EnableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

// 騎士召喚_森の前 -- Knight Summon_In front of the forest
$Event(31222304, Restart, function() {
    EndIf(flagChrSpArea);
    flagChrSpArea |= ThisEventSlot();
    flagChrSpArea |= ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom))
        && InArea(10000, 31222302);
    WaitFor(flagChrSpArea);
    ForceAnimationPlayback(31220303, 3002, false, true, false);
    EnableGenerator(31223302);
    SetNetworkconnectedThisEventSlot(ON);
});

// 追加敵召喚_森途中 -- Additional enemy summons_Middle of the forest
$Event(31222305, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(31220304, AIStateType.Combat)
            || HasDamageType(31220304, 0, DamageType.Unspecified));
    ForceAnimationPlayback(31220304, 3002, false, true, false);
    EnableGenerator(31223304);
    SetNetworkconnectedThisEventSlot(ON);
});

// 追加敵召喚_森奥地 -- Additional Enemy Summon_Forest Deep
$Event(31222306, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterAIState(31220300, AIStateType.Combat)
            || HasDamageType(31220300, 0, DamageType.Unspecified));
    ForceAnimationPlayback(31220300, 3002, false, true, false);
    EnableGenerator(31223305);
    SetNetworkconnectedThisEventSlot(ON);
});

// 狼召喚停止_森奥地 -- Stop summoning wolves_deep in the forest
$Event(31222311, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(31220300, 0, DamageType.Unspecified) || CharacterDead(31220300));
    DisableGenerator(31223300);
    SetNetworkconnectedThisEventSlot(ON);
});

// 召喚された狼を殺す_森奥地 -- Kill the summoned wolf _ deep in the forest
$Event(31222312, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220300));
    ForceCharacterDeath(31220201, true);
    ForceCharacterDeath(31220211, true);
    ForceCharacterDeath(31220204, true);
    ForceCharacterDeath(31220212, true);
    ForceCharacterDeath(31220228, true);
    ForceCharacterDeath(31220213, true);
    ForceCharacterDeath(31220403, true);
    ForceCharacterDeath(31220230, true);
    DisableGenerator(31223300);
    SetNetworkconnectedThisEventSlot(ON);
});

// 召喚された狼を殺す_森途中 -- Kill the summoned wolf_Middle of the forest
$Event(31222317, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220304));
    ForceCharacterDeath(31220227, true);
    ForceCharacterDeath(31220226, true);
    ForceCharacterDeath(31220200, true);
    ForceCharacterDeath(31220221, true);
    ForceCharacterDeath(31220222, true);
    ForceCharacterDeath(31220402, true);
    ForceCharacterDeath(31220229, true);
    DisableGenerator(31223304);
    SetNetworkconnectedThisEventSlot(ON);
});

// 狼召喚停止_小森 -- Stop summoning wolves_Komori
$Event(31222314, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(31220301, 0, DamageType.Unspecified) || CharacterDead(31220301));
    DisableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

// 召喚された狼を殺す_小森 -- Kill the summoned wolf_Komori
$Event(31222313, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220301));
    ForceCharacterDeath(31220210, true);
    ForceCharacterDeath(31220202, true);
    ForceCharacterDeath(31220220, true);
    DisableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

// 狼召喚停止_穴通路 -- Stop summoning wolves_hole passage
$Event(31222315, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(HasDamageType(31220302, 0, DamageType.Unspecified) || CharacterDead(31220302));
    DisableGenerator(31223303);
    SetNetworkconnectedThisEventSlot(ON);
});

// 召喚された狼を殺す_穴通路 -- Kill the summoned wolf_hole passage
$Event(31222316, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220302));
    ForceCharacterDeath(31220223, true);
    ForceCharacterDeath(31220224, true);
    ForceCharacterDeath(31220225, true);
    DisableGenerator(31223301);
    SetNetworkconnectedThisEventSlot(ON);
});

// 召喚された騎士を殺す_森の前 -- Kill the summoned knight_in front of the forest
$Event(31222330, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(CharacterDead(31220303));
    ForceCharacterDeath(31220400, true);
    DisableGenerator(31223302);
    SetNetworkconnectedThisEventSlot(ON);
});

// NPC敵ジェネレータアニメ対応_XX -- NPC enemy generator anime compatible_XX
$Event(31222340, Restart, function(entityId, eventFlagId, timeSeconds) {
    EndIf(ThisEventSlot());
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(timeSeconds);
    ForceAnimationPlayback(entityId, 60502, false, false, false);
    SetNetworkconnectedThisEventSlot(ON);
});

// 落とし穴 -- Pitfall
$Event(31222500, Restart, function() {
    if (EventFlag(31220500)) {
        DisableAsset(31221500);
        EndEvent();
    }
L0:
    WaitFor(InArea(10000, 31222500));
    RequestAssetDestruction(31221500, 1);
    SetEventFlagID(31220500, ON);
});

// 洞窟_ボス部屋報酬宝箱の開放制限 -- Cave_Boss room reward treasure chest opening limit
$Event(31222520, Restart, function(eventFlagId, eventFlagId2, assetEntityId) {
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

//spiritcaller snail
$Event(31222800, Restart, function() {
    EndIf(!EventFlag(1049308150)); //end if boss not selected
    EndIf(EventFlag(31220800));
    WaitFor(CharacterHPValue(31220800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31220800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31220800));
    HandleBossDefeatAndDisplayBanner(31220800, TextBannerType.EnemyFelled);
    ForceCharacterDeath(31220803, false);
    DisableCharacter(31220803);
    DisableCharacterCollision(31220803);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304223, 1049304128, 1049304118, -1, 1049304955, 1049304956, 1049304957, 1049304958, 1049305656, 1049305659, 1049305661, 1049305663, 1049300223);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307550);
});

// ボス出現 -- Boss appears
$Event(31222810, Restart, function() {
    if (EventFlag(31220800)) {
        DisableCharacter(31220801);
        DisableCharacterCollision(31220801);
        ForceCharacterDeath(31220801, false);
        DisableCharacter(31220800);
        DisableCharacterCollision(31220800);
        ForceCharacterDeath(31220800, false);
        DisableCharacter(31220802);
        DisableCharacterCollision(31220802);
        ForceCharacterDeath(31220802, false);
        DisableCharacter(31220803);
        DisableCharacterCollision(31220803);
        ForceCharacterDeath(31220803, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31220800);
    DisableCharacterAI(31220801);
    flagArea = EventFlag(31222805) && InArea(10000, 31222800);
    dmg = HasDamageType(31220800, 10000, DamageType.Unspecified);
    WaitFor(flagArea);
    EnableCharacterCollision(31220801);
    SetNetworkUpdateRate(31220801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31220801, 0, 903560310);
    WaitFixedTimeSeconds(1.5);
    EnableCharacterAI(31220801);
    SetSpEffect(31220803, 297810);
    DisableCharacterCollision(31220803);
    SetNetworkUpdateRate(31220803, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// ボス出現_神父アナザー -- Boss appearance_Priest Another
$Event(31222811, Restart, function() {
    EndIf(EventFlag(31220800));
    WaitFor(CharacterDead(31220801));
    DisplayBossHealthBar(Disabled, 31220801, 0, 903560310);
    SetEventFlagID(31222842, ON);
    WaitFixedTimeSeconds(5);
    EnableGenerator(31223307);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(31222820, ON);
    EnableCharacterAI(31220802);
    EnableCharacterCollision(31220802);
    SetNetworkUpdateRate(31220802, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31220802, 0, 903570310);
});

// ボス出現_白蛇つむり -- Boss appearance_White snake Tsumuri
$Event(31222812, Restart, function() {
    EndIf(EventFlag(31220800));
    WaitFor(CharacterDead(31220802));
    DisplayBossHealthBar(Disabled, 31220802, 0, 903570310);
    WaitFixedTimeSeconds(5);
    EnableGenerator(31223308);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedEventFlagID(31222821, ON);
    DisplayBossHealthBar(Enabled, 31220800, 0, 904140310);
    EnableCharacterAI(31220800);
    EnableCharacterCollision(31220800);
    ForceAnimationPlayback(31220800, 3011, false, true, false);
    SetNetworkUpdateRate(31220800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31220800, 0, 904140310);
    WaitFixedTimeSeconds(3);
    ForceAnimationPlayback(31220800, 1702, false, false, false);
    SetSpEffect(31220800, 297811);
});

// マルチドーピング対応_XX -- Multi-doping compatible_XX
$Event(31222813, Restart, function(chrEntityId, eventFlagId) {
    EndIf(EventFlag(31220800));
    WaitFor(
        EventFlag(eventFlagId)
            && !CharacterDead(chrEntityId)
            && !HasMultiplayerState(MultiplayerState.Singleplayer));
    ActivateMultiplayerdependantBuffs(chrEntityId);
    WaitFixedTimeSeconds(3);
    if (!(CharacterHasSpEffect(chrEntityId, 7820)
        || CharacterHasSpEffect(chrEntityId, 7821)
        || CharacterHasSpEffect(chrEntityId, 7822))) {
        RestartEvent();
    }
});

// ボス_イベント起動 -- Boss_event activation
$Event(31222849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31220800, 31221800, 31222800, 31222805, 31225800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31220800, 31221800, 31222800, 31222805, 31222806, 10000);
    $InitializeCommonEvent(0, 9005811, 31220800, 31221800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 31220800, 356000, 31222805, 31222806, 0, 0, 0, 0);
});

