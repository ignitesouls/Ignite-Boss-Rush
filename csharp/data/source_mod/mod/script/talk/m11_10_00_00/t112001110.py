# -*- coding: utf-8 -*-
def t112001110_1():
    """State 0,1"""
    t112001110_x0()
    Quit()

def t112001110_x0():
    """State 0"""
    if not IsClientPlayer():
        """State 1"""
        Label('L0')
        call = t112001110_x1()
        if IsClientPlayer():
            """State 2"""
            Label('L1')
            call = t112001110_x2()
            if not IsClientPlayer():
                Goto('L0')
            elif IsPlayerDead():
                pass
        elif IsPlayerDead():
            pass
    else:
        Goto('L1')
    """State 3"""
    call = t112001110_x4()
    assert not IsPlayerDead()
    Goto('L0')
    """Unused"""
    """State 4"""
    return 0

def t112001110_x1():
    """State 0"""
    while True:
        """State 1"""
        # actionbutton:6000:"Talk"
        call = t112001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000)
        if call.Done():
            """State 2"""
            assert t112001110_x3() or (GetDistanceToPlayer() > 3 or IsMultiplayerInProgress())
        elif IsMultiplayerInProgress():
            pass
        """State 3"""
        assert t112001110_x6() and not IsMultiplayerInProgress()
    """Unused"""
    """State 4"""
    return 0

def t112001110_x2():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0

def t112001110_x3():
    while True:
        """State 0"""
        ClearPreviousMenuSelection()
        ClearTalkActionState()
        ClearTalkListData()
        # I'm a dummy!
        AddTalkListData(1, 99999043, -1)
        # action:20000009:"Leave"
        AddTalkListData(99, 20000009, -1)
        ShowShopMessage(1)
        assert not (CheckSpecificPersonMenuIsOpen(1, 0) and not CheckSpecificPersonGenericDialogIsOpen(0))
        """State 1"""
        if GetTalkListEntryResult() == 1:
            """State 2"""
            return 0
        else:
            """State 3"""
            return 0

def t112001110_x4():
    """State 0,2"""
    assert t112001110_x6()
    """State 1"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t112001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
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

def t112001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

