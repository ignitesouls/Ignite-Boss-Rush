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
    RegisterBonfire(32070000, 32071950, 0, 0, 0, 5);
    RegisterBonfire(32070001, 32071951, 0, 0, 0, 5);
    $InitializeEvent(0, 32072810);
    $InitializeEvent(0, 32072800);
    $InitializeEvent(0, 32072811);
    $InitializeEvent(0, 32072849);
    $InitializeEvent(0, 32072200, 32070200, 30004, 20004, 32070310, 16576, 1, 0, 0, 0, 0, 32071608, 0, 0, 0);
    $InitializeEvent(1, 32072200, 32070201, 30000, 20000, 32070310, 16572, 1, 0, 0, 0, 0, 32071609, 0, 0, 0);
    $InitializeEvent(2, 32072200, 32070202, 30004, 20004, 32070310, 16576, 0, 0, 0, 0, 0, 32071600, 32071601, 0, 0);
    $InitializeEvent(3, 32072200, 32070203, 30002, 20002, 32070310, 16574, 0, 0, 0, 0, 0, 32071602, 32071603, 32071604, 0);
    $InitializeEvent(4, 32072200, 32070210, 30002, 20002, 32070316, 16574, 1, 0, 0, 0, 0, 32071610, 0, 0, 0);
    $InitializeCommonEvent(0, 90005511, 32070560, 32071560, 32073560, 27043, 0);
    $InitializeCommonEvent(0, 90005512, 32070560, 32072560, 32072561);
    $InitializeEvent(0, 32072580);
    $InitializeCommonEvent(0, 90005646, 32070800, 32072840, 32072841, 32071840, 32072840, 32, 7, 0, 0);
    $InitializeCommonEvent(0, 900005610, 32071680, 100, 800, 0);
    $InitializeCommonEvent(0, 900005610, 32071681, 100, 800, 0);
    $InitializeCommonEvent(0, 90005703, 32070700, 3661, 3662, 1043399301, 3661, 3660, 3663, -1);
    $InitializeCommonEvent(0, 90005704, 32070700, 3661, 3660, 1043399301, 3);
    $InitializeCommonEvent(0, 90005702, 32070700, 3663, 3660, 3663);
    $InitializeEvent(0, 32073700, 32070700);
    $InitializeEvent(0, 32073701);
    $InitializeEvent(0, 32073702);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeEvent(0, 32072820);
    $InitializeCommonEvent(0, 90005250, 32070204, 32072204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070350, 32072306, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070300, 32072300, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070301, 32072300, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070306, 32072306, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070307, 32072306, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070308, 32072308, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070309, 32072309, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070310, 32072309, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070315, 32072315, 0, -1);
    $InitializeCommonEvent(0, 90005250, 32070316, 32072316, 0, -1);
});

// 梯子登録 -- ladder registration
$Event(32072580, Restart, function() {
    RegisterLadder(32070530, 32070531, 32071530);
    RegisterLadder(32070532, 32070533, 32071532);
});

// 亡者鉱夫_採掘中止_笛吹判定追加_XX -- Dead Miner_Mining Canceled_Picture Judgment Added_XX
$Event(32072200, Restart, function(chrEntityId, animationId, animationId2, chrEntityId2, spEffectId, timeSeconds, value, value2, value3, value4, assetEntityId, assetEntityId2, assetEntityId3, assetEntityId4) {
    EndIf(ThisEventSlot());
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    assetChrSp &= (AssetDestroyed(assetEntityId, Equal, 1)
        || AssetDestroyed(assetEntityId2, Equal, 1)
        || AssetDestroyed(assetEntityId3, Equal, 1)
        || AssetDestroyed(assetEntityId4, Equal, 1))
        && CharacterBackreadStatus(chrEntityId)
        && (CharacterHasSpEffect(chrEntityId, 5080) || CharacterHasSpEffect(chrEntityId, 5450));
    if (!(value2 == 0 && value3 == 0 && value4 == 0)) {
        if (value2 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.Combat);
        }
        if (value3 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.ActiveAlert);
        }
        if (value4 != 0) {
            chr |= CharacterAIState(chrEntityId, AIStateType.PassiveAlert);
        }
        assetChrSp &= chr;
    }
L9:
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
    assetChrSp &= chrSp;
    chrSp2 = CharacterAIState(chrEntityId2, AIStateType.Combat) && CharacterHasSpEffect(10000, 10004);
    WaitFor(
        assetChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || chrSp2
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        SetNetworkconnectedThisEventSlot(ON);
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        SetSpEffect(chrEntityId, 16571);
        SetSpEffect(chrEntityId, spEffectId);
        ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
        EndEvent();
    }
L0:
    if (value != 0) {
        EnableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, true);
    }
    EndEvent();
});

//magma wyrm
$Event(32072800, Restart, function() {
    EndIf(!EventFlag(1049308160)); //end if boss not selected
    EndIf(EventFlag(32070800));
    WaitFor(CharacterHPValue(32070800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(32048000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(32070800));
    HandleBossDefeatAndDisplayBanner(32070800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304152, 1049304073, -1, -1, 1049304631, 1049304632, 1049304633, 1049304634, -1, 1049304800, 1049304802, 1049304804, 1049300152);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307560);
});

// ボス出現 -- Boss appears
$Event(32072810, Restart, function() {
    if (EventFlag(32070800)) {
        DisableCharacter(32070800);
        DisableCharacterCollision(32070800);
        ForceCharacterDeath(32070800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(32070800);
    if (!EventFlag(32070801)) {
        ForceAnimationPlayback(32070800, 30000, true, false, false);
        WaitFor(
            (PlayerIsInOwnWorld() && InArea(10000, 32072801))
                || HasDamageType(32070800, 10000, DamageType.Unspecified));
        SetNetworkconnectedEventFlagID(32070801, ON);
        WaitFixedTimeSeconds(0.3);
        ForceAnimationPlayback(32070800, 20000, false, false, false);
    } else {
L1:
        ForceAnimationPlayback(32070800, 30000, true, false, false);
        WaitFor(EventFlag(32072805) && InArea(10000, 32072800));
        WaitFixedTimeSeconds(0.3);
        ForceAnimationPlayback(32070800, 20000, false, false, false);
    }
L2:
    EnableCharacterAI(32070800);
    SetNetworkUpdateRate(32070800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 32070800, 0, 904910320);
});

// ボス激昂 -- boss rage
$Event(32072811, Restart, function() {
    EndIf(EventFlag(32070800));
    WaitFor(HPRatio(32070800) <= 0.6);
    SetEventFlagID(32072802, ON);
});

// ボス閉鎖 -- boss closure
$Event(32072820, Restart, function() {
    EndIf(EventFlag(32070800));
    EndIf(EventFlag(32070801));
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(32078540));
    SetEventFlagID(32078540, OFF);
});

// ボスイベント起動 -- Boss event activation
$Event(32072849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 32070800, 32071800, 32072800, 32072805, 32075800, 10000, 32070801, 32072801);
    $InitializeCommonEvent(0, 9005801, 32070800, 32071800, 32072800, 32072805, 32072806, 10000);
    $InitializeCommonEvent(0, 9005811, 32070800, 32071800, 7, 32070801);
    $InitializeCommonEvent(0, 9005822, 32070800, 920900, 32072805, 32072806, 0, 32072802, 0, 0);
});

// 壺マイヤー_NPC初期化イベント_一方通行扉で再開 -- Tsubomayer_NPC initialization event_Restart with one-way door
$Event(32073700, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3660)) {
            SetEventFlagID(1043399303, OFF);
        }
    }
L19:
    if (!EventFlag(3666)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(3666));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3660));
    GotoIf(L2, EventFlag(3661));
    GotoIf(L4, EventFlag(3663));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!EventFlag(3666));
    RestartEvent();
});

// 壺マイヤー_移動処理_一方通行扉前_裏口 -- Tsubo Meyer_Movement process_In front of one-way door_Back door
$Event(32073701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(AnyBatchEventFlags(3666, 3671));
    WaitFor(InArea(20000, 32072700));
    SetEventFlagID(32009203, ON);
    SetEventFlagID(3678, ON);
    EndEvent();
});

// 壺マイヤー_移動処理_一方通行扉前_表口 -- Tsubo Meyer_Movement process_In front of one-way door_Front entrance
$Event(32073702, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(AnyBatchEventFlags(3666, 3671));
    WaitFor(InArea(20000, 32072701) && !EventFlag(1043399305));
    SetEventFlagID(32009203, ON);
    EndEvent();
});

