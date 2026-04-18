// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    $InitializeEvent(0, 2046452800);
    $InitializeEvent(0, 2046452810);
    $InitializeEvent(0, 2046452849);
    $InitializeCommonEvent(0, 90005250, 2046450200, 2046452200, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450319, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450320, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450321, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450322, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450323, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450325, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450329, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450332, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450336, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450339, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450340, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450341, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450342, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450343, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450344, 30005, 20005, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450345, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450352, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450353, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450354, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450355, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450356, 30002, 20002, 0, 0);
    $InitializeCommonEvent(0, 90005221, 2046450365, 30000, 20000, 0, 0);
    $InitializeCommonEvent(0, 900005610, 2046451599, 100, 800, 0);
    $InitializeEvent(0, 2046452550, 580410, 580110, 2046450550, 30015, 20015, 2046451550, 2046451560);
});

$Event(2046452550, Restart, function(eventFlagId, eventFlagId2, chrEntityId, animationId, animationId2, assetEntityId, assetEntityId2) {
    SetSpEffect(eventFlagId, 10124);
    DisableCharacter(chrEntityId);
    DisableCharacterCollision(chrEntityId);
    DisableAsset(assetEntityId);
    DisableAsset(assetEntityId2);
    DisableAssetTreasure(assetEntityId2);
    EndIf(EventFlag(eventFlagId));
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId2)
            && EntityInRadiusOfEntity(chrEntityId, 10000, 15, 1)
            && EventFlag(330));
    EnableCharacter(chrEntityId);
    ClearSpEffect(eventFlagId, 10124);
    ForceAnimationPlayback(chrEntityId, animationId, false, false, false);
    EnableAsset(assetEntityId);
    EnableAsset(assetEntityId2);
    ForceAnimationPlayback(assetEntityId, 2, false, false, false);
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(eventFlagId2)
            && EntityInRadiusOfEntity(chrEntityId, 10000, 5, 1));
    ForceAnimationPlayback(chrEntityId, animationId2, false, false, false);
    ForceAnimationPlayback(assetEntityId, 1, false, false, false);
    WaitFixedTimeSeconds(3.8);
    DisableCharacter(chrEntityId);
    DisableAsset(assetEntityId);
    EnableAssetTreasure(assetEntityId2);
});

//red bear
$Event(2046452800, Restart, function() {
    EndIf(!EventFlag(1049308185)); //end if boss not selected
    Unknown200476(2046450800, 30900);
    EndIf(EventFlag(2046450800));
    WaitFor(CharacterHPValue(2046450800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(2046450800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(2046450800));
    HandleBossDefeatAndDisplayBanner(2046450800, TextBannerType.EnemyFelled);
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304278, -1, -1, 1049304152, 1049307165, 1049307166, 1049307167, 1049307168, 1049306216, 1049306222, 1049306224, 1049306226, 1049300278);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307585);
});

$Event(2046452810, Restart, function() {
    if (EventFlag(2046450800)) {
        DisableCharacter(2046450800);
        DisableCharacterCollision(2046450800);
        ForceCharacterDeath(2046450800, false);
        EndIf(!PlayerIsInOwnWorld());
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(30900);
        EndEvent();
    }
L0:
    DisableCharacterAI(2046450800);
    SetCharacterTeamType(2046450800, TeamType.Enemy);
    DisableCharacter(2046450800);
    WaitFor(EventFlag(2046452805) && InArea(10000, 2046452800));
    EnableCharacter(2046450800);
    ForceAnimationPlayback(2046450800, 63100, false, true, false);
    WaitFixedTimeRealFrames(1);
    EnableCharacterAI(2046450800);
    SetNetworkUpdateRate(2046450800, true, CharacterUpdateFrequency.AlwaysUpdate);
    DisplayBossHealthBar(Enabled, 2046450800, 0, 900000560);
});

$Event(2046452849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 2046450800, 2046451800, 2046452800, 2046452805, 2046455800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 2046450800, 2046451800, 2046452800, 2046452805, 2046452806, 10000);
    $InitializeCommonEvent(0, 9005811, 2046450800, 2046451800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 2046450800, 921100, 2046452805, 2046452806, 0, 2046452802, 0, 0);
});

