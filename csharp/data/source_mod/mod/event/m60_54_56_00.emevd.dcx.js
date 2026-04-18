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
    $InitializeEvent(0, 1054562200, 1054565200);
    $InitializeEvent(0, 1054562500);
});

// 野生動物霊体化 -- wild animal spirit form
$Event(1054562200, Restart, function(chrEntityId) {
    DisableCharacterCollision(chrEntityId);
    DisableLockOnPoint(chrEntityId, 220);
    EndEvent();
});

// バディ召喚距離を延ばすイベント -- Event that increases buddy summoning distance
$Event(1054562500, Restart, function() {
    EndIf(EventFlag(1254560800));
    SetCharacterTalkRange(1054560100, 300);
});

// コンストラクタ_LOD2 -- constructor_LOD2
$Event(200, Default, function() {
    if (EventFlag(1049308045)) { //if boss selected (borealis)
        $InitializeCommonEvent(0, 90005870, 1054560800, 904503600, 25);
        $InitializeCommonEvent(0, 90005861, 1254560800, 0, 1054560800, 1, 30510, 30066, 0);
        $InitializeEvent(0, 1054562815);
        $InitializeEvent(0, 1054562820, 1054560800, 30003, 20003, 1054562830, 0, 0, 0, 0, 0, 0, 1054562831, 1054562832, 1054562833, 1054562834, 1054562835);
    }
});

// 氷の湖ブリザード風切り替え -- Ice Lake Blizzard Wind Switch
$Event(1054562815, Restart, function() {
    WaitFor(InArea(10000, 1054562811));
    DisableNetworkSync();
    if (!EventFlag(1254560800)) {
        if (!SpecialStandbyEndedFlag(1054560800)) {
            if (!InArea(10000, 1054562810)) {
                if (InArea(10000, 1054562812)) {
                    WaitFixedTimeSeconds(1);
                    RestartEvent();
                }
L3:
                ClearSpEffect(10000, 4213);
                ChangeWeather(Weather.HeavySnow, 30, false);
                WaitFixedTimeSeconds(1);
                RestartEvent();
            }
L2:
            ChangeWeather(Weather.SnowyHeavyFog, -1, false);
            WaitFixedTimeSeconds(5);
            SetSpEffect(10000, 4213);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L1:
        ChangeWeather(Weather.HeavySnow, 30, false);
        WaitFixedTimeSeconds(3);
        ClearSpEffect(10000, 4213);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    ClearSpEffect(10000, 4213);
    ChangeWeather(Weather.None, -1, false);
    EndEvent();
});

// アイスワイバーン_特殊待機解除 -- Ice Wyvern_Special standby canceled
$Event(1054562820, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, targetDistance, timeSeconds, value, value2, value3, value4, areaEntityId2, areaEntityId3, areaEntityId4, areaEntityId5, areaEntityId6) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    if (0 != areaEntityId) {
        area |= InArea(10000, areaEntityId);
    }
    area |= InArea(10000, areaEntityId2)
        || InArea(10000, areaEntityId3)
        || InArea(10000, areaEntityId4)
        || InArea(10000, areaEntityId5)
        || InArea(10000, areaEntityId6)
        || EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaMapChrSp &= area
        && !PlayerInMap(31, 22, 0, 0)
        && CharacterBackreadStatus(chrEntityId)
        && WeatherActive(Weather.SnowyHeavyFog, 3, 0)
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
        areaMapChrSp &= chr;
    }
L9:
    areaMapChrSp &= chrSp;
    WaitFor(
        areaMapChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260));
    WaitFixedTimeSeconds(0.1);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    SetNetworkconnectedEventFlagID(1054562820, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        GotoIf(L5, InArea(10000, areaEntityId));
        GotoIf(L6, InArea(10000, areaEntityId2));
        GotoIf(L7, InArea(10000, areaEntityId3));
        area2 |= InArea(10000, areaEntityId4);
        GotoIf(L8, area2);
        area2 |= InArea(10000, areaEntityId5);
        GotoIf(L9, area2);
        area2 |= InArea(10000, areaEntityId6);
        GotoIf(L10, area2);
        Goto(L14);
L5:
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1054562820, -1, chrEntityId);
        Goto(L14);
L6:
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1054562821, -1, chrEntityId);
        Goto(L14);
L7:
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1054562822, -1, chrEntityId);
        Goto(L14);
L8:
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1054562823, -1, chrEntityId);
        Goto(L14);
L9:
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1054562824, -1, chrEntityId);
        Goto(L14);
L10:
        WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, 1054562825, -1, chrEntityId);
        Goto(L14);
L14:
        SetSpEffect(chrEntityId, 10206);
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
