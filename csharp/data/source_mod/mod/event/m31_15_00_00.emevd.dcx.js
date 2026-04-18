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
    RegisterBonfire(31150000, 31151950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005250, 31155800, 31152500, 0, 0);
    $InitializeEvent(0, 31152800);
    $InitializeEvent(0, 31152810);
    $InitializeEvent(0, 31152820, 31150800);
    $InitializeEvent(1, 31152820, 31150801);
    $InitializeEvent(0, 31152849);
    $InitializeEvent(0, 31152816);
    $InitializeEvent(0, 31152830, 31150815, 31150100);
    $InitializeEvent(0, 31152811);
    $InitializeCommonEvent(0, 90005780, 31150800, 31152160, 31152161, 31150710, SummonSignType.NPCWhiteSign, 31152701, 0, true, 0); //enable summon visibility
    $InitializeCommonEvent(0, 90005781, 31150800, 31152160, 31152161, 31150710);
    $InitializeEvent(0, 31152825, 31152160, 31152805, 31150710, 31152500, 31152809, 0);
    $InitializeCommonEvent(0, 90005646, 31150800, 31152840, 31152841, 31151840, 31152840, 31, 15, 0, 0);
    $InitializeCommonEvent(0, 90005702, 31150700, 3943, 3940, 3944);
    $InitializeEvent(0, 31153700, 31150700);
    $InitializeEvent(0, 31153701, 30);
    $InitializeEvent(0, 31153710);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(31150700, true);
    $InitializeCommonEvent(0, 90005250, 31150800, 31152800, 0, -1);
    $InitializeCommonEvent(0, 90005250, 31150801, 31152800, 0, -1);
    $InitializeCommonEvent(0, 90005251, 31150213, 7, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31150217, 30000, 20000, 31152217, 2, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 31150230, 30001, 20001, 31152217, 2, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 31150219, 31152219, 2, 1, 0);
    $InitializeCommonEvent(0, 90005261, 31150220, 31152219, 2, 0, 0);
    $InitializeEvent(0, 31152570);
});

// 亜人針子隣の光源制御 -- Light source control next to the demi-human seamstress
$Event(31152570, Restart, function() {
    WaitFixedTimeRealFrames(1);
    EndIf(EventFlag(31152570));
    DisableAsset(31151700);
    DeleteAssetfollowingSFX(31151700, true);
    if (EventFlag(3946)) {
        EnableAsset(31151700);
    }
});

// チュートリアルメッセージ_サインだまり解放 -- Tutorial message_Release of signature pile
$Event(31152650, Restart, function(tutorialParamId, eventFlagId, eventFlagId2) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(700690));
    WaitFor(EventFlag(eventFlagId2) && !EventFlag(700690));
    SetEventFlagID(eventFlagId, ON);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, 9126, eventFlagId, 1);
    SetEventFlagID(700690, ON);
});

//demi-human chief x2
$Event(31152800, Restart, function() {
    EndIf(!EventFlag(1049308133)); //end if boss not selected
    EndIf(EventFlag(31150800));
    WaitFor(CharacterDead(31150800) && CharacterDead(31150801));
    WaitFixedTimeSeconds(2);
    PlaySE(31150800, SoundType.SFX, 888880000);
    TriggerAISound(4132, 31152810, TargetEntityType.Area);
    TriggerAISound(4132, 31152811, TargetEntityType.Area);
    HandleBossDefeatAndDisplayBanner(31150800, TextBannerType.EnemyFelled);
    //boss rewards
    InitializeCommonEvent(0, 90001033, 1049304109, 1049304014, -1, 1049304004, 1049304438, 1049304439, 1049304440, 1049304441, -1, 1049304294, 1049304297, 1049304299, 1049300109);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307533);
});

// ボス出現 -- Boss appears
$Event(31152810, Restart, function() {
    if (EventFlag(31150800)) {
        DisableCharacter(31150800);
        DisableCharacterCollision(31150800);
        ForceCharacterDeath(31150800, false);
        ForceCharacterDeath(31155800, false);
        DisableCharacter(31150801);
        DisableCharacterCollision(31150801);
        ForceCharacterDeath(31150801, false);
        EndEvent();
    }
L0:
    if (!EventFlag(31150815)) {
        DisableCharacter(31150800);
        onlineAreaChrFlag &= PlayerIsInOwnWorld()
            && InArea(10000, 31152800)
            && !CharacterDead(31150800)
            && CharacterBackreadStatus(31150800);
        WaitFor(
            HasDamageType(31150800, 10000, DamageType.Unspecified)
                || HasDamageType(31150801, 10000, DamageType.Unspecified)
                || onlineAreaChrFlag
                || (PlayerIsInOwnWorld()
                    && InArea(10000, 31152800)
                    && !CharacterDead(31150801)
                    && CharacterBackreadStatus(31150801)));
        if (PlayerIsInOwnWorld()) {
            SetNetworkconnectedEventFlagID(31150815, ON);
        }
        EnableCharacter(31150800);
        EndEvent();
    }
L1:
    onlineAreaChrFlag &= EventFlag(31152805) && InArea(10000, 31152800);
    dmg = HasDamageType(31150800, 10000, DamageType.Unspecified);
    WaitFor(onlineAreaChrFlag);
    SetNetworkUpdateRate(31150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150800, 0, 904120310);
    SetNetworkUpdateRate(31150801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150801, 1, 904120311);
    SetEventFlagID(31152815, ON);
    SetNetworkconnectedEventFlagID(31152805, ON);
    SendInvadingPhantomsHome(0);
    ClearSpEffect(31155200, 8081);
});

// ボス_初回戦闘白壁出現 -- Boss_First battle white wall appears
$Event(31152816, Restart, function() {
    EndIf(EventFlag(31150815) || EventFlag(31150800));
    WaitFor(
        CharacterAIState(31150801, AIStateType.Combat)
            || CharacterAIState(31150800, AIStateType.Combat));
    SetNetworkUpdateRate(31150800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150800, 0, 904120310);
    SetNetworkUpdateRate(31150801, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 31150801, 1, 904120311);
    SetEventFlagID(31152815, ON);
    ClearSpEffect(31155200, 8081);
    SetCharacterAIId(0, 0);
});

// ボス激昂 -- boss rage
$Event(31152811, Restart, function() {
    EndIf(EventFlag(31150800));
    WaitFor(CharacterDead(31150800) || CharacterDead(31150801));
    SetEventFlagID(31152842, ON);
});

// 亜人バーサーカー撃破時姿隠し_XX -- Hiding when defeating Demi-Human Berserker_XX
$Event(31152820, Restart, function(chrEntityId) {
    EndIf(EventFlag(31150800));
    WaitFor(CharacterHasSpEffect(chrEntityId, 4306));
    SetSpEffect(chrEntityId, 4305);
});

// 協力NPC_ボス部屋入場_敵壁を無効化 -- Cooperation NPC_Enter boss room_Disable enemy wall
$Event(31152825, Default, function(eventFlagId, eventFlagId2, chrEntityId, entityId, areaEntityId, animationId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
    DisableHit(31151835);
    RequestCharacterAICommand(chrEntityId, 10, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetEventPoint(chrEntityId, areaEntityId, 0);
    time = ElapsedSeconds(4);
    WaitFor(time || InArea(chrEntityId, areaEntityId));
    RestartIf(time.Passed);
    if (Signed(animationId) != 0) {
        RotateCharacter(chrEntityId, entityId, animationId, true);
    } else {
        RotateCharacter(chrEntityId, entityId, 60060, true);
    }
    time2 = ElapsedSeconds(3);
    WaitFor(time2 || InArea(chrEntityId, eventFlagId2));
    RestartIf(time2.Passed);
    RequestCharacterAICommand(chrEntityId, -1, 0);
    RequestCharacterAIReplan(chrEntityId);
    SetNetworkUpdateRate(chrEntityId, true, CharacterUpdateFrequency.AlwaysUpdate);
    WaitFixedTimeSeconds(2);
    EnableHit(31151835);
});

// ボス部屋バディ石碑_使用可能判定 -- Boss room buddy stone monument_usable determination
$Event(31152830, Restart, function(eventFlagId, chrEntityId) {
    EndIf(EventFlag(eventFlagId));
    SetSpEffect(chrEntityId, 9531);
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, eventFlagId);
    SetSpEffect(chrEntityId, 9532);
});

// 亜人バーサーカー_イベント起動 -- Ajin Berserker_Event activation
$Event(31152849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 31150800, 31151800, 31152804, 31152805, 31155800, 10000, 31150815, 31152500);
    $InitializeCommonEvent(0, 9005801, 31150800, 31151800, 31152804, 31152805, 31152806, 10000);
    $InitializeCommonEvent(0, 9005811, 31150800, 31151800, 3, 31150815);
    $InitializeCommonEvent(0, 9005812, 31150800, 31151801, 3, 31150815, 806760);
    $InitializeCommonEvent(0, 9005822, 31150800, 931000, 31152805, 31152806, 31152815, 31152842, 0, 0);
});

// NPC223亜人針子_NPC初期化イベント_洞窟で倒れている -- NPC223 Demi-Shimiko_NPC initialization event_Collapsed in the cave
$Event(31153700, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(31159200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    GotoIf(L20, !EventFlag(3946));
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 930020, false, false, false);
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
L20:
    WaitFor(EventFlag(31159200));
    RestartEvent();
});

// NPC223亜人針子_洞窟で倒れている_能動会話再生済リセット -- NPC223 Ajin seamstress_Collapsed in the cave_Active conversation played reset
$Event(31153701, Restart, function(timeSeconds) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3946));
    EndIf(EventFlag(31159205));
    WaitFor(EventFlag(31152700));
    WaitFixedTimeSeconds(timeSeconds);
    SetEventFlagID(31152700, OFF);
    RestartEvent();
});

// NPC345火山館の依頼ターゲット1_白霊召喚許可フラグ立て -- NPC345 Volcano Hall Request Target 1_ White Spirit Summon Permission Flag Set
$Event(31153710, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(31159250, OFF);
    EndIf(EventFlag(31150800));
    EndIf(EventFlag(7602));
    SetEventFlagID(31159250, ON);
    EndEvent();
});
