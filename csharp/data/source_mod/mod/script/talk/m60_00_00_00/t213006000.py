# -*- coding: utf-8 -*-
def t213006000_1():
    """State 0,1"""
    # actionbutton:6210:"Talk"
    t213006000_x6(flag1=3223, flag2=3221, flag3=3222, val1=5, val2=10, val3=12, val4=10, val5=12, actionbutton1=6210,
                  flag4=6000, flag5=6001, flag6=6000, flag7=6000, flag8=6000, z1=1, z2=1000000, z3=1000000, z4=1000000,
                  mode1=1, mode2=1)
    Quit()

def t213006000_1000():
    """State 0,2,3"""
    assert t213006000_x34()
    """State 1"""
    EndMachine(1000)
    Quit()

def t213006000_x0(actionbutton1=6210, flag5=6001, flag9=6000, flag10=6000, flag11=6000, flag12=6000, flag4=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 3"""
        assert GetEventFlag(flag5) or GetEventFlag(flag9) or GetEventFlag(flag10) or GetEventFlag(flag11) or GetEventFlag(flag12)
        """State 4"""
        assert not GetEventFlag(flag4)
        """State 2"""
        if (GetEventFlag(flag4) or not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead()
            and not IsCharacterDisabled()) or (not GetEventFlag(flag5) and not GetEventFlag(flag9) and not GetEventFlag(flag10)
            and not GetEventFlag(flag11) and not GetEventFlag(flag12))):
            pass
        # actionbutton:6210:"Talk"
        elif CheckActionButtonArea(actionbutton1):
            break
    """State 5"""
    return 0

def t213006000_x1():
    """State 0,1"""
    if not CheckSpecificPersonTalkHasEnded(0):
        """State 7"""
        ClearTalkProgressData()
        StopEventAnimWithoutForcingConversationEnd(0)
        """State 6"""
        ReportConversationEndToHavokBehavior()
    else:
        pass
    """State 2"""
    if CheckSpecificPersonGenericDialogIsOpen(0):
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    if CheckSpecificPersonMenuIsOpen(-1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t213006000_x2():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

def t213006000_x3(action1=22131010):
    """State 0,1"""
    # action:22131010:"Cannot select while entering combat"
    OpenGenericDialog(7, action1, 1, 0, 1)
    assert not CheckSpecificPersonGenericDialogIsOpen(0)
    """State 2"""
    return 0

def t213006000_x4(val2=10, val3=12):
    """State 0,1"""
    assert GetDistanceToPlayer() < val2 and GetCurrentStateElapsedFrames() > 1
    """State 2"""
    if PlayerDiedFromFallInstantly() == False and PlayerDiedFromFallDamage() == False:
        """State 3,6"""
        call = t213006000_x20()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > val3 or GetTalkInterruptReason() == 6:
            """State 5"""
            assert t213006000_x1()
    else:
        """State 4,7"""
        call = t213006000_x31()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > val3 or GetTalkInterruptReason() == 6:
            """State 8"""
            assert t213006000_x1()
    """State 9"""
    return 0

def t213006000_x5():
    """State 0,1"""
    assert t213006000_x1()
    """State 2"""
    return 0

def t213006000_x6(flag1=3223, flag2=3221, flag3=3222, val1=5, val2=10, val3=12, val4=10, val5=12, actionbutton1=6210,
                  flag4=6000, flag5=6001, flag6=6000, flag7=6000, flag8=6000, z1=1, z2=1000000, z3=1000000, z4=1000000,
                  mode1=1, mode2=1):
    """State 0"""
    assert GetCurrentStateElapsedTime() > 1.5
    while True:
        """State 2"""
        call = t213006000_x23(flag1=flag1, flag2=flag2, flag3=flag3, val1=val1, val2=val2, val3=val3, val4=val4,
                              val5=val5, actionbutton1=actionbutton1, flag4=flag4, flag5=flag5, flag6=flag6, flag7=flag7,
                              flag8=flag8, z1=z1, z2=z2, z3=z3, z4=z4, mode1=mode1, mode2=mode2)
        assert IsClientPlayer()
        """State 1"""
        call = t213006000_x22()
        assert not IsClientPlayer()
    """Unused"""
    """State 3"""
    return 0

def t213006000_x7(val1=5, val2=10, val3=12, val4=10, val5=12, actionbutton1=6210, flag4=6000, flag5=6001, flag6=6000,
                  flag7=6000, flag8=6000, z1=1, z2=1000000, z3=1000000, z4=1000000, mode1=1, mode2=1):
    """State 0"""
    while True:
        """State 2"""
        call = t213006000_x10(actionbutton1=actionbutton1, flag4=flag4, flag5=flag5, z2=z2, z3=z3, z4=z4)
        def WhilePaused():
            RemoveMyAggroIf(IsAttackedBySomeone() == 1 and (DoesSelfHaveSpEffect(9626) == 1 and DoesSelfHaveSpEffect(9627) == 1))
            GiveSpEffectToPlayerIf(CheckSpecificPersonTalkHasEnded(0) == 0, 9640)
        if call.Done():
            """State 4"""
            Label('L0')
            ChangeCamera(1000000)
            call = t213006000_x14(val1=val1, z1=z1)
            def WhilePaused():
                ChangeCameraIf(GetDistanceToPlayer() > 2.5, -1)
                RemoveMyAggroIf(IsAttackedBySomeone() == 1 and (DoesSelfHaveSpEffect(9626) == 1 and DoesSelfHaveSpEffect(9627) == 1))
                GiveSpEffectToPlayer(9640)
                SetLookAtEntityForTalkIf(1 == (mode1 == 1), -1, 0)
                SetLookAtEntityForTalkIf(1 == (mode2 == 1), 0, -1)
            def ExitPause():
                ChangeCamera(-1)
            if call.Done():
                continue
            elif IsAttackedBySomeone():
                pass
        elif IsAttackedBySomeone() and not DoesSelfHaveSpEffect(9626) and not DoesSelfHaveSpEffect(9627):
            pass
        elif GetEventFlag(flag8):
            Goto('L0')
        elif GetEventFlag(flag6) and not GetEventFlag(flag7) and GetDistanceToPlayer() < val4:
            """State 5"""
            call = t213006000_x16(val5=val5)
            if call.Done():
                continue
            elif IsAttackedBySomeone():
                pass
        elif ((GetDistanceToPlayer() > val5 or GetTalkInterruptReason() == 6) and not CheckSpecificPersonTalkHasEnded(0)
              and not DoesSelfHaveSpEffect(9625)):
            """State 6"""
            assert t213006000_x27() and CheckSpecificPersonTalkHasEnded(0)
            continue
        elif GetEventFlag(9000):
            """State 1"""
            assert not GetEventFlag(9000)
            continue
        """State 3"""
        def ExitPause():
            RemoveMyAggro()
        assert t213006000_x12(val2=val2, val3=val3)
    """Unused"""
    """State 7"""
    return 0

def t213006000_x8(val2=10, val3=12):
    """State 0,1"""
    call = t213006000_x18(val2=val2, val3=val3)
    assert IsPlayerDead()
    """State 2"""
    t213006000_x4(val2=val2, val3=val3)
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t213006000_x9(flag1=3223, val2=10, val3=12):
    """State 0,8"""
    assert t213006000_x33()
    """State 1"""
    if GetEventFlag(flag1):
        """State 2"""
        pass
    else:
        """State 3"""
        if GetDistanceToPlayer() < val2:
            """State 4,6"""
            call = t213006000_x21()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > val3 or GetTalkInterruptReason() == 6:
                """State 7"""
                assert t213006000_x1()
        else:
            """State 5"""
            pass
    """State 9"""
    return 0

def t213006000_x10(actionbutton1=6210, flag4=6000, flag5=6001, z2=1000000, z3=1000000, z4=1000000):
    """State 0,1"""
    call = t213006000_x11(machine1=2000, val6=2000)
    if call.Get() == 1:
        """State 2"""
        assert (t213006000_x0(actionbutton1=actionbutton1, flag5=flag5, flag9=6000, flag10=6000, flag11=6000, flag12=6000,
                flag4=flag4))
    elif call.Done():
        pass
    """State 3"""
    return 0

def t213006000_x11(machine1=_, val6=_):
    """State 0,1"""
    if MachineExists(machine1):
        """State 2"""
        assert GetCurrentStateElapsedFrames() > 1
        """State 4"""
        def WhilePaused():
            RunMachine(machine1)
        assert GetMachineResult() == val6
        """State 5"""
        return 0
    else:
        """State 3,6"""
        return 1

def t213006000_x12(val2=10, val3=12):
    """State 0"""
    assert GetCurrentStateElapsedFrames() > 1
    """State 5"""
    assert t213006000_x1()
    """State 3"""
    if GetDistanceToPlayer() < val2:
        """State 1"""
        if IsPlayerAttacking():
            """State 6"""
            call = t213006000_x13()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > val3 or GetTalkInterruptReason() == 6:
                """State 7"""
                assert t213006000_x28()
        else:
            """State 4"""
            pass
    else:
        """State 2"""
        pass
    """State 8"""
    return 0

def t213006000_x13():
    """State 0,1"""
    assert t213006000_x11(machine1=1101, val6=1101)
    """State 2"""
    return 0

def t213006000_x14(val1=5, z1=1):
    """State 0,2"""
    assert t213006000_x24()
    """State 1"""
    call = t213006000_x15()
    if call.Done():
        pass
    elif (GetDistanceToPlayer() > val1 or GetTalkInterruptReason() == 6) and not DoesSelfHaveSpEffect(9625):
        """State 3"""
        assert t213006000_x26()
    """State 4"""
    return 0

def t213006000_x15():
    """State 0,1"""
    assert t213006000_x11(machine1=1000, val6=1000)
    """State 2"""
    return 0

def t213006000_x16(val5=12):
    """State 0,1"""
    call = t213006000_x17()
    if call.Done():
        pass
    elif GetDistanceToPlayer() > val5 or GetTalkInterruptReason() == 6:
        """State 2"""
        assert t213006000_x27()
    """State 3"""
    return 0

def t213006000_x17():
    """State 0,1"""
    assert t213006000_x11(machine1=1100, val6=1100)
    """State 2"""
    return 0

def t213006000_x18(val2=10, val3=12):
    """State 0,5"""
    assert t213006000_x33()
    """State 2"""
    assert not GetEventFlag(3000)
    while True:
        """State 1"""
        assert GetDistanceToPlayer() < val2
        """State 3"""
        call = t213006000_x19()
        if call.Done():
            pass
        elif GetDistanceToPlayer() > val3 or GetTalkInterruptReason() == 6:
            """State 4"""
            assert t213006000_x29()
    """Unused"""
    """State 6"""
    return 0

def t213006000_x19():
    """State 0,2"""
    call = t213006000_x11(machine1=1102, val6=1102)
    if call.Get() == 1:
        """State 1"""
        Quit()
    elif call.Done():
        """State 3"""
        return 0

def t213006000_x20():
    """State 0,1"""
    assert t213006000_x11(machine1=1001, val6=1001)
    """State 2"""
    return 0

def t213006000_x21():
    """State 0,1"""
    assert t213006000_x11(machine1=1103, val6=1103)
    """State 2"""
    return 0

def t213006000_x22():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0

def t213006000_x23(flag1=3223, flag2=3221, flag3=3222, val1=5, val2=10, val3=12, val4=10, val5=12, actionbutton1=6210,
                   flag4=6000, flag5=6001, flag6=6000, flag7=6000, flag8=6000, z1=1, z2=1000000, z3=1000000, z4=1000000,
                   mode1=1, mode2=1):
    """State 0"""
    while True:
        """State 1"""
        RemoveMyAggro()
        call = t213006000_x7(val1=val1, val2=val2, val3=val3, val4=val4, val5=val5, actionbutton1=actionbutton1,
                             flag4=flag4, flag5=flag5, flag6=flag6, flag7=flag7, flag8=flag8, z1=z1, z2=z2, z3=z3,
                             z4=z4, mode1=mode1, mode2=mode2)
        if CheckSelfDeath() or GetEventFlag(flag1):
            """State 3"""
            Label('L0')
            call = t213006000_x9(flag1=flag1, val2=val2, val3=val3)
            if not CheckSelfDeath() and not GetEventFlag(flag1):
                continue
            elif GetEventFlag(9000):
                pass
        elif GetEventFlag(flag2) or GetEventFlag(flag3):
            """State 2"""
            call = t213006000_x8(val2=val2, val3=val3)
            if CheckSelfDeath() or GetEventFlag(flag1):
                Goto('L0')
            elif not GetEventFlag(flag2) and not GetEventFlag(flag3):
                continue
            elif GetEventFlag(9000):
                pass
        elif GetEventFlag(9000) or (IsPlayerDead() and not DoesSelfHaveSpEffect(9649)):
            pass
        """State 4"""
        assert t213006000_x32() and (not GetEventFlag(9000) and not IsPlayerDead())
    """Unused"""
    """State 5"""
    return 0

def t213006000_x24():
    """State 0,1"""
    assert t213006000_x25()
    """State 2"""
    return 0

def t213006000_x25():
    """State 0,1"""
    assert t213006000_x11(machine1=1104, val6=1104)
    """State 2"""
    return 0

def t213006000_x26():
    """State 0,1"""
    call = t213006000_x11(machine1=1201, val6=1201)
    if call.Get() == 1:
        """State 2"""
        assert t213006000_x5()
    elif call.Done():
        pass
    """State 3"""
    return 0

def t213006000_x27():
    """State 0,1"""
    call = t213006000_x11(machine1=1300, val6=1300)
    if call.Get() == 1:
        """State 2"""
        assert t213006000_x5()
    elif call.Done():
        pass
    """State 3"""
    return 0

def t213006000_x28():
    """State 0,1"""
    call = t213006000_x11(machine1=1301, val6=1301)
    if call.Get() == 1:
        """State 2"""
        assert t213006000_x5()
    elif call.Done():
        pass
    """State 3"""
    return 0

def t213006000_x29():
    """State 0,1"""
    call = t213006000_x11(machine1=1302, val6=1302)
    if call.Get() == 1:
        """State 2"""
        assert t213006000_x5()
    elif call.Done():
        pass
    """State 3"""
    return 0

def t213006000_x30(text1=_, mode3=1):
    """State 0,4"""
    assert t213006000_x2() and CheckSpecificPersonTalkHasEnded(0)
    """State 1"""
    TalkToPlayer(text1, -1, -1, 0)
    assert CheckSpecificPersonTalkHasEnded(0)
    """State 3"""
    if mode3 == 0:
        pass
    else:
        """State 2"""
        ReportConversationEndToHavokBehavior()
    """State 5"""
    return 0

def t213006000_x31():
    """State 0,1"""
    assert t213006000_x11(machine1=1002, val6=1002)
    """State 2"""
    return 0

def t213006000_x32():
    """State 0,1"""
    assert t213006000_x1()
    """State 2"""
    return 0

def t213006000_x33():
    """State 0,1"""
    if CheckSpecificPersonGenericDialogIsOpen(0):
        """State 2"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 3"""
    if CheckSpecificPersonMenuIsOpen(-1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0):
        """State 4"""
        ForceCloseMenu()
    else:
        pass
    """State 5"""
    return 0

def t213006000_x34():
    """State 0,1"""
    if GetEventFlag(3225):
        """State 4"""
        def WhilePaused():
            GiveSpEffectToSelfIf(GetEventFlag(11102707) == 1 and GetEventFlag(11109339) == 0, 9620)
        assert t213006000_x38()
        """State 3"""
        Label('L0')
        assert CheckSpecificPersonTalkHasEnded(0)
        """State 8"""
        assert t213006000_x36()
    elif GetEventFlag(3226):
        """State 5"""
        assert t213006000_x40()
        Goto('L0')
    elif GetEventFlag(3227):
        """State 6"""
        assert t213006000_x42()
        Goto('L0')
    elif GetEventFlag(3228):
        """State 7"""
        assert t213006000_x45()
        Goto('L0')
    else:
        """State 2"""
        pass
    """State 9"""
    return 0

def t213006000_x35():
    """State 0,5"""
    if not GetEventFlag(11102702):
        """State 1"""
        if not GetEventFlag(11109205) and not GetEventFlag(11102702):
            """State 9"""
            # talk:21300100:"You're a new face."
            # talk:21300101:"No matter, it's all the same."
            # talk:21300102:"Lay out your arms. Let's get smithing."
            assert t213006000_x30(text1=21300100, mode3=1)
            """State 2"""
            SetEventFlag(11109205, 1)
        elif GetEventFlag(11102703) and not GetEventFlag(11109209):
            """State 13"""
            # talk:21304200:"Ah. You, is it?"
            # talk:21304201:"I...didn't notice you there."
            # talk:21304202:"I'll be doing my job, same as ever."
            # talk:21304203:"Just lay out your arms."
            def WhilePaused():
                RequestAnimation(20016, -1)
            assert t213006000_x30(text1=21304200, mode3=1)
            """State 8"""
            SetEventFlag(11109209, 1)
        elif GetEventFlag(11102707) and not GetEventFlag(11109339):
            """State 14"""
            # talk:21308100:"Oh, it's you."
            # talk:21308101:"Don't pay me any mind. It's not important."
            # talk:21308102:"Just lay out your arms."
            def WhilePaused():
                RequestAnimation(20018, -1)
            assert t213006000_x30(text1=21308100, mode3=1)
            """State 6"""
            SetEventFlag(11109339, 1)
        elif (GetEventFlag(9101) or GetEventFlag(9104) or GetEventFlag(9112) or GetEventFlag(9120) or GetEventFlag(9122)
              or GetEventFlag(9130)):
            """State 7"""
            if not GetEventFlag(11109206):
                """State 10"""
                # talk:21303000:"Now, look at you."
                # talk:21303001:"Those eyes tell a story."
                # talk:21303002:"Of a challenger, who's felled his mark."
                # talk:21303003:"Fine and well. Now, lay out your arms."
                assert t213006000_x30(text1=21303000, mode3=1)
                """State 4"""
                SetEventFlag(11109206, 1)
            else:
                """State 11"""
                Label('L0')
                # talk:21301000:"Well, where've you been hiding?"
                # talk:21301001:"I took you for dead."
                # talk:21301002:"No matter. It's all the same."
                # talk:21301003:"Lay out your arms, then."
                assert t213006000_x30(text1=21301000, mode3=1)
        else:
            Goto('L0')
        """State 3"""
        SetEventFlag(11102702, 1)
    else:
        """State 12"""
        # talk:21300200:"Back already?"
        # talk:21300201:"No matter. Lay out your arms."
        assert t213006000_x30(text1=21300200, mode3=1)
    """State 15"""
    return 0

def t213006000_x36():
    """State 0,8"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 33"""
        assert t213006000_x60()
        """State 11"""
        if GetEventFlag(3225):
            """State 17"""
            assert t213006000_x47()
        elif GetEventFlag(3226):
            """State 26"""
            assert t213006000_x54()
        elif GetEventFlag(3227):
            """State 30"""
            assert t213006000_x58()
        else:
            """State 12"""
            pass
        """State 3"""
        # action:22130001:"Strengthen armament"
        AddTalkListData(1, 22130001, -1)
        # action:22130003:"Ashes of War"
        AddTalkListData(2, 22130003, -1)
        # action:22130018:"Ash of War duplication"
        AddTalkListDataIf(GetEventFlag(65800) == 1, 20, 22130018, -1)
        # action:20000011:"Sell"
        AddTalkListData(4, 20000011, -1)
        # action:22130004:"About prayer"
        AddTalkListDataIf(GetEventFlag(11109217) == 1, 5, 22130004, -1)
        # action:22130005:"About Roderika"
        AddTalkListDataIf(GetEventFlag(11109218) == 1, 6, 22130005, -1)
        # action:22130006:"About Roderika"
        AddTalkListDataIf(GetEventFlag(11109219) == 1, 7, 22130006, -1)
        # action:22130007:"About Roderika"
        AddTalkListDataIf(GetEventFlag(11109331) == 1, 8, 22130007, -1)
        # action:22130008:"About Roderika"
        AddTalkListDataIf(GetEventFlag(11109332) == 1, 9, 22130008, -1)
        # action:22130009:"Let's talk a while"
        AddTalkListDataIf(GetEventFlag(11109333) == 1, 10, 22130009, -1)
        # action:22130010:"About the chains on your legs"
        AddTalkListDataIf(GetEventFlag(11109334) == 1, 11, 22130010, -1)
        # action:22130011:"You're a prisoner?"
        AddTalkListDataIf(GetEventFlag(11109335) == 1, 12, 22130011, -1)
        # action:22130012:"About the god-slaying weapon"
        AddTalkListDataIf(GetEventFlag(11109233) == 1, 13, 22130012, -1)
        # action:22130013:"About the god-slaying weapon"
        AddTalkListDataIf(GetEventFlag(11109234) == 1, 14, 22130013, -1)
        # action:22130014:"Why are you still making weapons?"
        AddTalkListDataIf(GetEventFlag(11109235) == 1, 15, 22130014, -1)
        # action:22130015:"What happened to her?"
        AddTalkListDataIf(GetEventFlag(11109236) == 1, 16, 22130015, -1)
        # action:22130016:"About yourself"
        AddTalkListDataIf(GetEventFlag(11109248) == 1, 17, 22130016, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        """State 6"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 2"""
        if GetTalkListEntryResult() == 1:
            """State 14"""
            if not GetEventFlag(2051) and not GetEventFlag(2052):
                """State 15,5"""
                CombineMenuFlagAndEventFlag(6001, 232)
                CombineMenuFlagAndEventFlag(6001, 233)
                CombineMenuFlagAndEventFlag(6001, 234)
                CombineMenuFlagAndEventFlag(6001, 235)
                RecordPlayLog(9)
                """State 4"""
                OpenEnhanceShop(0)
                assert not (CheckSpecificPersonMenuIsOpen(9, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
                continue
            else:
                """State 16,34"""
                # action:22131010:"Cannot select while entering combat"
                assert t213006000_x3(action1=22131010)
                continue
        elif GetTalkListEntryResult() == 2:
            """State 9"""
            OpenEquipmentChangeOfPurposeShop()
            RecordPlayLog(7)
            assert not (CheckSpecificPersonMenuIsOpen(7, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
            continue
        elif GetTalkListEntryResult() == 20:
            """State 13"""
            OpenAshOfWarShop(112000, 112199)
            assert not (CheckSpecificPersonMenuIsOpen(27, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
            continue
        elif GetTalkListEntryResult() == 4:
            """State 7"""
            OpenSellShop(-1, -1)
            RecordPlayLog(6)
            assert not (CheckSpecificPersonMenuIsOpen(6, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
            continue
        elif GetTalkListEntryResult() == 5:
            """State 18"""
            assert t213006000_x48()
        elif GetTalkListEntryResult() == 6:
            """State 19"""
            assert t213006000_x49()
        elif GetTalkListEntryResult() == 7:
            """State 20"""
            assert t213006000_x37()
        elif GetTalkListEntryResult() == 8:
            """State 21"""
            assert t213006000_x46()
        elif GetTalkListEntryResult() == 9:
            """State 22"""
            assert t213006000_x50()
        elif GetTalkListEntryResult() == 10:
            """State 23"""
            assert t213006000_x51()
        elif GetTalkListEntryResult() == 11:
            """State 24"""
            assert t213006000_x52()
        elif GetTalkListEntryResult() == 12:
            """State 25"""
            assert t213006000_x53()
        elif GetTalkListEntryResult() == 13:
            """State 27"""
            assert t213006000_x55()
        elif GetTalkListEntryResult() == 14:
            """State 28"""
            assert t213006000_x56()
        elif GetTalkListEntryResult() == 15:
            """State 29"""
            assert t213006000_x41()
        elif GetTalkListEntryResult() == 16:
            """State 32"""
            assert t213006000_x57()
        elif GetTalkListEntryResult() == 17:
            """State 31"""
            assert t213006000_x59()
        else:
            """State 35"""
            return 0
        """State 10"""
        assert CheckSpecificPersonTalkHasEnded(0)

def t213006000_x37():
    """State 0,7"""
    # talk:21305100:"The girl? What about her?"
    assert t213006000_x30(text1=21305100, mode3=1)
    while True:
        """State 5"""
        ClearPreviousMenuSelection()
        """State 1"""
        ClearTalkListData()
        """State 3"""
        # action:22131000:"Would you watch over Roderika?"
        AddTalkListDataIf(GetEventFlag(11109213) == 0, 1, 22131000, -1)
        # action:22131001:"Nothing"
        AddTalkListDataIf(GetEventFlag(11109213) == 0, 2, 22131001, -1)
        # action:22131002:"It's what she wants"
        AddTalkListDataIf(GetEventFlag(11109213) == 1, 3, 22131002, -1)
        # action:22131003:"Understood"
        AddTalkListDataIf(GetEventFlag(11109213) == 1, 4, 22131003, -1)
        """State 4"""
        OpenConversationChoicesMenu(0)
        assert not (CheckSpecificPersonMenuIsOpen(12, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 2"""
        if GetTalkListEntryResult() == 1:
            """State 8"""
            # talk:21305200:"Are you out of your mind?"
            # talk:21305201:"Who'd stay with an ugly brute who only knows how to smith?"
            # talk:21305202:"Absurd. And besides, she'd never agree to it."
            assert t213006000_x30(text1=21305200, mode3=1)
            """State 6"""
            SetEventFlag(11109213, 1)
            continue
        elif GetTalkListEntryResult() == 2:
            pass
        elif GetTalkListEntryResult() == 3:
            """State 9"""
            # talk:21305300:"I refuse to believe it."
            # talk:21305301:"I don't doubt you, but I know when something's too good to be 1."
            assert t213006000_x30(text1=21305300, mode3=1)
        elif GetTalkListEntryResult() == 4:
            pass
        """State 10"""
        return 0

def t213006000_x38():
    """State 0,1"""
    assert t213006000_x35()
    """State 2"""
    return 0

def t213006000_x39():
    """State 0,1"""
    if not GetEventFlag(11109238):
        """State 4"""
        # talk:21310000:"I knew you'd be back."
        # talk:21310001:"Lay out your arms. Let's get smithing."
        assert t213006000_x30(text1=21310000, mode3=1)
        """State 2"""
        SetEventFlag(11109238, 1)
    else:
        """State 3"""
        if not GetEventFlag(9114):
            """State 5"""
            # talk:21310100:"Lay out your arms. Let's get smithing."
            assert t213006000_x30(text1=21310100, mode3=1)
        else:
            """State 6"""
            # talk:21312300:"I'll smith...as long as you like."
            # talk:21312301:"Now...lay out your...arms."
            assert t213006000_x30(text1=21312300, mode3=1)
    """State 7"""
    return 0

def t213006000_x40():
    """State 0,1"""
    assert t213006000_x39()
    """State 2"""
    return 0

def t213006000_x41():
    """State 0,2"""
    # talk:21311000:"Weren't you listening?"
    # talk:21311001:"As I've always said."
    # talk:21311002:"You came to challenge the demigods, and their god. To slay them."
    # talk:21311003:"And as long as you do, I will always smith your weapons."
    # talk:21311004:"It is what I wish. To smith a weapon for you to slay a god."
    assert t213006000_x30(text1=21311000, mode3=1)
    """State 1"""
    SetEventFlag(11109227, 1)
    """State 3"""
    return 0

def t213006000_x42():
    """State 0,1"""
    assert t213006000_x43()
    """State 2"""
    return 0

def t213006000_x43():
    """State 0,2"""
    # talk:21314000:"Who are you?"
    # talk:21314001:"Oh, I must be a blacksmith."
    # talk:21314002:"Now, let's get smithing..."
    assert t213006000_x30(text1=21314000, mode3=1)
    """State 1"""
    SetEventFlag(11109246, 1)
    """State 3"""
    return 0

def t213006000_x44():
    """State 0,2"""
    # talk:21315000:"Now, let's get smithing..."
    assert t213006000_x30(text1=21315000, mode3=1)
    """State 1,3"""
    return 0

def t213006000_x45():
    """State 0,1"""
    assert t213006000_x44()
    """State 2"""
    return 0

def t213006000_x46():
    """State 0,2"""
    # talk:21306000:"I spoke with the girl."
    # talk:21306001:"She has a gift for spirit tuning."
    # talk:21306002:"So I told her everything I know."
    # talk:21306003:"I'm indebted to a spirit tuner I met long ago."
    # talk:21306004:"It was all I could do to honour her."
    # talk:21306005:"I'm sorry I doubted you."
    assert t213006000_x30(text1=21306000, mode3=1)
    """State 1"""
    SetEventFlag(11109207, 1)
    """State 3"""
    return 0

def t213006000_x47():
    """State 0,2"""
    if not GetEventFlag(11109336) and GetEventFlag(11102703):
        """State 1"""
        SetEventFlag(11109217, 1)
    elif GetEventFlag(3707) and not GetEventFlag(11109210):
        """State 3"""
        SetEventFlag(11109218, 1)
    elif GetEventFlag(11109256) and not GetEventFlag(11109213):
        """State 4"""
        SetEventFlag(11109219, 1)
    elif GetEventFlag(3708) and GetEventFlag(11109213) and not GetEventFlag(11109207):
        """State 5"""
        SetEventFlag(11109331, 1)
    elif GetEventFlag(11109267) and not GetEventFlag(11109211):
        """State 6"""
        SetEventFlag(11109332, 1)
    elif not GetEventFlag(110) and GetEventFlag(1054539216) and not GetEventFlag(11109229):
        """State 7"""
        SetEventFlag(11109333, 1)
    elif not GetEventFlag(11109212):
        """State 8"""
        SetEventFlag(11109334, 1)
    elif GetEventFlag(11109212) and not GetEventFlag(11109216):
        """State 9"""
        SetEventFlag(11109335, 1)
    else:
        """State 10"""
        pass
    """State 11"""
    return 0

def t213006000_x48():
    """State 0,2"""
    # talk:21304100:"Those words were not meant for you."
    # talk:21304101:"I may be prisoner to you Tarnished lot."
    # talk:21304102:"But my prayers are mine and mine alone."
    # talk:21304103:"Well, I've had my say. I'll be more careful, too."
    assert t213006000_x30(text1=21304100, mode3=1)
    """State 1"""
    SetEventFlag(11109336, 1)
    """State 3"""
    return 0

def t213006000_x49():
    """State 0,2"""
    # talk:21305000:"The girl you brought here..."
    # talk:21305001:"She's crestfallen, and can scarcely swing a blade,"
    # talk:21305002:"but she has a gift for spirit tuning."
    # talk:21305003:"I saw another one like her, long ago."
    # talk:21305004:"Their eyes share the same hue."
    assert t213006000_x30(text1=21305000, mode3=1)
    """State 1"""
    SetEventFlag(11109210, 1)
    """State 3"""
    return 0

def t213006000_x50():
    """State 0,2"""
    # talk:21307000:"The girl has come a long way."
    # talk:21307001:"As ever, time and technique have made her stronger."
    # talk:21307002:"Tis good to see."
    # talk:21307003:"An imprisoned monster does not deserve an apprentice, or a daughter."
    # talk:21307004:"But at times, that's precisely what she feels like to me."
    # talk:21307005:"I've gone soft. And it isn't easy."
    assert t213006000_x30(text1=21307000, mode3=1)
    """State 1"""
    SetEventFlag(11109211, 1)
    """State 3"""
    return 0

def t213006000_x51():
    """State 0,2"""
    # talk:21309000:"Are you having second thoughts?"
    # talk:21309001:"Might I have a word, then?"
    # talk:21309002:"Your kind are meant to challenge them. To slay them."
    # talk:21309003:"The demigods. And their god."
    # talk:21309004:"If you remain loyal to your calling,"
    # talk:21309005:"then no matter what you do, no matter what happens to me,"
    # talk:21309006:"I will never cease to smith your weapons."
    # talk:21309007:"Until you have one to slay a god."
    assert t213006000_x30(text1=21309000, mode3=1)
    """State 1"""
    SetEventFlag(11109229, 1)
    """State 3"""
    return 0

def t213006000_x52():
    """State 0,2"""
    # talk:21302000:"I see you've noticed the chains."
    # talk:21302001:"Nothing special. I'm a prisoner, and these are my chains."
    # talk:21302002:"I'm trapped by the Hold, undying, smithing for you fools."
    # talk:21302003:"That's all there is to it."
    assert t213006000_x30(text1=21302000, mode3=1)
    """State 1"""
    SetEventFlag(11109212, 1)
    """State 3"""
    return 0

def t213006000_x53():
    """State 0,2"""
    # talk:21302100:"Nah, don't read too much into it."
    # talk:21302101:"I've no grudge against you."
    # talk:21302102:"My being a prisoner is no fault of yours."
    # talk:21302103:"Besides, I don't mind smithing."
    # talk:21302104:"Despite my differences, the weapons get stronger, all the same. Given time, technique never fails."
    # talk:21302105:"Besides, it helps me forget. The sheer terror of her..."
    assert t213006000_x30(text1=21302100, mode3=1)
    """State 1"""
    SetEventFlag(11109216, 1)
    """State 3"""
    return 0

def t213006000_x54():
    """State 0,1"""
    if not GetEventFlag(11109227) and GetEventFlag(11109275):
        """State 2"""
        SetEventFlag(11109235, 1)
    elif not GetEventFlag(11109232) and GetEventFlag(11109276):
        """State 3"""
        SetEventFlag(11109236, 1)
    else:
        """State 4"""
        pass
    """State 5"""
    if GetEventFlag(9114) and not GetEventFlag(11109230):
        """State 7"""
        SetEventFlag(11109233, 1)
    elif GetEventFlag(11109230) and not GetEventFlag(11109231):
        """State 8"""
        SetEventFlag(11109234, 1)
    else:
        """State 6"""
        pass
    """State 9"""
    return 0

def t213006000_x55():
    """State 0,2"""
    # talk:21313000:"Use my masterpiece to slay a god."
    # talk:21313001:"That is all that I have lived for."
    # talk:21313002:"And my promise to Q-queen Marika."
    # talk:21313003:"But do me a favor, and do look after the girl."
    assert t213006000_x30(text1=21313000, mode3=1)
    """State 1"""
    SetEventFlag(11109230, 1)
    """State 3"""
    return 0

def t213006000_x56():
    """State 0,2"""
    # talk:21313100:"I can't hold on much longer."
    # talk:21313101:"I'm going the way of the R-roundtable..."
    # talk:21313102:"It was a great honor to smith your weapons during my time here."
    # talk:21313103:"Allow me to c-call you this, just once, before it ends."
    # talk:21313104:"My lord, f-for that is what you are."
    assert t213006000_x30(text1=21313100, mode3=1)
    """State 1"""
    SetEventFlag(11109231, 1)
    """State 3"""
    return 0

def t213006000_x57():
    """State 0,2"""
    # talk:21311100:"I've upset the girl."
    # talk:21311101:"She says that now that my chains are broken, I'm free."
    # talk:21311102:"That if I stay here, I will be ruined with the Roundtable."
    # talk:21311103:" "
    # talk:21311104:"What use have I for freedom now?"
    # talk:21311105:"I smith weapons to slay a god."
    # talk:21311106:"I have lived, and will die, doing so, upon this spot."
    # talk:21311107:"Is there any other way?"
    assert t213006000_x30(text1=21311100, mode3=1)
    """State 1"""
    SetEventFlag(11109232, 1)
    """State 3"""
    return 0

def t213006000_x58():
    """State 0,2"""
    if not GetEventFlag(11109247):
        """State 1"""
        SetEventFlag(11109248, 1)
    else:
        """State 3"""
        pass
    """State 4"""
    return 0

def t213006000_x59():
    """State 0,2"""
    # talk:21314100:"Could you tell me what happened?"
    # talk:21314101:"Why is the Roundtable burning, in ruins?"
    # talk:21314102:"Why does that girl weep for me?"
    # talk:21314103:"Have I forgotten something of dire importance?"
    assert t213006000_x30(text1=21314100, mode3=1)
    """State 1"""
    SetEventFlag(11109247, -1)
    """State 3"""
    return 0

def t213006000_x60():
    """State 0,1"""
    SetEventFlag(11109217, 0)
    SetEventFlag(11109218, 0)
    SetEventFlag(11109219, 0)
    SetEventFlag(11109331, 0)
    SetEventFlag(11109332, 0)
    SetEventFlag(11109333, 0)
    SetEventFlag(11109334, 0)
    SetEventFlag(11109335, 0)
    """State 2"""
    SetEventFlag(11109235, 0)
    SetEventFlag(11109236, 0)
    SetEventFlag(11109233, 0)
    SetEventFlag(11109234, 0)
    """State 3"""
    SetEventFlag(11109248, 0)
    """State 4"""
    return 0

