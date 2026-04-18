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
    if (EventFlag(1049308084)) { //if boss selected (black blade kindred)
        $InitializeEvent(0, 1049522820, 1049520800, 30004, 20004, 1049522800, 0, 0, 0, 0, 0);
        $InitializeEvent(0, 1049522825, 1049520800, 1049520800);
        $InitializeCommonEvent(0, 90005870, 1049520800, 904770600, 16);
        $InitializeCommonEvent(0, 90005860, 1049520800, 0, 1049520800, 0, 30505, 0);
        $InitializeCommonEvent(0, 90005872, 1049520800, 16, 0);
    }
    $InitializeCommonEvent(0, 90005261, 1049520550, 1049522550, 10, 0, -1);
    $InitializeCommonEvent(0, 90005780, 1049520800, 1049522160, 1049522161, 1049520700, SummonSignType.NPCWhiteSign, 1049522700, 0, false, 0); //enable summon visibility
    $InitializeCommonEvent(0, 90005781, 1049520800, 1049522160, 1049522161, 1049520700);
    $InitializeCommonEvent(0, 90005783, 1049520800, 1049522160, 1049522161, 1049520700, 1049522701, 0, 0);
    $InitializeEvent(0, 1049523700);
});

// 王都のガーゴイル_特殊待機_領域判定 -- Gargoyle in the Royal Capital_Special standby_Area determination
$Event(1049522820, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    DisableCharacterAI(chrEntityId);
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= InArea(10000, areaEntityId)
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
        areaChrSp &= chr;
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
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260)
            || sp
            || sp2
            || sp3
            || sp4
            || sp5);
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        WaitFixedTimeSeconds(timeSeconds);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
        EnableCharacterAI(chrEntityId);
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

// 王都のガーゴイル_ターゲットクリア -- Gargoyle of the Royal Capital_Target clear
$Event(1049522825, Restart, function(eventFlagId, chrEntityId) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterBackreadStatus(chrEntityId) && EventFlag(1049522820));
    WaitFor(!EntityInRadiusOfEntity(10000, chrEntityId, 170, 1));
    ClearCharactersAITarget(chrEntityId);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// NPC348マレニアの娘_神肌_ツリガ_ガーゴイル_白霊召喚停止イベント -- NPC348 Marenia's Daughter_Divine Skin_Tsuriga_Gargoyle_White Spirit Summoning Stop Event
$Event(1049523700, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(AnyBatchEventFlags(4181, 4183));
    BatchSetNetworkconnectedEventFlags(1042559207, 1042559209, OFF);
    EndEvent();
});
