// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    if (EventFlag(1049308073)) { //if boss selected (fallingstar beast)
        $InitializeCommonEvent(0, 90005870, 1041500800, 904680602, 19);
        $InitializeCommonEvent(0, 90005860, 1041500800, 0, 1041500800, 0, 30310, 0);
    }
    $InitializeEvent(0, 1041502200);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005201, 1041500800, 30009, 20009, 30, 0, 0, 0, 0, 0);
});

// 巨大クレーターSFX制御 -- Giant crater SFX control
$Event(1041502200, Restart, function() {
    if (!EventFlag(1041500800)) {
        WaitFor(SpecialStandbyEndedFlag(1041500800));
    }
L0:
    DeleteMapSFX(1041502200, false);
    EndEvent();
});
