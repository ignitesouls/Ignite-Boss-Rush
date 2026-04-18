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
    InitializeCommonEvent(0, 90001000, 20);
    $InitializeCommonEvent(0, 9005810, 1044360800, 76120, 1044360950, 1044361950, 5);
    $InitializeEvent(0, 1044362800);
    $InitializeEvent(0, 1044362810);
    $InitializeEvent(0, 1044362849);
    $InitializeCommonEvent(0, 90005300, 1044360220, 1044360220, 40112, 0, 0);
    $InitializeEvent(0, 1044362500);
    $InitializeCommonEvent(0, 90005704, 1044360700, 3461, 3460, 1044369201, 3);
    $InitializeCommonEvent(0, 1044363711, 1044360700, 3461, 3462, 1044369201, 0.65, 3460, 3463, -1);
    $InitializeEvent(0, 1044363710, 1044360700);
    $InitializeEvent(0, 1044363712, 1044360700);
    $InitializeEvent(0, 1044363713);
    $InitializeEvent(0, 1044363714, 1044360700);
    $InitializeCommonEvent(0, 90005709, 1044360700, 905, 603001);
    $InitializeCommonEvent(0, 90005709, 1044360700, 200, 603051);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1044360700, true);
    SetCharacterBackreadState(1044360710, true);
    $InitializeCommonEvent(0, 90005251, 1044360250, 30, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1044360231, 3, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1044360234, 3, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1044360235, 3, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1044360211, 1044362211, 1, 0, 1701);
    $InitializeCommonEvent(0, 90005261, 1044360212, 1044362211, 1, 0.5, 1701);
    $InitializeCommonEvent(0, 90005261, 1044360213, 1044362211, 1, 0.3, 1701);
    $InitializeCommonEvent(0, 90005261, 1044360214, 1044362211, 1, 0.7, 1701);
    $InitializeCommonEvent(0, 90005261, 1044360200, 1044362200, 10, 0, -1);
    $InitializeCommonEvent(0, 90005211, 1044360200, 30014, 20014, 1044362200, 10, 0, 0, 0, 0, 0);
});

// コンストラクタ_LOD2 -- constructor_LOD2
$Event(200, Default, function() {
    $InitializeCommonEvent(0, 90005421, 1044360300, 1044361301, 1044368301);
    $InitializeCommonEvent(0, 90005422, 1044368301, 1044361300, 1044363301);
    $InitializeCommonEvent(0, 90005424, 1044361300, 1044360302, 1044360303, 1044360300, 1044361301);
    $InitializeCommonEvent(0, 90005423, 1044360302);
    $InitializeCommonEvent(0, 90005423, 1044360303);
    $InitializeEvent(0, 1044362300);
});

// プリコンストラクタ_LOD2 -- Preconstructor_LOD2
$Event(250, Default, function() {
    $InitializeCommonEvent(0, 90005420, 1044360300, 1044361300, 1044361301, 1044360301, 1044360302, 1044360303, 0);
});

// 遺跡壁破壊不可 -- Ruins walls cannot be destroyed
$Event(1044362500, Restart, function() {
    EnableAssetInvunerability(1044361500);
});

// キャラバン馬車_障害物アセット破壊ダメージ定期発生 -- Caravan carriage_Obstacle asset destruction damage occurs regularly
$Event(1044362300, Restart, function() {
    CreateDamagingAsset(1044361301, 1044361300, 150, 100700, DamageTargetType.Character, 3, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 200, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 201, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 202, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 203, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 204, 100701, DamageTargetType.Character, 2, 0, 10);
    CreateDamagingAsset(1044361301, 1044361300, 205, 100701, DamageTargetType.Character, 2, 0, 10);
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(1044362650, Restart, function(tutorialParamId, eventFlagId, eventFlagId2, eventFlagId3) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId2)
            && !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, eventFlagId3, 1);
});

// チュートリアルメッセージ_エストスカラベ撃破 -- Tutorial message_Defeating Esto Scarab
$Event(1044362651, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 44, 36, 0));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9120, eventFlagId2, 1);
});

// チュートリアルメッセージ_バディ召喚可能範囲 -- Tutorial message_Buddy summonable range
$Event(1044362652, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFor(
        CharacterHasSpEffect(10000, 9530)
            && !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 44, 36, 0)
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
    EndIf(EventFlag(eventFlagId));
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9127, eventFlagId2, 1);
});

// チュートリアルメッセージ_魔法杖所持 -- Tutorial message_Magic wand possession
$Event(1044362654, Restart, function(tutorialParamId, eventFlagId) {
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    EndIf(
        PlayerHasItemIncludingBBox(ItemType.Weapon, 33000000)
            || PlayerHasItemIncludingBBox(ItemType.Weapon, 33210000)
            || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000000)
            || PlayerHasItemIncludingBBox(ItemType.Weapon, 34040000));
    WaitFor(
        !EventFlag(eventFlagId)
            && HasMultiplayerState(MultiplayerState.Singleplayer)
            && PlayerInMap(60, 44, 36, 0)
            && (PlayerHasItemIncludingBBox(ItemType.Weapon, 33000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 33210000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34000000)
                || PlayerHasItemIncludingBBox(ItemType.Weapon, 34040000)));
    EndIf(HasMultiplayerState(MultiplayerState.Multiplayer));
    EndIf(EventFlag(eventFlagId));
    WaitFixedTimeSeconds(1);
    SetEventFlagID(eventFlagId, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9101, eventFlagId, 1);
});

// 赤目商人_初期化イベント -- Red Eye Merchant_Initialization event
$Event(1044363700, Restart, function(assetEntityId, assetEntityId2, assetEntityId3, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(eventFlagId, OFF);
    if (PlayerIsInOwnWorld()) {
    }
L10:
    EnableCharacter(assetEntityId);
    EnableCharacter(assetEntityId2);
    EnableAsset(assetEntityId3);
    SetCharacterBackreadState(assetEntityId, false);
    SetCharacterBackreadState(assetEntityId2, false);
    if (!EventFlag(eventFlagId4)) {
        DisableCharacter(assetEntityId);
        DisableCharacter(assetEntityId2);
        DisableAsset(assetEntityId3);
    } else {
L0:
        GotoIf(L1, EventFlag(eventFlagId2));
        GotoIf(L2, EventFlag(eventFlagId3));
        Goto(L20);
L1:
        SetCharacterTeamType(assetEntityId, TeamType.HostileNPC);
        Goto(L20);
L2:
        ForceCharacterTreasure(assetEntityId);
        ForceCharacterTreasure(assetEntityId2);
        DisableCharacter(assetEntityId);
        DisableCharacter(assetEntityId2);
        DisableAsset(assetEntityId);
        DisableAsset(assetEntityId2);
        DisableAsset(assetEntityId3);
        SetCharacterBackreadState(assetEntityId, true);
        SetCharacterBackreadState(assetEntityId3, true);
        Goto(L20);
    }
L20:
    WaitFor(EventFlag(eventFlagId));
    RestartEvent();
});

// 赤目商人ランダム移動処理 -- Red-eyed merchant random movement process
$Event(1044363701, Restart, function(eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(eventFlagId));
    if (!EventFlag(eventFlagId2)) {
        BatchSetNetworkconnectedEventFlags(eventFlagId4, eventFlagId5, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId3, ON);
        SetNetworkconnectedEventFlagID(eventFlagId4, ON);
        EndEvent();
    }
    EndIf(EventFlag(eventFlagId3));
    BatchSetNetworkconnectedEventFlags(eventFlagId4, eventFlagId5, OFF);
    RandomlySetEventFlagInRange(eventFlagId4, eventFlagId5, ON);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

// 赤目商人全体敵対 -- Entire enemy of red-eyed merchants
$Event(1044363702, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, eventFlagId5) {
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId)
            && EventFlag(eventFlagId2)
            && EventFlag(eventFlagId5));
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    BatchSetNetworkconnectedEventFlags(eventFlagId2, eventFlagId4, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId3, ON);
});

// NPC316学院の女魔術師_幻影_NPC初期化イベント -- NPC316 Academy Female Magician_Phantom_NPC Initialization Event
$Event(1044363710, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3460)) {
            SetEventFlagID(1041339253, OFF);
        }
    }
L19:
    if (!(EventFlag(3465) && !EventFlag(1044369231))) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(3465) && !EventFlag(1044369231));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3460));
    GotoIf(L2, EventFlag(3461));
    GotoIf(L4, EventFlag(3463));
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 90105, false, false, false);
    DisableCharacterInvincibility(chrEntityId);
    GotoIf(L20, mainGroupAbuse);
L2:
    SetCharacterBackreadState(chrEntityId, true);
    DisableCharacter(chrEntityId);
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    Goto(L20);
L20:
    WaitFor(!(EventFlag(3465) && !EventFlag(1044369231)));
    RestartEvent();
});

// NPC316学院の女魔術師NPC敵対化処理 -- NPC316 Academy female magician NPC hostile processing
$Event(1044363711, Restart, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, targetHPRatio, eventFlagId4, eventFlagId5, value) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(3000));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    SetEventFlagID(eventFlagId3, OFF);
    WaitFor(
        !EventFlag(eventFlagId)
            && !EventFlag(eventFlagId2)
            && (((HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                || HasDamageType(chrEntityId, 40000, DamageType.Unspecified))
                && HPRatio(chrEntityId) < targetHPRatio)
                || EventFlag(eventFlagId3)));
    EndIf(EventFlag(eventFlagId));
    EndIf(EventFlag(eventFlagId2));
    if (Signed(1) != value) {
        BatchSetNetworkconnectedEventFlags(eventFlagId4, eventFlagId5, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId, ON);
    } else {
L0:
        BatchSetNetworkconnectedEventFlags(eventFlagId4, eventFlagId5, OFF);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
L9:
    SaveRequest();
});

// NPC316学院の女魔術師_敵対と共に消える -- NPC316 Female magician of the academy_disappears with hostility
$Event(1044363712, Restart, function(entityId) {
    EndIf(EventFlag(3461));
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 3461);
    ForceAnimationPlayback(entityId, 90207, false, false, false);
    EndEvent();
});

// NPC316学院の女魔術師_購入魔術数チェック -- NPC316 Academy female magician_Check the number of purchased magics
$Event(1044363713, Restart, function() {
    if (!(EventFlag(1044369236) && EventFlag(1044369230))) {
        WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, 100500, 100749) >= 3);
        SetNetworkconnectedEventFlagID(1044369237, ON);
        WaitFor(CountEventFlags(TargetEventFlagType.EventFlag, 100500, 100749) >= 6);
        SetNetworkconnectedEventFlagID(1044369235, ON);
    }
L20:
    EndEvent();
});

// NPC316学院の女魔術師_リアルタイム遷移 -- NPC316 Female magician of the academy_Real-time transition
$Event(1044363714, Default, function(entityId) {
    EndIf(!EventFlag(3465));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(1044369231) && EntityInRadiusOfEntity(entityId, 20000, 50, 1));
    SetNetworkconnectedEventFlagID(3478, ON);
    EndEvent();
});

//map pumpkin
$Event(1044362800, Restart, function() {
    EndIf(!EventFlag(1049308153)); //end if boss not selected
    EndIf(EventFlag(1044360800));
    WaitFor(CharacterHPValue(1044360800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1044360800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1044360800));
    HandleBossDefeatAndDisplayBanner(1044360800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304106, 1049304010, 1049304006, -1, 1049304425, 1049304426, 1049304427, 1049304428, 1049304429, -1, 1049304262, 1049304265, 1049304267, 1049304269, 1049300106);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307553);
});

// ボス出現 -- Boss appears
$Event(1044362810, Restart, function() {
    if (EventFlag(1044360800)) {
        DisableCharacter(1044360800);
        DisableCharacterCollision(1044360800);
        ForceCharacterDeath(1044360800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(1044360800);
    WaitFor(EventFlag(1044362805) && InArea(10000, 1044362800));
L2:
    EnableCharacterAI(1044360800);
    SetNetworkUpdateRate(1044360800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 1044360800, 0, 904340540);
    DisableObjAct(1044361560, -1);
});

// ボス_かぼちゃ頭_イベント起動 -- Boss_Pumpkin head_Event activation
$Event(1044362849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 1044360800, 1044361800, 1044362800, 1044362805, 1044365800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 1044360800, 1044361800, 1044362800, 1044362805, 1044362806, 10000);
    $InitializeCommonEvent(0, 9005811, 1044360800, 1044361800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 1044360800, 920900, 1044362805, 1044362806, 0, 1044362802, 0, 0);
    $InitializeCommonEvent(0, 9005812, 1044360800, 1044361801, 3, 0, 0);
});

