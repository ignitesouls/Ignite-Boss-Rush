# -*- coding: utf-8 -*-
def t000001000_1():
    """State 0,1"""
    t000001000_x22()
    Quit()

def t000001000_x0(action2=_):
    """State 0,1"""
    OpenGenericDialog(8, action2, 3, 4, 2)
    assert not CheckSpecificPersonGenericDialogIsOpen(0)
    """State 2"""
    if GetGenericDialogButtonResult() == 1:
        """State 3"""
        return 0
    else:
        """State 4"""
        return 1

def t000001000_x1():
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
    if CheckSpecificPersonGenericDialogIsOpen(0) == 1:
        """State 3"""
        ForceCloseGenericDialog()
    else:
        pass
    """State 4"""
    if CheckSpecificPersonMenuIsOpen(-1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0):
        """State 5"""
        ForceCloseMenu()
    else:
        pass
    """State 8"""
    return 0

def t000001000_x2():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

def t000001000_x3(actionbutton1=_, flag3=6001, flag4=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 2"""
        assert CompareBonfireState(1)
        """State 4"""
        if GetEventFlag(flag4) == 1:
            """State 5"""
            assert GetEventFlag(flag3) == 1 and not GetEventFlag(flag4)
            """State 6"""
            assert GetCurrentStateElapsedTime() > 1
        elif GetEventFlag(flag3) == 1 and not GetEventFlag(flag4):
            pass
        """State 3"""
        if CompareBonfireState(0):
            pass
        elif CheckActionButtonArea(actionbutton1):
            break
        elif (not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not
              IsCharacterDisabled())):
            pass
        elif not GetEventFlag(flag3) or GetEventFlag(flag4) == 1:
            pass
    """State 7"""
    return 0

def t000001000_x4(action1=_):
    """State 0,1"""
    OpenGenericDialog(7, action1, 1, 0, 1)
    assert not CheckSpecificPersonGenericDialogIsOpen(0)
    """State 2"""
    return 0

def t000001000_x5(actionbutton5=6100, flag1=6001, flag2=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 3"""
        assert GetEventFlag(flag1) == 1 and not GetEventFlag(flag2)
        """State 2"""
        # actionbutton:6100:"Touch grace"
        if CheckActionButtonArea(actionbutton5):
            break
        elif (not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not
              IsCharacterDisabled())):
            pass
        elif not GetEventFlag(flag1) or GetEventFlag(flag2) == 1:
            pass
    """State 4"""
    return 0

def t000001000_x6(goods7=1000, goods8=10020):
    """State 0,14"""
    if GetEventFlag(720080) == 1:
        """State 15"""
        pass
    else:
        """State 16,17"""
        SetEventFlag(720080, 1)
    """State 1"""
    if GetTotalBonfireLevel() <= 13:
        """State 2,13,26"""
        # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12
        call = t000001000_x17(goods7=goods7, goods10=0, z53=1)
        if call.Get() == 0:
            """State 12,25"""
            # action:13040150:"No Flask of Crimson Tears in inventory"
            assert t000001000_x4(action1=13040150)
        elif call.Done():
            """State 11,19"""
            SetWorkValue(1, 1)
            """State 20"""
            call = t000001000_x999(action2=20011000 + GetWorkValue(1)) #call replaced to remove prompt
            if call.Get() == 0:
                """State 6,10"""
                # goods:10020:Sacred Tear
                if ComparePlayerInventoryNumber(3, goods8, 4, GetWorkValue(1), 0) == 1:
                    """State 4,8"""
                    BonfireActivation(GetTotalBonfireLevel() + 1)
                    """State 9"""
                    # goods:10020:Sacred Tear
                    PlayerEquipmentQuantityChange(3, goods8, GetWorkValue(1) * -1)
                    """State 27"""
                    assert t000001000_x19(goods7=goods7)
                    """State 24"""
                    assert t000001000_x16(goods9=goods7)
                    """State 22"""
                    # action:13040020:"Increased the amount of HP/FP replenished by your flasks"
                    assert t000001000_x4(action1=13040020)
                    """State 18"""
                    SetWorkValue(1, 0)
                else:
                    """State 5,28"""
                    # action:20011000:"No Sacred Tear in inventory"
                    assert t000001000_x4(action1=20011000)
            elif call.Done():
                """State 7"""
                pass
    else:
        """State 3,21"""
        # action:13040000:"The amount of HP/FP your flasks replenish cannot be increased any further"
        assert t000001000_x4(action1=13040000)
    """State 29"""
    return 0
    """Unused"""
    """State 23"""
    t000001000_x11()
    Quit()

def t000001000_x7(goods5=1000, goods6=10010):
    """State 0,15"""
    if GetEventFlag(720070) == 1:
        """State 16"""
        pass
    else:
        """State 17,18"""
        SetEventFlag(720070, 1)
    """State 1"""
    if GetEstusAllocation(0) + GetEstusAllocation(1) < 13:
        """State 2,13,26"""
        # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12
        call = t000001000_x17(goods7=goods5, goods10=0, z53=1)
        if call.Get() == 0:
            """State 12,25"""
            # action:13040150:"No Flask of Crimson Tears in inventory"
            assert t000001000_x4(action1=13040150)
        elif call.Done():
            """State 11,19"""
            SetWorkValue(1, GetEstusAllocation(0) + GetEstusAllocation(1) + -4)
            """State 28"""
            assert (t000001000_x21(z40=1, z41=1, z42=2, z43=2, z44=3, z45=3, z46=4, z47=4, z48=5, z49=5,
                    z50=1))
            """State 21"""
            call = t000001000_x999(action2=20011010 + GetWorkValue(1)) #call replaced to remove prompt
            if call.Get() == 0:
                """State 6,14"""
                # goods:10010:Golden Seed
                if ComparePlayerInventoryNumber(3, goods6, 4, GetWorkValue(1), 0) == 1:
                    """State 4,8"""
                    # goods:10010:Golden Seed
                    PlayerEquipmentQuantityChange(3, goods6, GetWorkValue(1) * -1)
                    """State 9"""
                    EstusAllocationUpdate(GetEstusAllocation(0) + 1, 0)
                    """State 27"""
                    assert t000001000_x16(goods9=goods5)
                    """State 22"""
                    # action:13040140:"Added a charge to Flask of Crimson Tears"
                    assert t000001000_x4(action1=13040140)
                    """State 20"""
                    SetWorkValue(1, 0)
                    """State 10"""
                else:
                    """State 5,23"""
                    # action:20011010:"Not enough Golden Seeds"
                    assert t000001000_x4(action1=20011010)
            elif call.Done():
                """State 7"""
                pass
    else:
        """State 3,24"""
        # action:13040120:"Flask charges already at maximum"
        assert t000001000_x4(action1=13040120)
    """State 29"""
    return 0

def t000001000_x8(goods11=1000):
    """State 0,1"""
    # goods:1001:Flask of Crimson Tears, goods:1000:Flask of Crimson Tears
    if DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 0 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 0 * 2) == 1:
        """State 2"""
        BonfireActivation(1)
        """State 13"""
        Label('L0')
        """State 18"""
        assert t000001000_x9(goods11=goods11)
    # goods:1003:Flask of Crimson Tears +1, goods:1002:Flask of Crimson Tears +1
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 1 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 1 * 2) == 1:
        """State 3"""
        BonfireActivation(2)
        Goto('L0')
    # goods:1005:Flask of Crimson Tears +2, goods:1004:Flask of Crimson Tears +2
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 2 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 2 * 2) == 1:
        """State 4"""
        BonfireActivation(3)
        Goto('L0')
    # goods:1007:Flask of Crimson Tears +3, goods:1006:Flask of Crimson Tears +3
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 3 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 3 * 2) == 1:
        """State 5"""
        BonfireActivation(4)
        Goto('L0')
    # goods:1009:Flask of Crimson Tears +4, goods:1008:Flask of Crimson Tears +4
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 4 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 4 * 2) == 1:
        """State 6"""
        BonfireActivation(5)
        Goto('L0')
    # goods:1011:Flask of Crimson Tears +5, goods:1010:Flask of Crimson Tears +5
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 5 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 5 * 2) == 1:
        """State 7"""
        BonfireActivation(6)
        Goto('L0')
    # goods:1013:Flask of Crimson Tears +6, goods:1012:Flask of Crimson Tears +6
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 6 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 6 * 2) == 1:
        """State 8"""
        BonfireActivation(7)
        Goto('L0')
    # goods:1015:Flask of Crimson Tears +7, goods:1014:Flask of Crimson Tears +7
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 7 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 7 * 2) == 1:
        """State 9"""
        BonfireActivation(8)
        Goto('L0')
    # goods:1017:Flask of Crimson Tears +8, goods:1016:Flask of Crimson Tears +8
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 8 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 8 * 2) == 1:
        """State 10"""
        BonfireActivation(9)
        Goto('L0')
    # goods:1019:Flask of Crimson Tears +9, goods:1018:Flask of Crimson Tears +9
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 9 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 9 * 2) == 1:
        """State 11"""
        BonfireActivation(10)
        Goto('L0')
    # goods:1021:Flask of Crimson Tears +10, goods:1020:Flask of Crimson Tears +10
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 10 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 10 * 2) == 1:
        """State 12"""
        BonfireActivation(11)
        Goto('L0')
    elif True:
        """State 15"""
        pass
    # goods:1023:Flask of Crimson Tears +11, goods:1022:Flask of Crimson Tears +11
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 11 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 11 * 2) == 1:
        """State 16"""
        BonfireActivation(12)
        Goto('L0')
    # goods:1025:Flask of Crimson Tears +12, goods:1024:Flask of Crimson Tears +12
    elif DoesPlayerHaveItem(3, goods11 + 1 + 0 * 50 + 12 * 2) == 1 or DoesPlayerHaveItem(3, goods11 + 0 + 0 * 50 + 12 * 2) == 1:
        """State 17"""
        BonfireActivation(13)
        Goto('L0')
    """State 14,19"""
    return 0

def t000001000_x9(goods11=1000):
    """State 0,15"""
    # goods:1000:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7
    call = t000001000_x12(goods11=goods11, goods12=0, goods13=0)
    if call.Get() == 1:
        """State 1,11"""
        # goods:1000:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9
        assert t000001000_x10(goods11=goods11, goods14=0, goods15=0)
    elif call.Done():
        """State 16"""
        # goods:1001:Flask of Crimson Tears, goods:1003:Flask of Crimson Tears +1, goods:1005:Flask of Crimson Tears +2, goods:1007:Flask of Crimson Tears +3, goods:1009:Flask of Crimson Tears +4, goods:1011:Flask of Crimson Tears +5, goods:1013:Flask of Crimson Tears +6, goods:1015:Flask of Crimson Tears +7
        call = t000001000_x12(goods11=goods11, goods12=0, goods13=1)
        if call.Get() == 1:
            """State 8,10"""
            # goods:1001:Flask of Crimson Tears, goods:1003:Flask of Crimson Tears +1, goods:1005:Flask of Crimson Tears +2, goods:1007:Flask of Crimson Tears +3, goods:1009:Flask of Crimson Tears +4, goods:1011:Flask of Crimson Tears +5, goods:1013:Flask of Crimson Tears +6, goods:1015:Flask of Crimson Tears +7, goods:1017:Flask of Crimson Tears +8, goods:1019:Flask of Crimson Tears +9
            assert t000001000_x10(goods11=goods11, goods14=0, goods15=1)
        elif call.Done():
            """State 2"""
            pass
    """State 5,17"""
    # goods:1050:Flask of Cerulean Tears, goods:1052:Flask of Cerulean Tears +1, goods:1054:Flask of Cerulean Tears +2, goods:1056:Flask of Cerulean Tears +3, goods:1058:Flask of Cerulean Tears +4, goods:1060:Flask of Cerulean Tears +5, goods:1062:Flask of Cerulean Tears +6, goods:1064:Flask of Cerulean Tears +7
    call = t000001000_x12(goods11=goods11, goods12=1, goods13=0)
    if call.Get() == 1:
        """State 3,13"""
        # goods:1050:Flask of Cerulean Tears, goods:1052:Flask of Cerulean Tears +1, goods:1054:Flask of Cerulean Tears +2, goods:1056:Flask of Cerulean Tears +3, goods:1058:Flask of Cerulean Tears +4, goods:1060:Flask of Cerulean Tears +5, goods:1062:Flask of Cerulean Tears +6, goods:1064:Flask of Cerulean Tears +7, goods:1066:Flask of Cerulean Tears +8, goods:1068:Flask of Cerulean Tears +9
        assert t000001000_x10(goods11=goods11, goods14=1, goods15=0)
    elif call.Done():
        """State 18"""
        # goods:1051:Flask of Cerulean Tears, goods:1053:Flask of Cerulean Tears +1, goods:1055:Flask of Cerulean Tears +2, goods:1057:Flask of Cerulean Tears +3, goods:1059:Flask of Cerulean Tears +4, goods:1061:Flask of Cerulean Tears +5, goods:1063:Flask of Cerulean Tears +6, goods:1065:Flask of Cerulean Tears +7
        call = t000001000_x12(goods11=goods11, goods12=1, goods13=1)
        if call.Get() == 1:
            """State 9,12"""
            # goods:1051:Flask of Cerulean Tears, goods:1053:Flask of Cerulean Tears +1, goods:1055:Flask of Cerulean Tears +2, goods:1057:Flask of Cerulean Tears +3, goods:1059:Flask of Cerulean Tears +4, goods:1061:Flask of Cerulean Tears +5, goods:1063:Flask of Cerulean Tears +6, goods:1065:Flask of Cerulean Tears +7, goods:1067:Flask of Cerulean Tears +8, goods:1069:Flask of Cerulean Tears +9
            assert t000001000_x10(goods11=goods11, goods14=1, goods15=1)
        elif call.Done():
            """State 4"""
            pass
    """State 6,14"""
    assert t000001000_x11()
    """State 7,19"""
    return 0

def t000001000_x10(goods11=1000, goods14=_, goods15=_):
    """State 0,1"""
    if DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 0 * 2) == 1:
        """State 3"""
        ReplaceTool(goods11 + goods14 * 50 + 0 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    elif DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 1 * 2) == 1:
        """State 4"""
        ReplaceTool(goods11 + goods14 * 50 + 1 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    elif DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 2 * 2) == 1:
        """State 5"""
        ReplaceTool(goods11 + goods14 * 50 + 2 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    elif DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 3 * 2) == 1:
        """State 6"""
        ReplaceTool(goods11 + goods14 * 50 + 3 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    elif DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 4 * 2) == 1:
        """State 7"""
        ReplaceTool(goods11 + goods14 * 50 + 4 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    elif DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 5 * 2) == 1:
        """State 8"""
        ReplaceTool(goods11 + goods14 * 50 + 5 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    elif DoesPlayerHaveItem(3, goods11 + goods15 + goods14 * 50 + 6 * 2) == 1:
        """State 9"""
        ReplaceTool(goods11 + goods14 * 50 + 6 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                    1)
    else:
        """State 2"""
        pass
    """State 13"""
    return 0
    """Unused"""
    """State 10"""
    ReplaceTool(goods11 + goods14 * 50 + 7 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                1)
    Quit()
    """State 11"""
    ReplaceTool(goods11 + goods14 * 50 + 8 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                1)
    Quit()
    """State 12"""
    ReplaceTool(goods11 + goods14 * 50 + 9 * 2 + goods15, goods11 + goods14 * 50 + goods15 + 2 * (GetTotalBonfireLevel() - 1),
                1)
    Quit()

def t000001000_x11():
    """State 0,1,13,14"""
    return 0
    """Unused"""
    """State 2,3,4"""
    Quit()
    """State 5"""
    Quit()
    """State 6"""
    Quit()
    """State 7"""
    Quit()
    """State 8"""
    Quit()
    """State 9"""
    Quit()
    """State 10"""
    Quit()
    """State 11"""
    Quit()
    """State 12"""
    Quit()

def t000001000_x12(goods11=1000, goods12=_, goods13=_):
    """State 0,1"""
    if (not DoesPlayerHaveItem(3, goods11 + goods13 + goods12 * 50 + 0 * 2) and not DoesPlayerHaveItem(3,
        goods11 + goods13 + goods12 * 50 + 1 * 2) and not DoesPlayerHaveItem(3, goods11 + goods13 + goods12
        * 50 + 2 * 2) and not DoesPlayerHaveItem(3, goods11 + goods13 + goods12 * 50 + 3 * 2) and not
        DoesPlayerHaveItem(3, goods11 + goods13 + goods12 * 50 + 4 * 2) and not DoesPlayerHaveItem(3,
        goods11 + goods13 + goods12 * 50 + 5 * 2) and not DoesPlayerHaveItem(3, goods11 + goods13 + goods12
        * 50 + 6 * 2) and not DoesPlayerHaveItem(3, goods11 + goods13 + goods12 * 50 + 7 * 2)):
        """State 2,3"""
        return 0
    else:
        """State 4"""
        return 1

def t000001000_x13():
    """State 0,1"""
    if DoesPlayerHaveSpEffect(8990) == 1:
        """State 2"""
        GiveSpEffectToPlayer(8998)
        """State 3"""
        SetEventFlag(100210, 0)
        SetEventFlag(100200, 0)
    else:
        pass
    """State 4"""
    return 0

def t000001000_x14(text1=_, z54=_, mode3=1):
    """State 0,5"""
    assert t000001000_x2() and CheckSpecificPersonTalkHasEnded(0) == 1
    """State 1"""
    TalkToPlayer(text1, -1, -1, 0)
    assert CheckSpecificPersonTalkHasEnded(0) == 1
    """State 4"""
    if not mode3:
        pass
    else:
        """State 3"""
        ReportConversationEndToHavokBehavior()
    """State 2"""
    SetEventFlag(z54, 1)
    """State 6"""
    return 0

def t000001000_x15(goods9=1000):
    """State 0,4,10"""
    # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12
    call = t000001000_x17(goods7=goods9, goods10=0, z53=1)
    if call.Get() == 0:
        """State 2,8"""
        # action:13040150:"No Flask of Crimson Tears in inventory"
        assert t000001000_x4(action1=13040150)
    elif call.Done():
        """State 1,7,12"""
        # goods:1050:Flask of Cerulean Tears, goods:1051:Flask of Cerulean Tears, goods:1052:Flask of Cerulean Tears +1, goods:1053:Flask of Cerulean Tears +1, goods:1054:Flask of Cerulean Tears +2, goods:1055:Flask of Cerulean Tears +2, goods:1056:Flask of Cerulean Tears +3, goods:1057:Flask of Cerulean Tears +3, goods:1058:Flask of Cerulean Tears +4, goods:1059:Flask of Cerulean Tears +4, goods:1060:Flask of Cerulean Tears +5, goods:1061:Flask of Cerulean Tears +5, goods:1062:Flask of Cerulean Tears +6, goods:1063:Flask of Cerulean Tears +6, goods:1064:Flask of Cerulean Tears +7, goods:1065:Flask of Cerulean Tears +7, goods:1066:Flask of Cerulean Tears +8, goods:1067:Flask of Cerulean Tears +8, goods:1068:Flask of Cerulean Tears +9, goods:1069:Flask of Cerulean Tears +9, goods:1070:Flask of Cerulean Tears +10, goods:1071:Flask of Cerulean Tears +10, goods:1072:Flask of Cerulean Tears +11, goods:1073:Flask of Cerulean Tears +11, goods:1074:Flask of Cerulean Tears +12, goods:1075:Flask of Cerulean Tears +12
        call = t000001000_x17(goods7=goods9, goods10=1, z53=1)
        if call.Get() == 0:
            """State 6,11"""
            # action:13040160:"No Flask of Cerulean Tears in inventory"
            assert t000001000_x4(action1=13040160)
        elif call.Done():
            """State 5,3"""
            OpenEstusAllotMenu()
            assert not (CheckSpecificPersonMenuIsOpen(14, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            """State 9"""
            assert t000001000_x16(goods9=goods9)
    """State 13"""
    return 0

def t000001000_x16(goods9=1000):
    """State 0,3"""
    # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12
    call = t000001000_x17(goods7=goods9, goods10=0, z53=1)
    if call.Get() == 1:
        """State 4"""
        assert t000001000_x18(goods9=goods9, mode2=0, z52=GetWorkValue(1))
        """State 5"""
        assert t000001000_x18(goods9=goods9, mode2=1, z52=GetWorkValue(1))
    elif call.Done():
        """State 1"""
        pass
    """State 2"""
    SetWorkValue(1, 0)
    """State 6"""
    return 0

def t000001000_x17(goods7=1000, goods10=_, z53=1):
    """State 0,13"""
    SetWorkValue(z53, 0)
    if (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 0 * 2) == 1 or DoesPlayerHaveItem(3, goods7
        + 1 + goods10 * 50 + 0 * 2) == 1):
        """State 1"""
        SetWorkValue(z53, 0)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 1 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 1 * 2) == 1):
        """State 2"""
        SetWorkValue(z53, 1)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 2 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 2 * 2) == 1):
        """State 3"""
        SetWorkValue(z53, 2)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 3 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 3 * 2) == 1):
        """State 4"""
        SetWorkValue(z53, 3)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 4 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 4 * 2) == 1):
        """State 5"""
        SetWorkValue(z53, 4)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 5 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 5 * 2) == 1):
        """State 6"""
        SetWorkValue(z53, 5)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 6 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 6 * 2) == 1):
        """State 7"""
        SetWorkValue(z53, 6)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 7 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 7 * 2) == 1):
        """State 8"""
        SetWorkValue(z53, 7)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 8 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 8 * 2) == 1):
        """State 9"""
        SetWorkValue(z53, 8)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 9 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 9 * 2) == 1):
        """State 10"""
        SetWorkValue(z53, 9)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 10 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 10 * 2) == 1):
        """State 11"""
        SetWorkValue(z53, 10)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 11 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 11 * 2) == 1):
        """State 14"""
        SetWorkValue(z53, 11)
    elif (DoesPlayerHaveItem(3, goods7 + 0 + goods10 * 50 + 12 * 2) == 1 or DoesPlayerHaveItem(3, goods7
          + 1 + goods10 * 50 + 12 * 2) == 1):
        """State 15"""
        SetWorkValue(z53, 12)
    else:
        """State 12"""
        SetWorkValue(z53, 13)
        """State 16"""
        return 0
    """State 17"""
    return 1

def t000001000_x18(goods9=1000, mode2=_, z52=_):
    """State 0,6"""
    if not GetEstusAllocation(mode2) < 0:
        """State 7,12"""
        if (DoesPlayerHaveItem(3, goods9 + 0 + mode2 * 50 + z52 * 2) == 1 or DoesPlayerHaveItem(3, goods9
            + 1 + mode2 * 50 + z52 * 2) == 1):
            """State 13,1"""
            if DoesPlayerHaveItem(3, goods9 + 0 + mode2 * 50 + z52 * 2) == 1:
                """State 2,4"""
                ReplaceTool(1000 + mode2 * 50 + z52 * 2 + 0, 1000 + mode2 * 50 + z52 * 2 + 1, 1)
            else:
                """State 3"""
                pass
            while True:
                """State 5"""
                if (0 == ComparePlayerInventoryNumber(3, 1000 + 1 + mode2 * 50 + z52 * 2, 4, GetEstusAllocation(mode2), 0)):
                    """State 9,11"""
                    PlayerEquipmentQuantityChange(3, 1000 + 1 + mode2 * 50 + z52 * 2, 1)
                else:
                    """State 10"""
                    break
        else:
            """State 14"""
            pass
    else:
        """State 8"""
        pass
    """State 15"""
    return 0

def t000001000_x19(goods7=1000):
    """State 0,3"""
    # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12
    call = t000001000_x17(goods7=goods7, goods10=0, z53=1)
    if call.Get() == 1:
        """State 4"""
        assert t000001000_x20(goods7=goods7, z51=GetWorkValue(1))
        """State 2"""
        SetWorkValue(1, 0)
    elif call.Done():
        """State 1"""
        pass
    """State 5"""
    return 0

def t000001000_x20(goods7=1000, z51=_):
    """State 0,1"""
    ReplaceToolIf(DoesPlayerHaveItem(3, 1000 + 0 + 0 * 50 + z51 * 2) == 1, goods7 + 0 * 50 + z51 * 2 + 0,
                  goods7 + 0 * 50 + 0 + 2 * (GetTotalBonfireLevel() - 1), 1)
    """State 2"""
    ReplaceToolIf(DoesPlayerHaveItem(3, 1000 + 1 + 0 * 50 + z51 * 2) == 1, goods7 + 0 * 50 + z51 * 2 + 1,
                  goods7 + 0 * 50 + 1 + 2 * (GetTotalBonfireLevel() - 1), 1)
    """State 3"""
    ReplaceToolIf(DoesPlayerHaveItem(3, 1000 + 0 + 1 * 50 + z51 * 2) == 1, goods7 + 1 * 50 + z51 * 2 + 0,
                  goods7 + 1 * 50 + 0 + 2 * (GetTotalBonfireLevel() - 1), 1)
    """State 4"""
    ReplaceToolIf(DoesPlayerHaveItem(3, 1000 + 1 + 1 * 50 + z51 * 2) == 1, goods7 + 1 * 50 + z51 * 2 + 1,
                  goods7 + 1 * 50 + 1 + 2 * (GetTotalBonfireLevel() - 1), 1)
    """State 5"""
    return 0

def t000001000_x21(z40=1, z41=1, z42=2, z43=2, z44=3, z45=3, z46=4, z47=4, z48=5, z49=5, z50=1):
    """State 0"""
    if not GetWorkValue(z50):
        """State 1"""
        SetWorkValue(z50, z40)
    elif GetWorkValue(z50) == 1:
        """State 2"""
        SetWorkValue(z50, z41)
    elif GetWorkValue(z50) == 2:
        """State 3"""
        SetWorkValue(z50, z42)
    elif GetWorkValue(z50) == 3:
        """State 4"""
        SetWorkValue(z50, z43)
    elif GetWorkValue(z50) == 4:
        """State 5"""
        SetWorkValue(z50, z44)
    elif GetWorkValue(z50) == 5:
        """State 6"""
        SetWorkValue(z50, z45)
    elif GetWorkValue(z50) == 6:
        """State 7"""
        SetWorkValue(z50, z46)
    elif GetWorkValue(z50) == 7:
        """State 8"""
        SetWorkValue(z50, z47)
    elif GetWorkValue(z50) == 8:
        """State 9"""
        SetWorkValue(z50, z48)
    elif GetWorkValue(z50) == 9:
        """State 10"""
        SetWorkValue(z50, z49)
    else:
        """State 11"""
        SetWorkValue(z50, 5)
    """State 12"""
    return 0

def t000001000_x22():
    """State 0"""
    if not GetEventFlag(9000):
        """State 3,1"""
        SetEventFlag(4652, 0)
        SetEventFlag(4653, 0)
        SetEventFlag(4654, 0)
        SetEventFlag(4655, 0)
        SetEventFlag(4656, 0)
        SetEventFlag(4657, 0)
        SetEventFlag(4651, 0)
    else:
        """State 2"""
        pass
    while True:
        """State 4"""
        if IsMultiplayerInProgress() == 1 and not GetEventFlag(2051) and not GetEventFlag(2052):
            """State 6"""
            call = t000001000_x25()
            assert not IsMultiplayerInProgress() or GetEventFlag(2051) == 1 or GetEventFlag(2052) == 1
        elif GetEventFlag(1042369415) == 1:
            """State 7"""
            call = t000001000_x63()
            assert not GetEventFlag(1042369415)
        else:
            """State 5"""
            def WhilePaused():
                GiveSpEffectToPlayerIf(GetEventFlag(9000) == 1 and not GetWorkValue(0), 9607)
                GiveSpEffectToPlayerIf(GetEventFlag(9000) == 1 and GetWorkValue(0) == 10, 9608)
                GiveSpEffectToPlayerIf(GetEventFlag(9000) == 1 and GetDistanceToPlayer() < 1.05, 9609)
                GiveSpEffectToPlayerIf(GetEventFlag(4698) == 1 and GetEventFlag(9001) == 1, 9606)
            assert t000001000_x23()
    """Unused"""
    """State 8"""
    return 0

def t000001000_x23():
    """State 0,1"""
    if CompareBonfireLevel(5, 0) == 1 or GetEventFlag(11102790) == 1:
        """State 2"""
        Label('L0')
        assert GetWhetherChrEventAnimHasEnded(10000) == 1
    else:
        """State 3,32"""
        call = t000001000_x40()
        if call.Done():
            """State 7"""
            TurnCharacterToFaceEntity(-1, 10000, -1, -1)
            assert GetCurrentStateElapsedFrames() > 1 and GetWhetherChrEventAnimHasEnded(10000) == 1
            """State 4"""
            c1_40()
            assert CompareBonfireLevel(5, 0) == 1
            """State 9,10"""
            UpdatePlayerRespawnPoint()
            Goto('L0')
        elif CompareBonfireLevel(5, 0) == 1 or GetEventFlag(11102790) == 1:
            pass
    """State 33"""
    call = t000001000_x40()
    if call.Done():
        """State 5"""
        ClearPlayerDamageInfo()
        """State 11"""
        GiveSpEffectToPlayer(202)
        """State 6"""
        SetTalkTime(1)
        """State 37"""
        assert t000001000_x67()
        """State 23"""
        SetEventFlag(4698, 0)
        SetEventFlagIf(DoesSelfHaveSpEffect(9680) == 1 and not GetEventFlag(953), 4698, 1)
        SetEventFlagIf(GetEventFlagValue(955, 3) > 2 and DoesSelfHaveSpEffect(9681) == 1 and not GetEventFlag(953),
                       4698, 1)
        """State 30"""
        assert t000001000_x32()
        """State 8"""
        TurnCharacterToFaceEntity(-1, 10000, -1, -1)
        assert GetCurrentStateElapsedFrames() > 1 and GetWhetherChrEventAnimHasEnded(10000) == 1
        """State 12"""
        UpdatePlayerRespawnPoint()
        """State 40"""
        assert t000001000_x82()
        """State 19"""
        StartBonfireAnimLoop(1, 1, 1, 1, GetWorkValue(0), 0.5)
        """State 13"""
        c1_117(0, 0, 0, 0, 0, 0, 0, 0.1, 0, 1.5, 0, 0.75, 0.5)
        """State 18"""
        SetEventFlag(9000, 1)
        SetEventFlag(9020, 1)
        c5_138(not GetEventFlag(11102790), 1001000)
        c5_138(GetEventFlag(11102790) == 1, 1001001)
        if not GetEventFlag(4698):
            """State 36"""
            assert t000001000_x66()
        else:
            """State 35"""
            assert t000001000_x64()
        """State 17"""
        if not GetEventFlag(9001):
            """State 21"""
            pass
        else:
            """State 20"""
            assert not GetEventFlag(9001)
        """State 41"""
        call = t000001000_x84()
        if call.Get() == 0:
            """State 26"""
            pass
        elif call.Get() == 1:
            """State 27,29"""
            assert t000001000_x30()
        """State 15"""
        if not GetEventFlag(4653):
            """State 22,39"""
            Label('L1')
            assert t000001000_x68()
            """State 31"""
            call = t000001000_x31()
            def WhilePaused():
                GiveSpEffectToPlayerIf(GetEventFlag(4651) == 1, 9620)
            def ExitPause():
                EndBonfireKindleAnimLoop(GetWorkValue(0))
            if call.Done():
                pass
            elif (((GetDistanceToPlayer() > 3 and not GetEventFlag(11102790)) or GetDistanceToPlayer()
                  > 7) and GetCurrentStateElapsedFrames() > 1):
                """State 28"""
                Label('L2')
                assert t000001000_x24()
            elif CompareBonfireState(0) and GetCurrentStateElapsedFrames() > 1:
                Goto('L2')
            elif HasPlayerBeenAttacked() == 1 and GetCurrentStateElapsedFrames() > 1:
                Goto('L2')
            elif (IsMultiplayerInProgress() == 1 and not GetEventFlag(2051) and not GetEventFlag(2052)
                  and GetCurrentStateElapsedFrames() > 1):
                Goto('L2')
            elif GetEventFlag(1042369415) == 1 and GetCurrentStateElapsedFrames() > 1:
                Goto('L2')
            elif (CompareBonfireLevel(0, 0) == 1 and not GetEventFlag(11102790) and GetCurrentStateElapsedFrames()
                  > 1):
                Goto('L2')
        else:
            """State 16,34"""
            call = t000001000_x50()
            if call.Done():
                Goto('L1')
            elif GetEventFlag(1042369415) == 1 and GetCurrentStateElapsedFrames() > 1:
                """State 24"""
                Label('L3')
                def ExitPause():
                    EndBonfireKindleAnimLoop(GetWorkValue(0))
                Goto('L2')
            elif IsMultiplayerInProgress() == 1 and GetCurrentStateElapsedFrames() > 1:
                Goto('L3')
            elif HasPlayerBeenAttacked() == 1 and GetCurrentStateElapsedFrames() > 1:
                Goto('L3')
            elif (((GetDistanceToPlayer() > 3 and not GetEventFlag(11102790)) or GetDistanceToPlayer()
                  > 7) and GetCurrentStateElapsedFrames() > 1):
                Goto('L3')
            elif CompareBonfireState(0) and GetCurrentStateElapsedFrames() > 1:
                Goto('L3')
        """State 38"""
        assert t000001000_x67()
        """State 14"""
        SetEventFlag(9000, 0)
        SetEventFlag(9020, 0)
        c1_138(-1)
        c1_140(0)
        assert GetCurrentStateElapsedFrames() > 1
        """State 25"""
        if not IsMultiplayerInProgress() and not GetEventFlag(1042369415):
            Goto('L0')
        else:
            pass
    elif (GetEventFlag(1042369415) == 1 or (CompareBonfireLevel(0, 0) == 1 and not GetEventFlag(11102790))
          or (IsMultiplayerInProgress() == 1 and not GetEventFlag(2051) and not GetEventFlag(2052))):
        pass
    """State 42"""
    return 0

def t000001000_x24():
    """State 0,1"""
    assert t000001000_x1()
    """State 2"""
    return 0

def t000001000_x25():
    """State 0"""
    while True:
        """State 1"""
        call = t000001000_x26()
        assert IsClientPlayer() == 1
        """State 2"""
        call = t000001000_x27()
        assert not IsClientPlayer()
    """Unused"""
    """State 3"""
    return 0

def t000001000_x26():
    """State 0,6"""
    call = t000001000_x1()
    if call.Done() and CompareBonfireLevel(5, 0) == 1:
        pass
    elif call.Done():
        """State 2,7"""
        # actionbutton:6100:"Touch grace"
        call = t000001000_x3(actionbutton1=6100, flag3=6001, flag4=6000)
        if call.Done():
            """State 4"""
            TurnCharacterToFaceEntity(-1, 10000, -1, -1)
            assert GetCurrentStateElapsedFrames() > 1 and GetWhetherChrEventAnimHasEnded(10000) == 1
            """State 3"""
            c1_40()
            """State 5"""
            UpdatePlayerRespawnPoint()
            assert CompareBonfireLevel(5, 0) == 1
        elif CompareBonfireLevel(5, 0) == 1:
            pass
    """State 1"""
    Quit()
    """Unused"""
    """State 8"""
    return 0

def t000001000_x27():
    """State 0,1"""
    assert t000001000_x1()
    """State 2"""
    return 0

def t000001000_x28():
    """State 0,1"""
    if not GetEventFlag(4651):
        """State 3"""
        if GetEventFlag(4698) == 1:
            """State 5,10"""
            assert t000001000_x35(z35=20006, val4=0.5, z36=1, z37=2, z38=60)
        elif GetEventFlag(108) == 1:
            """State 9,13"""
            assert t000001000_x35(z35=20000, val4=3.5, z36=1, z37=2, z38=60)
        else:
            """State 4,6"""
            # eventflag:400001:lot:100010:Rold Medallion
            if not GetEventFlag(400001):
                """State 7,11"""
                assert t000001000_x35(z35=20000, val4=3.5, z36=1, z37=2, z38=60)
            else:
                """State 8,12"""
                assert t000001000_x35(z35=20001, val4=3.5, z36=1, z37=2, z38=60)
    else:
        """State 2"""
        pass
    """State 14"""
    return 0

def t000001000_x29(z39=_):
    """State 0,1"""
    c1_129(z39, 1.4)
    """State 2"""
    SetEventFlag(4651, 0)
    SetEventFlag(4652, 0)
    SetEventFlag(4653, 0)
    SetEventFlag(4654, 0)
    SetEventFlag(4655, 0)
    SetEventFlag(4656, 0)
    SetEventFlag(4657, 0)
    """State 3"""
    return 0

def t000001000_x30():
    """State 0"""
    if GetEventFlag(11102790) == 1:
        """State 3"""
        pass
    elif GetEventFlag(110) == 1:
        """State 1"""
        pass
    elif not GetEventFlag(953) or GetEventFlag(4698) == 1:
        """State 4"""
        assert t000001000_x59()
    elif not GetEventFlag(4680):
        """State 2"""
        pass
    elif GetEventFlag(108) == 1:
        """State 7"""
        assert t000001000_x62()
    # eventflag:400001:lot:100010:Rold Medallion
    elif GetEventFlag(11009260) == 1 and not GetEventFlag(400001):
        """State 6"""
        assert t000001000_x61()
    else:
        """State 5"""
        assert t000001000_x60()
    """State 8"""
    return 0

def t000001000_x31():
    """State 0,10"""
    assert GetCurrentStateElapsedTime() > 0.1 or not GetEventFlag(4651)
    """State 11"""
    assert not GetEventFlag(9001)
    """State 27"""
    # goods:1001:Flask of Crimson Tears, goods:1000:Flask of Crimson Tears, goods:1003:Flask of Crimson Tears +1, goods:1002:Flask of Crimson Tears +1, goods:1005:Flask of Crimson Tears +2, goods:1004:Flask of Crimson Tears +2, goods:1007:Flask of Crimson Tears +3, goods:1006:Flask of Crimson Tears +3, goods:1009:Flask of Crimson Tears +4, goods:1008:Flask of Crimson Tears +4, goods:1011:Flask of Crimson Tears +5, goods:1010:Flask of Crimson Tears +5, goods:1013:Flask of Crimson Tears +6, goods:1012:Flask of Crimson Tears +6, goods:1015:Flask of Crimson Tears +7, goods:1014:Flask of Crimson Tears +7, goods:1017:Flask of Crimson Tears +8, goods:1016:Flask of Crimson Tears +8, goods:1019:Flask of Crimson Tears +9, goods:1018:Flask of Crimson Tears +9, goods:1021:Flask of Crimson Tears +10, goods:1020:Flask of Crimson Tears +10, goods:1023:Flask of Crimson Tears +11, goods:1022:Flask of Crimson Tears +11, goods:1025:Flask of Crimson Tears +12, goods:1024:Flask of Crimson Tears +12, goods:1050:Flask of Cerulean Tears, goods:1051:Flask of Cerulean Tears, goods:1052:Flask of Cerulean Tears +1, goods:1053:Flask of Cerulean Tears +1, goods:1054:Flask of Cerulean Tears +2, goods:1055:Flask of Cerulean Tears +2, goods:1056:Flask of Cerulean Tears +3, goods:1057:Flask of Cerulean Tears +3, goods:1058:Flask of Cerulean Tears +4, goods:1059:Flask of Cerulean Tears +4, goods:1060:Flask of Cerulean Tears +5, goods:1061:Flask of Cerulean Tears +5, goods:1062:Flask of Cerulean Tears +6, goods:1063:Flask of Cerulean Tears +6, goods:1064:Flask of Cerulean Tears +7, goods:1065:Flask of Cerulean Tears +7, goods:1067:Flask of Cerulean Tears +8, goods:1066:Flask of Cerulean Tears +8, goods:1069:Flask of Cerulean Tears +9, goods:1068:Flask of Cerulean Tears +9
    assert t000001000_x8(goods11=1000)
    """State 5"""
    c1_110()
    while True:
        #if not initialized and at roundtable grace
        if not GetEventFlag(1049300000) and f211() == 11100950:
            c1_110()
            ClearTalkActionState()
            ClearTalkListData()
            #initialize boss arena
            AddTalkListData(90, 99999127, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 20000009, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            if GetTalkListEntryResult() == 90:
                OpenGenericDialog(8, 99999128, 3, 4, 2)
                assert not CheckSpecificPersonGenericDialogIsOpen(0)
                if GetGenericDialogButtonResult() == 1:
                    SetEventFlag(1049302261, 1)
                    return 0
                else:
                    pass
            else:
                return 0
        else:
            """State 1"""
            Label('L0')
            ClearTalkListData()
            """State 2"""
            # action:15000540:"Level Up"
            AddTalkListDataIf(GetEventFlag(4680) == 1 or GetEventFlag(4699) == 1, 2, 15000540, -1)
            """State 38"""
            assert t000001000_x71(z23=3, z24=15000371)
            """State 41"""
            assert t000001000_x80(z1=50, z2=20010001, goods1=2010000, goods2=2010100)
            """State 17"""
            # action:15000390:"Memorize spell"
            AddTalkListData(4, 15000390, -1)
            # goods:250:Flask of Wondrous Physick, goods:251:Flask of Wondrous Physick, action:15000510:"Mix Wondrous Physick"
            AddTalkListDataIf(ComparePlayerInventoryNumber(3, 250, 2, 0, 0) == 1 or ComparePlayerInventoryNumber(3, 251, 2, 0, 0) == 1,
                              5, 15000510, -1)
            # action:15000395:"Sort chest"
            AddTalkListData(6, 15000395, -1)
            # action:15000520:"Great Runes"
            AddTalkListDataIf(f230(15) == 1, 7, 15000520, -1)
            # goods:8590:Whetstone Knife, action:15000530:"Ashes of War"
            AddTalkListDataIf(ComparePlayerInventoryNumber(3, 8590, 4, 1, 0) == 1, 8, 15000530, -1)
            # goods:8163:Tailoring Tools, goods:8188:Golden Tailoring Tools, action:22230000:"Alter garments"
            AddTalkListDataIf(ComparePlayerInventoryNumber(3, 8163, 2, 0, 0) == 1 or ComparePlayerInventoryNumber(3, 8188, 2, 0, 0) == 1,
                              9, 22230000, -1)
            """State 44"""
            call = t000001000_x84()
            if call.Get() == 0:
                """State 25"""
                pass
            elif call.Get() == 1:
                """State 26,35"""
                assert t000001000_x52()
            # shops for merging
            AddTalkListDataIf(GetEventFlag(1049300000), 96, 99998508, -1)
            # action:15000420:"Pass time"
            AddTalkListDataIf(not GetEventFlag(9411) or GetEventFlag(9412) == 1, 1, 15000420, -1)
            """State 15"""
            # action:20000009:"Leave"
            AddTalkListData(99, 20000009, -1)
            """State 6"""
            SetEventFlag(4652, 0)
            SetEventFlag(4656, 0)
            SetEventFlag(4654, 0)
            SetEventFlag(4655, 0)
            """State 3"""
            c1_140(1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            """State 8"""
            if GetTalkListEntryResult() == 1:
                """State 28"""
                c1_140(0)
                c1_110()
                def ExitPause():
                    c1_110()
                assert t000001000_x33()
            elif GetTalkListEntryResult() == 2:
                """State 18"""
                if not GetEventFlag(2051) and not GetEventFlag(2052):
                    """State 19,29"""
                    assert t000001000_x34()
                else:
                    """State 20,39"""
                    # action:20011032:"Cannot select while entering combat"
                    assert t000001000_x4(action1=20011032)
            elif GetTalkListEntryResult() == 3:
                """State 34"""
                c1_140(0)
                c1_110()
                def ExitPause():
                    c1_110()
                assert t000001000_x47()
            elif GetTalkListEntryResult() == 4:
                """State 7"""
                OpenMagicEquip(-1, -1)
                assert not (CheckSpecificPersonMenuIsOpen(11, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 5:
                """State 12"""
                OpenPhysickMenu()
                assert not (CheckSpecificPersonMenuIsOpen(21, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 6:
                """State 9"""
                OpenRepository()
                assert not (CheckSpecificPersonMenuIsOpen(3, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 7:
                """State 13"""
                c1_137()
                assert not (CheckSpecificPersonMenuIsOpen(24, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 8:
                """State 14"""
                OpenEquipmentChangeOfPurposeShop()
                assert not (CheckSpecificPersonMenuIsOpen(7, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 9:
                """State 16"""
                OpenTailoringShop(111000, 111399)
                assert not (CheckSpecificPersonMenuIsOpen(26, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 11:
                """State 30"""
                assert t000001000_x36(z34=4655)
            elif GetTalkListEntryResult() == 12:
                """State 37"""
                assert t000001000_x36(z34=4657)
            elif GetTalkListEntryResult() == 15:
                """State 36"""
                assert t000001000_x54()
            elif GetTalkListEntryResult() == 32:
                """State 32"""
                assert t000001000_x38()
            elif GetTalkListEntryResult() == 41 and GetEventFlag(120) == 1 and GetEventFlag(11102790) == 1:
                """State 21"""
                if not GetEventFlag(2051) and not GetEventFlag(2052):
                    """State 22,33"""
                    assert t000001000_x42()
                else:
                    """State 23,40"""
                    # action:20011031:"Cannot select while entering combat"
                    assert t000001000_x4(action1=20011031)
            elif GetTalkListEntryResult() == 50:
                """State 24,42"""
                c1_140(0)
                c1_110()
                def ExitPause():
                    c1_110()
                assert t000001000_x78(goods3=2010000, goods4=2010100)
            elif GetTalkListEntryResult() == 96:
                assert t000001000_x140()
            else:
                """State 4,43"""
                assert t000001000_x83()
                """State 45"""
                return 0
    """Unused"""
    """State 31"""
    assert t000001000_x37()
    Goto('L0')

#start twin maiden husks port
def t000001000_x140():
    """State 0,8"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        #twin maiden husks
        AddTalkListData(1, 99998509, -1)
        # action:26000011:"Bell Bearing Shop 1"
        AddTalkListData(2, 26000011, -1)
        # action:26000012:"Bell Bearing Shop 2"
        AddTalkListData(3, 26000012, -1)
        """State 22"""
        AddTalkListData(4, 26000013, -1)
        """State 15"""
        # action:26000014:"Bell Bearing Shop 4"
        AddTalkListData(5, 26000014, -1)
        # action:26002000:"Bell Bearing Shop 5"
        AddTalkListData(7, 26002000, -1)
        #remembrance shop
        AddTalkListData(20, 99998510, -1)
        #equipment of champions shop
        AddTalkListData(21, 99998511, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        """State 3"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 4"""
        if GetTalkListEntryResult() == 1:
            OpenRegularShop(101800, 101897)
            assert not (CheckSpecificPersonMenuIsOpen(5, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 2:
            """State 10,18"""
            assert t000001000_x144()
        elif GetTalkListEntryResult() == 3:
            """State 11,19"""
            assert t000001000_x145()
        elif GetTalkListEntryResult() == 4:
            """State 13,20"""
            assert t000001000_x146()
        elif GetTalkListEntryResult() == 5:
            """State 12,21"""
            assert t000001000_x147()
        elif GetTalkListEntryResult() == 7:
            """State 16,23"""
            assert t000001000_x150()
        elif GetTalkListEntryResult() == 20:
            OpenTranspositionShop(101898, 101949)
            assert not (CheckSpecificPersonMenuIsOpen(18, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        elif GetTalkListEntryResult() == 21:
            OpenChampionsEquipmentShop(101500, 101574)
            assert not (CheckSpecificPersonMenuIsOpen(33, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        else:
            """State 7,24"""
            return 0

def t000001000_x144():
    """State 0,5"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        # action:26000020:"Sellen's Bell Bearing"
        AddTalkListData(1, 26000020, -1)
        # action:26000022:"Seluvis's Bell Bearing"
        AddTalkListData(3, 26000022, -1)
        # action:26000023:"Thops's Bell Bearing"
        AddTalkListData(4, 26000023, -1)
        # action:26000024:"Corhyn's Bell Bearing"
        AddTalkListData(5, 26000024, -1)
        # action:26000025:"Miriel's Bell Bearing (Sorcery)"
        AddTalkListData(6, 26000025, -1)
        # action:26000031:"Miriel's Bell Bearing (Incantations)"
        AddTalkListData(12, 26000031, -1)
        # action:26000026:"D's Bell Bearing"
        AddTalkListData(7, 26000026, -1)
        # action:26000027:"Gowry's Bell Bearing (Sorcery)"
        AddTalkListData(8, 26000027, -1)
        # action:26000032:"Gowry's Bell Bearing (Incantations)"
        AddTalkListData(13, 26000032, -1)
        # action:26000028:"Rogier's Bell Bearing"
        AddTalkListData(9, 26000028, -1)
        # action:26000029:"Bernahl's Bell Bearing"
        AddTalkListData(10, 26000029, -1)
        # action:26000030:"Iji's Bell Bearing"
        AddTalkListData(11, 26000030, -1)
        # action:26000004:"Go back"
        AddTalkListData(99, 26000004, -1)
        """State 3"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 4"""
        if GetTalkListEntryResult() == 1:
            """State 6,11"""
            OpenRegularShop(100050, 100074)
        elif GetTalkListEntryResult() == 3:
            """State 8,13"""
            OpenRegularShop(100275, 100299)
        elif GetTalkListEntryResult() == 4:
            """State 9,14"""
            OpenRegularShop(100250, 100274)
        elif GetTalkListEntryResult() == 5:
            """State 16,17"""
            OpenRegularShop(100350, 100399)
        elif GetTalkListEntryResult() == 6:
            """State 18,19"""
            OpenRegularShop(100400, 100424)
        elif GetTalkListEntryResult() == 12:
            """State 30,31"""
            OpenRegularShop(100425, 100474)
        elif GetTalkListEntryResult() == 7:
            """State 20,21"""
            OpenRegularShop(100125, 100149)
        elif GetTalkListEntryResult() == 8:
            """State 22,23"""
            OpenRegularShop(100175, 100184)
        elif GetTalkListEntryResult() == 13:
            """State 33,32"""
            OpenRegularShop(100185, 100199)
        elif GetTalkListEntryResult() == 9:
            """State 24,25"""
            OpenRegularShop(100200, 100224)
        elif GetTalkListEntryResult() == 10:
            """State 26,27"""
            OpenRegularShop(100075, 100099)
        elif GetTalkListEntryResult() == 11:
            """State 28,29"""
            OpenRegularShop(100225, 100249)
        else:
            """State 10,34"""
            return 0
        """State 15"""
        Label('L0')
        assert not (CheckSpecificPersonMenuIsOpen(5, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
    """Unused"""
    """State 7,12"""
    OpenRegularShop(100300, 100324)
    Goto('L0')

def t000001000_x145():
    """State 0,5"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        # action:26000040:"Gostoc's Bell Bearing"
        AddTalkListData(1, 26000040, -1)
        # action:26000041:"Pidia's Bell Bearing"
        AddTalkListData(2, 26000041, -1)
        # action:26000042:"Patches' Bell Bearing"
        AddTalkListData(3, 26000042, -1)
        # action:26000043:"Blackguard's Bell Bearing"
        AddTalkListData(4, 26000043, -1)
        # action:26000004:"Go back"
        AddTalkListData(99, 26000004, -1)
        """State 3"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 4"""
        if GetTalkListEntryResult() == 1:
            """State 6,11"""
            OpenRegularShop(100000, 100024)
        elif GetTalkListEntryResult() == 2:
            """State 7,12"""
            OpenRegularShop(100325, 100349)
        elif GetTalkListEntryResult() == 3:
            """State 8,13"""
            OpenRegularShop(100100, 100124)
        elif GetTalkListEntryResult() == 4:
            """State 9,14"""
            OpenRegularShop(100150, 100174)
        else:
            """State 10,16"""
            return 0
        """State 15"""
        assert not (CheckSpecificPersonMenuIsOpen(5, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))

def t000001000_x146():
    """State 0,5"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        # action:26000050:"Nomadic Merchant's Bell Bearing [1]"
        AddTalkListDataAlt(1, 26000050, -1, GetEquipmentSortID(3, 8921), False)
        # action:26000051:"Nomadic Merchant's Bell Bearing [2]"
        AddTalkListDataAlt(2, 26000051, -1, GetEquipmentSortID(3, 8922), False)
        # action:26000052:"Nomadic Merchant's Bell Bearing [3]"
        AddTalkListDataAlt(3, 26000052, -1, GetEquipmentSortID(3, 8923), False)
        # action:26000053:"Nomadic Merchant's Bell Bearing [4]"
        AddTalkListDataAlt(4, 26000053, -1, GetEquipmentSortID(3, 8924), False)
        # action:26000054:"Nomadic Merchant's Bell Bearing [5]"
        AddTalkListDataAlt(5, 26000054, -1, GetEquipmentSortID(3, 8925), False)
        # action:26000055:"Nomadic Merchant's Bell Bearing [6]"
        AddTalkListDataAlt(6, 26000055, -1, GetEquipmentSortID(3, 8928), False)
        # action:26000056:"Nomadic Merchant's Bell Bearing [7]"
        AddTalkListDataAlt(7, 26000056, -1, GetEquipmentSortID(3, 8930), False)
        # action:26000057:"Nomadic Merchant's Bell Bearing [8]"
        AddTalkListDataAlt(8, 26000057, -1, GetEquipmentSortID(3, 8931), False)
        # action:26000058:"Nomadic Merchant's Bell Bearing [9]"
        AddTalkListDataAlt(9, 26000058, -1, GetEquipmentSortID(3, 8932), False)
        # action:26000059:"Nomadic Merchant's Bell Bearing [10]"
        AddTalkListDataAlt(10, 26000059, -1, GetEquipmentSortID(3, 8933), False)
        # action:26000060:"Nomadic Merchant's Bell Bearing [11]"
        AddTalkListDataAlt(11, 26000060, -1, GetEquipmentSortID(3, 8934), False)
        # action:26000004:"Go back"
        AddTalkListDataAlt(99, 26000004, -1, 9999999, False)
        """State 3"""
        ShowShopMessageAlt(1, True)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 4"""
        if GetTalkListEntryResult() == 1:
            """State 6,11"""
            OpenRegularShop(100525, 100549)
        elif GetTalkListEntryResult() == 2:
            """State 7,12"""
            OpenRegularShop(100550, 100574)
        elif GetTalkListEntryResult() == 3:
            """State 8,13"""
            OpenRegularShop(100575, 100599)
        elif GetTalkListEntryResult() == 4:
            """State 9,14"""
            OpenRegularShop(100600, 100624)
        elif GetTalkListEntryResult() == 5:
            """State 16,17"""
            OpenRegularShop(100625, 100649)
        elif GetTalkListEntryResult() == 6:
            """State 18,19"""
            OpenRegularShop(100700, 100724)
        elif GetTalkListEntryResult() == 7:
            """State 20,21"""
            OpenRegularShop(100750, 100774)
        elif GetTalkListEntryResult() == 8:
            """State 22,23"""
            OpenRegularShop(100775, 100799)
        elif GetTalkListEntryResult() == 9:
            """State 24,25"""
            OpenRegularShop(100800, 100824)
        elif GetTalkListEntryResult() == 10:
            """State 26,27"""
            OpenRegularShop(100825, 100849)
        elif GetTalkListEntryResult() == 11:
            """State 28,29"""
            OpenRegularShop(100850, 100874)
        else:
            """State 10,30"""
            return 0
        """State 15"""
        assert not (CheckSpecificPersonMenuIsOpen(5, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))

def t000001000_x147():
    """State 0,5"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        # action:26000070:"Kalé's Bell Bearing"
        AddTalkListDataAlt(1, 26000070, -1, GetEquipmentSortID(3, 8920), False)
        # action:26000071:"Isolated Merchant's Bell Bearing [1]"
        AddTalkListDataAlt(2, 26000071, -1, GetEquipmentSortID(3, 8926), False)
        # action:26000072:"Isolated Merchant's Bell Bearing [2]"
        AddTalkListDataAlt(3, 26000072, -1, GetEquipmentSortID(3, 8927), False)
        # action:26000073:"Hermit Merchant's Bell Bearing [1]"
        AddTalkListDataAlt(4, 26000073, -1, GetEquipmentSortID(3, 8929), False)
        # action:26000074:"Isolated Merchant's Bell Bearing [3]"
        AddTalkListDataAlt(5, 26000074, -1, GetEquipmentSortID(3, 8935), False)
        # action:26000075:"Hermit Merchant's Bell Bearing [2]"
        AddTalkListDataAlt(6, 26000075, -1, GetEquipmentSortID(3, 8936), False)
        # action:26000076:"Abandoned Merchant's Bell Bearing"
        AddTalkListDataAlt(7, 26000076, -1, GetEquipmentSortID(3, 8937), False)
        # action:26000077:"Hermit Merchant's Bell Bearing [3]"
        AddTalkListDataAlt(8, 26000077, -1, GetEquipmentSortID(3, 8938), False)
        # action:26000078:"Imprisoned Merchant's Bell Bearing"
        AddTalkListDataAlt(9, 26000078, -1, GetEquipmentSortID(3, 8939), False)
        # action:26000004:"Go back"
        AddTalkListDataAlt(99, 26000004, -1, 9999999, False)
        """State 3"""
        ShowShopMessageAlt(1, True)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 4"""
        if GetTalkListEntryResult() == 1:
            """State 6,11"""
            OpenRegularShop(100500, 100524)
        elif GetTalkListEntryResult() == 2:
            """State 7,12"""
            OpenRegularShop(100650, 100674)
        elif GetTalkListEntryResult() == 3:
            """State 8,13"""
            OpenRegularShop(100675, 100699)
        elif GetTalkListEntryResult() == 4:
            """State 9,14"""
            OpenRegularShop(100725, 100749)
        elif GetTalkListEntryResult() == 5:
            """State 16,17"""
            OpenRegularShop(100875, 100899)
        elif GetTalkListEntryResult() == 6:
            """State 18,19"""
            OpenRegularShop(100900, 100924)
        elif GetTalkListEntryResult() == 7:
            """State 20,21"""
            OpenRegularShop(100925, 100949)
        elif GetTalkListEntryResult() == 8:
            """State 22,23"""
            OpenRegularShop(100950, 100974)
        elif GetTalkListEntryResult() == 9:
            """State 24,25"""
            OpenRegularShop(100975, 100999)
        else:
            """State 10,26"""
            return 0
        """State 15"""
        assert not (CheckSpecificPersonMenuIsOpen(5, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))

def t000001000_x150():
    """State 0,5"""
    ClearPreviousMenuSelection()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        # action:26002010:"Moore's Bell Bearing"
        AddTalkListData(5, 26002010, -1)
        # action:26002011:"Ymir's Bell Bearing"
        AddTalkListData(6, 26002011, -1)
        # action:26000004:"Go back"
        AddTalkListData(99, 26000004, -1)
        """State 3"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 4"""
        if GetTalkListEntryResult() == 5:
            OpenRegularShop(102250, 102289)
        elif GetTalkListEntryResult() == 6:
            """State 9,11"""
            OpenRegularShop(102300, 102310)
        else:
            """State 6,17"""
            return 0
        """State 7"""
        assert not (CheckSpecificPersonMenuIsOpen(5, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
#end twin maiden husks port

def t000001000_x32():
    """State 0,1"""
    if GetEventFlag(1054532702) == 1:
        """State 2,4"""
        Label('L0')
        """State 3"""
        SetWorkValue(0, 0)
    elif GetEventFlag(4698) == 1:
        """State 8"""
        Goto('L0')
    elif GetEventFlag(11102790) == 1:
        """State 6,7"""
        SetWorkValue(0, 30)
    else:
        """State 5,9"""
        assert t000001000_x39()
    """State 10"""
    return 0

def t000001000_x33():
    """State 0,5"""
    CloseShopMessage()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 2"""
        # action:15000430:"Until morning"
        AddTalkListData(1, 15000430, -1)
        # action:15000440:"Until noon"
        AddTalkListData(2, 15000440, -1)
        # action:15000450:"Until nightfall"
        AddTalkListData(3, 15000450, -1)
        # action:15000460:"Cancel"
        AddTalkListData(99, 15000460, -1)
        """State 3"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 6"""
        if GetTalkListEntryResult() == 1:
            """State 7"""
            def ExitPause():
                c1_133(0.5)
            assert t000001000_x45(val1=0)
        elif GetTalkListEntryResult() == 2:
            """State 8"""
            def ExitPause():
                c1_133(0.5)
            assert t000001000_x45(val1=1)
        elif GetTalkListEntryResult() == 3:
            """State 9"""
            def ExitPause():
                c1_133(0.5)
            assert t000001000_x45(val1=2)
        else:
            """State 4,10"""
            assert t000001000_x72()
            """State 11"""
            return 0

def t000001000_x34():
    """State 0"""
    if not GetEventFlag(4651):
        """State 3,4"""
        OpenSoul()
        assert not (CheckSpecificPersonMenuIsOpen(10, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
    else:
        """State 2,1"""
        SetEventFlag(4652, 1)
        SetEventFlag(4656, 1)
        """State 5"""
        assert not GetEventFlag(4652)
        """State 6"""
        SetWorkValue(0, 0)
    """State 7"""
    return 0

def t000001000_x35(z35=_, val4=_, z36=1, z37=2, z38=60):
    """State 0,4"""
    assert not DoesPlayerHaveSpEffect(9600) and not DoesPlayerHaveSpEffect(9603)
    """State 1"""
    c1_128(2180, 21800000, 1, 3000, z35, z36, z37, z38)
    """State 2"""
    SetEventFlag(4651, 1)
    """State 3"""
    assert GetCurrentStateElapsedTime() > val4
    """State 5"""
    return 0

def t000001000_x36(z34=_):
    """State 0"""
    if not GetEventFlag(4651):
        """State 1,8"""
        assert t000001000_x28()
    else:
        """State 4"""
        pass
    """State 3"""
    SetEventFlag(4652, 1)
    SetEventFlag(z34, 1)
    """State 2"""
    assert (not GetEventFlag(4652) or (GetCurrentStateElapsedTime() > 5 and not DoesPlayerHaveSpEffect(9600)
            and not DoesPlayerHaveSpEffect(9603)))
    """State 5"""
    if not GetEventFlag(4680):
        """State 6,9"""
        assert t000001000_x29(z39=20010)
    else:
        """State 7"""
        pass
    """State 10"""
    return 0

def t000001000_x37():
    """State 0,1"""
    SetEventFlag(1054539200, 1)
    """State 4"""
    assert t000001000_x28()
    """State 2"""
    SetEventFlag(4652, 1)
    """State 3"""
    assert not GetEventFlag(4652)
    """State 5"""
    return 0

def t000001000_x38():
    """State 0,1"""
    SetEventFlag(1054539201, 1)
    """State 2"""
    SetEventFlag(1054539205, 1)
    """State 3"""
    assert GetCurrentStateElapsedTime() > 1.5
    """State 5"""
    SetEventFlag(9000, 0)
    SetEventFlag(9020, 0)
    """State 4"""
    c1_138(-1)
    Quit()
    """Unused"""
    """State 6"""
    return 0

def t000001000_x39():
    """State 0,1"""
    if not CompareRNGValue(0, 0) != -1:
        """State 3,4"""
        ShuffleRNGSeed(100)
    else:
        """State 2"""
        pass
    """State 5"""
    SetRNGSeed()
    """State 6"""
    if CompareRNGValue(3, 69) == 1:
        """State 7,8"""
        SetWorkValue(0, 0)
    elif CompareRNGValue(3, 99) == 1:
        """State 9,10"""
        SetWorkValue(0, 10)
    else:
        """State 11,12"""
        SetWorkValue(0, 0)
    """State 13"""
    return 0

def t000001000_x40():
    """State 0"""
    while True:
        """State 1"""
        if GetEventFlag(1054532702) == 1:
            """State 2,7"""
            # actionbutton:6100:"Touch grace", actionbutton:6101:"Rest at site of grace"
            call = t000001000_x65(actionbutton1=6100, actionbutton2=6101, val2=45, z29=-120)
            if call.Done():
                break
            elif not GetEventFlag(1054532702):
                pass
        elif GetEventFlag(11102790) == 1:
            """State 4,6"""
            # actionbutton:6102:"Rest at table of lost grace", actionbutton:6103:"Rest at table of lost grace"
            call = t000001000_x44(actionbutton3=6102, actionbutton4=6103, val3=45)
            if call.Done():
                break
            elif not GetEventFlag(11102790):
                pass
        else:
            """State 3,5"""
            # actionbutton:6100:"Touch grace", actionbutton:6101:"Rest at site of grace"
            call = t000001000_x41(actionbutton1=6100, actionbutton2=6101)
            if call.Done():
                break
            elif GetEventFlag(1054532702) == 1 or GetEventFlag(11102790) == 1:
                pass
    """State 8"""
    return 0

def t000001000_x41(actionbutton1=_, actionbutton2=_):
    """State 0,1"""
    if CompareBonfireLevel(0, 0) == 1:
        """State 2,4"""
        assert t000001000_x3(actionbutton1=actionbutton1, flag3=6001, flag4=6000)
    else:
        """State 3,5"""
        assert t000001000_x3(actionbutton1=actionbutton2, flag3=6001, flag4=6000)
    """State 6"""
    return 0

def t000001000_x42():
    """State 0,7"""
    # action:20011080:"Begin Journey <?nextLoopCount?>?"
    call = t000001000_x0(action2=20011080)
    if call.Get() == 0:
        """State 2,8"""
        # action:20011081:"If you begin Journey <?nextLoopCount?>, you will not be able\nto return to the present world of Journey <?loopCount?>.\nBegin Journey <?nextLoopCount?>?"
        call = t000001000_x0(action2=20011081)
        if call.Get() == 0:
            """State 3,5"""
            SetEventFlag(3001, 1)
            """State 6"""
            Quit()
        elif call.Done():
            """State 4"""
            pass
    elif call.Done():
        """State 1"""
        pass
    """State 9"""
    return 0

def t000001000_x43(z30=11, z31=12):
    """State 0,2"""
    SetEventFlag(1042379200, 0)
    SetEventFlag(1042379202, 0)
    SetEventFlag(1042379206, 0)
    SetEventFlag(1046389201, 0)
    SetEventFlag(1043349250, 0)
    SetEventFlag(1038509250, 0)
    SetEventFlag(1043539250, 0)
    SetEventFlag(11009255, 0)
    SetEventFlag(1043509200, 0)
    SetEventFlag(1054559200, 0)
    SetEventFlag(1036489250, 0)
    SetEventFlag(1039519250, 0)
    SetEventFlag(1037519200, 0)
    SetEventFlag(10009656, 0)
    SetEventFlag(11009270, 0)
    SetEventFlag(11009275, 0)
    SetEventFlag(1054539210, 0)
    SetEventFlag(35009350, 0)
    SetEventFlag(35009352, 0)
    SetEventFlag(1054539215, 0)
    """State 4"""
    SetEventFlag(1042379208, 0)
    SetEventFlag(11009265, 0)
    SetEventFlag(35009355, 0)
    SetEventFlag(35009358, 0)
    if not GetEventFlag(953):
        """State 1"""
        if not GetEventFlag(4699):
            pass
        else:
            """State 8"""
            assert t000001000_x46(z31=z30)
    elif GetEventFlag(11102790) == 1:
        """State 3"""
        pass
    # eventflag:400001:lot:100010:Rold Medallion
    elif GetEventFlag(11009260) == 1 and not GetEventFlag(400001):
        """State 5"""
        pass
    elif GetEventFlag(108) == 1:
        """State 7"""
        pass
    elif GetEventFlag(110) == 1:
        """State 6"""
        pass
    else:
        """State 9"""
        assert t000001000_x49(z30=z30, z31=z31)
    """State 10"""
    return 0

def t000001000_x44(actionbutton3=6102, actionbutton4=6103, val3=45):
    """State 0"""
    if GetRelativeAngleBetweenPlayerAndSelf() < val3:
        """State 1"""
        Label('L0')
        """State 3"""
        call = t000001000_x41(actionbutton1=actionbutton3, actionbutton2=actionbutton4)
        if call.Done():
            """State 4"""
            return 0
        elif not GetRelativeAngleBetweenPlayerAndSelf() < val3:
            pass
    else:
        pass
    """State 2"""
    assert GetRelativeAngleBetweenPlayerAndSelf() < val3
    Goto('L0')

def t000001000_x45(val1=_):
    """State 0,8"""
    assert t000001000_x13()
    """State 10"""
    assert t000001000_x74(val1=val1)
    """State 4"""
    if not val1:
        """State 1"""
        c1_132(2)
        c1_134(0, 0, 0, 0, f219(), f220(), f221(), 2.5, 0.75, 2, 0, 0.75, 0.5)
    elif val1 == 1:
        """State 2"""
        c1_132(2)
        c1_134(0, 0, 0, 0, f222(), f223(), f224(), 2.5, 0.75, 2, 0, 0.75, 0.5)
    elif val1 == 2:
        """State 3"""
        c1_132(2)
        c1_134(0, 0, 0, 0, f225(), f226(), f227(), 2.5, 0.75, 2, 0, 0.75, 0.5)
    """State 5"""
    assert GetCurrentStateElapsedTime() > 0.8
    """State 9"""
    assert t000001000_x29(z39=0)
    """State 6"""
    assert not f233()
    """State 7"""
    assert GetCurrentStateElapsedTime() > 2.5
    """State 11"""
    return 0

def t000001000_x46(z31=_):
    """State 0,1"""
    # action:99990301:"Speak with Merina"
    AddTalkListData(z31, 99990301, -1)
    """State 2"""
    return 0

def t000001000_x47():
    """State 0,13"""
    assert t000001000_x48()
    """State 5"""
    CloseShopMessage()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 14"""
        assert t000001000_x69(z27=1, z28=15000370)
        """State 15"""
        assert t000001000_x70(z25=2, z26=15000380)
        """State 2"""
        # action:15000385:"Allocate flask charges"
        AddTalkListData(3, 15000385, -1)
        # max out flasks
        AddTalkListDataIf(GetEventFlag(1049300000) and not GetEventFlag(1049300057) and not GetEventFlag(1049300071), 4, 99999040, -1)
        # action:15000372:"Cancel"
        AddTalkListData(99, 15000372, -1)
        """State 3"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 6"""
        if GetTalkListEntryResult() == 1:
            """State 10"""
            # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12, goods:10010:Golden Seed
            assert t000001000_x7(goods5=1000, goods6=10010)
        elif GetTalkListEntryResult() == 2:
            """State 7"""
            if not GetEventFlag(2051) and not GetEventFlag(2052):
                """State 8,11"""
                # goods:1000:Flask of Crimson Tears, goods:1001:Flask of Crimson Tears, goods:1002:Flask of Crimson Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1025:Flask of Crimson Tears +12, goods:10020:Sacred Tear
                assert t000001000_x6(goods7=1000, goods8=10020)
            else:
                """State 9,16"""
                # action:20011030:"Cannot select while entering combat"
                assert t000001000_x4(action1=20011030)
        elif GetTalkListEntryResult() == 3:
            """State 12"""
            # goods:1000:Flask of Crimson Tears, goods:1050:Flask of Cerulean Tears, goods:1001:Flask of Crimson Tears, goods:1051:Flask of Cerulean Tears, goods:1002:Flask of Crimson Tears +1, goods:1052:Flask of Cerulean Tears +1, goods:1003:Flask of Crimson Tears +1, goods:1053:Flask of Cerulean Tears +1, goods:1004:Flask of Crimson Tears +2, goods:1054:Flask of Cerulean Tears +2, goods:1005:Flask of Crimson Tears +2, goods:1055:Flask of Cerulean Tears +2, goods:1006:Flask of Crimson Tears +3, goods:1056:Flask of Cerulean Tears +3, goods:1007:Flask of Crimson Tears +3, goods:1057:Flask of Cerulean Tears +3, goods:1008:Flask of Crimson Tears +4, goods:1058:Flask of Cerulean Tears +4, goods:1009:Flask of Crimson Tears +4, goods:1059:Flask of Cerulean Tears +4, goods:1010:Flask of Crimson Tears +5, goods:1060:Flask of Cerulean Tears +5, goods:1011:Flask of Crimson Tears +5, goods:1061:Flask of Cerulean Tears +5, goods:1012:Flask of Crimson Tears +6, goods:1062:Flask of Cerulean Tears +6, goods:1013:Flask of Crimson Tears +6, goods:1063:Flask of Cerulean Tears +6, goods:1014:Flask of Crimson Tears +7, goods:1064:Flask of Cerulean Tears +7, goods:1015:Flask of Crimson Tears +7, goods:1065:Flask of Cerulean Tears +7, goods:1016:Flask of Crimson Tears +8, goods:1066:Flask of Cerulean Tears +8, goods:1017:Flask of Crimson Tears +8, goods:1067:Flask of Cerulean Tears +8, goods:1018:Flask of Crimson Tears +9, goods:1068:Flask of Cerulean Tears +9, goods:1019:Flask of Crimson Tears +9, goods:1069:Flask of Cerulean Tears +9, goods:1020:Flask of Crimson Tears +10, goods:1070:Flask of Cerulean Tears +10, goods:1021:Flask of Crimson Tears +10, goods:1071:Flask of Cerulean Tears +10, goods:1022:Flask of Crimson Tears +11, goods:1072:Flask of Cerulean Tears +11, goods:1023:Flask of Crimson Tears +11, goods:1073:Flask of Cerulean Tears +11, goods:1024:Flask of Crimson Tears +12, goods:1074:Flask of Cerulean Tears +12, goods:1025:Flask of Crimson Tears +12, goods:1075:Flask of Cerulean Tears +12
            assert t000001000_x15(goods9=1000)
        #max out flasks
        elif GetTalkListEntryResult() == 4:
            BonfireActivation(13)
            if GetEstusAllocation(1) == 0:
                EstusAllocationUpdate(14, 0)
                SetEventFlag(1049302401, 1)
            elif GetEstusAllocation(1) == 1:
                EstusAllocationUpdate(13, 0)
                SetEventFlag(1049302402, 1)
            elif GetEstusAllocation(1) == 2:
                EstusAllocationUpdate(12, 0)
                SetEventFlag(1049302403, 1)
            elif GetEstusAllocation(1) == 3:
                EstusAllocationUpdate(11, 0)
                SetEventFlag(1049302404, 1)
            elif GetEstusAllocation(1) == 4:
                EstusAllocationUpdate(10, 0)
                SetEventFlag(1049302405, 1)
            elif GetEstusAllocation(1) == 5:
                EstusAllocationUpdate(9, 0)
                SetEventFlag(1049302406, 1)
            elif GetEstusAllocation(1) == 6:
                EstusAllocationUpdate(8, 0)
                SetEventFlag(1049302407, 1)
            elif GetEstusAllocation(1) == 7:
                EstusAllocationUpdate(7, 0)
                SetEventFlag(1049302408, 1)
            elif GetEstusAllocation(1) == 8:
                EstusAllocationUpdate(6, 0)
                SetEventFlag(1049302409, 1)
            elif GetEstusAllocation(1) == 9:
                EstusAllocationUpdate(5, 0)
                SetEventFlag(1049302410, 1)
            elif GetEstusAllocation(1) == 10:
                EstusAllocationUpdate(4, 0)
                SetEventFlag(1049302411, 1)
            elif GetEstusAllocation(1) == 11:
                EstusAllocationUpdate(3, 0)
                SetEventFlag(1049302412, 1)
            elif GetEstusAllocation(1) == 12:
                EstusAllocationUpdate(2, 0)
                SetEventFlag(1049302413, 1)
            elif GetEstusAllocation(1) == 13:
                EstusAllocationUpdate(1, 0)
                SetEventFlag(1049302414, 1)
            elif GetEstusAllocation(1) == 14:
                EstusAllocationUpdate(0, 0)
                SetEventFlag(1049302415, 1)
            SetEventFlag(1049300071, 1)
            SetEventFlag(1049302400, 1)
        else:
            """State 4,17"""
            return 0

def t000001000_x48():
    """State 0"""
    if not GetEventFlag(720070) or not GetEventFlag(720080):
        """State 1,3"""
        SetEventFlag(720070, 1)
        SetEventFlag(720080, 1)
        """State 4"""
    else:
        """State 2"""
        pass
    """State 5"""
    return 0

def t000001000_x49(z30=11, z31=12):
    """State 0"""
    assert GetCurrentStateElapsedFrames() > 1
    """State 1"""
    assert t000001000_x57(z30=z30)
    """State 2"""
    assert t000001000_x58(z31=z31)
    """State 3"""
    return 0

def t000001000_x50():
    """State 0,9"""
    assert t000001000_x28()
    """State 7"""
    SetEventFlag(4652, 1)
    """State 4"""
    assert (not GetEventFlag(4652) or (GetCurrentStateElapsedTime() > 5 and not DoesPlayerHaveSpEffect(9600)
            and not DoesPlayerHaveSpEffect(9603)))
    """State 1"""
    if not GetEventFlag(4680):
        """State 2,8"""
        Label('L0')
        assert t000001000_x29(z39=20010) and GetCurrentStateElapsedTime() > 3
    elif GetEventFlag(108) == 1:
        """State 6"""
        Goto('L0')
    # eventflag:400001:lot:100010:Rold Medallion
    elif GetEventFlag(11009260) == 1 and not GetEventFlag(400001):
        """State 5"""
        Goto('L0')
    else:
        """State 3"""
        pass
    """State 10"""
    return 0

def t000001000_x51(z33=15):
    """State 0"""
    if not GetEventFlag(12019257):
        """State 1"""
        if not GetEventFlag(12019255):
            """State 5"""
            c1_149(z33, 21060900, -1, 0, 0)
        elif not GetEventFlag(12019256):
            """State 6"""
            c1_149(z33, 21060901, -1, 0, 0)
        else:
            """State 7"""
            c1_149(z33, 21060902, -1, 0, 0)
    elif not GetEventFlag(12019260):
        """State 2"""
        if not GetEventFlag(12012711):
            """State 8"""
            c5_149(not GetEventFlag(12019258), z33, 21060903, -1, 0, 0)
            c5_149(GetEventFlag(12019258) == 1, z33, 21060903, -1, 0, 0)
        elif GetEventFlag(1045379208) == 1:
            """State 9"""
            c1_149(z33, 21060910, -1, 0, 1)
        else:
            """State 13"""
            c1_149(z33, 21060911, -1, 0, 1)
    elif not GetEventFlag(12019265):
        """State 3"""
        if not GetEventFlag(12012712) or not GetEventFlag(1045379208):
            """State 10"""
            c5_149(not GetEventFlag(12019261), z33, 21060912, -1, 0, 0)
            c5_149(GetEventFlag(12019261) == 1, z33, 21060912, -1, 0, 0)
        else:
            """State 11"""
            c1_149(z33, 21060920, -1, 0, 1)
    else:
        """State 4,12"""
        c5_149(not GetEventFlag(12019266), z33, 21060921, -1, 0, 1)
        c5_149(GetEventFlag(12019266) == 1, z33, 21060921, -1, 0, 0)
    """State 14"""
    return 0

def t000001000_x52():
    """State 0"""
    # eventflag:400394:lot:103940:Miniature Ranni
    if (GetEventFlag(400394) == 1 and not GetEventFlag(12019280) and (GetEventFlag(12012710) == 1 or
        GetEventFlag(12012711) == 1 or GetEventFlag(12012712) == 1)):
        """State 4"""
        assert t000001000_x51(z33=15)
    # eventflag:400394:lot:103940:Miniature Ranni
    elif GetEventFlag(400394) == 1 and GetEventFlag(1034509406) == 1 and GetEventFlag(12012713) == 1:
        """State 5"""
        assert t000001000_x53(z32=15)
    else:
        """State 3"""
        assert t000001000_x43(z30=11, z31=12)
    """State 1"""
    c5_149(GetEventFlag(1054532702) == 1 and GetEventFlag(108) == 1 and not GetEventFlag(110), 32, 20010101,
           -1, 0, 1)
    # action:20010080:"Begin Journey <?nextLoopCount?>"
    AddTalkListDataIf(GetEventFlag(120) == 1 and GetEventFlag(11102790) == 1, 41, 20010080, -1)
    """State 6"""
    return 0
    """Unused"""
    """State 2"""
    Quit()

def t000001000_x53(z32=15):
    """State 0"""
    if not GetEventFlag(12019275):
        """State 1"""
        c1_149(z32, 21060930, -1, 0, 0)
    else:
        """State 2"""
        c5_149(not GetEventFlag(12019276), z32, 21060931, -1, 0, 0)
        c5_149(GetEventFlag(12019276) == 1, z32, 21060931, -1, 0, 0)
    """State 3"""
    return 0

def t000001000_x54():
    """State 0"""
    if not GetEventFlag(12012713):
        """State 1"""
        assert t000001000_x55()
    else:
        """State 2"""
        assert t000001000_x56()
    """State 3"""
    return 0

def t000001000_x55():
    """State 0"""
    if not GetEventFlag(12019257):
        """State 1"""
        if not GetEventFlag(12019255):
            """State 5"""
            # talk:10619000:"..."
            assert t000001000_x14(text1=10619000, z54=12019255, mode3=1)
        elif not GetEventFlag(12019256):
            """State 6"""
            # talk:10619100:"..."
            assert t000001000_x14(text1=10619100, z54=12019256, mode3=1)
        else:
            """State 7"""
            # talk:10619200:"..."
            call = t000001000_x14(text1=10619200, z54=12019257, mode3=1)
            if call.Done():
                pass
            elif call.Done():
                pass
    elif not GetEventFlag(12019260):
        """State 2"""
        if not GetEventFlag(12012711):
            """State 11"""
            # talk:10619300:"Perform for me a service, as recompense."
            assert t000001000_x14(text1=10619300, z54=12019258, mode3=1)
        elif GetEventFlag(1045379208) == 1:
            """State 8"""
            # talk:10620000:"Let us speak of the past, a while."
            assert t000001000_x14(text1=10620000, z54=12019260, mode3=1)
        else:
            """State 9"""
            # talk:10603000:"Let us speak of the past, a while."
            assert t000001000_x14(text1=10603000, z54=12019260, mode3=1)
    elif not GetEventFlag(12019265):
        """State 3"""
        if not GetEventFlag(12012712) or not GetEventFlag(1045379208):
            """State 12"""
            # talk:10620100:"I turned my back on the Two Fingers and we have each been cursing the other since."
            assert t000001000_x14(text1=10620100, z54=12019261, mode3=1)
        else:
            """State 10"""
            # talk:10621000:"Even when I turned my back upon the Two Fingers."
            assert t000001000_x14(text1=10621000, z54=12019265, mode3=1)
    else:
        """State 4,13"""
        # talk:10621100:"Ach, this form hath loosened my tongue."
        assert t000001000_x14(text1=10621100, z54=12019266, mode3=1)
    """State 14"""
    return 0

def t000001000_x56():
    """State 0"""
    if not GetEventFlag(12019275):
        """State 2"""
        # talk:10625000:"..."
        assert t000001000_x14(text1=10625000, z54=12019275, mode3=1)
    else:
        """State 3"""
        # talk:10625100:"Mine will be an order not of gold, but the stars and moon of the chill night."
        assert t000001000_x14(text1=10625100, z54=12019276, mode3=1)
    """State 1"""
    SetEventFlag(1034509407, 1)
    """State 4"""
    return 0

def t000001000_x57(z30=11):
    """State 0,7"""
    if not GetEventFlag(4680):
        """State 4"""
        if not GetEventFlag(1042372700):
            """State 2"""
            c1_149(z30, 21000001, -1, 0, 1)
            SetEventFlag(1042379200, 1)
        elif GetEventFlag(4699) == 1:
            """State 31"""
            assert t000001000_x46(z31=z30)
        else:
            """State 5"""
            pass
    else:
        """State 6"""
        if (GetEventFlag(10009655) == 1 and not GetEventFlag(105) and not DoesPlayerHaveSpEffect(4270)
            and not DoesPlayerHaveSpEffect(4271) and not DoesPlayerHaveSpEffect(4272) and not DoesPlayerHaveSpEffect(4280)
            and not DoesPlayerHaveSpEffect(4282) and not DoesPlayerHaveSpEffect(4286)):
            """State 18"""
            c1_149(z30, 21000050, -1, 0, 1)
            SetEventFlag(10009656, 1)
        elif GetEventFlag(1042372701) == 1 and not GetEventFlag(1042379203) and not GetEventFlag(10009655):
            """State 3"""
            c1_149(z30, 21000002, -1, 0, 1)
            SetEventFlag(1042379202, 1)
        elif GetEventFlag(1042372703) == 1:
            """State 28"""
            SetEventFlag(1042379208, 1)
            c5_149(not GetEventFlag(1042379209), z30, 21000004, -1, 0, 1)
            c5_149(GetEventFlag(1042379209) == 1, z30, 21000004, -1, 0, 0)
        elif (not GetEventFlag(1042372702) and not GetEventFlag(1042379207) and GetEventFlag(1042379203)
              == 1 and not GetEventFlag(10009655)):
            """State 8"""
            c1_149(z30, 21000003, -1, 0, 1)
            SetEventFlag(1042379206, 1)
        elif GetEventFlag(1046382701) == 1 and not GetEventFlag(1046389202):
            """State 9"""
            SetEventFlag(1046389201, 1)
            c5_149(not GetEventFlag(1046389203) and not GetEventFlag(1046382700), z30, 21000005, -1, 0, 1)
            c5_149(GetEventFlag(1046389203) == 1 and not GetEventFlag(1046382700), z30, 21000005, -1,
                   0, 0)
            # action:21000006:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000006, -1)
        elif GetEventFlag(1043342700) == 1 and not GetEventFlag(1043349251):
            """State 10"""
            SetEventFlag(1043349250, 1)
            c5_149(not GetEventFlag(1043349252) and not GetEventFlag(1046382700), z30, 21000007, -1, 0, 1)
            c5_149(GetEventFlag(1043349252) == 1 and not GetEventFlag(1046382700), z30, 21000007, -1,
                   0, 0)
            # action:21000008:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000008, -1)
        elif GetEventFlag(1038502710) == 1 and not GetEventFlag(1038509251):
            """State 11"""
            SetEventFlag(1038509250, 1)
            c5_149(not GetEventFlag(1038509252) and not GetEventFlag(1046382700), z30, 21000009, -1, 0, 1)
            c5_149(GetEventFlag(1038509252) == 1 and not GetEventFlag(1046382700), z30, 21000009, -1,
                   0, 0)
            # action:21000010:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000010, -1)
        elif GetEventFlag(1043532710) == 1 and not GetEventFlag(1043539251):
            """State 12"""
            SetEventFlag(1043539250, 1)
            c5_149(not GetEventFlag(1043539252) and not GetEventFlag(1046382700), z30, 21000011, -1, 0, 1)
            c5_149(GetEventFlag(1043539252) == 1 and not GetEventFlag(1046382700), z30, 21000011, -1,
                   0, 0)
            # action:21000012:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000012, -1)
        elif GetEventFlag(11002740) == 1 and not GetEventFlag(11009256):
            """State 13"""
            SetEventFlag(11009255, 1)
            c5_149(not GetEventFlag(11009257) and not GetEventFlag(1046382700), z30, 21000013, -1, 0, 1)
            c5_149(GetEventFlag(11009257) == 1 and not GetEventFlag(1046382700), z30, 21000013, -1, 0, 0)
            # action:21000014:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000014, -1)
        elif GetEventFlag(1043502700) == 1 and not GetEventFlag(1043509201):
            """State 25"""
            SetEventFlag(1043509200, 1)
            c5_149(not GetEventFlag(1043509202) and not GetEventFlag(1046382700), z30, 21000015, -1, 0, 1)
            c5_149(GetEventFlag(1043509202) == 1 and not GetEventFlag(1046382700), z30, 21000015, -1,
                   0, 0)
            # action:21000016:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000016, -1)
        elif GetEventFlag(1054552700) == 1 and not GetEventFlag(1054559201):
            """State 14"""
            SetEventFlag(1054559200, 1)
            c5_149(not GetEventFlag(1054559202) and not GetEventFlag(1046382700), z30, 21000017, -1, 0, 1)
            c5_149(GetEventFlag(1054559202) == 1 and not GetEventFlag(1046382700), z30, 21000017, -1,
                   0, 0)
            # action:21000018:"Talk to Melina"
            AddTalkListDataIf(GetEventFlag(1046382700) == 1, z30, 21000018, -1)
        # eventflag:400001:lot:100010:Rold Medallion
        elif (not GetEventFlag(1037519201) and not GetEventFlag(11009260) and not GetEventFlag(400001)
              and (GetEventFlag(1037512700) == 1 or GetEventFlag(1038512700) == 1 or GetEventFlag(1038502711)
              == 1 or GetEventFlag(1039512711) == 1 or GetEventFlag(1037522700) == 1)):
            """State 17"""
            c1_149(z30, 21000022, -1, 0, 1)
            SetEventFlag(1037519200, 1)
        elif (GetEventFlag(1036482710) == 1 and GetEventFlag(1036489213) == 1 and GetEventFlag(3940)
              == 1 and not GetEventFlag(1036489251)):
            """State 15"""
            c1_149(z30, 21000020, -1, 0, 1)
            SetEventFlag(1036489250, 1)
        elif (GetEventFlag(1039512710) == 1 and GetEventFlag(1039519209) == 1 and GetEventFlag(1036489210)
              == 1 and GetEventFlag(3940) == 1 and not GetEventFlag(1039519251)):
            """State 16"""
            SetEventFlag(1039519250, 1)
            c1_149(z30, 21000021, -1, 0, 1)
        elif GetEventFlag(11002745) == 1:
            """State 29"""
            c5_149(not GetEventFlag(11009266), z30, 21000023, -1, 0, 0)
            c5_149(GetEventFlag(11009266) == 1, z30, 21000023, -1, 0, 0)
            SetEventFlag(11009265, 1)
        elif ((GetEventFlag(1054552701) == 1 or GetEventFlag(1052562700) == 1 or GetEventFlag(1052542700)
              == 1 or GetEventFlag(1051532700) == 1 or GetEventFlag(1052532710) == 1) and not GetEventFlag(1054539211)):
            """State 21"""
            SetEventFlag(1054539210, 1)
            c1_149(z30, 21000026, -1, 0, 1)
        elif GetEventFlag(1054532702) == 1:
            """State 22"""
            SetEventFlag(1054539215, 1)
            c5_149(not GetEventFlag(1054539216), z30, 21000027, -1, 0, 1)
            c5_149(GetEventFlag(1054539216) == 1, z30, 21000027, -1, 0, 1)
        elif (GetEventFlag(35002730) == 1 or GetEventFlag(35002731) == 1) and not GetEventFlag(35009351):
            """State 23"""
            SetEventFlag(35009350, 1)
            c1_149(z30, 21000028, -1, 0, 1)
        elif GetEventFlag(35002731) == 1 and not GetEventFlag(35009353):
            """State 24"""
            SetEventFlag(35009352, 1)
            c1_149(z30, 21000030, -1, 0, 1)
        elif GetEventFlag(35002732) == 1 and not GetEventFlag(35002733):
            """State 26"""
            c5_149(not GetEventFlag(35009356) and not GetEventFlag(35009357), z30, 21000029, -1, 0, 0)
            c5_149(GetEventFlag(35009356) == 1 or GetEventFlag(35009357) == 1, z30, 21000029, -1, 0, 0)
            SetEventFlag(35009355, 1)
        elif GetEventFlag(35002733) == 1:
            """State 27"""
            c5_149(not GetEventFlag(35009359), z30, 21000031, -1, 0, 0)
            c5_149(GetEventFlag(35009359) == 1, z30, 21000031, -1, 0, 0)
            SetEventFlag(35009358, 1)
        elif GetEventFlag(11109387) == 1 and not GetEventFlag(11009271):
            """State 19"""
            SetEventFlag(11009270, 1)
            c1_149(z30, 21000024, -1, 0, 1)
        elif GetEventFlag(1049539207) == 1 and not GetEventFlag(11009276):
            """State 20"""
            SetEventFlag(11009275, 1)
            c1_149(z30, 21000025, -1, 0, 1)
        elif GetEventFlag(4699) == 1:
            """State 30"""
            assert t000001000_x46(z31=z30)
        else:
            """State 1"""
            pass
    """State 32"""
    return 0

def t000001000_x58(z31=12):
    """State 0,5"""
    if not GetEventFlag(4680):
        """State 2"""
        if GetEventFlag(4699) == 1:
            """State 7"""
            assert t000001000_x46(z31=z31)
        else:
            """State 3"""
            pass
    else:
        """State 4"""
        if GetEventFlag(4699) == 1:
            """State 6"""
            assert t000001000_x46(z31=z31)
        else:
            """State 1"""
            pass
    """State 8"""
    return 0

def t000001000_x59():
    """State 0"""
    if GetEventFlag(953) == 1:
        """State 3,1"""
        SetEventFlag(4653, 1)
    else:
        """State 2"""
        pass
    """State 4"""
    return 0

def t000001000_x60():
    """State 0"""
    if (GetEventFlag(10000851) == 1 and not GetEventFlag(10009655) and not DoesPlayerHaveSpEffect(4270)
        and not DoesPlayerHaveSpEffect(4271) and not DoesPlayerHaveSpEffect(4272) and not DoesPlayerHaveSpEffect(4280)
        and not DoesPlayerHaveSpEffect(4282) and not DoesPlayerHaveSpEffect(4286)):
        """State 2,3"""
        Label('L0')
        SetEventFlag(4653, 1)
    elif ((GetEventFlag(3062) == 1 or GetEventFlag(3063) == 1 or GetEventFlag(3064) == 1 or GetEventFlag(3065)
          == 1) and not GetEventFlag(10009655) and not DoesPlayerHaveSpEffect(4270) and not DoesPlayerHaveSpEffect(4271)
          and not DoesPlayerHaveSpEffect(4272) and not DoesPlayerHaveSpEffect(4280) and not DoesPlayerHaveSpEffect(4282)
          and not DoesPlayerHaveSpEffect(4286)):
        """State 4"""
        Goto('L0')
    # eventflag:400001:lot:100010:Rold Medallion
    elif (not GetEventFlag(11009260) and not GetEventFlag(400001) and not GetEventFlag(9104) and (GetEventFlag(11002741)
          == 1 or GetEventFlag(11002742) == 1 or GetEventFlag(11002743) == 1 or GetEventFlag(11002744)
          == 1)):
        """State 5"""
        Goto('L0')
    # eventflag:400001:lot:100010:Rold Medallion
    elif GetEventFlag(9104) == 1 and not GetEventFlag(400001):
        """State 6"""
        Goto('L0')
    else:
        """State 1"""
        pass
    """State 7"""
    return 0

def t000001000_x61():
    """State 0"""
    # eventflag:400001:lot:100010:Rold Medallion
    if GetEventFlag(9104) == 1 and not GetEventFlag(400001):
        """State 2,1"""
        SetEventFlag(4653, 1)
    else:
        """State 3"""
        pass
    """State 4"""
    return 0

def t000001000_x62():
    """State 0"""
    if not GetEventFlag(35009360):
        """State 3,1"""
        SetEventFlag(4653, 1)
    else:
        """State 2"""
        pass
    """State 4"""
    return 0

def t000001000_x63():
    """State 0"""
    while True:
        """State 1"""
        if CompareBonfireLevel(0, 0) == 1:
            """State 2"""
            # actionbutton:6100:"Touch grace"
            assert t000001000_x5(actionbutton5=6100, flag1=6001, flag2=6000)
        else:
            """State 3"""
            # actionbutton:6101:"Rest at site of grace"
            assert t000001000_x3(actionbutton1=6101, flag3=6001, flag4=6000)
        """State 4"""
        # action:20011020:"Cannot rest at sites of grace right now"
        assert t000001000_x4(action1=20011020)
    """Unused"""
    """State 5"""
    return 0

def t000001000_x64():
    """State 0,2"""
    if GetCurrentStateElapsedTime() > 0.8:
        """State 3"""
        GiveSpEffectToPlayer(9606)
        def WhilePaused():
            GiveSpEffectToPlayer(9606)
        def ExitPause():
            GiveSpEffectToPlayer(9606)
        if not f233():
            pass
        elif GetEventFlag(9001) == 1:
            """State 1"""
            Label('L0')
    elif GetEventFlag(9001) == 1:
        Goto('L0')
    """State 4"""
    return 0

def t000001000_x65(actionbutton1=6100, actionbutton2=6101, val2=45, z29=-120):
    """State 0"""
    if RelativeAngleBetweenTwoPlayers_SpecifyAxis(z29) < val2:
        """State 1"""
        Label('L0')
        """State 3"""
        call = t000001000_x41(actionbutton1=actionbutton1, actionbutton2=actionbutton2)
        if call.Done():
            """State 4"""
            return 0
        elif not RelativeAngleBetweenTwoPlayers_SpecifyAxis(z29) < val2:
            pass
    else:
        pass
    """State 2"""
    assert RelativeAngleBetweenTwoPlayers_SpecifyAxis(z29) < val2
    Goto('L0')

def t000001000_x66():
    """State 0,2"""
    if GetCurrentStateElapsedTime() > 0.8:
        """State 3"""
        GiveSpEffectToPlayer(9610)
        def WhilePaused():
            GiveSpEffectToPlayer(9610)
        def ExitPause():
            GiveSpEffectToPlayer(9610)
        if not f233():
            pass
        elif GetEventFlag(9001) == 1:
            """State 1"""
            Label('L0')
    elif GetEventFlag(9001) == 1:
        Goto('L0')
    """State 4"""
    return 0

def t000001000_x67():
    """State 0"""
    # eventflag:400001:lot:100010:Rold Medallion
    if GetEventFlag(400001) == 1 and not GetEventFlag(108) and not GetEventFlag(11002745):
        """State 1,3"""
        assert t000001000_x29(z39=20011)
    else:
        """State 2,4"""
        assert t000001000_x29(z39=20010)
    """State 5"""
    return 0

def t000001000_x68():
    """State 0"""
    if GetEventFlag(1054532702) == 1:
        """State 1"""
        if GetEventFlag(110) == 1 and not GetEventFlag(1054532703) and not GetEventFlag(9116):
            """State 3,7"""
            SetEventFlag(9000, 0)
            SetEventFlag(9020, 0)
            """State 6"""
            c1_138(-1)
            """State 5"""
            SetEventFlag(1054539206, 1)
            assert GetCurrentStateElapsedTime() > 15
            """State 8"""
            c5_138(not GetEventFlag(11102790), 1001000)
            SetEventFlag(9000, 1)
            SetEventFlag(9020, 1)
            SetEventFlag(1054539206, 0)
        else:
            """State 4"""
            pass
    else:
        """State 2"""
        pass
    """State 9"""
    return 0

def t000001000_x69(z27=1, z28=15000370):
    """State 0,5"""
    SetWorkValue(1, GetEstusAllocation(0) + GetEstusAllocation(1) + -4)
    """State 6"""
    assert t000001000_x21(z40=1, z41=1, z42=2, z43=2, z44=3, z45=3, z46=4, z47=4, z48=5, z49=5, z50=1)
    """State 3"""
    # goods:10010:Golden Seed
    if (ComparePlayerInventoryNumber(3, 10010, 4, GetWorkValue(1), 0) == 1 and GetEstusAllocation(0)
        + GetEstusAllocation(1) < 13):
        """State 1"""
        c1_149(z27, z28, -1, 0, 1)
    else:
        """State 2"""
        c1_149(z27, z28, -1, 0, 0)
    """State 4"""
    SetWorkValue(1, 0)
    """State 7"""
    return 0

def t000001000_x70(z25=2, z26=15000380):
    """State 0,3"""
    # goods:10020:Sacred Tear
    if ComparePlayerInventoryNumber(3, 10020, 4, 1, 0) == 1 and GetTotalBonfireLevel() <= 13:
        """State 1"""
        c1_149(z25, z26, -1, 0, 1)
    else:
        """State 2"""
        c1_149(z25, z26, -1, 0, 0)
    """State 4"""
    return 0

def t000001000_x71(z23=3, z24=15000371):
    """State 0,4"""
    SetWorkValue(1, GetEstusAllocation(0) + GetEstusAllocation(1) + -4)
    """State 7"""
    assert t000001000_x21(z40=1, z41=1, z42=2, z43=2, z44=3, z45=3, z46=4, z47=4, z48=5, z49=5, z50=1)
    """State 3"""
    # goods:10010:Golden Seed
    if (ComparePlayerInventoryNumber(3, 10010, 1, GetWorkValue(1), 0) == 1 or not GetEstusAllocation(0)
        + GetEstusAllocation(1) < 13):
        """State 2"""
        # goods:10020:Sacred Tear
        if ComparePlayerInventoryNumber(3, 10020, 3, 0, 0) == 1 or not GetTotalBonfireLevel() <= 13:
            """State 5"""
            c1_149(z23, z24, -1, 0, 0)
        else:
            """State 1"""
            Label('L0')
            c1_149(z23, z24, -1, 0, 1)
    else:
        Goto('L0')
    """State 6"""
    SetWorkValue(1, 0)
    """State 8"""
    return 0

def t000001000_x72():
    """State 0,1"""
    SetEventFlag(4820, 0)
    SetEventFlag(4821, 0)
    SetEventFlag(4822, 0)
    """State 2"""
    SetEventFlag(4825, 0)
    SetEventFlag(4826, 0)
    SetEventFlag(4827, 0)
    """State 3"""
    return 0

def t000001000_x73(z20=_, z21=_, z22=_):
    """State 0,1"""
    SetEventFlag(z20, 1)
    """State 2"""
    SetEventFlag(z21, 0)
    SetEventFlag(z22, 0)
    """State 3"""
    return 0

def t000001000_x74(val1=_):
    """State 0,1"""
    if not val1:
        """State 2,18"""
        assert t000001000_x73(z20=4825, z21=4826, z22=4827)
        """State 5"""
        if 1 == f200(6, 0, 0, 11, 59, 59):
            """State 6,21"""
            Label('L0')
            assert t000001000_x73(z20=4822, z21=4820, z22=4821)
        elif 1 == f200(12, 0, 0, 19, 59, 59):
            """State 7,22"""
            Label('L1')
            assert t000001000_x73(z20=4821, z21=4820, z22=4822)
        elif 1 == f200(20, 0, 0, 5, 59, 59):
            """State 8,23"""
            Label('L2')
            assert t000001000_x73(z20=4820, z21=4821, z22=4822)
        else:
            """State 9"""
            Label('L3')
    elif val1 == 1:
        """State 3,19"""
        assert t000001000_x73(z20=4826, z21=4825, z22=4827)
        """State 10"""
        if 1 == f200(6, 0, 0, 11, 59, 59):
            """State 11"""
            Goto('L2')
        elif 1 == f200(12, 0, 0, 19, 59, 59):
            """State 12"""
            Goto('L0')
        elif 1 == f200(20, 0, 0, 5, 59, 59):
            """State 13"""
            Goto('L1')
        else:
            Goto('L3')
    elif val1 == 2:
        """State 4,20"""
        assert t000001000_x73(z20=4827, z21=4825, z22=4826)
        """State 14"""
        if 1 == f200(6, 0, 0, 11, 59, 59):
            """State 15"""
            Goto('L1')
        elif 1 == f200(12, 0, 0, 19, 59, 59):
            """State 16"""
            Goto('L2')
        elif 1 == f200(20, 0, 0, 5, 59, 59):
            """State 17"""
            Goto('L0')
        else:
            Goto('L3')
    else:
        Goto('L3')
    """State 24"""
    return 0

def t000001000_x75(goods3=2010000):
    """State 0,1"""
    if GetEventFlag(720300) == 1:
        """State 2"""
        pass
    else:
        """State 3,5"""
        SetEventFlag(720300, 1)
    """State 6,4"""
    if f237() <= 20:
        """State 7,21"""
        assert t000001000_x81(z5=1, z6=2, z7=3, z8=2)
        """State 18"""
        call = t000001000_x999(action2=20011039 + GetWorkValue(2)) #call replaced to remove prompt
        if call.Get() == 0:
            """State 9,11"""
            if ComparePlayerInventoryNumber(3, goods3, 4, GetWorkValue(2), 0) == 1:
                """State 12,13"""
                PlayerEquipmentQuantityChange(3, goods3, GetWorkValue(2) * -1)
                """State 15"""
                c1_152(f237() + 1)
                """State 20"""
                assert t000001000_x999(action2=20011062) #call replaced to remove prompt
                """State 16"""
                SetWorkValue(2, 0)
            else:
                """State 14,19"""
                assert t000001000_x4(action1=20011060)
        elif call.Done():
            """State 10"""
            pass
    else:
        """State 8,17"""
        assert t000001000_x4(action1=20011064)
    """State 22"""
    return 0

def t000001000_x76(goods4=2010100):
    """State 0,1"""
    if GetEventFlag(720310) == 1:
        """State 2"""
        pass
    else:
        """State 3,4"""
        SetEventFlag(720310, 1)
    """State 5,6"""
    if f238() <= 10:
        """State 7,18"""
        assert (t000001000_x77(z9=1, z10=1, z11=1, z12=2, z13=2, z14=3, z15=3, z16=3, z17=4, z18=5, z19=2,
                mode1=1))
        """State 19"""
        call = t000001000_x999(action2=20011049 + GetWorkValue(2)) #call replaced to remove prompt
        if call.Get() == 0:
            """State 9,11"""
            if ComparePlayerInventoryNumber(3, goods4, 4, GetWorkValue(2), 0) == 1:
                """State 12,13"""
                PlayerEquipmentQuantityChange(3, goods4, GetWorkValue(2) * -1)
                """State 15"""
                c1_153(f238() + 1)
                """State 21"""
                assert t000001000_x999(action2=20011063) #call replaced to remove prompt
                """State 16"""
                SetWorkValue(2, 0)
            else:
                """State 14,20"""
                assert t000001000_x4(action1=20011061)
        elif call.Done():
            """State 10"""
            pass
    else:
        """State 8,17"""
        assert t000001000_x4(action1=20011065)
    """State 22"""
    return 0

def t000001000_x77(z9=1, z10=1, z11=1, z12=2, z13=2, z14=3, z15=3, z16=3, z17=4, z18=5, z19=2, mode1=_):
    """State 0,13"""
    SetWorkValue(z19, 0)
    """State 14"""
    if not mode1:
        """State 15,16"""
        SetWorkValue(z19, f237())
    else:
        """State 17,18"""
        SetWorkValue(z19, f238())
    """State 19,1"""
    if not GetWorkValue(z19):
        """State 2"""
        SetWorkValue(z19, z9)
    elif GetWorkValue(z19) == 1:
        """State 3"""
        SetWorkValue(z19, z10)
    elif GetWorkValue(z19) == 2:
        """State 4"""
        SetWorkValue(z19, z11)
    elif GetWorkValue(z19) == 3:
        """State 5"""
        SetWorkValue(z19, z12)
    elif GetWorkValue(z19) == 4:
        """State 6"""
        SetWorkValue(z19, z13)
    elif GetWorkValue(z19) == 5:
        """State 7"""
        SetWorkValue(z19, z14)
    elif GetWorkValue(z19) == 6:
        """State 8"""
        SetWorkValue(z19, z15)
    elif GetWorkValue(z19) == 7:
        """State 9"""
        SetWorkValue(z19, z16)
    elif GetWorkValue(z19) == 8:
        """State 10"""
        SetWorkValue(z19, z17)
    elif GetWorkValue(z19) == 9:
        """State 11"""
        SetWorkValue(z19, z18)
    else:
        """State 12"""
        SetWorkValue(z19, 999)
    """State 20"""
    return 0

#shadow realm blessing submenu
def t000001000_x78(goods3=2010000, goods4=2010100):
    """State 0,2"""
    CloseShopMessage()
    while True:
        """State 1"""
        ClearTalkListData()
        """State 3,8"""
        #sandbox (show asterisks)
        if not GetEventFlag(1049300057):
            assert t000001000_x79(z3=1, z4=20010005, mode1=0, goods3=goods3)
            assert t000001000_x79(z3=2, z4=20010006, mode1=1, goods3=goods4)
        #progression (hide asterisks)
        else:
            assert t000001000_x79(z3=1, z4=20010002, mode1=0, goods3=goods3)
            assert t000001000_x79(z3=2, z4=20010003, mode1=1, goods3=goods4)
        AddTalkListDataIf(not GetEventFlag(1049300057), 10, 99999070, -1) #note 1
        AddTalkListDataIf(not GetEventFlag(1049300057), 11, 99999069, -1) #note 2
        """State 4"""
        AddTalkListData(99, 20010004, -1)
        """State 5"""
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 6"""
        if GetTalkListEntryResult() == 1:
            """State 10"""
            assert t000001000_x75(goods3=goods3)
        elif GetTalkListEntryResult() == 2:
            """State 11"""
            assert t000001000_x76(goods4=goods4)
        #notes
        elif GetTalkListEntryResult() == 10 or GetTalkListEntryResult() == 11:
            pass
        else:
            """State 7,12"""
            return 0

def t000001000_x79(z3=_, z4=_, mode1=_, goods3=_):
    """State 0,4,5"""
    if not mode1:
        """State 6,8"""
        if f237() <= 20:
            """State 9,17"""
            assert t000001000_x81(z5=1, z6=2, z7=3, z8=2)
            """State 1"""
            Label('L0')
            if ComparePlayerInventoryNumber(3, goods3, 4, GetWorkValue(2), 0) == 1:
                """State 2,12"""
                c1_149(z3, z4, -1, 0, 1)
            else:
                """State 3,13"""
                Label('L1')
                c1_149(z3, z4, -1, 0, 0)
        else:
            """State 10"""
            Label('L2')
            Goto('L1')
    else:
        """State 7,11"""
        if f238() <= 10:
            """State 15,16"""
            assert (t000001000_x77(z9=1, z10=1, z11=1, z12=2, z13=2, z14=3, z15=3, z16=3, z17=4, z18=5,
                    z19=2, mode1=mode1))
            Goto('L0')
        else:
            Goto('L2')
    """State 14"""
    SetWorkValue(2, 0)
    """State 18"""
    return 0

#shadow realm blessing option
def t000001000_x80(z1=50, z2=20010001, goods1=2010000, goods2=2010100):
    if GetEventFlag(6951): #modified to always appear if dlc installed
        Label('L0')
        assert t000001000_x81(z5=1, z6=2, z7=3, z8=2)
        if ComparePlayerInventoryNumber(3, goods1, 1, GetWorkValue(2), 0) == 1:
            assert (t000001000_x77(z9=1, z10=1, z11=1, z12=2, z13=2, z14=3, z15=3, z16=3, z17=4, z18=5,
                    z19=2, mode1=1))
            if ComparePlayerInventoryNumber(3, goods2, 1, GetWorkValue(2), 0) == 1:
                c1_149(z1, z2, -1, 0, 0)
            else:
                Label('L1')
                c1_149(z1, z2, -1, 0, 1)
        else:
            Goto('L1')
        SetWorkValue(2, 0)
    else:
        if f211() > 40000000 and f211() < 43999999:
            Goto('L0')
        else:
            if f211() > 2000000000 and f211() < 2099999999:
                Goto('L0')
            else:
                pass
    return 0

def t000001000_x81(z5=1, z6=2, z7=3, z8=2):
    """State 0,6"""
    SetWorkValue(z8, 0)
    """State 7,8"""
    SetWorkValue(z8, f237())
    """State 9,1"""
    if GetWorkValue(z8) <= 1:
        """State 2"""
        SetWorkValue(z8, z5)
    elif GetWorkValue(z8) <= 9:
        """State 3"""
        SetWorkValue(z8, z6)
    elif GetWorkValue(z8) <= 20:
        """State 4"""
        SetWorkValue(z8, z7)
    else:
        """State 5"""
        SetWorkValue(z8, 999)
    """State 10"""
    return 0

def t000001000_x82():
    """State 0,5"""
    SetEventFlag(4828, 0)
    SetEventFlag(4829, 0)
    SetEventFlag(4830, 0)
    """State 1"""
    if f211() > 2045420950 and f211() < 2045420950:
        """State 2,3"""
        SetEventFlag(4828, 1)
        """State 8"""
        SetEventFlag(4830, 1)
    elif f211() > 21010953 and f211() < 21010953:
        """State 6,7"""
        SetEventFlag(4829, 1)
    else:
        """State 4"""
        pass
    """State 9"""
    return 0

def t000001000_x83():
    """State 0,1"""
    if f211() > 2048420950 and f211() < 2048420950:
        """State 2,3"""
        SetEventFlag(2048422709, 1)
    elif f211() > 21010953 and f211() < 21010953:
        """State 4,6"""
        SetEventFlag(21012732, 1)
    elif f211() > 2049390950 and f211() < 2049390950:
        """State 7,8"""
        SetEventFlag(2049392710, 1)
    else:
        """State 5"""
        pass
    """State 9"""
    return 0

def t000001000_x84():
    """State 0,1"""
    if ((f211() > 20000000 and f211() < 28999999) or (f211() > 40000000 and f211() < 43999999) or (f211()
        > 2000000000 and f211() < 2099999999)):
        """State 2,4"""
        return 0
    else:
        """State 3,5"""
        return 1

#prompt replacement that always returns 0
def t000001000_x999(action2=_):
    """State 0"""
    assert GetCurrentStateElapsedFrames(1)
    """State 1"""
    return 0