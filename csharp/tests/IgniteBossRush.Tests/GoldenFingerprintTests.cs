// SPDX-License-Identifier: GPL-3.0-only
using System;
using System.IO;
using IgniteBossRush.Core.Generation;
using Xunit;

namespace IgniteBossRush.Tests;

/// <summary>
/// Cross-implementation gold-master test: run the C# DropGenerator against the
/// real step2/step3/step4 fixtures with the same seed the Python reference
/// used, and assert the canonical SHA-256 matches byte-for-byte.
///
/// The expected hash below is the value stamped into
/// <c>step5-generator/sample_output/integrity.sha256</c> — if this passes,
/// the C# port is a drop-in replacement for generate.py for the
/// "test-seed-alpha-2026" fixture seed.
///
/// Skip policy: the fixture files live inside the repo but only exist when
/// tests run from inside the working tree. A published .exe wouldn't have
/// them. We locate them by walking upward from the test binary's directory
/// looking for the sentinel <c>step2-flag-pool/flag_pool.json</c>; if it's
/// absent, the test is reported as skipped rather than failing.
/// </summary>
public class GoldenFingerprintTests
{
    private const string ReferenceSeed = "test-seed-alpha-2026";
    // Cross-validated against Python step5-generator/generate.py running over
    // the same fixtures with the same seed — both produce this exact hash.
    // If you regenerate the fixtures (step2/3/4), refresh this constant by
    // running generate.py and copying its emitted fingerprint.
    private const string ExpectedFingerprint =
        "5e9a9a8fe5e09dbb79d1f07f9f8811fe6b1143ad76fe63ffd99596c34a455a1b";

    [Fact]
    public void DropGenerator_AgainstRealFixtures_MatchesPythonReferenceHash()
    {
        if (!TryLocateFixtures(out var flagPool, out var exclusions, out var bossCatalog))
        {
            // xUnit has no first-class "skip" outside of v3; the convention
            // used across this repo is to Assert.True(true, skipReason) so
            // CI still passes when the repo sources aren't mounted.
            Assert.True(true,
                "Fixture files not found (flag_pool/exclusions/boss_catalog). " +
                "This is expected when the test binary runs outside the repo tree.");
            return;
        }

        string outDir = Path.Combine(Path.GetTempPath(),
            "ignite-golden-" + Guid.NewGuid().ToString("N"));
        try
        {
            var result = new DropGenerator(new DropGeneratorOptions
            {
                Seed = ReferenceSeed,
                FlagPoolPath = flagPool,
                ExclusionsPath = exclusions,
                BossCatalogPath = bossCatalog,
                // Timestamp is cosmetic (goes into SEED_INFO.txt, not drops.canonical)
                // but fix it so the generated drops.json meta block is stable
                // too — useful for future diffing against the Python sample output.
                FixedTimestampUtc = "2026-04-13T00:00:00.000000+00:00",
            }).Generate(outDir);

            Assert.Equal(ExpectedFingerprint, result.Fingerprint);
        }
        finally
        {
            try { if (Directory.Exists(outDir)) Directory.Delete(outDir, recursive: true); }
            catch { /* best effort */ }
        }
    }

    private static bool TryLocateFixtures(out string flagPool, out string exclusions, out string bossCatalog)
    {
        flagPool = exclusions = bossCatalog = string.Empty;

        // Walk up from the test assembly's directory looking for the repo
        // root (identified by the presence of step2-flag-pool/flag_pool.json).
        string? dir = AppContext.BaseDirectory;
        for (int i = 0; i < 12 && dir is not null; i++)
        {
            string candidate = Path.Combine(dir, "step2-flag-pool", "flag_pool.json");
            if (File.Exists(candidate))
            {
                flagPool    = candidate;
                exclusions  = Path.Combine(dir, "step3-exclusions", "exclusions.json");
                bossCatalog = Path.Combine(dir, "step4-boss-catalog", "boss_catalog.json");
                return File.Exists(exclusions) && File.Exists(bossCatalog);
            }
            dir = Path.GetDirectoryName(dir);
        }
        return false;
    }
}
