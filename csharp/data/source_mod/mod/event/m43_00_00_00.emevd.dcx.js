// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(43000000, 43001950, 0, 0, 0, 5);
    $InitializeEvent(0, 43002800);
    $InitializeEvent(0, 43002810);
    $InitializeEvent(0, 43002811);
    $InitializeEvent(0, 43002849);
    $InitializeCommonEvent(0, 90005250, 43000202, 43002202, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000208, 43002202, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000209, 43002202, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000203, 43002203, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000208, 43002203, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000210, 43002203, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000203, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000204, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000205, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000206, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000207, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000209, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000211, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000212, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000213, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000214, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000215, 43002204, 0, -1);
    $InitializeCommonEvent(0, 90005250, 43000216, 43002204, 0, -1);
    $InitializeEvent(0, 43002300, 43005200, 43000207, 0, -1);
    $InitializeEvent(0, 43002300, 43005200, 43000204, 0, -1);
    $InitializeCommonEvent(0, 90005200, 43000234, 30001, 20001, 43002234, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 43000235, 30003, 20003, 43002234, 0.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 43000236, 30012, 20022, 43002237, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 43000237, 30012, 20022, 43002237, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 43000238, 30012, 20022, 43002237, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005250, 43000236, 43002237, 0.1, 0);
    $InitializeCommonEvent(0, 90005250, 43000237, 43002237, 0.1, 0);
    $InitializeCommonEvent(0, 90005250, 43000238, 43002237, 0.1, 0);
    $InitializeCommonEvent(0, 90005250, 43000240, 43002240, 0, 3001);
    $InitializeCommonEvent(0, 90005250, 43000240, 43002233, 0, 0);
    $InitializeCommonEvent(0, 90005250, 43000241, 43002241, 0, 3008);
    $InitializeEvent(0, 43002350, 43000233, 30005, 20005, 5, 0, 0, 0, 0, 0);
    $InitializeEvent(0, 43002500);
    $InitializeEvent(0, 43002501);
    $InitializeCommonEvent(0, 90005646, 43000800, 43002840, 43002841, 43001840, 43002840, 43, 0, 0, 0);
    $InitializeCommonEvent(0, 900005610, 43001680, 100, 800, 0);
});

$Event(43002500, Restart, function() {
    if (EventFlag(43000500)) {
        DisableAsset(43001500);
        EndEvent();
    }
L0:
    EnableAssetInvunerability(43001500);
    WaitFor(
        ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
            || CharacterType(10000, TargetType.Alive)
            || CharacterType(10000, TargetType.BluePhantom)
            || CharacterType(10000, TargetType.WhitePhantom))
            && InArea(10000, 43002500));
    DisableAssetInvunerability(43001500);
    SetEventFlagID(43000500, ON);
    EndEvent();
});

$Event(43002501, Restart, function() {
    if (EventFlag(43000500)) {
        ReproduceAssetAnimation(43001510, 101101);
        EndEvent();
    }
L0:
    WaitFor(EventFlag(43000500));
    ForceAnimationPlayback(43001510, 101101, false, true, false);
    ReproduceAssetAnimation(43001510, 101101);
    EndEvent();
});

$Event(43002300, Restart, function(chrEntityId, chrEntityId2, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    WaitFor(
        HasDamageType(chrEntityId2, 0, DamageType.Unspecified)
            || CharacterHasStateInfo(chrEntityId2, 436)
            || CharacterHasStateInfo(chrEntityId2, 2)
            || CharacterHasStateInfo(chrEntityId2, 5)
            || CharacterHasStateInfo(chrEntityId2, 6)
            || CharacterHasStateInfo(chrEntityId2, 260)
            || (CharacterHasSpEffect(chrEntityId, 481)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90110)
                && !CharacterHasSpEffect(chrEntityId, 90160))
            || (CharacterHasSpEffect(chrEntityId, 482)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90120)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 483)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90140)
                && !CharacterHasSpEffect(chrEntityId, 90160)
                && !CharacterHasSpEffect(chrEntityId, 90161))
            || (CharacterHasSpEffect(chrEntityId, 484)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90130)
                && !CharacterHasSpEffect(chrEntityId, 90161)
                && !CharacterHasSpEffect(chrEntityId, 90162))
            || (CharacterHasSpEffect(chrEntityId, 487)
                && !CharacterHasSpEffect(chrEntityId, 90100)
                && !CharacterHasSpEffect(chrEntityId, 90150)
                && !CharacterHasSpEffect(chrEntityId, 90160)));
    SetNetworkconnectedThisEventSlot(ON);
    if (and1.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
});

$Event(43002350, Restart, function(chrEntityId, animationId, animationId2, targetDistance, timeSeconds, value, value2, value3, value4) {
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
    areaChrSp &= EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1)
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
        CharacterDead(43000230)
            || CharacterDead(43000231)
            || CharacterDead(43000232)
            || areaChrSp
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

//chief bloodfiend
$Event(43002800, Restart, function() {
    EndIf(!EventFlag(1049308183)); //end if boss not selected
    EndIf(EventFlag(43000800));
    WaitFor(CharacterHPValue(43000800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(43008000, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(43000800));
    HandleBossDefeatAndDisplayBanner(43000800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001034, 1049304268, -1, -1, 1049304152, 1049307155, 1049307156, 1049307157, 1049307158, 1049307159, 1049306187, 1049306189, 1049306191, 1049306195, 1049306200, 1049300268);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307583);
});

$Event(43002810, Restart, function() {
    if (EventFlag(43000800)) {
        DisableCharacter(43000800);
        DisableCharacterCollision(43000800);
        ForceCharacterDeath(43000800, false);
        EndEvent();
    }
L0:
    DisableCharacterAI(43000800);
    WaitFor(EventFlag(43002805) && InArea(10000, 43002800));
L2:
    EnableCharacterAI(43000800);
    SetNetworkUpdateRate(43000800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 43000800, 0, 905081430);
});

$Event(43002811, Restart, function() {
    EndIf(EventFlag(43000800));
    WaitFor(HPRatio(43000800) <= 0.6);
    SetEventFlagID(43002802, ON);
});

$Event(43002849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 43000800, 43001800, 43002800, 43002805, 43005800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 43000800, 43001800, 43002800, 43002805, 43002806, 10000);
    $InitializeCommonEvent(0, 9005811, 43000800, 43001800, 4, 0);
    $InitializeCommonEvent(0, 9005822, 43000800, 931000, 43002805, 43002806, 0, 43002802, 0, 0);
});

