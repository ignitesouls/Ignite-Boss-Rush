# -*- coding: utf-8 -*-
def t319001110_1():
    """State 0,1"""
    t319001110_x0()
    Quit()

def t319001110_2(action1=_):
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
        #progression mode
        elif GetEventFlag(1049300057):
            c1_110()
            ClearTalkListData()
            #clear tier 11 to unlock ng+
            AddTalkListDataIf(not GetEventFlag(1049304325), 1,99998415,-1)
            #trigger ng+ (tier 11 cleared) (hide if ng+7)
            AddTalkListDataIf(GetEventFlag(1049304325) and not GetEventFlag(1049302237), 2,action1,-1)
            #max difficulty reached
            AddTalkListDataIf(GetEventFlag(1049302237), 3, 99998209, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 20000009, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #beat tier 11 to unlock ng+ / max difficulty reached
            if GetTalkListEntryResult() == 1 or GetTalkListEntryResult() == 3:
                pass
            #trigger ng+
            elif GetTalkListEntryResult() == 2:
                OpenGenericDialog(8, 99999051, 3, 4, 2)
                assert not CheckSpecificPersonGenericDialogIsOpen(0)
                if GetGenericDialogButtonResult() == 1:
                    SetEventFlag(1049302229, 1)
                    return 0
                else:
                    pass
            else:
                return 0
        #sandbox mode
        else:
            c1_110()
            ClearTalkListData()
            #trigger ng+ (hide if ng+7)
            AddTalkListDataIf(not GetEventFlag(1049302237), 2,action1,-1)
            #max difficulty reached
            AddTalkListDataIf(GetEventFlag(1049302237), 3, 99998209, -1)
            #disable dlc completion scaling (requires sandbox and ng+)
            AddTalkListDataIf(not GetEventFlag(1049300057) and not GetEventFlag(1049302230) and GetEventFlag(70), 10, 99999067, -1)
            #enable dlc completion scaling (requires sandbox and ng+)
            AddTalkListDataIf(GetEventFlag(6951) and not GetEventFlag(1049300057) and not GetEventFlag(1049302230) and not GetEventFlag(70), 11, 99999066, -1)
            #note 1
            AddTalkListDataIf(GetEventFlag(6951) and not GetEventFlag(1049300057) and not GetEventFlag(1049302230), 14, 99999068, -1)
            #note 2
            AddTalkListDataIf(GetEventFlag(6951) and not GetEventFlag(1049300057) and not GetEventFlag(1049302230), 12, 99999070, -1)
            #note 3
            AddTalkListDataIf(GetEventFlag(6951) and not GetEventFlag(1049300057) and not GetEventFlag(1049302230), 13, 99999069, -1)
            # action:20000009:"Leave"
            AddTalkListData(99, 20000009, -1)
            ShowShopMessage(1)
            assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
            #beat tier 11 to unlock ng+ / max difficulty reached
            if GetTalkListEntryResult() == 1 or GetTalkListEntryResult() == 3:
                pass
            #trigger ng+
            elif GetTalkListEntryResult() == 2:
                OpenGenericDialog(8, 99999051, 3, 4, 2)
                assert not CheckSpecificPersonGenericDialogIsOpen(0)
                if GetGenericDialogButtonResult() == 1:
                    SetEventFlag(1049302229, 1)
                    return 0
                else:
                    pass
            #disable dlc completion scaling
            elif GetTalkListEntryResult() == 10:
                SetEventFlag(70, 0)
            #enable dlc completion scaling
            elif GetTalkListEntryResult() == 11:
                SetEventFlag(70, 1)
            #notes
            elif GetTalkListEntryResult() == 12 or GetTalkListEntryResult() == 13 or GetTalkListEntryResult() == 14:
                pass
            else:
                return 0

def t319001110_x0():
    """State 0"""
    if not IsClientPlayer():
        """State 1"""
        Label('L0')
        call = t319001110_x1()
        if IsClientPlayer() == 1:
            """State 2"""
            Label('L1')
            call = t319001110_x2()
            if not IsClientPlayer():
                Goto('L0')
            elif IsPlayerDead() == 1:
                pass
        elif IsPlayerDead() == 1:
            pass
    else:
        Goto('L1')
    """State 3"""
    call = t319001110_x4()
    assert not IsPlayerDead()
    Goto('L0')
    """Unused"""
    """State 4"""
    return 0

def t319001110_x1():
    """State 0"""
    while True:
        """State 1"""
        # actionbutton:6000:"Talk"
        call = t319001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000,
                             flag6=6000)
        if call.Done():
            """State 2"""
            call = t319001110_x3()
            if call.Done():
                pass
            elif GetDistanceToPlayer() > 3 or IsMultiplayerInProgress() == 1:
                pass
        elif IsMultiplayerInProgress() == 1:
            pass
        """State 3"""
        assert t319001110_x6() and not IsMultiplayerInProgress()
    """Unused"""
    """State 4"""
    return 0

def t319001110_x2():
    """State 0"""
    Quit()
    """Unused"""
    """State 1"""
    return 0

def t319001110_x3():
    if GetEventFlag(1049302230) == 1:
        # action:99998210:"Increase game cycle to NG+1"
        assert t319001110_2(action1=99998210)
    elif GetEventFlag(1049302231) == 1:
        # action:99998211:"Increase game cycle to NG+2"
        assert t319001110_2(action1=99998211)
    elif GetEventFlag(1049302232) == 1:
        # action:99998300:"Increase game cycle to NG+3"
        assert t319001110_2(action1=99998300)
    elif GetEventFlag(1049302233) == 1:
        # action:99998301:"Increase game cycle to NG+4"
        assert t319001110_2(action1=99998301)
    elif GetEventFlag(1049302234) == 1:
        # action:99998302:"Increase game cycle to NG+5"
        assert t319001110_2(action1=99998302)
    elif GetEventFlag(1049302235) == 1:
        # action:99998400:"Increase game cycle to NG+6
        assert t319001110_2(action1=99998400)
    elif GetEventFlag(1049302236) == 1:
        # action:99998401:"Increase game cycle to NG+7"
        assert t319001110_2(action1=99998401)
    elif GetEventFlag(1049302237) == 1:
        # action:99998209:"Max difficulty reached (NG+7)"
        assert t319001110_2(action1=99998209)
    return 0

def t319001110_x4():
    """State 0,2"""
    assert t319001110_x6()
    """State 1"""
    Quit()
    """Unused"""
    """State 3"""
    return 0

def t319001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
    """State 0"""
    while True:
        """State 1"""
        assert not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not IsCharacterDisabled()
        """State 3"""
        assert (GetEventFlag(flag1) == 1 or GetEventFlag(flag2) == 1 or GetEventFlag(flag3) == 1 or GetEventFlag(flag4)
                == 1 or GetEventFlag(flag5) == 1)
        """State 4"""
        assert not GetEventFlag(flag6)
        """State 2"""
        if GetEventFlag(flag6) == 1:
            pass
        elif (not (not GetOneLineHelpStatus() and not IsClientPlayer() and not IsPlayerDead() and not
              IsCharacterDisabled())):
            pass
        elif (not GetEventFlag(flag1) and not GetEventFlag(flag2) and not GetEventFlag(flag3) and not
              GetEventFlag(flag4) and not GetEventFlag(flag5)):
            pass
        # actionbutton:6000:"Talk"
        elif CheckActionButtonArea(actionbutton1):
            break
    """State 5"""
    return 0

def t319001110_x6():
    """State 0,1"""
    ClearTalkProgressData()
    StopEventAnimWithoutForcingConversationEnd(0)
    ForceCloseGenericDialog()
    ForceCloseMenu()
    ReportConversationEndToHavokBehavior()
    """State 2"""
    return 0

