// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    if (EventFlag(1049308063)) { //if boss selected (erdtree avatar west)
        $InitializeCommonEvent(0, 90005870, 1033430800, 904810600, 18);
        $InitializeCommonEvent(0, 90005860, 1033430800, 0, 1033430800, 0, 30205, 0);
        $InitializeCommonEvent(0, 90005251, 1033430800, 20, 0, 0);
        $InitializeCommonEvent(0, 90005872, 1033430800, 18, 0);
    }
    $InitializeCommonEvent(0, 900005610, 1033431680, 100, 800, 1033438600);
    $InitializeCommonEvent(0, 90005300, 1033430200, 1033430200, 40238, 0, 0);
});
