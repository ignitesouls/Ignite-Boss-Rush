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
    $InitializeEvent(0, 1053562200, 1053565200);
    $InitializeEvent(0, 1053562250, 1053560250, 1053561250, 1053560270, 0, 0, 0, 0, 0, 0, 0);
    $InitializeEvent(1, 1053562250, 1053560251, 1053561251, 1053560271, 0, 0, 0, 0, 0, 0, 0);
    $InitializeEvent(2, 1053562250, 1053560252, 1053561252, 1053560272, 0, 0, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 1053562260, 1053560250, 1053561250, 1053560270, 1053565250, 0, 0, 0, 0, 0, 1053560700, 1053562250);
    $InitializeEvent(1, 1053562260, 1053560251, 1053561251, 1053560271, 1053565251, 0, 0, 0, 0, 0, 1053560710, 1053562251);
    $InitializeEvent(2, 1053562260, 1053560252, 1053561252, 1053560272, 1053565252, 0, 0, 0, 0, 0, 1053560720, 1053562252);
    $InitializeEvent(0, 1053562270, 1053560250, 0, 1053560270, 0, 1053560251, 30010, 20010, 45, 0, 0, 1053562250);
    $InitializeEvent(1, 1053562270, 1053560250, 0, 1053560270, 0, 1053560260, 30010, 20010, 45, 0, 0, 1053562250);
    $InitializeEvent(3, 1053562270, 1053560251, 0, 1053560271, 0, 1053560253, 30010, 20010, 35, 0, 0, 1053562251);
    $InitializeEvent(4, 1053562270, 1053560251, 0, 1053560271, 0, 1053560261, 30010, 20010, 35, 0, 0, 1053562251);
    $InitializeEvent(5, 1053562270, 1053560251, 0, 1053560271, 0, 1053560262, 30010, 20010, 35, 0, 0, 1053562251);
    if (EventFlag(1049308104)) { //if boss selected (vyke)
        $InitializeCommonEvent(0, 90005880, 1053560800, 1053560805, 1053562800, 1053560800, 30515, 60, 53, 56, 0, 1053562805);
        $InitializeCommonEvent(0, 90005881, 1053560800, 1053560805, 1053562801, 1053562802, 20300, 1053561805, 60, 53, 56, 0, 1053562805);
        $InitializeCommonEvent(0, 90005882, 1053560800, 1053560805, 1053562800, 1053560800, 1053562806, 1053565810, 1053561800, 1053560810, 1053562810, 130401, -1, 90005);
        $InitializeCommonEvent(0, 90005883, 1053560800, 1053560805, 1053561805);
        $InitializeCommonEvent(0, 90005885, 1053560800, 921100, 1053562806, 1053562807, 0, 1);
        $InitializeEvent(0, 1053562820, 1053560800, 1053560805);
    }
    $InitializeCommonEvent(0, 90005620, 1053560570, 1053561570, 1053561571, 1053561572, 1053562570, 1053562571, 1053562572);
    $InitializeCommonEvent(0, 90005621, 1053560570, 1053561573);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1053560700, true);
});

// 野生動物霊体化 -- wild animal spirit form
$Event(1053562200, Restart, function(chrEntityId) {
    DisableCharacterCollision(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    EndEvent();
});

// 気球待機イベント_XX -- Balloon standby event_XX
$Event(1053562250, Restart, function(eventFlagId, chrEntityId, entityId, timeSeconds, timeSeconds2, timeSeconds3, timeSeconds4, timeSeconds5, timeSeconds6, timeSeconds7) {
    EndIf(EventFlag(eventFlagId));
    EndIf(HasDamageType(entityId, 20000, DamageType.Unspecified));
    ForceAnimationPlayback(chrEntityId, 0, false, false, false);
    IssueShortWarpRequest(entityId, TargetEntityType.Asset, chrEntityId, 220);
    WaitFixedTimeSeconds(5.4);
    RestartEvent();
    WaitFixedTimeSeconds(timeSeconds);
    WaitFixedTimeSeconds(timeSeconds2);
    WaitFixedTimeSeconds(timeSeconds3);
    WaitFixedTimeSeconds(timeSeconds4);
    WaitFixedTimeSeconds(timeSeconds5);
    WaitFixedTimeSeconds(timeSeconds6);
    WaitFixedTimeSeconds(timeSeconds7);
});

// 気球破壊イベント_XX -- Balloon destruction event_XX
$Event(1053562260, Restart, function(eventFlagId, assetEntityId, chrEntityId, chrEntityId2, timeSeconds, timeSeconds2, timeSeconds3, timeSeconds4, timeSeconds5, itemLotId, eventFlagId2) {
    if (EventFlag(eventFlagId)) {
        if (!EventFlag(eventFlagId2)) {
            DisableAsset(assetEntityId);
            DisableCharacter(chrEntityId);
            DisableCharacterCollision(chrEntityId);
            ForceCharacterDeath(chrEntityId, false);
            DisableCharacter(chrEntityId2);
            DisableCharacterCollision(chrEntityId2);
            ForceCharacterDeath(chrEntityId2, false);
            EndEvent();
        }
L1:
        DisableAsset(assetEntityId);
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        EndEvent();
    }
L0:
    CreateAssetfollowingSFX(assetEntityId, 200, 803160);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChr = HasDamageType(chrEntityId, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(chrEntityId, 436)
        || CharacterHasStateInfo(chrEntityId, 2)
        || CharacterHasStateInfo(chrEntityId, 5)
        || CharacterHasStateInfo(chrEntityId, 6)
        || CharacterHasStateInfo(chrEntityId, 260);
    WaitFor(dmgChr && chrSp);
    SetEventFlagID(eventFlagId, ON);
    ForceAnimationPlayback(assetEntityId, 1, false, false, false);
    DeleteAssetfollowingSFX(assetEntityId, true);
    WaitFixedTimeSeconds(1);
    DisableAsset(assetEntityId);
    if (PlayerIsInOwnWorld()) {
        WaitFixedTimeSeconds(0.3);
        AwardItemsIncludingClients(itemLotId);
    }
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
    WaitFixedTimeSeconds(timeSeconds2);
    WaitFixedTimeSeconds(timeSeconds3);
    WaitFixedTimeSeconds(timeSeconds4);
    WaitFixedTimeSeconds(timeSeconds5);
});

// 人形兵解除イベント_XX -- Puppet soldier release event_XX
$Event(1053562270, Restart, function(eventFlagId, timeSeconds, entityId, timeSeconds2, chrEntityId, animationId, animationId2, targetDistance, timeSeconds3, timeSeconds4, eventFlagId2) {
    EndIf(EventFlag(eventFlagId));
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    dmgChrArea = HasDamageType(entityId, 20000, DamageType.Unspecified)
        || HasDamageType(chrEntityId, 20000, DamageType.Unspecified)
        || CharacterHasStateInfo(chrEntityId, 436)
        || CharacterHasStateInfo(chrEntityId, 2)
        || CharacterHasStateInfo(chrEntityId, 5)
        || CharacterHasStateInfo(chrEntityId, 6)
        || CharacterHasStateInfo(chrEntityId, 260)
        || EntityInRadiusOfEntity(chrEntityId, 20000, targetDistance, 1);
    WaitFor(dmgChrArea && chrSp);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    WaitFixedTimeSeconds(timeSeconds3);
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
    WaitFixedTimeSeconds(timeSeconds2);
    WaitFixedTimeSeconds(timeSeconds4);
});

// 円形サークル_天候変化無効イベント -- Circular circle_weather change invalid event
$Event(1053562820, Restart, function(eventFlagId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(eventFlagId));
    WaitFor(EventFlag(eventFlagId2));
    WaitFixedTimeFrames(5);
    ChangeWeather(Weather.None, -1, true);
});
