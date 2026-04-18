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
    $InitializeCommonEvent(0, 90005620, 1038520570, 1038521570, 1038521571, 0, 1038522570, 1038522571, 1038522572);
    $InitializeCommonEvent(0, 90005621, 1038520570, 1038521573);
    if (EventFlag(1049308082)) { //if boss selected (tibia mariner)
        $InitializeCommonEvent(0, 90005261, 1038520340, 1038522300, 30, 0, -1);
        $InitializeCommonEvent(1, 90005261, 1038520350, 1038522300, 20, 0, -1);
        $InitializeEvent(0, 1038522350);
        $InitializeEvent(0, 1038522347, 1038520340, 1038522400, 1038520800, 1038520350);
        $InitializeEvent(1, 1038522347, 1038520350, 1038522400, 1038520800, 1038520340);
        $InitializeCommonEvent(0, 90005870, 1038520340, 904950602, 24);
        $InitializeCommonEvent(0, 90005860, 1038520800, 0, 1038520340, 0, 30385, 0);
        $InitializeEvent(0, 1038522339, 1038520340, 1038520350);
        $InitializeEvent(0, 1038522349);
        $InitializeCommonEvent(0, 90005616, 530385, 1038522700);
        $InitializeEvent(0, 1038522346, 1038520340, 1038520800, 15302, 1038522320, 1038522340, 15310, 15311, 15312, 1038522343, 1038522344, 1038522345);
        $InitializeEvent(0, 1038522343, 1038520340, 1038522340, 15310);
        $InitializeEvent(1, 1038522343, 1038520340, 1038522341, 15311);
        $InitializeEvent(2, 1038522343, 1038520340, 1038522342, 15312);
        $InitializeEvent(0, 1038522344, 1038520800, 1038520340, 1038525230, 1038520350);
        $InitializeEvent(0, 1038522345, 1038520340, 1038520350, 15335);
    }
    $InitializeCommonEvent(0, 90005211, 1038520200, 30016, 20016, 1038522200, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520201, 30016, 20016, 1038522200, 10, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520205, 30016, 20016, 1038522205, 10, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520206, 30016, 20016, 1038522205, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520210, 30016, 20016, 1038522210, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520215, 30016, 20016, 1038522215, 10, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520216, 30016, 20016, 1038522215, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520220, 30016, 20016, 1038522220, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520221, 30016, 20016, 1038522221, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520222, 30016, 20016, 1038522221, 10, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520225, 30016, 20016, 1038522225, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520226, 30016, 20016, 1038522225, 10, 0.4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1038520250, 1038522250, 10, 0, -1);
    $InitializeCommonEvent(0, 90005211, 1038520251, 30016, 20016, 1038522250, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520255, 30016, 20016, 1038522255, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520256, 30016, 20016, 1038522255, 10, 0.1, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005211, 1038520257, 30016, 20016, 1038522255, 10, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520260, 30016, 20016, 1038522260, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520265, 30014, 20014, 1038522265, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(3, 90005211, 1038520266, 30014, 20014, 1038522265, 5, 0.4, 0, 0, 0, 0);
    $InitializeCommonEvent(4, 90005211, 1038520267, 30014, 20014, 1038522265, 5, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520270, 30016, 20016, 1038522270, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520280, 30014, 20014, 1038522280, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520281, 30014, 20014, 1038522280, 10, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005211, 1038520282, 30014, 20014, 1038522280, 10, 0.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520285, 30014, 20014, 1038522285, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520286, 30014, 20014, 1038522285, 10, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005211, 1038520287, 30014, 20014, 1038522285, 10, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520290, 30014, 20014, 1038522290, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 1038520295, 30014, 20014, 1038522295, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(1, 90005211, 1038520296, 30014, 20014, 1038522295, 10, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(2, 90005211, 1038520297, 30014, 20014, 1038522295, 10, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 900005610, 1038521680, 100, 800, 1038528600);
    $InitializeCommonEvent(0, 90005683, 62314, 1038521200, 211, 78392, 78392);
});

//prevent tibia mariner from dying when entering area
$Event(50, Restart, function() {
    SetEventFlagID(1038520340, OFF);
    SetEventFlagID(1038520800, OFF);
});

// 夜の王の眷属が巨大骸骨をターゲット認識できるようにするイベント -- An event that allows the Night King's followers to recognize giant skeletons as targets.
$Event(1038522339, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(EventFlag(1038520800));
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFor(CharacterDead(chrEntityId2));
    WaitFixedTimeSeconds(5);
    WaitFor(!CharacterDead(chrEntityId2));
    RestartEvent();
});

// 夜の王の眷属土葬スケルトン呼び_XX -- Night King's Heir Burial Skeleton Call_XX
$Event(1038522341, Restart, function(chrEntityId, generatorEntityId, generatorEntityId2, generatorEntityId3, generatorEntityId4, generatorEntityId5, generatorEntityId6, spEffectId, spEffectId2, spEffectId3, spEffectId4) {
    chr = CharacterDead(1038520340);
    EndIf(chr);
    if (chr) {
        DisableGenerator(generatorEntityId);
        DisableGenerator(generatorEntityId2);
        DisableGenerator(generatorEntityId3);
        DisableGenerator(generatorEntityId4);
        DisableGenerator(generatorEntityId5);
        DisableGenerator(generatorEntityId6);
        ForceCharacterDeath(1038525230, false);
    }
L0:
    if (!EventFlag(1038522230)) {
        DisableGenerator(generatorEntityId);
        DisableGenerator(generatorEntityId2);
        DisableGenerator(generatorEntityId3);
        DisableGenerator(generatorEntityId4);
        DisableGenerator(generatorEntityId5);
        DisableGenerator(generatorEntityId6);
        ForceCharacterDeath(1038525230, false);
    }
L1:
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId) && !CharacterDead(chrEntityId));
    if (CharacterHasSpEffect(chrEntityId, spEffectId2)) {
        EnableGenerator(generatorEntityId);
        EnableGenerator(generatorEntityId4);
        EnableGenerator(generatorEntityId5);
        EnableGenerator(generatorEntityId6);
    }
L1:
    if (CharacterHasSpEffect(chrEntityId, spEffectId3)) {
        EnableGenerator(generatorEntityId2);
        EnableGenerator(generatorEntityId4);
        EnableGenerator(generatorEntityId5);
        EnableGenerator(generatorEntityId6);
    }
L2:
    if (CharacterHasSpEffect(chrEntityId, spEffectId4)) {
        EnableGenerator(generatorEntityId3);
        EnableGenerator(generatorEntityId4);
        EnableGenerator(generatorEntityId5);
        EnableGenerator(generatorEntityId6);
    }
L3:
    WaitFixedTimeSeconds(5);
    DisableGenerator(generatorEntityId);
    DisableGenerator(generatorEntityId2);
    DisableGenerator(generatorEntityId3);
    DisableGenerator(generatorEntityId4);
    DisableGenerator(generatorEntityId5);
    DisableGenerator(generatorEntityId6);
    SetEventFlagID(1038522230, ON);
    RestartEvent();
});

// 夜の王の眷属ワープ処理_XX -- Night King's Heir Warp Process_XX
$Event(1038522342, Restart, function(chrEntityId, spEffectId, chrEntityId2, chrEntityId3, chrEntityId4, spEffectId2, spEffectId3, spEffectId4) {
    EndIf(EventFlag(1038520800));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    SetEventFlagID(1038520340, OFF);
    RandomlySetEventFlagInRange(1038520340, 1038520341, ON);
    if (CharacterHasSpEffect(chrEntityId, spEffectId2)) {
        if (!EventFlag(1038520340)) {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId3, -1, chrEntityId);
            EnableCharacter(chrEntityId);
            EnableCharacterCollision(chrEntityId);
        } else {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId4, -1, chrEntityId);
            EnableCharacter(chrEntityId);
            EnableCharacterCollision(chrEntityId);
        }
        ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
    } else if (CharacterHasSpEffect(chrEntityId, spEffectId3)) {
        if (!EventFlag(1038520341)) {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
            EnableCharacter(chrEntityId);
            EnableCharacterCollision(chrEntityId);
        } else {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId4, -1, chrEntityId);
            EnableCharacter(chrEntityId);
            EnableCharacterCollision(chrEntityId);
        }
        ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
    } else if (CharacterHasSpEffect(chrEntityId, spEffectId4)) {
        if (!EventFlag(1038520340)) {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
            EnableCharacter(chrEntityId);
            EnableCharacterCollision(chrEntityId);
        } else {
            WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId3, -1, chrEntityId);
            EnableCharacter(chrEntityId);
            EnableCharacterCollision(chrEntityId);
        }
        ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
        Goto(L0);
    }
L0:
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

// 夜の王の眷属領域検索_XX -- Night King's Heir Domain Search_XX
$Event(1038522343, Restart, function(chrEntityId, areaEntityId, spEffectId) {
    EndIf(EventFlag(1038520800));
    WaitFor(
        InArea(chrEntityId, areaEntityId) && CharacterHasSpEffect(chrEntityId, spEffectId, Equal, 0));
    SetSpEffect(chrEntityId, spEffectId);
    RestartEvent();
});

// 夜の王の眷属死亡時イベント_XX -- Night King's Follower Death Event_XX
$Event(1038522344, Restart, function(eventFlagId, chrEntityId, chrEntityId2, chrEntityId3) {
    if (EventFlag(eventFlagId)) {
        DisableGenerator(1038523350);
        DisableCharacter(chrEntityId2);
        DisableCharacterCollision(chrEntityId2);
        ForceCharacterDeath(chrEntityId2, false);
        DisableCharacter(chrEntityId3);
        DisableCharacterCollision(chrEntityId3);
        ForceCharacterDeath(chrEntityId3, false);
        EndEvent();
    }
    WaitFor(CharacterDead(chrEntityId));
    WaitFor(mainGroupAbuse);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    DisableGenerator(1038522230);
    DisableGenerator(1038522231);
    DisableGenerator(1038522232);
    DisableGenerator(1038522240);
    DisableGenerator(1038522241);
    DisableGenerator(1038522242);
    DisableGenerator(1038523350);
    ForceCharacterDeath(chrEntityId2, false);
    WaitFixedTimeSeconds(15);
    DisableCharacter(chrEntityId3);
    DisableCharacterCollision(chrEntityId3);
    ForceCharacterDeath(chrEntityId3, false);
    EndEvent();
});

// 巨大スケルトン死亡アニメ再生 -- giant skeleton death anime play
$Event(1038522345, Restart, function(chrEntityId, chrEntityId2, spEffectId) {
    WaitFor(CharacterHPValue(chrEntityId) == 0);
    WaitFor(CharacterHasSpEffect(chrEntityId2, spEffectId));
    ForceCharacterDeath(chrEntityId2, true);
    EndEvent();
});

// 夜の王の眷属ワープ処理_高山水没遺跡用 -- Night King's Heir Warp Processing_For Alpine Submerged Ruins
$Event(1038522346, Restart, function(chrEntityId, eventFlagId, spEffectId, chrEntityId2, eventFlagId2, spEffectId2, spEffectId3, spEffectId4, chrEntityId3, chrEntityId4, chrEntityId5) {
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterHasSpEffect(chrEntityId, spEffectId));
    if (HPRatio(chrEntityId) <= 0.5) {
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    }
    GotoIf(L1, CharacterHasSpEffect(chrEntityId, spEffectId2));
    GotoIf(L2, CharacterHasSpEffect(chrEntityId, spEffectId3));
    GotoIf(L3, CharacterHasSpEffect(chrEntityId, spEffectId4));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId2, -1, chrEntityId);
    Goto(L0);
L1:
    GotoIf(S0, EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId4, -1, chrEntityId);
    Goto(L0);
S0:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId5, -1, chrEntityId);
    Goto(L0);
L2:
    GotoIf(S1, EventFlag(eventFlagId2));
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId3, -1, chrEntityId);
    Goto(L0);
S1:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId5, -1, chrEntityId);
    Goto(L0);
L3:
    WarpCharacterAndCopyFloor(chrEntityId, TargetEntityType.Area, chrEntityId4, -1, chrEntityId);
    Goto(L0);
L0:
    ForceAnimationPlayback(chrEntityId, 3022, true, false, false);
    RequestCharacterAIReplan(chrEntityId);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// 夜の王の眷属_ターゲットクリアイベント_XX -- Heir of the Night King_Target Clear Event_XX
$Event(1038522347, Restart, function(chrEntityId, areaEntityId, eventFlagId, chrEntityId2) {
    DisableNetworkSync();
    EndIf(EventFlag(eventFlagId));
    WaitFor(CharacterTargetedBy(chrEntityId, 20000) && !InArea(20000, areaEntityId));
    ClearCharactersAITarget(chrEntityId);
    WaitFixedTimeSeconds(1);
    SetCharacterEventTarget(chrEntityId, chrEntityId2);
    SetCharacterEventTarget(chrEntityId2, chrEntityId);
    WaitFixedTimeSeconds(5);
    RestartEvent();
});

// 眷属関連の非揮発フラグ立ちっぱなしになってたら折るイベント -- An event to fold if a non-volatile flag related to a dependent is left standing.
$Event(1038522349, End, function() {
    SetEventFlagID(1038520340, OFF);
    SetEventFlagID(1038520341, OFF);
    SetEventFlagID(1038520343, OFF);
    EndEvent();
});

// 夜の王の眷属視界拡大 -- Expanded visibility of the Night King's followers
$Event(1038522350, Restart, function() {
    SetSpEffect(1038520340, 8092);
    EndEvent();
});
