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
    $InitializeCommonEvent(0, 90005211, 1048510202, 30001, 20001, 0, 0, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005476, 1048510800, 1048510810);
    $InitializeEvent(0, 1048512820, 1048510800, 1048510810);
    $InitializeCommonEvent(0, 90005871, 1048510800, 903150607, 10, 1048510810);
    $InitializeCommonEvent(0, 1048512800, 1048510800, 0, 1048510800, 0, 1048510700, 0);
    $InitializeCommonEvent(0, 90005872, 1048510800, 10, 0);
});

// ルーン狩りの騎士_フィールドボス撃破 -- Rune Hunting Knight_Defeat Field Boss
$Event(1048512800, Restart, function(eventFlagId, eventFlagId2, chrEntityId, value, itemLotId, timeSeconds) {
    if (Signed(itemLotId) != 0) {
        Unknown200476(eventFlagId, itemLotId);
    }
    if (EventFlag(eventFlagId)) {
        DisableCharacter(chrEntityId);
        DisableCharacterCollision(chrEntityId);
        ForceCharacterDeath(chrEntityId, false);
        DisableCharacter(1048510810);
        DisableCharacterCollision(1048510810);
        ForceCharacterDeath(1048510810, false);
        EndIf(!PlayerIsInOwnWorld());
        EndIf(Signed(itemLotId) == 0);
        WaitFixedTimeSeconds(1);
        AwardItemsIncludingClients(itemLotId);
        EndEvent();
    }
L0:
    EndIf(!EventFlag(1049308089)); //end if boss not selected
    WaitFor(CharacterHPValue(chrEntityId) <= 0);
    WaitFixedTimeSeconds(2);
    PlaySE(chrEntityId, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(chrEntityId));
    GotoIf(S0, value == 3);
    if (value != 2) {
        if (value != 1) {
            HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.EnemyFelled);
            Goto(L1);
        }
        HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.GreatEnemyFelled);
    }
    Goto(L1);
S0:
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.DemigodFelled);
    Goto(L1);
    HandleBossDefeatAndDisplayBanner(chrEntityId, TextBannerType.LegendFelled);
L1:
    //boss rewards (3 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001033, 1049304236, 1049304134, -1, -1, 1049307012, 1049307013, 1049307014, 1049307015, 1049305800, 1049305802, 1049305804, 1049305808, 1049300236);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307489);
    EndEvent(); //end
    SetEventFlagID(eventFlagId, ON);
    if (eventFlagId2 != 0) {
        SetEventFlagID(eventFlagId2, ON);
    }
    EndIf(!PlayerIsInOwnWorld());
    EndIf(Signed(itemLotId) == 0);
    WaitFixedTimeSeconds(5);
    AwardItemsIncludingClients(itemLotId);
    EndEvent();
    WaitFixedTimeSeconds(timeSeconds);
});

// ルーン狩りの騎士_時間帯によって馬召喚を禁止する -- Rune Hunting Knight_Horse summoning is prohibited depending on the time of day.
$Event(1048512820, Restart, function(chrEntityId, chrEntityId2) {
    if (CharacterDead(chrEntityId)) {
        EndEvent();
    }
    if (!CharacterHasSpEffect(chrEntityId, 11825)) {
        WaitFor(CharacterBackreadStatus(chrEntityId2));
        SetSpEffect(chrEntityId, 11825);
        WaitFixedTimeSeconds(1);
        RestartEvent();
    }
L0:
    WaitFor(!CharacterBackreadStatus(chrEntityId2));
    SetSpEffect(chrEntityId, 11826);
    WaitFixedTimeSeconds(1);
    RestartEvent();
});

