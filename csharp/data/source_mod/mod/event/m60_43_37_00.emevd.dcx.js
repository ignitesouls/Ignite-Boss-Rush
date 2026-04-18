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
    RegisterBonfire(1043370000, 1043371950, 0, 0, 0, 5);
    $InitializeCommonEvent(0, 90005300, 1043370210, 1043370210, 40108, 0, 0);
    $InitializeCommonEvent(0, 90005300, 1043370800, 1043370341, 0, 0, 0);
    if (EventFlag(1049308052)) { //if boss selected (night's cavalry)
        $InitializeCommonEvent(0, 90005476, 1043370340, 1043370341);
        InitializeCommonEvent(0, 90005477, 0);
        $InitializeEvent(0, 1043372340, 1043370340, 1043370341);
        $InitializeCommonEvent(0, 90005860, 1043370800, 0, 1043370340, 0, 1043370400, 0);
        $InitializeCommonEvent(0, 90005871, 1043370340, 903150600, 10, 1043370341);
        $InitializeCommonEvent(0, 90005872, 1043370340, 10, 0);
    }
    $InitializeEvent(0, 1043373700, 1043370700, 1043370701, 1043370702, 1043376700);
    $InitializeEvent(0, 1043373703, 1043370700);
    $InitializeEvent(0, 1043373705, 1043370700);
    $InitializeCommonEvent(0, 90005703, 1043370700, 4701, 4702, 1043379249, 4701, 4700, 4703, 0);
    $InitializeCommonEvent(0, 90005704, 1043370700, 4701, 4700, 1043379249, 3);
    $InitializeCommonEvent(0, 90005702, 1043370700, 4703, 4700, 4703);
    $InitializeCommonEvent(0, 90005703, 1043370701, 1043379246, 1043379246, 1043379247, 1043379246, 1043379246, 1043379246, 0);
    $InitializeCommonEvent(0, 90005704, 1043370701, 1043379246, 1043379246, 1043379247, 3);
    $InitializeCommonEvent(0, 1043373706, 1043370700, 1043370701);
    $InitializeEvent(0, 1043373707, 1043370700, 4700, 4701, 4702, 4703, 1043370701, 1043379246);
    $InitializeEvent(0, 1043373701);
    $InitializeEvent(0, 1043373710, 1043370730);
    $InitializeEvent(0, 1043373711);
    $InitializeEvent(0, 1043373722, 1043370740, 1043372709, 1043372711, 1043372701, 1043382700);
    $InitializeEvent(0, 1043373726, 1043370740);
    $InitializeCommonEvent(0, 90005791, 1043379262, 1043372715, 1043372716, 1043370740);
    $InitializeCommonEvent(0, 90005790, 0, 1043379262, 1043372715, 1043372716, 1043370740, 21, 1043382710, 1043372709, 0, 1043372740, false, 0);
    $InitializeCommonEvent(0, 90005790, 0, 1043379262, 1043372715, 1043372716, 1043370740, 21, 1043372712, 1043372711, 0, 1043372741, false, 0);
    $InitializeCommonEvent(0, 90005774, 1043379262, 1042370700, 1042377700);
    $InitializeCommonEvent(0, 90005704, 1043370750, 3941, 3940, 1043379351, 3);
    $InitializeCommonEvent(0, 90005703, 1043370750, 3941, 3942, 1043379351, 3941, 3940, 3944, -1);
    $InitializeCommonEvent(0, 90005702, 1043370750, 3943, 3940, 3944);
    $InitializeEvent(0, 1043373730, 1043370750, 1043371700);
    $InitializeEvent(0, 1043373731, 13, 13, 25);
    $InitializeEvent(0, 1043373732, 1043370750, 1043371700);
    $InitializeEvent(0, 1043373733, 1043370750);
    $InitializeEvent(0, 1043373734, 1043370750);
    $InitializeCommonEvent(0, 90005630, 61433700, 1043371500, 127);
    $InitializeCommonEvent(0, 90005460, 1043370200);
    $InitializeCommonEvent(0, 90005461, 1043370200);
    $InitializeCommonEvent(0, 90005462, 1043370200);
    $InitializeCommonEvent(0, 900005610, 1043371680, 100, 800, 0);
    $InitializeCommonEvent(0, 90005631, 1043371640, 61010);
    $InitializeEvent(0, 1043372650, 1520, 710520, 1770, 710770, 69090, 69370);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    SetCharacterBackreadState(1043370711, true);
    SetCharacterBackreadState(1043370720, true);
    SetCharacterBackreadState(1043370740, true);
    SetCharacterBackreadState(1043370750, true);
    $InitializeCommonEvent(0, 90005200, 1043370240, 30019, 20019, 1043372240, 3, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1043370241, 30019, 20019, 1043372240, 4, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1043370242, 30019, 20019, 1043372240, 0.5, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1043370243, 30019, 20019, 1043372240, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005200, 1043370244, 30019, 20019, 1043372240, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005261, 1043370210, 1043372210, 3, 0, -1);
});

// ストームオオカミ出現_XX -- Storm wolf appears_XX
$Event(1043372250, Restart, function(chrEntityId, areaEntityId, chrEntityId2) {
    EndIf(EventFlag(1041382200));
    DisableCharacter(chrEntityId);
    CreateBulletOwner(chrEntityId2);
    WaitFor(
        HasDamageType(chrEntityId, 10000, DamageType.Unspecified)
            || (InArea(10000, areaEntityId)
                && ((CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
                    || CharacterType(10000, TargetType.Alive))));
    SetEventFlagID(1041382200, ON);
    EndIf(CharacterDead(chrEntityId));
    PlaySE(areaEntityId, SoundType.CharacterMotion, 407008100);
    WaitFixedTimeSeconds(1);
    EndIf(!InArea(10000, areaEntityId));
    WaitRandomTimeSeconds(0, 0.5);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
    ShootBullet(chrEntityId2, 10000, 900, 100920, 0, 0, 0);
    SetSpEffect(chrEntityId, 8090);
    WaitFixedTimeSeconds(5);
    ClearSpEffect(chrEntityId, 8090);
});

// ルーン狩りの騎士の馬の対応 -- Rune hunting knight horse response
$Event(1043372340, Restart, function(chrEntityId, chrEntityId2) {
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

// チュートリアルメッセージ_騎乗 -- Tutorial message_Riding
$Event(1043372650, Restart, function(tutorialParamId, eventFlagId, tutorialParamId2, eventFlagId2, eventFlagId3, eventFlagId4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 43, 37, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(eventFlagId, ON);
    SetEventFlagID(eventFlagId2, ON);
    ShowTutorialPopup(tutorialParamId, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(tutorialParamId2, true, true);
    EndIf(EventFlag(eventFlagId3));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, eventFlagId, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, eventFlagId2, 1);
    SetEventFlagID(eventFlagId3, ON);
    SetEventFlagID(eventFlagId4, ON);
});

// NPC800赤目商人1_初期化イベント -- NPC800 Red Eye Merchant 1_Initialization event
$Event(1043373700, Restart, function(chrEntityId, chrEntityId2, chrEntityId3, assetEntityId) {
    WaitFixedTimeFrames(1);
    SetEventFlagID(1043379200, OFF);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(4700) && EventFlag(1043379248)) {
            SetEventFlagID(1043379248, OFF);
        }
    }
L0:
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    DisableCharacter(chrEntityId3);
    DisableAsset(assetEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    SetCharacterBackreadState(chrEntityId3, true);
    GotoIf(L20, !(EventFlag(4705) || EventFlag(4706) || EventFlag(4707)));
    GotoIf(L1, EventFlag(4700));
    GotoIf(L2, EventFlag(4701));
    GotoIf(L4, EventFlag(4703));
L1:
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacter(chrEntityId3);
    EnableAsset(assetEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterBackreadState(chrEntityId3, false);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(chrEntityId, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(chrEntityId, 30002, false, false, false);
    }
    Goto(L20);
L2:
    EnableCharacter(chrEntityId);
    EnableCharacter(chrEntityId2);
    EnableCharacter(chrEntityId3);
    EnableAsset(assetEntityId);
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterBackreadState(chrEntityId2, false);
    SetCharacterBackreadState(chrEntityId3, false);
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    if (EventFlag(4980)) {
        ForceAnimationPlayback(chrEntityId, 30001, false, false, false);
    }
    if (AnyBatchEventFlags(4982, 4983)) {
        ForceAnimationPlayback(chrEntityId, 30002, false, false, false);
        DisableCharacterAI(chrEntityId);
    }
    Goto(L20);
L4:
    ForceCharacterTreasure(chrEntityId);
    ForceCharacterTreasure(chrEntityId2);
    DisableCharacter(chrEntityId);
    DisableCharacter(chrEntityId2);
    EnableAsset(assetEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    SetCharacterBackreadState(chrEntityId2, true);
    Goto(L20);
L20:
    WaitFor(EventFlag(1043379200));
    RestartEvent();
});

// NPC800赤目商人1_地図ポイント発見 -- NPC800 Red Eye Merchant 1_Map point discovery
$Event(1043373701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379229));
    WaitFor(EntityInRadiusOfEntity(10000, 1043370700, 7.5, 1));
    SetNetworkconnectedEventFlagID(1043379229, ON);
    EndEvent();
});

// NPC800赤目商人1_演奏管理 -- NPC800 Red-Eyed Merchant 1_Performance Management
$Event(1043373703, Default, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4705) || EventFlag(4706) || EventFlag(4707))
            && (EventFlag(4700) || EventFlag(4701))));
    GotoIf(L0, EventFlag(4980));
    GotoIf(L10, AnyBatchEventFlags(4982, 4983));
L0:
    WaitFor(CharacterHasSpEffect(chrEntityId, 9601) || CharacterHasSpEffect(chrEntityId, 9603));
    GotoIf(L1, CharacterHasSpEffect(chrEntityId, 9601));
    GotoIf(L2, CharacterHasSpEffect(chrEntityId, 9603));
L1:
    WaitFor(
        EntityInRadiusOfEntity(20000, chrEntityId, 4, 1) || !CharacterHasSpEffect(chrEntityId, 9601));
    if (CharacterHasSpEffect(chrEntityId, 9601)) {
        ForceAnimationPlayback(chrEntityId, 20004, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 9601));
    Goto(L20);
L2:
    WaitFor(
        !EntityInRadiusOfEntity(20000, chrEntityId, 6, 1)
            || !CharacterHasSpEffect(chrEntityId, 9603));
    if (CharacterHasSpEffect(chrEntityId, 9603)) {
        ForceAnimationPlayback(chrEntityId, 20010, false, false, false);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 9603));
    Goto(L20);
L10:
    WaitFor(CharacterHasSpEffect(chrEntityId, 9603));
    if (!CharacterHasSpEffect(chrEntityId, 9603)) {
    }
L11:
    WaitFor(
        !EntityInRadiusOfEntity(20000, chrEntityId, 6, 1)
            || !CharacterHasSpEffect(chrEntityId, 9603));
    if (CharacterHasSpEffect(chrEntityId, 9603)) {
        ForceAnimationPlayback(chrEntityId, 20011, false, false, false);
        DisableCharacterAI(chrEntityId);
    }
    WaitFor(!CharacterHasSpEffect(chrEntityId, 9603));
    Goto(L20);
L20:
    RestartEvent();
});

// NPC800赤目商人1_集中演奏時ロジック管理 -- NPC800 Red Eye Merchant 1_Logic management during intensive performance
$Event(1043373705, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(
        !((EventFlag(4705) || EventFlag(4706) || EventFlag(4707))
            && (EventFlag(4700) || EventFlag(4701))));
    GotoIf(L0, CharacterHasSpEffect(chrEntityId, 9602));
    Goto(L10);
L0:
    DisableCharacterAI(chrEntityId);
    WaitFor(!CharacterHasSpEffect(chrEntityId, 9602));
    RestartEvent();
L10:
    EnableCharacterAI(chrEntityId);
    WaitFor(CharacterHasSpEffect(chrEntityId, 9602));
    RestartEvent();
});

// NPC800赤目商人1_ロバ被ダメ台詞再生 -- NPC800 Red-Eyed Merchant 1_ Donkey Damage Line Playback
$Event(1043373706, Restart, function(chrEntityId, entityId) {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        (HasDamageType(entityId, 20000, DamageType.Unspecified)
            || HasDamageType(entityId, 40000, DamageType.Unspecified))
            && !EventFlag(1043372709));
    SetNetworkconnectedEventFlagID(1043372708, ON);
    EndIf(EventFlag(4701));
    if (CharacterHasSpEffect(chrEntityId, 9601)) {
        ForceAnimationPlayback(chrEntityId, 20004, false, false, false);
    }
    if (CharacterHasSpEffect(chrEntityId, 9602)) {
        ForceAnimationPlayback(chrEntityId, 20006, false, false, false);
    }
});

// NPC800赤目商人1_ロバ敵対監視 -- NPC800 Red Eye Merchant 1_Donkey Hostile Surveillance
$Event(1043373707, Default, function(chrEntityId, eventFlagId, eventFlagId2, eventFlagId3, eventFlagId4, chrEntityId2, eventFlagId5) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(!EventFlag(3000));
    EndIf(!EventFlag(eventFlagId));
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    flagDmgHp = EventFlag(eventFlagId2)
        || EventFlag(eventFlagId3)
        || (HasDamageType(chrEntityId, 20000, DamageType.Unspecified)
            && CharacterHPValue(chrEntityId) < 1);
    flagDmgHp2 = EventFlag(eventFlagId5)
        || (HasDamageType(chrEntityId2, 20000, DamageType.Unspecified)
            && CharacterHPValue(chrEntityId2) < 1);
    WaitFor(flagDmgHp || flagDmgHp2);
    GotoIf(L0, flagDmgHp.Passed);
    GotoIf(L5, flagDmgHp2.Passed);
L0:
    SetNetworkconnectedEventFlagID(eventFlagId5, ON);
    SetCharacterTeamType(chrEntityId2, TeamType.HostileNPC);
    Goto(L10);
L5:
    SetCharacterTeamType(chrEntityId, TeamType.HostileNPC);
    EnableCharacterAI(chrEntityId);
    BatchSetNetworkconnectedEventFlags(eventFlagId, eventFlagId4, OFF);
    SetNetworkconnectedEventFlagID(eventFlagId2, ON);
    SaveRequest();
    Goto(L10);
L10:
    WaitFixedTimeFrames(1);
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    WaitFor(EventFlag(eventFlagId5));
    SetNetworkconnectedEventFlagID(eventFlagId5, OFF);
    EndEvent();
});

// NPC700話す死体⑨_NPC初期化イベント -- NPC700 talking corpse ⑨_NPC initialization event
$Event(1043373710, Restart, function(chrEntityId) {
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 30023, false, false, false);
});

// NPC700話す死体⑨_自動会話イベント -- NPC700 Talking Corpse⑨_Automatic conversation event
$Event(1043373711, Restart, function() {
    WaitFor(
        !EventFlag(1043379305)
            && !EventFlag(1043379306)
            && EntityInRadiusOfEntity(10000, 1043370730, 8, 1));
    SetNetworkconnectedEventFlagID(1043372722, ON);
});

// NPC318_混沌の宿主_ネリウス戦自動会話再生 -- NPC318_Host of Chaos_Nerius battle automatic conversation playback
$Event(1043373721, Restart, function(chrEntityId, eventFlagId, range) {
    EndIf(!PlayerIsInOwnWorld());
    SetCharacterBackreadState(chrEntityId, true);
    EndIf(!EventFlag(3620));
    EndIf(!EventFlag(3625) && !EventFlag(3626));
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    WaitFor(!EventFlag(1043372713) && EventFlag(1043372717));
    SetCharacterBackreadState(chrEntityId, false);
    SetCharacterTalkRange(chrEntityId, range);
    SetNetworkconnectedEventFlagID(eventFlagId, ON);
    EndEvent();
});

// NPC318_混沌の宿主_ネリウス戦中_切り替え処理 -- NPC318_Host of Chaos_During the battle with Nerius_Switching process
$Event(1043373722, Restart, function(npcEntityId, areaEntityId, areaEntityId2, areaEntityId3, areaEntityId4) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    GotoIf(L1, !EventFlag(1043372714));
    GotoIf(L2, EventFlag(1043372714));
L1:
    WaitFor(InArea(10000, areaEntityId) || InArea(10000, areaEntityId2));
    GotoIf(L5, InArea(10000, areaEntityId));
    Goto(L6);
L5:
    SetEventFlagID(1043372740, ON);
    SetEventFlagID(1043372741, OFF);
    Goto(L7);
L6:
    SetEventFlagID(1043372741, ON);
    SetEventFlagID(1043372740, OFF);
    Goto(L7);
L7:
    SetEventFlagID(1043372714, ON);
    SetNetworkUpdateAuthority(npcEntityId, AuthorityLevel.Forced);
    RestartEvent();
L2:
    WaitFor(
        InArea(10000, areaEntityId3) || InArea(10000, areaEntityId4) || CharacterDead(npcEntityId));
    SetEventFlagID(1043372714, OFF);
    SetEventFlagID(1043372740, OFF);
    SetEventFlagID(1043372741, OFF);
    SetEventFlagID(1043379263, ON);
    if (CharacterDead(npcEntityId)) {
        SetEventFlagID(1043379262, ON);
        WaitFixedTimeFrames(1);
    }
    SetEventFlagID(3638, ON);
    SetEventFlagID(1043369200, OFF);
    EndIf(EventFlag(1043379262));
    SendNPCSummonHome(npcEntityId);
    EndEvent();
});

// NPC343ネリウス_更新権限を戻す -- NPC343 Nerius_Return update authority
$Event(1043373726, Restart, function(chrEntityId) {
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(1043379262));
    EndIf(EventFlag(1043372716));
    WaitFor(CharacterHasSpEffect(chrEntityId, 9760));
    WaitFixedTimeSeconds(5);
    SetNetworkUpdateAuthority(chrEntityId, AuthorityLevel.Normal);
    EndEvent();
});

// NPC223亜人針子_NPC初期化イベント_初期状態 -- NPC223 Demi-Shimiko_NPC initialization event_Initial state
$Event(1043373730, Restart, function(chrEntityId, assetEntityId) {
    DisableNetworkSync();
    WaitFixedTimeFrames(1);
    if (PlayerIsInOwnWorld()) {
        if (EventFlag(3940) && EventFlag(1043379353)) {
            SetEventFlagID(1043379353, OFF);
        }
    }
L10:
    DisableCharacter(chrEntityId);
    SetCharacterBackreadState(chrEntityId, true);
    DisableAsset(assetEntityId);
    if (!EventFlag(3945)) {
        WaitFor(EventFlag(3945));
        RestartEvent();
    }
L5:
    GotoIf(L1, EventFlag(3940));
    GotoIf(L2, EventFlag(3941));
    GotoIf(L3, EventFlag(3942));
    GotoIf(L4, EventFlag(3943));
L1:
    GotoIf(L5, !EventFlag(1043379357));
    Goto(L6);
L5:
    SetCharacterTalkRange(chrEntityId, 70);
    SetCharacterBackreadState(chrEntityId, false);
    DisableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    EnableAsset(assetEntityId);
    DisableCharacterCollision(chrEntityId);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
    GotoIf(L20, mainGroupAbuse);
L6:
    SetCharacterBackreadState(chrEntityId, false);
    EnableCharacter(chrEntityId);
    SetCharacterTeamType(chrEntityId, TeamType.FriendlyNPC);
    ForceAnimationPlayback(chrEntityId, 930010, false, false, false);
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
    WaitFor(!EventFlag(3945));
    RestartEvent();
});

// NPC223亜人針子_初期状態_能動会話再生済リセット -- NPC223 Ajin seamstress_Initial state_Active conversation played reset
$Event(1043373731, Restart, function(timeSeconds, timeSeconds2, timeSeconds3) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3945));
    EndIf(EventFlag(1043379357));
    SetEventFlagID(1043372732, ON);
    WaitFor(EventFlag(1043372733));
    WaitFixedTimeSeconds(timeSeconds);
    SetEventFlagID(1043372734, ON);
    WaitFor(EventFlag(1043372735));
    WaitFixedTimeSeconds(timeSeconds2);
    SetEventFlagID(1043372736, ON);
    WaitFor(EventFlag(1043372737));
    WaitFixedTimeSeconds(timeSeconds3);
    SetEventFlagID(1043372732, OFF);
    SetEventFlagID(1043372733, OFF);
    SetEventFlagID(1043372734, OFF);
    SetEventFlagID(1043372735, OFF);
    SetEventFlagID(1043372736, OFF);
    SetEventFlagID(1043372737, OFF);
    RestartEvent();
});

// NPC223亜人針子_初期状態_擬態解除 -- NPC223 Demi-human seamstress_initial state_mimetic release
$Event(1043373732, Restart, function(chrEntityId, assetEntityId) {
    if (PlayerIsInOwnWorld()) {
        EndIf(EventFlag(1044342300));
        WaitFor(
            HasDamageType(assetEntityId, 20000, DamageType.Unspecified) && PlayerIsInOwnWorld());
        SetEventFlagID(1043379357, ON);
    }
L0:
    WaitForEventFlag(ON, TargetEventFlagType.EventFlag, 1043379357);
    SpawnOneshotSFX(TargetEntityType.Character, chrEntityId, 900, 641012);
    WaitFixedTimeSeconds(0.5);
    DisableAsset(assetEntityId);
    WaitFixedTimeSeconds(0.3);
    EnableCharacter(chrEntityId);
    EnableCharacterCollision(chrEntityId);
    EndEvent();
});

// NPC223亜人針子_初期状態_擬態中常時バックリード処理 -- NPC223 Demi-human seamstress_Initial state_Continuous backread processing during mimicry
$Event(1043373733, Restart, function(chrEntityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    DisableCharacterDefaultBackread(chrEntityId);
    EndIf(!EventFlag(3945));
    EndIf(EventFlag(1043379357));
    WaitFor(!EventFlag(1043379357) && EntityInRadiusOfEntity(10000, chrEntityId, 15, 1));
    EnableCharacterDefaultBackread(chrEntityId);
    WaitFor(!(!EventFlag(1043379357) && EntityInRadiusOfEntity(10000, chrEntityId, 15, 1)));
    DisableCharacterDefaultBackread(chrEntityId);
    RestartEvent();
});

// NPC223亜人針子_初期状態_敵対時アニメ再生 -- NPC223 Demi-Shinko_Initial state_Animation playback when hostile
$Event(1043373734, Restart, function(entityId) {
    WaitFixedTimeFrames(1);
    EndIf(!PlayerIsInOwnWorld());
    EndIf(!EventFlag(3945));
    EndIf(!EventFlag(3940));
    WaitFor(EventFlag(3941));
    ForceAnimationPlayback(entityId, 20043, false, false, false);
    RestartEvent();
});
