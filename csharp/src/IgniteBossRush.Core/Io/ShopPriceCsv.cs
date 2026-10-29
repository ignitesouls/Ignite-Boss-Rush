// SPDX-License-Identifier: GPL-3.0-only
using System;
using System.Collections.Generic;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Text;
using IgniteBossRush.Core.Models;

namespace IgniteBossRush.Core.Io;

/// <summary>
/// Spreadsheet-friendly price sheet for the Boss Rush shop. Referenced from
/// <c>shop_pool.json</c> via <c>"prices_csv": "shop_prices.csv"</c> and merged
/// into the pool's <c>cost_amber_shards</c> fields at load time.
///
/// Format (header row required, columns in any order):
/// <code>
/// category,param_id,name,cost_amber_shards
/// weapons,2000000,Longsword,2
/// great_runes,191,Godrick's Great Rune,5
/// </code>
///   - <c>category</c>: weapons | talismans | ash_of_war | crystal_tears | great_runes
///   - <c>param_id</c>: the same id used in shop_pool.json for that category
///   - <c>name</c>: informational only (ignored), so the sheet is readable
///   - <c>cost_amber_shards</c>: 1..99; leave blank to keep the JSON/default price
///
/// Blank lines and lines starting with <c>#</c> are skipped. Quoted fields
/// (Excel style, <c>""</c> for an embedded quote) are supported. A row whose
/// (category, param_id) isn't in the pool, or a duplicate row, is an error —
/// a typo should fail loudly rather than silently leave the old price.
/// </summary>
public static class ShopPriceCsv
{
    /// <summary>Read the sheet and write each non-blank price onto the
    /// matching pool entry. Returns the number of prices applied.</summary>
    public static int Apply(ShopPoolFile pool, string csvPath)
    {
        var byCategory = EntriesByCategory(pool);
        var seen = new HashSet<(string, int)>();
        int applied = 0;

        string[] lines = File.ReadAllLines(csvPath, Encoding.UTF8); // strips a UTF-8 BOM
        int catCol = -1, idCol = -1, costCol = -1;
        bool haveHeader = false;

        for (int lineNo = 1; lineNo <= lines.Length; lineNo++)
        {
            string line = lines[lineNo - 1];
            if (string.IsNullOrWhiteSpace(line) || line.TrimStart().StartsWith('#'))
                continue;

            List<string> cells = SplitCsvLine(line);
            string Loc() => $"{Path.GetFileName(csvPath)} line {lineNo}";

            if (!haveHeader)
            {
                var header = cells.Select(c => c.Trim().ToLowerInvariant()).ToList();
                catCol = header.IndexOf("category");
                idCol = header.IndexOf("param_id");
                costCol = header.IndexOf("cost_amber_shards");
                if (catCol < 0 || idCol < 0 || costCol < 0)
                    throw new InvalidDataException(
                        $"{Loc()}: header must contain category, param_id and "
                        + "cost_amber_shards columns.");
                haveHeader = true;
                continue;
            }

            string Cell(int i) => i < cells.Count ? cells[i].Trim() : "";

            string costText = Cell(costCol);
            if (costText.Length == 0)
                continue; // blank price = keep whatever shop_pool.json / defaults say

            string category = Cell(catCol).ToLowerInvariant();
            if (!byCategory.TryGetValue(category, out var entries))
                throw new InvalidDataException(
                    $"{Loc()}: unknown category '{Cell(catCol)}' "
                    + $"(expected one of {string.Join(", ", byCategory.Keys)}).");

            if (!int.TryParse(Cell(idCol), NumberStyles.Integer,
                               CultureInfo.InvariantCulture, out int paramId))
                throw new InvalidDataException(
                    $"{Loc()}: param_id '{Cell(idCol)}' is not an integer.");

            if (!int.TryParse(costText, NumberStyles.Integer,
                               CultureInfo.InvariantCulture, out int cost))
                throw new InvalidDataException(
                    $"{Loc()}: cost_amber_shards '{costText}' is not an integer.");

            if (!seen.Add((category, paramId)))
                throw new InvalidDataException(
                    $"{Loc()}: duplicate row for {category} {paramId}.");

            if (!entries.TryGetValue(paramId, out var entry))
                throw new InvalidDataException(
                    $"{Loc()}: {category} {paramId} is not in shop_pool.json.");

            // Range is enforced once, centrally, by ShopRollGenerator.BuildPlan
            // (it reports the item name), so no duplicate check here.
            entry.CostAmberShards = cost;
            applied++;
        }

        if (!haveHeader)
            throw new InvalidDataException($"{Path.GetFileName(csvPath)} has no header row.");
        return applied;
    }

    // ------------------------------------------------------------------

    private static Dictionary<string, Dictionary<int, IShopPoolEntry>> EntriesByCategory(
        ShopPoolFile pool)
    {
        var result = new Dictionary<string, Dictionary<int, IShopPoolEntry>>();
        foreach (var (category, entries) in pool.Pools.ByCategory())
        {
            var map = new Dictionary<int, IShopPoolEntry>();
            // First occurrence wins if the pool itself has a duplicate id;
            // duplicate pool ids are a pool problem, not a price-sheet one.
            foreach (var e in entries) map.TryAdd(e.ParamId, e);
            result[category] = map;
        }
        return result;
    }

    /// <summary>Minimal RFC 4180 field splitter for a single line.</summary>
    internal static List<string> SplitCsvLine(string line)
    {
        var cells = new List<string>();
        var cur = new StringBuilder();
        bool inQuotes = false;
        for (int i = 0; i < line.Length; i++)
        {
            char ch = line[i];
            if (inQuotes)
            {
                if (ch == '"')
                {
                    if (i + 1 < line.Length && line[i + 1] == '"') { cur.Append('"'); i++; }
                    else inQuotes = false;
                }
                else cur.Append(ch);
            }
            else if (ch == '"') inQuotes = true;
            else if (ch == ',') { cells.Add(cur.ToString()); cur.Clear(); }
            else cur.Append(ch);
        }
        cells.Add(cur.ToString());
        return cells;
    }
}
