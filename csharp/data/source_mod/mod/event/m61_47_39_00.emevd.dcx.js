// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82]
// @version    3.5
// ==/EMEVD==

$Event(0, Default, function() {
    RegisterBonfire(2047390000, 2047391950, 0, 0, 0, 0);
    if (EventFlag(1049308194)) { //if boss selected (death rite bird)
        $InitializeCommonEvent(0, 90005211, 2047390800, 30000, 20000, 2047392800, 0, 0, 1, 0, 0, 0);
        $InitializeCommonEvent(0, 90005870, 2047390800, 906260600, 24);
        $InitializeCommonEvent(0, 90005860, 2047390800, 0, 2047390800, 0, 30855, 0);
    }
    $InitializeCommonEvent(0, 90005211, 2047390200, 30016, 20016, 0, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2047390201, 30016, 20016, 0, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2047390202, 30016, 20016, 0, 10, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2047390203, 30016, 20016, 2047392201, 0, 0, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2047390204, 30016, 20016, 2047392201, 0, 1, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005211, 2047390205, 30016, 20016, 2047392201, 0, 2, 0, 0, 0, 0);
    $InitializeCommonEvent(0, 90005301, 2047390300, 2047390400, 2047390070, 3, 0);
});
