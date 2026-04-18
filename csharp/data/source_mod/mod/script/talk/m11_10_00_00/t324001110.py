# -*- coding: utf-8 -*-
def t324001110_1():
	"""State 0,1"""
	t324001110_x0()
	Quit()
	
#main menu
def t324001110_x3():
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
			ClearTalkActionState()
			ClearTalkListData()
			#enter ng+ if all bosses defeated (dlc installed)
			AddTalkListDataIf(GetEventFlag(6951) and GetEventFlag(1049300042) and not GetEventFlag(1049304330), 15, 99999038, -1)
			AddTalkListDataIf(not GetEventFlag(6951) and GetEventFlag(1049304331) and not GetEventFlag(1049304330), 15, 99999038, -1)
			#boss tiers
			AddTalkListData(21, 99999046, -1)
			#resume sequential mode in progress
			AddTalkListDataIf(GetEventFlag(1049300060), 16, 99999039, -1)
			#last boss selected
			AddTalkListDataIf(GetEventFlag(1049300091) and not GetEventFlag(1049300060), 1, 99998416, -1)
			#random boss selection menu
			#unlock if ng+ and tier dlc5 unlocked
			AddTalkListDataIf(GetEventFlag(1049304330) and GetEventFlag(1049304329), 2, 99998406, -1)
			#or if tier dlc5 is unlocked and not all bosses are defeated
			AddTalkListDataIf(GetEventFlag(1049304329) and not GetEventFlag(1049300042), 2, 99998406, -1) 
			#or if ng+ and tier 11 unlocked (dlc not installed)
			AddTalkListDataIf(not GetEventFlag(6951) and GetEventFlag(1049304330) and GetEventFlag(1049304324), 2, 99998406, -1)
			#or if tier 11 is unlocked and not all base game bosses defeated (dlc not installed)
			AddTalkListDataIf(not GetEventFlag(6951) and GetEventFlag(1049304324) and not GetEventFlag(1049304331), 2, 99998406, -1)
			#boss rush menu (unlock if ng+ and tier 11 unlocked)
			AddTalkListDataIf(GetEventFlag(1049304330) and GetEventFlag(1049304324), 11, 99998486, -1)
			#options
			AddTalkListData(40, 99999137, -1)
			# reset first encounter flags (unlock if ng+)
			AddTalkListDataIf(GetEventFlag(1049304330), 20, 99999037, -1)
			# dlc installed
			AddTalkListDataIf(GetEventFlag(6951) == 1, 22, 99998501, -1)
			# dlc not installed
			AddTalkListDataIf(not GetEventFlag(6951), 22, 99998502, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 20000009, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#boss tiers
			if GetTalkListEntryResult() == 21:
				assert t324001110_20()
			#last boss selected
			elif GetTalkListEntryResult() == 1:
				SetEventFlag(1049302260, 1)
			#random
			elif GetTalkListEntryResult() == 2:
				assert t324001110_18()
			#boss rush
			elif GetTalkListEntryResult() == 11:
				assert t324001110_21()
			# reset first encounter flags
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302243, 1)
				pass
			#dlc checks
			elif GetTalkListEntryResult() == 22:
				pass
			#enter ng+
			elif GetTalkListEntryResult() == 15:
				OpenGenericDialog(8, 99999051, 3, 4, 2)
				assert not CheckSpecificPersonGenericDialogIsOpen(0)
				if GetGenericDialogButtonResult() == 1:
					SetEventFlag(1049302229, 1)
					return 0
				else:
					pass
			#resume boss rush
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302244, 1)
			#options
			elif GetTalkListEntryResult() == 40:
				assert t324001110_70()
			else:
				return 0
		#sandbox mode
		else:
			c1_110()
			ClearTalkListData()
			#boss lists
			AddTalkListData(1, 99998424, -1)
			#resume boss rush
			AddTalkListDataIf(GetEventFlag(1049300060) == 1, 16, 99999039, -1)
			#last boss selected
			AddTalkListDataIf(not GetEventFlag(1049300060) and GetEventFlag(1049300091), 2, 99998416, -1)
			#random menu
			AddTalkListData(7, 99998406, -1)
			#boss rush menu
			AddTalkListData(11, 99998486, -1)
			#options
			AddTalkListData(40, 99999137, -1)
			# reset first encounter flags
			AddTalkListData(10, 99999037, -1)
			# dlc installed
			AddTalkListDataIf(GetEventFlag(6951), 21, 99998501, -1)
			# dlc not installed
			AddTalkListDataIf(not GetEventFlag(6951), 21, 99998502, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 20000009, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#boss lists
			if GetTalkListEntryResult() == 1:
				assert t324001110_22()
			#last boss selected
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302260, 1)
			#random
			elif GetTalkListEntryResult() == 7:
				assert t324001110_18()
			#boss rush
			elif GetTalkListEntryResult() == 11:
				assert t324001110_21()
			# reset first encounter flags
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302243, 1)
				pass
			#dlc checks
			elif GetTalkListEntryResult() == 21:
				pass
			#resume boss rush
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302244, 1)
			#options
			elif GetTalkListEntryResult() == 40:
				assert t324001110_70()
			else:
				return 0

#boss tiers (prog)
def t324001110_20():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#tier 1
		AddTalkListDataIf(GetEventFlag(1049300006) == 0,3, 99998430, -1)
		#tier 1 (all items)
		AddTalkListDataIf(GetEventFlag(1049300022) == 1,3, 99998470, -1)
		#tier 1 (defeated)
		AddTalkListDataIf(GetEventFlag(1049300006) == 1,3, 99998450, -1)
		#tier 2
		AddTalkListDataIf(GetEventFlag(1049304315) == 1 and GetEventFlag(1049300007) == 0,4, 99998431, -1)
		#tier 2 (all items)
		AddTalkListDataIf(GetEventFlag(1049304315) == 1 and GetEventFlag(1049300023) == 1,4, 99998471, -1)
		#tier 2 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304315) == 1 and GetEventFlag(1049300007) == 1,4, 99998451, -1)
		#tier 3
		AddTalkListDataIf(GetEventFlag(1049304316) == 1 and GetEventFlag(1049300008) == 0,5, 99998432, -1)
		#tier 3 (all items)
		AddTalkListDataIf(GetEventFlag(1049304316) == 1 and GetEventFlag(1049300024) == 1,5, 99998472, -1)
		#tier 3 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304316) == 1 and GetEventFlag(1049300008) == 1,5, 99998452, -1)
		#tier 4
		AddTalkListDataIf(GetEventFlag(1049304317) == 1 and GetEventFlag(1049300009) == 0,6, 99998433, -1)
		#tier 4 (all items)
		AddTalkListDataIf(GetEventFlag(1049304317) == 1 and GetEventFlag(1049300025) == 1,6, 99998473, -1)
		#tier 4 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304317) == 1 and GetEventFlag(1049300009) == 1,6, 99998453, -1)
		#tier 5
		AddTalkListDataIf(GetEventFlag(1049304318) == 1 and GetEventFlag(1049300010) == 0,7, 99998434, -1)
		#tier 5 (all items)
		AddTalkListDataIf(GetEventFlag(1049304318) == 1 and GetEventFlag(1049300026) == 1,7, 99998474, -1)
		#tier 5 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304318) == 1 and GetEventFlag(1049300010) == 1,7, 99998454, -1)
		#tier 6
		AddTalkListDataIf(GetEventFlag(1049304319) == 1 and GetEventFlag(1049300011) == 0,8, 99998435, -1)
		#tier 6 (all items)
		AddTalkListDataIf(GetEventFlag(1049304319) == 1 and GetEventFlag(1049300027) == 1,8, 99998475, -1)
		#tier 6 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304319) == 1 and GetEventFlag(1049300011) == 1,8, 99998455, -1)
		#tier 7
		AddTalkListDataIf(GetEventFlag(1049304320) == 1 and GetEventFlag(1049300012) == 0,9, 99998436, -1)
		#tier 7 (all items)
		AddTalkListDataIf(GetEventFlag(1049304320) == 1 and GetEventFlag(1049300028) == 1,9, 99998476, -1)
		#tier 7 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304320) == 1 and GetEventFlag(1049300012) == 1,9, 99998456, -1)
		#tier 8
		AddTalkListDataIf(GetEventFlag(1049304321) == 1 and GetEventFlag(1049300013) == 0,10, 99998437, -1)
		#tier 8 (all items)
		AddTalkListDataIf(GetEventFlag(1049304321) == 1 and GetEventFlag(1049300029) == 1,10, 99998477, -1)
		#tier 8 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304321) == 1 and GetEventFlag(1049300013) == 1,10, 99998457, -1)
		#tier 9
		AddTalkListDataIf(GetEventFlag(1049304322) == 1 and GetEventFlag(1049300014) == 0,11, 99998438, -1)
		#tier 9 (all items)
		AddTalkListDataIf(GetEventFlag(1049304322) == 1 and GetEventFlag(1049300030) == 1,11, 99998478, -1)
		#tier 9 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304322) == 1 and GetEventFlag(1049300014) == 1,11, 99998458, -1)
		#tier 10
		AddTalkListDataIf(GetEventFlag(1049304323) == 1 and GetEventFlag(1049300015) == 0,12, 99998439, -1)
		#tier 10 (all items)
		AddTalkListDataIf(GetEventFlag(1049304323) == 1 and GetEventFlag(1049300031) == 1,12, 99998479, -1)
		#tier 10 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304323) == 1 and GetEventFlag(1049300015) == 1,12, 99998459, -1)
		#tier 11
		AddTalkListDataIf(GetEventFlag(1049304324) == 1 and GetEventFlag(1049300016) == 0,13, 99998440, -1)
		#tier 11 (all items)
		AddTalkListDataIf(GetEventFlag(1049304324) == 1 and GetEventFlag(1049300032) == 1,13, 99998480, -1)
		#tier 11 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304324) == 1 and GetEventFlag(1049300016) == 1,13, 99998460, -1)
		#tier dlc 1
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304325) == 1 and GetEventFlag(1049300017) == 0,14, 99998441, -1)
		#tier dlc 1 (all items)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304325) == 1 and GetEventFlag(1049300033) == 1,14, 99998481, -1)
		#tier dlc 1 (defeated)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304325) == 1 and GetEventFlag(1049300017) == 1,14, 99998461, -1)
		#tier dlc 2
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304326) == 1 and GetEventFlag(1049300018) == 0,15, 99998442, -1)
		#tier dlc 2 (all items)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304326) == 1 and GetEventFlag(1049300034) == 1,15, 99998482, -1)
		#tier dlc 2 (defeated)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304326) == 1 and GetEventFlag(1049300018) == 1,15, 99998462, -1)
		#tier dlc 3
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304327) == 1 and GetEventFlag(1049300019) == 0,16, 99998443, -1)
		#tier dlc 3 (all items)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304327) == 1 and GetEventFlag(1049300035) == 1,16, 99998483, -1)
		#tier dlc 3 (defeated)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304327) == 1 and GetEventFlag(1049300019) == 1,16, 99998463, -1)
		#tier dlc 4
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304328) == 1 and GetEventFlag(1049300020) == 0,17, 99998444, -1)
		#tier dlc 4 (all items)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304328) == 1 and GetEventFlag(1049300036) == 1,17, 99998484, -1)
		#tier dlc 4 (defeated)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304328) == 1 and GetEventFlag(1049300020) == 1,17, 99998464, -1)
		#tier dlc 5
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304329) == 1 and GetEventFlag(1049300021) == 0,18, 99998445, -1)
		#tier dlc 5 (all items)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304329) == 1 and GetEventFlag(1049300037) == 1,18, 99998485, -1)
		#tier dlc 5 (defeated)
		AddTalkListDataIf(GetEventFlag(6951) == 1 and GetEventFlag(1049304329) == 1 and GetEventFlag(1049300021) == 1,18, 99998465, -1)
		# action:20000009:"go back"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 3:
			assert t324001110_2()
		elif GetTalkListEntryResult() == 4:
			assert t324001110_3()
		elif GetTalkListEntryResult() == 5:
			assert t324001110_4()
		elif GetTalkListEntryResult() == 6:
			assert t324001110_5()
		elif GetTalkListEntryResult() == 7:
			assert t324001110_6()
		elif GetTalkListEntryResult() == 8:
			assert t324001110_7()
		elif GetTalkListEntryResult() == 9:
			assert t324001110_8()
		elif GetTalkListEntryResult() == 10:
			assert t324001110_9()
		elif GetTalkListEntryResult() == 11:
			assert t324001110_10()
		elif GetTalkListEntryResult() == 12:
			assert t324001110_11()
		elif GetTalkListEntryResult() == 13:
			assert t324001110_12()
		elif GetTalkListEntryResult() == 14:
			assert t324001110_13()
		elif GetTalkListEntryResult() == 15:
			assert t324001110_14()
		elif GetTalkListEntryResult() == 16:
			assert t324001110_15()
		elif GetTalkListEntryResult() == 17:
			assert t324001110_16()
		elif GetTalkListEntryResult() == 18:
			assert t324001110_17()
		else:
			return 0

#boss lists (sandbox)
def t324001110_22():
	while True:
		c1_110()
		ClearTalkListData()
		# action:99996000:"remembrance bosses"
		AddTalkListData(1, 99996000, -1)
		# action:99993021:"great enemies"
		AddTalkListData(2, 99993021, -1)
		# action:99993020:"minor bosses"
		AddTalkListData(3, 99993020, -1)
		# action:99993023:"dlc main bosses"
		AddTalkListDataIf(GetEventFlag(6951) == 1, 4, 99993023, -1)
		# action:99993024:"dlc minor bosses"
		AddTalkListDataIf(GetEventFlag(6951) == 1, 5, 99993024, -1)
		#sorting options
		AddTalkListData(10, 99998403, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#remembrance bosses
		if GetTalkListEntryResult() == 1:
			assert t324001110_23()
		#great enemies
		elif GetTalkListEntryResult() == 2:
			assert t324001110_24()
		#minor bosses
		elif GetTalkListEntryResult() == 3:
			assert t324001110_25()
		#dlc main
		elif GetTalkListEntryResult() == 4:
			assert t324001110_26()
		#dlc minor
		elif GetTalkListEntryResult() == 5:
			assert t324001110_27()
		#sorting options
		elif GetTalkListEntryResult() == 10:
			assert t324001110_33()
		else:
			return 0	

#respawn options
def t324001110_19():
	while True:
		c1_110()
		ClearTalkListData()
		# respawn before boss
		AddTalkListDataIf (GetEventFlag(1049300052) == 0,1, 99998418, -1)
		# respawn before boss (currently active)
		AddTalkListDataIf (GetEventFlag(1049300052) == 1,1, 99998420, -1)
		# respawn at roundtable
		AddTalkListDataIf (GetEventFlag(1049300053) == 0,2, 99998419, -1)
		# respawn at roundtable (currently active)
		AddTalkListDataIf (GetEventFlag(1049300053) == 1,2, 99998421, -1)
		# note
		AddTalkListData(4, 99998423, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049300052, 1)
			SetEventFlag(1049300053, 0)
			pass
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049300053, 1)
			SetEventFlag(1049300052, 0)
			pass
		elif GetTalkListEntryResult() == 4:
			pass
		else:
			return 0

#sorting options
def t324001110_33():
	while True:
		c1_110()
		ClearTalkListData()
		# sort by level
		AddTalkListDataIf (GetEventFlag(1049300004) == 0,1, 99998404, -1)
		# sort by level (currently active)
		AddTalkListDataIf (GetEventFlag(1049300004) == 1,1, 99998413, -1)
		# sort by name
		AddTalkListDataIf (GetEventFlag(1049300005) == 0,2, 99998405, -1)
		# sort by name (currently active)
		AddTalkListDataIf (GetEventFlag(1049300005) == 1,2, 99998414, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049300004, 1)
			SetEventFlag(1049300005, 0)
			pass
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049300005, 1)
			SetEventFlag(1049300004, 0)
			pass
		else:
			return 0

#random
def t324001110_18():
	while True: 
		#progression mode
		if GetEventFlag(1049300057):
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			#random all undefeated bosses (prog) (dlc included) (unlocks with tier dlc5)
			AddTalkListDataIf(GetEventFlag(6951) and not GetEventFlag(1049300042) and GetEventFlag(1049304329), 20, 99999044, -1)
			#random all bosses with remaining items (prog) (dlc included) (unlocks with tier dlc5 and ng+) (hide if using rando drops)
			AddTalkListDataIf(GetEventFlag(6951) and not GetEventFlag(1049300055) and not GetEventFlag(1049300061) and not GetEventFlag(1049300043) and GetEventFlag(1049304329) and GetEventFlag(1049304330), 21, 99999045, -1)
			#random all undefeated bosses (prog) (dlc excluded) (unlocks with tier 11)
			AddTalkListDataIf(not GetEventFlag(6951) and not GetEventFlag(1049304331) and GetEventFlag(1049304324), 22, 99999044, -1)
			#random all bosses with remaining items (prog) (dlc excluded) (unlocks with tier 11 and ng+) (hide if using rando drops)
			AddTalkListDataIf(not GetEventFlag(6951) and not GetEventFlag(1049300055) and not GetEventFlag(1049300061) and not GetEventFlag(1049304334) and GetEventFlag(1049304324) and GetEventFlag(1049304330), 23, 99999045, -1)
			#random all bosses (dlc is detected by emevd)
			AddTalkListDataIf(GetEventFlag(1049304330), 1, 99998407, -1)
			#random remembrance
			AddTalkListDataIf(GetEventFlag(1049304330), 2, 99998408, -1)
			#random great enemies
			AddTalkListDataIf(GetEventFlag(1049304330), 3, 99998409, -1)
			#random minor bosses
			AddTalkListDataIf(GetEventFlag(1049304330), 4, 99998410, -1)
			#random dlc main
			AddTalkListDataIf(GetEventFlag(6951) and GetEventFlag(1049304330), 5, 99998411, -1)
			#random dlc minor
			AddTalkListDataIf(GetEventFlag(6951) and GetEventFlag(1049304330), 6, 99998412, -1)
			#enable sequential mode
			AddTalkListDataIf(GetEventFlag(1049300056) == 0, 7, 99998503, -1)
			#disable sequential mode
			AddTalkListDataIf(GetEventFlag(1049300056) == 1, 8, 99998504, -1)
			#sequential explanation
			AddTalkListData(10, 99999065, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#random all bosses (dlc is detected by emevd)
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302245, 1)
			#random remembrance
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302246, 1)
			#random great enemies
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302247, 1)
			#random minor bosses
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302248, 1)
			#random dlc main
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302249, 1)
			#random dlc minor
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302250, 1)
			#enable sequential
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049300056, 1)
			#disable sequential
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049300056, 0)
			#sequential explanation
			elif GetTalkListEntryResult() == 10:
				pass
			#random all undefeated bosses (prog) (dlc included)
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302251, 1)
				Quit()
			#random all bosses with unobtained items (prog) (dlc included)
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302252, 1)
				Quit()
			#random all undefeated bosses (prog) (dlc excluded)
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302253, 1)
				Quit()
			#random all bosses with unobtained items (prog) (dlc excluded)
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302254, 1)
				Quit()
			else:
				return 0
		#sandbox mode
		else:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			#random all bosses (dlc is detected by emevd)
			AddTalkListData(1, 99998407, -1)
			#random remembrance
			AddTalkListData(2, 99998408, -1)
			#random great enemies
			AddTalkListData(3, 99998409, -1)
			#random minor bosses
			AddTalkListData(4, 99998410, -1)
			#random dlc main
			AddTalkListDataIf(GetEventFlag(6951) == 1, 5, 99998411, -1)
			#random dlc minor
			AddTalkListDataIf(GetEventFlag(6951) == 1, 6, 99998412, -1)
			#enable sequential
			AddTalkListDataIf(GetEventFlag(1049300056) == 0, 7, 99998503, -1)
			#disable sequential
			AddTalkListDataIf(GetEventFlag(1049300056) == 1, 8, 99998504, -1)
			#sequential explanation
			AddTalkListData(10, 99999065, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#random all bosses (dlc is detected by emevd)
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302245, 1)
			#random remembrance
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302246, 1)
			#random great enemies
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302247, 1)
			#random minor bosses
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302248, 1)
			#random dlc main
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302249, 1)
			#random dlc minor
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302250, 1)
			#enable sequential
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049300056, 1)
			#disable sequential
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049300056, 0)
			#sequential explanation
			elif GetTalkListEntryResult() == 10:
				pass
			else:
				return 0
			
# boss rush
def t324001110_21():
	while True:
		c1_110()
		ClearTalkListData()
		# remembrance + dlc main
		AddTalkListDataIf(GetEventFlag(6951) == 1, 1, 99998487, -1)
		# remembrance (base game)
		AddTalkListData(2, 99998488, -1)
		# dlc main
		AddTalkListDataIf(GetEventFlag(6951) == 1, 3, 99998489, -1)
		# custom 1
		AddTalkListData(10, 99998490, -1)
		# custom 2
		AddTalkListData(11, 99998491, -1)
		# custom 3
		AddTalkListData(12, 99998492, -1)
		# custom 4
		AddTalkListData(13, 99998493, -1)
		# custom 5
		AddTalkListData(14, 99998494, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049302270, 1)
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049302271, 1)
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(1049302272, 1)
		elif GetTalkListEntryResult() == 10:
			SetEventFlag(1049302280, 1)
		elif GetTalkListEntryResult() == 11:
			SetEventFlag(1049302281, 1)
		elif GetTalkListEntryResult() == 12:
			SetEventFlag(1049302282, 1)
		elif GetTalkListEntryResult() == 13:
			SetEventFlag(1049302283, 1)
		elif GetTalkListEntryResult() == 14:
			SetEventFlag(1049302284, 1)
		else:
			return 0
			
# item randomization options
def t324001110_40():
	while True:
		c1_110()
		ClearTalkListData()
		#partial randomization (disabled)
		AddTalkListDataIf(not GetEventFlag(1049300062), 1, 99998427, -1)
		#partial randomization (enabled)
		AddTalkListDataIf(GetEventFlag(1049300062), 1, 99998428, -1)
		#full randomization (disabled)
		AddTalkListDataIf(not GetEventFlag(1049300055), 2, 99998425, -1)
		#full randomization (enabled)
		AddTalkListDataIf(GetEventFlag(1049300055), 2, 99998426, -1)
		#full randomization (one of each type) (disabled)
		AddTalkListDataIf(not GetEventFlag(1049300061), 8, 99999134, -1)
		#full randomization (one of each type) (enabled)
		AddTalkListDataIf(GetEventFlag(1049300061), 8, 99999133, -1)
		#no randomization (disabled)
		AddTalkListDataIf(not GetEventFlag(1049300063), 3, 99998505, -1)
		#no randomization (enabled)
		AddTalkListDataIf(GetEventFlag(1049300063), 3, 99998506, -1)
		#dlc item drops: on
		AddTalkListDataIf(not GetEventFlag(6951) and GetEventFlag(1049300064), 4, 99999130, -1)
		#dlc item drops: off
		AddTalkListDataIf(not GetEventFlag(6951) and not GetEventFlag(1049300064), 4, 99999132, -1)
		#partial randomization explanation
		AddTalkListData(5, 99998512, -1)
		#full randomization explanation
		AddTalkListData(6, 99998513, -1)
		#no randomization explanation
		AddTalkListData(7, 99998514, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049300062, 1)
			SetEventFlag(1049300055, 0)
			SetEventFlag(1049300063, 0)
			SetEventFlag(1049300061, 0)
			pass
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049300062, 0)
			SetEventFlag(1049300055, 1)
			SetEventFlag(1049300063, 0)
			SetEventFlag(1049300061, 0)
			pass
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(1049300062, 0)
			SetEventFlag(1049300055, 0)
			SetEventFlag(1049300063, 1)
			SetEventFlag(1049300061, 0)
			pass
		elif GetTalkListEntryResult() == 8:
			SetEventFlag(1049300062, 0)
			SetEventFlag(1049300055, 0)
			SetEventFlag(1049300063, 0)
			SetEventFlag(1049300061, 1)
			pass
		#disable dlc item drops
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049300064):
			SetEventFlag(1049300064, 0)
		#enable dlc item drops
		elif GetTalkListEntryResult() == 4 and not GetEventFlag(1049300064):
			OpenGenericDialog(8, 99999131, 3, 4, 2)
			assert not CheckSpecificPersonGenericDialogIsOpen(0)
			if GetGenericDialogButtonResult() == 1:
				SetEventFlag(1049300064, 1)
			else:
				pass
		#explanations
		elif GetTalkListEntryResult() == 5 or GetTalkListEntryResult() == 6 or GetTalkListEntryResult() == 7:
			pass
		else:
			return 0
			
#advanced options/cheats
def t324001110_50():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#force unlock all tiers and ng+
		AddTalkListDataIf(not GetEventFlag(1049304329), 1, 99999048, -1)
		#all tiers already unlocked and ng+ triggered
		AddTalkListDataIf(GetEventFlag(1049304329), 2, 99999049, -1)
		#enable boss replay in ng
		AddTalkListDataIf(not GetEventFlag(1049304330), 3, 99999061, -1)
		#boss replay already unlocked
		AddTalkListDataIf(GetEventFlag(1049304330), 4, 99999062, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#force unlock all tiers and ng+
		if GetTalkListEntryResult() == 1:
			OpenGenericDialog(8, 99999050, 3, 4, 2)
			assert not CheckSpecificPersonGenericDialogIsOpen(0)
			if GetGenericDialogButtonResult() == 1:
				SetEventFlag(1049302420, 1)
				return 0
			else:
				pass
		#all tiers already unlocked and ng+ triggered
		elif GetTalkListEntryResult() == 2:
			pass
		#enable boss replay in ng
		elif GetTalkListEntryResult() == 3:
			OpenGenericDialog(8, 99999063, 3, 4, 2)
			assert not CheckSpecificPersonGenericDialogIsOpen(0)
			if GetGenericDialogButtonResult() == 1:
				SetEventFlag(1049304330, 1)
				return 0
			else:
				pass
		#boss replay already unlocked
		elif GetTalkListEntryResult() == 4:
			pass
		else:
			return 0
			
#warp choice after boss defeat
def t324001110_51():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#disable warp choice (boss rush)
		AddTalkListDataIf(GetEventFlag(1049300093), 1, 99999053, -1)
		#enable warp choice (boss rush)
		AddTalkListDataIf(not GetEventFlag(1049300093), 2, 99999054, -1)
		#disable warp choice (tier sequential) (prog only)
		AddTalkListDataIf(GetEventFlag(1049300057) and GetEventFlag(1049300094), 3, 99999055, -1)
		#enable warp choice (tier sequential) (prog only)
		AddTalkListDataIf(GetEventFlag(1049300057) and not GetEventFlag(1049300094), 4, 99999056, -1)
		#disable warp choice (random endless)
		AddTalkListDataIf(GetEventFlag(1049300095), 5, 99999057, -1)
		#enable warp choice (random endless)
		AddTalkListDataIf(not GetEventFlag(1049300095), 6, 99999058, -1)
		#explanation 1
		AddTalkListData(7, 99999059, -1)
		#explanation 2
		AddTalkListData(8, 99999060, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#disable warp choice (boss rush)
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049300093, 0)
		#enable warp choice (boss rush)
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049300093, 1)
		#disable warp choice (tier sequential) (prog only)
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(1049300094, 0)
		#enable warp choice (tier sequential) (prog only)
		elif GetTalkListEntryResult() == 4:
			SetEventFlag(1049300094, 1)
		#disable warp choice (random endless)
		elif GetTalkListEntryResult() == 5:
			SetEventFlag(1049300095, 0)
		#enable warp choice (random endless)
		elif GetTalkListEntryResult() == 6:
			SetEventFlag(1049300095, 1)
		#explanation 1
		elif GetTalkListEntryResult() == 7:
			pass
		#explanation 2
		elif GetTalkListEntryResult() == 8:
			pass
		else:
			return 0
			
#boss death dialogue options
def t324001110_52():
	while True:
		c1_110()
		ClearTalkListData()
		#allow skipping dialogue (disabled)
		AddTalkListDataIf(GetEventFlag(1049300500), 1, 99999072, -1)
		#allow skipping dialogue (enabled)
		AddTalkListDataIf(not GetEventFlag(1049300500), 1, 99999074, -1)
		#always play full dialogue (disabled)
		AddTalkListDataIf(not GetEventFlag(1049300500), 2, 99999073, -1)
		#always play full dialogue (enabled)
		AddTalkListDataIf(GetEventFlag(1049300500), 2, 99999075, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049300500, 0)
			pass
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049300500, 1)
			pass
		else:
			return 0

#tier 1
def t324001110_2():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300006), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#soldier of godrick
		AddTalkListDataIf(GetEventFlag(1049304100) == 0,1, 15000437, -1)
		#soldier of godrick (all items)
		AddTalkListDataIf(GetEventFlag(1049300100) == 1,1, 16000001, -1)
		#soldier of godrick (defeated)
		AddTalkListDataIf(GetEventFlag(1049304100) == 1,1, 16000000, -1)
		#beastman groveside
		AddTalkListDataIf(GetEventFlag(1049304101) == 0,2, 15000438, -1)
		#beastman groveside (all items)
		AddTalkListDataIf(GetEventFlag(1049300101) == 1,2, 16000003, -1)
		#beastman groveside (defeated)
		AddTalkListDataIf(GetEventFlag(1049304101) == 1,2, 16000002, -1)
		#black knife assassin deathtouched
		AddTalkListDataIf(GetEventFlag(1049304102) == 0,3, 15000523, -1)
		#black knife assassin deathtouched (all items)
		AddTalkListDataIf(GetEventFlag(1049300102) == 1,3, 16000005, -1)
		#black knife assassin deathtouched (defeated)
		AddTalkListDataIf(GetEventFlag(1049304102) == 1,3, 16000004, -1)
		#erdtree burial watchdog stormfoot
		AddTalkListDataIf(GetEventFlag(1049304103) == 0,4, 15000426, -1)
		#erdtree burial watchdog stormfoot (all items)
		AddTalkListDataIf(GetEventFlag(1049300103) == 1,4, 16000007, -1)
		#erdtree burial watchdog stormfoot (defeated)
		AddTalkListDataIf(GetEventFlag(1049304103) == 1,4, 16000006, -1)
		#grave warden duelist murkwater
		AddTalkListDataIf(GetEventFlag(1049304104) == 0,5, 15000421, -1)
		#grave warden duelist murkwater (all items)
		AddTalkListDataIf(GetEventFlag(1049300104) == 1,5, 16000009, -1)
		#grave warden duelist murkwater (defeated)
		AddTalkListDataIf(GetEventFlag(1049304104) == 1,5, 16000008, -1)
		#guardian golem
		AddTalkListDataIf(GetEventFlag(1049304105) == 0,6, 15000444, -1)
		#guardian golem (all items)
		AddTalkListDataIf(GetEventFlag(1049300105) == 1,6, 16000011, -1)
		#guardian golem (defeated)
		AddTalkListDataIf(GetEventFlag(1049304105) == 1,6, 16000010, -1)
		#mad pumpkin
		AddTalkListDataIf(GetEventFlag(1049304106) == 0,7, 15000515, -1)
		#mad pumpkin (all items)
		AddTalkListDataIf(GetEventFlag(1049300106) == 1,7, 16000013, -1)
		#mad pumpkin (defeated)
		AddTalkListDataIf(GetEventFlag(1049304106) == 1,7, 16000012, -1)
		#patches
		AddTalkListDataIf(GetEventFlag(1049304107) == 0,8, 15000443, -1)
		#patches (all items)
		AddTalkListDataIf(GetEventFlag(1049300107) == 1,8, 16000015, -1)
		#patches (defeated)
		AddTalkListDataIf(GetEventFlag(1049304107) == 1,8, 16000014, -1)
		#stonedigger limgrave
		AddTalkListDataIf(GetEventFlag(1049304108) == 0,9, 99993010, -1)
		#stonedigger limgrave (all items)
		AddTalkListDataIf(GetEventFlag(1049300108) == 1,9, 16000017, -1)
		#stonedigger limgrave (defeated)
		AddTalkListDataIf(GetEventFlag(1049304108) == 1,9, 16000016, -1)
		#demi-human chiefs
		AddTalkListDataIf(GetEventFlag(1049304109) == 0,10, 15000439, -1)
		#demi-human chiefs (all items)
		AddTalkListDataIf(GetEventFlag(1049300109) == 1,10, 16000019, -1)
		#demi-human chiefs (defeated)
		AddTalkListDataIf(GetEventFlag(1049304109) == 1,10, 16000018, -1)
		#cemetery shade tombsward
		AddTalkListDataIf(GetEventFlag(1049304110) == 0,11, 99992002, -1)
		#cemetery shade tombsward (all items)
		AddTalkListDataIf(GetEventFlag(1049300110) == 1,11, 16000021, -1)
		#cemetery shade tombsward (defeated)
		AddTalkListDataIf(GetEventFlag(1049304110) == 1,11, 16000020, -1)
		#erdtree burial watchdog impaler's
		AddTalkListDataIf(GetEventFlag(1049304111) == 0,12, 15000427, -1)
		#erdtree burial watchdog impaler's (all items)
		AddTalkListDataIf(GetEventFlag(1049300111) == 1,12, 16000023, -1)
		#erdtree burial watchdog impaler's (defeated)
		AddTalkListDataIf(GetEventFlag(1049304111) == 1,12, 16000022, -1)
		#miranda
		AddTalkListDataIf(GetEventFlag(1049304112) == 0,13, 15000452, -1)
		#miranda (all items)
		AddTalkListDataIf(GetEventFlag(1049300112) == 1,13, 16000025, -1)
		#miranda (defeated)
		AddTalkListDataIf(GetEventFlag(1049304112) == 1,13, 16000024, -1)
		#runebear
		AddTalkListDataIf(GetEventFlag(1049304113) == 0,14, 15000445, -1)
		#runebear (all items)
		AddTalkListDataIf(GetEventFlag(1049300113) == 1,14, 16000027, -1)
		#runebear (defeated)
		AddTalkListDataIf(GetEventFlag(1049304113) == 1,14, 16000026, -1)
		#scaly misbegotten
		AddTalkListDataIf(GetEventFlag(1049304114) == 0,15, 15000457, -1)
		#scaly misbegotten (all items)
		AddTalkListDataIf(GetEventFlag(1049300114) == 1,15, 16000029, -1)
		#scaly misbegotten (defeated)
		AddTalkListDataIf(GetEventFlag(1049304114) == 1,15, 16000028, -1)	 
		#leonine
		AddTalkListDataIf(GetEventFlag(1049304115) == 0,16, 16000500, -1)
		#leonine (all items)
		AddTalkListDataIf(GetEventFlag(1049300115) == 1,16, 16000031, -1)
		#leonine (defeated)
		AddTalkListDataIf(GetEventFlag(1049304115) == 1,16, 16000030, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302501, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302521, 1)
		#soldier of godrick
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304100) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302131, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304100) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#beastman groveside
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304101) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302132, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304101) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#black knife assassin deathtouched
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304102) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302107, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304102) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree burial watchdog stormfoot
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304103) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302108, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304103) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#grave warden duelist murkwater
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304104) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302109, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304104) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#guardian golem
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304105) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302134, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304105) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#mad pumpkin
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304106) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302153, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304106) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#patches
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304107) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302135, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304107) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#stonedigger limgrave
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304108) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302154, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304108) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#demi-human chiefs
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304109) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302133, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304109) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#cemetery shade tombsward
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304110) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302110, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304110) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree burial watchdog impaler's
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304111) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302111, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304111) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#miranda
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304112) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302136, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304112) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#runebear
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304113) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302137, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304113) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#scaly misbegotten
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304114) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302155, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304114) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#leonine
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304115) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302017, 1)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304115) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#tier 2
def t324001110_3():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300007), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#darriwil
		AddTalkListDataIf(GetEventFlag(1049304117) == 0,1, 15000382, -1)
		#darriwil (all items)
		AddTalkListDataIf(GetEventFlag(1049300117) == 1,1, 16000035, -1)
		#darriwil (defeated)
		AddTalkListDataIf(GetEventFlag(1049304117) == 1,1, 16000034, -1)
		#deathbird limgrave
		AddTalkListDataIf(GetEventFlag(1049304118) == 0,3, 15000529, -1)
		#deathbird limgrave (all items)
		AddTalkListDataIf(GetEventFlag(1049300118) == 1,3, 16000037, -1)
		#deathbird limgrave (defeated)
		AddTalkListDataIf(GetEventFlag(1049304118) == 1,3, 16000036, -1)
		#night's cavalry limgrave
		AddTalkListDataIf(GetEventFlag(1049304119) == 0,4, 15000537, -1)
		#night's cavalry limgrave (all items)
		AddTalkListDataIf(GetEventFlag(1049300119) == 1,4, 16000039, -1)
		#night's cavalry limgrave (defeated)
		AddTalkListDataIf(GetEventFlag(1049304119) == 1,4, 16000038, -1)
		#tibia limgrave
		AddTalkListDataIf(GetEventFlag(1049304120) == 0,5, 13040157, -1)
		#tibia limgrave (all items)
		AddTalkListDataIf(GetEventFlag(1049300120) == 1,5, 16000041, -1)
		#tibia limgrave (defeated)
		AddTalkListDataIf(GetEventFlag(1049304120) == 1,5, 16000040, -1)
		#tree sentinel
		AddTalkListDataIf(GetEventFlag(1049304121) == 0,6, 13040153, -1)
		#tree sentinel (all items)
		AddTalkListDataIf(GetEventFlag(1049300121) == 1,6, 16000043, -1)
		#tree sentinel (defeated)
		AddTalkListDataIf(GetEventFlag(1049304121) == 1,6, 16000042, -1)
		#ancient hero of zamor gaol
		AddTalkListDataIf(GetEventFlag(1049304122) == 0,7, 15000384, -1)
		#ancient hero of zamor gaol (all items)
		AddTalkListDataIf(GetEventFlag(1049300122) == 1,7, 16000045, -1)
		#ancient hero of zamor gaol (defeated)
		AddTalkListDataIf(GetEventFlag(1049304122) == 1,7, 16000044, -1)
		#bell bearing limgrave
		AddTalkListDataIf(GetEventFlag(1049304116) == 0,2, 13040158, -1)
		#bell bearing limgrave (all items)
		AddTalkListDataIf(GetEventFlag(1049300116) == 1,2, 16000033, -1)
		#bell bearing limgrave (defeated)
		AddTalkListDataIf(GetEventFlag(1049304116) == 1,2, 16000032, -1)
		#deathbird weeping
		AddTalkListDataIf(GetEventFlag(1049304123) == 0,8, 13040152, -1)
		#deathbird weeping (all items)
		AddTalkListDataIf(GetEventFlag(1049300123) == 1,8, 16000047, -1)
		#deathbird weeping (defeated)
		AddTalkListDataIf(GetEventFlag(1049304123) == 1,8, 16000046, -1)
		#erdtree avatar weeping
		AddTalkListDataIf(GetEventFlag(1049304124) == 0,9, 15000373, -1)
		#erdtree avatar weeping (all items)
		AddTalkListDataIf(GetEventFlag(1049300124) == 1,9, 16000049, -1)
		#erdtree avatar weeping (defeated)
		AddTalkListDataIf(GetEventFlag(1049304124) == 1,9, 16000048, -1)
		#night's cavalry weeping
		AddTalkListDataIf(GetEventFlag(1049304125) == 0,10, 15000538, -1)
		#night's cavalry weeping (all items)
		AddTalkListDataIf(GetEventFlag(1049300125) == 1,10, 16000051, -1)
		#night's cavalry weeping (defeated)
		AddTalkListDataIf(GetEventFlag(1049304125) == 1,10, 16000050, -1)
		#margit
		AddTalkListDataIf(GetEventFlag(1049304126) == 0,11, 16000501, -1)
		#margit (all items)
		AddTalkListDataIf(GetEventFlag(1049300126) == 1,11, 16000053, -1)
		#margit (defeated)
		AddTalkListDataIf(GetEventFlag(1049304126) == 1,11, 16000052, -1)
		#godrick
		AddTalkListDataIf(GetEventFlag(1049304127) == 0,12, 16000502, -1)
		#godrick (all items)
		AddTalkListDataIf(GetEventFlag(1049300127) == 1,12, 16000055, -1)
		#godrick (defeated)
		AddTalkListDataIf(GetEventFlag(1049304127) == 1,12, 16000054, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302502, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302522, 1)
		#bloodhound knight darriwil
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304117) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302097, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304117) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathbird limgrave
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304118) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302051, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304118) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry limgrave
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304119) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302052, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304119) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#tibia limgrave
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304120) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302053, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304120) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#tree sentinel
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304121) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302054, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304121) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ancient hero of zamor gaol
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304122) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302098, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304122) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#bell bearing limgrave
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304116) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302050, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304116) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathbird weeping
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304123) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302055, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304123) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree avatar weeping
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304124) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302056, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304124) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry weeping
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304125) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302057, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304125) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#margit
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304126) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302018, 1049302724, 1049304126)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304126) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godrick
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304127) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302000, 1049302716, 1049304127)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304127) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#tier 3
def t324001110_4():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300008), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#crucible knight gaol
		AddTalkListDataIf(GetEventFlag(1049304128) == 0,1, 15000383, -1)
		#crucible knight gaol (all items)
		AddTalkListDataIf(GetEventFlag(1049300128) == 1,1, 16000057, -1)
		#crucible knight gaol (defeated)
		AddTalkListDataIf(GetEventFlag(1049304128) == 1,1, 16000056, -1)
		#flying dragon agheel
		AddTalkListDataIf(GetEventFlag(1049304130) == 0,2, 13040134, -1)
		#flying dragon agheel (all items)
		AddTalkListDataIf(GetEventFlag(1049300130) == 1,2, 16000061, -1)
		#flying dragon agheel (defeated)
		AddTalkListDataIf(GetEventFlag(1049304130) == 1,2, 16000060, -1)
		#ancestor spirit
		AddTalkListDataIf(GetEventFlag(1049304131) == 0,3, 13040128, -1)
		#ancestor spirit (all items)
		AddTalkListDataIf(GetEventFlag(1049300131) == 1,3, 16000063, -1)
		#ancestor spirit (defeated)
		AddTalkListDataIf(GetEventFlag(1049304131) == 1,3, 16000062, -1)
		#black knife assassin black knife
		AddTalkListDataIf(GetEventFlag(1049304132) == 0,4, 15000423, -1)
		#black knife assassin black knife (all items)
		AddTalkListDataIf(GetEventFlag(1049300132) == 1,4, 16000065, -1)
		#black knife assassin black knife (defeated)
		AddTalkListDataIf(GetEventFlag(1049304132) == 1,4, 16000064, -1)
		#bloodhound knight
		AddTalkListDataIf(GetEventFlag(1049304133) == 0,5, 15000447, -1)
		#bloodhound knight (all items)
		AddTalkListDataIf(GetEventFlag(1049300133) == 1,5, 16000067, -1)
		#bloodhound knight (defeated)
		AddTalkListDataIf(GetEventFlag(1049304133) == 1,5, 16000066, -1)
		#cemetery shade black knife
		AddTalkListDataIf(GetEventFlag(1049304134) == 0,6, 99992003, -1)
		#cemetery shade black knife (all items)
		AddTalkListDataIf(GetEventFlag(1049300134) == 1,6, 16000069, -1)
		#cemetery shade black knife (defeated)
		AddTalkListDataIf(GetEventFlag(1049304134) == 1,6, 16000068, -1)
		#cleanrot
		AddTalkListDataIf(GetEventFlag(1049304135) == 0,7, 15000446, -1)
		#cleanrot (all items)
		AddTalkListDataIf(GetEventFlag(1049300135) == 1,7, 16000071, -1)
		#cleanrot (defeated)
		AddTalkListDataIf(GetEventFlag(1049304135) == 1,7, 16000070, -1)
		#crystalian lucaria
		AddTalkListDataIf(GetEventFlag(1049304136) == 0,8, 15000458, -1)
		#crystalian lucaria (all items)
		AddTalkListDataIf(GetEventFlag(1049300136) == 1,8, 16000073, -1)
		#crystalian lucaria (defeated)
		AddTalkListDataIf(GetEventFlag(1049304136) == 1,8, 16000072, -1)
		#erdtree burial watchdog cliffbottom
		AddTalkListDataIf(GetEventFlag(1049304138) == 0,9, 15000428, -1)
		#erdtree burial watchdog cliffbottom (all items)
		AddTalkListDataIf(GetEventFlag(1049300138) == 1,9, 16000075, -1)
		#erdtree burial watchdog cliffbottom (defeated)
		AddTalkListDataIf(GetEventFlag(1049304138) == 1,9, 16000074, -1)
		#grafted scion
		AddTalkListDataIf(GetEventFlag(1049304137) == 0,10, 13040156, -1)
		#grafted scion (all items)
		AddTalkListDataIf(GetEventFlag(1049300137) == 1,10, 16000077, -1)
		#grafted scion (defeated)
		AddTalkListDataIf(GetEventFlag(1049304137) == 1,10, 16000076, -1)
		#omenkiller
		AddTalkListDataIf(GetEventFlag(1049304167) == 0,11, 15000375, -1)
		#omenkiller (all items)
		AddTalkListDataIf(GetEventFlag(1049300167) == 1,11, 16000135, -1)
		#omenkiller (defeated)
		AddTalkListDataIf(GetEventFlag(1049304167) == 1,11, 16000134, -1)
		#royal revenant
		AddTalkListDataIf(GetEventFlag(1049304139) == 0,12, 15000514, -1)
		#royal revenant (all items)
		AddTalkListDataIf(GetEventFlag(1049300139) == 1,12, 16000079, -1)
		#royal revenant (defeated)
		AddTalkListDataIf(GetEventFlag(1049304139) == 1,12, 16000078, -1)
		#spiritcaller snail road's end
		AddTalkListDataIf(GetEventFlag(1049304140) == 0,13, 15000431, -1)
		#spiritcaller snail road's end (all items)
		AddTalkListDataIf(GetEventFlag(1049300140) == 1,13, 16000081, -1)
		#spiritcaller snail road's end (defeated)
		AddTalkListDataIf(GetEventFlag(1049304140) == 1,13, 16000080, -1)
		#ulcerated tree spirit fringefolk
		AddTalkListDataIf(GetEventFlag(1049304141) == 0,14, 15000519, -1)
		#ulcerated tree spirit fringefolk (all items)
		AddTalkListDataIf(GetEventFlag(1049300141) == 1,14, 16000083, -1)
		#ulcerated tree spirit fringefolk (defeated)
		AddTalkListDataIf(GetEventFlag(1049304141) == 1,14, 16000082, -1)
		#dragonkin nokstella
		AddTalkListDataIf(GetEventFlag(1049304129) == 0,15, 16000503, -1)
		#dragonkin nokstella (all items)
		AddTalkListDataIf(GetEventFlag(1049300129) == 1,15, 16000059, -1)
		#dragonkin nokstella (defeated)
		AddTalkListDataIf(GetEventFlag(1049304129) == 1,15, 16000058, -1)
		#red wolf of radagon
		AddTalkListDataIf(GetEventFlag(1049304142) == 0,16, 16000504, -1)
		#red wolf of radagon (all items)
		AddTalkListDataIf(GetEventFlag(1049300142) == 1,16, 16000085, -1)
		#red wolf of radagon (defeated)
		AddTalkListDataIf(GetEventFlag(1049304142) == 1,16, 16000084, -1)
		#royal knight loretta
		AddTalkListDataIf(GetEventFlag(1049304143) == 0,17, 16000505, -1)
		#royal knight loretta (all items)
		AddTalkListDataIf(GetEventFlag(1049300143) == 1,17, 16000087, -1)
		#royal knight loretta (defeated)
		AddTalkListDataIf(GetEventFlag(1049304143) == 1,17, 16000086, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302503, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302523, 1)
		#crucible knight gaol
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304128) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302099, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304128) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#flying dragon agheel
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304130) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302020, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304130) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ancestor spirit
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304131) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302021, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304131) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#black knife assassin black knife
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304132) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302112, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304132) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#bloodhound knight
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304133) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302138, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304133) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#cemetery shade black knife
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304134) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302113, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304134) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#cleanrot
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304135) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302139, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304135) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#crystalian lucaria
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304136) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302156, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304136) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree burial watchdog cliffbottom
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304138) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302114, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304138) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#grafted scion
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304137) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302058, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304137) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#omenkiller
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304167) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302066, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304167) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#royal revenant
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304139) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302157, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304139) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#spiritcaller snail road's end
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304140) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302115, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304140) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ulcerated tree spirit fringefolk
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304141) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302116, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304141) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#dragonkin nokstella
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304129) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302019, 1049302708, 1049304129)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304129) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#red wolf of radagon
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304142) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302022, 1)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304142) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#royal knight loretta
		elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304143) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302023, 1)
		elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304143) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
			
#tier 4
def t324001110_5():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300009), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#adan
		AddTalkListDataIf(GetEventFlag(1049304144) == 0,1, 15000386, -1)
		#adan (all items)
		AddTalkListDataIf(GetEventFlag(1049300144) == 1,1, 16000089, -1)
		#adan (defeated)
		AddTalkListDataIf(GetEventFlag(1049304144) == 1,1, 16000088, -1)
		#cemetery shade caelid
		AddTalkListDataIf(GetEventFlag(1049304145) == 0,2, 15000424, -1)
		#cemetery shade caelid (all items)
		AddTalkListDataIf(GetEventFlag(1049300145) == 1,2, 16000091, -1)
		#cemetery shade caelid (defeated)
		AddTalkListDataIf(GetEventFlag(1049304145) == 1,2, 16000090, -1)
		#cleanrot x2
		AddTalkListDataIf(GetEventFlag(1049304146) == 0,3, 99992001, -1)
		#cleanrot x2 (all items)
		AddTalkListDataIf(GetEventFlag(1049300146) == 1,3, 16000093, -1)
		#cleanrot x2 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304146) == 1,3, 16000092, -1)
		#crystalian x2 academy 
		AddTalkListDataIf(GetEventFlag(1049304147) == 0,4, 15000448, -1)
		#crystalian x2 academy (all items)
		AddTalkListDataIf(GetEventFlag(1049300147) == 1,4, 16000111, -1)
		#crystalian x2 academy (defeated)
		AddTalkListDataIf(GetEventFlag(1049304147) == 1,4, 16000110, -1)
		#deathbird liurnia
		AddTalkListDataIf(GetEventFlag(1049304160) == 0,13, 15000531, -1)
		#deathbird liurnia (all items)
		AddTalkListDataIf(GetEventFlag(1049300160) == 1,13, 16000121, -1)
		#deathbird liurnia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304160) == 1,13, 16000120, -1)
		#demi-human queen gilika
		AddTalkListDataIf(GetEventFlag(1049304162) == 0,14, 15000517, -1)
		#demi-human queen gilika (all items)
		AddTalkListDataIf(GetEventFlag(1049300162) == 1,14, 16000125, -1)
		#demi-human queen gilika (defeated)
		AddTalkListDataIf(GetEventFlag(1049304162) == 1,14, 16000124, -1)
		#erdtree burial watchdog x2
		AddTalkListDataIf(GetEventFlag(1049304148) == 0,5, 15000429, -1)
		#erdtree burial watchdog x2 (all items)
		AddTalkListDataIf(GetEventFlag(1049300148) == 1,5, 16000095, -1)
		#erdtree burial watchdog x2 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304148) == 1,5, 16000094, -1)
		#frenzied duelist
		AddTalkListDataIf(GetEventFlag(1049304150) == 0,7, 15000449, -1)
		#frenzied duelist (all items)
		AddTalkListDataIf(GetEventFlag(1049300150) == 1,7, 16000099, -1)
		#frenzied duelist (defeated)
		AddTalkListDataIf(GetEventFlag(1049304150) == 1,7, 16000098, -1)
		#mad pumpkin x2
		AddTalkListDataIf(GetEventFlag(1049304151) == 0,8, 99992009, -1)
		#mad pumpkin x2 (all items)
		AddTalkListDataIf(GetEventFlag(1049300151) == 1,8, 16000101, -1)
		#mad pumpkin x2 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304151) == 1,8, 16000100, -1)
		#night's cavalry liurnia east
		AddTalkListDataIf(GetEventFlag(1049304165) == 0,15, 15000539, -1)
		#night's cavalry liurnia east (all items)
		AddTalkListDataIf(GetEventFlag(1049300165) == 1,15, 16000131, -1)
		#night's cavalry liurnia east (defeated)
		AddTalkListDataIf(GetEventFlag(1049304165) == 1,15, 16000130, -1)
		#nox duo
		AddTalkListDataIf(GetEventFlag(1049304153) == 0,10, 15000381, -1)
		#nox duo (all items)
		AddTalkListDataIf(GetEventFlag(1049300153) == 1,10, 16000105, -1)
		#nox duo (defeated)
		AddTalkListDataIf(GetEventFlag(1049304153) == 1,10, 16000104, -1)
		#magma wyrm makar
		AddTalkListDataIf(GetEventFlag(1049304154) == 0,11, 16000506, -1)
		#magma wyrm makar (all items)
		AddTalkListDataIf(GetEventFlag(1049300154) == 1,11, 16000107, -1)
		#magma wyrm makar (defeated)
		AddTalkListDataIf(GetEventFlag(1049304154) == 1,11, 16000106, -1)
		#rennala
		AddTalkListDataIf(GetEventFlag(1049304155) == 0,12, 16000507, -1)
		#rennala (all items)
		AddTalkListDataIf(GetEventFlag(1049300155) == 1,12, 16000109, -1)
		#rennala (defeated)
		AddTalkListDataIf(GetEventFlag(1049304155) == 1,12, 16000108, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302504, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302524, 1)
		#adan
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304144) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302100, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304144) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#cemetery shade caelid
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304145) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302117, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304145) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#cleanrot x2
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304146) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302140, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304146) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#crystalian x2 academy
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304147) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302141, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304147) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathbird liurnia
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304160) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302061, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304160) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#demi-human queen gilika
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304162) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302161, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304162) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree burial watchdog x2
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304148) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302118, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304148) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#frenzied duelist
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304150) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302142, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304150) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#mad pumpkin x2
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304151) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302159, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304151) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry liurnia east
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304165) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302070, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304165) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#nox duo
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304153) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302059, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304153) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#magma wyrm makar
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304154) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302024, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304154) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#rennala
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304155) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302001, 1049302742, 1049304155)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304155) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#tier 5
def t324001110_6():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300010), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#abductor virgins
		AddTalkListDataIf(GetEventFlag(1049304156) == 0,1, 15000454, -1)
		#abductor virgins (all items)
		AddTalkListDataIf(GetEventFlag(1049300156) == 1,1, 16000113, -1)
		#abductor virgins (defeated)
		AddTalkListDataIf(GetEventFlag(1049304156) == 1,1, 16000112, -1)
		#ancient hero of zamor sainted hero
		AddTalkListDataIf(GetEventFlag(1049304157) == 0,2, 15000521, -1)
		#ancient hero of zamor sainted hero (all items)
		AddTalkListDataIf(GetEventFlag(1049300157) == 1,2, 16000115, -1)
		#ancient hero of zamor sainted hero (defeated)
		AddTalkListDataIf(GetEventFlag(1049304157) == 1,2, 16000114, -1)
		#bell bearing liurnia
		AddTalkListDataIf(GetEventFlag(1049304158) == 0,3, 15000708, -1)
		#bell bearing liurnia (all items)
		AddTalkListDataIf(GetEventFlag(1049300158) == 1,3, 16000117, -1)
		#bell bearing liurnia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304158) == 1,3, 16000116, -1)
		#bols
		AddTalkListDataIf(GetEventFlag(1049304159) == 0,4, 15000387, -1)
		#bols (all items)
		AddTalkListDataIf(GetEventFlag(1049300159) == 1,4, 16000119, -1)
		#bols (defeated)
		AddTalkListDataIf(GetEventFlag(1049304159) == 1,4, 16000118, -1)
		#deathrite liurnia
		AddTalkListDataIf(GetEventFlag(1049304161) == 0,6, 15000533, -1)
		#deathrite liurnia (all items)
		AddTalkListDataIf(GetEventFlag(1049300161) == 1,6, 16000123, -1)
		#deathrite liurnia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304161) == 1,6, 16000122, -1)
		#demi-human queen margot
		AddTalkListDataIf(GetEventFlag(1049304178) == 0,19, 15000441, -1)
		#demi-human queen margot (all items)
		AddTalkListDataIf(GetEventFlag(1049300178) == 1,19, 16000157, -1)
		#demi-human queen margot (defeated)
		AddTalkListDataIf(GetEventFlag(1049304178) == 1,19, 16000156, -1)
		#erdtree avatar liurnia east
		AddTalkListDataIf(GetEventFlag(1049304163) == 0,8, 15000525, -1)
		#erdtree avatar liurnia east (all items)
		AddTalkListDataIf(GetEventFlag(1049300163) == 1,8, 16000127, -1)
		#erdtree avatar liurnia east (defeated)
		AddTalkListDataIf(GetEventFlag(1049304163) == 1,8, 16000126, -1)
		#erdtree avatar liurnia west
		AddTalkListDataIf(GetEventFlag(1049304164) == 0,9, 15000524, -1)
		#erdtree avatar liurnia west (all items)
		AddTalkListDataIf(GetEventFlag(1049300164) == 1,9, 16000129, -1)
		#erdtree avatar liurnia west (defeated)
		AddTalkListDataIf(GetEventFlag(1049304164) == 1,9, 16000128, -1)
		#fallingstar sellia
		AddTalkListDataIf(GetEventFlag(1049304149) == 0,20, 15000511, -1)
		#fallingstar sellia (all items)
		AddTalkListDataIf(GetEventFlag(1049300149) == 1,20, 16000097, -1)
		#fallingstar sellia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304149) == 1,20, 16000096, -1)
		#kindred of rot seethewater
		AddTalkListDataIf(GetEventFlag(1049304182) == 0,21, 15000451, -1)
		#kindred of rot seethewater (all items)
		AddTalkListDataIf(GetEventFlag(1049300182) == 1,21, 16000165, -1)
		#kindred of rot seethewater (defeated)
		AddTalkListDataIf(GetEventFlag(1049304182) == 1,21, 16000164, -1)
		#magma wyrm gael
		AddTalkListDataIf(GetEventFlag(1049304152) == 0,22, 15000459, -1)
		#magma wyrm gael (all items)
		AddTalkListDataIf(GetEventFlag(1049300152) == 1,22, 16000103, -1)
		#magma wyrm gael (defeated)
		AddTalkListDataIf(GetEventFlag(1049304152) == 1,22, 16000102, -1)
		#night's cavalry liurnia north
		AddTalkListDataIf(GetEventFlag(1049304166) == 0,11, 15000701, -1)
		#night's cavalry liurnia north (all items)
		AddTalkListDataIf(GetEventFlag(1049300166) == 1,11, 16000133, -1)
		#night's cavalry liurnia north (defeated)
		AddTalkListDataIf(GetEventFlag(1049304166) == 1,11, 16000132, -1)
		#onyx lord gaol
		AddTalkListDataIf(GetEventFlag(1049304168) == 0,13, 15000388, -1)
		#onyx lord gaol (all items)
		AddTalkListDataIf(GetEventFlag(1049300168) == 1,13, 16000137, -1)
		#onyx lord gaol (defeated)
		AddTalkListDataIf(GetEventFlag(1049304168) == 1,13, 16000136, -1)
		#perfumer tricia
		AddTalkListDataIf(GetEventFlag(1049304169) == 0,14, 15000436, -1)
		#perfumer tricia (all items)
		AddTalkListDataIf(GetEventFlag(1049300169) == 1,14, 16000139, -1)
		#perfumer tricia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304169) == 1,14, 16000138, -1)
		#red wolf of the champion
		AddTalkListDataIf(GetEventFlag(1049304186) == 0,23, 15000435, -1)
		#red wolf of the champion (all items)
		AddTalkListDataIf(GetEventFlag(1049300186) == 1,23, 16000173, -1)
		#red wolf of the champion (defeated)
		AddTalkListDataIf(GetEventFlag(1049304186) == 1,23, 16000172, -1)
		#sanguine noble
		AddTalkListDataIf(GetEventFlag(1049304170) == 0,15, 15000516, -1)
		#sanguine noble (all items)
		AddTalkListDataIf(GetEventFlag(1049300170) == 1,15, 16000141, -1)
		#sanguine noble (defeated)
		AddTalkListDataIf(GetEventFlag(1049304170) == 1,15, 16000140, -1)
		#stonedigger altus
		AddTalkListDataIf(GetEventFlag(1049304171) == 0,16, 99992010, -1)
		#stonedigger altus (all items)
		AddTalkListDataIf(GetEventFlag(1049300171) == 1,16, 16000143, -1)
		#stonedigger altus (defeated)
		AddTalkListDataIf(GetEventFlag(1049304171) == 1,16, 16000142, -1)
		#tibia liurnia
		AddTalkListDataIf(GetEventFlag(1049304172) == 0,17, 15000722, -1)
		#tibia liurnia (all items)
		AddTalkListDataIf(GetEventFlag(1049300172) == 1,17, 16000145, -1)
		#tibia liurnia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304172) == 1,17, 16000144, -1)
		#elemer
		AddTalkListDataIf(GetEventFlag(1049304187) == 0,24, 16000508, -1)
		#elemer (all items)
		AddTalkListDataIf(GetEventFlag(1049300187) == 1,24, 16000175, -1)
		#elemer (defeated)
		AddTalkListDataIf(GetEventFlag(1049304187) == 1,24, 16000174, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302505, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302525, 1)
		#abductor virgins
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304156) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302143, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304156) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ancient hero of zamor sainted hero
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304157) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302119, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304157) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#bell bearing liurnia
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304158) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302060, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304158) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#bols
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304159) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302101, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304159) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathrite liurnia
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304161) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302062, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304161) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#demi-human queen margot
		elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304178) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302144, 1)
		elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304178) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree avatar liurnia east
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304163) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302064, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304163) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree avatar liurnia west
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304164) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302063, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304164) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#fallingstar sellia
		elif GetTalkListEntryResult() == 20 and (GetEventFlag(1049304149) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302158, 1)
		elif GetTalkListEntryResult() == 20 and GetEventFlag(1049304149) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#kindred of rot seethewater
		elif GetTalkListEntryResult() == 21 and (GetEventFlag(1049304182) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302145, 1)
		elif GetTalkListEntryResult() == 21 and GetEventFlag(1049304182) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#magma wyrm gael
		elif GetTalkListEntryResult() == 22 and (GetEventFlag(1049304152) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302160, 1)
		elif GetTalkListEntryResult() == 22 and GetEventFlag(1049304152) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry liurnia north
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304166) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302065, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304166) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#onyx lord gaol
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304168) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302102, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304168) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#perfumer tricia
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304169) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302120, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304169) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#red wolf of the champion
		elif GetTalkListEntryResult() == 23 and (GetEventFlag(1049304186) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302123, 1)
		elif GetTalkListEntryResult() == 23 and GetEventFlag(1049304186) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#sanguine noble
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304170) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302162, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304170) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#stonedigger altus
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304171) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302163, 1)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304171) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#tibia liurnia
		elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304172) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302067, 1)
		elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304172) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#elemer
		elif GetTalkListEntryResult() == 24 and (GetEventFlag(1049304187) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302027, 1)
		elif GetTalkListEntryResult() == 24 and GetEventFlag(1049304187) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#tier 6
def t324001110_7():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300011), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#battlemage hugues
		AddTalkListDataIf(GetEventFlag(1049304174) == 0,1, 15000389, -1)
		#battlemage hugues (all items)
		AddTalkListDataIf(GetEventFlag(1049300174) == 1,1, 16000149, -1)
		#battlemage hugues (defeated)
		AddTalkListDataIf(GetEventFlag(1049304174) == 1,1, 16000148, -1)
		#black knife assassin sage's
		AddTalkListDataIf(GetEventFlag(1049304190) == 0,16, 99993012, -1)
		#black knife assassin sage's (all items)
		AddTalkListDataIf(GetEventFlag(1049300190) == 1,16, 16000181, -1)
		#black knife assassin sage's (defeated)
		AddTalkListDataIf(GetEventFlag(1049304190) == 1,16, 16000180, -1)
		#commander o'neil
		AddTalkListDataIf(GetEventFlag(1049304175) == 0,2, 13040124, -1)
		#commander o'neil (all items)
		AddTalkListDataIf(GetEventFlag(1049300175) == 1,2, 16000151, -1)
		#commander o'neil (defeated)
		AddTalkListDataIf(GetEventFlag(1049304175) == 1,2, 16000150, -1)
		#crystalian x2 altus
		AddTalkListDataIf(GetEventFlag(1049304176) == 0,3, 15000442, -1)
		#crystalian x2 altus (all items)
		AddTalkListDataIf(GetEventFlag(1049300176) == 1,3, 16000153, -1)
		#crystalian x2 altus (defeated)
		AddTalkListDataIf(GetEventFlag(1049304176) == 1,3, 16000152, -1)
		#deathrite caelid
		AddTalkListDataIf(GetEventFlag(1049304177) == 0,4, 15000534, -1)
		#deathrite caelid (all items)
		AddTalkListDataIf(GetEventFlag(1049300177) == 1,4, 16000155, -1)
		#deathrite caelid (defeated)
		AddTalkListDataIf(GetEventFlag(1049304177) == 1,4, 16000154, -1)
		#dragonkin (siofra)
		AddTalkListDataIf(GetEventFlag(1049304208) == 0,17, 99992007, -1)
		#dragonkin (siofra) (all items)
		AddTalkListDataIf(GetEventFlag(1049300208) == 1,17, 16000217, -1)
		#dragonkin (siofra) (defeated)
		AddTalkListDataIf(GetEventFlag(1049304208) == 1,17, 16000216, -1)
		#erdtree burial watchdog wyndham
		AddTalkListDataIf(GetEventFlag(1049304179) == 0,6, 15000518, -1)
		#erdtree burial watchdog wyndham (all items)
		AddTalkListDataIf(GetEventFlag(1049300179) == 1,6, 16000159, -1)
		#erdtree burial watchdog wyndham (defeated)
		AddTalkListDataIf(GetEventFlag(1049304179) == 1,6, 16000158, -1)
		#glintstone dragon smarag
		AddTalkListDataIf(GetEventFlag(1049304180) == 0,7, 13040136, -1)
		#glintstone dragon smarag (all items)
		AddTalkListDataIf(GetEventFlag(1049300180) == 1,7, 16000161, -1)
		#glintstone dragon smarag (defeated)
		AddTalkListDataIf(GetEventFlag(1049304180) == 1,7, 16000160, -1)
		#grave warden duelist auriza
		AddTalkListDataIf(GetEventFlag(1049304181) == 0,8, 99990300, -1)
		#grave warden duelist auriza (all items)
		AddTalkListDataIf(GetEventFlag(1049300181) == 1,8, 16000163, -1)
		#grave warden duelist auriza (defeated)
		AddTalkListDataIf(GetEventFlag(1049304181) == 1,8, 16000162, -1)
		#night's cavalry caelid
		AddTalkListDataIf(GetEventFlag(1049304183) == 0,10, 15000702, -1)
		#night's cavalry caelid (all items)
		AddTalkListDataIf(GetEventFlag(1049300183) == 1,10, 16000167, -1)
		#night's cavalry caelid (defeated)
		AddTalkListDataIf(GetEventFlag(1049304183) == 1,10, 16000166, -1)
		#omenkiller+miranda
		AddTalkListDataIf(GetEventFlag(1049304199) == 0,19, 99990299, -1)
		#omenkiller+miranda (all items)
		AddTalkListDataIf(GetEventFlag(1049300199) == 1,19, 16000199, -1)
		#omenkiller+miranda (defeated)
		AddTalkListDataIf(GetEventFlag(1049304199) == 1,19, 16000198, -1)
		#onyx lord sealed
		AddTalkListDataIf(GetEventFlag(1049304184) == 0,11, 15000512, -1)
		#onyx lord sealed (all items)
		AddTalkListDataIf(GetEventFlag(1049300184) == 1,11, 16000169, -1)
		#onyx lord sealed (defeated)
		AddTalkListDataIf(GetEventFlag(1049304184) == 1,11, 16000168, -1)
		#putrid avatar caelid
		AddTalkListDataIf(GetEventFlag(1049304185) == 0,12, 15000374, -1)
		#putrid avatar caelid (all items)
		AddTalkListDataIf(GetEventFlag(1049300185) == 1,12, 16000171, -1)
		#putrid avatar caelid (defeated)
		AddTalkListDataIf(GetEventFlag(1049304185) == 1,12, 16000170, -1)
		#misbegotten+crucible
		AddTalkListDataIf(GetEventFlag(1049304173) == 0,18, 16000509, -1)
		#misbegotten+crucible (all items)
		AddTalkListDataIf(GetEventFlag(1049300173) == 1,18, 16000147, -1)
		#misbegotten+crucible (defeated)
		AddTalkListDataIf(GetEventFlag(1049304173) == 1,18, 16000146, -1)
		#regal ancestor
		AddTalkListDataIf(GetEventFlag(1049304188) == 0,15, 16000510, -1)
		#regal ancestor (all items)
		AddTalkListDataIf(GetEventFlag(1049300188) == 1,15, 16000177, -1)
		#regal ancestor (defeated)
		AddTalkListDataIf(GetEventFlag(1049304188) == 1,15, 16000176, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302506, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302526, 1)
		#battlemage hugues
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304174) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302103, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304174) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#black knife assassin sage's
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304190) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302146, 1)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304190) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#commander o'neil
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304175) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302026, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304175) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#crystalian x2 altus
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304176) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302164, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304176) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathrite caelid
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304177) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302068, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304177) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#dragonkin (siofra)
		elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304208) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302031, 1)
		elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304208) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree burial watchdog wyndham
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304179) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302121, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304179) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#glintstone dragon smarag
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304180) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302028, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304180) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#grave warden duelist auriza
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304181) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302122, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304181) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry caelid
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304183) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302069, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304183) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#omenkiller+miranda
		elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304199) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302149, 1)
		elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304199) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#onyx lord sealed
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304184) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302165, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304184) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#putrid avatar caelid
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304185) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302071, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304185) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#misbegotten+crucible
		elif GetTalkListEntryResult() == 18 and (GetEventFlag(1049304173) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302025, 1)
		elif GetTalkListEntryResult() == 18 and GetEventFlag(1049304173) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#regal ancestor
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304188) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302002, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304188) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
	
#tier 7
def t324001110_8():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300012), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#black knife assassin (altus)
		AddTalkListDataIf(GetEventFlag(1049304189) == 0,1, 15000461, -1)
		#black knife assassin (altus) (all items)
		AddTalkListDataIf(GetEventFlag(1049300189) == 1,1, 16000179, -1)
		#black knife assassin (altus) (defeated)
		AddTalkListDataIf(GetEventFlag(1049304189) == 1,1, 16000178, -1)
		#giant wormface
		AddTalkListDataIf(GetEventFlag(1049304193) == 0,4, 15000377, -1)
		#giant wormface (all items)
		AddTalkListDataIf(GetEventFlag(1049300193) == 1,4, 16000187, -1)
		#giant wormface (defeated)
		AddTalkListDataIf(GetEventFlag(1049304193) == 1,4, 16000186, -1)
		#godfrey golden shade
		AddTalkListDataIf(GetEventFlag(1049304210) == 0,5, 13040118, -1)
		#godfrey golden shade (all items)
		AddTalkListDataIf(GetEventFlag(1049300210) == 1,5, 16000221, -1)
		#godfrey golden shade (defeated)
		AddTalkListDataIf(GetEventFlag(1049304210) == 1,5, 16000220, -1)
		#godskin apostle altus
		AddTalkListDataIf(GetEventFlag(1049304195) == 0,6, 99992005, -1)
		#godskin apostle altus (all items)
		AddTalkListDataIf(GetEventFlag(1049300195) == 1,6, 16000191, -1)
		#godskin apostle altus (defeated)
		AddTalkListDataIf(GetEventFlag(1049304195) == 1,6, 16000190, -1)
		#mimic tear
		AddTalkListDataIf(GetEventFlag(1049304196) == 0,7, 13040155, -1)
		#mimic tear (all items)
		AddTalkListDataIf(GetEventFlag(1049300196) == 1,7, 16000193, -1)
		#mimic tear (defeated)
		AddTalkListDataIf(GetEventFlag(1049304196) == 1,7, 16000192, -1)
		#necromancer garris
		AddTalkListDataIf(GetEventFlag(1049304197) == 0,8, 15000453, -1)
		#necromancer garris (all items)
		AddTalkListDataIf(GetEventFlag(1049300197) == 1,8, 16000195, -1)
		#necromancer garris (defeated)
		AddTalkListDataIf(GetEventFlag(1049304197) == 1,8, 16000194, -1)
		#night's cavalry altus
		AddTalkListDataIf(GetEventFlag(1049304198) == 0,9, 15000703, -1)
		#night's cavalry altus (all items)
		AddTalkListDataIf(GetEventFlag(1049300198) == 1,9, 16000197, -1)
		#night's cavalry altus (defeated)
		AddTalkListDataIf(GetEventFlag(1049304198) == 1,9, 16000196, -1)
		#putrid crystalian x3 sellia
		AddTalkListDataIf(GetEventFlag(1049304191) == 0,11, 99990204, -1)
		#putrid crystalian x3 sellia (all items)
		AddTalkListDataIf(GetEventFlag(1049300191) == 1,11, 16000183, -1)
		#putrid crystalian x3 sellia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304191) == 1,11, 16000182, -1)
		#tree sentinels altus
		AddTalkListDataIf(GetEventFlag(1049304200) == 0,12, 15000456, -1)
		#tree sentinels altus (all items)
		AddTalkListDataIf(GetEventFlag(1049300200) == 1,12, 16000201, -1)
		#tree sentinels altus (defeated)
		AddTalkListDataIf(GetEventFlag(1049304200) == 1,12, 16000200, -1)
		#godskin noble
		AddTalkListDataIf(GetEventFlag(1049304215) == 0,14, 16000511, -1)
		#godskin noble (all items)
		AddTalkListDataIf(GetEventFlag(1049300215) == 1,14, 16000231, -1)
		#godskin noble (defeated)
		AddTalkListDataIf(GetEventFlag(1049304215) == 1,14, 16000230, -1)
		#starscourge radahn
		AddTalkListDataIf(GetEventFlag(1049304201) == 0,13, 16000512, -1)
		#starscourge radahn (all items)
		AddTalkListDataIf(GetEventFlag(1049300201) == 1,13, 16000203, -1)
		#starscourge radahn (defeated)
		AddTalkListDataIf(GetEventFlag(1049304201) == 1,13, 16000202, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302507, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302527, 1)
		#black knife assassin (altus)
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304189) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302072, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304189) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#giant wormface
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304193) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302075, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304193) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godfrey golden shade
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304210) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302033, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304210) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godskin apostle altus
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304195) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302074, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304195) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#mimic tear
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304196) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302029, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304196) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#necromancer garris
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304197) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302148, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304197) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry altus
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304198) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302076, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304198) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#putrid crystalian x3 sellia
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304191) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302147, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304191) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#tree sentinels altus
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304200) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302077, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304200) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godskin noble
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304215) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302034, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304215) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#starscourge radahn
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304201) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302003, 1049302748, 1049304201)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304201) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier 8
def t324001110_9():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300013), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#bell bearing outskirts
		AddTalkListDataIf(GetEventFlag(1049304202) == 0,1, 15000709, -1)
		#bell bearing outskirts (all items)
		AddTalkListDataIf(GetEventFlag(1049300202) == 1,1, 16000205, -1)
		#bell bearing outskirts (defeated)
		AddTalkListDataIf(GetEventFlag(1049304202) == 1,1, 16000204, -1)
		#crucible knight siluria
		AddTalkListDataIf(GetEventFlag(1049304225) == 0,2, 13040145, -1)
		#crucible knight siluria (all items)
		AddTalkListDataIf(GetEventFlag(1049300225) == 1,2, 16000251, -1)
		#crucible knight siluria (defeated)
		AddTalkListDataIf(GetEventFlag(1049304225) == 1,2, 16000250, -1)
		#deathbird outskirts
		AddTalkListDataIf(GetEventFlag(1049304204) == 0,3, 15000532, -1)
		#deathbird outskirts (all items)
		AddTalkListDataIf(GetEventFlag(1049300204) == 1,3, 16000209, -1)
		#deathbird outskirts (defeated)
		AddTalkListDataIf(GetEventFlag(1049304204) == 1,3, 16000208, -1)
		#demi-human queen maggie
		AddTalkListDataIf(GetEventFlag(1049304206) == 0,5, 15000376, -1)
		#demi-human queen maggie (all items)
		AddTalkListDataIf(GetEventFlag(1049300206) == 1,5, 16000213, -1)
		#demi-human queen maggie (defeated)
		AddTalkListDataIf(GetEventFlag(1049304206) == 1,5, 16000212, -1)
		#draconic tree sentinel
		AddTalkListDataIf(GetEventFlag(1049304207) == 0,6, 13040154, -1)
		#draconic tree sentinel (all items)
		AddTalkListDataIf(GetEventFlag(1049300207) == 1,6, 16000215, -1)
		#draconic tree sentinel (defeated)
		AddTalkListDataIf(GetEventFlag(1049304207) == 1,6, 16000214, -1)
		#fallingstar altus
		AddTalkListDataIf(GetEventFlag(1049304192) == 0,18, 15000719, -1)
		#fallingstar altus (all items)
		AddTalkListDataIf(GetEventFlag(1049300192) == 1,18, 16000185, -1)
		#fallingstar altus (defeated)
		AddTalkListDataIf(GetEventFlag(1049304192) == 1,18, 16000184, -1)
		#fia's champs
		AddTalkListDataIf(GetEventFlag(1049304209) == 0,8, 15000378, -1)
		#fia's champs (all items)
		AddTalkListDataIf(GetEventFlag(1049300209) == 1,8, 16000219, -1)
		#fia's champs (defeated)
		AddTalkListDataIf(GetEventFlag(1049304209) == 1,8, 16000218, -1)
		#godefroy
		AddTalkListDataIf(GetEventFlag(1049304194) == 0,19, 15000392, -1)
		#godefroy (all items)
		AddTalkListDataIf(GetEventFlag(1049300194) == 1,19, 16000189, -1)
		#godefroy (defeated)
		AddTalkListDataIf(GetEventFlag(1049304194) == 1,19, 16000188, -1)
		#magma wyrm (gelmir)
		AddTalkListDataIf(GetEventFlag(1049304211) == 0,10, 20000001, -1)
		#magma wyrm (gelmir) (all items)
		AddTalkListDataIf(GetEventFlag(1049300211) == 1,10, 16000223, -1)
		#magma wyrm (gelmir) (defeated)
		AddTalkListDataIf(GetEventFlag(1049304211) == 1,10, 16000222, -1)
		#tibia altus (gelmir)
		AddTalkListDataIf(GetEventFlag(1049304212) == 0,11, 15000707, -1)
		#tibia altus (gelmir) (all items)
		AddTalkListDataIf(GetEventFlag(1049300212) == 1,11, 16000225, -1)
		#tibia altus (gelmir) (defeated)
		AddTalkListDataIf(GetEventFlag(1049304212) == 1,11, 16000224, -1)
		#ulcerated tree spirit gelmir
		AddTalkListDataIf(GetEventFlag(1049304213) == 0,12, 15000536, -1)
		#ulcerated tree spirit gelmir (all items)
		AddTalkListDataIf(GetEventFlag(1049300213) == 1,12, 16000227, -1)
		#ulcerated tree spirit gelmir (defeated)
		AddTalkListDataIf(GetEventFlag(1049304213) == 1,12, 16000226, -1)
		#valiant gargs
		AddTalkListDataIf(GetEventFlag(1049304214) == 0,13, 13040121, -1)
		#valiant gargs (all items)
		AddTalkListDataIf(GetEventFlag(1049300214) == 1,13, 16000229, -1)
		#valiant gargs (defeated)
		AddTalkListDataIf(GetEventFlag(1049304214) == 1,13, 16000228, -1)
		#astel
		AddTalkListDataIf(GetEventFlag(1049304216) == 0,15, 16000513, -1)
		#astel (all items)
		AddTalkListDataIf(GetEventFlag(1049300216) == 1,15, 16000233, -1)
		#astel (defeated)
		AddTalkListDataIf(GetEventFlag(1049304216) == 1,15, 16000232, -1)
		#lichdragon fortissax
		AddTalkListDataIf(GetEventFlag(1049304217) == 0,16, 16000514, -1)
		#lichdragon fortissax (all items)
		AddTalkListDataIf(GetEventFlag(1049300217) == 1,16, 16000235, -1)
		#lichdragon fortissax (defeated)
		AddTalkListDataIf(GetEventFlag(1049304217) == 1,16, 16000234, -1)
		#morgott
		AddTalkListDataIf(GetEventFlag(1049304218) == 0,17, 16000515, -1)
		#morgott (all items)
		AddTalkListDataIf(GetEventFlag(1049300218) == 1,17, 16000237, -1)
		#morgott (defeated)
		AddTalkListDataIf(GetEventFlag(1049304218) == 1,17, 16000236, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302508, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302528, 1)
		#bell bearing outskirts
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304202) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302078, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304202) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#crucible knight siluria
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304225) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302041, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304225) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathbird outskirts
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304204) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302079, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304204) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#demi-human queen maggie
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304206) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302080, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304206) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#draconic tree sentinel
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304207) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302081, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304207) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#fallingstar altus
		elif GetTalkListEntryResult() == 18 and (GetEventFlag(1049304192) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302073, 1)
		elif GetTalkListEntryResult() == 18 and GetEventFlag(1049304192) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#fia's champs
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304209) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302032, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304209) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godefroy
		elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304194) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302105, 1)
		elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304194) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#magma wyrm (gelmir)
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304211) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302035, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304211) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#tibia altus
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304212) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302082, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304212) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ulcerated tree spirit gelmir
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304213) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302083, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304213) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#valiant gargs
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304214) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302036, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304214) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#astel
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304216) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302004, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304216) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#lichdragon fortissax
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304217) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302005, 1)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304217) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#morgott
		elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304218) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302006, 1049302734, 1049304218)
		elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304218) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
	
#tier 9
def t324001110_10():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300014), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#ancient dragon lansseax
		AddTalkListDataIf(GetEventFlag(1049304219) == 0,1, 99992004, -1)
		#ancient dragon lansseax (all items)
		AddTalkListDataIf(GetEventFlag(1049300219) == 1,1, 16000239, -1)
		#ancient dragon lansseax (defeated)
		AddTalkListDataIf(GetEventFlag(1049304219) == 1,1, 16000238, -1)
		#ancient hero of zamor mountaintops
		AddTalkListDataIf(GetEventFlag(1049304220) == 0,2, 15000522, -1)
		#ancient hero of zamor mountaintops (all items)
		AddTalkListDataIf(GetEventFlag(1049300220) == 1,2, 16000241, -1)
		#ancient hero of zamor mountaintops (defeated)
		AddTalkListDataIf(GetEventFlag(1049304220) == 1,2, 16000240, -1)
		#black blade kindred forbidden
		AddTalkListDataIf(GetEventFlag(1049304221) == 0,3, 20000002, -1)
		#black blade kindred forbidden (all items)
		AddTalkListDataIf(GetEventFlag(1049300221) == 1,3, 16000243, -1)
		#black blade kindred forbidden (defeated)
		AddTalkListDataIf(GetEventFlag(1049304221) == 1,3, 16000242, -1)
		#dragonkin (rot)
		AddTalkListDataIf(GetEventFlag(1049304226) == 0,8, 13040129, -1)
		#dragonkin (rot) (all items)
		AddTalkListDataIf(GetEventFlag(1049300226) == 1,8, 16000253, -1)
		#dragonkin (rot) (defeated)
		AddTalkListDataIf(GetEventFlag(1049304226) == 1,8, 16000252, -1)
		#esgar
		AddTalkListDataIf(GetEventFlag(1049304227) == 0,9, 15000434, -1)
		#esgar (all items)
		AddTalkListDataIf(GetEventFlag(1049300227) == 1,9, 16000255, -1)
		#esgar (defeated)
		AddTalkListDataIf(GetEventFlag(1049304227) == 1,9, 16000254, -1)
		#fell twins
		AddTalkListDataIf(GetEventFlag(1049304222) == 0,4, 15000379, -1)
		#fell twins (all items)
		AddTalkListDataIf(GetEventFlag(1049300222) == 1,4, 16000245, -1)
		#fell twins (defeated)
		AddTalkListDataIf(GetEventFlag(1049304222) == 1,4, 16000244, -1)
		#spiritcaller snail mountaintops
		AddTalkListDataIf(GetEventFlag(1049304223) == 0,5, 99993011, -1)
		#spiritcaller snail mountaintops (all items)
		AddTalkListDataIf(GetEventFlag(1049300223) == 1,5, 16000247, -1)
		#spiritcaller snail mountaintops (defeated)
		AddTalkListDataIf(GetEventFlag(1049304223) == 1,5, 16000246, -1)
		#ulcerated tree spirit mountaintops
		AddTalkListDataIf(GetEventFlag(1049304224) == 0,6, 15000425, -1)
		#ulcerated tree spirit mountaintops (all items)
		AddTalkListDataIf(GetEventFlag(1049300224) == 1,6, 16000249, -1)
		#ulcerated tree spirit mountaintops (defeated)
		AddTalkListDataIf(GetEventFlag(1049304224) == 1,6, 16000248, -1)
		#crucible knight ordovis
		AddTalkListDataIf(GetEventFlag(1049304203) == 0,15, 15000433, -1)
		#crucible knight ordovis (all items)
		AddTalkListDataIf(GetEventFlag(1049300203) == 1,15, 16000207, -1)
		#crucible knight ordovis (defeated)
		AddTalkListDataIf(GetEventFlag(1049304203) == 1,15, 16000206, -1)
		#decaying ekzykes
		AddTalkListDataIf(GetEventFlag(1049304205) == 0,16, 13040138, -1)
		#decaying ekzykes (all items)
		AddTalkListDataIf(GetEventFlag(1049300205) == 1,16, 16000211, -1)
		#decaying ekzykes (defeated)
		AddTalkListDataIf(GetEventFlag(1049304205) == 1,16, 16000210, -1)
		#mohg
		AddTalkListDataIf(GetEventFlag(1049304229) == 0,11, 13040144, -1)
		#mohg (all items)
		AddTalkListDataIf(GetEventFlag(1049300229) == 1,11, 16000259, -1)
		#mohg (defeated)
		AddTalkListDataIf(GetEventFlag(1049304229) == 1,11, 16000258, -1)
		#roundtable knight vyke
		AddTalkListDataIf(GetEventFlag(1049304230) == 0,12, 15000391, -1)
		#roundtable knight vyke (all items)
		AddTalkListDataIf(GetEventFlag(1049300230) == 1,12, 16000261, -1)
		#roundtable knight vyke (defeated)
		AddTalkListDataIf(GetEventFlag(1049304230) == 1,12, 16000260, -1)
		#rykard
		AddTalkListDataIf(GetEventFlag(1049304231) == 0,13, 16000516, -1)
		#rykard (all items)
		AddTalkListDataIf(GetEventFlag(1049300231) == 1,13, 16000263, -1)
		#rykard (defeated)
		AddTalkListDataIf(GetEventFlag(1049304231) == 1,13, 16000262, -1)
		#commander niall
		AddTalkListDataIf(GetEventFlag(1049304232) == 0,14, 16000517, -1)
		#commander niall (all items)
		AddTalkListDataIf(GetEventFlag(1049300232) == 1,14, 16000265, -1)
		#commander niall (defeated)
		AddTalkListDataIf(GetEventFlag(1049304232) == 1,14, 16000264, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302509, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302529, 1)
		#ancient dragon lansseax
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304219) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302037, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304219) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ancient hero of zamor mountaintops
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304220) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302125, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304220) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#black blade kindred forbidden
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304221) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302084, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304221) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#crucible knight ordovis
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304203) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302124, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304203) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#decaying ekzykes
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304205) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302030, 1)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304205) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#fell twins
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304222) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302085, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304222) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#spiritcaller snail mountaintops
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304223) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302150, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304223) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#ulcerated tree spirit mountaintops
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304224) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302126, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304224) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#dragonkin (rot)
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304226) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302038, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304226) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#esgar
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304227) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302127, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304227) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#mohg
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304229) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302039, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304229) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#roundtable knight vyke
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304230) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302104, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304230) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#rykard
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304231) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302007, 1049302746, 1049304231)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304231) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#commander niall
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304232) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302040, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304232) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier 10
def t324001110_11():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300015), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#beastman x2
		AddTalkListDataIf(GetEventFlag(1049304238) == 0,6, 99991000, -1)
		#beastman x2 (all items)
		AddTalkListDataIf(GetEventFlag(1049300238) == 1,6, 16000277, -1)
		#beastman x2 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304238) == 1,6, 16000276, -1)
		#deathrite mountaintops
		AddTalkListDataIf(GetEventFlag(1049304233) == 0,1, 13040151, -1)
		#deathrite mountaintops (all items)
		AddTalkListDataIf(GetEventFlag(1049300233) == 1,1, 16000267, -1)
		#deathrite mountaintops (defeated)
		AddTalkListDataIf(GetEventFlag(1049304233) == 1,1, 16000266, -1)
		#erdtree avatar mountaintops
		AddTalkListDataIf(GetEventFlag(1049304234) == 0,2, 15000526, -1)
		#erdtree avatar mountaintops (all items)
		AddTalkListDataIf(GetEventFlag(1049300234) == 1,2, 16000269, -1)
		#erdtree avatar mountaintops (defeated)
		AddTalkListDataIf(GetEventFlag(1049304234) == 1,2, 16000268, -1)
		#fullgrown fallingstar
		AddTalkListDataIf(GetEventFlag(1049304228) == 0,18, 13040149, -1)
		#fullgrown fallingstar (all items)
		AddTalkListDataIf(GetEventFlag(1049300228) == 1,18, 16000257, -1)
		#fullgrown fallingstar (defeated)
		AddTalkListDataIf(GetEventFlag(1049304228) == 1,18, 16000256, -1)
		#night's cavalry forbidden
		AddTalkListDataIf(GetEventFlag(1049304236) == 0,4, 15000704, -1)
		#night's cavalry forbidden (all items)
		AddTalkListDataIf(GetEventFlag(1049300236) == 1,4, 16000273, -1)
		#night's cavalry forbidden (defeated)
		AddTalkListDataIf(GetEventFlag(1049304236) == 1,4, 16000272, -1)
		#flying dragon greyll
		AddTalkListDataIf(GetEventFlag(1049304252) == 0,20, 13040148, -1)
		#flying dragon greyll (all items)
		AddTalkListDataIf(GetEventFlag(1049300252) == 1,20, 16000305, -1)
		#flying dragon greyll (defeated)
		AddTalkListDataIf(GetEventFlag(1049304252) == 1,20, 16000304, -1)
		#glintstone dragon adula
		AddTalkListDataIf(GetEventFlag(1049304253) == 0,21, 13040135, -1)
		#glintstone dragon adula (all items)
		AddTalkListDataIf(GetEventFlag(1049300253) == 1,21, 16000307, -1)
		#glintstone dragon adula (defeated)
		AddTalkListDataIf(GetEventFlag(1049304253) == 1,21, 16000306, -1)
		#godskin duo
		AddTalkListDataIf(GetEventFlag(1049304235) == 0,3, 13040119, -1)
		#godskin duo (all items)
		AddTalkListDataIf(GetEventFlag(1049300235) == 1,3, 16000271, -1)
		#godskin duo (defeated)
		AddTalkListDataIf(GetEventFlag(1049304235) == 1,3, 16000270, -1)
		#misbegotten crusader
		AddTalkListDataIf(GetEventFlag(1049304244) == 0,12, 15000455, -1)
		#misbegotten crusader (all items)
		AddTalkListDataIf(GetEventFlag(1049300244) == 1,12, 16000289, -1)
		#misbegotten crusader (defeated)
		AddTalkListDataIf(GetEventFlag(1049304244) == 1,12, 16000288, -1)
		#putrid grave warden duelist
		AddTalkListDataIf(GetEventFlag(1049304245) == 0,13, 15000422, -1)
		#putrid grave warden duelist (all items)
		AddTalkListDataIf(GetEventFlag(1049300245) == 1,13, 16000291, -1)
		#putrid grave warden duelist (defeated)
		AddTalkListDataIf(GetEventFlag(1049304245) == 1,13, 16000290, -1)
		#putrid tree spirit wardead
		AddTalkListDataIf(GetEventFlag(1049304239) == 0,7, 15000432, -1)
		#putrid tree spirit wardead (all items)
		AddTalkListDataIf(GetEventFlag(1049300239) == 1,7, 16000279, -1)
		#putrid tree spirit wardead (defeated)
		AddTalkListDataIf(GetEventFlag(1049304239) == 1,7, 16000278, -1)
		#stray mimic
		AddTalkListDataIf(GetEventFlag(1049304241) == 0,9, 99992000, -1)
		#stray mimic (all items)
		AddTalkListDataIf(GetEventFlag(1049300241) == 1,9, 16000283, -1)
		#stray mimic (defeated)
		AddTalkListDataIf(GetEventFlag(1049304241) == 1,9, 16000282, -1)
		#alecto
		AddTalkListDataIf(GetEventFlag(1049304237) == 0,5, 15000393, -1)
		#alecto (all items)
		AddTalkListDataIf(GetEventFlag(1049300237) == 1,5, 16000275, -1)
		#alecto (defeated)
		AddTalkListDataIf(GetEventFlag(1049304237) == 1,5, 16000274, -1)
		#bell bearing dragonbarrow
		AddTalkListDataIf(GetEventFlag(1049304250) == 0,19, 15000718, -1)
		#bell bearing dragonbarrow (all items)
		AddTalkListDataIf(GetEventFlag(1049300250) == 1,19, 16000301, -1)
		#bell bearing dragonbarrow (defeated)
		AddTalkListDataIf(GetEventFlag(1049304250) == 1,19, 16000300, -1)
		#night's cavalry dragonbarrow
		AddTalkListDataIf(GetEventFlag(1049304254) == 0,22, 13040159, -1)
		#night's cavalry dragonbarrow (all items)
		AddTalkListDataIf(GetEventFlag(1049300254) == 1,22, 16000309, -1)
		#night's cavalry dragonbarrow (defeated)
		AddTalkListDataIf(GetEventFlag(1049304254) == 1,22, 16000308, -1)
		#putrid avatar dragonbarrow
		AddTalkListDataIf(GetEventFlag(1049304255) == 0,23, 15000527, -1)
		#putrid avatar dragonbarrow (all items)
		AddTalkListDataIf(GetEventFlag(1049300255) == 1,23, 16000311, -1)
		#putrid avatar dragonbarrow (defeated)
		AddTalkListDataIf(GetEventFlag(1049304255) == 1,23, 16000310, -1)
		#sir gideon ofnir
		AddTalkListDataIf(GetEventFlag(1049304240) == 0,8, 13040146, -1)
		#sir gideon ofnir (all items)
		AddTalkListDataIf(GetEventFlag(1049300240) == 1,8, 16000281, -1)
		#sir gideon ofnir (defeated)
		AddTalkListDataIf(GetEventFlag(1049304240) == 1,8, 16000280, -1)
		#godskin apostle (caelid)
		AddTalkListDataIf(GetEventFlag(1049304247) == 0,15, 16000518, -1)
		#godskin apostle (caelid) (all items)
		AddTalkListDataIf(GetEventFlag(1049300247) == 1,15, 16000295, -1)
		#godskin apostle (caelid) (defeated)
		AddTalkListDataIf(GetEventFlag(1049304247) == 1,15, 16000294, -1)
		#fire giant
		AddTalkListDataIf(GetEventFlag(1049304246) == 0,14, 16000519, -1)
		#fire giant (all items)
		AddTalkListDataIf(GetEventFlag(1049300246) == 1,14, 16000293, -1)
		#fire giant (defeated)
		AddTalkListDataIf(GetEventFlag(1049304246) == 1,14, 16000292, -1)
		#beast clergyman
		AddTalkListDataIf(GetEventFlag(1049304248) == 0,16, 16000520, -1)
		#beast clergyman (all items)
		AddTalkListDataIf(GetEventFlag(1049300248) == 1,16, 16000297, -1)
		#beast clergyman (defeated)
		AddTalkListDataIf(GetEventFlag(1049304248) == 1,16, 16000296, -1)
		#godfrey/hoarah
		AddTalkListDataIf(GetEventFlag(1049304249) == 0,17, 16000521, -1)
		#godfrey/hoarah (all items)
		AddTalkListDataIf(GetEventFlag(1049300249) == 1,17, 16000299, -1)
		#godfrey/hoarah (defeated)
		AddTalkListDataIf(GetEventFlag(1049304249) == 1,17, 16000298, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302510, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302530, 1)
		#deathrite mountaintops
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304233) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302087, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304233) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#erdtree avatar mountaintops
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304234) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302088, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304234) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#fullgrown fallingstar
		elif GetTalkListEntryResult() == 18 and (GetEventFlag(1049304228) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302086, 1)
		elif GetTalkListEntryResult() == 18 and GetEventFlag(1049304228) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry forbidden
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304236) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302089, 1)
		elif GetTalkListEntryResult() == 4 and GetEventFlag(1049304236) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#beastman x2
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304238) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302151, 1)
		elif GetTalkListEntryResult() == 6 and GetEventFlag(1049304238) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godskin duo
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304235) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302042, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304235) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#misbegotten crusader
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304244) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302152, 1)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304244) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#putrid grave warden duelist
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304245) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302130, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304245) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#putrid tree spirit wardead
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304239) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302128, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304239) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#stray mimic
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304241) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302129, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304241) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#alecto
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304237) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302106, 1)
		elif GetTalkListEntryResult() == 5 and GetEventFlag(1049304237) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#bell bearing dragonbarrow
		elif GetTalkListEntryResult() == 19 and (GetEventFlag(1049304250) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302090, 1)
		elif GetTalkListEntryResult() == 19 and GetEventFlag(1049304250) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#flying dragon greyll
		elif GetTalkListEntryResult() == 20 and (GetEventFlag(1049304252) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302046, 1)
		elif GetTalkListEntryResult() == 20 and GetEventFlag(1049304252) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#glintstone dragon adula
		elif GetTalkListEntryResult() == 21 and (GetEventFlag(1049304253) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302047, 1)
		elif GetTalkListEntryResult() == 21 and GetEventFlag(1049304253) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry dragonbarrow
		elif GetTalkListEntryResult() == 22 and (GetEventFlag(1049304254) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302092, 1)
		elif GetTalkListEntryResult() == 22 and GetEventFlag(1049304254) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#putrid avatar dragonbarrow
		elif GetTalkListEntryResult() == 23 and (GetEventFlag(1049304255) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302093, 1)
		elif GetTalkListEntryResult() == 23 and GetEventFlag(1049304255) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#sir gideon ofnir
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304240) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302044, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304240) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#fire giant
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304246) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302008, 1049302712, 1049304246)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304246) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godskin apostle (caelid)
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304247) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302043, 1)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304247) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#beast clergyman
		elif GetTalkListEntryResult() == 16 and (GetEventFlag(1049304248) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302009, 1049302702, 1049304248)
		elif GetTalkListEntryResult() == 16 and GetEventFlag(1049304248) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#godfrey/hoarah
		elif GetTalkListEntryResult() == 17 and (GetEventFlag(1049304249) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302010, 1049302714, 1049304249)
		elif GetTalkListEntryResult() == 17 and GetEventFlag(1049304249) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier 11
def t324001110_12():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300016), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#astel snowfield
		AddTalkListDataIf(GetEventFlag(1049304242) == 0,1, 15000513, -1)
		#astel snowfield (all items)
		AddTalkListDataIf(GetEventFlag(1049300242) == 1,1, 16000285, -1)
		#astel snowfield (defeated)
		AddTalkListDataIf(GetEventFlag(1049304242) == 1,1, 16000284, -1)
		#black blade kindred dragonbarrow
		AddTalkListDataIf(GetEventFlag(1049304251) == 0,2, 13040147, -1)
		#black blade kindred dragonbarrow (all items)
		AddTalkListDataIf(GetEventFlag(1049300251) == 1,2, 16000303, -1)
		#black blade kindred dragonbarrow (defeated)
		AddTalkListDataIf(GetEventFlag(1049304251) == 1,2, 16000302, -1)
		#borealis
		AddTalkListDataIf(GetEventFlag(1049304243) == 0,3, 13040137, -1)
		#borealis (all items)
		AddTalkListDataIf(GetEventFlag(1049300243) == 1,3, 16000287, -1)
		#borealis (defeated)
		AddTalkListDataIf(GetEventFlag(1049304243) == 1,3, 16000286, -1)
		#loretta halig
		AddTalkListDataIf(GetEventFlag(1049304258) == 0,9, 13040125, -1)
		#loretta halig (all items)
		AddTalkListDataIf(GetEventFlag(1049300258) == 1,9, 16000317, -1)
		#loretta halig (defeated)
		AddTalkListDataIf(GetEventFlag(1049304258) == 1,9, 16000316, -1)
		#night's cavalry snowfield
		AddTalkListDataIf(GetEventFlag(1049304259) == 0,10, 15000705, -1)
		#night's cavalry snowfield (all items)
		AddTalkListDataIf(GetEventFlag(1049300259) == 1,10, 16000319, -1)
		#night's cavalry snowfield (defeated)
		AddTalkListDataIf(GetEventFlag(1049304259) == 1,10, 16000318, -1)
		#putrid avatar snowfield
		AddTalkListDataIf(GetEventFlag(1049304260) == 0,11, 15000528, -1)
		#putrid avatar snowfield (all items)
		AddTalkListDataIf(GetEventFlag(1049300260) == 1,11, 16000321, -1)
		#putrid avatar snowfield (defeated)
		AddTalkListDataIf(GetEventFlag(1049304260) == 1,11, 16000320, -1)
		#deathrite snowfield
		AddTalkListDataIf(GetEventFlag(1049304256) == 0,7, 15000535, -1)
		#deathrite snowfield (all items)
		AddTalkListDataIf(GetEventFlag(1049300256) == 1,7, 16000313, -1)
		#deathrite snowfield (defeated)
		AddTalkListDataIf(GetEventFlag(1049304256) == 1,7, 16000312, -1)
		#great wyrm theodorix
		AddTalkListDataIf(GetEventFlag(1049304257) == 0,8, 13040139, -1)
		#great wyrm theodorix (all items)
		AddTalkListDataIf(GetEventFlag(1049300257) == 1,8, 16000315, -1)
		#great wyrm theodorix (defeated)
		AddTalkListDataIf(GetEventFlag(1049304257) == 1,8, 16000314, -1)
		#malenia
		AddTalkListDataIf(GetEventFlag(1049304261) == 0,12, 13040106, -1)
		#malenia (all items)
		AddTalkListDataIf(GetEventFlag(1049300261) == 1,12, 16000323, -1)
		#malenia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304261) == 1,12, 16000322, -1)
		#dragonlord placidusax
		AddTalkListDataIf(GetEventFlag(1049304262) == 0,13, 16000522, -1)
		#dragonlord placidusax (all items)
		AddTalkListDataIf(GetEventFlag(1049300262) == 1,13, 16000325, -1)
		#dragonlord placidusax (defeated)
		AddTalkListDataIf(GetEventFlag(1049304262) == 1,13, 16000324, -1)
		#radagon+elden beast
		AddTalkListDataIf(GetEventFlag(1049304263) == 0,14, 16000523, -1)
		#radagon+elden beast (all items)
		AddTalkListDataIf(GetEventFlag(1049300263) == 1,14, 16000327, -1)
		#radagon+elden beast (defeated)
		AddTalkListDataIf(GetEventFlag(1049304263) == 1,14, 16000326, -1)
		#mohg lord of blood
		AddTalkListDataIf(GetEventFlag(1049304264) == 0,15, 16000524, -1)
		#mohg lord of blood (all items)
		AddTalkListDataIf(GetEventFlag(1049300264) == 1,15, 16000329, -1)
		#mohg lord of blood (defeated)
		AddTalkListDataIf(GetEventFlag(1049304264) == 1,15, 16000328, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302511, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302531, 1)
		#astel snowfield
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304242) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302166, 1)
		elif GetTalkListEntryResult() == 1 and GetEventFlag(1049304242) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#black blade kindred dragonbarrow
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304251) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302091, 1)
		elif GetTalkListEntryResult() == 2 and GetEventFlag(1049304251) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#borealis
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304243) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302045, 1)
		elif GetTalkListEntryResult() == 3 and GetEventFlag(1049304243) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#loretta halig
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304258) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302048, 1)
		elif GetTalkListEntryResult() == 9 and GetEventFlag(1049304258) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#night's cavalry snowfield
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304259) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302095, 1)
		elif GetTalkListEntryResult() == 10 and GetEventFlag(1049304259) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#putrid avatar snowfield
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304260) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302096, 1)
		elif GetTalkListEntryResult() == 11 and GetEventFlag(1049304260) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#deathrite snowfield
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304256) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302094, 1)
		elif GetTalkListEntryResult() == 7 and GetEventFlag(1049304256) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#great wyrm theodorix
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304257) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302049, 1)
		elif GetTalkListEntryResult() == 8 and GetEventFlag(1049304257) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#malenia
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304261) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302016, 1049302722, 1049304261)
		elif GetTalkListEntryResult() == 12 and GetEventFlag(1049304261) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#dragonlord placidusax
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304262) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302011, 1)
		elif GetTalkListEntryResult() == 13 and GetEventFlag(1049304262) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#radagon+elden beast
		elif GetTalkListEntryResult() == 14 and (GetEventFlag(1049304263) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302012, 1)
		elif GetTalkListEntryResult() == 14 and GetEventFlag(1049304263) == 1 and GetEventFlag(1049304330) == 0:
			pass
		#mohg lord of blood
		elif GetTalkListEntryResult() == 15 and (GetEventFlag(1049304264) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302015, 1049302732, 1049304264)
		elif GetTalkListEntryResult() == 15 and GetEventFlag(1049304264) == 1 and GetEventFlag(1049304330) == 0:
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier dlc1
def t324001110_13():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300017), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#curseblade labirith
		AddTalkListDataIf(GetEventFlag(1049304265) == 0,1, 99993118, -1)
		#curseblade labirith (all items)
		AddTalkListDataIf(GetEventFlag(1049300265) == 1,1, 16000341, -1)
		#curseblade labirith (defeated)
		AddTalkListDataIf(GetEventFlag(1049304265) == 1,1, 16000340, -1)
		#demi-human queen marigga
		AddTalkListDataIf(GetEventFlag(1049304266) == 0,2, 99993128, -1)
		#demi-human queen marigga (all items)
		AddTalkListDataIf(GetEventFlag(1049300266) == 1,2, 16000351, -1)
		#demi-human queen marigga (defeated)
		AddTalkListDataIf(GetEventFlag(1049304266) == 1,2, 16000350, -1)
		#demi-human swordmaster onze
		AddTalkListDataIf(GetEventFlag(1049304267) == 0,3, 99993116, -1)
		#demi-human swordmaster onze (all items)
		AddTalkListDataIf(GetEventFlag(1049300267) == 1,3, 16000331, -1)
		#demi-human swordmaster onze (defeated)
		AddTalkListDataIf(GetEventFlag(1049304267) == 1,3, 16000330, -1)
		#chief bloodfiend
		AddTalkListDataIf(GetEventFlag(1049304268) == 0,4, 99993120, -1)
		#chief bloodfiend (all items)
		AddTalkListDataIf(GetEventFlag(1049300268) == 1,4, 16000339, -1)
		#chief bloodfiend (defeated)
		AddTalkListDataIf(GetEventFlag(1049304268) == 1,4, 16000338, -1)
		#dancer of ranah
		AddTalkListDataIf(GetEventFlag(1049304269) == 0,5, 99993122, -1)
		#dancer of ranah (all items)
		AddTalkListDataIf(GetEventFlag(1049300269) == 1,5, 16000335, -1)
		#dancer of ranah (defeated)
		AddTalkListDataIf(GetEventFlag(1049304269) == 1,5, 16000334, -1)
		#death knight fog
		AddTalkListDataIf(GetEventFlag(1049304270) == 0,6, 99993113, -1)
		#death knight fog (all items)
		AddTalkListDataIf(GetEventFlag(1049300270) == 1,6, 16000333, -1)
		#death knight fog (defeated)
		AddTalkListDataIf(GetEventFlag(1049304270) == 1,6, 16000332, -1)
		#divine beast dancing lion
		AddTalkListDataIf(GetEventFlag(1049304271) == 0,7, 16000525, -1)
		#divine beast dancing lion (all items)
		AddTalkListDataIf(GetEventFlag(1049300271) == 1,7, 16000345, -1)
		#divine beast dancing lion (defeated)
		AddTalkListDataIf(GetEventFlag(1049304271) == 1,7, 16000344, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302512, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302532, 1)
		#curseblade labirith
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304265) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302184, 1)
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304265) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#demi-human queen marigga
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304266) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302187, 1)
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304266) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#demi-human swordmaster onze
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304267) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302179, 1)
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304267) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#chief bloodfiend
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304268) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302183, 1)
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304268) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#dancer of ranah
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304269) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302182, 1)
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304269) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#death knight fog
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304270) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302180, 1)
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304270) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#divine beast dancing lion
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304271) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302167, 1)
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304271) == 1 or GetEventFlag(1049304330) == 0):
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier dlc2
def t324001110_14():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300018), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#ancient dragon-man
		AddTalkListDataIf(GetEventFlag(1049304272) == 0,1, 99993119, -1)
		#ancient dragon-man (all items)
		AddTalkListDataIf(GetEventFlag(1049300272) == 1,1, 16000383, -1)
		#ancient dragon-man (defeated)
		AddTalkListDataIf(GetEventFlag(1049304272) == 1,1, 16000382, -1)
		#black knight edredd
		AddTalkListDataIf(GetEventFlag(1049304273) == 0,2, 99993126, -1)
		#black knight edredd (all items)
		AddTalkListDataIf(GetEventFlag(1049300273) == 1,2, 16000355, -1)
		#black knight edredd (defeated)
		AddTalkListDataIf(GetEventFlag(1049304273) == 1,2, 16000354, -1)
		#dryleaf dane
		AddTalkListDataIf(GetEventFlag(1049304275) == 0,4, 99993129, -1)
		#dryleaf dane (all items)
		AddTalkListDataIf(GetEventFlag(1049300275) == 1,4, 16000369, -1)
		#dryleaf dane (defeated)
		AddTalkListDataIf(GetEventFlag(1049304275) == 1,4, 16000368, -1)
		#blackgaol knight
		AddTalkListDataIf(GetEventFlag(1049304276) == 0,5, 99993121, -1)
		#blackgaol knight (all items)
		AddTalkListDataIf(GetEventFlag(1049300276) == 1,5, 16000375, -1)
		#blackgaol knight (defeated)
		AddTalkListDataIf(GetEventFlag(1049304276) == 1,5, 16000374, -1)
		#black knight garrew
		AddTalkListDataIf(GetEventFlag(1049304277) == 0,6, 99993125, -1)
		#black knight garrew (all items)
		AddTalkListDataIf(GetEventFlag(1049300277) == 1,6, 16000357, -1)
		#black knight garrew (defeated)
		AddTalkListDataIf(GetEventFlag(1049304277) == 1,6, 16000356, -1)
		#red bear
		AddTalkListDataIf(GetEventFlag(1049304278) == 0,7, 99993124, -1)
		#red bear (all items)
		AddTalkListDataIf(GetEventFlag(1049300278) == 1,7, 16000343, -1)
		#red bear (defeated)
		AddTalkListDataIf(GetEventFlag(1049304278) == 1,7, 16000342, -1)
		#count ymir
		AddTalkListDataIf(GetEventFlag(1049304274) == 0,3, 99993127, -1)
		#count ymir (all items)
		AddTalkListDataIf(GetEventFlag(1049300274) == 1,3, 16000347, -1)
		#count ymir (defeated)
		AddTalkListDataIf(GetEventFlag(1049304274) == 1,3, 16000346, -1)
		#crucible knight devonia
		AddTalkListDataIf(GetEventFlag(1049304279) == 0,8, 99993142, -1)
		#crucible knight devonia (all items)
		AddTalkListDataIf(GetEventFlag(1049300279) == 1,8, 16000385, -1)
		#crucible knight devonia (defeated)
		AddTalkListDataIf(GetEventFlag(1049304279) == 1,8, 16000384, -1)
		#death knight scorpion
		AddTalkListDataIf(GetEventFlag(1049304280) == 0,9, 99993114, -1)
		#death knight scorpion (all items)
		AddTalkListDataIf(GetEventFlag(1049300280) == 1,9, 16000349, -1)
		#death knight scorpion (defeated)
		AddTalkListDataIf(GetEventFlag(1049304280) == 1,9, 16000348, -1)
		#ghostflame plain
		AddTalkListDataIf(GetEventFlag(1049304281) == 0,10, 99993139, -1)
		#ghostflame plain (all items)
		AddTalkListDataIf(GetEventFlag(1049300281) == 1,10, 16000337, -1)
		#ghostflame plain (defeated)
		AddTalkListDataIf(GetEventFlag(1049304281) == 1,10, 16000336, -1)
		#ralva
		AddTalkListDataIf(GetEventFlag(1049304282) == 0,11, 99993130, -1)
		#ralva (all items)
		AddTalkListDataIf(GetEventFlag(1049300282) == 1,11, 16000359, -1)
		#ralva (defeated)
		AddTalkListDataIf(GetEventFlag(1049304282) == 1,11, 16000358, -1)
		#rellana
		AddTalkListDataIf(GetEventFlag(1049304283) == 0,12, 16000526, -1)
		#rellana (all items)
		AddTalkListDataIf(GetEventFlag(1049300283) == 1,12, 16000361, -1)
		#rellana (defeated)
		AddTalkListDataIf(GetEventFlag(1049304283) == 1,12, 16000360, -1)
		#gold hippo
		AddTalkListDataIf(GetEventFlag(1049304284) == 0,13, 16000527, -1)
		#gold hippo (all items)
		AddTalkListDataIf(GetEventFlag(1049300284) == 1,13, 16000363, -1)
		#gold hippo (defeated)
		AddTalkListDataIf(GetEventFlag(1049304284) == 1,13, 16000362, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302513, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302533, 1)
		#ancient dragon-man
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304272) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302200, 1)
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304272) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#black knight edredd
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304273) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302190, 1)
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304273) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#count ymir
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304274) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302207, 1)
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304274) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#dryleaf dane
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304275) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302195, 1)
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304275) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#blackgaol knight
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304276) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302198, 1)
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304276) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#black knight garrew
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304277) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302191, 1)
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304277) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#red bear
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304278) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302185, 1)
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304278) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#crucible knight devonia
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304279) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302208, 1)
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304279) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#death knight scorpion
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304280) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302186, 1)
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304280) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#ghostflame plain
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304281) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302181, 1)
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304281) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#ralva
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304282) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302193, 1)
		elif GetTalkListEntryResult() == 11 and (GetEventFlag(1049304282) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#rellana
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304283) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302168, 1049302740, 1049304283)
		elif GetTalkListEntryResult() == 12 and (GetEventFlag(1049304283) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#gold hippo
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304284) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302169, 1049302718, 1049304284)
		elif GetTalkListEntryResult() == 13 and (GetEventFlag(1049304284) == 1 or GetEventFlag(1049304330) == 0):
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier dlc3
def t324001110_15():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300019), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#jagged drake
		AddTalkListDataIf(GetEventFlag(1049304285) == 0,1, 99993136, -1)
		#jagged drake (all items)
		AddTalkListDataIf(GetEventFlag(1049300285) == 1,1, 16000371, -1)
		#jagged drake (defeated)
		AddTalkListDataIf(GetEventFlag(1049304285) == 1,1, 16000370, -1)
		#rugalea
		AddTalkListDataIf(GetEventFlag(1049304286) == 0,2, 99993131, -1)
		#rugalea (all items)
		AddTalkListDataIf(GetEventFlag(1049300286) == 1,2, 16000373, -1)
		#rugalea (defeated)
		AddTalkListDataIf(GetEventFlag(1049304286) == 1,2, 16000372, -1)
		#deathrite charo
		AddTalkListDataIf(GetEventFlag(1049304287) == 0,3, 99993133, -1)
		#deathrite charo (all items)
		AddTalkListDataIf(GetEventFlag(1049300287) == 1,3, 16000367, -1)
		#deathrite charo (defeated)
		AddTalkListDataIf(GetEventFlag(1049304287) == 1,3, 16000366, -1)
		#ghostflame cerulean
		AddTalkListDataIf(GetEventFlag(1049304288) == 0,4, 99993140, -1)
		#ghostflame cerulean (all items)
		AddTalkListDataIf(GetEventFlag(1049300288) == 1,4, 16000365, -1)
		#ghostflame cerulean (defeated)
		AddTalkListDataIf(GetEventFlag(1049304288) == 1,4, 16000364, -1)
		#jori
		AddTalkListDataIf(GetEventFlag(1049304289) == 0,5, 99993115, -1)
		#jori (all items)
		AddTalkListDataIf(GetEventFlag(1049300289) == 1,5, 16000389, -1)
		#jori (defeated)
		AddTalkListDataIf(GetEventFlag(1049304289) == 1,5, 16000388, -1)
		#lamenter
		AddTalkListDataIf(GetEventFlag(1049304290) == 0,6, 99993117, -1)
		#lamenter (all items)
		AddTalkListDataIf(GetEventFlag(1049300290) == 1,6, 16000353, -1)
		#lamenter (defeated)
		AddTalkListDataIf(GetEventFlag(1049304290) == 1,6, 16000352, -1)
		#rakshasa
		AddTalkListDataIf(GetEventFlag(1049304291) == 0,7, 99993123, -1)
		#rakshasa (all items)
		AddTalkListDataIf(GetEventFlag(1049300291) == 1,7, 16000391, -1)
		#rakshasa (defeated)
		AddTalkListDataIf(GetEventFlag(1049304291) == 1,7, 16000390, -1)
		#putrescent
		AddTalkListDataIf(GetEventFlag(1049304292) == 0,8, 16000528, -1)
		#putrescent (all items)
		AddTalkListDataIf(GetEventFlag(1049300292) == 1,8, 16000377, -1)
		#putrescent (defeated)
		AddTalkListDataIf(GetEventFlag(1049304292) == 1,8, 16000376, -1)
		#scadutree
		AddTalkListDataIf(GetEventFlag(1049304293) == 0,9, 16000529, -1)
		#scadutree (all items)
		AddTalkListDataIf(GetEventFlag(1049300293) == 1,9, 16000379, -1)
		#scadutree (defeated)
		AddTalkListDataIf(GetEventFlag(1049304293) == 1,9, 16000378, -1)
		#gaius
		AddTalkListDataIf(GetEventFlag(1049304294) == 0,10, 16000530, -1)
		#gaius (all items)
		AddTalkListDataIf(GetEventFlag(1049300294) == 1,10, 16000381, -1)
		#gaius (defeated)
		AddTalkListDataIf(GetEventFlag(1049304294) == 1,10, 16000380, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302514, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302534, 1)
		#jagged drake
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304285) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302196, 1)
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304285) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#rugalea
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304286) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302197, 1)
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304286) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#deathrite charo
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304287) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302194, 1)
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304287) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#ghostflame cerulean
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304288) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302188, 1)
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304288) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#jori
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304289) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302199, 1)
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304289) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#lamenter
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304290) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302189, 1)
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304290) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#rakshasa
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304291) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302206, 1)
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304291) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#putrescent
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304292) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302170, 1049302738, 1049304292)
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304292) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#scadutree
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304293) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302171, 1)
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304293) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#commander gaius
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304294) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302172, 1049302704, 1049304294)
		elif GetTalkListEntryResult() == 10 and (GetEventFlag(1049304294) == 1 or GetEventFlag(1049304330) == 0):
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)

#tier dlc4
def t324001110_16():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300020), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#fallingstar hinter
		AddTalkListDataIf(GetEventFlag(1049304295) == 0,1, 99993134, -1)
		#fallingstar hinter (all items)
		AddTalkListDataIf(GetEventFlag(1049300295) == 1,1, 16000395, -1)
		#fallingstar hinter (defeated)
		AddTalkListDataIf(GetEventFlag(1049304295) == 1,1, 16000394, -1)
		#tree sentinels hinter
		AddTalkListDataIf(GetEventFlag(1049304296) == 0,2, 99993135, -1)
		#tree sentinels hinter (all items)
		AddTalkListDataIf(GetEventFlag(1049300296) == 1,2, 16000399, -1)
		#tree sentinels hinter (defeated)
		AddTalkListDataIf(GetEventFlag(1049304296) == 1,2, 16000398, -1)
		#divine beast dancing lion rauh
		AddTalkListDataIf(GetEventFlag(1049304297) == 0,3, 99993132, -1)
		#divine beast dancing lion rauh (all items)
		AddTalkListDataIf(GetEventFlag(1049300297) == 1,3, 16000393, -1)
		#divine beast dancing lion rauh (defeated)
		AddTalkListDataIf(GetEventFlag(1049304297) == 1,3, 16000392, -1)
		#ghostflame scadu
		AddTalkListDataIf(GetEventFlag(1049304298) == 0,4, 99993141, -1)
		#ghostflame scadu (all items)
		AddTalkListDataIf(GetEventFlag(1049300298) == 1,4, 16000387, -1)
		#ghostflame scadu (defeated)
		AddTalkListDataIf(GetEventFlag(1049304298) == 1,4, 16000386, -1)
		#jagged drake x2
		AddTalkListDataIf(GetEventFlag(1049304299) == 0,5, 99993137, -1)
		#jagged drake x2 (all items)
		AddTalkListDataIf(GetEventFlag(1049300299) == 1,5, 16000397, -1)
		#jagged drake x2 (defeated)
		AddTalkListDataIf(GetEventFlag(1049304299) == 1,5, 16000396, -1)
		#messmer
		AddTalkListDataIf(GetEventFlag(1049304300) == 0,6, 16000531, -1)
		#messmer (all items)
		AddTalkListDataIf(GetEventFlag(1049300300) == 1,6, 16000401, -1)
		#messmer (defeated)
		AddTalkListDataIf(GetEventFlag(1049304300) == 1,6, 16000400, -1)
		#midra
		AddTalkListDataIf(GetEventFlag(1049304301) == 0,7, 16000532, -1)
		#midra (all items)
		AddTalkListDataIf(GetEventFlag(1049300301) == 1,7, 16000405, -1)
		#midra (defeated)
		AddTalkListDataIf(GetEventFlag(1049304301) == 1,7, 16000404, -1)
		#romina
		AddTalkListDataIf(GetEventFlag(1049304302) == 0,8, 16000533, -1)
		#romina (all items)
		AddTalkListDataIf(GetEventFlag(1049300302) == 1,8, 16000407, -1)
		#romina (defeated)
		AddTalkListDataIf(GetEventFlag(1049304302) == 1,8, 16000406, -1)
		#metyr
		AddTalkListDataIf(GetEventFlag(1049304303) == 0,9, 16000534, -1)
		#metyr (all items)
		AddTalkListDataIf(GetEventFlag(1049300303) == 1,9, 16000403, -1)
		#metyr (defeated)
		AddTalkListDataIf(GetEventFlag(1049304303) == 1,9, 16000402, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302515, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302535, 1)
		#fallingstar hinter
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304295) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302202, 1)
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304295) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#tree sentinels hinter
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304296) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302204, 1)
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304296) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#divine beast dancing lion rauh
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304297) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302201, 1)
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304297) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#ghostflame scadu
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304298) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302192, 1)
		elif GetTalkListEntryResult() == 4 and (GetEventFlag(1049304298) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#jagged drake x2
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304299) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302203, 1)
		elif GetTalkListEntryResult() == 5 and (GetEventFlag(1049304299) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#messmer
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304300) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302173, 1049302726, 1049304300)
		elif GetTalkListEntryResult() == 6 and (GetEventFlag(1049304300) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#midra
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304301) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302175, 1049302730, 1049304301)
		elif GetTalkListEntryResult() == 7 and (GetEventFlag(1049304301) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#romina
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304302) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302176, 1049302744, 1049304302)
		elif GetTalkListEntryResult() == 8 and (GetEventFlag(1049304302) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#metyr
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304303) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302174, 1049302728, 1049304303)
		elif GetTalkListEntryResult() == 9 and (GetEventFlag(1049304303) == 1 or GetEventFlag(1049304330) == 0):
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
			
#tier dlc5
def t324001110_17():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#all undefeated tier bosses
		AddTalkListDataIf(not GetEventFlag(1049300021), 90, 99999041, -1)
		#all tier bosses
		AddTalkListDataIf(GetEventFlag(1049304330), 91, 99999042, -1)
		#ancient dragon senessax
		AddTalkListDataIf(GetEventFlag(1049304304) == 0,1, 99993138, -1)
		#ancient dragon senessax (all items)
		AddTalkListDataIf(GetEventFlag(1049300304) == 1,1, 16000409, -1)
		#ancient dragon senessax (defeated)
		AddTalkListDataIf(GetEventFlag(1049304304) == 1,1, 16000408, -1)
		#radahn consort of miquella
		AddTalkListDataIf(GetEventFlag(1049304305) == 0,2, 99993112, -1)
		#radahn consort of miquella (all items)
		AddTalkListDataIf(GetEventFlag(1049300305) == 1,2, 16000411, -1)
		#radahn consort of miquella (defeated)
		AddTalkListDataIf(GetEventFlag(1049304305) == 1,2, 16000410, -1)
		#bayle
		AddTalkListDataIf(GetEventFlag(1049304306) == 0,3, 99993110, -1)
		#bayle (all items)
		AddTalkListDataIf(GetEventFlag(1049300306) == 1,3, 16000413, -1)
		#bayle (defeated)
		AddTalkListDataIf(GetEventFlag(1049304306) == 1,3, 16000412, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#all undefeated tier bosses
		if GetTalkListEntryResult() == 90:
			SetEventFlag(1049302516, 1)
		#all tier bosses
		elif GetTalkListEntryResult() == 91:
			SetEventFlag(1049302536, 1)
		#ancient dragon senessax
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304304) == 0 or GetEventFlag(1049304330) == 1):
			SetEventFlag(1049302205, 1)
		elif GetTalkListEntryResult() == 1 and (GetEventFlag(1049304304) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#promised consort radahn
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304305) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302177, 1049302736, 1049304305)
		elif GetTalkListEntryResult() == 2 and (GetEventFlag(1049304305) == 1 or GetEventFlag(1049304330) == 0):
			pass
		#bayle
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304306) == 0 or GetEventFlag(1049304330) == 1):
			assert t324001110_62(1049302178, 1049302700, 1049304306)
		elif GetTalkListEntryResult() == 3 and (GetEventFlag(1049304306) == 1 or GetEventFlag(1049304330) == 0):
			pass
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#remembrance bosses
def t324001110_23():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:13040101:"godrick"
			AddTalkListData(1, 13040101, -1)
			# action:13040107:"rennala"
			AddTalkListData(2, 13040107, -1)
			# action:13040112:"regal ancestor"
			AddTalkListData(3, 13040112, -1)
			# action:13040102:"radahn"
			AddTalkListData(4, 13040102, -1)
			# action:13040111:"astel naturalborn"
			AddTalkListData(5, 13040111, -1)
			# action:13040108:"fortissax"
			AddTalkListData(6, 13040108, -1)
			# action:13040103:"morgott"
			AddTalkListData(7, 13040103, -1)
			# action:13040104:"rykard"
			AddTalkListData(8, 13040104, -1)
			# action:13040109:"maliketh"
			AddTalkListData(10, 13040109, -1)
			# action:13040114:"fire giant"
			AddTalkListData(9, 13040114, -1)
			# action:13040113:"hoarah loux"
			AddTalkListData(11, 13040113, -1)
			# action:13040115:"placidusax"
			AddTalkListData(12, 13040115, -1)
			# action:99992008:"radagon+eldenbeast"
			AddTalkListData(13, 99992008, -1)
			# action:13040117:"radagon"
			AddTalkListData(14, 13040117, -1)
			# action:13040116:"elden beast"
			AddTalkListData(15, 13040116, -1)	 
			# action:13040105:"mohg lord of blood"
			AddTalkListData(16, 13040105, -1)
			# action:13040106:"malenia"
			AddTalkListData(17, 13040106, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#godrick
			if GetTalkListEntryResult() == 1:
				assert t324001110_60(1049302000, 1049302716, 1049302717)
			#rennala
			elif GetTalkListEntryResult() == 2:
				assert t324001110_61(1049302001, 1049302742, 1049302743)
			#regal ancestor
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302002, 1)
			#radahn
			elif GetTalkListEntryResult() == 4:
				assert t324001110_60(1049302003, 1049302748, 1049302749)
			#astel
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302004, 1)
			#fortissax
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302005, 1)
			#morgott
			elif GetTalkListEntryResult() == 7:
				assert t324001110_60(1049302006, 1049302734, 1049302735)
			#rykard
			elif GetTalkListEntryResult() == 8:
				assert t324001110_61(1049302007, 1049302746, 1049302747)
			#fire giant
			elif GetTalkListEntryResult() == 9:
				assert t324001110_60(1049302008, 1049302712, 1049302713)
			#maliketh
			elif GetTalkListEntryResult() == 10:
				assert t324001110_60(1049302009, 1049302702, 1049302703)
			#hoarah loux
			elif GetTalkListEntryResult() == 11:
				assert t324001110_60(1049302010, 1049302714, 1049302715)
			#placidusax
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302011, 1)
			#radagon+elden beast
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302012, 1)
			#radagon
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302013, 1)
			#elden beast
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302014, 1)
			#mohg lord of blood
			elif GetTalkListEntryResult() == 16:
				assert t324001110_60(1049302015, 1049302732, 1049302733)
			#malenia
			elif GetTalkListEntryResult() == 17:
				assert t324001110_60(1049302016, 1049302722, 1049302723)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:13040111:"astel naturalborn"
			AddTalkListData(1, 13040111, -1)
			# action:13040109:"maliketh"
			AddTalkListData(2, 13040109, -1)
			# action:13040115:"placidusax"
			AddTalkListData(3, 13040115, -1)
			# action:13040116:"elden beast"
			AddTalkListData(4, 13040116, -1)
			# action:13040114:"fire giant"
			AddTalkListData(5, 13040114, -1)
			# action:13040113:"hoarah loux"
			AddTalkListData(6, 13040113, -1)
			# action:13040101:"godrick"
			AddTalkListData(7, 13040101, -1)
			# action:13040108:"fortissax"
			AddTalkListData(8, 13040108, -1)
			# action:13040106:"malenia"
			AddTalkListData(9, 13040106, -1)
			# action:13040105:"mohg lord of blood"
			AddTalkListData(10, 13040105, -1)
			# action:13040103:"morgott"
			AddTalkListData(11, 13040103, -1)
			# action:99992008:"radagon+eldenbeast"
			AddTalkListData(12, 99992008, -1)
			# action:13040117:"radagon"
			AddTalkListData(13, 13040117, -1)
			# action:13040112:"regal ancestor"
			AddTalkListData(14, 13040112, -1)
			# action:13040107:"rennala"
			AddTalkListData(15, 13040107, -1)
			# action:13040104:"rykard"
			AddTalkListData(16, 13040104, -1)
			# action:13040102:"radahn"
			AddTalkListData(17, 13040102, -1)			 
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#astel
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302004, 1)
			#beast clergyman
			elif GetTalkListEntryResult() == 2:
				assert t324001110_60(1049302009, 1049302702, 1049302703)
			#dragonlord placidusax
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302011, 1)
			#elden beast
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302014, 1)
			#fire giant
			elif GetTalkListEntryResult() == 5:
				assert t324001110_60(1049302008, 1049302712, 1049302713)
			#godfrey/hoarah
			elif GetTalkListEntryResult() == 6:
				assert t324001110_60(1049302010, 1049302714, 1049302715)
			#godrick
			elif GetTalkListEntryResult() == 7:
				assert t324001110_60(1049302000, 1049302716, 1049302717)
			#lichdragon fortissax
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302005, 1)
			#malenia
			elif GetTalkListEntryResult() == 9:
				assert t324001110_60(1049302016, 1049302722, 1049302723)
			#mohg lord of blood
			elif GetTalkListEntryResult() == 10:
				assert t324001110_60(1049302015, 1049302732, 1049302733)
			#morgott
			elif GetTalkListEntryResult() == 11:
				assert t324001110_60(1049302006, 1049302734, 1049302735)
			#radagon+elden beast
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302012, 1)
			#radagon
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302013, 1)
			#regal ancestor
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302002, 1)
			#rennala
			elif GetTalkListEntryResult() == 15:
				assert t324001110_61(1049302001, 1049302742, 1049302743)
			#rykard
			elif GetTalkListEntryResult() == 16:
				assert t324001110_61(1049302007, 1049302746, 1049302747)
			#starscourge radahn
			elif GetTalkListEntryResult() == 17:
				assert t324001110_60(1049302003, 1049302748, 1049302749)
			else:
				return 0
			SetEventFlag(1049302228, 1)
	
#great enemies
def t324001110_24():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:13040132:"leonine misbegotten"
			AddTalkListData(1, 13040161, -1)
			# action:13040127:"margit"
			AddTalkListData(2, 13040127, -1)
			# action:13040131:"dragonkin soldier of nokstella"
			AddTalkListData(3, 13040131, -1)
			# action:13040134:"agheel"
			AddTalkListData(4, 13040134, -1)
			# action:13040128:"ancestor spirit"
			AddTalkListData(5, 13040128, -1)
			# action:13040133:"red wolf of radagon"
			AddTalkListData(6, 13040133, -1)
			# action:13040126:"loretta caria"
			AddTalkListData(7, 13040126, -1)
			# action:13040141:"makar"
			AddTalkListData(8, 13040141, -1)
			# action:13040122:"elemer"
			AddTalkListData(11, 13040122, -1)
			# action:13040124:"o'neil"
			AddTalkListData(10, 13040124, -1)
			# action:99992007:"dragonkin soldier (siofra)"
			AddTalkListData(15, 99992007, -1)
			# action:13040136:"smarag"
			AddTalkListData(12, 13040136, -1)
			# action:13040155:"mimic tear"
			AddTalkListData(13, 13040155, -1)
			# action:99990207:"misbegotten warrior + crucible knight"
			AddTalkListData(9, 99990207, -1)
			# action:13040118:"goldfrey"
			AddTalkListData(17, 13040118, -1)
			# action:13040142:"godskin noble (volcano)"
			AddTalkListData(18, 13040142, -1)
			# action:13040145:"crucible knight siluria"
			AddTalkListData(23, 13040145, -1)
			# action:15000378:"fia's champions"
			AddTalkListData(16, 15000378, -1)
			# action:20000001:"magma wyrm (gelmir)"
			AddTalkListData(19, 20000001, -1)
			# action:13040121:"valiant gargoyles"
			AddTalkListData(20, 13040121, -1)
			# action:99992004:"lansseax"		
			AddTalkListData(21, 99992004, -1)
			# action:13040129:"dragonkin soldier (lake of rot)"
			AddTalkListData(24, 13040129, -1)
			# action:13040123:"niall"
			AddTalkListData(22, 13040123, -1)
			# action:13040138:"ekzykes"
			AddTalkListData(14, 13040138, -1)
			# action:13040144:"mohg the omen"
			AddTalkListData(25, 13040144, -1)
			# action:13040143:"godskin apostle (caelid)"
			AddTalkListData(27, 13040143, -1)
			# action:13040148:"greyll"
			AddTalkListData(30, 13040148, -1)
			# action:13040135:"adula"
			AddTalkListData(31, 13040135, -1)
			# action:13040119:"godskin duo"
			AddTalkListData(26, 13040119, -1)
			# action:13040146:"gideon"
			AddTalkListData(28, 13040146, -1)
			# action:13040137:"borealis"
			AddTalkListData(29, 13040137, -1)
			# action:13040125:"loretta haligtree"
			AddTalkListData(33, 13040125, -1)
			# action:13040139:"great wyrm theodorix"
			AddTalkListData(32, 13040139, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#leonine
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302017, 1)
			#margit
			elif GetTalkListEntryResult() == 2:
				assert t324001110_60(1049302018, 1049302724, 1049302725)
			#dragonkin nokstella
			elif GetTalkListEntryResult() == 3:
				assert t324001110_60(1049302019, 1049302708, 1049302709)
			#agheel
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302020, 1)
			#ancestor spirit
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302021, 1)
			#red wolf of radagon
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302022, 1)
			#loretta (caria)
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302023, 1)
			#makar
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302024, 1)
			#misbegotten+crucible
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302025, 1)
			#o'neil
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302026, 1)
			#elemer
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302027, 1)
			#smarag
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302028, 1)
			#mimic tear
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302029, 1)
			#ekzykes
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302030, 1)
			#dragonkin siofra
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302031, 1)
			#fia's champs
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302032, 1)
			#goldfrey
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302033, 1)
			#godskin noble (volcano)
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302034, 1)
			#magma wyrm gelmir
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302035, 1)
			#valiant gargoyles
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302036, 1)
			#lansseax
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302037, 1)
			#commander niall
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302040, 1)
			#crucible knight siluria
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302041, 1)
			#dragonkin soldier (rot)
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302038, 1)
			#mohg (sewers)
			elif GetTalkListEntryResult() == 25:
				SetEventFlag(1049302039, 1)
			#godskin duo
			elif GetTalkListEntryResult() == 26:
				SetEventFlag(1049302042, 1)
			#godskin apostle (caelid)
			elif GetTalkListEntryResult() == 27:
				SetEventFlag(1049302043, 1)
			#gideon
			elif GetTalkListEntryResult() == 28:
				SetEventFlag(1049302044, 1)
			#borealis
			elif GetTalkListEntryResult() == 29:
				SetEventFlag(1049302045, 1)
			#greyll
			elif GetTalkListEntryResult() == 30:
				SetEventFlag(1049302046, 1)
			#adula
			elif GetTalkListEntryResult() == 31:
				SetEventFlag(1049302047, 1)
			#great wyrm theodorix
			elif GetTalkListEntryResult() == 32:
				SetEventFlag(1049302049, 1)
			#loretta halig
			elif GetTalkListEntryResult() == 33:
				SetEventFlag(1049302048, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:13040128:"ancestor spirit"
			AddTalkListData(1, 13040128, -1)
			# action:99992004:"lansseax"
			AddTalkListData(2, 99992004, -1)
			# action:13040137:"borealis"
			AddTalkListData(3, 13040137, -1)
			# action:13040123:"niall"
			AddTalkListData(4, 13040123, -1)
			# action:13040124:"o'neil"
			AddTalkListData(5, 13040124, -1)
			# action:13040145:"crucible knight siluria"
			AddTalkListData(6, 13040145, -1)
			# action:13040138:"ekzykes"
			AddTalkListData(7, 13040138, -1)
			# action:13040131:"dragonkin soldier of nokstella"
			AddTalkListData(8, 13040131, -1)
			# action:99992007:"dragonkin soldier (siofra)"
			AddTalkListData(9, 99992007, -1)
			# action:13040129:"dragonkin soldier (lake of rot)"
			AddTalkListData(10, 13040129, -1)
			# action:13040122:"elemer"
			AddTalkListData(11, 13040122, -1)
			# action:15000378:"fia's champions"
			AddTalkListData(12, 15000378, -1)
			# action:13040134:"agheel"
			AddTalkListData(13, 13040134, -1)
			# action:13040148:"greyll"
			AddTalkListData(14, 13040148, -1)
			# action:13040136:"smarag"
			AddTalkListData(15, 13040136, -1)
			# action:13040135:"adula"
			AddTalkListData(16, 13040135, -1)
			# action:13040118:"goldfrey"
			AddTalkListData(17, 13040118, -1)
			# action:13040143:"godskin apostle (caelid)"
			AddTalkListData(18, 13040143, -1)
			# action:13040119:"godskin duo"
			AddTalkListData(19, 13040119, -1)
			# action:13040142:"godskin noble (volcano)"
			AddTalkListData(20, 13040142, -1)
			# action:13040139:"great wyrm theodorix"
			AddTalkListData(21, 13040139, -1)
			# action:13040132:"leonine misbegotten"
			AddTalkListData(22, 13040161, -1)
			# action:13040125:"loretta haligtree"
			AddTalkListData(23, 13040125, -1)
			# action:13040141:"makar"
			AddTalkListData(24, 13040141, -1)
			# action:20000001:"magma wyrm (gelmir)"
			AddTalkListData(25, 20000001, -1)
			# action:13040127:"margit"
			AddTalkListData(26, 13040127, -1)
			# action:13040155:"mimic tear"
			AddTalkListData(27, 13040155, -1)
			# action:99990207:"misbegotten warrior + crucible knight"
			AddTalkListData(28, 99990207, -1)
			# action:13040144:"mohg the omen"
			AddTalkListData(29, 13040144, -1)
			# action:13040133:"red wolf of radagon"
			AddTalkListData(30, 13040133, -1)
			# action:13040126:"loretta caria"
			AddTalkListData(31, 13040126, -1)
			# action:13040146:"gideon"
			AddTalkListData(32, 13040146, -1)
			# action:13040121:"valiant gargoyles"
			AddTalkListData(33, 13040121, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#ancestor spirit
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302021, 1)
			#ancient dragon lansseax
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302037, 1)
			#borealis
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302045, 1)
			#commander niall
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302040, 1)
			#commander o'neil
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302026, 1)
			#crucible knight siluria
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302041, 1)
			#decaying ekzykes
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302030, 1)
			#dragonkin nokstella
			elif GetTalkListEntryResult() == 8:
				assert t324001110_60(1049302019, 1049302708, 1049302709)
			#dragonkin (siofra)
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302031, 1)
			#dragonkin (rot)
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302038, 1)
			#elemer
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302027, 1)
			#fia's champs
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302032, 1)
			#flying dragon agheel
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302020, 1)
			#flying dragon greyll
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302046, 1)
			#glintstone dragon smarag
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302028, 1)
			#glintstone dragon adula
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302047, 1)
			#godfrey golden shade
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302033, 1)
			#godskin apostle (caelid)
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302043, 1)
			#godskin duo
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302042, 1)
			#godskin noble
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302034, 1)
			#great wyrm theodorix
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302049, 1)
			#leonine
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302017, 1)
			#loretta halig
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302048, 1)
			#magma wyrm makar
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302024, 1)
			#magma wyrm (gelmir)
			elif GetTalkListEntryResult() == 25:
				SetEventFlag(1049302035, 1)
			#margit
			elif GetTalkListEntryResult() == 26:
				assert t324001110_60(1049302018, 1049302724, 1049302725)
			#mimic tear
			elif GetTalkListEntryResult() == 27:
				SetEventFlag(1049302029, 1)
			#misbegotten+crucible
			elif GetTalkListEntryResult() == 28:
				SetEventFlag(1049302025, 1)
			#mohg
			elif GetTalkListEntryResult() == 29:
				SetEventFlag(1049302039, 1)
			#red wolf of radagon
			elif GetTalkListEntryResult() == 30:
				SetEventFlag(1049302022, 1)
			#royal knight loretta
			elif GetTalkListEntryResult() == 31:
				SetEventFlag(1049302023, 1)
			#sir gideon ofnir
			elif GetTalkListEntryResult() == 32:
				SetEventFlag(1049302044, 1)
			#valiant gargs
			elif GetTalkListEntryResult() == 33:
				SetEventFlag(1049302036, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)

#minor bosses
def t324001110_25():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		# action:99993019:"overworld"
		AddTalkListData(1, 99993019, -1)
		# action:99993018:"evergaols"
		AddTalkListData(2, 99993018, -1)
		# action:99993017:"catacombs"
		AddTalkListData(3, 99993017, -1)
		# action:99993016:"caves"
		AddTalkListData(4, 99993016, -1)
		# action:99993015:"tunnels/ruins"
		AddTalkListData(5, 99993015, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			assert t324001110_28()
		elif GetTalkListEntryResult() == 2:
			assert t324001110_29()
		elif GetTalkListEntryResult() == 3:
			assert t324001110_30()
		elif GetTalkListEntryResult() == 4:
			assert t324001110_31()
		elif GetTalkListEntryResult() == 5:
			assert t324001110_32()
		else:
			return 0

#overworld bosses
def t324001110_28():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			# action:15000529:"deathbird (limgrave)"
			AddTalkListData(1, 15000529, -1)
			# action:15000537:"night's cavalry (limgrave)"
			AddTalkListData(3, 15000537, -1)
			# action:13040157:"tibia mariner (limgrave)"
			AddTalkListData(4, 13040157, -1)
			# action:13040153:"tree sentinel (limgrave)"
			AddTalkListData(5, 13040153, -1)
			# action:13040158:"bell bearing hunter (limgrave)"
			AddTalkListData(2, 13040158, -1)
			# action:13040152:"deathbird (weeping)"
			AddTalkListData(6, 13040152, -1)
			# action:15000373:"erdtree avatar (weeping)"
			AddTalkListData(7, 15000373, -1)
			# action:15000538:"night's cavalry (weeping)"
			AddTalkListData(8, 15000538, -1)
			# action:13040156:"grafted scion (chapel)"
			AddTalkListData(9, 13040156, -1)
			# action:15000375:"omenkiller (albinaurics)"
			AddTalkListData(18, 15000375, -1)
			# action:15000531:"deahbird (liurnia)"
			AddTalkListData(12, 15000531, -1)
			# action:15000539:"night's cavalry (liurnia east)"
			AddTalkListData(16, 15000539, -1)
			# action:15000381:"nox swordstress and monk"
			AddTalkListData(10, 15000381, -1)
			# action:15000708:"bell bearing hunter (liurnia)"
			AddTalkListData(11, 15000708, -1)
			# action:15000533:"death rite bird (liurnia)"
			AddTalkListData(13, 15000533, -1)
			# action:15000524:"erdtree avatar (liurnia west)"
			AddTalkListData(14, 15000524, -1)
			# action:15000525:"erdtree avatar (liurnia east)"
			AddTalkListData(15, 15000525, -1)
			# action:15000701:"night's cavalry (liurnia north)"
			AddTalkListData(17, 15000701, -1)
			# action:15000706:"tibia mariner (liurnia)"
			AddTalkListData(19, 15000706, -1)
			# action:15000534:"death rite bird (caelid)"
			AddTalkListData(20, 15000534, -1)
			# action:15000702:"night's cavalry (caelid)"
			AddTalkListData(21, 15000702, -1)
			# action:15000374:"putrid avatar (caelid)"
			AddTalkListData(22, 15000374, -1)
			# action:15000374:"bk assassin (altus)"
			AddTalkListData(23, 15000461, -1)
			# action:15000377:"giant wormface"
			AddTalkListData(25, 15000377, -1)
			# action:99992005:"godskin apostle (altus)"
			AddTalkListData(26, 99992005, -1)
			# action:15000703:"night's cavalry (altus)"
			AddTalkListData(27, 15000703, -1)
			# action:15000456:"tree sentinels (altus)"
			AddTalkListData(28, 15000456, -1)
			# action:15000709:"bell bearing hunter (outskirts)"
			AddTalkListData(29, 15000709, -1)
			# action:15000532:"deathbird (outskirts)"
			AddTalkListData(30, 15000532, -1)
			# action:15000376:"demi-human queen maggie"
			AddTalkListData(31, 15000376, -1)
			# action:13040154:"draconic tree sentinel"
			AddTalkListData(32, 13040154, -1)
			# action:15000719:"fallingstar beast (altus)"
			AddTalkListData(24, 15000719, -1)
			# action:15000707:"tibia mariner (altus)"
			AddTalkListData(33, 15000707, -1)
			# action:15000536:"ulcerated tree spirit (gelmir)"
			AddTalkListData(34, 15000536, -1)
			# action:20000002:"black blade kindred (forbidden lands)"
			AddTalkListData(35, 20000002, -1)
			# action:15000379:"fell twins"
			AddTalkListData(36, 15000379, -1)
			# action:13040151:"death rite bird (mountaintops"
			AddTalkListData(38, 13040151, -1)
			# action:15000526:"erdtree avatar (mountaintops)"
			AddTalkListData(39, 15000526, -1)
			# action:13040149:"fullgrown fallingstar beast"
			AddTalkListData(37, 13040149, -1)
			# action:15000704:"night's cavalry (forbidden lands)"
			AddTalkListData(40, 15000704, -1)
			# action:15000718:"bell bearing hunter (dragonbarrow)"
			AddTalkListData(41, 15000718, -1)
			# action:13040159:"night's cavalry (dragonbarrow)"
			AddTalkListData(43, 13040159, -1)
			# action:15000527:"putrid avatar (dragonbarrow)"
			AddTalkListData(44, 15000527, -1)
			# action:13040147:"black blade kindred (dragonbarrow)"
			AddTalkListData(42, 13040147, -1)
			# action:15000705:"night's cavalry (snowfield)"
			AddTalkListData(46, 15000705, -1)
			# action:15000528:"putrid avatar (snowfield)"
			AddTalkListData(47, 15000528, -1)
			# action:15000535:"death rite bird (snowfield)"
			AddTalkListData(45, 15000535, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#deathbird limgrave
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302051, 1)
			#night's cavalry limgrave
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302052, 1)
			#tibia limgrave
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302053, 1)
			#tree sentinel
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302054, 1)
			#bell bearing limgrave
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302050, 1)
			#deathbird weeping
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302055, 1)
			#erdtree avatar weeping
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302056, 1)
			#night's cavalry weeping
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302057, 1)
			#grafted scion
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302058, 1)
			#nox duo
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302059, 1)
			#bell bearing liurnia
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302060, 1)
			#deathbird liurnia
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302061, 1)
			#deathrite liurnia
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302062, 1)
			#erdtree avatar liurnia west
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302063, 1)
			#erdtree avatar liurnia east
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302064, 1)
			#night's cavalry liurnia east
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302070, 1)
			#night's cavalry liurnia north
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302065, 1)
			#omenkiller
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302066, 1)
			#tibia liurnia
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302067, 1)
			#deathrite caelid
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302068, 1)
			#night's cavalry caelid
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302069, 1)
			#putrid avatar caelid
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302071, 1)
			#black knife assassin (altus)
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302072, 1)
			#fallingstar altus
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302073, 1)
				#giant wormface
			elif GetTalkListEntryResult() == 25:
				SetEventFlag(1049302075, 1)
			#godskin apostle altus
			elif GetTalkListEntryResult() == 26:
				SetEventFlag(1049302074, 1)
			#night's cavalry altus
			elif GetTalkListEntryResult() == 27:
				SetEventFlag(1049302076, 1)
			#tree sentinels altus
			elif GetTalkListEntryResult() == 28:
				SetEventFlag(1049302077, 1)
			#bell bearing outskirts
			elif GetTalkListEntryResult() == 29:
				SetEventFlag(1049302078, 1)
			#deathbird outskirts
			elif GetTalkListEntryResult() == 30:
				SetEventFlag(1049302079, 1)
			#demi-human queen maggie
			elif GetTalkListEntryResult() == 31:
				SetEventFlag(1049302080, 1)
			#draconic sentinel
			elif GetTalkListEntryResult() == 32:
				SetEventFlag(1049302081, 1)
			#tibia altus
			elif GetTalkListEntryResult() == 33:
				SetEventFlag(1049302082, 1)
			#ulcerated tree spirit gelmir
			elif GetTalkListEntryResult() == 34:
				SetEventFlag(1049302083, 1)
			#black blade kindred forbidden
			elif GetTalkListEntryResult() == 35:
				SetEventFlag(1049302084, 1)
			#fell twins
			elif GetTalkListEntryResult() == 36:
				SetEventFlag(1049302085, 1)
			#fullgrown fallingstar
			elif GetTalkListEntryResult() == 37:
				SetEventFlag(1049302086, 1)
			#deathrite mountaintops
			elif GetTalkListEntryResult() == 38:
				SetEventFlag(1049302087, 1)
			#erdtree avatar mountaintops
			elif GetTalkListEntryResult() == 39:
				SetEventFlag(1049302088, 1)
			#night's cavalry forbidden
			elif GetTalkListEntryResult() == 40:
				SetEventFlag(1049302089, 1)
			#bell bearing dragonbarrow
			elif GetTalkListEntryResult() == 41:
				SetEventFlag(1049302090, 1)
			#black blade kindred dragonbarrow
			elif GetTalkListEntryResult() == 42:
				SetEventFlag(1049302091, 1)
			#night's cavalry dragonbarrow
			elif GetTalkListEntryResult() == 43:
				SetEventFlag(1049302092, 1)
			#putrid avatar dragonbarrow
			elif GetTalkListEntryResult() == 44:
				SetEventFlag(1049302093, 1)
			#deathrite snowfield
			elif GetTalkListEntryResult() == 45:
				SetEventFlag(1049302094, 1)
			#night's cavalry snowfield
			elif GetTalkListEntryResult() == 46:
				SetEventFlag(1049302095, 1)
			#putrid avatar snowfield
			elif GetTalkListEntryResult() == 47:
				SetEventFlag(1049302096, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			# action:13040158:"bell bearing hunter (limgrave)"
			AddTalkListData(1, 13040158, -1)
			# action:15000708:"bell bearing hunter (liurnia)"
			AddTalkListData(2, 15000708, -1)
			# action:15000709:"bell bearing hunter (outskirts)"
			AddTalkListData(3, 15000709, -1)
			# action:15000718:"bell bearing hunter (dragonbarrow)"
			AddTalkListData(4, 15000718, -1)
			# action:20000002:"black blade kindred (forbidden lands)"
			AddTalkListData(5, 20000002, -1)
			# action:13040147:"black blade kindred (dragonbarrow)"
			AddTalkListData(6, 13040147, -1)
			# action:15000374:"bk assassin (altus)"
			AddTalkListData(7, 15000461, -1)
			# action:15000529:"deathbird (limgrave)"
			AddTalkListData(8, 15000529, -1)
			# action:13040152:"deathbird (weeping)"
			AddTalkListData(9, 13040152, -1)
			# action:15000531:"deahbird (liurnia)"
			AddTalkListData(10, 15000531, -1)
			# action:15000532:"deathbird (outskirts)"
			AddTalkListData(11, 15000532, -1)
			# action:15000533:"death rite bird (liurnia)"
			AddTalkListData(12, 15000533, -1)
			# action:15000534:"death rite bird (caelid)"
			AddTalkListData(13, 15000534, -1)
			# action:13040151:"death rite bird (mountaintops)"
			AddTalkListData(14, 13040151, -1)
			# action:15000535:"death rite bird (snowfield)"
			AddTalkListData(15, 15000535, -1)
			# action:15000376:"demi-human queen maggie"
			AddTalkListData(16, 15000376, -1)
			# action:13040154:"draconic tree sentinel"
			AddTalkListData(17, 13040154, -1)
			# action:15000373:"erdtree avatar (weeping)"
			AddTalkListData(18, 15000373, -1)
			# action:15000525:"erdtree avatar (liurnia east)"
			AddTalkListData(19, 15000525, -1)
			# action:15000524:"erdtree avatar (liurnia west)"
			AddTalkListData(20, 15000524, -1)
			# action:15000526:"erdtree avatar (mountaintops)"
			AddTalkListData(21, 15000526, -1)
			# action:15000719:"fallingstar beast (altus)"
			AddTalkListData(22, 15000719, -1)
			# action:15000379:"fell twins"
			AddTalkListData(23, 15000379, -1)
			# action:13040149:"fullgrown fallingstar beast"
			AddTalkListData(24, 13040149, -1)
			# action:15000377:"giant wormface"
			AddTalkListData(25, 15000377, -1)
			# action:99992005:"godskin apostle (altus)"
			AddTalkListData(26, 99992005, -1)
			# action:13040156:"grafted scion (chapel)"
			AddTalkListData(27, 13040156, -1)
			# action:15000537:"night's cavalry (limgrave)"
			AddTalkListData(28, 15000537, -1)
			# action:15000538:"night's cavalry (weeping)"
			AddTalkListData(29, 15000538, -1)
			# action:15000539:"night's cavalry (liurnia east)"
			AddTalkListData(30, 15000539, -1)
			# action:15000701:"night's cavalry (liurnia north)"
			AddTalkListData(31, 15000701, -1)
			# action:15000702:"night's cavalry (caelid)"
			AddTalkListData(32, 15000702, -1)
			# action:15000703:"night's cavalry (altus)"
			AddTalkListData(33, 15000703, -1)
			# action:15000704:"night's cavalry (forbidden lands)"
			AddTalkListData(34, 15000704, -1)
			# action:13040159:"night's cavalry (dragonbarrow)"
			AddTalkListData(35, 13040159, -1)
			# action:15000705:"night's cavalry (snowfield)"
			AddTalkListData(36, 15000705, -1)
			# action:15000381:"nox swordstress and monk"
			AddTalkListData(37, 15000381, -1)
			# action:15000375:"omenkiller (albinaurics)"
			AddTalkListData(38, 15000375, -1)
			# action:15000374:"putrid avatar (caelid)"
			AddTalkListData(39, 15000374, -1)
			# action:15000527:"putrid avatar (dragonbarrow)"
			AddTalkListData(40, 15000527, -1)
			# action:15000528:"putrid avatar (snowfield)"
			AddTalkListData(41, 15000528, -1)
			# action:13040157:"tibia mariner (limgrave)"
			AddTalkListData(42, 13040157, -1)
			# action:15000706:"tibia mariner (liurnia)"
			AddTalkListData(43, 15000706, -1)
			# action:15000707:"tibia mariner (altus)"
			AddTalkListData(44, 15000707, -1)
			# action:13040153:"tree sentinel (limgrave)"
			AddTalkListData(45, 13040153, -1)
			# action:15000456:"tree sentinels (altus)"
			AddTalkListData(46, 15000456, -1)
			# action:15000536:"ulcerated tree spirit (gelmir)"
			AddTalkListData(47, 15000536, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#bell bearing limgrave
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302050, 1)
			#bell bearing liurnia
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302060, 1)
			#bell bearing outskirts
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302078, 1)
			#bell bearing dragonbarrow
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302090, 1)
			#black blade kindred forbidden
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302084, 1)
			#black blade kindred dragonbarrow
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302091, 1)
			#black knife assassin (altus)
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302072, 1)
			#deathbird limgrave
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302051, 1)
			#deathbird weeping
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302055, 1)
			#deathbird liurnia
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302061, 1)
			#deathbird outskirts
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302079, 1)
			#deathrite liurnia
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302062, 1)
			#deathrite caelid
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302068, 1)
			#deathrite mountaintops
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302087, 1)
			#deathrite snowfield
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302094, 1)
			#demi-human queen maggie
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302080, 1)
			#draconic sentinel
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302081, 1)
			#erdtree avatar weeping
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302056, 1)
			#erdtree avatar liurnia east
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302064, 1)
			#erdtree avatar liurnia west
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302063, 1)
			#erdtree avatar mountaintops
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302088, 1)
			#fallingstar altus
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302073, 1)
			#fell twins
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302085, 1)
			#fullgrown fallingstar
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302086, 1)
			#giant wormface
			elif GetTalkListEntryResult() == 25:
				SetEventFlag(1049302075, 1)
			#godskin apostle altus
			elif GetTalkListEntryResult() == 26:
				SetEventFlag(1049302074, 1)
			#grafted scion
			elif GetTalkListEntryResult() == 27:
				SetEventFlag(1049302058, 1)
			#night's cavalry limgrave
			elif GetTalkListEntryResult() == 28:
				SetEventFlag(1049302052, 1)
			#night's cavalry weeping
			elif GetTalkListEntryResult() == 29:
				SetEventFlag(1049302057, 1)
			#night's cavalry liurnia east
			elif GetTalkListEntryResult() == 30:
				SetEventFlag(1049302070, 1)
			#night's cavalry liurnia north
			elif GetTalkListEntryResult() == 31:
				SetEventFlag(1049302065, 1)
			#night's cavalry caelid
			elif GetTalkListEntryResult() == 32:
				SetEventFlag(1049302069, 1)
			#night's cavalry altus
			elif GetTalkListEntryResult() == 33:
				SetEventFlag(1049302076, 1)
			#night's cavalry forbidden
			elif GetTalkListEntryResult() == 34:
				SetEventFlag(1049302089, 1)
			#night's cavalry dragonbarrow
			elif GetTalkListEntryResult() == 35:
				SetEventFlag(1049302092, 1)
			#night's cavalry snowfield
			elif GetTalkListEntryResult() == 36:
				SetEventFlag(1049302095, 1)
			#nox duo
			elif GetTalkListEntryResult() == 37:
				SetEventFlag(1049302059, 1)
			#omenkiller
			elif GetTalkListEntryResult() == 38:
				SetEventFlag(1049302066, 1)
			#putrid avatar caelid
			elif GetTalkListEntryResult() == 39:
				SetEventFlag(1049302071, 1)
			#putrid avatar dragonbarrow
			elif GetTalkListEntryResult() == 40:
				SetEventFlag(1049302093, 1)
			#putrid avatar snowfield
			elif GetTalkListEntryResult() == 41:
				SetEventFlag(1049302096, 1)
			#tibia limgrave
			elif GetTalkListEntryResult() == 42:
				SetEventFlag(1049302053, 1)
			#tibia liurnia
			elif GetTalkListEntryResult() == 43:
				SetEventFlag(1049302067, 1)
			#tibia altus
			elif GetTalkListEntryResult() == 44:
				SetEventFlag(1049302082, 1)
			#tree sentinel
			elif GetTalkListEntryResult() == 45:
				SetEventFlag(1049302054, 1)
			#tree sentinels altus
			elif GetTalkListEntryResult() == 46:
				SetEventFlag(1049302077, 1)
			#ulcerated tree spirit gelmir
			elif GetTalkListEntryResult() == 47:
				SetEventFlag(1049302083, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)

#evergaols
def t324001110_29():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000382:"darriwil"
			AddTalkListData(1, 15000382, -1)
			# action:15000384:"ancient hero of zamor"
			AddTalkListData(2, 15000384, -1)
			# action:15000383:"crucible knight"
			AddTalkListData(3, 15000383, -1)
			# action:15000386:"adan"
			AddTalkListData(4, 15000386, -1)
			# action:15000387:"bols"
			AddTalkListData(5, 15000387, -1)
			# action:15000388:"onyx lord"
			AddTalkListData(6, 15000388, -1)
			# action:15000389:"hugues"
			AddTalkListData(7, 15000389, -1)
			# action:15000391:"godefroy"
			AddTalkListData(8, 15000392, -1)
			# action:15000392:"vyke"
			AddTalkListData(9, 15000391, -1)
			# action:15000393:"alecto"
			AddTalkListData(10, 15000393, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#bloodhound knight darriwil
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302097, 1)
			#ancient hero of zamor gaol 
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302098, 1)
			#crucible knight gaol
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302099, 1)
			#adan
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302100, 1)
			#bols
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302101, 1)
			#onyx lord gaol
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302102, 1)
			#battlemage hugues
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302103, 1)
			#godefroy
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302105, 1)
			#roundtable knight vyke
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302104, 1)
			#alecto
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302106, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000386:"adan"
			AddTalkListData(1, 15000386, -1)
			# action:15000393:"alecto"
			AddTalkListData(2, 15000393, -1)
			# action:15000384:"ancient hero of zamor"
			AddTalkListData(3, 15000384, -1)
			# action:15000389:"hugues"
			AddTalkListData(4, 15000389, -1)
			# action:15000382:"darriwil"
			AddTalkListData(5, 15000382, -1)
			# action:15000387:"bols"
			AddTalkListData(6, 15000387, -1)
			# action:15000383:"crucible knight"
			AddTalkListData(7, 15000383, -1)
			# action:15000392:"godefroy"
			AddTalkListData(8, 15000392, -1)
			# action:15000388:"onyx lord"
			AddTalkListData(9, 15000388, -1)
			# action:15000391:"vyke"
			AddTalkListData(10, 15000391, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#adan
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302100, 1)
			#alecto
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302106, 1)
			#ancient hero of zamor gaol 
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302098, 1)
			#battlemage hugues
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302103, 1)
			#bloodhound knight darriwil
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302097, 1)
			#bols
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302101, 1)
			#crucible knight gaol
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302099, 1)
			#godefroy
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302105, 1)
			#onyx lord gaol
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302102, 1)
			#roundtable knight vyke
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302104, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)

#catacombs
def t324001110_30():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000523:"black knife (deathtouched)"
			AddTalkListData(1, 15000523, -1)
			# action:15000426:"erdtree burial watchdog (stormfoot)"
			AddTalkListData(2, 15000426, -1)
			# action:15000421:"grave warden duelist (murkwater)"
			AddTalkListData(3, 15000421, -1)
			# action:99992002:"cemetery shade (tombsward)"
			AddTalkListData(4, 99992002, -1)
			# action:15000427:"erdtree burial watchdog (impaler's)"
			AddTalkListData(5, 15000427, -1)
			# action:15000423:"black knife (black knife)"
			AddTalkListData(6, 15000423, -1)
			# action:99992003:"cemetery shade (black knife)"
			AddTalkListData(7, 99992003, -1)
			# action:15000428:"erdtree burial watchdog (cliffbottom)"
			AddTalkListData(8, 15000428, -1)
			# action:15000431:"spiritcaller snail (road's end)"
			AddTalkListData(9, 15000431, -1)
			# action:15000519:"ulcerated tree spirit (fringefolk hero)"
			AddTalkListData(10, 15000519, -1)
			# action:15000424:"cemetery shade (caelid)"
			AddTalkListData(11, 15000424, -1)
			# action:15000429:"erdtree burial watchdog (minor erdtree)"
			AddTalkListData(12, 15000429, -1)
			# action:15000521:"ancient hero of zamor (sainted hero's)"
			AddTalkListData(13, 15000521, -1)
			# action:15000436:"tricia"
			AddTalkListData(14, 15000436, -1)
			# action:15000435:"red wolf of the champion"
			AddTalkListData(17, 15000435, -1)
			# action:15000518:"erdtree burial watchdog (wyndham)"
			AddTalkListData(15, 15000518, -1)
			# action:99990300:"grave warden duelist (auriza)"
			AddTalkListData(16, 99990300, -1)
			# action:15000522:"ancient hero of zamor (giant conquering)"
			AddTalkListData(19, 15000522, -1)
			# action:15000434:"esgar"
			AddTalkListData(21, 15000434, -1)
			# action:15000425:"ulcerated tree spirit (giants' mountaintops)"
			AddTalkListData(20, 15000425, -1)
			# action:15000433:"ordovis"
			AddTalkListData(18, 15000433, -1)
			# action:15000422:"grave warden duelist (snowfield catacombs)"
			AddTalkListData(24, 15000422, -1)
			# action:15000432:"putrid tree spirit"
			AddTalkListData(22, 15000432, -1)
			# action:99992000:"stray mimic tear"
			AddTalkListData(23, 99992000, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#black knife assassin deathtouched
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302107, 1)
			#erdtree burial watchdog stormfoot
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302108, 1)
			#grave warden duelist murkwater
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302109, 1)
			#cemetery shade tombsward
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302110, 1)
			#erdtree burial watchdog impaler's
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302111, 1)
			#black knife assassin black knife
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302112, 1)
			#cemetery shade black knife
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302113, 1)
			#erdtree burial watchdog cliffbottom
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302114, 1)
			#spiritcaller snail road's end
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302115, 1)
			#ulcerated tree spirit fringefolk
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302116, 1)
			#cemetery shade caelid
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302117, 1)
			#erdtree burial watchdog x2 minor erdtree
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302118, 1)
			#ancient hero of zamor sainted hero
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302119, 1)
			#perfumer tricia
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302120, 1)
			#erdtree burial watchdog wyndham
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302121, 1)
			#grave warden duelist auriza
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302122, 1)
			#red wolf of the champion
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302123, 1)
			#crucible knight ordovis
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302124, 1)
			#ancient hero of zamor mountaintops
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302125, 1)
			#ulcerated tree spirit mountaintops
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302126, 1)
			#esgar
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302127, 1)
			#putrid tree spirit wardead
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302128, 1)
			#stray mimic
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302129, 1)
			#putrid grave warden duelist
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302130, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000521:"ancient hero of zamor (sainted hero's)"
			AddTalkListData(1, 15000521, -1)
			# action:15000522:"ancient hero of zamor (giant conquering)"
			AddTalkListData(2, 15000522, -1)
			# action:15000523:"black knife (deathtouched)"
			AddTalkListData(3, 15000523, -1)
			# action:15000423:"black knife (black knife)"
			AddTalkListData(4, 15000423, -1)
			# action:99992002:"cemetery shade (tombsward)"
			AddTalkListData(5, 99992002, -1)
			# action:99992003:"cemetery shade (black knife)"
			AddTalkListData(6, 99992003, -1)
			# action:15000424:"cemetery shade (caelid)"
			AddTalkListData(7, 15000424, -1)
			# action:15000433:"ordovis"
			AddTalkListData(8, 15000433, -1)
			# action:15000426:"erdtree burial watchdog (stormfoot)"
			AddTalkListData(9, 15000426, -1)
			# action:15000427:"erdtree burial watchdog (impaler's)"
			AddTalkListData(10, 15000427, -1)
			# action:15000428:"erdtree burial watchdog (cliffbottom)"
			AddTalkListData(11, 15000428, -1)
			# action:15000429:"erdtree burial watchdog (minor erdtree)"
			AddTalkListData(12, 15000429, -1)
			# action:15000518:"erdtree burial watchdog (wyndham)"
			AddTalkListData(13, 15000518, -1)
			# action:15000434:"esgar"
			AddTalkListData(14, 15000434, -1)
			# action:15000421:"grave warden duelist (murkwater)"
			AddTalkListData(15, 15000421, -1)
			# action:99990300:"grave warden duelist (auriza)"
			AddTalkListData(16, 99990300, -1)
			# action:15000436:"tricia"
			AddTalkListData(17, 15000436, -1)
			# action:15000422:"putrid grave warden duelist (snowfield catacombs)"
			AddTalkListData(18, 15000422, -1)
			# action:15000432:"putrid tree spirit"
			AddTalkListData(19, 15000432, -1)
			# action:15000435:"red wolf of the champion"
			AddTalkListData(20, 15000435, -1)
			# action:15000431:"spiritcaller snail (road's end)"
			AddTalkListData(21, 15000431, -1)
			# action:99992000:"stray mimic tear"
			AddTalkListData(22, 99992000, -1)
			# action:15000519:"ulcerated tree spirit (fringefolk hero)"
			AddTalkListData(23, 15000519, -1)
			# action:15000425:"ulcerated tree spirit (giants' mountaintops)"
			AddTalkListData(24, 15000425, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#ancient hero of zamor sainted hero
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302119, 1)
			#ancient hero of zamor mountaintops
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302125, 1)
			#black knife assassin deathtouched
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302107, 1)
			#black knife assassin black knife
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302112, 1)
			#cemetery shade tombsward
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302110, 1)
			#cemetery shade black knife
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302113, 1)
			#cemetery shade caelid
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302117, 1)
			#crucible knight ordovis
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302124, 1)
			#erdtree burial watchdog stormfoot
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302108, 1)
			#erdtree burial watchdog impaler's
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302111, 1)
			#erdtree burial watchdog cliffbottom
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302114, 1)
			#erdtree burial watchdog x2 minor erdtree
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302118, 1)
			#erdtree burial watchdog wyndham
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302121, 1)
			#esgar
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302127, 1)
			#grave warden duelist murkwater
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302109, 1)
			#grave warden duelist auriza
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302122, 1)
			#perfumer tricia
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302120, 1)
			#putrid grave warden duelist
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302130, 1)
			#putrid tree spirit wardead
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302128, 1)
			#red wolf of the champion
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302123, 1)
			#spiritcaller snail road's end
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302115, 1)
			#stray mimic
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302129, 1)
			#ulcerated tree spirit fringefolk
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302116, 1)
			#ulcerated tree spirit mountaintops
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302126, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
#cave bosses
def t324001110_31():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000437:"soldier of godrick"
			AddTalkListData(1, 15000437, -1)
			# action:15000438:"beastman of farum azula"
			AddTalkListData(2, 15000438, -1)
			# action:15000444:"guardian golem"
			AddTalkListData(3, 15000444, -1)
			# action:15000443:"patches"
			AddTalkListData(4, 15000443, -1)
			# action:15000439:"demi-human chiefs"
			AddTalkListData(5, 15000439, -1)
			# action:15000452:"miranda (tombsward)"
			AddTalkListData(6, 15000452, -1)
			# action:15000445:"runebear"
			AddTalkListData(7, 15000445, -1)
			# action:15000447:"bloodhound"
			AddTalkListData(8, 15000447, -1)
			# action:15000446:"cleanrot knight"
			AddTalkListData(9, 15000446, -1)
			# action:99992001:"cleanrot x2"
			AddTalkListData(10, 99992001, -1)
			# action:15000448:"crystalian x2 (academy crystal cave)"
			AddTalkListData(11, 15000448, -1)
			# action:15000449:"frenzied duelist (gaol cave)"
			AddTalkListData(12, 15000449, -1)
			# action:15000454:"virgins"
			AddTalkListData(13, 15000454, -1)
			# action:15000441:"margot"
			AddTalkListData(14, 15000441, -1)
			# action:15000451:"kindred of rot x2"
			AddTalkListData(15, 15000451, -1)
			# action:99993012:"black knife (sages cave)"
			AddTalkListData(16, 99993012, -1)
			# action:99990299:"omenkiller+miranda"
			AddTalkListData(18, 99990299, -1)
			# action:15000453:"necromancer garris"
			AddTalkListData(17, 15000453, -1)
			# action:99990204:"putrid crystalian x3"
			AddTalkListData(19, 99990204, -1)
			# action:99993011:"spiritcaller snail (spiriticaller cave)"
			AddTalkListData(20, 99993011, -1)
			# action:99991000:"beastman of farum azula x2"
			AddTalkListData(21, 99991000, -1)
			# action:15000455:"crusader"
			AddTalkListData(22, 15000455, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#soldier of godrick
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302131, 1)
			#beastman groveside
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302132, 1)
			#guardian golem
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302134, 1)
			#patches
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302135, 1)
			#demi-human chiefs
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302133, 1)
			#miranda
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302136, 1)
			#runebear
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302137, 1)
			#bloodhound knight
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302138, 1)
			#cleanrot
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302139, 1)
			#cleanrot x2
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302140, 1)
			#crystalian x2 academy
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302141, 1)
			#frenzied duelist
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302142, 1)
			#abductor virgins
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302143, 1)
			#demi-human queen margot
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302144, 1)
			#kindred of rot seethewater
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302145, 1)
			#black knife assassin sage's
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302146, 1)
			#necromancer garris
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302148, 1)
			#omenkiller+miranda
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302149, 1)
			#putrid crystalian x3
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302147, 1)
			#spiritcaller snail mountaintops
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302150, 1)
			#beastman x2
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302151, 1)
			#misbegotten crusader
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302152, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000454:"virgins"
			AddTalkListData(1, 15000454, -1)
			# action:15000438:"beastman of farum azula"
			AddTalkListData(2, 15000438, -1)
			# action:99991000:"beastman of farum azula x2"
			AddTalkListData(3, 99991000, -1)
			# action:99993012:"black knife (sages cave)"
			AddTalkListData(4, 99993012, -1)
			# action:15000447:"bloodhound"
			AddTalkListData(5, 15000447, -1)
			# action:15000446:"cleanrot knight"
			AddTalkListData(6, 15000446, -1)
			# action:99992001:"cleanrot x2"
			AddTalkListData(7, 99992001, -1)
			# action:15000448:"crystalian x2 (academy crystal cave)"
			AddTalkListData(8, 15000448, -1)
			# action:15000439:"demi-human chiefs"
			AddTalkListData(9, 15000439, -1)
			# action:15000441:"margot"
			AddTalkListData(10, 15000441, -1)
			# action:15000449:"frenzied duelist (gaol cave)"
			AddTalkListData(11, 15000449, -1)
			# action:15000444:"guardian golem"
			AddTalkListData(12, 15000444, -1)
			# action:15000451:"kindred of rot x2"
			AddTalkListData(13, 15000451, -1)
			# action:15000452:"miranda (tombsward)"
			AddTalkListData(14, 15000452, -1)
			# action:15000455:"misbegotten crusader"
			AddTalkListData(15, 15000455, -1)
			# action:15000453:"necromancer garris"
			AddTalkListData(16, 15000453, -1)
			# action:99990299:"omenkiller + miranda"
			AddTalkListData(17, 99990299, -1)
			# action:15000443:"patches"
			AddTalkListData(18, 15000443, -1)
			# action:99990204:"crystalian x3"
			AddTalkListData(19, 99990204, -1)
			# action:15000445:"runebear"
			AddTalkListData(20, 15000445, -1)
			# action:15000437:"soldier of godrick"
			AddTalkListData(21, 15000437, -1)
			# action:99993011:"spiritcaller snail (spiriticaller cave)"
			AddTalkListData(22, 99993011, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#abductor virgins
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302143, 1)
			#beastman groveside
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302132, 1)
			#beastman x2
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302151, 1)
			#black knife assassin sage's
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302146, 1)
			#bloodhound knight
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302138, 1)
			#cleanrot
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302139, 1)
			#cleanrot x2
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302140, 1)
			#crystalian x2 academy
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302141, 1)
			#demi-human chiefs
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302133, 1)
			#demi-human queen margot
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302144, 1)
			#frenzied duelist
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302142, 1)
			#guardian golem
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302134, 1)
			#kindred of rot seethewater
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302145, 1)
			#miranda
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302136, 1)
			#misbegotten crusader
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302152, 1)
			#necromancer garris
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302148, 1)
			#omenkiller+miranda
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302149, 1)
			#patches
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302135, 1)
			#crystalian x3 sellia
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302147, 1)
			#runebear
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302137, 1)
			#soldier of godrick
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302131, 1)
			#spiritcaller snail mountaintops
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302150, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)

#ruins
def t324001110_32():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000515:"mad pumpkin head"
			AddTalkListData(1, 15000515, -1)
			# action:99993010:"stonedigger troll (limgrave)"
			AddTalkListData(2, 99993010, -1)
			# action:15000457:"scaly misbegotten"
			AddTalkListData(3, 15000457, -1)
			# action:15000458:"crystalian"
			AddTalkListData(4, 15000458, -1)
			# action:15000514:"royal revenant"
			AddTalkListData(5, 15000514, -1)
			# action:15000517:"gilika"
			AddTalkListData(9, 15000517, -1)
			# action:99992009:"mad pumpkin head x2"
			AddTalkListData(7, 99992009, -1)
			# action:15000511:"fallingstar beast (sellia crystal tunnel)"
			AddTalkListData(6, 15000511, -1)
			# action:15000459:"magma wyrm (gael)"
			AddTalkListData(8, 15000459, -1)
			# action:15000516:"sanguine noble"
			AddTalkListData(10, 15000516, -1)
			# action:99992010:"stonedigger troll (altus)"
			AddTalkListData(11, 99992010, -1)
			# action:15000442:"crystalian x2 (altus tunnel)"
			AddTalkListData(12, 15000442, -1)
			# action:15000512:"onyx lord (sealed)"
			AddTalkListData(13, 15000512, -1)
			# action:15000513:"astel stars of darkness"
			AddTalkListData(14, 15000513, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#mad pumpkin
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302153, 1)
			#stonedigger limgrave
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302154, 1)
			#scaly misbegotten
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302155, 1)
			#crystalian lucaria
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302156, 1)
			#royal revenant
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302157, 1)
			#fallingstar sellia
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302158, 1)
			#mad pumpkin x2
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302159, 1)
			#magma wyrm gael
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302160, 1)
			#demi-human queen gilika
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302161, 1)
			#sanguine
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302162, 1)
			#stonedigger altus
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302163, 1)
			#crystalian x2 altus
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302164, 1)
			#onyx lord sealed
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302165, 1)
			#astel snowfield
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302166, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:15000513:"astel stars of darkness"
			AddTalkListData(1, 15000513, -1)
			# action:15000458:"crystalian"
			AddTalkListData(2, 15000458, -1)
			# action:15000442:"crystalian x2 (altus tunnel)"
			AddTalkListData(3, 15000442, -1)
			# action:15000517:"gilika"
			AddTalkListData(4, 15000517, -1)
			# action:15000511:"fallingstar beast (sellia crystal tunnel)"
			AddTalkListData(5, 15000511, -1)
			# action:15000515:"mad pumpkin head"
			AddTalkListData(6, 15000515, -1)
			# action:99992009:"mad pumpkin head x2"
			AddTalkListData(7, 99992009, -1)
			# action:15000459:"magma wyrm (gael)"
			AddTalkListData(8, 15000459, -1)
			# action:15000512:"onyx lord (sealed)"
			AddTalkListData(9, 15000512, -1)
			# action:15000514:"royal revenant"
			AddTalkListData(10, 15000514, -1)
			# action:15000516:"sanguine noble"
			AddTalkListData(11, 15000516, -1)
			# action:15000457:"scaly misbegotten"
			AddTalkListData(12, 15000457, -1)
			# action:99993010:"stonedigger troll (limgrave)"
			AddTalkListData(13, 99993010, -1)
			# action:99992010:"stonedigger troll (altus)"
			AddTalkListData(14, 99992010, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#astel snowfield
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302166, 1)
			#crystalian lucaria
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302156, 1)
			#crystalian x2 altus
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302164, 1)
			#demi-human queen gilika
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302161, 1)
			#fallingstar sellia
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302158, 1)
			#mad pumpkin
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302153, 1)
			#mad pumpkin x2
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302159, 1)
			#magma wyrm gael
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302160, 1)
			#onyx lord sealed
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302165, 1)
			#royal revenant
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302157, 1)
			#sanguine
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302162, 1)
			#scaly misbegotten
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302155, 1)
			#stonedigger limgrave
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302154, 1)
			#stonedigger altus
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302163, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)

#dlc main
def t324001110_26():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:99993100:"Divine Beast Dancing Lion"
			AddTalkListData(1, 99993100, -1)
			# action:99993101:"Rellana, Twin Moon Knight"
			AddTalkListData(2, 99993101, -1)
			# action:99993103:"Golden Hippopotamus"
			AddTalkListData(3, 99993103, -1)
			# action:99993102:"Putrescent Knight"
			AddTalkListData(4, 99993102, -1)
			# action:99993106:"Scadutree Avatar"
			AddTalkListData(5, 99993106, -1)
			# action:99993105:"Commander Gaius"
			AddTalkListData(6, 99993105, -1)
			# action:99993104:"Messmer the Impaler"
			AddTalkListData(7, 99993104, -1)
			# action:99993108:"Midra, Lord of Frenzied Flame"
			AddTalkListData(9, 99993108, -1)
			# action:99993109:"Romina, Saint of the Bud"
			AddTalkListData(10, 99993109, -1)
			# action:99993107:"Metyr, Mother of Fingers"
			AddTalkListData(8, 99993107, -1)
			# action:99993112:"Radahn, Consort of Miquella"
			AddTalkListData(11, 99993112, -1)
			# action:99993110:"Bayle the Dread"
			AddTalkListData(12, 99993110, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#divine beast dancing lion
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302167, 1)
			#rellana
			elif GetTalkListEntryResult() == 2:
				assert t324001110_60(1049302168, 1049302740, 1049302741)
			#gold hippo
			elif GetTalkListEntryResult() == 3:
				assert t324001110_60(1049302169, 1049302718, 1049302719)
			#putrescent
			elif GetTalkListEntryResult() == 4:
				assert t324001110_60(1049302170, 1049302738, 1049302739)
			#scadutree
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302171, 1)
			#commander gaius
			elif GetTalkListEntryResult() == 6:
				assert t324001110_60(1049302172, 1049302704, 1049302705)
			#messmer
			elif GetTalkListEntryResult() == 7:
				assert t324001110_60(1049302173, 1049302726, 1049302727)
			#metyr
			elif GetTalkListEntryResult() == 8:
				assert t324001110_60(1049302174, 1049302728, 1049302729)
			#midra
			elif GetTalkListEntryResult() == 9:
				assert t324001110_60(1049302175, 1049302730, 1049302731)
			#romina
			elif GetTalkListEntryResult() == 10:
				assert t324001110_60(1049302176, 1049302744, 1049302745)
			#promised consort radahn
			elif GetTalkListEntryResult() == 11:
				assert t324001110_60(1049302177, 1049302736, 1049302737)
			#bayle
			elif GetTalkListEntryResult() == 12:
				assert t324001110_60(1049302178, 1049302700, 1049302701)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:99993110:"Bayle the Dread"
			AddTalkListData(1, 99993110, -1)
			# action:99993105:"Commander Gaius"
			AddTalkListData(2, 99993105, -1)
			# action:99993100:"Divine Beast Dancing Lion"
			AddTalkListData(3, 99993100, -1)
			# action:99993103:"Golden Hippopotamus"
			AddTalkListData(4, 99993103, -1)
			# action:99993104:"Messmer the Impaler"
			AddTalkListData(5, 99993104, -1)
			# action:99993107:"Metyr, Mother of Fingers"
			AddTalkListData(6, 99993107, -1)
			# action:99993108:"Midra, Lord of Frenzied Flame"
			AddTalkListData(7, 99993108, -1)
			# action:99993112:"Promised Consort Radahn"
			AddTalkListData(9, 99993112, -1)
			# action:99993102:"Putrescent Knight"
			AddTalkListData(8, 99993102, -1)
			# action:99993101:"Rellana, Twin Moon Knight"
			AddTalkListData(10, 99993101, -1)
			# action:99993109:"Romina, Saint of the Bud"
			AddTalkListData(11, 99993109, -1)
			# action:99993106:"Scadutree Avatar"
			AddTalkListData(12, 99993106, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#bayle
			if GetTalkListEntryResult() == 1:
				assert t324001110_60(1049302178, 1049302700, 1049302701)
			#commander gaius
			elif GetTalkListEntryResult() == 2:
				assert t324001110_60(1049302172, 1049302704, 1049302705)
			#divine beast dancing lion
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302167, 1)
			#gold hippo
			elif GetTalkListEntryResult() == 4:
				assert t324001110_60(1049302169, 1049302718, 1049302719)
			#messmer
			elif GetTalkListEntryResult() == 5:
				assert t324001110_60(1049302173, 1049302726, 1049302727)
			#metyr
			elif GetTalkListEntryResult() == 6:
				assert t324001110_60(1049302174, 1049302728, 1049302729)
			#midra
			elif GetTalkListEntryResult() == 7:
				assert t324001110_60(1049302175, 1049302730, 1049302730)
			#promised consort radahn
			elif GetTalkListEntryResult() == 9:
				assert t324001110_60(1049302177, 1049302736, 1049302737)
			#putrescent
			elif GetTalkListEntryResult() == 8:
				assert t324001110_60(1049302170, 1049302738, 1049302739)
			#rellana
			elif GetTalkListEntryResult() == 10:
				assert t324001110_60(1049302168, 1049302740, 1049302741)
			#romina
			elif GetTalkListEntryResult() == 11:
				assert t324001110_60(1049302176, 1049302744, 1049302745)
			#scadutree
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302171, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
#dlc minor
def t324001110_27():
	while True:
		#ordered by level
		if GetEventFlag(1049300004) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:99993118:"Curseblade Labirith"
			AddTalkListData(5, 99993118, -1)
			# action:99993128:"Demi-Human Queen Marigga"
			AddTalkListData(10, 99993128, -1)
			# action:99993116:"Demi-Human Swordmaster Onze"
			AddTalkListData(1, 99993116, -1)
			# action:99993120:"Chief Bloodfiend"
			AddTalkListData(4, 99993120, -1)
			# action:99993122:"Dancer of Ranah"
			AddTalkListData(3, 99993122, -1)
			# action:99993113:"Death Knight (Fog Rift Catacombs)"
			AddTalkListData(2, 99993113, -1)
			# action:99993119:"Ancient Dragon-Man"
			AddTalkListData(20, 99993119, -1)
			# action:99993126:"Black Knight Edredd"
			AddTalkListData(12, 99993126, -1)
			# action:99993129:"Dryleaf Dane"
			AddTalkListData(16, 99993129, -1)
			# action:99993125:"Black Knight Garrew"
			AddTalkListData(13, 99993125, -1)
			# action:99993121:"Knight of the Solitary Gaol"
			AddTalkListData(21, 99993121, -1)
			# action:99993124:"Red Bear"
			AddTalkListData(7, 99993124, -1)
			#count ymir
			AddTalkListData(8, 99993127, -1)
			#crucible knight devonia
			AddTalkListData(22, 99993142, -1)
			# action:99993114:"Death Knight (Scorpion River Catacombs)"
			AddTalkListData(9, 99993114, -1)
			# action:99993139:"Ghostflame Dragon (Gravesite Plains)"
			AddTalkListData(6, 99993139, -1)
			# action:99993130:"Ralva the Great Red Bear"
			AddTalkListData(14, 99993130, -1)
			# action:99993136:"Jagged Peak Drake"
			AddTalkListData(18, 99993136, -1)
			# action:99993131:"Rugalea the Great Red Bear"
			AddTalkListData(19, 99993131, -1)
			# action:99993133:"Death Rite Bird (Charo's Hidden Grave)"
			AddTalkListData(15, 99993133, -1)
			# action:99993140:"Ghostflame Dragon (Cerulean Coast)"
			AddTalkListData(17, 99993140, -1)
			# action:99993115:"Jori, Elder Inquisitor"
			AddTalkListData(24, 99993115, -1)
			# action:99993117:"Lamenter"
			AddTalkListData(11, 99993117, -1)
			# action:99993123:"Rakshasa"
			AddTalkListData(25, 99993123, -1)
			# action:99993134:"Fallingstar Beast (Hinterland)"
			AddTalkListData(27, 99993134, -1)
			# action:99993135:"Tree Sentinel x2 (Hinterland)"
			AddTalkListData(29, 99993135, -1)
			# action:99993132:"Divine Beast Dancing Lion (Rauh)"
			AddTalkListData(26, 99993132, -1)
			# action:99993141:"Ghostflame Dragon (Scadu Altus)"
			AddTalkListData(23, 99993141, -1)
			# action:99993137:"Jagged Peak Drake x2"
			AddTalkListData(28, 99993137, -1)
			# action:99993138:"Ancient Dragon Senessax"
			AddTalkListData(30, 99993138, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#demi-human swordmaster onze
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302179, 1)
			#death knight fog
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302180, 1)
			#dancer of ranah
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302182, 1)
			#chief bloodfiend
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302183, 1)
			#curseblade labirith
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302184, 1)
			#ghostflame plain
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302181, 1)
			#red bear
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302185, 1)
			#count ymir
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302207, 1)
			#death knight scorpion
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302186, 1)
			#demi-human queen marigga
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302187, 1)
			#lamenter
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302189, 1)
			#black knight edredd
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302190, 1)
			#black knight garrew
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302191, 1)
			#ralva
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302193, 1)
			#deathrite charo
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302194, 1)
			#dryleaf dane
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302195, 1)
			#ghostflame cerulean
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302188, 1)
			#jagged drake
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302196, 1)
			#rugalea
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302197, 1)
			#ancient dragon-man
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302200, 1)
			#knight of the solitary gaol
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302198, 1)
			#crucible knight devonia
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302208, 1)
			#ghostflame scadu
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302192, 1)
			#jori
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302199, 1)
			#rakshasa
			elif GetTalkListEntryResult() == 25:
				SetEventFlag(1049302206, 1)
			#divine beast dancing lion rauh
			elif GetTalkListEntryResult() == 26:
				SetEventFlag(1049302201, 1)
			#fallingstar hinter
			elif GetTalkListEntryResult() == 27:
				SetEventFlag(1049302202, 1)
			#jagged drake x2
			elif GetTalkListEntryResult() == 28:
				SetEventFlag(1049302203, 1)
			#tree sentinels hinter
			elif GetTalkListEntryResult() == 29:
				SetEventFlag(1049302204, 1)
			#ancient dragon senessax
			elif GetTalkListEntryResult() == 30:
				SetEventFlag(1049302205, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)
			
		#ordered by name
		elif GetEventFlag(1049300005) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			# action:99993119:"Ancient Dragon-Man"
			AddTalkListData(1, 99993119, -1)
			# action:99993138:"Ancient Dragon Senessax"
			AddTalkListData(2, 99993138, -1)
			# action:99993126:"Black Knight Edredd"
			AddTalkListData(3, 99993126, -1)
			# action:99993125:"Black Knight Garrew"
			AddTalkListData(4, 99993125, -1)
			# action:99993120:"Chief Bloodfiend"
			AddTalkListData(6, 99993120, -1)
			#count ymir
			AddTalkListData(7, 99993127, -1)
			#crucible knight devonia
			AddTalkListData(8, 99993142, -1)
			# action:99993118:"Curseblade Labirith"
			AddTalkListData(9, 99993118, -1)
			# action:99993122:"Dancer of Ranah"
			AddTalkListData(10, 99993122, -1)
			# action:99993113:"Death Knight (Fog Rift Catacombs)"
			AddTalkListData(11, 99993113, -1)
			# action:99993114:"Death Knight (Scorpion River Catacombs)"
			AddTalkListData(12, 99993114, -1)
			# action:99993133:"Death Rite Bird (Charo's Hidden Grave)"
			AddTalkListData(13, 99993133, -1)
			# action:99993128:"Demi-Human Queen Marigga"
			AddTalkListData(14, 99993128, -1)
			# action:99993116:"Demi-Human Swordmaster Onze"
			AddTalkListData(15, 99993116, -1)
			# action:99993132:"Divine Beast Dancing Lion (Rauh)"
			AddTalkListData(16, 99993132, -1)
			# action:99993129:"Dryleaf Dane"
			AddTalkListData(17, 99993129, -1)
			# action:99993134:"Fallingstar Beast (Hinterland)"
			AddTalkListData(18, 99993134, -1)
			# action:99993139:"Ghostflame Dragon (Gravesite Plains)"
			AddTalkListData(19, 99993139, -1)
			# action:99993140:"Ghostflame Dragon (Cerulean Coast)"
			AddTalkListData(20, 99993140, -1)
			# action:99993141:"Ghostflame Dragon (Scadu Altus)"
			AddTalkListData(21, 99993141, -1)
			# action:99993136:"Jagged Peak Drake"
			AddTalkListData(22, 99993136, -1)
			# action:99993137:"Jagged Peak Drake x2"
			AddTalkListData(23, 99993137, -1)
			# action:99993115:"Jori, Elder Inquisitor"
			AddTalkListData(24, 99993115, -1)
			# action:99993121:"Knight of the Solitary Gaol"
			AddTalkListData(5, 99993121, -1)
			# action:99993117:"Lamenter"
			AddTalkListData(25, 99993117, -1)
			# action:99993123:"Rakshasa"
			AddTalkListData(26, 99993123, -1)
			# action:99993130:"Ralva the Great Red Bear"
			AddTalkListData(27, 99993130, -1)
			# action:99993124:"Red Bear"
			AddTalkListData(28, 99993124, -1)
			# action:99993131:"Rugalea the Great Red Bear"
			AddTalkListData(29, 99993131, -1)
			# action:99993135:"Tree Sentinel x2 (Hinterland)"
			AddTalkListData(30, 99993135, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 26000004, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#ancient dragon-man
			if GetTalkListEntryResult() == 1:
				SetEventFlag(1049302200, 1)
			#ancient dragon senessax
			elif GetTalkListEntryResult() == 2:
				SetEventFlag(1049302205, 1)
			#black knight edredd
			elif GetTalkListEntryResult() == 3:
				SetEventFlag(1049302190, 1)
			#black knight garrew
			elif GetTalkListEntryResult() == 4:
				SetEventFlag(1049302191, 1)
			#knight of the solitary gaol
			elif GetTalkListEntryResult() == 5:
				SetEventFlag(1049302198, 1)
			#chief bloodfiend
			elif GetTalkListEntryResult() == 6:
				SetEventFlag(1049302183, 1)
			#count ymir
			elif GetTalkListEntryResult() == 7:
				SetEventFlag(1049302207, 1)
			#crucible knight devonia
			elif GetTalkListEntryResult() == 8:
				SetEventFlag(1049302208, 1)
			#curseblade labirith
			elif GetTalkListEntryResult() == 9:
				SetEventFlag(1049302184, 1)
			#dancer of ranah
			elif GetTalkListEntryResult() == 10:
				SetEventFlag(1049302182, 1)
			#death knight fog
			elif GetTalkListEntryResult() == 11:
				SetEventFlag(1049302180, 1)
			#death knight scorpion
			elif GetTalkListEntryResult() == 12:
				SetEventFlag(1049302186, 1)
			#deathrite charo
			elif GetTalkListEntryResult() == 13:
				SetEventFlag(1049302194, 1)
			#demi-human queen marigga
			elif GetTalkListEntryResult() == 14:
				SetEventFlag(1049302187, 1)
			#demi-human swordmaster onze
			elif GetTalkListEntryResult() == 15:
				SetEventFlag(1049302179, 1)
			#divine beast dancing lion rauh
			elif GetTalkListEntryResult() == 16:
				SetEventFlag(1049302201, 1)
			#dryleaf dane
			elif GetTalkListEntryResult() == 17:
				SetEventFlag(1049302195, 1)
			#fallingstar hinter
			elif GetTalkListEntryResult() == 18:
				SetEventFlag(1049302202, 1)
			#ghostflame plain
			elif GetTalkListEntryResult() == 19:
				SetEventFlag(1049302181, 1)
			#ghostflame cerulean
			elif GetTalkListEntryResult() == 20:
				SetEventFlag(1049302188, 1)
			#ghostflame scadu
			elif GetTalkListEntryResult() == 21:
				SetEventFlag(1049302192, 1)
			#jagged drake
			elif GetTalkListEntryResult() == 22:
				SetEventFlag(1049302196, 1)
			#jagged drake x2
			elif GetTalkListEntryResult() == 23:
				SetEventFlag(1049302203, 1)
			#jori
			elif GetTalkListEntryResult() == 24:
				SetEventFlag(1049302199, 1)
			#lamenter
			elif GetTalkListEntryResult() == 25:
				SetEventFlag(1049302189, 1)
			#rakshasa
			elif GetTalkListEntryResult() == 26:
				SetEventFlag(1049302206, 1)
			#ralva
			elif GetTalkListEntryResult() == 27:
				SetEventFlag(1049302193, 1)
			#red bear
			elif GetTalkListEntryResult() == 28:
				SetEventFlag(1049302185, 1)
			#rugalea
			elif GetTalkListEntryResult() == 29:
				SetEventFlag(1049302197, 1)
			#tree sentinels hinter
			elif GetTalkListEntryResult() == 30:
				SetEventFlag(1049302204, 1)
			else:
				return 0
			SetEventFlag(1049302228, 1)

#phase selection (restore hp, sandbox)
def t324001110_60(z1, z2, z3):
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#start in phase 1
		AddTalkListData(1, 99999119, -1)
		#start in phase 2 (restore hp)
		AddTalkListData(2, 99999120, -1)
		#start in phase 2 (normal hp)
		AddTalkListData(3, 99999121, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(z1, 1)
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(z2, 1)
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(z3, 1)
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#phase selection (buff hp, sandbox)
def t324001110_61(z1, z2, z3):
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#start in phase 1
		AddTalkListData(1, 99999119, -1)
		#start in phase 2 (buff hp)
		AddTalkListData(2, 99999129, -1)
		#start in phase 2 (normal hp)
		AddTalkListData(3, 99999121, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(z1, 1)
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(z2, 1)
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(z3, 1)
		else:
			return 0
		SetEventFlag(1049302228, 1)
		
#phase selection (prog)
def t324001110_62(z1, z2, z3):
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#start in phase 1
		AddTalkListData(1, 99999119, -1)
		#start in phase 2
		AddTalkListDataIf(GetEventFlag(z3), 2, 99999126, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			SetEventFlag(z1, 1)
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(z2, 1)
		else:
			return 0
		SetEventFlag(1049302228, 1)

#options
def t324001110_70():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#item drop randomization options (prog only)
		AddTalkListDataIf(GetEventFlag(1049300057), 1, 99998429, -1)
		# respawn location options
		AddTalkListData(2, 99998417, -1)
		# warp choice after boss defeat
		AddTalkListData(3, 99999052, -1)
		# death dialogue options
		AddTalkListData(4, 99999071, -1)
		#prevent rune loss on death
		AddTalkListDataIf(GetEventFlag(1049300065), 5, 99999135, -1) #on
		AddTalkListDataIf(not GetEventFlag(1049300065), 6, 99999136, -1) #off
		#difficulty
		AddTalkListData(7, 99999138, -1)
		# advanced options/cheats (prog only)
		AddTalkListDataIf(GetEventFlag(1049300057), 8, 99999047, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#respawn location options
		if GetTalkListEntryResult() == 2:
			assert t324001110_19()
		#item randomization options
		elif GetTalkListEntryResult() == 1:
			assert t324001110_40()
		#advanced options/cheats
		elif GetTalkListEntryResult() == 8:
			assert t324001110_50()
		#warp choice after boss defeat
		elif GetTalkListEntryResult() == 3:
			assert t324001110_51()
		#boss death dialogue options
		elif GetTalkListEntryResult() == 4:
			assert t324001110_52()
		#prevent rune loss on death
		elif GetTalkListEntryResult() == 5: #currently on
			SetEventFlag(1049300065, 0)
		elif GetTalkListEntryResult() == 6: #currently off
			SetEventFlag(1049300065, 1)
		#difficulty
		elif GetTalkListEntryResult() == 7:
			assert t324001110_71()
		else:
			return 0

#difficulty options
def t324001110_71():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#normal
		AddTalkListDataIf(GetEventFlag(1049300503), 1, 99999144, -1) #on
		AddTalkListDataIf(not GetEventFlag(1049300503), 1, 99999139, -1) #off
		#hard
		AddTalkListDataIf(GetEventFlag(1049300501), 2, 99999145, -1) #on
		AddTalkListDataIf(not GetEventFlag(1049300501), 2, 99999140, -1) #off
		#very hard
		AddTalkListDataIf(GetEventFlag(1049300502), 3, 99999146, -1) #on
		AddTalkListDataIf(not GetEventFlag(1049300502), 3, 99999141, -1) #off
		#details
		AddTalkListData(4, 99999142, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#normal
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049300501, 0)
			SetEventFlag(1049300502, 0)
			SetEventFlag(1049300503, 1)
		#hard
		elif GetTalkListEntryResult() == 2:
			SetEventFlag(1049300501, 1)
			SetEventFlag(1049300502, 0)
			SetEventFlag(1049300503, 0)
		#very hard
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(1049300501, 0)
			SetEventFlag(1049300502, 1)
			SetEventFlag(1049300503, 0)
		#details
		elif GetTalkListEntryResult() == 4:
			OpenGenericDialog(7, 99999143, 1, 0, 1)
			assert not CheckSpecificPersonGenericDialogIsOpen(0)
		else:
			return 0

def t324001110_x0():
	"""State 0"""
	if not IsClientPlayer():
		"""State 1"""
		Label('L0')
		call = t324001110_x1()
		if IsClientPlayer() == 1:
			"""State 2"""
			Label('L1')
			call = t324001110_x2()
			if not IsClientPlayer():
				Goto('L0')
			elif IsPlayerDead() == 1:
				pass
		elif IsPlayerDead() == 1:
			pass
	else:
		Goto('L1')
	"""State 3"""
	call = t324001110_x4()
	assert not IsPlayerDead()
	Goto('L0')
	"""Unused"""
	"""State 4"""
	return 0

def t324001110_x1():
	"""State 0"""
	while True:
		"""State 1"""
		# actionbutton:6000:"Talk"
		call = t324001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000,
							 flag6=6000)
		if call.Done():
			"""State 2"""
			call = t324001110_x3()
			if call.Done():
				pass
			elif GetDistanceToPlayer() > 3 or IsMultiplayerInProgress() == 1:
				pass
		elif IsMultiplayerInProgress() == 1:
			pass
		"""State 3"""
		assert t324001110_x6() and not IsMultiplayerInProgress()
	"""Unused"""
	"""State 4"""
	return 0

def t324001110_x2():
	"""State 0"""
	Quit()
	"""Unused"""
	"""State 1"""
	return 0
			
def t324001110_x4():
	"""State 0,2"""
	assert t324001110_x6()
	"""State 1"""
	Quit()
	"""Unused"""
	"""State 3"""
	return 0

def t324001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
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

def t324001110_x6():
	"""State 0,1"""
	ClearTalkProgressData()
	StopEventAnimWithoutForcingConversationEnd(0)
	ForceCloseGenericDialog()
	ForceCloseMenu()
	ReportConversationEndToHavokBehavior()
	"""State 2"""
	return 0

