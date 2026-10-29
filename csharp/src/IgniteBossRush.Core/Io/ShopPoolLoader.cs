// SPDX-License-Identifier: GPL-3.0-only
using System.IO;
using IgniteBossRush.Core.Models;

namespace IgniteBossRush.Core.Io;

/// <summary>
/// Single entry point for reading <c>shop_pool.json</c>. Loads the JSON and,
/// when it names a <c>prices_csv</c>, merges that price sheet in. Every call
/// site (generator, pipeline, CLI, tests) must go through here so the shop
/// roll and the regulation patch always see the same prices.
/// </summary>
public static class ShopPoolLoader
{
    public static ShopPoolFile Load(string shopPoolPath)
    {
        var pool = JsonLoader.LoadFile<ShopPoolFile>(shopPoolPath);

        if (!string.IsNullOrWhiteSpace(pool.PricesCsv))
        {
            string baseDir = Path.GetDirectoryName(Path.GetFullPath(shopPoolPath)) ?? ".";
            string csvPath = Path.GetFullPath(Path.Combine(baseDir, pool.PricesCsv));
            if (!File.Exists(csvPath))
                throw new FileNotFoundException(
                    $"shop_pool.json prices_csv points at '{pool.PricesCsv}', "
                    + $"but {csvPath} does not exist.", csvPath);
            ShopPriceCsv.Apply(pool, csvPath);
        }

        return pool;
    }
}
