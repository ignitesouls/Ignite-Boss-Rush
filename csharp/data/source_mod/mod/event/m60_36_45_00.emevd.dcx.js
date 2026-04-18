// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    "N:\\GR\\data\\Param\\event\\common_func.emevd\u0000N:\\GR\\data\\Param\\event\\common_macro.emevd\u0000N:\\GR\\data\\Param\\event\\m60.emevd\u0000\u0000\u0000\u0000\u0000"
// @linked    [0,82,166]
// @version    3.5
// ==/EMEVD==

// コンストラクタ -- constructor
$Event(0, Default, function() {
    RegisterBonfire(1036450000, 1036451950, 0, 0, 0, 5);
    if (EventFlag(1049308062)) { //if boss selected (death rite bird)
        $InitializeCommonEvent(0, 90005261, 1036450340, 1036452340, 10, 0, 1700);
        $InitializeCommonEvent(0, 90005860, 1036450800, 0, 1036450340, 0, 1036450400, 0);
        $InitializeCommonEvent(0, 90005870, 1036450340, 904980604, 24);
    }
    $InitializeCommonEvent(0, 90005605, 1036451620, 60, 34, 48, 0, 1034482620, 0, 1036452620, 1036452621, 1036452622, 0, 0, 0, 0);
});

// プリコンストラクタ -- preconstructor
$Event(50, Default, function() {
    $InitializeCommonEvent(0, 90005261, 1036450220, 1036452220, 10, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1036450221, 1036452220, 10, 1, -1);
    $InitializeCommonEvent(0, 90005261, 1036450222, 1036452220, 10, 0.5, -1);
    $InitializeCommonEvent(0, 90005251, 1036450223, 7, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1036450224, 7, 0, -1);
    $InitializeCommonEvent(0, 90005251, 1036450225, 7, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1036450226, 1036452226, 0, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1036450227, 1036452226, 0, 1, -1);
    $InitializeCommonEvent(0, 90005261, 1036450228, 1036452226, 0, 0.5, -1);
    $InitializeCommonEvent(0, 90005261, 1036450229, 1036452226, 0, 0.3, -1);
    $InitializeCommonEvent(0, 90005261, 1036450230, 1036452226, 0, 1, -1);
    $InitializeCommonEvent(0, 90005261, 1036450231, 1036452226, 0, 0, -1);
    $InitializeCommonEvent(0, 90005261, 1036450241, 1036452250, 0, 0.5, -1);
    $InitializeCommonEvent(0, 90005261, 1036450242, 1036452250, 0, 0.3, -1);
    $InitializeCommonEvent(0, 90005261, 1036450243, 1036452250, 0, 1, -1);
    $InitializeCommonEvent(0, 90005261, 1036450250, 1036452250, 0, 0, -1);
});

// ハゲタカ出現イベント -- Vulture appearance event
$Event(1036452200, Restart, function(chrEntityId, targetDistance, timeSeconds, animationId) {
    EndIf(ThisEventSlot());
    DisableCharacterAI(chrEntityId);
    SetSpEffect(chrEntityId, 8560);
    DisableCharacter(chrEntityId);
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, chrEntityId, targetDistance, 1);
    areaChrSp = area && chrSp;
    WaitFor(HasDamageType(chrEntityId, 0, DamageType.Unspecified) || areaChrSp);
    SetNetworkconnectedThisEventSlot(ON);
    if (areaChrSp.Passed) {
        WaitFixedTimeSeconds(timeSeconds);
        if (Signed(animationId) != -1) {
            ForceAnimationPlayback(chrEntityId, animationId, true, false, false);
        }
    }
L1:
    EnableCharacterAI(chrEntityId);
    EnableCharacter(chrEntityId);
});
