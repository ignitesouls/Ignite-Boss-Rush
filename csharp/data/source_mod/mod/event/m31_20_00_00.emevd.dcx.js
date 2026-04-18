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
    $InitializeEvent(0, 31202800);
    $InitializeEvent(0, 31202801);
    $InitializeEvent(0, 31202802);
    $InitializeEvent(0, 31202810);
    $InitializeEvent(0, 31202811);
    $InitializeEvent(0, 31092849);
    $InitializeCommonEvent(0, 900005610, 31201200, 100, 800, 0);
    RegisterBonfire(31200000, 31201950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005646, 31200800, 31202840, 31202841, 31201840, 31202840, 31, 20, 0, 0);
    $InitializeEvent(0, 31202550, 31200455, 31201555, 5, 0);
    $InitializeEvent(2, 31202550, 31200465, 31201565, 5, 0);
    $InitializeEvent(3, 31202550, 31200470, 31201570, 5, 1);
    $InitializeEvent(5, 31202550, 31200475, 31201575, 5, 2);
    $InitializeEvent(1, 31202550, 31200480, 31201580, 5, 3);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005200, 31200240, 30000, 20000, 31202240, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005200, 31200241, 30000, 20000, 31202240, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005200, 31200242, 30000, 20000, 31202240, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(3, 90005200, 31200243, 30000, 20000, 31202240, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 31200230, 31202230, 0, 0);
    $InitializeCommonEvent(1, 90005250, 31200231, 31202230, 0, 0);
});

// 洞窟_ボス部屋報酬宝箱の開放制限 -- Cave_Boss room reward treasure chest opening limit
$Event(31202520, Restart, function(eventFlagId, eventFlagId2, assetEntityId) {
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

// 洞窟用間欠泉トラップ_XX -- Geyser trap for cave_XX
$Event(31202550, Restart, function(chrEntityId, entityId, timeSeconds, timeSeconds2) {
    WaitFixedTimeSeconds(timeSeconds);
    WaitFor(EntityInRadiusOfEntity(10000, entityId, 70, 1));
    WaitFixedTimeSeconds(timeSeconds2);
    if (EventFlag(50)) {
        ShootBullet(chrEntityId, entityId, -1, 802730000, 0, 0, 0);
    }
    if (EventFlag(51)) {
        ShootBullet(chrEntityId, entityId, -1, 802730010, 0, 0, 0);
    }
    if (EventFlag(52)) {
        ShootBullet(chrEntityId, entityId, -1, 802730020, 0, 0, 0);
    }
    if (EventFlag(53)) {
        ShootBullet(chrEntityId, entityId, -1, 802730030, 0, 0, 0);
    }
    if (EventFlag(54)) {
        ShootBullet(chrEntityId, entityId, -1, 802730040, 0, 0, 0);
    }
    if (EventFlag(55)) {
        ShootBullet(chrEntityId, entityId, -1, 802730050, 0, 0, 0);
    }
    if (EventFlag(56)) {
        ShootBullet(chrEntityId, entityId, -1, 802730060, 0, 0, 0);
    }
    if (EventFlag(57)) {
        ShootBullet(chrEntityId, entityId, -1, 802730070, 0, 0, 0);
    }
    RestartEvent();
});

//cleanrot x2
$Event(31202800, Restart, function() {
    EndIf(!EventFlag(1049308140)); //end if boss not selected
    EndIf(EventFlag(31200800));
    WaitFor(CharacterDead(31200800) && CharacterDead(31200801));
    WaitFixedTimeSeconds(4);
    HandleBossDefeatAndDisplayBanner(31200800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304146, 1049304047, -1, 1049304004, 1049304606, 1049304607, 1049304608, 1049304609, -1, 1049304731, 1049304734, 1049304739, 1049300146);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307540);
});

// 貴腐の騎士_槍_死亡時の撃破演出 -- Noble Rot Knight_Spear_Defeat performance upon death
$Event(31202801, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterHPValue(31200800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31200800, SoundType.SFX, 888880000);
});

// 結晶の部族_槍_死亡時の撃破演出 -- Crystal Tribe_Spear_Defeat performance upon death
$Event(31202802, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterHPValue(31200801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31200801, SoundType.SFX, 888880000);
});

// ボス出現 -- Boss appears
$Event(31202810, Restart, function() {
    if (EventFlag(31200800)) {
        DisableCharacter(31200800);
        DisableCharacter(31200801);
        DisableCharacterCollision(31200800);
        DisableCharacterCollision(31200801);
        ForceCharacterDeath(31200800, false);
        ForceCharacterDeath(31200801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31200800);
    DisableCharacterAI(31200801);
    ForceAnimationPlayback(31200800, 30001, false, false, false);
    WaitFor(EventFlag(31202805) && InArea(10000, 31202800));
L2:
    EnableCharacterAI(31200800);
    SetNetworkUpdateRate(31200800, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(1);
    DisplayBossHealthBar(Enabled, 31200800, 0, 903800311);
    ForceAnimationPlayback(31200800, 20001, false, false, false);
    WaitFixedTimeSeconds(5);
    EnableCharacterAI(31200801);
    SetNetworkUpdateRate(31200801, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFor(HasDamageType(31200801, 0, DamageType.Unspecified) || ElapsedSeconds(7));
    DisplayBossHealthBar(Enabled, 31200801, 1, 903800312);
});

// ボス激昂 -- boss rage
$Event(31202811, Restart, function() {
    EndIf(EventFlag(31200800));
    WaitFor(CharacterDead(31200800) || CharacterDead(31200801));
    SetEventFlagID(31202842, ON);
});

// ボス_イベント起動 -- Boss_event activation
$Event(31092849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31200800, 31201800, 31202800, 31202805, 31205800, 10010, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31200800, 31201800, 31202800, 31202805, 31202806, 10010);
    $InitializeCommonEvent(0, 9005811, 31200800, 31201800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 31200800, 931000, 31202805, 31202806, 0, 31202842, 0, 0);
});

