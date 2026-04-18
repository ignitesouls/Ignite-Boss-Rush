# IgniteBossRush (C# port)

A standalone re-implementation of the Ignite Rush seeded-competition tool
in C# / .NET 8. Produces byte-identical drop plans, the same EMEVD binary
patches, and the same tamper-evident bundles as the legacy Python pipeline
— but ships as a single Windows `.exe` with a WPF GUI so organizers don't
need Python, Node, or `yabber` on their machines.

License: GPL-3.0-only (matches the rest of the repo).

---

## 1. Layout

```
csharp/
├── IgniteBossRush.sln                 dotnet sln (CLI + GUI + Core + Tests)
├── Directory.Build.props              shared TargetFramework + LangVersion
├── src/
│   ├── IgniteBossRush.Core/           pure library — RNG, canonical JSON,
│   │                                   drop generator, EMEVD binary patcher,
│   │                                   bundle builder, pipeline orchestrator
│   ├── IgniteBossRush.Cli/            console front-end (`igniterush.exe`)
│   └── IgniteBossRush.Gui/            WPF shell (`IgniteRush.exe`)
└── tests/
    └── IgniteBossRush.Tests/          xUnit — PRNG vectors, canonical
                                         serialization, EMEVD byte layouts,
                                         generator determinism + gold-master
```

SoulsFormatsNEXT is consumed via the project reference at
`Phase0_RoundTripTest/vendor/SoulsFormatsNEXT/SoulsFormats/` that's already
round-trip-verified against this mod's EMEVDs. The same binary reader/writer
drives every stage of the pipeline.

---

## 2. Requirements

- .NET SDK **8.0.100 or newer** (https://dot.net)
- Windows 10/11 for the WPF GUI build (`net8.0-windows`). The CLI and Core
  library are plain `net8.0` and run on Linux / macOS too.
- No external tooling needed at runtime — all native dependencies (including
  `oo2core_6_win64.dll` used for Oodle inside DCX) are consumed by
  SoulsFormatsNEXT the same way the Phase 0 round-trip harness does.

---

## 3. Build

From the `csharp/` directory:

```
dotnet restore
dotnet build -c Release
dotnet test  -c Release
```

The tests include a gold-master assertion: if the repo's
`step2-flag-pool/`, `step3-exclusions/`, and `step4-boss-catalog/` folders
are present, `GoldenFingerprintTests` re-runs the seeded drop generation
against seed `test-seed-alpha-2026` and asserts the canonical SHA-256
equals `bd406b07556272fe5a9060301ec96abd8b7227eca6426ce497f8bcf44bafacf0`
— the same value stamped into
`step5-generator/sample_output/integrity.sha256`.

That's the single strongest cross-implementation check: if it passes, the
C# generator is a drop-in replacement for `generate.py`.

---

## 4. Publish a single-file GUI executable

To produce `IgniteRush.exe` for organizers to hand to non-developers:

```
dotnet publish src/IgniteBossRush.Gui/IgniteBossRush.Gui.csproj ^
    -c Release ^
    -r win-x64 ^
    --self-contained true ^
    /p:PublishSingleFile=true ^
    /p:IncludeNativeLibrariesForSelfExtract=true ^
    -o publish/gui
```

Output: `publish/gui/IgniteRush.exe` (~70 MB self-extracting bundle).
No .NET runtime install required on the target machine.

For the CLI (smaller — no WPF dependencies):

```
dotnet publish src/IgniteBossRush.Cli/IgniteBossRush.Cli.csproj ^
    -c Release ^
    -r win-x64 ^
    --self-contained true ^
    /p:PublishSingleFile=true ^
    -o publish/cli
```

Output: `publish/cli/igniterush.exe`. Same behavior as the GUI, but suitable
for scripting / CI.

---

## 5. Use

### 5.1 GUI

Double-click `IgniteRush.exe`. Fill in (or paste):

1. **Seed** — hex string, or click **Mint seed** to generate a
   cryptographically-random 128-bit one.
2. **Source mod folder** — the unpacked `Ignite Rush Alpha Version v3.6.4
   Boss Arena/` directory. Must contain `event/`.
3. **flag_pool.json / exclusions.json / boss_catalog.json** — pointers to
   the step2/3/4 outputs the Python pipeline already produces (shipped in
   this repo under `step2-flag-pool/`, `step3-exclusions/`,
   `step4-boss-catalog/`).
4. **Output workspace** — any empty folder the tool may scribble into.

Click **Run pipeline**. The fingerprint panel populates with:

- `drops.canonical` — SHA-256 of the canonical drop table bytes.
- `artifact_tree`   — SHA-256 of the per-file hash manifest.
- `bundle_root`     — SHA-256 tying the two above together. **Pre-commit
  this one value** before anyone runs the seed.

### 5.2 CLI

```
igniterush run ^
    --seed         <hex>                    (omit to auto-mint)
    --source-mod   "<path>\\Ignite Rush Alpha Version v3.6.4 Boss Arena" ^
    --flag-pool    "<repo>\\step2-flag-pool\\flag_pool.json" ^
    --exclusions   "<repo>\\step3-exclusions\\exclusions.json" ^
    --boss-catalog "<repo>\\step4-boss-catalog\\boss_catalog.json" ^
    --out-dir      "<workspace>"
```

Sub-commands `generate`, `patch`, and `bundle` run the three stages
independently; see `igniterush help` for the full flag list.

---

## 6. Output layout

After a successful run:

```
<workspace>/
├── generator/
│   ├── drops.json
│   ├── SEED_INFO.txt
│   └── integrity.sha256
├── patched_mod/              ← full mod tree with modified *.emevd.dcx
│   └── event/…
├── patch_report.json         ← stats from the EMEVD patcher
└── competition_bundle/
    ├── drops.json
    ├── patched_event_bin/    ← only *.emevd.dcx that differ from source
    ├── integrity.sha256
    ├── SEED_INFO.txt
    └── README.txt
```

`patched_mod/` is what you hand to Matt's Randomizer via `--merge`; the
`competition_bundle/` is what you publish as the tamper-evident artifact.

---

## 7. Cross-validation against the Python pipeline

The Python pipeline under `step5-generator/`, `step6-patcher/`, and
`step7-bundle/` is kept in-tree as an independent re-implementation.
Running both and comparing the resulting `drops.canonical` and
`bundle_root` hashes for the same seed is the recommended sanity check
before a live competition — if they disagree, file a bug before
publishing.
