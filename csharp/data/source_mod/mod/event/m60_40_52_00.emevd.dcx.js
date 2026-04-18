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
    RegisterBonfire(76304, 1040521950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005100, 76314, 76304, 1040521980, 77310, 0, 78310, 78311, 78312, 78313, 78314, 78315, 78316, 78317, 78318, 78319);
    if (EventFlag(1049308072)) { //if boss selected (black knife assassin)
        $InitializeCommonEvent(0, 90005870, 1040520800, 902100600, 14);
        $InitializeCommonEvent(0, 90005860, 1040520800, 0, 1040520800, 0, 30350, 0);
    }
    $InitializeEvent(0, 1040522240, 1040521690, 1040521691, 62030);
    AttachAssetToAsset(1040521201, 1040521200, 151);
    AttachAssetToAsset(1040521211, 1040521210, 151);
    $InitializeCommonEvent(0, 900005610, 1040521680, 100, 800, 1040528620);
    $InitializeCommonEvent(0, 90005605, 1040521640, 60, 40, 55, 0, 1040552650, 0, 1040552651, 1040552652, 1040552653, 0, 0, 0, 0);
    $InitializeEvent(0, 1040523700, 1040520700);
    $InitializeEvent(0, 1040523701, 1040520700, 1040529205, 1040529206);
    $InitializeEvent(0, 1040523702, 1040520700, 1040520710, 1040529206);
    $InitializeEvent(0, 1040523703, 1040520710);
    $InitializeEvent(0, 1040523705, 1040520705);
    $InitializeCommonEvent(0, 90005704, 1040520705, 4201, 4200, 1040529251, 3);
    $InitializeCommonEvent(0, 90005703, 1040520705, 4201, 4202, 1040529251, 4201, 4200, 4203, -1);
    $InitializeCommonEvent(0, 90005702, 1040520705, 4203, 4200, 4204);
    $InitializeCommonEvent(0, 90005725, 4765, 4766, 4768, 1040529305, 1040520715, 1035450701, 1040526700);
    $InitializeCommonEvent(0, 90005703, 1040520715, 4766, 4767, 1035469206, 4766, 4765, 4769, 0);
    $InitializeCommonEvent(0, 90005704, 1040520715, 4766, 4765, 1035469206, 3);
    $InitializeCommonEvent(0, 90005702, 1040520715, 4768, 4765, 4769);
    $InitializeCommonEvent(0, 90005705, 1040520720);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1040520705, true);
    SetCharacterBackreadState(1040520715, true);
    SetCharacterBackreadState(1040520720, true);
    $InitializeCommonEvent(0, 90005201, 1040520303, 30001, 20001, 4, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040520304, 30002, 20002, 4, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1040520800, 30000, 20000, 1040522800, 20, 0, 0, 0, 0, 0);
});

// 地図石碑光SFX切り替え -- Map stone monument light SFX switching
$Event(1040522240, Restart, function(assetEntityId, entityId, eventFlagId) {
    DisableNetworkSync();
    if (EventFlag(eventFlagId)) {
        ForceAnimationPlayback(entityId, 1, false, false, false);
        DeleteAssetfollowingSFX(assetEntityId, true);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(assetEntityId, 200, 803220);
    WaitFor(EventFlag(eventFlagId));
    ForceAnimationPlayback(entityId, 1, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
});

// NPC318_混沌の宿主_NPC初期化イベント_エレオノーラにやられる -- NPC318_Host of Chaos_NPC initialization event_Defeated by Eleonora
$Event(1040523700, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1040529200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3620) && EventFlag(1043379255)) {
            SetEventFlagID(1043379255, OFF);
        }
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    if (EventFlag(3630)) {
        if (EventFlag(1040529205) || EventFlag(1040529206) || EventFlag(1040529207)) {
            EnableCharacter(chrEntityId);
            SetCharacterBackreadState(chrEntityId, false);
            DisableCharacterCollision(chrEntityId);
            ForceAnimationPlayback(chrEntityId, 90102, false, false, false);
        } else {
            GotoIf(L1, EventFlag(3620));
            GotoIf(L2, EventFlag(3621));
            GotoIf(L3, EventFlag(3622));
            GotoIf(L4, EventFlag(3623));
L1:
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
            ForceAnimationPlayback(chrEntityId, 90101, false, false, false);
            GotoIf(L20, mainGroupAbuse);
L2:
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
            Goto(L20);
L3:
            SetCharacterBackreadState(chrEntityId, false);
            EnableCharacter(chrEntityId);
            SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
            Goto(L20);
L4:
            ForceCharacterTreasure(chrEntityId);
            DisableCharacter(chrEntityId);
            SetCharacterBackreadState(chrEntityId, true);
            Goto(L20);
        }
    }
L20:
    WaitFor(EventFlag(1040529200));
    RestartEvent();
});

// NPC318_混沌の宿主_エレオノーラにやられる_死亡処理 -- NPC318_Host of Chaos_Killed by Eleonora_Death processing
$Event(1040523701, Restart, function(chrEntityId, eventFlagId, eventFlagId2) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(3630));
    flagDmg = EventFlag(eventFlagId)
        || EventFlag(eventFlagId2)
        || HasDamageType(chrEntityId, 10000, DamageType.Unspecified);
    EndIf(flagDmg);
    WaitFor(flagDmg);
    DisableCharacterCollision(chrEntityId);
    EndIf(EventFlag(eventFlagId));
    ForceAnimationPlayback(chrEntityId, 90201, false, false, false);
    EndIf(EventFlag(eventFlagId2));
    SetEventFlagID(1040529207, ON);
    EndEvent();
});

// NPC318_混沌の宿主_傍らのエレオノーラに攻撃した -- NPC318_Host of Chaos_Attacked Eleanora nearby.
$Event(1040523702, Restart, function(chrEntityId, entityId, eventFlagId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3630));
    EndIf(EventFlag(eventFlagId));
    WaitFor(HasDamageType(entityId, 10000, DamageType.Unspecified));
    SetEventFlagID(eventFlagId, ON);
    DisableCharacterCollision(chrEntityId);
    EndEvent();
});

// 仮_NPC327_エレオノーラ初期化 -- Temporary_NPC327_Eleanora initialization
$Event(1040523703, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    GotoIf(L1, !AnyBatchEventFlags(3620, 3624));
    GotoIf(L1, AnyBatchEventFlags(3625, 3629));
    GotoIf(L1, EventFlag(3632));
    Goto(L2);
L1:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    EndEvent();
L2:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 90100, false, false, false);
    EndEvent();
});

// NPC351金仮面の従者_NPC初期化イベント -- NPC351 Gold Masked Squire_NPC initialization event
$Event(1040523705, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    DisableNetworkSync();
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4200)) {
            SetEventFlagID(1040529253, OFF);
        }
    }
L19:
    if (!EventFlag(4206)) {
        DisableCharacter(chrEntityId);
        SetCharacterBackreadState(chrEntityId, true);
        WaitFor(EventFlag(4206));
        RestartEvent();
    }
L6:
    GotoIf(L1, EventFlag(4200));
    GotoIf(L2, EventFlag(4201));
    GotoIf(L4, EventFlag(4203));
L1:
    EnableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    ForceAnimationPlayback(chrEntityId, 90101, false, false, false);
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
    WaitFor(!EventFlag(4206));
    RestartEvent();
});
