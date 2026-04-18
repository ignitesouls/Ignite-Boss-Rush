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
    $InitializeCommonEvent(0, 90005600, 76355, 1035531950, 5, 0);
    $InitializeEvent(0, 1035532200, 1035535200, 1035532200);
    $InitializeEvent(0, 1035532210);
    $InitializeCommonEvent(0, 90005251, 1035530250, 10, 0.2, -1);
    $InitializeCommonEvent(1, 90005251, 1035530251, 10, 0.3, -1);
    $InitializeCommonEvent(2, 90005251, 1035530252, 10, 0.3, -1);
    $InitializeCommonEvent(3, 90005251, 1035530253, 10, 0.4, -1);
    $InitializeCommonEvent(4, 90005251, 1035530254, 10, 0.4, -1);
    $InitializeCommonEvent(0, 90005261, 1035530230, 1035532230, 30, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1035530231, 1035532230, 30, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1035530400, 1035532400, 5, 0, -1);
    if (EventFlag(1049308035)) { //if boss selected (magma wyrm)
        $InitializeCommonEvent(0, 90005200, 1035530800, 30001, 20001, 1035532346, 0.5, 0, 0, 0, 0);
        $InitializeCommonEvent(0, 90005250, 1035530800, 1035532346, 0.5, 3004);
        $InitializeEvent(0, 1035532300);
        $InitializeCommonEvent(0, 90005870, 1035530800, 904910600, 5);
        $InitializeCommonEvent(0, 90005861, 1035530800, 1035530800, 1035530800, 1, 30390, 30062, 0);
    }
    $InitializeEvent(0, 1035532500);
    $InitializeEvent(0, 1035532450, 1035531400);
    $InitializeEvent(1, 1035532450, 1035531401);
    $InitializeEvent(2, 1035532450, 1035531402);
    $InitializeCommonEvent(0, 90005704, 1035530700, 3661, 3660, 1043399301, 3);
    $InitializeCommonEvent(0, 90005703, 1035530700, 3661, 3662, 1043399301, 3661, 3660, 3663, -1);
    $InitializeCommonEvent(0, 90005702, 1035530700, 3663, 3660, 3663);
    $InitializeEvent(0, 1035533700, 1035530700);
    $InitializeEvent(0, 1035533701);
    $InitializeCommonEvent(0, 90005730, 1035532702, 40, 1035539206, 1051369265, 1035539205, 1035539205);
});

// 火の信徒vs王軍_交戦イベント -- Fire Believers vs Royal Army_Battle Event
$Event(1035532200, Restart, function(chrEntityId, areaEntityId) {
    ClearSpEffect(chrEntityId, 4800);
    ClearSpEffect(chrEntityId, 5658);
    SetSpEffect(chrEntityId, 4802);
    EndIf(EventFlag(1050562200));
    SetSpEffect(chrEntityId, 4800);
    SetSpEffect(chrEntityId, 5658);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.GrayPhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && (HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
                || HasDamageType(chrEntityId, 35000, DamageType.Unspecified)
                || HasDamageType(35000, chrEntityId, DamageType.Unspecified)
                || CharacterHasStateInfo(chrEntityId, 436)
                || CharacterHasStateInfo(chrEntityId, 2)
                || CharacterHasStateInfo(chrEntityId, 5)
                || CharacterHasStateInfo(chrEntityId, 6)
                || CharacterHasStateInfo(chrEntityId, 260)
                || EntityInRadiusOfEntity(10000, chrEntityId, 10, 1)
                || EntityInRadiusOfEntity(35000, chrEntityId, 10, 1)
                || InArea(10000, areaEntityId)
                || InArea(35000, areaEntityId)));
    SetNetworkconnectedEventFlagID(1050562200, ON);
    ClearSpEffect(chrEntityId, 4800);
    ClearSpEffect(chrEntityId, 5658);
});

// 視界特殊効果 -- vision special effects
$Event(1035532210, Default, function() {
    SetSpEffect(1035530210, 8092);
    SetSpEffect(1035530211, 8092);
});

// 土竜_接敵時初回熔岩タックル -- Earth Dragon_First lava tackle when approaching enemy
$Event(1035532300, Restart, function() {
    WaitFor(CharacterAIState(1035530800, AIStateType.Combat));
    ForceAnimationPlayback(1035530800, 3004, false, false, true);
    EndEvent();
});

// 土竜_ワープ判定 -- Earth Dragon_Warp Judgment
$Event(1035532340, Restart, function(chrEntityId, areaEntityId, chrEntityId2) {
    if (EventFlag(1035530340)) {
        EndEvent();
    }
    flag = !EventFlag(1035530340);
    ForceAnimationPlayback(chrEntityId, 30001, true, false, false);
    WaitFor(!EventFlag(1035530340) && InArea(10000, areaEntityId) && PlayerIsInOwnWorld());
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20002, true, false, false);
    SetNetworkconnectedEventFlagID(1035530340, ON);
    EndEvent();
});

// 死体焚火ナビメッシュ切り抜き用アセット無効化_XX -- Corpse bonfire navigation mesh cutout asset invalidation_XX
$Event(1035532450, Restart, function(assetEntityId) {
    DisableAsset(assetEntityId);
    EndEvent();
});

// 死体焚火イベント起動 -- Corpse bonfire event started
$Event(1035532500, Default, function() {
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003270, 1, 0, 1);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003260, 1, 0, 1);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003250, 1, 0, 1);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003240, 1, 0, 1);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003230, 1, 0, 1);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003220, 1, 0, 1);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003210, 1, 0, 1);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005694, 1035532250, 1035531200, 200, 0, 802003200, 1, 0, 1);
    }
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003270, 1, 0, 1);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003260, 1, 0, 1);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003250, 1, 0, 1);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003240, 1, 0, 1);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003230, 1, 0, 1);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003220, 1, 0, 1);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003210, 1, 0, 1);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005694, 1035532251, 1035531201, 200, 0, 802003200, 1, 0, 1);
    }
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003270, 1, 0, 1);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003260, 1, 0, 1);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003250, 1, 0, 1);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003240, 1, 0, 1);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003230, 1, 0, 1);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003220, 1, 0, 1);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003210, 1, 0, 1);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005694, 1035532252, 1035531202, 200, 0, 802003200, 1, 0, 1);
    }
});

// 壺マイヤー_NPC初期化イベント_溶岩風呂 -- Pot Mayor_NPC initialization event_Lava bath
$Event(1035533700, Restart, function(chrEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3660)) {
            SetEventFlagID(1043399303, OFF);
        }
    }
L19:
    if (!(EventFlag(3669) || EventFlag(3670))) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(3669) || EventFlag(3670));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(3660));
    GotoIf(L2, EventFlag(3661));
    GotoIf(L4, EventFlag(3663));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 930020, false, false, false);
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
    WaitFor(!EventFlag(3669) && !EventFlag(3670));
    RestartEvent();
});

// 壺マイヤー_溶岩風呂での雄叫びイベント_溶岩風呂 -- Tsubomayer_Lava bath roar event_Lava bath
$Event(1035533701, Restart, function() {
    EndIf(!EventFlag(3669) && !EventFlag(3670));
    area = EntityInRadiusOfEntity(10000, 1035530700, 90, 1);
    SetNetworkconnectedEventFlagID(1035539204, ON);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1035530800);
    if (!EventFlag(1035539207)) {
        SetNetworkconnectedEventFlagID(1035539207, ON);
        WaitFixedTimeSeconds(20);
    }
    WaitFor(EntityInRadiusOfEntity(10000, 1035530700, 90, 1));
    SetNetworkconnectedEventFlagID(1035539206, ON);
    WaitFor(!EntityInRadiusOfEntity(10000, 1035530700, 90, 1));
    SetNetworkconnectedEventFlagID(1035539206, OFF);
    RestartEvent();
});
