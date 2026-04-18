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
    RegisterBonfire(31090000, 31091950, 0, 0, 0, 5);
    $InitializeEvent(0, 31092800);
    $InitializeEvent(0, 31092810);
    $InitializeEvent(0, 31092849);
    $InitializeEvent(0, 31092811);
    $InitializeCommonEvent(0, 900005610, 31091200, 100, 800, 0);
    $InitializeCommonEvent(0, 90005261, 31090200, 31092200, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090201, 30001, 20001, 31092201, 1, 1.4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090202, 30002, 20002, 31092201, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090203, 30000, 20000, 31092201, 1, 1.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090205, 30000, 20000, 31092201, 1, 1.8, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090214, 30002, 20002, 31092214, 1, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090215, 30002, 20002, 31092214, 1, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090218, 30001, 20001, 31092214, 1, 0.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090251, 30002, 20002, 31092214, 1, 0.8, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31090254, 31092254, 1, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31090256, 30002, 20002, 31092256, 5, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 31092301, 31090227, 1);
    $InitializeEvent(1, 31092301, 31090258, 0.5);
    $InitializeEvent(2, 31092301, 31090301, 1);
    $InitializeCommonEvent(0, 90005261, 31090350, 31092350, 2, 0, 0);
    $InitializeEvent(0, 31092350);
    $InitializeEvent(0, 31092351);
    $InitializeEvent(0, 31092300);
    $InitializeCommonEvent(0, 90005646, 31090800, 31092840, 31092841, 31091840, 31092840, 31, 9, 0, 0);
});

// 亜人エリート_仲間がダメージor侵入or接近で起動_中層のサブ部屋 -- Demi-Human Elite_Activates when allies receive damage, intrusion, or approach_Medium floor sub room
$Event(31092300, Restart, function() {
    EndIf(CharacterDead(31090300));
    EndIf(SpecialStandbyEndedFlag(31090300));
    DisableCharacterAI(31090300);
    ForceAnimationPlayback(31090300, 30002, false, false, false);
    WaitFor(
        HasDamageType(31090227, 0, DamageType.Unspecified)
            || HasDamageType(31090258, 0, DamageType.Unspecified)
            || HasDamageType(31090300, 0, DamageType.Unspecified)
            || HasDamageType(31090301, 0, DamageType.Unspecified)
            || EntityInRadiusOfEntity(31090300, 10000, 3, 1)
            || InArea(10000, 31092301)
            || (CharacterHasSpEffect(31090300, 481)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90110)
                && !CharacterHasSpEffect(31090300, 90160))
            || (CharacterHasSpEffect(31090300, 482)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90120)
                && !CharacterHasSpEffect(31090300, 90160)
                && !CharacterHasSpEffect(31090300, 90162))
            || (CharacterHasSpEffect(31090300, 483)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90140)
                && !CharacterHasSpEffect(31090300, 90160)
                && !CharacterHasSpEffect(31090300, 90161))
            || (CharacterHasSpEffect(31090300, 484)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90130)
                && !CharacterHasSpEffect(31090300, 90161)
                && !CharacterHasSpEffect(31090300, 90162))
            || (CharacterHasSpEffect(31090300, 487)
                && !CharacterHasSpEffect(31090300, 90100)
                && !CharacterHasSpEffect(31090300, 90150)
                && !CharacterHasSpEffect(31090300, 90160)));
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(31090300);
    ForceAnimationPlayback(31090300, 20002, false, false, true);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(31090300, ON);
});

// 亜人_仲間がダメージor侵入or接近で起動_中層のサブ部屋_XX -- Demi-human_Activates when allies receive damage, intrusion, or approach_Medium floor sub-room_XX
$Event(31092301, Restart, function(chrEntityId, timeSeconds) {
    EndIf(CharacterDead(chrEntityId) || ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    WaitFor(
        HasDamageType(31090227, 0, DamageType.Unspecified)
            || HasDamageType(31090258, 0, DamageType.Unspecified)
            || HasDamageType(31090300, 0, DamageType.Unspecified)
            || HasDamageType(31090301, 0, DamageType.Unspecified)
            || AssetDestroyed(31091550, Equal, 1)
            || AssetDestroyed(31091551, Equal, 1)
            || AssetDestroyed(31091552, Equal, 1)
            || AssetDestroyed(31091553, Equal, 1)
            || AssetDestroyed(31091554, Equal, 1)
            || AssetDestroyed(31091555, Equal, 1)
            || AssetDestroyed(31091556, Equal, 1)
            || AssetDestroyed(31091557, Equal, 1)
            || AssetDestroyed(31091558, Equal, 1)
            || EntityInRadiusOfEntity(chrEntityId, 10000, 3, 1)
            || InArea(10000, 31092301)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    WaitFixedTimeSeconds(timeSeconds);
    EnableCharacterAI(chrEntityId);
    SetNetworkconnectedThisEventSlot(ON);
});

// バーサーカー_聴覚無効特殊効果の追加_XX -- Berserker_Addition of hearing nullification special effects_XX
$Event(31092350, Restart, function() {
    EndIf(CharacterDead(31090350));
    WaitFor(!CharacterHasSpEffect(31090350, 8081) && !InArea(10000, 31092351));
    SetSpEffect(31090350, 8081);
    RestartEvent();
});

// バーサーカー_聴覚無効特殊効果の削除_XX -- Berserker_Removal of hearing nullification special effects_XX
$Event(31092351, Restart, function() {
    EndIf(CharacterDead(31090350));
    WaitFor(CharacterHasSpEffect(31090350, 8081) && !InArea(10000, 31092351));
    ClearSpEffect(31090350, 8081);
    RestartEvent();
});

//demi-human queen margot
$Event(31092800, Restart, function() {
    EndIf(!EventFlag(1049308144)); //end if boss not selected
    EndIf(EventFlag(31090800));
    WaitFor(CharacterHPValue(31090800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31090800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(31090800));
    HandleBossDefeatAndDisplayBanner(31090800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001034, 1049304178, 1049304056, -1, -1, 1049304753, 1049304754, 1049304755, 1049304756, 1049304757, 1049305118, 1049305121, 1049305123, 1049305125, 1049305127, 1049300178);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307544);
});

// ボス出現 -- Boss appears
$Event(31092810, Restart, function() {
    if (EventFlag(31090800)) {
        DisableCharacter(31090800);
        DisableCharacterCollision(31090800);
        ForceCharacterDeath(31090800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31090800);
    SetSpEffect(31090800, 8092);
    WaitFor(EventFlag(31092805) && InArea(10000, 31092800));
L2:
    EnableCharacterAI(31090800);
    SetNetworkUpdateRate(31090800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31090800, 0, 904130310);
});

// ボス激昂 -- boss rage
$Event(31092811, Restart, function() {
    EndIf(EventFlag(31090800));
    WaitFor(HPRatio(31090800) <= 0.6);
    SetEventFlagID(31092802, ON);
});

// ボス_イベント起動 -- Boss_event activation
$Event(31092849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31090800, 31091800, 31092800, 31092805, 31095800, 10010, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31090800, 31091800, 31092800, 31092805, 31092806, 10010);
    $InitializeCommonEvent(0, 9005811, 31090800, 31091800, 5, 0);
    $InitializeCommonEvent(0, 9005822, 31090800, 931000, 31092805, 31092806, 0, 31092802, 0, 0);
});

