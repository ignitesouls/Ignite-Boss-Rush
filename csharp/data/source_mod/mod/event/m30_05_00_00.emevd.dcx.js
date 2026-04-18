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
    $InitializeCommonEvent(0, 90005646, 30050800, 30052840, 30052841, 30051840, 30052840, 30, 5, 0, 0);
    $InitializeCommonEvent(0, 90005646, 30050850, 30052890, 30052891, 30051890, 30052840, 30, 5, 0, 0);
    RegisterBonfire(300500, 30051950, 0, 0, 0, 5);
    $InitializeEvent(0, 30052880);
    $InitializeEvent(0, 30052800);
    $InitializeEvent(0, 30052810);
    $InitializeEvent(0, 30052849);
    $InitializeEvent(0, 30052811);
    $InitializeEvent(0, 30052850);
    $InitializeEvent(0, 30052860);
    $InitializeEvent(0, 30052899);
    $InitializeEvent(0, 30052861);
    $InitializeCommonEvent(0, 90005616, 30057030, 30052700);
    $InitializeCommonEvent(0, 90005650, 30050540, 30051540, 30051541, 30053541, 27115);
    $InitializeCommonEvent(0, 90005651, 30050540, 30051540);
    $InitializeEvent(0, 30052400);
    $InitializeCommonEvent(0, 90005513, 30050542, 30051542, 30051543, 30053543, 27002, 0, 0);
    $InitializeCommonEvent(0, 90005525, 30050570, 30051570);
    $InitializeEvent(0, 30052580);
    $InitializeCommonEvent(0, 90005620, 30050575, 30051575, 30051576, 0, 30052575, 30052576, 30052577);
    $InitializeCommonEvent(0, 90005621, 30050575, 30051578);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005200, 30050800, 30001, 20001, 30052800, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050815, 30003, 20003, 30052800, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050816, 30003, 20003, 30052800, 0.6, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050817, 30003, 20003, 30052800, 1.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050200, 30003, 20003, 30052200, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050202, 30003, 20003, 30052202, 1, 0, 0, 0, 0);
    $InitializeEvent(0, 30052203, 30050203);
    $InitializeCommonEvent(0, 90005200, 30050203, 30003, 20003, 30052202, 1.7, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050201, 30003, 20003, 30052302, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050204, 30003, 20003, 30052302, 4.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050205, 30003, 20003, 30052205, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050206, 30003, 20003, 30052205, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050207, 30052207, 0, 3021);
    $InitializeCommonEvent(0, 90005211, 30050208, 30003, 20003, 30052208, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050209, 30003, 20003, 30052209, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050210, 30003, 20003, 30052209, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050211, 30052211, 0, 3011);
    $InitializeEvent(1, 30052203, 30050212);
    $InitializeCommonEvent(0, 90005200, 30050212, 30003, 20003, 30052212, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050215, 30052215, 0, 3030);
    $InitializeCommonEvent(0, 90005200, 30050213, 30003, 20003, 30052213, 4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050214, 30003, 20003, 30052214, 9, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 30050300, 30052450, 7, 0, 0);
    $InitializeEvent(0, 30052302);
    $InitializeEvent(0, 30052300, 30050300, 30050205);
    $InitializeEvent(1, 30052300, 30050300, 30050206);
    $InitializeEvent(2, 30052300, 30050300, 30050208);
    $InitializeEvent(0, 30052350, 30050300, 30050205);
    $InitializeEvent(1, 30052350, 30050300, 30050206);
    $InitializeEvent(2, 30052350, 30050300, 30050208);
    $InitializeCommonEvent(0, 90005250, 30050301, 30052301, 0, 3015);
    $InitializeEvent(0, 30052301);
    $InitializeEvent(3, 30052300, 30050301, 30050209);
    $InitializeEvent(4, 30052300, 30050301, 30050210);
    $InitializeEvent(5, 30052300, 30050301, 30050211);
    $InitializeEvent(3, 30052350, 30050301, 30050209);
    $InitializeEvent(4, 30052350, 30050301, 30050210);
    $InitializeEvent(5, 30052350, 30050301, 30050211);
    $InitializeCommonEvent(0, 90005250, 30050302, 30052302, 0, 3015);
    $InitializeEvent(6, 30052300, 30050302, 30050201);
    $InitializeEvent(7, 30052300, 30050302, 30050204);
    $InitializeEvent(6, 30052350, 30050302, 30050201);
    $InitializeEvent(7, 30052350, 30050302, 30050204);
    $InitializeCommonEvent(0, 90005250, 30050400, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050401, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050402, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050403, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050404, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050405, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050406, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050407, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050408, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050409, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050410, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050411, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050412, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050413, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005250, 30050414, 30052400, 0, 0);
    $InitializeCommonEvent(0, 90005200, 30050450, 30001, 20001, 30052450, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 30052450, 30050451, 30001, 20001, 30052450, 8, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005780, 30050850, 30052160, 30052161, 30050700, SummonSignType.NPCWhiteSign, 30052711, 0, true, 0); //enable summon visibility
    $InitializeCommonEvent(0, 90005781, 30050850, 30052160, 30052161, 30050700);
    $InitializeCommonEvent(0, 90005782, 30052160, 30052855, 30050700, 30052855, 30052809, 0);
});

// 梯子登録 -- ladder registration
$Event(30052580, Default, function() {
    RegisterLadder(30050580, 30050581, 30051580);
});

// スケルトン_奇襲_特殊効果付与_XX -- Skeleton_Surprise_Special effect_XX
$Event(30052203, Restart, function(chrEntityId) {
    EndIf(ThisEventSlot());
    SetSpEffect(chrEntityId, 17210);
    SetNetworkconnectedThisEventSlot(ON);
});

// ルーンの市民_ネクロマンサー_バフ_XX -- Rune Citizen_Necromancer_Buff_XX
$Event(30052300, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(ThisEventSlot());
    WaitFor(CharacterHasSpEffect(chrEntityId, 14716));
    SetSpEffect(chrEntityId2, 14717);
    SetNetworkconnectedThisEventSlot(ON);
});

// PCが領域に入ったら巡回を始める -- When the PCs enter the area, begin patrolling.
$Event(30052301, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        HasDamageType(30050301, 0, DamageType.Unspecified)
            || (InArea(10000, 30052310)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    SetNetworkconnectedThisEventSlot(ON);
    WaitFixedTimeSeconds(4);
    ChangeCharacterPatrolBehavior(30050301, 30053310);
});

// PCが領域に入ったらアニメを流す -- Play the anime when the PC enters the area
$Event(30052302, Restart, function() {
    EndIf(ThisEventSlot());
    WaitFor(
        HasDamageType(30050300, 0, DamageType.Unspecified)
            || (InArea(10000, 30052205)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive)
                    || CharacterType(10000, TargetType.GrayPhantom)
                    || CharacterType(10000, TargetType.WhitePhantom))));
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(30050300, 3015, false, false, false);
});

// ルーンの市民_ネクロマンサー_死亡_XX -- Citizen of Rune_Necromancer_Death_XX
$Event(30052350, Restart, function(chrEntityId, chrEntityId2) {
    EndIf(ThisEventSlot());
    WaitFor(
        CharacterDead(chrEntityId)
            && CharacterHasSpEffect(chrEntityId2, 14717)
            && (!CharacterHasSpEffect(chrEntityId2, 5080) || !CharacterHasSpEffect(chrEntityId2, 5450)));
    WaitFixedTimeSeconds(0.8);
    ClearSpEffect(chrEntityId2, 5860);
    ForceCharacterDeath(chrEntityId2, true);
    SetNetworkconnectedThisEventSlot(ON);
});

// 地下墓地ギロチン起動 -- Catacombs guillotine activated
$Event(30052400, Default, function() {
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202070, 4, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202060, 4, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202050, 4, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202040, 4, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202030, 4, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202020, 4, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202010, 4, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005675, 30052650, 30053500, 30051500, 30052650, 801202000, 4, 0);
    }
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202070, 2, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202060, 2, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202050, 2, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202040, 2, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202030, 2, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202020, 2, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202010, 2, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005675, 30052702, 30053502, 30051502, 30052650, 801202000, 2, 0);
    }
    if (EventFlag(57)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202070, 0, 0);
    }
    if (EventFlag(56)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202060, 0, 0);
    }
    if (EventFlag(55)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202050, 0, 0);
    }
    if (EventFlag(54)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202040, 0, 0);
    }
    if (EventFlag(53)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202030, 0, 0);
    }
    if (EventFlag(52)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202020, 0, 0);
    }
    if (EventFlag(51)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202010, 0, 0);
    }
    if (EventFlag(50)) {
        $InitializeCommonEvent(0, 90005675, 30052704, 30053504, 30051504, 30052650, 801202000, 0, 0);
    }
});

// カニ_大_特殊待機_ルートによって解除タイミングが違う -- Crab_Large_Special standby_Release timing differs depending on route
$Event(30052450, Restart, function(chrEntityId, animationId, animationId2, areaEntityId, timeSeconds, value, value2, value3, value4) {
    EndIf(SpecialStandbyEndedFlag(chrEntityId));
    if (value != 0) {
        DisableCharacterGravity(chrEntityId);
        SetCharacterMaphit(chrEntityId, false);
    }
    ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.BluePhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    areaChrSp &= (InArea(10000, areaEntityId) || InArea(10000, 30052451))
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
    areaChrSp &= chrSp;
    WaitFor(
        areaChrSp
            || HasDamageType(chrEntityId, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId, 436)
            || CharacterHasStateInfo(chrEntityId, 2)
            || CharacterHasStateInfo(chrEntityId, 5)
            || CharacterHasStateInfo(chrEntityId, 6)
            || CharacterHasStateInfo(chrEntityId, 260));
    WaitFixedTimeSeconds(0.1);
    SetNetworkconnectedThisEventSlot(ON);
    SetSpecialStandbyEndedFlag(chrEntityId, ON);
    if (!(!CharacterHasSpEffect(chrEntityId, 5080) && !CharacterHasSpEffect(chrEntityId, 5450))) {
        if (!InArea(10000, 30052451)) {
            WaitFixedTimeSeconds(timeSeconds);
            if (value != 0) {
                EnableCharacterGravity(chrEntityId);
                SetCharacterMaphit(chrEntityId, true);
            }
            ForceAnimationPlayback(chrEntityId, animationId2, true, false, false);
            EndEvent();
        }
        WaitFixedTimeSeconds(2.5);
        if (value != 0) {
            EnableCharacterGravity(chrEntityId);
            SetCharacterMaphit(chrEntityId, true);
        }
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

//cemetery shade
$Event(30052800, Restart, function() {
    EndIf(!EventFlag(1049308113)); //end if boss not selected
    EndIf(EventFlag(30050800));
    WaitFor(CharacterHPValue(30050800) <= 0);
    ForceCharacterDeath(30055800, false);
    WaitFixedTimeSeconds(4);
    PlaySE(30050800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30050800));
    HandleBossDefeatAndDisplayBanner(30050800, TextBannerType.EnemyFelled);
    ForceCharacterDeath(30050816, false);
    ForceCharacterDeath(30050815, false);
    ForceCharacterDeath(30050817, false);
    //boss rewards (3 bonus items)
    InitializeCommonEvent(0, 90001033, 1049304134, 1049304047, -1, 1049304004, 1049304550, 1049304551, 1049304552, 1049304553, -1, 1049304577, 1049304580, 1049304584, 1049300134);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307513);
});

//bk assassin
$Event(30052850, Restart, function() {
    EndIf(!EventFlag(1049308112)); //end if boss not selected
    EndIf(EventFlag(30050850));
    WaitFor(CharacterHPValue(30050850) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(30050850, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(30050850));
    HandleBossDefeatAndDisplayBanner(30050850, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items)
    InitializeCommonEvent(0, 90001034, 1049304132, 1049304043, 1049304047, -1, 1049304540, 1049304541, 1049304542, 1049304543, 1049304544, -1, 1049304549, 1049304552, 1049304557, 1049304559, 1049300132);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307512);
});

// ボス出現 -- Boss appears
$Event(30052810, Restart, function() {
    if (EventFlag(30050800)) {
        DisableCharacter(30055800);
        DisableCharacter(30060815);
        DisableCharacter(30060816);
        DisableCharacter(30060817);
        DisableCharacterCollision(30055800);
        DisableCharacterCollision(30060815);
        DisableCharacterCollision(30060816);
        DisableCharacterCollision(30060817);
        ForceCharacterDeath(30055800, false);
        ForceCharacterDeath(30050816, false);
        ForceCharacterDeath(30050815, false);
        ForceCharacterDeath(30050817, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30050800);
    DisableObjAct(30051670, -1);
    WaitFor(EventFlag(30052805) && InArea(10000, 30052800));
    EnableCharacterAI(30050800);
    SetNetworkUpdateRate(30050800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30050800, 0, 903664301);
});

// ボス激昂 -- boss rage
$Event(30052811, Restart, function() {
    EndIf(EventFlag(30050800));
    WaitFor(HPRatio(30050800) <= 0.6);
    SetEventFlagID(30052802, ON);
});

// 協力NPC_ボス部屋入場 -- Cooperating NPC_Boss room entrance
$Event(30052825, Default, function(eventFlagId, eventFlagId2, chrEntityId, entityId, areaEntityId, animationId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(EventFlag(eventFlagId) && EventFlag(eventFlagId2));
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
});

// 隠しボス含めてマルチ権限対応 -- Multi-authority support including hidden bosses
$Event(30052880, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    flag = (EventFlag(30050570) && !EventFlag(30050850)) || !EventFlag(30050800);
    SetEventFlagID(30050880, ON);
    if (flag) {
        SetEventFlagID(30050880, OFF);
    }
    WaitFor(
        EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 30050800)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 30050850)
            || EventFlagState(CHANGE, TargetEventFlagType.EventFlag, 30050570));
    RestartEvent();
});

// 隠しボス_ボス出現 -- Hidden boss_boss appearance
$Event(30052860, Restart, function() {
    if (EventFlag(30050850)) {
        DisableCharacter(30050850);
        DisableCharacterCollision(30050850);
        ForceCharacterDeath(30050850, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(30050850);
    WaitFor(EventFlag(30052855) && InArea(10000, 30052855));
    EnableCharacterAI(30050850);
    SetNetworkUpdateRate(30050850, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 30050850, 0, 902100301);
});

// 隠しボス激昂 -- Hidden boss rage
$Event(30052861, Restart, function() {
    EndIf(EventFlag(30050850));
    WaitFor(HPRatio(30050850) <= 0.6);
    SetEventFlagID(30052852, ON);
});

// ボス_イベント起動 -- Boss_event activation
$Event(30052849, Restart, function() {
    $InitializeEvent(0, 30052870, 30050800, 30051800, 30052800, 30052805, 30055800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30050800, 30051800, 30052800, 30052805, 30052806, 10000);
    $InitializeCommonEvent(0, 9005813, 30050800, 30051800, 3, 0, 3);
    $InitializeCommonEvent(0, 9005822, 30050800, 930000, 30052805, 30052806, 0, 30052802, 0, 0);
});

// 隠しボス_イベント起動 -- Hidden boss_event activation
$Event(30052899, Restart, function() {
    $InitializeEvent(1, 30052870, 30050850, 30051850, 30052855, 30052855, 30055850, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 30050850, 30051850, 30052855, 30052855, 30052856, 10000);
    $InitializeCommonEvent(0, 9005813, 30050850, 30051850, 3, 0, 3);
    $InitializeCommonEvent(0, 9005822, 30050850, 921500, 30052855, 30052856, 0, 30052852, 0, 0);
});

// ホストがボス部屋入場_ガストも帰還する -- Host enters boss room_Gust also returns
$Event(30052870, Restart, function(eventFlagId, entityId, areaEntityId, eventFlagId2, chrEntityId, actionButtonParameterId, eventFlagId3, areaEntityId2) {
    if (!EventFlag(eventFlagId)) {
        WaitFixedTimeFrames(1);
        if (eventFlagId3 != 0) {
            GotoIf(L0, EventFlag(eventFlagId3));
            if (areaEntityId2 != 0) {
                areaFlag |= InArea(10000, areaEntityId2);
            }
            areaFlag |= EventFlag(eventFlagId3);
            WaitFor((areaFlag && PlayerIsInOwnWorld()) || EventFlag(eventFlagId));
            RestartIf(EventFlag(eventFlagId));
            Goto(L1);
        }
L0:
        if (PlayerIsInOwnWorld()) {
            WaitFor(
                EventFlag(eventFlagId)
                    || (PlayerIsInOwnWorld()
                        && !EventFlag(eventFlagId)
                        && ActionButtonInArea(actionButtonParameterId, entityId)));
            GotoIf(L2, !PlayerIsInOwnWorld());
            RestartIf(EventFlag(eventFlagId));
            SuppressSoundForFogGate(5);
            if (!CharacterHasSpEffect(10000, 4250)) {
                RotateCharacter(10000, areaEntityId, 60060, true);
            } else {
                RotateCharacter(10000, areaEntityId, 60060, false);
            }
        }
L3:
        GotoIf(L1, EventFlag(eventFlagId2));
        time = ElapsedSeconds(3);
        WaitFor(
            ((InArea(10000, areaEntityId) || time)
                && PlayerIsInOwnWorld()
                && !EventFlag(eventFlagId))
                || EventFlag(eventFlagId));
        RestartIf(EventFlag(eventFlagId));
        RestartIf(time.Passed);
L1:
        if (PlayerIsInOwnWorld()) {
            IssueBossRoomEntryNotification();
            SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Forced);
        }
L2:
        ActivateMultiplayerdependantBuffs(chrEntityId);
        SetNetworkconnectedEventFlagID(eventFlagId2, ON);
        EndIf(!PlayerIsInOwnWorld());
        RestartEvent();
    }
L10:
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId)
            && (HasMultiplayerState(MultiplayerState.Invasion)
                || HasMultiplayerState(MultiplayerState.InvasionPending))
            && ActionButtonInArea(10000, entityId));
    RotateCharacter(10000, areaEntityId, 60060, true);
    SendAllPhantomsHome();
    SendInvadingPhantomsHome(0);
    RestartEvent();
});
