# -*- coding: utf-8 -*-
def t351001110_1():
    """State 0,1"""
    t351001110_x0()
    Quit()

def t351001110_x0():
    """State 0"""
    if not IsClientPlayer():
        """State 1"""
        Label('L0')
        call = t351001110_x1()
        if IsClientPlayer():
            """State 2"""
            Label('L1')
            call = t351001110_x2()
            if not IsClientPlayer():
                Goto('L0')
            elif IsPlayerDead():
                pass
        elif IsPlayerDead():
            pass
    else:
        Goto('L1')
    """State 3"""
    call = t351001110_x4()
    assert not IsPlayerDead()
    Goto('L0')
    """Unused"""
    """State 4"""
    return 0

def t351001110_x1():
    """State 0"""
    while True:
        """State 1"""
        # actionbutton:6000:"Talk"
        call = t351001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000)
        if call.Done():
            """State 2"""
            assert t351001110_x3() or (GetDistanceToPlayer() > 3 or IsMultiplayerInProgress())
        elif IsMultiplayerInProgress():
            pass
        """State 3"""
        assert t351001110_x6() and not IsMultiplayerInProgress()
    """Unused"""
    """State 4"""
    return 0

def t351001110_x2():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0

def t351001110_x3():
    while True:
        #if not initialized
        if not GetEventFlag(1049300000):
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
            ClearPreviousMenuSelection()
            ClearTalkActionState()
            ClearTalkListData()
            # action:22000000:"Rebirth"
            AddTalkListData(1, 22000000, -1)
            # action:22000001:"Cosmetics"
            AddTalkListData(2, 22000001, -1)
            # action:15000540:"Level Up"
            AddTalkListData(3, 15000540, -1)
            # action:22000002:"Leave"
            AddTalkListData(99, 22000002, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
            if GetTalkListEntryResult() == 1:
                TurnCharacterToFaceEntity(-1, 10000, -1, -1)
                ReallocateAttributes()
                ClearTalkActionState()
                assert not (CheckSpecificPersonMenuIsOpen(19, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 2:
                TurnCharacterToFaceEntity(-1, 10000, -1, -1)
                OpenCharaMakeMenu(0)
                ClearTalkActionState()
                assert not (CheckSpecificPersonMenuIsOpen(16, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
            elif GetTalkListEntryResult() == 3:
                OpenSoul()
                assert not (CheckSpecificPersonMenuIsOpen(10, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            else:
                return 0

def t351001110_x4():
    """State 0,2"""
    assert t351001110_x6()
    """State 1"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t351001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 3"""
        assert GetEventFlag(flag1) or GetEventFlag(flag2) or GetEventFlag(flag3) or GetEventFlag(flag4) or GetEventFlag(flag5)
        """State 4"""
        assert not GetEventFlag(flag6)
        """State 2"""
        if (GetEventFlag(flag6) or not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead()
            and not IsCharacterDisabled()) or (not GetEventFlag(flag1) and not GetEventFlag(flag2) and not GetEventFlag(flag3)
            and not GetEventFlag(flag4) and not GetEventFlag(flag5))):
            pass
        # actionbutton:6000:"Talk"
        elif CheckActionButtonArea(actionbutton1):
            break
    """State 5"""
    return 0

def t351001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

