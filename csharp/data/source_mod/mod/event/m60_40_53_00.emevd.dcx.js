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
    RegisterBonfire(76306, 1040531950, 0, 0, 0, 5);
    $InitializeEvent(0, 1040532800);
    $InitializeEvent(0, 1040532810);
    $InitializeEvent(0, 1040532849);
    AttachAssetToAsset(1040531201, 1040531200, 151);
    $InitializeEvent(0, 1040532650);
    $InitializeEvent(0, 1040532660);
    $InitializeEvent(0, 1040532665);
    $InitializeEvent(0, 1040532670);
    $InitializeEvent(0, 1040532680);
    $InitializeEvent(0, 1040532685);
    $InitializeEvent(0, 1040532690);
    $InitializeCommonEvent(0, 90005300, 1040530500, 1040530500, 40320, 0, 0);
    $InitializeEvent(0, 1040532700);
    if (CeremonyActive(20)) {
        $InitializeCommonEvent(0, 90005796, 7612, 1040530700, TextBannerType.HostVanquished, 1040532701);
        $InitializeEvent(0, 1040532145);
    }
    $InitializeCommonEvent(0, 90005774, 7612, 105100, 400510);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 1040530400, 1040532400, 15, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530401, 1040532400, 7, 0.4, -1);
    $InitializeCommonEvent(0, 90005261, 1040530404, 1040532404, 7, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530404, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005250, 1040530402, 1040532402, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530430, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530431, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530432, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530433, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530434, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530435, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530436, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530437, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530438, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530439, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530440, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530441, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530442, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530443, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530444, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530445, 1040532430, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530451, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530452, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530453, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530454, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530455, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530456, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530457, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530458, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530461, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530462, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530463, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530464, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1040530465, 1040532452, 5, 0, -1);
    $InitializeCommonEvent(0, 90005200, 1040530450, 30000, 20000, 1040532450, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040530250, 30010, 20010, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040530260, 30010, 20010, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1040530212, 10, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1040530267, 10, 0, -1);
    $InitializeCommonEvent(0, 90005201, 1040530263, 30001, 20001, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530207, 30004, 20004, 1040532207, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530261, 30010, 20010, 1040532207, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530262, 30010, 20010, 1040532207, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1040530405, 6, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1040530460, 5, 0, -1);
    $InitializeCommonEvent(0, 90005250, 1040530357, 1040532357, 0, 3000);
    $InitializeCommonEvent(0, 90005251, 1040530357, 2, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040530353, 30000, 20000, 5, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040530363, 30000, 20000, 8, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040530364, 30000, 20000, 8, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005201, 1040530365, 30000, 20000, 8, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005251, 1040530351, 10, 0, 0);
    $InitializeCommonEvent(0, 90005221, 1040530390, 30001, 20001, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530300, 30000, 20000, 1040532405, 1.2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530301, 30000, 20000, 1040532405, 0.3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530302, 30000, 20000, 1040532405, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1040530303, 30000, 20000, 1040532405, 0.8, 0, 0, 0, 0);
});

//sanguine noble
$Event(1040532800, Restart, function() {
    EndIf(!EventFlag(1049308162)); //end if boss not selected
    EndIf(EventFlag(1040530800));
    WaitFor(CharacterHPValue(1040530800) <= 0);
    WaitFixedTimeSeconds(4);
    PlaySE(1040530800, SoundType.SFX, 888880000);
    WaitFor(CharacterDead(1040530800));
    HandleBossDefeatAndDisplayBanner(1040530800, TextBannerType.EnemyFelled);
    //boss rewards (4 bonus items + guaranteed flag)
    InitializeCommonEvent(0, 90001034, 1049304170, 1049304073, 1049304071, -1, 1049304718, 1049304719, 1049304720, 1049304721, 1049304722, 1049305023, 1049305026, 1049305028, 1049305032, 1049305034, 1049300170);
    //boss defeat and warp
    $InitializeCommonEvent(0, 90009810, 1049307562);
});

// ボス出現 -- Boss appears
$Event(1040532810, Restart, function() {
    if (EventFlag(1040530800)) {
        DisableCharacter(1040530800);
        DisableCharacterCollision(1040530800);
        ForceCharacterDeath(1040530800, false);
        EnableObjAct(1040531560, 1110064);
        EndEvent();
    }
L0:
    DisableCharacterAI(1040530800);
    ForceAnimationPlayback(1040530800, 30000, true, false, false);
    WaitFor(EventFlag(1040532805) && InArea(10000, 1040532800));
L2:
    SetNetworkUpdateRate(1040530800, true, CharacterUpdateFrequency.AlwaysUpdate);
    ForceAnimationPlayback(1040530800, 20000, false, false, false);
    EnableCharacterAI(1040530800);
    WaitFixedTimeSeconds(2.8);
    DisplayBossHealthBar(Enabled, 1040530800, 0, 903550540);
    DisableObjAct(1040531560, 1110064);
});

// ボス_デーモンの血の信徒_イベント起動 -- Boss_Demon Blood Disciple_Event activation
$Event(1040532849, Restart, function() {
    $InitializeCommonEvent(0, 9005800, 1040530800, 1040531800, 1040532800, 1040532805, 1040535800, 10000, 0, 0);
    $InitializeCommonEvent(0, 9005801, 1040530800, 1040531800, 1040532800, 1040532805, 1040532806, 10000);
    $InitializeCommonEvent(0, 9005811, 1040530800, 1040531800, 3, 0);
    $InitializeCommonEvent(0, 9005822, 1040530800, 920900, 1040532805, 1040532806, 0, 1040532802, 0, 0);
    $InitializeCommonEvent(0, 9005812, 1040530800, 1040531801, 3, 0, 0);
});

// 魔術師の塔_ギミック装置の起動 -- Magician's Tower_Activation of gimmick device
$Event(1040532650, Restart, function() {
    if (!EventFlag(1040530655)) {
        DisableAsset(1040531650);
        DeleteMapSFX(1040532650, false);
        WaitFor(EventFlag(1039530505));
        EnableAsset(1040531650);
        SpawnMapSFX(1040532650);
        EndEvent();
    }
L0:
    DisableAsset(1040531650);
    DeleteMapSFX(1040532650, false);
    EndEvent();
});

// 魔術師の塔_ギミック装置の停止 -- Magician's Tower_Stopping the gimmick device
$Event(1040532660, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1040530655));
    WaitFor(
        EventFlag(1039530505) && InArea(10000, 1040532651) && ActionButtonInArea(9521, 1040531650));
    SetEventFlagID(1040530655, ON);
    DisableAsset(1040531650);
    DisableMapPart(1040532651);
    RotateCharacter(10000, 1040531650, -1, true);
    ForceAnimationPlayback(10000, 60010, false, false, false);
    WaitFixedTimeSeconds(1);
    PlaySE(1040532650, SoundType.SFX, 806855);
    DeleteMapSFX(1040532650, true);
    EndEvent();
});

// 魔術師の塔_ギミック装置の消去 -- Magician's Tower_Erasure of gimmick device
$Event(1040532665, Restart, function() {
    WaitFor(EventFlag(1040530655));
    WaitFixedTimeSeconds(1);
    PlaySE(1040532650, SoundType.SFX, 806855);
    DeleteMapSFX(1040532650, true);
    EndEvent();
});

// 魔術師の塔_消える岩_出現 -- Magician's Tower_Disappearing Rock_Appearance
$Event(1040532670, Restart, function() {
    if (!EventFlag(1040530655)) {
        DisableAsset(1040531651);
        WaitFor(EventFlag(1039530505));
        EnableAsset(1040531651);
        EndEvent();
    }
L0:
    DisableAsset(1040531651);
    EndEvent();
});

// 魔術師の塔_消える岩_攻撃 -- Magician's Tower_Disappearing Rock_Attack
$Event(1040532680, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(PlayerIsInOwnWorld() && HasDamageType(1040531651, 20000, DamageType.Unspecified));
    SetEventFlagID(1040530680, ON);
    EndEvent();
});

// 魔術師の塔_消える岩_消去 -- Magician's Tower_Disappearing Rock_Erase
$Event(1040532685, Restart, function() {
    WaitFor(EventFlag(1040530680));
    ForceAnimationPlayback(1040531651, 1, false, true, false);
    DisableAsset(1040531651);
    EndEvent();
});

// 魔術師の塔_装置を防衛するゴーレム -- Magician's Tower_Golem defending the device
$Event(1040532690, Restart, function() {
    flag = EventFlag(1040530655);
    GotoIf(L2, flag);
    GotoIf(L0, !flag);
L2:
    ForceCharacterDeath(1040530610, true);
    EndIf(flag);
L0:
    DisableGenerator(1040533610);
    if (!EventFlag(1040532701)) {
        DisableGenerator(1040533610);
        WaitFor(EventFlag(1039530505) && InArea(10000, 1040532610));
        EnableGenerator(1040533610);
        ClearCharactersAITarget(1040530610);
        InvokeEnemyGenerator(1040533610);
    }
L1:
    if (CharacterDead(1040530610)) {
        WaitRandomTimeSeconds(10, 10);
        EnableGenerator(1040533610);
        ClearCharactersAITarget(1040530610);
        InvokeEnemyGenerator(1040533610);
    }
    if (EventFlag(1040530655)) {
        WaitFixedTimeSeconds(5);
    }
    DisableGenerator(1040533610);
    SetEventFlagID(1040532701, ON);
    RestartEvent();
});

// NPC疑似マルチ_サイン調べ -- NPC pseudo multi_sign investigation
$Event(1040532700, Restart, function() {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    SetEventFlagID(1040532141, OFF);
    SetEventFlagID(1040532142, OFF);
    DeleteAssetfollowingSFX(1040531700, true);
    EndIf(EventFlag(7612));
    CreateAssetfollowingSFX(1040531700, 100, 30010);
    online = HasMultiplayerState(MultiplayerState.Multiplayer)
        || HasMultiplayerState(MultiplayerState.MultiplayerPending);
    WaitFor(online || ActionButtonInArea(9062, 1040531700));
    RestartIf(online.Passed);
    if (PlayerHasItem(ItemType.Goods, 102)) {
        DisplayGenericDialogAndSetEventFlags(80612, PromptType.YESNO, NumberofOptions.TwoButtons, 1040531700, 2, 1040532141, 1040532142, 1040532142);
        if (!EventFlag(1040532141)) {
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
    } else {
L10:
        DisplayGenericDialogAndSetEventFlags(80613, PromptType.YESNO, NumberofOptions.TwoButtons, 1040531700, 2, 1040532141, 1040532142, 1040532142);
        if (!EventFlag(1040532141)) {
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
        if (!PlayerHasItem(ItemType.Goods, 111)) {
            WaitFixedTimeSeconds(1);
            DisplayGenericDialog(30150, PromptType.YESNO, NumberofOptions.NoButtons, 1040531700, 3);
            WaitFixedTimeSeconds(1);
            RestartEvent();
        }
L17:
        RemoveItemFromPlayer(ItemType.Goods, 111, 1);
    }
L18:
    SetEventFlagID(1040532140, ON);
    SetSpEffect(10000, 15);
    WaitFixedTimeSeconds(20);
    RestartEvent();
});

// NPC疑似マルチ_マグナス_開始 -- NPC pseudo multi_Magnus_start
$Event(1040532145, Restart, function() {
    EndIf(!CeremonyActive(20));
    SetCharacterBackreadState(1040530700, false);
    DeleteAssetfollowingSFX(1040531701, true);
    CreateAssetfollowingSFX(1040531701, 200, 806700);
});

