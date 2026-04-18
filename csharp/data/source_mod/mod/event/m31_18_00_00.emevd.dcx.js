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
    RegisterBonfire(311800, 31181950, 0, 0, 0, 5);
    $InitializeEvent(0, 31182800);
    $InitializeEvent(0, 31182801);
    $InitializeEvent(0, 31182802);
    $InitializeEvent(0, 31182810);
    $InitializeEvent(0, 31182849);
    $InitializeEvent(0, 31182811);
    $InitializeCommonEvent(0, 90005646, 31180800, 31182840, 31182841, 31181840, 31182840, 31, 18, 0, 0);
    $InitializeEvent(0, 31182500, 31181500, 200, 800023, 402001);
    $InitializeEvent(1, 31182500, 31181501, 200, 800023, 402001);
    $InitializeEvent(2, 31182500, 31181502, 200, 800023, 402001);
    $InitializeEvent(3, 31182500, 31181503, 200, 800023, 402001);
    $InitializeEvent(4, 31182500, 31181504, 200, 800023, 402001);
    $InitializeEvent(5, 31182500, 31181505, 200, 800023, 402001);
    $InitializeEvent(6, 31182500, 31181506, 200, 800023, 402001);
    $InitializeEvent(7, 31182500, 31181507, 200, 800023, 402001);
    $InitializeEvent(8, 31182500, 31181508, 200, 800023, 402001);
    $InitializeEvent(0, 31182515);
    $InitializeCommonEvent(0, 900005610, 31181200, 100, 800, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 31180200, 31182200, 2, 3.4, 0);
    $InitializeCommonEvent(0, 90005261, 31180202, 31182200, 2, 3, 0);
    $InitializeCommonEvent(0, 90005211, 31180203, 30000, 20000, 31182203, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31180207, 30000, 20000, 31182207, 2, 2, 0, 0, 0, 0);
    $InitializeEvent(0, 31182200, 31180200, 31182250);
    $InitializeEvent(1, 31182200, 31180201, 31182251);
    $InitializeEvent(2, 31182200, 31180202, 31182252);
    $InitializeEvent(3, 31182200, 31180207, 31182257);
    $InitializeCommonEvent(0, 90005261, 31180300, 31182300, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31180306, 31182306, 2, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31180307, 31182307, 2, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31180310, 30000, 20000, 31182310, 0, 9, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31180311, 30000, 20000, 31182310, 0, 10, 1, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31180314, 31182314, 10, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31180315, 31182314, 10, 0.5, 0);
    $InitializeCommonEvent(0, 90005261, 31180351, 31182351, 2, 0, 3001);
    $InitializeCommonEvent(0, 90005261, 31180355, 31182355, 2, 0, 0);
    $InitializeEvent(0, 31182402, 31180400, 31182400, 3, 0, 3012, 32052401);
    $InitializeCommonEvent(0, 90005300, 31180400, 31180400, 0, 0, 0);
    $InitializeEvent(0, 31182400);
});

// テスト用イベント_光源テスト_XX -- Test event_Light source test_XX
$Event(31182500, Restart, function(assetEntityId, dummypolyId, sfxId, sfxId2) {
    CreateAssetfollowingSFX(assetEntityId, dummypolyId, sfxId);
    CreateAssetfollowingSFX(assetEntityId, dummypolyId, sfxId2);
});

// テスト用イベント_領域にSFX_XX -- SFX_XX in the test event_area
$Event(31182515, Restart, function() {
    SpawnOneshotSFX(TargetEntityType.Area, 31182515, -1, 802020);
});

// 調香魔術師の視界制限_XX -- Perfume magician's visibility limit_XX
$Event(31182200, Restart, function(chrEntityId, areaEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 8082);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    WaitFor(
        (chrSp && EntityInRadiusOfEntity(10000, chrEntityId, 6, 1))
            || (chrSp && InArea(10000, areaEntityId))
            || CharacterAIState(chrEntityId, AIStateType.Alert)
            || CharacterAIState(chrEntityId, AIStateType.Combat)
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
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
    ClearSpEffect(chrEntityId, 8082);
    SetNetworkconnectedThisEventSlot(ON);
});

// アステール_初期待機バグ対応 -- Aster_Initial standby bug fixed
$Event(31182400, Restart, function() {
    EndIf(CharacterDead(31180400));
    ForceAnimationPlayback(31180400, 0, false, false, false);
});

// アステール撃破 -- Defeat Aster
$Event(31182401, Restart, function() {
    EndIf(EventFlag(31180400));
    chr = CharacterDead(31180400);
    SetEventFlagID(31180400, ON);
});

// アステール特殊待機対応 -- Aster special standby support
$Event(31182402, Restart, function(chrEntityId, areaEntityId, targetDistance, timeSeconds, animationId, areaEntityId2) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = InArea(10000, areaEntityId2)
        || InArea(10000, areaEntityId)
        || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    sp = CharacterHasSpEffect(chrEntityId, 481)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90110)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    sp2 = CharacterHasSpEffect(chrEntityId, 482)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90120)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp3 = CharacterHasSpEffect(chrEntityId, 483)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90140)
        && !CharacterHasSpEffect(chrEntityId, 90160)
        && !CharacterHasSpEffect(chrEntityId, 90161);
    sp4 = CharacterHasSpEffect(chrEntityId, 484)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90130)
        && !CharacterHasSpEffect(chrEntityId, 90161)
        && !CharacterHasSpEffect(chrEntityId, 90162);
    sp5 = CharacterHasSpEffect(chrEntityId, 487)
        && !CharacterHasSpEffect(chrEntityId, 90100)
        && !CharacterHasSpEffect(chrEntityId, 90150)
        && !CharacterHasSpEffect(chrEntityId, 90160);
    areaChrSp = area && chrSp;
    WaitFor(
        HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || areaChrSp
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (!InArea(10000, areaEntityId2)) {
            if (Signed(animationId) != -1) {
                ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
            }
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

//omenkiller + miranda
$Event(31182800, Restart, function() {
    EndIf(!EventFlag(1049308149)); //end if boss not selected
    EndIf(EventFlag(31180800));
    WaitFor(CharacterDead(31180800) && CharacterDead(31180801));
    HandleBossDefeatAndDisplayBanner(31180800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304199, 1049304075, -1, -1, 1049304849, 1049304850, 1049304851, 1049304852, 1049305373, 1049305376, 1049305378, 1049305384, 1049300199);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307549);
});

// ルーンを喰う花色違い_死亡時の撃破演出 -- Flowers that eat runes are different colors_defeat performance when dying
$Event(31182801, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterHPValue(31180800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31180800, SoundType.SFX, 888880000);
});

// さまよえる処刑者_死亡時の撃破演出 -- Wandering Executioner_Defeat performance upon death
$Event(31182802, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterHPValue(31180801) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(31180801, SoundType.SFX, 888880000);
});

// ボス出現 -- Boss appears
$Event(31182810, Restart, function() {
    if (EventFlag(31180800)) {
        DisableCharacter(31180800);
        DisableCharacter(31180801);
        DisableCharacterCollision(31180800);
        DisableCharacterCollision(31180801);
        ForceCharacterDeath(31180800, false);
        ForceCharacterDeath(31180801, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(31180800);
    DisableCharacterAI(31180801);
    ForceAnimationPlayback(31180800, 30001, false, false, false);
    WaitFor(EventFlag(31182805) && InArea(10000, 31182800));
L2:
    DisplayBossHealthBar(Enabled, 31180800, 0, 904480310);
    DisplayBossHealthBar(Enabled, 31180801, 1, 904820310);
    WaitFixedTimeSeconds(0.5);
    EnableCharacterAI(31180800);
    EnableCharacterCollision(31180800);
    SetNetworkUpdateRate(31180800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(31180800, 20001, false, false, false);
    EnableCharacterAI(31180801);
    EnableCharacterCollision(31180801);
    SetNetworkUpdateRate(31180801, true, CharacterUpdateFrequency.AlwaysUpdate);
});

// ボス激昂 -- boss rage
$Event(31182811, Restart, function() {
    EndIf(EventFlag(31180800));
    WaitFor(CharacterDead(31180800) || CharacterDead(31180801));
    SetEventFlagID(31182842, ON);
});

// ボス_イベント起動 -- Boss_event activation
$Event(31182849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31180800, 31181800, 31182800, 31182805, 31185800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 31180800, 31181800, 31182800, 31182805, 31182806, 10000);
    $InitializeCommonEvent(0, 9005811, 31180800, 31181800, 5, 0);
    $InitializeCommonEvent(0, 9005822, 31180800, 920900, 31182805, 31182806, 0, 31182842, 0, 0);
});

