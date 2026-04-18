// SPDX-License-Identifier: GPL-3.0-only
using SoulsFormats;

namespace IgniteBossRush.Core.Patching;

/// <summary>
/// Builders for the handful of EMEVD instructions the patcher emits.
///
/// SoulsFormats' <see cref="EMEVD.Instruction.PackArgs(System.Collections.Generic.IEnumerable{object})"/>
/// already encodes Elden Ring's native padding rules (u8 no pad, u16 Pad(2),
/// u32/i32/f32 Pad(4), final Pad(4)) so we drive it with typed boxes to get
/// byte-exact ArgData. The ArgData sizes below are asserted in-line so any
/// future refactor that changes padding blows up loudly at patch time rather
/// than at game-load time.
/// </summary>
internal static class InstructionFactory
{
    /// <summary>
    /// SKIP IF Comparison (1000, 5)
    /// Args: (u8 skip, i8 cmpType, i32 lhs, i32 rhs)
    /// Packed layout: [skip:1][cmp:1][pad:2][lhs:4][rhs:4]  → 12 bytes.
    /// The lhs slot starts at offset 4 — that's the TargetStartByte the
    /// Parameter substitution uses to inject the caller's X0_4 param.
    /// </summary>
    public const int SkipIfComparisonLhsOffset = 4;
    public const int SkipIfComparisonArgLen    = 12;

    public static EMEVD.Instruction SkipIfComparison(byte skip, sbyte cmp, int lhs, int rhs)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankControlFlowSystem,
            PatchConstants.IdSkipIfComparison,
            new object[] { skip, cmp, lhs, rhs });
        AssertSize(instr, SkipIfComparisonArgLen, "SkipIfComparison");
        return instr;
    }

    /// <summary>
    /// Set Event Flag (2003, 66)
    /// Args: (u8 flagType, u32 flagId, u8 flagState)
    /// Packed layout: [type:1][pad:3][flagId:4][state:1][pad:3]  → 12 bytes.
    /// </summary>
    public const int SetEventFlagArgLen = 12;

    public static EMEVD.Instruction SetEventFlagOn(uint flagId)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankEvent,
            PatchConstants.IdSetEventFlag,
            new object[] {
                PatchConstants.FlagTypeEventFlag,
                flagId,
                PatchConstants.FlagStateOn,
            });
        AssertSize(instr, SetEventFlagArgLen, "SetEventFlag");
        return instr;
    }

    /// <summary>
    /// End Unconditionally (1000, 4)
    /// Args: (u8 endType)
    /// Packed layout: [endType:1][pad:3]  → 4 bytes.
    /// </summary>
    public const int EndUnconditionallyArgLen = 4;

    public static EMEVD.Instruction EndUnconditionally()
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankControlFlowSystem,
            PatchConstants.IdEndUnconditionally,
            new object[] { PatchConstants.EndTypeEnd });
        AssertSize(instr, EndUnconditionallyArgLen, "EndUnconditionally");
        return instr;
    }

    /// <summary>
    /// SKIP IF Event Flag (1003, 1)
    /// Args: (u8 skip, u8 flagState, u8 flagType, u32 flagId)
    /// Packed layout: [skip:1][state:1][type:1][pad:1][flagId:4]  → 8 bytes.
    /// </summary>
    public const int SkipIfEventFlagArgLen = 8;

    public static EMEVD.Instruction SkipIfEventFlag(byte skip, byte flagState, uint flagId)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankControlFlowEvent,
            PatchConstants.IdSkipIfEventFlag,
            new object[] {
                skip,
                flagState,
                PatchConstants.FlagTypeEventFlag,
                flagId,
            });
        AssertSize(instr, SkipIfEventFlagArgLen, "SkipIfEventFlag");
        return instr;
    }

    /// <summary>
    /// Set Event Flag (2003, 66) — OFF variant. Same opcode as
    /// <see cref="SetEventFlagOn"/> but with FlagState=OFF.
    /// </summary>
    public static EMEVD.Instruction SetEventFlagOff(uint flagId)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankEvent,
            PatchConstants.IdSetEventFlag,
            new object[] {
                PatchConstants.FlagTypeEventFlag,
                flagId,
                PatchConstants.FlagStateOff,
            });
        AssertSize(instr, SetEventFlagArgLen, "SetEventFlagOff");
        return instr;
    }

    /// <summary>
    /// Award Item Lot (2003, 4)
    /// Args: (i32 itemLotId)
    /// Packed layout: [itemLotId:4]  → 4 bytes.
    /// </summary>
    public const int AwardItemLotArgLen = 4;

    public static EMEVD.Instruction AwardItemLot(int itemLotId)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankEvent,
            PatchConstants.IdAwardItemLot,
            new object[] { itemLotId });
        AssertSize(instr, AwardItemLotArgLen, "AwardItemLot");
        return instr;
    }

    /// <summary>
    /// Remove Item From Player (2003, 24)
    /// Args: (u8 itemType, i32 itemId, i32 number)
    /// Packed layout: [type:1][pad:3][itemId:4][number:4]  → 12 bytes.
    /// number == -1 means "remove all" — the conventional wipe value.
    /// </summary>
    public const int RemoveItemFromPlayerArgLen = 12;

    public static EMEVD.Instruction RemoveItemFromPlayer(byte itemType, int itemId, int number)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankEvent,
            PatchConstants.IdRemoveItemFromPlayer,
            new object[] { itemType, itemId, number });
        AssertSize(instr, RemoveItemFromPlayerArgLen, "RemoveItemFromPlayer");
        return instr;
    }

    /// <summary>
    /// Initialize Common Event (2000, 6)
    /// Args: (i32 slot, u32 eventId, [u32 params...])
    /// Packed layout for no-arg target: [slot:4][eventId:4]  → 8 bytes.
    ///
    /// We always emit the no-arg form here — the events the tier-clear
    /// splicer wires up (90009941..949) take no parameters. If a future
    /// caller needs to forward args we'll add an overload then.
    /// </summary>
    public const int InitializeCommonEventNoArgsLen = 8;

    public static EMEVD.Instruction InitializeCommonEvent(int slot, uint targetEventId)
    {
        var instr = new EMEVD.Instruction(
            PatchConstants.BankSystem,
            PatchConstants.IdInitializeCommonEvent,
            new object[] { slot, targetEventId });
        AssertSize(instr, InitializeCommonEventNoArgsLen, "InitializeCommonEvent");
        return instr;
    }

    /// <summary>
    /// Builds a Parameter entry that forwards the current event's first arg
    /// (X0_4 = boss_flag) into a SkipIfComparison instruction's lhs slot.
    /// </summary>
    public static EMEVD.Parameter BossFlagParameter(int instructionIndex)
    {
        return new EMEVD.Parameter(
            instrIndex: instructionIndex,
            targetStartByte: SkipIfComparisonLhsOffset,
            srcStartByte: 0,
            byteCount: 4);
    }

    private static void AssertSize(EMEVD.Instruction instr, int expected, string name)
    {
        if (instr.ArgData.Length != expected)
        {
            throw new System.InvalidOperationException(
                $"{name} produced ArgData len {instr.ArgData.Length}, expected {expected}. "
                + "EMEVD padding rules may have drifted — patcher refuses to emit malformed bytecode.");
        }
    }
}
