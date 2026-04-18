# -*- coding: utf-8 -*-
def t314001110_1():
	"""State 0,1"""
	t314001110_x0()
	Quit()
	
#main menu
def t314001110_x3():
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
		elif GetEventFlag(1049300057) == 1:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			#upgrade materials
			AddTalkListData(1, 99999025, -1)
			#basic weapons
			AddTalkListData(2, 99999028, -1)
			#unlocked weapons
			AddTalkListData(3, 99999027, -1)
			#upgraded weapons (unlock if tier 11 beaten)
			AddTalkListDataIf(GetEventFlag(1049304325), 12, 99999064, -1)
			#armor
			AddTalkListData(4, 99999001, -1)
			#spells
			AddTalkListData(5, 99999002, -1)
			#ashes of war
			AddTalkListData(6, 99999005, -1)
			#tools
			AddTalkListData(7, 99999009, -1)
			#consumables
			AddTalkListData(8, 99999006, -1)
			#ammo
			AddTalkListData(9, 99999004, -1)
			#crafting materials
			AddTalkListData(10, 99999026, -1)
			#gestures
			AddTalkListData(11, 99999010, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 20000009, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#upgrade materials
			if GetTalkListEntryResult() == 1:
				OpenRegularShop(7000800,7000899)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#basic weapons
			elif GetTalkListEntryResult() == 2:
				OpenRegularShop(7000000, 7000099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#unlocked weapons
			elif GetTalkListEntryResult() == 3:
				OpenRegularShop(6000000, 6000999)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#armor
			elif GetTalkListEntryResult() == 4:
				OpenRegularShop(7000100, 7000199)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#spells
			elif GetTalkListEntryResult() == 5:
				OpenRegularShop(7000200, 7000299)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#ashes of war
			elif GetTalkListEntryResult() == 6:
				OpenRegularShop(7000300, 7000399)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#tools
			elif GetTalkListEntryResult() == 7:
				OpenRegularShop(7000400, 7000499)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#consumables
			elif GetTalkListEntryResult() == 8:
				OpenRegularShop(7000500, 7000599)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#ammo
			elif GetTalkListEntryResult() == 9:
				OpenRegularShop(7000600, 7000699)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#crafting materials
			elif GetTalkListEntryResult() == 10:
				OpenRegularShop(7000700, 7000799)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			#gestures
			elif GetTalkListEntryResult() == 11:
				assert t314001110_3()
			#upgraded weapons
			elif GetTalkListEntryResult() == 12:
				OpenRegularShop(6100000, 6101099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			else:
				return 0
		#sandbox mode
		else:
			c1_110()
			ClearTalkActionState()
			ClearTalkListData()
			#receive all items (base game)
			AddTalkListData(20, 99999097, -1)
			#receive all items (dlc)
			AddTalkListDataIf(GetEventFlag(6951), 21, 99999098, -1)
			# action:99999012:"DLC items"
			AddTalkListDataIf(GetEventFlag(6951) == 1, 13, 99999012, -1)
			# action:99999000:"weapons"
			AddTalkListData(1, 99999000, -1)
			#upgraded weapons
			AddTalkListData(2, 99999029, -1)
			# action:99999001:"armor"
			AddTalkListData(3, 99999001, -1)
			# action:99999002:"spells"
			AddTalkListData(4, 99999002, -1)
			# action:99999005:"ashes of war"
			AddTalkListData(5, 99999005, -1)
			# action:99999003:"talismans"
			AddTalkListData(6, 99999003, -1)
			# action:99999007:"spirit ashes"
			AddTalkListData(7, 99999007, -1)
			# upgraded spirit ashes
			AddTalkListData(8, 99999035, -1)
			# action:99999009:"tools/misc"
			AddTalkListData(9, 99999009, -1)
			# action:99999006:"consumables"
			AddTalkListData(10, 99999006, -1)
			# action:99999004:"Ammunition"
			AddTalkListData(11, 99999004, -1)
			# action:99999008:"materials"
			AddTalkListData(12, 99999008, -1)
			# action:99999010:"gestures"
			AddTalkListData(14, 99999010, -1)
			# action:20000009:"Leave"
			AddTalkListData(99, 20000009, -1)
			ShowShopMessage(1)
			assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			if GetTalkListEntryResult() == 1:
				assert t314001110_4()
			elif GetTalkListEntryResult() == 2:
				assert t314001110_8()
			elif GetTalkListEntryResult() == 3:
				assert t314001110_5()
			elif GetTalkListEntryResult() == 4:
				assert t314001110_6()
			elif GetTalkListEntryResult() == 5:
				OpenRegularShop(9150000, 9150099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 6:
				OpenRegularShop(9130000, 9130200)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 7:
				OpenRegularShop(9160000, 9160099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 8:
				OpenRegularShop(9260000, 9260099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 9:
				OpenRegularShop(9190000, 9190099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 10:
				OpenRegularShop(9170000, 9170199)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 11:
				OpenRegularShop(9140000, 9140099)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 12:
				OpenRegularShop(9180100, 9180199)
				assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
			elif GetTalkListEntryResult() == 13:
				assert t314001110_7()
			elif GetTalkListEntryResult() == 14:
				assert t314001110_3()
			elif GetTalkListEntryResult() == 20:
				assert t314001110_10()
			elif GetTalkListEntryResult() == 21:
				assert t314001110_11()
			else:
				return 0

#receive all items (base game)
def t314001110_10():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#inventory limit notes
		AddTalkListData(21, 99999122, -1)
		AddTalkListData(22, 99999123, -1)
		#receive all weapons
		AddTalkListDataIf(not GetEventFlag(1049300440), 1, 99999077, -1)
		#receive all weapons (used)
		AddTalkListDataIf(GetEventFlag(1049300440), 2, 99999099, -1)
		#receive all weapons (upgraded)
		AddTalkListDataIf(not GetEventFlag(1049300441), 3, 99999078, -1)
		#receive all weapons (upgraded) (used)
		AddTalkListDataIf(GetEventFlag(1049300441), 4, 99999100, -1)
		#receive all armor
		AddTalkListDataIf(not GetEventFlag(1049300442), 5, 99999079, -1)
		#receive all armor (used)
		AddTalkListDataIf(GetEventFlag(1049300442), 6, 99999101, -1)
		#receive all spells
		AddTalkListDataIf(not GetEventFlag(1049300443), 7, 99999080, -1)
		#receive all spells (used)
		AddTalkListDataIf(GetEventFlag(1049300443), 8, 99999102, -1)
		#receive all ashes of war
		AddTalkListDataIf(not GetEventFlag(1049300444), 9, 99999081, -1)
		#receive all ashes of war (used)
		AddTalkListDataIf(GetEventFlag(1049300444), 10, 99999103, -1)
		#receive all talismans
		AddTalkListDataIf(not GetEventFlag(1049300445), 11, 99999082, -1)
		#receive all talismans (used)
		AddTalkListDataIf(GetEventFlag(1049300445), 12, 99999104, -1)
		#receive all spirit ashes
		AddTalkListDataIf(not GetEventFlag(1049300446), 13, 99999083, -1)
		#receive all spirit ashes (used)
		AddTalkListDataIf(GetEventFlag(1049300446), 14, 99999105, -1)
		#receive all spirit ashes (upgraded)
		AddTalkListDataIf(not GetEventFlag(1049300447), 15, 99999084, -1)
		#receive all spirit ashes (upgraded) (used)
		AddTalkListDataIf(GetEventFlag(1049300447), 16, 99999106, -1)
		#receive all tools/misc
		AddTalkListDataIf(not GetEventFlag(1049300448), 17, 99999085, -1)
		#receive all tools/misc (used)
		AddTalkListDataIf(GetEventFlag(1049300448), 18, 99999107, -1)
		#receive max consumables/ammo/materials
		AddTalkListDataIf(not GetEventFlag(1049300449), 19, 99999086, -1)
		#receive max consumables/ammo/materials (used)
		AddTalkListDataIf(GetEventFlag(1049300449), 20, 99999108, -1)
		#clear out inventory
		AddTalkListData(23, 99999124, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#receive all weapons
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049302440, 1)
			SetEventFlag(1049300440, 1)
		#receive all weapons (used)
		elif GetTalkListEntryResult() == 2:
			pass
		#receive all weapons (upgraded)
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(1049302441, 1)
			SetEventFlag(1049300441, 1)
		#receive all weapons (upgraded) (used)
		elif GetTalkListEntryResult() == 4:
			pass
		#receive all armor
		elif GetTalkListEntryResult() == 5:
			SetEventFlag(1049302442, 1)
			SetEventFlag(1049300442, 1)
		#receive all armor (used)
		elif GetTalkListEntryResult() == 6:
			pass
		#receive all spells
		elif GetTalkListEntryResult() == 7:
			SetEventFlag(1049302443, 1)
			SetEventFlag(1049300443, 1)
		#receive all spells (used)
		elif GetTalkListEntryResult() == 8:
			pass
		#receive all ashes of war
		elif GetTalkListEntryResult() == 9:
			SetEventFlag(1049302444, 1)
			SetEventFlag(1049300444, 1)
		#receive all ashes of war (used)
		elif GetTalkListEntryResult() == 10:
			pass
		#receive all talismans
		elif GetTalkListEntryResult() == 11:
			SetEventFlag(1049302445, 1)
			SetEventFlag(1049300445, 1)
		#receive all talismans (used)
		elif GetTalkListEntryResult() == 12:
			pass
		#receive all spirit ashes
		elif GetTalkListEntryResult() == 13:
			SetEventFlag(1049302446, 1)
			SetEventFlag(1049300446, 1)
		#receive all spirit ashes (used)
		elif GetTalkListEntryResult() == 14:
			pass
		#receive all spirit ashes (upgraded)
		elif GetTalkListEntryResult() == 15:
			SetEventFlag(1049302447, 1)
			SetEventFlag(1049300447, 1)
		#receive all spirit ashes (upgraded) (used)
		elif GetTalkListEntryResult() == 16:
			pass
		#receive all tools/misc
		elif GetTalkListEntryResult() == 17:
			SetEventFlag(1049302448, 1)
			SetEventFlag(1049300448, 1)
		#receive all tools/misc (used)
		elif GetTalkListEntryResult() == 18:
			pass
		#receive max consumables/ammo/materials
		elif GetTalkListEntryResult() == 19:
			SetEventFlag(1049302449, 1)
			SetEventFlag(1049300449, 1)
		#receive max consumables/ammo/materials (used)
		elif GetTalkListEntryResult() == 20:
			pass
		#clear out inventory
		elif GetTalkListEntryResult() == 23:
			OpenGenericDialog(8, 99999125, 3, 4, 2)
			assert not CheckSpecificPersonGenericDialogIsOpen(0)
			if GetGenericDialogButtonResult() == 1:
				SetEventFlag(1049302470, 1)
				assert GetCurrentStateElapsedFrames(1)
			else:
				pass
		#inventory limit notes
		elif GetTalkListEntryResult() == 21 or GetTalkListEntryResult() == 22:
			pass
		else:
			return 0

#receive all items (dlc)
def t314001110_11():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		#inventory limit notes
		AddTalkListData(21, 99999122, -1)
		AddTalkListData(22, 99999123, -1)
		#receive all dlc weapons
		AddTalkListDataIf(not GetEventFlag(1049300450), 1, 99999087, -1)
		#receive all dlc weapons (used)
		AddTalkListDataIf(GetEventFlag(1049300450), 2, 99999109, -1)
		#receive all dlc weapons (upgraded)
		AddTalkListDataIf(not GetEventFlag(1049300451), 3, 99999088, -1)
		#receive all dlc weapons (upgraded) (used)
		AddTalkListDataIf(GetEventFlag(1049300451), 4, 99999110, -1)
		#receive all dlc armor
		AddTalkListDataIf(not GetEventFlag(1049300452), 5, 99999089, -1)
		#receive all dlc armor (used)
		AddTalkListDataIf(GetEventFlag(1049300452), 6, 99999111, -1)
		#receive all dlc spells
		AddTalkListDataIf(not GetEventFlag(1049300453), 7, 99999090, -1)
		#receive all dlc spells (used)
		AddTalkListDataIf(GetEventFlag(1049300453), 8, 99999112, -1)
		#receive all dlc ashes of war
		AddTalkListDataIf(not GetEventFlag(1049300454), 9, 99999091, -1)
		#receive all dlc ashes of war (used)
		AddTalkListDataIf(GetEventFlag(1049300454), 10, 99999113, -1)
		#receive all dlc talismans
		AddTalkListDataIf(not GetEventFlag(1049300455), 11, 99999092, -1)
		#receive all dlc talismans (used)
		AddTalkListDataIf(GetEventFlag(1049300455), 12, 99999114, -1)
		#receive all dlc spirit ashes
		AddTalkListDataIf(not GetEventFlag(1049300456), 13, 99999093, -1)
		#receive all dlc spirit ashes (used)
		AddTalkListDataIf(GetEventFlag(1049300456), 14, 99999115, -1)
		#receive all dlc spirit ashes (upgraded)
		AddTalkListDataIf(not GetEventFlag(1049300457), 15, 99999094, -1)
		#receive all dlc spirit ashes (upgraded) (used)
		AddTalkListDataIf(GetEventFlag(1049300457), 16, 99999116, -1)
		#receive all dlc tools/misc
		AddTalkListDataIf(not GetEventFlag(1049300458), 17, 99999095, -1)
		#receive all dlc tools/misc (used)
		AddTalkListDataIf(GetEventFlag(1049300458), 18, 99999117, -1)
		#receive max dlc consumables/ammo/materials
		AddTalkListDataIf(not GetEventFlag(1049300459), 19, 99999096, -1)
		#receive max dlc consumables/ammo/materials (used)
		AddTalkListDataIf(GetEventFlag(1049300459), 20, 99999118, -1)
		#clear out inventory
		AddTalkListData(23, 99999124, -1)
		#go back
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		#receive all dlc weapons
		if GetTalkListEntryResult() == 1:
			SetEventFlag(1049302450, 1)
			SetEventFlag(1049300450, 1)
		#receive all dlc weapons (used)
		elif GetTalkListEntryResult() == 2:
			pass
		#receive all dlc weapons (upgraded)
		elif GetTalkListEntryResult() == 3:
			SetEventFlag(1049302451, 1)
			SetEventFlag(1049300451, 1)
		#receive all dlc weapons (upgraded) (used)
		elif GetTalkListEntryResult() == 4:
			pass
		#receive all dlc armor
		elif GetTalkListEntryResult() == 5:
			SetEventFlag(1049302452, 1)
			SetEventFlag(1049300452, 1)
		#receive all dlc armor (used)
		elif GetTalkListEntryResult() == 6:
			pass
		#receive all dlc spells
		elif GetTalkListEntryResult() == 7:
			SetEventFlag(1049302453, 1)
			SetEventFlag(1049300453, 1)
		#receive all dlc spells (used)
		elif GetTalkListEntryResult() == 8:
			pass
		#receive all dlc ashes of war
		elif GetTalkListEntryResult() == 9:
			SetEventFlag(1049302454, 1)
			SetEventFlag(1049300454, 1)
		#receive all dlc ashes of war (used)
		elif GetTalkListEntryResult() == 10:
			pass
		#receive all dlc talismans
		elif GetTalkListEntryResult() == 11:
			SetEventFlag(1049302455, 1)
			SetEventFlag(1049300455, 1)
		#receive all dlc talismans (used)
		elif GetTalkListEntryResult() == 12:
			pass
		#receive all dlc spirit ashes
		elif GetTalkListEntryResult() == 13:
			SetEventFlag(1049302456, 1)
			SetEventFlag(1049300456, 1)
		#receive all dlc spirit ashes (used)
		elif GetTalkListEntryResult() == 14:
			pass
		#receive all dlc spirit ashes (upgraded)
		elif GetTalkListEntryResult() == 15:
			SetEventFlag(1049302457, 1)
			SetEventFlag(1049300457, 1)
		#receive all dlc spirit ashes (upgraded) (used)
		elif GetTalkListEntryResult() == 16:
			pass
		#receive all dlc tools/misc
		elif GetTalkListEntryResult() == 17:
			SetEventFlag(1049302458, 1)
			SetEventFlag(1049300458, 1)
		#receive all dlc tools/misc (used)
		elif GetTalkListEntryResult() == 18:
			pass
		#receive max dlc consumables/ammo/materials
		elif GetTalkListEntryResult() == 19:
			SetEventFlag(1049302459, 1)
			SetEventFlag(1049300459, 1)
		#receive max dlc consumables/ammo/materials (used)
		elif GetTalkListEntryResult() == 20:
			pass
		#clear out inventory
		elif GetTalkListEntryResult() == 23:
			OpenGenericDialog(8, 99999125, 3, 4, 2)
			assert not CheckSpecificPersonGenericDialogIsOpen(0)
			if GetGenericDialogButtonResult() == 1:
				SetEventFlag(1049302470, 1)
				assert GetCurrentStateElapsedFrames(1)
			else:
				pass
		#inventory limit notes
		elif GetTalkListEntryResult() == 21 or GetTalkListEntryResult() == 22:
			pass
		else:
			return 0
		
#gestures
def t314001110_3():
	"""State 0"""
	# gesture:0:Bow
	AcquireGesture(0)
	SetEventFlag(60800, 1)
	# gesture:1:Polite Bow
	AcquireGesture(1)
	SetEventFlag(60801, 1)
	# gesture:2:My Thanks
	AcquireGesture(2)
	SetEventFlag(60802, 1)
	# gesture:3:Curtsy
	AcquireGesture(3)
	SetEventFlag(60803, 1)
	# gesture:4:Reverential Bow
	AcquireGesture(4)
	SetEventFlag(60804, 1)
	# gesture:5:My Lord
	AcquireGesture(5)
	SetEventFlag(60805, 1)
	# gesture:6:Warm Welcome
	AcquireGesture(6)
	SetEventFlag(60806, 1)
	# gesture:7:Wave
	AcquireGesture(7)
	SetEventFlag(60807, 1)
	# gesture:8:Casual Greeting
	AcquireGesture(8)
	SetEventFlag(60808, 1)
	# gesture:9:Strength!
	AcquireGesture(9)
	SetEventFlag(60809, 1)
	# gesture:10:As You Wish
	AcquireGesture(10)
	SetEventFlag(60810, 1)
	# gesture:20:Point Forwards
	AcquireGesture(20)
	SetEventFlag(60811, 1)
	# gesture:21:Point Upwards
	AcquireGesture(21)
	SetEventFlag(60812, 1)
	# gesture:22:Point Downwards
	AcquireGesture(22)
	SetEventFlag(60813, 1)
	# gesture:23:Beckon
	AcquireGesture(23)
	SetEventFlag(60814, 1)
	# gesture:24:Wait!
	AcquireGesture(24)
	SetEventFlag(60815, 1)
	# gesture:25:Calm Down!
	AcquireGesture(25)
	SetEventFlag(60816, 1)
	# gesture:30:Nod In Thought
	AcquireGesture(30)
	SetEventFlag(60817, 1)
	# gesture:40:Extreme Repentance
	AcquireGesture(40)
	SetEventFlag(60818, 1)
	# gesture:41:Grovel For Mercy
	AcquireGesture(41)
	SetEventFlag(60819, 1)
	# gesture:50:Rallying Cry
	AcquireGesture(50)
	SetEventFlag(60820, 1)
	# gesture:51:Heartening Cry
	AcquireGesture(51)
	SetEventFlag(60821, 1)
	# gesture:52:By My Sword
	AcquireGesture(52)
	SetEventFlag(60822, 1)
	# gesture:53:Hoslow's Oath
	AcquireGesture(53)
	SetEventFlag(60823, 1)
	# gesture:54:Fire Spur Me
	AcquireGesture(54)
	SetEventFlag(60824, 1)
	# gesture:60:Bravo!
	AcquireGesture(60)
	SetEventFlag(60826, 1)
	# gesture:70:Jump for Joy
	AcquireGesture(70)
	SetEventFlag(60827, 1)
	# gesture:71:Triumphant Delight
	AcquireGesture(71)
	SetEventFlag(60828, 1)
	# gesture:72:Fancy Spin
	AcquireGesture(72)
	SetEventFlag(60829, 1)
	# gesture:73:Finger Snap
	AcquireGesture(73)
	SetEventFlag(60830, 1)
	# gesture:80:Dejection
	AcquireGesture(80)
	SetEventFlag(60831, 1)
	# gesture:90:Patches' Crouch
	AcquireGesture(90)
	SetEventFlag(60832, 1)
	# gesture:91:Crossed Legs
	AcquireGesture(91)
	SetEventFlag(60833, 1)
	# gesture:92:Rest
	AcquireGesture(92)
	SetEventFlag(60834, 1)
	# gesture:93:Sitting Sideways
	AcquireGesture(93)
	SetEventFlag(60835, 1)
	# gesture:94:Dozing Cross-Legged
	AcquireGesture(94)
	SetEventFlag(60836, 1)
	# gesture:95:Spread Out
	AcquireGesture(95)
	SetEventFlag(60837, 1)
	# gesture:97:Balled Up
	AcquireGesture(97)
	SetEventFlag(60839, 1)
	# gesture:98:What Do You Want?
	AcquireGesture(98)
	SetEventFlag(60840, 1)
	# gesture:100:Prayer
	AcquireGesture(100)
	SetEventFlag(60841, 1)
	# gesture:101:Desperate Prayer
	AcquireGesture(101)
	SetEventFlag(60842, 1)
	# gesture:102:Rapture
	AcquireGesture(102)
	SetEventFlag(60843, 1)
	SetEventFlag(60844, 1)
	# gesture:103:Erudition
	AcquireGesture(103)
	SetEventFlag(60845, 1)
	# gesture:104:Outer Order
	AcquireGesture(104)
	SetEventFlag(60846, 1)
	# gesture:105:Inner Order
	AcquireGesture(105)
	SetEventFlag(60847, 1)
	# gesture:106:Golden Order Totality
	AcquireGesture(106)
	SetEventFlag(60848, 1)
	# gesture:108:The Ring
	AcquireGesture(108)
	SetEventFlag(60849, 1)
	#dlc gestures
	if GetEventFlag(6951) == 1:
		AcquireGesture(111)
		SetEventFlag(60850, 1)
		AcquireGesture(112)
		SetEventFlag(60851, 1)
		AcquireGesture(113)
		SetEventFlag(60852, 1)
		AcquireGesture(114)
		SetEventFlag(60853, 1)
		AcquireGesture(115)
		SetEventFlag(60854, 1)
	return 0

#base weapons
def t314001110_4():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		# action:99990202:"western swords"
		AddTalkListData(1, 99990202, -1)
		# action:99990201:"eastern swords"
		AddTalkListData(2, 99990201, -1)
		# action:99990206:"axes/hammers/flails/colossals"
		AddTalkListData(3, 99990206, -1)
		# action:28000015:"spears/halberds/reapers"
		AddTalkListData(4, 28000015, -1)
		# action:28000014:"daggers/whips/fists/claws"
		AddTalkListData(5, 28000014, -1)
		# action:28000013:"ranged weapons"
		AddTalkListData(6, 28000013, -1)
		# action:28000012:"staves/seals"
		AddTalkListData(7, 28000012, -1)
		# action:28000011:"shields"
		AddTalkListData(8, 28000011, -1)
		# action:28000010:"torches"
		AddTalkListData(9, 28000010, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			OpenRegularShop(9100000, 9100099)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 2:
			OpenRegularShop(9100100, 9100199)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 3:
			OpenRegularShop(9100200, 9100299)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 4:
			OpenRegularShop(9100300, 9100399)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 5:
			OpenRegularShop(9100400, 9100499)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 6:
			OpenRegularShop(9100500, 9100599)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 7:
			OpenRegularShop(9100600, 9100699)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 8:
			OpenRegularShop(9100700, 9100799)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 9:
			OpenRegularShop(9100800, 9100899)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		else:
			return 0

#upgraded weapons
def t314001110_8():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		# action:99990202:"western swords"
		AddTalkListData(1, 99990202, -1)
		# action:99990201:"eastern swords"
		AddTalkListData(2, 99990201, -1)
		# action:99990206:"axes/hammers/flails/colossals"
		AddTalkListData(3, 99990206, -1)
		# action:28000015:"spears/halberds/reapers"
		AddTalkListData(4, 28000015, -1)
		# action:28000014:"daggers/whips/fists/claws"
		AddTalkListData(5, 28000014, -1)
		# action:28000013:"ranged weapons"
		AddTalkListData(6, 28000013, -1)
		# action:28000012:"staves/seals"
		AddTalkListData(7, 28000012, -1)
		# action:28000011:"shields"
		AddTalkListData(8, 28000011, -1)
		# action:28000010:"torches"
		AddTalkListData(9, 28000010, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			OpenRegularShop(9200000, 9200099)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 2:
			OpenRegularShop(9200100, 9200199)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 3:
			OpenRegularShop(9200200, 9200299)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 4:
			OpenRegularShop(9200300, 9200399)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 5:
			OpenRegularShop(9200400, 9200499)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 6:
			OpenRegularShop(9200500, 9200599)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 7:
			OpenRegularShop(9200600, 9200699)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 8:
			OpenRegularShop(9200700, 9200799)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 9:
			OpenRegularShop(9200800, 9200899)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		else:
			return 0

#armor
def t314001110_5():
	while True:
		"""State 0"""
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		# action:28000009:"head armor"
		AddTalkListData(1, 28000009, -1)
		# action:28000008:"body"
		AddTalkListData(2, 28000008, -1)
		# action:28000007:"hand"
		AddTalkListData(3, 28000007, -1)
		# action:28000006:"leg"
		AddTalkListData(4, 28000006, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		"""State 1"""
		if GetTalkListEntryResult() == 1:
			"""State 2"""
			OpenRegularShop(9110000, 9110199)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 2:
			"""State 3"""
			OpenRegularShop(9110200, 9110499)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 3:
			"""State 4"""
			OpenRegularShop(9110500, 9110599)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 4:
			"""State 5"""
			OpenRegularShop(9110600, 9110799)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		else:
			"""State 6"""
			return 0

#spells
def t314001110_6():
	while True:
		"""State 0"""
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		# action:26001165:"attack sorceries"
		AddTalkListData(1, 26001165, -1)
		# action:26001164:"support sorceries"
		AddTalkListData(2, 26001164, -1)
		# action:26001163:"attack incantations"
		AddTalkListData(3, 26001163, -1)
		# action:26001162:"support incantations"
		AddTalkListData(4, 26001162, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		"""State 1"""
		if GetTalkListEntryResult() == 1:
			"""State 2"""
			OpenRegularShop(9120000, 9120099)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 2:
			"""State 3"""
			OpenRegularShop(9120100, 9120199)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 3:
			"""State 4"""
			OpenRegularShop(9120200, 9120299)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 4:
			"""State 5"""
			OpenRegularShop(9120300, 9120399)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		else:
			"""State 6"""
			return 0

#dlc items
def t314001110_7():
	while True:
		c1_110()
		ClearTalkActionState()
		ClearTalkListData()
		# action:99999013:"DLC weapons"
		AddTalkListData(1, 99999013, -1)
		# upgraded dlc weapons
		AddTalkListData(2, 99999034, -1)
		# action:99999014:"DLC armor"
		AddTalkListData(3, 99999014, -1)
		# action:99999015:"DLC spells"
		AddTalkListData(4, 99999015, -1)
		# action:99999016:"DLC ashes of war"
		AddTalkListData(5, 99999017, -1)
		# action:99999017:"DLC talismans"
		AddTalkListData(6, 99999016, -1)
		# action:99999018:"DLC spirit ashes"
		AddTalkListData(7, 99999018, -1)
		# dlc upgraded spirit ashes
		AddTalkListData(8, 99999036, -1)
		# action:99999024:"DLC misc items"
		AddTalkListData(9, 99999024, -1)
		# action:99999019:"DLC consumables/ammo"
		AddTalkListData(10, 99999019, -1)
		# action:99999023:"DLC materials"
		AddTalkListData(11, 99999023, -1)
		# action:20000009:"Leave"
		AddTalkListData(99, 26000004, -1)
		ShowShopMessage(1)
		assert not (CheckSpecificPersonMenuIsOpen(1, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		if GetTalkListEntryResult() == 1:
			OpenRegularShop(8000000, 8000199)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 2:
			OpenRegularShop(8002000, 8002199)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 3:
			OpenRegularShop(8000200, 8000399)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 4:
			OpenRegularShop(8000500, 8000599)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 5:
			OpenRegularShop(8000600, 8000699)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 6:
			OpenRegularShop(8000400, 8000499)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 7:
			OpenRegularShop(8000700, 8000799)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 8:
			OpenRegularShop(8001700, 8001799)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 9:
			OpenRegularShop(8000900, 8000999)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 10:
			OpenRegularShop(8000800, 8000899)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		elif GetTalkListEntryResult() == 11:
			OpenRegularShop(8001000, 8001099)
			assert not (CheckSpecificPersonMenuIsOpen(5, 0) == 1 and not CheckSpecificPersonGenericDialogIsOpen(0))
		else:
			return 0
			
def t314001110_x0():
	"""State 0"""
	if not IsClientPlayer():
		"""State 1"""
		Label('L0')
		call = t314001110_x1()
		if IsClientPlayer() == 1:
			"""State 2"""
			Label('L1')
			call = t314001110_x2()
			if not IsClientPlayer():
				Goto('L0')
			elif IsPlayerDead() == 1:
				pass
		elif IsPlayerDead() == 1:
			pass
	else:
		Goto('L1')
	"""State 3"""
	call = t314001110_x4()
	assert not IsPlayerDead()
	Goto('L0')
	"""Unused"""
	"""State 4"""
	return 0
	
def t314001110_x1():
	"""State 0"""
	while True:
		"""State 1"""
		# actionbutton:6000:"Talk"
		call = t314001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000,
							 flag6=6000)
		if call.Done():
			"""State 2"""
			call = t314001110_x3()
			if call.Done():
				pass
			elif GetDistanceToPlayer() > 3 or IsMultiplayerInProgress() == 1:
				pass
		elif IsMultiplayerInProgress() == 1:
			pass
		"""State 3"""
		assert t314001110_x6() and not IsMultiplayerInProgress()
	"""Unused"""
	"""State 4"""
	return 0
	
def t314001110_x2():
	"""State 0"""
	Quit()
	"""Unused"""
	"""State 1"""
	return 0
			
def t314001110_x4():
	"""State 0,2"""
	assert t314001110_x6()
	"""State 1"""
	Quit()
	"""Unused"""
	"""State 3"""
	return 0
	
def t314001110_x5(actionbutton1=6000, flag1=6001, flag2=6000, flag3=6000, flag4=6000, flag5=6000, flag6=6000):
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

def t314001110_x6():
	"""State 0,1"""
	ClearTalkProgressData()
	StopEventAnimWithoutForcingConversationEnd(0)
	ForceCloseGenericDialog()
	ForceCloseMenu()
	ReportConversationEndToHavokBehavior()
	"""State 2"""
	return 0

