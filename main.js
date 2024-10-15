// 14/Oct/2024
// Bug fixes:
// Recurring input issue fix

const _0x1d142c = _0x263c;
(function(_0x4b1627, _0x48f8c8) {
    const _0x502a20 = _0x263c,
        _0xb5f426 = _0x4b1627();
    while (!![]) {
        try {
            const _0x35e828 =
                (parseInt(_0x502a20(0x2bc)) / 0x1) *
                (parseInt(_0x502a20(0x1bd)) / 0x2) +
                -parseInt(_0x502a20(0x1be)) / 0x3 +
                parseInt(_0x502a20(0x2a1)) / 0x4 +
                (parseInt(_0x502a20(0x147)) / 0x5) *
                (-parseInt(_0x502a20(0x186)) / 0x6) +
                (-parseInt(_0x502a20(0x25e)) / 0x7) *
                (-parseInt(_0x502a20(0x2b7)) / 0x8) +
                -parseInt(_0x502a20(0x256)) / 0x9 +
                parseInt(_0x502a20(0x276)) / 0xa;
            if (_0x35e828 === _0x48f8c8) break;
            else _0xb5f426["push"](_0xb5f426["shift"]());
        } catch (_0x34a7ee) {
            _0xb5f426["push"](_0xb5f426["shift"]());
        }
    }
})(_0x5d82, 0xc1678);
let x = 0x0,
    lastStep = 0x0,
    curStep = 0x0,
    countCard = !![],
    fill = ![],
    inputFilled = !![],
    skip,
    urlFilled = !![],
    selectFilled = !![],
    radioFilled = !![],
    dateFilled = !![],
    timeFilled = !![],
    checkboxFilled = !![],
    emailFilled = !![],
    textareaFilled = !![],
    telFilled = !![],
    passwordFilled = !![],
    fileFilled = !![],
    numFilled = !![],
    answer = "",
    selections = [],
    selection = [],
    empReqInput = [],
    empReqUrl = [],
    empReqDate = [],
    empReqTime = [],
    empReqRadio = [],
    empReqSelect = [],
    empReqTextarea = [],
    empReqFile = [],
    empReqPassword = [],
    empReqNum = [],
    empReqTel = [],
    textareaLength = 0x0,
    textInputLength = 0x0,
    emailInputLength = 0x0,
    selectInputLength = 0x0,
    checkboxInputLength = 0x0,
    filledInput = [],
    savedFilledInput = [],
    progress = 0x0,
    skipTo = 0x0,
    next = ![],
    back = ![],
    selArr = [],
    selString = [],
    emptyInput = 0x0,
    selTotal = 0x0,
    searchQ = [],
    domainAllowed = !![],
    dom = [],
    successCard = "",
    redirectTo = "",
    totalSteps = 0x0,
    checkCount = 0x0,
    maxCheckCount = 0x0,
    newTab = !![],
    unfilledArr = [],
    notRobot = !![],
    all_data = [];
var ogCloneArr = [];
let form = $(_0x1d142c(0x1f2)),
    steps = $(_0x1d142c(0x2b6)),
    progressbarClone = $("[data-form=\x22progress-indicator\x22]")[
        _0x1d142c(0x179)
    ](),
    progressbar,
    weightedSelection = $("[data-weighted-selection]")[_0x1d142c(0x261)](
        "weighted-selection"
    ),
    weightedSelectionRange = $(_0x1d142c(0x23f))[_0x1d142c(0x261)](
        _0x1d142c(0x2ae)
    );
const percentageBar = $(_0x1d142c(0x16b)),
    percentageIndicator = $(_0x1d142c(0x170));
let selectMultiple = $(_0x1d142c(0x1c7))["data"]("select-multiple"),
    customError = $(_0x1d142c(0x21f))[_0x1d142c(0x261)](_0x1d142c(0x226)),
    reinitIX = $(_0x1d142c(0x255))[_0x1d142c(0x261)](_0x1d142c(0x199)),
    memory = $(_0x1d142c(0x27e))["data"](_0x1d142c(0x193)),
    quiz = $(_0x1d142c(0x163))[_0x1d142c(0x261)](_0x1d142c(0x251));
const urlFormly = new URL(window[_0x1d142c(0x1d8)][_0x1d142c(0x26a)]);
let _params = $("[data-query-param]")[_0x1d142c(0x261)]("query-param"),
    logicExtra = $(_0x1d142c(0x1f2))["data"](_0x1d142c(0x187)),
    oldSubmitText = $(_0x1d142c(0x1ac))[_0x1d142c(0x1b8)](),
    oldResetText = $(_0x1d142c(0x1f1))[_0x1d142c(0x13d)](),
    formReset = $("[data-form=\x22multistep\x22]")[_0x1d142c(0x261)](
        _0x1d142c(0x1b6)
    ),
    resetDelay = $(_0x1d142c(0x211))[_0x1d142c(0x261)](_0x1d142c(0x286)) ?
    $(_0x1d142c(0x211))[_0x1d142c(0x261)]("reset-delay") :
    0x7d0,
    redirectDelay = $(_0x1d142c(0x1ea))[_0x1d142c(0x261)](_0x1d142c(0x1ff)) ?
    $(_0x1d142c(0x1ea))[_0x1d142c(0x261)](_0x1d142c(0x1ff)) :
    0x64,
    phoneFormat = $(_0x1d142c(0x1f2))["data"]("phone-validation"),
    scrollToTop = $(_0x1d142c(0x1f2))[_0x1d142c(0x261)](_0x1d142c(0x2a2)),
    trackLastStep = $(_0x1d142c(0x1da))[_0x1d142c(0x261)](_0x1d142c(0x1f0)),
    conditionalResult =
    $(_0x1d142c(0x202))["data"]("conditional-result") === _0x1d142c(0x228),
    scrollTopOffset = parseInt(
        $("[data-form=\x22multistep\x22]")["data"](_0x1d142c(0x2c1))
    );
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
(savedFilledInput = JSON[_0x1d142c(0x20d)](
    localStorage[_0x1d142c(0x1e0)](_0x1d142c(0x220))
)),
(formlyLastStep = JSON[_0x1d142c(0x20d)](
    localStorage["getItem"](_0x1d142c(0x1aa))
)),
(formlyLastStepAnswer = JSON[_0x1d142c(0x20d)](
    localStorage[_0x1d142c(0x1e0)](_0x1d142c(0x232))
));
let paramUrl = $(_0x1d142c(0x1f2))[_0x1d142c(0x261)](_0x1d142c(0x25f));
const progressiveTarget = $(_0x1d142c(0x1f2))[_0x1d142c(0x13e)](
        _0x1d142c(0x135)
    ),
    progressiveInput = $(_0x1d142c(0x1f2))["find"](_0x1d142c(0x24c)),
    multiSelections = $(_0x1d142c(0x1f2))[_0x1d142c(0x261)](_0x1d142c(0x275));
trackLastStep &&
    (formlyLastStep > x && (x = formlyLastStep),
        formlyLastStepAnswer && (selections = formlyLastStepAnswer));
percentageBar["css"](_0x1d142c(0x24e), "0%"),
    $(_0x1d142c(0x293))[_0x1d142c(0x297)](function() {
        const _0x503cd9 = _0x1d142c;
        ogCloneArr[_0x503cd9(0x1dc)]({
            name: $(this)[_0x503cd9(0x261)](_0x503cd9(0x179)),
            element: $(this)["clone"](!![]),
            display: $(
                _0x503cd9(0x2a9) + $(this)[_0x503cd9(0x261)](_0x503cd9(0x179)) + "\x22]"
            )["eq"](0x0)["clone"](!![]),
        });
    });
const setPageLoadTime = () => {
    const _0x12a046 = _0x1d142c;
    localStorage[_0x12a046(0x129)](
        _0x12a046(0x289),
        Date[_0x12a046(0x164)]()[_0x12a046(0x1e1)]()
    );
};
setPageLoadTime();
$(_0x1d142c(0x1e8))[_0x1d142c(0x16e)] > 0x0 && (notRobot = ![]);

function recaptcha(_0x1214a1) {
    notRobot = !![];
}
($(steps[x])["data"](_0x1d142c(0x25b)) ||
    $(steps[x])["find"](_0x1d142c(0x249))[_0x1d142c(0x261)](_0x1d142c(0x25b))) &&
(next = !![]);
$("[data-count-card]")[_0x1d142c(0x16e)] > 0x0 &&
    (countCard = $(_0x1d142c(0x22d))[_0x1d142c(0x261)](_0x1d142c(0x1b3)));
$(_0x1d142c(0x238))[_0x1d142c(0x1b7)](),
    $(progressbarClone)[_0x1d142c(0x21b)](_0x1d142c(0x140)),
    $("[data-form=\x22progress\x22]")[_0x1d142c(0x1a1)]()[_0x1d142c(0x216)](),
    $("[data-form=\x22submit-btn\x22]")[_0x1d142c(0x1b7)](),
    $("[data-form-ms=\x22submit-btn\x22]")[_0x1d142c(0x1b7)](),
    steps[_0x1d142c(0x297)](function() {
        const _0x358960 = _0x1d142c;
        $(_0x358960(0x195))[_0x358960(0x1e7)](
            progressbarClone[_0x358960(0x179)](!![], !![])
        );
    }),
    $(_0x1d142c(0x17f))[_0x1d142c(0x1b7)]();
countCard
    ?
    ((curStep = x + 0x1),
        (totalSteps = steps[_0x1d142c(0x16e)]),
        $(_0x1d142c(0x181))[_0x1d142c(0x13d)](totalSteps)) :
    ($(steps[x])[_0x1d142c(0x261)]("card") ?
        (curStep = curStep + 0x0) :
        (curStep = curStep + 0x1),
        (totalSteps = $("[data-form=\x22step\x22]:not([data-card=\x22true\x22])")[
            "length"
        ]),
        $(_0x1d142c(0x181))[_0x1d142c(0x13d)](totalSteps),
        $("[data-form=\x22step\x22][data-card]")[_0x1d142c(0x297)](function() {
            const _0x2b3977 = _0x1d142c;
            $(
                $("[data-form=\x22progress-indicator\x22]")[$(this)[_0x2b3977(0x224)]()]
            )[_0x2b3977(0x1b7)]();
        }));
(progressbar = $(_0x1d142c(0x195))[_0x1d142c(0x1a1)]()),
$("[data-form=\x22progress-indicator\x22]")["on"](
        "click",
        clickableIndicator
    ),
    $(_0x1d142c(0x19f))[_0x1d142c(0x13d)](curStep),
    steps[_0x1d142c(0x1b7)](),
    $(_0x1d142c(0x14a))[_0x1d142c(0x1b7)](),
    $(_0x1d142c(0x25d))[_0x1d142c(0x297)](function() {
        const _0x45fe15 = _0x1d142c;
        $(this)[_0x45fe15(0x198)]("type", "button");
    });

function getParams() {
    const _0x31ad7f = _0x1d142c;
    urlFormly[_0x31ad7f(0x1ab)][_0x31ad7f(0x1e5)](function(
        _0x212f8b,
        _0x42cad8
    ) {
        const _0x2388b4 = _0x31ad7f;
        searchQ[_0x2388b4(0x1dc)]({ val: _0x212f8b, key: _0x42cad8 });
    });
}

function getSafe(_0x2666b9, _0x4888d3) {
    try {
        return _0x2666b9();
    } catch (_0x16bd87) {
        return _0x4888d3;
    }
}

function phoneAutoFormat(_0x1d172e) {
    var _0x41de28 = "";
    return function(_0x53e133) {
        const _0x4aebe1 = _0x263c;
        var _0x20f3ee = "",
            _0xecd6f1 = _0x53e133[_0x4aebe1(0x212)](/\D/g, ""),
            _0x38c68d = 0x0,
            _0x59fd12 = 0x0;
        while (
            _0x38c68d < _0xecd6f1[_0x4aebe1(0x16e)] &&
            _0x59fd12 < _0x1d172e[_0x4aebe1(0x16e)]
        ) {
            _0x1d172e[_0x59fd12] === "x" ?
                ((_0x20f3ee += _0xecd6f1[_0x38c68d]), _0x38c68d++) :
                (_0x20f3ee += _0x1d172e[_0x59fd12]),
                _0x59fd12++;
        }
        if (_0x53e133["length"] < _0x41de28[_0x4aebe1(0x16e)]) {
            var _0x2db4dc = _0x1d172e["slice"](_0x59fd12);
            _0x20f3ee += _0x2db4dc[_0x4aebe1(0x212)](/x/g, "");
        }
        return (_0x41de28 = _0x20f3ee), _0x20f3ee;
    };
}

function validateURL(_0xd51eb0) {
    const _0x2a3204 = _0x1d142c;
    return urlPattern[_0x2a3204(0x180)](_0xd51eb0) ? !![] : ![];
}
quiz &&
    steps[_0x1d142c(0x297)](function() {
        const _0x2f93db = _0x1d142c;
        $(this)["children"]()["attr"](_0x2f93db(0x26b), !![]),
            $(this)[_0x2f93db(0x1a1)]()[_0x2f93db(0x198)]("data-radio-delay", 0xfa);
    });

function disableBtn(_0x23f264) {
    const _0x41dbd7 = _0x1d142c;
    (fill = ![]), !customError &&
        ($(_0x41dbd7(0x28c))[_0x41dbd7(0x18a)]({
                opacity: "0.4",
                "pointer-events": _0x41dbd7(0x1d6),
            }),
            $("[data-form=\x22next-btn\x22]")["addClass"](_0x41dbd7(0x2c2)),
            $(_0x41dbd7(0x1ac))[_0x41dbd7(0x18a)]({
                opacity: _0x41dbd7(0x1e2),
                "pointer-events": _0x41dbd7(0x1d6),
            }),
            $("[data-form=\x22submit-btn\x22]")[_0x41dbd7(0x150)](_0x41dbd7(0x2c2)),
            $("[data-form-ms=\x22submit-btn\x22]")[_0x41dbd7(0x18a)]({
                opacity: _0x41dbd7(0x1e2),
                "pointer-events": _0x41dbd7(0x1d6),
            }),
            $(_0x41dbd7(0x143))[_0x41dbd7(0x150)](_0x41dbd7(0x2c2)));
}

function enableBtn() {
    const _0x400ffc = _0x1d142c;
    (fill = !![]),
    $(_0x400ffc(0x28c))[_0x400ffc(0x18a)]({
            "pointer-events": _0x400ffc(0x1eb),
            opacity: "1",
        }),
        $("[data-form=\x22next-btn\x22]")["removeClass"](_0x400ffc(0x2c2)),
        $(_0x400ffc(0x1ac))["css"]({
            "pointer-events": _0x400ffc(0x1eb),
            opacity: "1",
        }),
        $(_0x400ffc(0x1ac))[_0x400ffc(0x21b)]("disabled"),
        $(_0x400ffc(0x143))["css"]({
            "pointer-events": _0x400ffc(0x1eb),
            opacity: "1",
        }),
        $(_0x400ffc(0x143))[_0x400ffc(0x21b)]("disabled");
}

function saveLastAnswer(_0x2c2a0b) {
    const _0x4f7065 = _0x1d142c;
    localStorage[_0x4f7065(0x284)](_0x4f7065(0x232)),
        localStorage[_0x4f7065(0x129)](
            _0x4f7065(0x232),
            JSON[_0x4f7065(0x2ab)](_0x2c2a0b)
        );
}

function saveFilledInput() {
    const _0xb6def8 = _0x1d142c;
    $(_0xb6def8(0x151))[_0xb6def8(0x23a)](_0xb6def8(0x26f))[_0xb6def8(0x297)](function() {
            const _0x78317c = _0xb6def8;
            $(this)[_0x78317c(0x198)](_0x78317c(0x272)) === _0x78317c(0x19a) ||
                $(this)[_0x78317c(0x198)](_0x78317c(0x272)) === _0x78317c(0x1f7) ?
                $(this)[_0x78317c(0x18f)](_0x78317c(0x2b1)) &&
                (filledInput[_0x78317c(0x1d0)](
                        (_0x3efd06) =>
                        _0x3efd06[_0x78317c(0x1a0)] ===
                        $(this)[_0x78317c(0x198)](_0x78317c(0x15e))
                    ) ?
                    ((filledInput = filledInput["filter"](
                            (_0x1a7c74) =>
                            _0x1a7c74["inputName"] !==
                            $(this)[_0x78317c(0x198)](_0x78317c(0x15e))
                        )),
                        $(this)[_0x78317c(0x1b8)]() !== "" &&
                        filledInput[_0x78317c(0x1dc)]({
                            inputName: $(this)[_0x78317c(0x198)](_0x78317c(0x15e)),
                            value: $(this)[_0x78317c(0x1b8)](),
                        })) :
                    $(this)[_0x78317c(0x1b8)]() !== "" &&
                    filledInput["push"]({
                        inputName: $(this)[_0x78317c(0x198)]("name"),
                        value: $(this)[_0x78317c(0x1b8)](),
                    })) :
                filledInput[_0x78317c(0x1d0)](
                    (_0x3c79f0) =>
                    _0x3c79f0[_0x78317c(0x1a0)] ===
                    $(this)[_0x78317c(0x198)](_0x78317c(0x15e))
                ) ?
                ((filledInput = filledInput[_0x78317c(0x13f)](
                        (_0x544cca) =>
                        _0x544cca[_0x78317c(0x1a0)] !==
                        $(this)[_0x78317c(0x198)](_0x78317c(0x15e))
                    )),
                    $(this)["val"]() !== "" &&
                    filledInput[_0x78317c(0x1dc)]({
                        inputName: $(this)["attr"](_0x78317c(0x15e)),
                        value: $(this)[_0x78317c(0x1b8)](),
                    })) :
                $(this)[_0x78317c(0x1b8)]() !== "" &&
                filledInput["push"]({
                    inputName: $(this)[_0x78317c(0x198)](_0x78317c(0x15e)),
                    value: $(this)["val"](),
                });
        }),
        trackLastStep &&
        (formlyLastStep > x ? (lastStep = formlyLastStep) : (lastStep = x),
            localStorage["removeItem"]("formlyLastStep"),
            localStorage["setItem"](_0xb6def8(0x1aa), lastStep)),
        localStorage[_0xb6def8(0x284)](_0xb6def8(0x220)),
        localStorage[_0xb6def8(0x129)](
            _0xb6def8(0x220),
            JSON["stringify"](filledInput)
        );
}

function scrollTop() {
    const _0x4fe52d = _0x1d142c;
    scrollToTop &&
        $("html,\x20body")["animate"]({
                scrollTop: $(_0x4fe52d(0x1f2))[_0x4fe52d(0x23e)]()[_0x4fe52d(0x2a4)] -
                    scrollTopOffset,
            },
            0x3e8
        );
}

function _0x5d82() {
    const _0x2457ba = [
        "[data-form=\x22submit-btn\x22][data-submit-show]",
        "closest",
        "Failed\x20to\x20update\x20counter:",
        ":input[type=\x22password\x22][required]",
        "[data-cms-select=cms]",
        "[data-form=\x22percentage-bar\x22]",
        "input-field",
        "<div>Step\x20",
        "length",
        "selected",
        "[data-form=\x22percentage-text\x22]",
        "[data-display]",
        "input[type=\x22checkbox\x22][name=\x22",
        "search",
        "<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20Location:</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Total\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        ":input[type=\x27radio\x27]:checked",
        "w--redirected-checked",
        "[data-form=\x22custom-progress-indicator\x22]",
        "clone",
        "require",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-radio-skip]",
        "[data-radio-skip]:visible",
        "fadeIn",
        "[data-input-field]",
        "test",
        "[data-text=\x22total-steps\x22]",
        "innerHTML",
        "file",
        "status",
        "[data-selection]",
        "268158DWXJVo",
        "logic-extra",
        "[data-clickable-all]",
        "textarea",
        "css",
        "input,\x20select,\x20textarea",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20attribute\x20is\x20NOT\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        ":input[type=\x22url\x22]",
        "min-character",
        "prop",
        "clickable",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-selection=\x22other\x22]",
        "memory",
        "log",
        "[data-form=\x22progress\x22]",
        "wait",
        "\x22]:checked",
        "attr",
        "reinit",
        "checkbox",
        "\x22]\x20input",
        "label",
        "Before\x20&lt;/body&gt;\x20tag",
        "N/A",
        "[data-text=\x22current-step\x22]",
        "inputName",
        "children",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20\x22⌘\x20+\x20Enter\x20\x22\x20To\x20Submit</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "f-show",
        "redirect-form-hehexd",
        "answer",
        "parents",
        "f-hide",
        "add-new-input",
        "select[name=\x22",
        "formlyLastStep",
        "searchParams",
        "[data-form=\x22submit-btn\x22]",
        "[data-clone-input-wrapper=\x22",
        "Counter\x20already\x20updated\x20for\x20this\x20month.",
        ".w-form-formradioinput",
        "input[name=\x22",
        "[data-input-target=\x22",
        "[data-clone-wrapper=\x22",
        "count-card",
        "input[type=\x22radio\x22]",
        "[data-add-new-input=\x22",
        "reset",
        "hide",
        "val",
        "required",
        "getMonth",
        "focus",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
        "988040sZgYkl",
        "1431549hAZcpz",
        ".w-checkbox-input",
        "[data-clone-input]",
        "[data-callback=\x22recaptcha\x22]",
        "not\x20maxed",
        "[data-clone-input=\x22",
        "Please\x20wait...",
        "translateX(0rem)",
        "[data-answer]:not([data-answer=\x22",
        "[data-select-multiple]",
        ":input[type=\x22email\x22][required]",
        "backTo",
        "[data-clone=\x22",
        "get",
        "\x22]\x20textarea",
        "data-input-field",
        "true",
        ":input[type=\x22number\x22]",
        "some",
        "cookie",
        "[data-cms-select=text]",
        "[data-selection=\x22",
        "[data-range]:contains(",
        "screen",
        "none",
        "[data-radio-skip=\x22true\x22]",
        "location",
        "<option>",
        "[data-last-step]",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Automatic\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "push",
        "selections\x20email",
        "findIndex",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>4.\x20Back\x20Buttons:\x20data-form=back-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Back\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "getItem",
        "toString",
        "0.4",
        "textarea[required]",
        "redirect",
        "forEach",
        ":input[type=\x22date\x22][required]",
        "append",
        "div.g-recaptcha",
        "textarea[name=\x22",
        "[data-redirect-delay]",
        "auto",
        "timeZone",
        "\x22]\x20[data-input-field^=\x22",
        "active-answer-card",
        "[data-checkbox]",
        "last-step",
        "[data-btn=\x22reset\x22]",
        "[data-form=\x22multistep\x22]",
        "ajaxComplete",
        ":input[required]",
        "input[type=\x22checkbox\x22]",
        ":checked",
        "radio",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Powerups</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "new-tab",
        "input[type=\x22checkbox\x22]:not(:checked)",
        "createElement",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "querySelectorAll",
        "[data-display-wrapper=\x22",
        "redirect-delay",
        ":input[type=\x22time\x22]",
        "PASS",
        "[data-conditional-result]",
        "\x22]\x20input,\x20[data-clone-input=\x22",
        "display",
        "formly",
        "getElementById",
        "\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20on\x20same\x20element\x20as\x20data-step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x0a\x20\x20.f-icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#ff3232\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20width:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20height:\x201.3rem\x20!important;\x0a\x20\x20\x20\x20color:\x20#57ff4b\x20!important;\x0a\x20\x20\x20\x20flex-direction:\x20column\x20!important;\x0a\x20\x20\x20\x20justify-content:\x20center\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-sidenav\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x202rem;\x0a\x20\x20\x20\x20grid-row-gap:\x202rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.73);\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a;\x0a\x20\x20\x20\x20border-right:\x201px\x20solid\x20#fff;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20height:\x20100vh;\x0a\x20\x20\x20\x20height:\x20100%\x20!important;\x0a\x20\x20\x20\x20width:\x2035%;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20z-index:\x20999999999999\x20!important;\x0a\x20\x20\x20\x20top:\x200;\x0a\x20\x20\x20\x20left:\x200;\x0a\x20\x20\x20\x20background-color:\x20#1a1a1a\x20!important;\x0a\x20\x20\x20\x20overflow-x:\x20hidden\x20!important;\x0a\x20\x20\x20\x20transition:\x200.5s\x20!important;\x0a\x20\x20\x20\x20max-height:\x20100vh;\x0a\x20\x20\x20\x20padding:\x2032px;\x0a\x20\x20\x20\x20font-family:\x20system-ui,\x20-apple-system,\x20BlinkMacSystemFont,\x20Segoe\x20UI,\x20Roboto,\x20Noto\x20Sans,\x20Ubuntu,\x20Cantarell,\x20Helvetica\x20Neue,\x20Oxygen,\x20Fira\x20Sans,\x20Droid\x20Sans,\x20sans-serif;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20\x20\x20overflow:\x20auto;\x0a\x20\x20\x20\x20transform:\x20translateX(-40rem);\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x20rgba(0,\x200,\x200,\x200),\x201.8px\x20-.2px\x205.8px\x20rgba(0,\x200,\x200,\x20.043),\x203.9px\x20-.4px\x2011.7px\x20rgba(0,\x200,\x200,\x20.05),\x206.6px\x20-.7px\x2018px\x20rgba(0,\x200,\x200,\x20.055),\x2011.4px\x20-1.2px\x2025.3px\x20rgba(0,\x200,\x200,\x20.06),\x2022.3px\x20-2.3px\x2035.9px\x20rgba(0,\x200,\x200,\x20.063);\x0a\x20\x20\x20\x20line-height:1.4\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-openbtn\x20{\x0a\x20\x20\x20\x20white-space:\x20nowrap\x20!important;\x0a\x20\x20\x20\x20cursor:\x20pointer\x20!important;\x0a\x20\x20\x20\x20box-shadow:\x200\x200\x200\x201px\x20rgba(0,\x200,\x200,\x20.1),\x200\x201px\x203px\x20rgba(0,\x200,\x200,\x20.1)\x20!important;\x0a\x20\x20\x20\x20visibility:\x20visible\x20!important;\x0a\x20\x20\x20\x20z-index:\x2099\x20!important;\x0a\x20\x20\x20\x20color:\x20#e7e7e7\x20!important;\x0a\x20\x20\x20\x20opacity:\x201\x20!important;\x0a\x20\x20\x20\x20width:\x20auto\x20!important;\x0a\x20\x20\x20\x20height:\x20auto\x20!important;\x0a\x20\x20\x20\x20background-color:\x20#1e1e1e\x20!important;\x0a\x20\x20\x20\x20border-radius:\x203px\x20!important;\x0a\x20\x20\x20\x20margin:\x200\x20!important;\x0a\x20\x20\x20\x20padding:\x206px\x20!important;\x0a\x20\x20\x20\x20font-size:\x2013px\x20!important;\x0a\x20\x20\x20\x20line-height:\x2014px\x20!important;\x0a\x20\x20\x20\x20text-decoration:\x20none\x20!important;\x0a\x20\x20\x20\x20display:\x20flex\x20!important;\x0a\x20\x20\x20\x20position:\x20fixed\x20!important;\x0a\x20\x20\x20\x20top:\x20auto\x20!important;\x0a\x20\x20\x20\x20bottom:\x2012px\x20!important;\x0a\x20\x20\x20\x20left:\x2012px\x20!important;\x0a\x20\x20\x20\x20right:\x20auto\x20!important;\x0a\x20\x20\x20\x20overflow:\x20visible\x20!important;\x0a\x20\x20\x20\x20transform:\x20none\x20!important;\x0a\x20\x20\x20\x20align-items:\x20center\x20!important;\x0a\x20\x20}\x0a\x20\x20.f-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2018px;\x0a\x20\x20\x20\x20font-weight:\x20700;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_attribute-title\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x2015px;\x0a\x20\x20\x20\x20font-weight:\x20600;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20margin-bottom:\x2014px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_attribute.f-text_attribute-wrapper\x20{\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall\x20{\x0a\x20\x20\x20\x20color:\x20#1eee32;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-div_title\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2010px;\x0a\x20\x20\x20\x20grid-row-gap:\x2010px;\x0a\x20\x20\x20\x20justify-content:\x20space-between;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.icon-embed-xxsmall-2\x20{\x0a\x20\x20\x20\x20color:\x20#ff3232;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20center;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20width:\x201rem;\x0a\x20\x20\x20\x20height:\x201rem;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-header\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.375rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.375rem;\x0a\x20\x20\x20\x20flex-direction:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.paragraph\x20{\x0a\x20\x20\x20\x20margin-bottom:\x200;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-tex,\x20.f-text_bold\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.hide\x20{\x0a\x20\x20\x20\x20display:\x20none;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.75rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.75rem;\x0a\x20\x20\x20\x20background-color:\x20rgba(255,\x20255,\x20255,\x20.04);\x0a\x20\x20\x20\x20border:\x201px\x20solid\x20rgba(255,\x20255,\x20255,\x20.08);\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20center;\x0a\x20\x20\x20\x20padding:\x2010px;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_type._1\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x20.5rem;\x0a\x20\x20\x20\x20grid-row-gap:\x20.5rem;\x0a\x20\x20\x20\x20color:\x20rgba(255,\x20255,\x20255,\x20.88);\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20justify-content:\x20flex-start;\x0a\x20\x20\x20\x20align-items:\x20flex-start;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-text_script\x20{\x0a\x20\x20\x20\x20color:\x20#fffc57;\x0a\x20\x20\x20\x20font-family:\x20Inconsolata,\x20monospace;\x0a\x20\x20\x20\x20font-size:\x2011px;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-section-wrapper\x20{\x0a\x20\x20\x20\x20grid-column-gap:\x2012px;\x0a\x20\x20\x20\x20grid-row-gap:\x2012px;\x0a\x20\x20\x20\x20flex-flow:\x20column;\x0a\x20\x20\x20\x20display:\x20flex;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-link\x20{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-support-title{\x0a\x20\x20\x20\x20color:\x20#fff;\x0a\x20\x20\x20\x20font-size:\x201.5rem;\x0a\x20\x20\x20\x20font-weight:\x20500;\x0a\x20\x20\x20\x20line-height:\x201.2;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-closebtn{\x0a\x20\x20\x20\x20position:\x20fixed;\x0a\x20\x20\x20\x20top:\x200.3rem;\x0a\x20\x20\x20\x20right:\x200.7rem;\x0a\x20\x20\x20\x20color:\x20white;\x0a\x20\x20\x20\x20text-decoration:\x20none;\x0a\x20\x20\x20\x20font-size:\x2022px;\x0a\x20\x20}\x0a\x20\x20.f-hide{\x0a\x20\x20\x20\x20display\x20:none\x20!important;\x0a\x20\x20}\x0a\x20\x20\x0a\x20\x20.f-logic-text{\x0a\x20\x20\x20\x20padding-left:1rem;\x0a\x20\x20}\x0a\x20\x20.f-logic-text\x20strong{\x0a\x20\x20\x20\x20color\x20:\x20white\x20!Important;\x0a\x20\x20}\x0a",
        "add-new-limit",
        "history",
        "last",
        "remove-upload",
        "parse",
        "[data-answer]",
        "data-show-if",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-reset-delay]",
        "replace",
        "[data-form=\x22remove-input-clone\x22]",
        "\x22]\x20[data-clone-input=\x22",
        "translateX(-40rem)",
        "remove",
        "</div>",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Current\x20Step\x20Text</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "radio-skip",
        "stopPropagation",
        "removeClass",
        ":input",
        "error",
        "height",
        "[data-custom-error-message]",
        "filledInput",
        ":input[type=\x22text\x22][required]",
        "[data-input-reveal=\x22",
        "[data-input-field=\x22",
        "index",
        "relationship-",
        "custom-error-message",
        "style",
        "AND",
        "textarea[autofocus]",
        "\x22]\x20select,\x20[data-clone-input=\x22",
        "[data-hidden-input=\x22",
        "[data-display-input-wrapper=\x22",
        "[data-count-card]",
        "[data-display-input]",
        "[data-display-index=\x22",
        "every",
        "siblings",
        "formlyLastStepAnswer",
        "[data-btn=\x22check\x22]",
        "<div\x20class=\x22f-logic-text\x22><strong>data-answer</strong>=\x22",
        ":input[type=\x22file\x22][required]",
        "skip-to",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20&amp;\x20data-go\x20pairs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-text=\x22error-message\x22]",
        "success",
        "not",
        "pushState",
        "first",
        "input[type=\x22checkbox\x22]:visible",
        "offset",
        "[data-weighted-selection-range]",
        "preventDefault",
        "\x20seconds",
        "[data-form=\x22progress-indicator\x22]",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Radio\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "textarea[required]:visible",
        "substring",
        "readystatechange",
        "clicked",
        "tagName",
        ".active-answer-card",
        "url",
        "body",
        "[data-input-reveal]",
        "textarea:focus",
        "width",
        "nonvalidated",
        ".w-radio-input",
        "quiz",
        "clickable-all",
        "Webflow",
        "split",
        "[data-reinit]",
        "14180166bjjuPB",
        "input:checkbox",
        "debug-mode",
        "change",
        "<div\x20data-range=\x22selection\x22\x20style=\x22display:none\x20!important\x22>",
        "card",
        "skipTo",
        "[data-form=\x22next-btn\x22][type=\x22submit\x22]",
        "147nabKCe",
        "param-analytics",
        "time-zone",
        "data",
        "keypress",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Checkboxes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "videsigns",
        ".active-answer-card\x20:input[type=\x27checkbox\x27]",
        "dispatchEvent",
        "<div\x20class=\x22icon-embed-xxsmall-2\x20w-embed\x22>\x0a\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--carbon\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2032\x2032\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M16\x202C8.2\x202\x202\x208.2\x202\x2016s6.2\x2014\x2014\x2014s14-6.2\x2014-14S23.8\x202\x2016\x202m5.4\x2021L16\x2017.6L10.6\x2023L9\x2021.4l5.4-5.4L9\x2010.6L10.6\x209l5.4\x205.4L21.4\x209l1.6\x201.6l-5.4\x205.4l5.4\x205.4z\x22></path>\x0a</svg>\x0a</div>",
        "Inside\x20<head>\x20tag",
        "select[required]",
        "href",
        "data-radio-skip",
        "includes",
        "step",
        "\x22][value=\x22",
        "[type=\x22submit\x22]",
        "<div\x20class=\x22f-text_script\x22>Before\x20&lt;/body&gt;\x20tag<br/></div>",
        ":input[type=\x22number\x22][required]",
        "type",
        "data-go-to",
        "[data-index=\x22",
        "multiple-results",
        "17937540WrRQTh",
        "Basic\x20(No\x20Formly\x20Logic)",
        "_blank",
        "f-mySidenav",
        "\x22]:not([data-prefill=\x22false\x22])",
        "function",
        "\x22])",
        "[aria-label=\x22Remove\x20file\x22]",
        "[data-memory]",
        "block-domain",
        "\x0a\x20\x20<button\x20class=\x22f-openbtn\x22\x20onclick=\x22openNav()\x22>\x0a\x20\x20\x20\x20<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x2220px\x22\x20height=\x2220px\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a\x20\x20\x20\x20\x20\x20<path\x20fill=\x22currentColor\x22\x20d=\x22M11\x2021h-1l1-7H7.5c-.88\x200-.33-.75-.31-.78C8.48\x2010.94\x2010.42\x207.54\x2013.01\x203h1l-1\x207h3.51c.4\x200\x20.62.19.4.66C12.97\x2017.55\x2011\x2021\x2011\x2021\x22></path>\x0a\x20\x20\x20\x20</svg>\x20Check\x20Form\x0a\x20\x20</button>\x0a\x20\x20<div\x20id=\x22f-mySidenav\x22\x20class=\x22f-sidenav\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<a\x20href=\x22javascript:void(0)\x22\x20class=\x22f-closebtn\x22\x20onclick=\x22closeNav()\x22>&times;</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-header\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-support-title\x22>Formly\x20Debugger</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p\x20class=\x22paragraph\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20you\x20have\x20spotted\x20a\x20bug\x20or\x20require\x20extra\x20support,\x20please\x20reach\x20out\x20to\x20us\x20via\x20Slack\x20or\x20email\x20us\x20at\x20<a\x20href=\x22mailto:developer@videsigns.uk\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x20.\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Form\x20Type</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "click-addclass",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>5.\x20Submit\x20Buttons:\x20data-form=submit-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "referrer",
        "removeItem",
        "value",
        "reset-delay",
        "[data-form=\x22submit-btn\x22]:visible",
        "clone-input",
        "pageLoadTime",
        "input[autofocus]",
        "[data-clone-wrapper]",
        "[data-form=\x22next-btn\x22]",
        "[data-form=\x22back-btn\x22]",
        "option[value=\x22",
        "select[required]:visible",
        "[data-form=\x22remove-clone\x22]",
        "\x22][data-input-reveal-value=\x22*\x22]",
        "ms-field",
        "[data-clone]",
        "[data-add-new-input]",
        ":input[type=\x22tel\x22][required]",
        ":input[type=\x22checkbox\x22]",
        "each",
        "toLowerCase",
        "[data-cms-select=input]",
        "querySelector",
        "submit-show",
        "show",
        "[data-skip-to]",
        "data-name",
        "novalidate",
        "No\x20Formly\x20script\x20added\x20to\x20the\x20page!",
        "5309316taAJug",
        "scroll-top",
        "input-reveal",
        "top",
        "[data-input-reveal]:not(:visible)",
        "formly-support",
        "head",
        "keydown",
        "[data-display=\x22",
        "[data-display-input=\x22",
        "stringify",
        "data-form",
        "max-checkbox",
        "weighted-selection-range",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>ReCAPTCHA</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "trigger",
        "checked",
        "[required]",
        "trim",
        "[data-remove-upload]",
        "go-to",
        "[data-form=\x22step\x22]",
        "234408OCozBn",
        "add-new-input-limit",
        "<div\x20class=\x22icon-embed-xxsmall\x20w-embed\x22>\x0a<svg\x20xmlns=\x22http://www.w3.org/2000/svg\x22\x20xmlns:xlink=\x22http://www.w3.org/1999/xlink\x22\x20aria-hidden=\x22true\x22\x20role=\x22img\x22\x20class=\x22iconify\x20iconify--ic\x22\x20width=\x22100%\x22\x20height=\x22100%\x22\x20preserveAspectRatio=\x22xMidYMid\x20meet\x22\x20viewBox=\x220\x200\x2024\x2024\x22>\x0a<path\x20fill=\x22currentColor\x22\x20d=\x22M12\x202C6.48\x202\x202\x206.48\x202\x2012s4.48\x2010\x2010\x2010s10-4.48\x2010-10S17.52\x202\x2012\x202m-2\x2015l-5-5l1.41-1.41L10\x2014.17l7.59-7.59L19\x208z\x22></path>\x0a</svg>\x0a</div>",
        "[data-radio-delay]",
        "round",
        "1WMiIgQ",
        "[data-answer][data-radio-skip]:visible",
        "input",
        "click",
        "[data-submit=\x22true\x22]",
        "scroll-top-offset",
        "disabled",
        "screen-resolution",
        "input[type=\x22submit\x22]",
        "remove-unfilled",
        "key",
        "user-agent",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>",
        "setItem",
        "Removed\x20unfilled\x20divs",
        "transform",
        "[data-answer=\x22",
        "input-reveal-value",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer\x20is\x20on\x20data-card\x20=\x20true</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Intro\x20Cards\x20Or\x20Steps\x20Without\x20Inputs</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "form[data-form=\x22multistep\x22]",
        "FormlyLogic\x20enabled",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20If\x20all\x20of\x20these\x20look\x20fine\x20and\x20you\x20&#x27;re\x20still\x20experiencing\x20an\x20issue.\x20Please\x20reach\x20out\x20to\x20us\x20via\x20<a\x20href=\x22https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg\x22\x20target=\x22_blank\x22\x20class=\x22f-link\x22>Slack</a>\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20or\x20<a\x20href=\x22#\x22\x20class=\x22f-link\x22>developer@videsigns.uk</a>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20</div>\x0a",
        "https://webflow.com/api/v1/form/",
        ":input[type=\x22text\x22]",
        "[data-input-target]",
        "BODY",
        "[data-add-new]",
        "field",
        "src",
        "timestamp",
        "select",
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Custom\x20Progress\x20Indicators</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "text",
        "find",
        "filter",
        "current",
        "appendChild",
        "enter",
        "[data-form-ms=\x22submit-btn\x22]",
        "https://videsigns-staging.co.uk/formly-counter",
        "[data-go-to]",
        "input[type=\x22radio\x22]:checked",
        "155THTyTw",
        "[data-show-if]",
        "submit",
        "[data-success-card]",
        "phone-autoformat",
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>3.\x20Next\x20Buttons:\x20data-form=next-btn</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Next\x20button\x20present?</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "input[type=\x22email\x22]:visible",
        "post",
        ":focus",
        "addClass",
        "form[data-form=\x22multistep\x22]\x20:input",
        "[data-enter=\x22true\x22]",
        "[data-max-checkbox]",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Basic\x20(No\x20FormlyLogic)<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-btn=\x22edit\x22]",
        "edit-step",
        "[data-clickable]",
        ":first",
        "init",
        "input[type=\x22radio\x22][name=\x22",
        "parent",
        "click-path",
        "startsWith",
        "name",
        "input:radio[required]",
        "ix2",
        "input:radio[name=\x22",
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Core\x20Attributes</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>1.\x20Form:\x20data-form=multistep</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
        "[data-quiz]",
        "now",
        ":input[type=\x22time\x22][required]",
    ];
    _0x5d82 = function() {
        return _0x2457ba;
    };
    return _0x5d82();
}

function updateURL(_0x5db676) {
    const _0x12ab6c = _0x1d142c;
    var _0x2d78a1 = window["location"][_0x12ab6c(0x26a)],
        _0x4bdebb = new URLSearchParams(window[_0x12ab6c(0x1d8)][_0x12ab6c(0x173)]);
    _0x4bdebb["set"](_0x12ab6c(0x26d), _0x5db676);
    var _0x53fd16 =
        _0x2d78a1[_0x12ab6c(0x254)]("?")[0x0] + "?" + _0x4bdebb["toString"]();
    window[_0x12ab6c(0x20a)][_0x12ab6c(0x23b)]({}, "", _0x53fd16);
}

function updateStep() {
    const _0x52d1ee = _0x1d142c;
    scrollTop(), (skip = ![]), $(_0x52d1ee(0x178))["removeClass"]("disabled");
    $(_0x52d1ee(0x157))[_0x52d1ee(0x261)](_0x52d1ee(0x190)) &&
        (steps[_0x52d1ee(0x13e)](_0x52d1ee(0x1f4))[_0x52d1ee(0x297)](function() {
                const _0x1d85a6 = _0x52d1ee;
                $($(_0x1d85a6(0x178))[$(this)["parents"](_0x1d85a6(0x2b6))["index"]()]),
                    $(this)[_0x1d85a6(0x1b8)]() === "" && emptyInput++;
            }),
            emptyInput > 0x0 ?
            $("input[type=\x22submit\x22]")["addClass"](_0x52d1ee(0x2c2)) :
            $(_0x52d1ee(0x124))[_0x52d1ee(0x21b)]("disabled"));
    $(_0x52d1ee(0x178))["removeClass"](_0x52d1ee(0x140)),
        $("[data-form=\x22custom-progress-indicator\x22]")[_0x52d1ee(0x150)](
            _0x52d1ee(0x2c2)
        ),
        $($("[data-form=\x22custom-progress-indicator\x22]")[x])["addClass"](
            _0x52d1ee(0x140)
        ),
        (selection = selections[_0x52d1ee(0x13f)](
            (_0x341de0) => _0x341de0[_0x52d1ee(0x26d)] === x - 0x1
        ));
    next &&
        (x = getSafe(() => selection[0x0][_0x52d1ee(0x25c)]) ?
            parseInt(getSafe(() => selection[0x0]["skipTo"])) :
            x);
    $(_0x52d1ee(0x20e))[_0x52d1ee(0x1b7)](), steps["hide"]();
    reinitIX === !![] && window[_0x52d1ee(0x253)]["destroy"]();
    $(progressbar)["removeClass"]("current");
    for (i = 0x0; i <= x; i++) {
        countCard
            ?
            $(progressbar[i])[_0x52d1ee(0x150)](_0x52d1ee(0x140)) :
            !$(steps[i])[_0x52d1ee(0x261)]("card") &&
            $(progressbar[i])["addClass"]("current");
    }
    reinitIX === !![] ?
        (window[_0x52d1ee(0x253)] &&
            window[_0x52d1ee(0x253)]
            [_0x52d1ee(0x17a)](_0x52d1ee(0x160))[_0x52d1ee(0x159)](),
            document[_0x52d1ee(0x266)](new Event(_0x52d1ee(0x246))),
            $(steps[x])[_0x52d1ee(0x29c)]()) :
        $(steps[x])[_0x52d1ee(0x17e)]("slow");
    $(_0x52d1ee(0x249))[_0x52d1ee(0x21b)](_0x52d1ee(0x1ee));
    x === 0x0 &&
        !$(steps[x])[_0x52d1ee(0x261)](_0x52d1ee(0x25b)) &&
        ($(steps[x])[_0x52d1ee(0x13e)](_0x52d1ee(0x20e))[_0x52d1ee(0x29c)](),
            $(steps[x])[_0x52d1ee(0x13e)]("[data-answer]")[_0x52d1ee(0x150)](_0x52d1ee(0x1ee)));
    selection[_0x52d1ee(0x16e)] > 0x0 ?
        ($(steps[x])["find"](
                "[data-answer=\x22" + selection[0x0][_0x52d1ee(0x16f)] + "\x22]"
            )[_0x52d1ee(0x29c)](),
            $(steps[x])[_0x52d1ee(0x13e)](
                _0x52d1ee(0x12c) + selection[0x0][_0x52d1ee(0x16f)] + "\x22]"
            )[_0x52d1ee(0x150)](_0x52d1ee(0x1ee))) :
        ($(steps[x])["find"](_0x52d1ee(0x12c) + answer + "\x22]")["show"](),
            $(steps[x])[_0x52d1ee(0x13e)](_0x52d1ee(0x12c) + answer + "\x22]")[_0x52d1ee(0x150)](_0x52d1ee(0x1ee)));
    if (x === 0x0)
        $("[data-form=\x22back-btn\x22]")["hide"](),
        $(_0x52d1ee(0x28c))[_0x52d1ee(0x29c)](),
        $(_0x52d1ee(0x1ac))[_0x52d1ee(0x1b7)]();
    else {
        if (
            x === steps[_0x52d1ee(0x16e)] - 0x1 ||
            $(steps[x])[_0x52d1ee(0x13e)]("[data-form=\x22submit\x22]:visible")[
                _0x52d1ee(0x16e)
            ] > 0x0
        ) {
            $(_0x52d1ee(0x28c))[_0x52d1ee(0x1b7)]();
            if (
                $(steps[x])[_0x52d1ee(0x13e)](_0x52d1ee(0x166))[_0x52d1ee(0x261)](_0x52d1ee(0x29b))
            )
                $(steps[x])[_0x52d1ee(0x13e)](_0x52d1ee(0x166))["show"]();
            else
                $("[data-form=\x22next-btn\x22]")[_0x52d1ee(0x261)](_0x52d1ee(0x29b)) &&
                $("[data-form=\x22next-btn\x22]")["show"]();
            $(_0x52d1ee(0x1ac))[_0x52d1ee(0x29c)](),
                $("[data-form-ms=\x22submit-btn\x22]")[_0x52d1ee(0x29c)](),
                $("[data-form=\x22back-btn\x22]")[_0x52d1ee(0x29c)]();
        } else
            $(_0x52d1ee(0x28c))["show"](),
            $(_0x52d1ee(0x28d))[_0x52d1ee(0x29c)](),
            $(_0x52d1ee(0x1ac))["hide"](),
            $(_0x52d1ee(0x143))["hide"]();
    }
    $($(steps[x])[_0x52d1ee(0x13e)](_0x52d1ee(0x28a))[0x0])[_0x52d1ee(0x1bb)](),
        $($(steps[x])["find"](_0x52d1ee(0x229))[0x0])["focus"](),
        validation();
    for (idx = 0x0; idx <= x; idx++) {
        $($(_0x52d1ee(0x178))[idx])[_0x52d1ee(0x21b)](_0x52d1ee(0x2c2));
    }
    paramUrl && updateURL(curStep),
        percentageIndicator &&
        percentageIndicator[_0x52d1ee(0x13d)](progressPercentage()),
        percentageBar && percentageBar["css"]("width", progressPercentage() + "%");
}

function validateEmail(_0xf24f4, _0x578f5c, _0x1a1064) {
    const _0x47b4cc = _0x1d142c;
    let _0x4fa536 = _0xf24f4[_0x47b4cc(0x26c)]("@") ?
        _0xf24f4[_0x47b4cc(0x254)]("@")[0x1][_0x47b4cc(0x254)](".")[0x0] : [];
    dom = [];
    _0x578f5c !== undefined &&
        _0x578f5c[_0x47b4cc(0x254)](",")[_0x47b4cc(0x1e5)](function(_0x45c538) {
            const _0x301a39 = _0x47b4cc;
            _0x45c538[_0x301a39(0x26c)](_0x4fa536) &&
                dom[_0x301a39(0x1dc)](_0x4fa536);
        });
    dom[_0x47b4cc(0x16e)] > 0x0 ? (domainAllowed = ![]) : (domainAllowed = !![]);
    var _0x54ea11 = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    !_0x54ea11[_0x47b4cc(0x180)](_0xf24f4) || !domainAllowed ?
        ((emailFilled = ![]), unfilledArr[_0x47b4cc(0x1dc)]({ input: _0x1a1064 })) :
        (emailFilled = !![]);
}

function phoneValidation(_0x68c799, _0x89675d, _0x4bb50a) {
    if (phoneFormat) return _0x89675d >= _0x4bb50a ? !![] : ![];
    else {
        if (_0x89675d >= _0x4bb50a) return !![];
    }
}

function validation() {
    const _0x418092 = _0x1d142c;
    $(steps[x])[_0x418092(0x261)](_0x418092(0x25b)) && enableBtn();
    (unfilledArr = []),
    (inputFilled = !![]),
    (radioFilled = !![]),
    (checkboxFilled = !![]),
    (numFilled = !![]),
    (fileFilled = !![]),
    (dateFilled = !![]),
    (selectFilled = !![]),
    (textareaFilled = !![]),
    (telFilled = !![]),
    (urlFilled = !![]),
    (timeFilled = !![]),
    (emailFilled = !![]),
    (emptyInput = 0x0),
    (empReqInput = []),
    (empReqTime = []),
    (empReqTel = []),
    (empReqUrl = []),
    (empReqDate = []),
    (empReqSelect = []),
    (empReqTextarea = []),
    (empReqNum = []),
    (empReqFile = []),
    (empReqRadio = []),
    (textareaLength = $(steps[x])[_0x418092(0x13e)](_0x418092(0x244))[
        _0x418092(0x16e)
    ]),
    (textInputLength = $(steps[x])[_0x418092(0x13e)](
        "input[type=\x22text\x22][required]:visible"
    )[_0x418092(0x16e)]),
    (selectInputLength = $(steps[x])["find"](_0x418092(0x28f))[
        _0x418092(0x16e)
    ]),
    (emailInputLength = $(steps[x])[_0x418092(0x13e)](_0x418092(0x14d))[
        _0x418092(0x16e)
    ]),
    (checkboxInputLength = $(steps[x])[_0x418092(0x13e)](_0x418092(0x23d))[
        _0x418092(0x16e)
    ]);
    textInputLength > 0x0 || selectInputLength > 0x0 || textareaLength > 0x0 ?
        disableBtn() :
        enableBtn();
    (checkCount = $(steps[x])[_0x418092(0x261)](_0x418092(0x19a)) ?
        $(steps[x])["data"](_0x418092(0x19a)) :
        $(steps[x])[_0x418092(0x13e)](_0x418092(0x1ef))["length"] > 0x0 ?
        $(steps[x])[_0x418092(0x13e)](_0x418092(0x1ef))[_0x418092(0x261)](_0x418092(0x19a)) :
        0x0),
    (maxCheckCount = $(steps[x])["data"](_0x418092(0x2ad)) ?
        $(steps[x])["data"](_0x418092(0x2ad)) :
        $(steps[x])["find"](_0x418092(0x153))[_0x418092(0x16e)] > 0x0 ?
        $(steps[x])[_0x418092(0x13e)]("[data-max-checkbox]")[_0x418092(0x261)](_0x418092(0x2ad)) :
        0x0);
    if (!logicExtra) {
        let _0x35f426 = $(steps[x])[_0x418092(0x13e)](_0x418092(0x296)),
            _0x13d474 = _0x35f426[_0x418092(0x13f)](_0x418092(0x2b2)),
            _0x166f70 = _0x35f426[_0x418092(0x13f)](_0x418092(0x1f6)),
            _0x3667d2 = _0x13d474[_0x418092(0x13f)](":checked");
        if (_0x35f426[_0x418092(0x16e)] > 0x0) {
            if (checkCount === "*" || checkCount > _0x35f426[_0x418092(0x16e)])
                _0x35f426["each"](function() {
                    const _0x22f85d = _0x418092;
                    $(this)["is"](_0x22f85d(0x1f6)) ?
                        ((checkboxFilled = !![]),
                            resetInputErrorMessage($(this)["attr"](_0x22f85d(0x15e)))) :
                        ((checkboxFilled = ![]),
                            unfilledArr["push"]({
                                input: $(this)[_0x22f85d(0x198)](_0x22f85d(0x15e)),
                            }));
                });
            else {
                if (_0x166f70[_0x418092(0x16e)] >= checkCount) {
                    if (_0x13d474[_0x418092(0x16e)] > 0x0)
                        _0x13d474[_0x418092(0x16e)] === _0x3667d2["length"] ?
                        ((checkboxFilled = !![]),
                            resetInputErrorMessage(
                                _0x13d474[_0x418092(0x23c)]()["attr"](_0x418092(0x15e))
                            )) :
                        ((checkboxFilled = ![]),
                            _0x13d474[_0x418092(0x23a)](_0x418092(0x1f6))[_0x418092(0x297)](
                                function() {
                                    const _0x584037 = _0x418092;
                                    console[_0x584037(0x194)](
                                            $(this)[_0x584037(0x198)](_0x584037(0x15e))
                                        ),
                                        unfilledArr[_0x584037(0x1dc)]({
                                            input: $(this)[_0x584037(0x198)](_0x584037(0x15e)),
                                        });
                                }
                            ));
                    else {
                        if (maxCheckCount > _0x166f70[_0x418092(0x16e)])
                            $(steps[x])["find"](_0x418092(0x1f5))[_0x418092(0x18f)](_0x418092(0x2c2), ![]),
                            $(steps[x])["find"]("input[type=\x22checkbox\x22]")[_0x418092(0x15b)](_0x418092(0x19c))[_0x418092(0x21b)](_0x418092(0x2c2));
                        else
                            maxCheckCount > 0x0 &&
                            ($(steps[x])[_0x418092(0x13e)](_0x418092(0x1fa))["parent"](_0x418092(0x19c))[_0x418092(0x150)](_0x418092(0x2c2)),
                                $(steps[x])["find"](_0x418092(0x1fa))[_0x418092(0x18f)](_0x418092(0x2c2), !![]),
                                _0x13d474[_0x418092(0x23a)](":checked")[_0x418092(0x297)](
                                    function() {
                                        const _0x1eb4b4 = _0x418092;
                                        unfilledArr[_0x1eb4b4(0x1dc)]({
                                            input: $(this)[_0x1eb4b4(0x198)](_0x1eb4b4(0x15e)),
                                        });
                                    }
                                ));
                    }
                } else
                    checkCount > 0x0 &&
                    ((checkboxFilled = ![]),
                        _0x13d474[_0x418092(0x23a)](":checked")["each"](function() {
                            const _0x2e3851 = _0x418092;
                            unfilledArr[_0x2e3851(0x1dc)]({
                                input: $(this)[_0x2e3851(0x198)](_0x2e3851(0x15e)),
                            });
                        }),
                        unfilledArr[_0x418092(0x1dc)]({
                            input: _0x35f426[_0x418092(0x23c)]()[_0x418092(0x198)](
                                _0x418092(0x15e)
                            ),
                        }));
            }
        }
        $(steps[x])[_0x418092(0x13e)](_0x418092(0x15f))[_0x418092(0x297)](function(_0xacaab6) {
                const _0x4d2c7a = _0x418092;
                var _0x361a48 = $(this)[_0x4d2c7a(0x198)]("name");
                $(_0x4d2c7a(0x161) + _0x361a48 + _0x4d2c7a(0x197))["length"] == 0x0 ?
                    (!empReqRadio[_0x4d2c7a(0x13e)](
                            (_0x31e5a6) => _0x31e5a6[_0x4d2c7a(0x2be)] === _0xacaab6
                        ) && empReqRadio["push"]({ input: _0xacaab6 }),
                        unfilledArr[_0x4d2c7a(0x1dc)]({
                            input: $(this)["attr"](_0x4d2c7a(0x15e)),
                        })) :
                    (empReqRadio = empReqRadio[_0x4d2c7a(0x13f)](
                        (_0x1d4e5d) => _0x1d4e5d["input"] !== _0xacaab6
                    )),
                    empReqRadio["length"] === 0x0 ?
                    (radioFilled = !![]) :
                    (radioFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x221))["each"](function(_0x156659) {
                const _0x3f6bf3 = _0x418092;
                let _0x40c23c = $(this)[_0x3f6bf3(0x1b8)]()[_0x3f6bf3(0x16e)],
                    _0x5e1d9b = $(this)[_0x3f6bf3(0x261)](_0x3f6bf3(0x18e)) ?
                    $(this)["data"]("min-character") :
                    0x0;
                $(this)["val"]() !== "" && _0x40c23c >= _0x5e1d9b ?
                    (empReqInput = empReqInput[_0x3f6bf3(0x13f)](
                        (_0x93df6e) => _0x93df6e[_0x3f6bf3(0x2be)] !== _0x156659
                    )) :
                    (!empReqInput["find"](
                            (_0x49711f) => _0x49711f[_0x3f6bf3(0x2be)] === _0x156659
                        ) && empReqInput[_0x3f6bf3(0x1dc)]({ input: _0x156659 }),
                        unfilledArr["push"]({ input: $(this)["attr"]("name") })),
                    empReqInput[_0x3f6bf3(0x16e)] === 0x0 ?
                    (inputFilled = !![]) :
                    (inputFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x169))[_0x418092(0x297)](function(_0x12200e) {
                const _0x3b93e7 = _0x418092;
                let _0x1d523a = $(this)[_0x3b93e7(0x1b8)]()[_0x3b93e7(0x16e)],
                    _0x4f797b = $(this)[_0x3b93e7(0x261)](_0x3b93e7(0x18e)) ?
                    $(this)["data"](_0x3b93e7(0x18e)) :
                    0x0;
                $(this)[_0x3b93e7(0x1b8)]() !== "" && _0x1d523a >= _0x4f797b ?
                    (empReqPassword = empReqPassword["filter"](
                        (_0x2ddbaf) => _0x2ddbaf[_0x3b93e7(0x2be)] !== _0x12200e
                    )) :
                    (!empReqPassword[_0x3b93e7(0x13e)](
                            (_0x24d417) => _0x24d417["input"] === _0x12200e
                        ) && empReqPassword[_0x3b93e7(0x1dc)]({ input: _0x12200e }),
                        unfilledArr[_0x3b93e7(0x1dc)]({
                            input: $(this)["attr"](_0x3b93e7(0x15e)),
                        })),
                    empReqPassword[_0x3b93e7(0x16e)] === 0x0 ?
                    (passwordFilled = !![]) :
                    (passwordFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](":input[type=\x22url\x22][required]")[_0x418092(0x297)](function(_0x22c755) {
                const _0x4a4773 = _0x418092;
                let _0x1b959a = $(this)["val"]()[_0x4a4773(0x16e)],
                    _0x23af97 = $(this)[_0x4a4773(0x261)](_0x4a4773(0x18e)) ?
                    $(this)[_0x4a4773(0x261)](_0x4a4773(0x18e)) :
                    0x0;
                $(this)["val"]() !== "" && _0x1b959a >= _0x23af97 ?
                    (empReqUrl = empReqUrl[_0x4a4773(0x13f)](
                        (_0x2f3800) => _0x2f3800[_0x4a4773(0x2be)] !== _0x22c755
                    )) :
                    (!empReqTime[_0x4a4773(0x13e)](
                            (_0x5558ac) => _0x5558ac[_0x4a4773(0x2be)] === _0x22c755
                        ) && empReqUrl["push"]({ input: _0x22c755 }),
                        unfilledArr[_0x4a4773(0x1dc)]({
                            input: $(this)["attr"](_0x4a4773(0x15e)),
                        })),
                    empReqUrl[_0x4a4773(0x16e)] === 0x0 &&
                    validateURL($(this)[_0x4a4773(0x1b8)]()) ?
                    (urlFilled = !![]) :
                    (urlFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x165))[_0x418092(0x297)](function(_0x311129) {
                const _0x39cf2f = _0x418092;
                let _0x564798 = $(this)[_0x39cf2f(0x1b8)]()["length"],
                    _0x58199e = $(this)["data"](_0x39cf2f(0x18e)) ?
                    $(this)[_0x39cf2f(0x261)](_0x39cf2f(0x18e)) :
                    0x0;
                $(this)[_0x39cf2f(0x1b8)]() !== "" && _0x564798 >= _0x58199e ?
                    (empReqTime = empReqTime[_0x39cf2f(0x13f)](
                        (_0x29d8fe) => _0x29d8fe[_0x39cf2f(0x2be)] !== _0x311129
                    )) :
                    (!empReqTime[_0x39cf2f(0x13e)](
                            (_0xfc9a9e) => _0xfc9a9e[_0x39cf2f(0x2be)] === _0x311129
                        ) && empReqTime["push"]({ input: _0x311129 }),
                        unfilledArr[_0x39cf2f(0x1dc)]({
                            input: $(this)[_0x39cf2f(0x198)](_0x39cf2f(0x15e)),
                        })),
                    empReqTime["length"] === 0x0 ?
                    (timeFilled = !![]) :
                    (timeFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x1e6))[_0x418092(0x297)](function(_0xd969ce) {
                const _0x22cd8a = _0x418092;
                $(this)["val"]() !== "" ?
                    (empReqDate = empReqDate["filter"](
                        (_0x4c706b) => _0x4c706b[_0x22cd8a(0x2be)] !== _0xd969ce
                    )) :
                    (!empReqDate[_0x22cd8a(0x13e)](
                            (_0x220d79) => _0x220d79[_0x22cd8a(0x2be)] === _0xd969ce
                        ) && empReqDate[_0x22cd8a(0x1dc)]({ input: _0xd969ce }),
                        unfilledArr[_0x22cd8a(0x1dc)]({
                            input: $(this)[_0x22cd8a(0x198)](_0x22cd8a(0x15e)),
                        })),
                    empReqDate[_0x22cd8a(0x16e)] === 0x0 ?
                    (dateFilled = !![]) :
                    (dateFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x295))[_0x418092(0x297)](function(_0x489123) {
                const _0x369537 = _0x418092;
                if ($(this)[_0x369537(0x1b8)]() !== "") {
                    let _0x4e585 = $(this)[_0x369537(0x1b8)]()[_0x369537(0x16e)],
                        _0x249bc5 = $(this)[_0x369537(0x261)](_0x369537(0x18e)) ?
                        $(this)[_0x369537(0x261)]("min-character") :
                        0x0;
                    if ($(this)[_0x369537(0x261)](_0x369537(0x14b))) {
                        var _0xa2605d = phoneAutoFormat(
                            $(this)[_0x369537(0x261)](_0x369537(0x14b))
                        );
                        $(this)[_0x369537(0x1b8)](_0xa2605d($(this)[_0x369537(0x1b8)]()));
                    }
                    phoneValidation($(this)[_0x369537(0x1b8)](), _0x4e585, _0x249bc5) ?
                        (empReqTel = empReqTel["filter"](
                            (_0x5468b0) => _0x5468b0[_0x369537(0x2be)] !== _0x489123
                        )) :
                        empReqTel["push"]({ input: _0x489123 });
                } else !empReqTel[_0x369537(0x13e)]((_0x386824) => _0x386824[_0x369537(0x2be)] === _0x489123) && empReqTel[_0x369537(0x1dc)]({ input: _0x489123 }), unfilledArr[_0x369537(0x1dc)]({ input: $(this)[_0x369537(0x198)]("name") });
                empReqTel[_0x369537(0x16e)] === 0x0 ?
                    (telFilled = !![]) :
                    (telFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](":input[type=\x22file\x22][required]")["each"](function(_0x29ddcf) {
                const _0x467206 = _0x418092;
                $(this)["val"]() !== "" ?
                    (empReqFile = empReqFile[_0x467206(0x13f)](
                        (_0x5cf69e) => _0x5cf69e["input"] !== _0x29ddcf
                    )) :
                    (!empReqFile[_0x467206(0x13e)](
                            (_0x25bf43) => _0x25bf43[_0x467206(0x2be)] === _0x29ddcf
                        ) && empReqFile[_0x467206(0x1dc)]({ input: _0x29ddcf }),
                        unfilledArr["push"]({
                            input: $(this)[_0x467206(0x198)](_0x467206(0x15e)),
                        })),
                    empReqFile[_0x467206(0x16e)] === 0x0 ?
                    (fileFilled = !![]) :
                    (fileFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x271))[_0x418092(0x297)](function(_0x143a48) {
                const _0x3fc820 = _0x418092;
                let _0x5b2fae = $(this)[_0x3fc820(0x1b8)]()["length"],
                    _0x5050b0 = $(this)[_0x3fc820(0x261)]("min-character") ?
                    $(this)[_0x3fc820(0x261)](_0x3fc820(0x18e)) :
                    0x0;
                $(this)["val"]() !== "" && _0x5b2fae >= _0x5050b0 ?
                    (empReqNum = empReqNum[_0x3fc820(0x13f)](
                        (_0x3dd53a) => _0x3dd53a["input"] !== _0x143a48
                    )) :
                    (!empReqNum[_0x3fc820(0x13e)](
                            (_0x14b621) => _0x14b621["input"] === _0x143a48
                        ) && empReqNum[_0x3fc820(0x1dc)]({ input: _0x143a48 }),
                        unfilledArr[_0x3fc820(0x1dc)]({
                            input: $(this)[_0x3fc820(0x198)](_0x3fc820(0x15e)),
                        })),
                    empReqNum["length"] === 0x0 ?
                    (numFilled = !![]) :
                    (numFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)]("select[required]")["each"](function(_0x5c2fe1) {
                const _0x3d009a = _0x418092;
                let _0x2f31db = $(this)["val"]();
                _0x2f31db === "" && (_0x2f31db = null),
                    _0x2f31db != null ?
                    (empReqSelect = empReqSelect[_0x3d009a(0x13f)](
                        (_0x504b58) => _0x504b58[_0x3d009a(0x2be)] !== _0x5c2fe1
                    )) :
                    (!empReqSelect["find"](
                            (_0x514025) => _0x514025[_0x3d009a(0x2be)] === _0x5c2fe1
                        ) && empReqSelect[_0x3d009a(0x1dc)]({ input: _0x5c2fe1 }),
                        unfilledArr[_0x3d009a(0x1dc)]({
                            input: $(this)["attr"](_0x3d009a(0x15e)),
                        })),
                    empReqSelect[_0x3d009a(0x16e)] === 0x0 ?
                    (selectFilled = !![]) :
                    (selectFilled = ![]);
            }),
            $(steps[x])["find"](_0x418092(0x1e3))["each"](function(_0x2f4cc5) {
                const _0x591e69 = _0x418092;
                let _0x594ce9 = $(this)[_0x591e69(0x1b8)]()["length"],
                    _0x3c5bf9 = $(this)[_0x591e69(0x261)](_0x591e69(0x18e)) ?
                    $(this)[_0x591e69(0x261)](_0x591e69(0x18e)) :
                    0x0;
                $(this)[_0x591e69(0x1b8)]() !== "" && _0x594ce9 >= _0x3c5bf9 ?
                    (empReqTextarea = empReqTextarea[_0x591e69(0x13f)](
                        (_0x17bc04) => _0x17bc04["input"] !== _0x2f4cc5
                    )) :
                    (!empReqTextarea[_0x591e69(0x13e)](
                            (_0x4b78b6) => _0x4b78b6[_0x591e69(0x2be)] === _0x2f4cc5
                        ) && empReqTextarea[_0x591e69(0x1dc)]({ input: _0x2f4cc5 }),
                        unfilledArr[_0x591e69(0x1dc)]({
                            input: $(this)[_0x591e69(0x198)](_0x591e69(0x15e)),
                        })),
                    empReqTextarea[_0x591e69(0x16e)] === 0x0 ?
                    (textareaFilled = !![]) :
                    (textareaFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x1c8))[_0x418092(0x297)](function() {
                const _0x5325d4 = _0x418092;
                $(this)["val"]() !== "" ?
                    validateEmail(
                        $(this)["val"](),
                        $(this)["data"](_0x5325d4(0x27f)),
                        $(this)[_0x5325d4(0x198)](_0x5325d4(0x15e))
                    ) :
                    ((emailFilled = ![]),
                        unfilledArr["push"]({
                            input: $(this)[_0x5325d4(0x198)](_0x5325d4(0x15e)),
                        }));
            });
    } else {
        if ($(steps[x])[_0x418092(0x261)](_0x418092(0x25b)))
            (answer = $(steps[x])[_0x418092(0x13e)](_0x418092(0x145))["data"]("go-to")),
            (selections = selections[_0x418092(0x13f)](
                (_0x3154e4) => _0x3154e4[_0x418092(0x26d)] !== x
            )),
            selections[_0x418092(0x1dc)]({ step: x, selected: answer }),
            (next = !![]),
            (back = ![]);
        else
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")["data"](_0x418092(0x25b)) &&
            ((answer = $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x261)]("go-to")),
                (selections = selections[_0x418092(0x13f)](
                    (_0x58db2f) => _0x58db2f["step"] !== x
                )),
                selections[_0x418092(0x1dc)]({ step: x, selected: answer }),
                (next = !![]),
                (back = ![]));
        let _0x4f23cd = $(steps[x])[_0x418092(0x13e)](_0x418092(0x265)),
            _0x55572d = _0x4f23cd[_0x418092(0x13f)](_0x418092(0x2b2)),
            _0x5d60c4 = _0x4f23cd[_0x418092(0x13f)](_0x418092(0x1f6)),
            _0xfff88f = _0x55572d[_0x418092(0x13f)](":checked"),
            _0x1904d4 = _0x55572d[_0x418092(0x16e)] === 0x0,
            _0xc383e0 = _0x5d60c4[_0x418092(0x16e)],
            _0x2bf85f = _0xfff88f["length"];
        console[_0x418092(0x194)](_0xc383e0);
        if (_0x4f23cd["length"] > 0x0) {
            if (checkCount === "*" || checkCount > _0x4f23cd[_0x418092(0x16e)])
                _0x4f23cd["each"](function() {
                    const _0x18f1ca = _0x418092;
                    let _0x396738 = $(this),
                        _0x3ac654 = _0x396738["is"](_0x18f1ca(0x1f6));
                    if (_0x3ac654) {
                        (checkboxFilled = !![]),
                        resetInputErrorMessage(_0x396738["attr"](_0x18f1ca(0x15e)));
                        if (_0x1904d4) {
                            let _0x305a84 = _0x396738["closest"]("[data-skip-to]")[
                                    _0x18f1ca(0x261)
                                ](_0x18f1ca(0x236)),
                                _0xa9b3ae = _0x396738[_0x18f1ca(0x167)](_0x18f1ca(0x145))[
                                    _0x18f1ca(0x198)
                                ](_0x18f1ca(0x273));
                            if (_0xa9b3ae) {
                                (selections = selections[_0x18f1ca(0x13f)](
                                    (_0x5108b6) => _0x5108b6[_0x18f1ca(0x26d)] !== x
                                )),
                                selections[_0x18f1ca(0x1dc)]({
                                    step: x,
                                    selected: _0xa9b3ae,
                                });
                                if (_0x305a84) {
                                    (selections = selections[_0x18f1ca(0x13f)](
                                        (_0x1f8ffa) =>
                                        _0x1f8ffa[_0x18f1ca(0x26d)] !== _0x305a84 - 0x2
                                    )),
                                    selections[_0x18f1ca(0x1dc)]({
                                        step: _0x305a84 - 0x2,
                                        selected: _0xa9b3ae,
                                    });
                                    let _0x49b4d5 = selections[_0x18f1ca(0x1de)](
                                        (_0x32dc41) => _0x32dc41["step"] === x
                                    );
                                    (selections[_0x49b4d5][_0x18f1ca(0x25c)] =
                                        parseInt(_0x305a84) - 0x1),
                                    (selections[_0x49b4d5][_0x18f1ca(0x1c9)] = x);
                                }
                            }
                        }
                    } else(checkboxFilled = ![]), unfilledArr["push"]({ input: _0x396738["attr"](_0x18f1ca(0x15e)) });
                });
            else {
                if (_0xc383e0 >= checkCount) {
                    console[_0x418092(0x194)](_0x418092(0x180));
                    if (_0x55572d[_0x418092(0x16e)] > 0x0) {
                        if (_0x55572d["length"] === _0x2bf85f) {
                            let _0x205d25 = _0x5d60c4[_0x418092(0x23c)](),
                                _0x338aa5 = _0x205d25[_0x418092(0x167)](_0x418092(0x29d))[
                                    "data"
                                ](_0x418092(0x236)),
                                _0x11b16e = _0x205d25[_0x418092(0x167)]("[data-go-to]")[
                                    _0x418092(0x198)
                                ](_0x418092(0x273));
                            if (_0x11b16e) {
                                (selections = selections["filter"](
                                    (_0x1dae15) => _0x1dae15["step"] !== x
                                )),
                                selections["push"]({ step: x, selected: _0x11b16e });
                                if (_0x338aa5) {
                                    (selections = selections[_0x418092(0x13f)](
                                        (_0x1c592c) =>
                                        _0x1c592c[_0x418092(0x26d)] !== _0x338aa5 - 0x2
                                    )),
                                    selections[_0x418092(0x1dc)]({
                                        step: _0x338aa5 - 0x2,
                                        selected: _0x11b16e,
                                    });
                                    let _0x5a0b58 = selections[_0x418092(0x1de)](
                                        (_0x45335c) => _0x45335c[_0x418092(0x26d)] === x
                                    );
                                    (selections[_0x5a0b58][_0x418092(0x25c)] =
                                        parseInt(_0x338aa5) - 0x1),
                                    (selections[_0x5a0b58][_0x418092(0x1c9)] = x);
                                }
                            }
                            (checkboxFilled = !![]),
                            resetInputErrorMessage(
                                _0x55572d[_0x418092(0x23c)]()[_0x418092(0x198)](
                                    _0x418092(0x15e)
                                )
                            );
                        } else
                            (checkboxFilled = ![]),
                            _0x55572d[_0x418092(0x23a)](_0x418092(0x1f6))[_0x418092(0x297)](
                                function() {
                                    const _0x4fb929 = _0x418092;
                                    unfilledArr["push"]({
                                        input: $(this)[_0x4fb929(0x198)](_0x4fb929(0x15e)),
                                    });
                                }
                            );
                    } else {
                        if (maxCheckCount > _0xc383e0 || maxCheckCount < 0x1) {
                            console["log"](_0x418092(0x1c2));
                            let _0xe24cbd = _0x5d60c4[_0x418092(0x23c)](),
                                _0x595990 = _0xe24cbd["closest"](_0x418092(0x29d))[
                                    _0x418092(0x261)
                                ](_0x418092(0x236)),
                                _0x46fa6d = _0xe24cbd[_0x418092(0x167)](_0x418092(0x145))[
                                    _0x418092(0x198)
                                ](_0x418092(0x273));
                            if (_0x46fa6d) {
                                (selections = selections[_0x418092(0x13f)](
                                    (_0x2e2a6a) => _0x2e2a6a[_0x418092(0x26d)] !== x
                                )),
                                selections[_0x418092(0x1dc)]({
                                    step: x,
                                    selected: _0x46fa6d,
                                });
                                if (_0x595990) {
                                    (selections = selections[_0x418092(0x13f)](
                                        (_0x483250) =>
                                        _0x483250[_0x418092(0x26d)] !== _0x595990 - 0x2
                                    )),
                                    selections[_0x418092(0x1dc)]({
                                        step: _0x595990 - 0x2,
                                        selected: _0x46fa6d,
                                    });
                                    let _0x46be61 = selections[_0x418092(0x1de)](
                                        (_0xbbd2e7) => _0xbbd2e7["step"] === x
                                    );
                                    (selections[_0x46be61]["skipTo"] = parseInt(_0x595990) - 0x1),
                                    (selections[_0x46be61][_0x418092(0x1c9)] = x);
                                }
                            }
                            (checkboxFilled = !![]),
                            $(steps[x])["find"]("input[type=\x22checkbox\x22]:not(:checked)")[_0x418092(0x15b)](_0x418092(0x19c))[_0x418092(0x21b)](_0x418092(0x2c2)),
                                $(steps[x])[_0x418092(0x13e)](_0x418092(0x1fa))[_0x418092(0x18f)](_0x418092(0x2c2), ![]);
                        } else
                            maxCheckCount > 0x0 &&
                            ($(steps[x])[_0x418092(0x13e)](_0x418092(0x1fa))[_0x418092(0x15b)](_0x418092(0x19c))[_0x418092(0x150)](_0x418092(0x2c2)),
                                $(steps[x])["find"]("input[type=\x22checkbox\x22]:not(:checked)")[_0x418092(0x18f)]("disabled", !![]));
                    }
                } else
                    checkCount >= 0x0 &&
                    ((checkboxFilled = ![]),
                        _0x55572d[_0x418092(0x23a)](_0x418092(0x1f6))["each"](function() {
                            const _0x604490 = _0x418092;
                            unfilledArr[_0x604490(0x1dc)]({
                                input: $(this)[_0x604490(0x198)](_0x604490(0x15e)),
                            });
                        }),
                        unfilledArr[_0x418092(0x1dc)]({
                            input: _0x4f23cd[_0x418092(0x23c)]()[_0x418092(0x198)](
                                _0x418092(0x15e)
                            ),
                        }));
            }
        }
        $(steps[x])["find"](_0x418092(0x249))["find"](_0x418092(0x15f))["each"](function(_0x51cc4b) {
                const _0x6fa9ce = _0x418092;
                var _0x1d7c19 = $(this)[_0x6fa9ce(0x198)](_0x6fa9ce(0x15e));
                $(_0x6fa9ce(0x161) + _0x1d7c19 + _0x6fa9ce(0x197))["length"] == 0x0 ?
                    (!empReqRadio["find"](
                            (_0x222e59) => _0x222e59["input"] === _0x51cc4b
                        ) && empReqRadio[_0x6fa9ce(0x1dc)]({ input: _0x51cc4b }),
                        unfilledArr[_0x6fa9ce(0x1dc)]({
                            input: $(this)[_0x6fa9ce(0x198)](_0x6fa9ce(0x15e)),
                        })) :
                    (empReqRadio = empReqRadio[_0x6fa9ce(0x13f)](
                        (_0x19971e) => _0x19971e[_0x6fa9ce(0x2be)] !== _0x51cc4b
                    )),
                    empReqRadio[_0x6fa9ce(0x16e)] === 0x0 ?
                    (radioFilled = !![]) :
                    (radioFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")["find"](_0x418092(0x221))["each"](function(_0x348d76) {
                const _0x5cc4c7 = _0x418092;
                let _0x138630 = $(this)["val"]()[_0x5cc4c7(0x16e)],
                    _0x2d700a = $(this)[_0x5cc4c7(0x261)](_0x5cc4c7(0x18e)) ?
                    $(this)[_0x5cc4c7(0x261)](_0x5cc4c7(0x18e)) :
                    0x0;
                $(this)[_0x5cc4c7(0x1b8)]() !== "" && _0x138630 >= _0x2d700a ?
                    (empReqInput = empReqInput[_0x5cc4c7(0x13f)](
                        (_0x174b1f) => _0x174b1f["input"] !== _0x348d76
                    )) :
                    (!empReqInput[_0x5cc4c7(0x13e)](
                            (_0x16d4ed) => _0x16d4ed[_0x5cc4c7(0x2be)] === _0x348d76
                        ) && empReqInput[_0x5cc4c7(0x1dc)]({ input: _0x348d76 }),
                        unfilledArr[_0x5cc4c7(0x1dc)]({
                            input: $(this)[_0x5cc4c7(0x198)](_0x5cc4c7(0x15e)),
                        })),
                    empReqInput[_0x5cc4c7(0x16e)] === 0x0 ?
                    (inputFilled = !![]) :
                    (inputFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x134))[_0x418092(0x297)](function(_0x576b6a) {
                const _0x55fb46 = _0x418092;
                (skipTo = undefined),
                $(this)[_0x55fb46(0x1a6)](_0x55fb46(0x29d))[_0x55fb46(0x261)]("skip-to") !== "" &&
                    (skipTo = $(this)["parents"]("[data-skip-to]")[_0x55fb46(0x261)](_0x55fb46(0x236))),
                    $(this)[_0x55fb46(0x1a6)](_0x55fb46(0x145))[_0x55fb46(0x198)](_0x55fb46(0x273)) &&
                    ((answer = $(this)[_0x55fb46(0x1a6)]("[data-go-to]")["attr"](_0x55fb46(0x273))),
                        (selections = selections[_0x55fb46(0x13f)](
                            (_0x18f194) => _0x18f194[_0x55fb46(0x26d)] !== x
                        )),
                        selections[_0x55fb46(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x55fb46(0x13f)](
                                (_0xe52715) => _0xe52715[_0x55fb46(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x55fb46(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x55fb46(0x1de)](
                                (_0x482bde) => _0x482bde[_0x55fb46(0x26d)] === x
                            )),
                            (selections[objIndex][_0x55fb46(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")["find"](":input[type=\x22password\x22][required]")[_0x418092(0x297)](function(_0x217d04) {
                const _0x54e7b9 = _0x418092;
                let _0x1af53f = $(this)[_0x54e7b9(0x1b8)]()[_0x54e7b9(0x16e)],
                    _0x29ced7 = $(this)[_0x54e7b9(0x261)](_0x54e7b9(0x18e)) ?
                    $(this)["data"]("min-character") :
                    0x0;
                $(this)[_0x54e7b9(0x1b8)]() !== "" && _0x1af53f >= _0x29ced7 ?
                    (empReqPassword = empReqPassword[_0x54e7b9(0x13f)](
                        (_0x32bd39) => _0x32bd39[_0x54e7b9(0x2be)] !== _0x217d04
                    )) :
                    (!empReqPassword["find"](
                            (_0x51b600) => _0x51b600[_0x54e7b9(0x2be)] === _0x217d04
                        ) && empReqPassword[_0x54e7b9(0x1dc)]({ input: _0x217d04 }),
                        unfilledArr["push"]({
                            input: $(this)[_0x54e7b9(0x198)](_0x54e7b9(0x15e)),
                        })),
                    empReqPassword[_0x54e7b9(0x16e)] === 0x0 ?
                    (passwordFilled = !![]) :
                    (passwordFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")["find"](":input[type=\x22password\x22]")[_0x418092(0x297)](function(_0x34a5b5) {
                const _0x26b8ba = _0x418092;
                (skipTo = undefined),
                $(this)[_0x26b8ba(0x1a6)](_0x26b8ba(0x29d))[_0x26b8ba(0x261)](_0x26b8ba(0x236)) !== "" &&
                    (skipTo = $(this)[_0x26b8ba(0x1a6)]("[data-skip-to]")[_0x26b8ba(0x261)]("skip-to")),
                    $(this)[_0x26b8ba(0x1a6)]("[data-go-to]")[_0x26b8ba(0x198)]("data-go-to") &&
                    ((answer = $(this)[_0x26b8ba(0x1a6)]("[data-go-to]")["attr"](_0x26b8ba(0x273))),
                        (selections = selections[_0x26b8ba(0x13f)](
                            (_0x55a258) => _0x55a258[_0x26b8ba(0x26d)] !== x
                        )),
                        selections[_0x26b8ba(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x26b8ba(0x13f)](
                                (_0x3a3037) => _0x3a3037[_0x26b8ba(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x26b8ba(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x26b8ba(0x1de)](
                                (_0x4044cf) => _0x4044cf[_0x26b8ba(0x26d)] === x
                            )),
                            (selections[objIndex][_0x26b8ba(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x26b8ba(0x1c9)] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))["find"](":input[type=\x22url\x22][required]")[_0x418092(0x297)](function(_0x36df01) {
                const _0x354fe = _0x418092;
                let _0x10b7cf = $(this)[_0x354fe(0x1b8)]()[_0x354fe(0x16e)],
                    _0x585238 = $(this)[_0x354fe(0x261)](_0x354fe(0x18e)) ?
                    $(this)[_0x354fe(0x261)](_0x354fe(0x18e)) :
                    0x0;
                $(this)[_0x354fe(0x1b8)]() !== "" && _0x10b7cf >= _0x585238 ?
                    (empReqUrl = empReqUrl[_0x354fe(0x13f)](
                        (_0x208fd0) => _0x208fd0["input"] !== _0x36df01
                    )) :
                    (!empReqUrl[_0x354fe(0x13e)](
                            (_0x28cc84) => _0x28cc84[_0x354fe(0x2be)] === _0x36df01
                        ) && empReqUrl[_0x354fe(0x1dc)]({ input: _0x36df01 }),
                        unfilledArr[_0x354fe(0x1dc)]({ input: $(this)["attr"]("name") })),
                    empReqUrl[_0x354fe(0x16e)] === 0x0 &&
                    validateURL($(this)[_0x354fe(0x1b8)]()) ?
                    (urlFilled = !![]) :
                    (urlFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x18d))["each"](function(_0x44fb0d) {
                const _0x5ea2bd = _0x418092;
                (skipTo = undefined),
                $(this)[_0x5ea2bd(0x1a6)](_0x5ea2bd(0x29d))[_0x5ea2bd(0x261)](_0x5ea2bd(0x236)) !== "" &&
                    (skipTo = $(this)[_0x5ea2bd(0x1a6)]("[data-skip-to]")[_0x5ea2bd(0x261)](_0x5ea2bd(0x236))),
                    $(this)[_0x5ea2bd(0x1a6)](_0x5ea2bd(0x145))["attr"](_0x5ea2bd(0x273)) &&
                    ((answer = $(this)["parents"]("[data-go-to]")[_0x5ea2bd(0x198)](_0x5ea2bd(0x273))),
                        (selections = selections[_0x5ea2bd(0x13f)](
                            (_0x5739fd) => _0x5739fd[_0x5ea2bd(0x26d)] !== x
                        )),
                        selections["push"]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x5ea2bd(0x13f)](
                                (_0x47f566) => _0x47f566[_0x5ea2bd(0x26d)] !== skipTo - 0x2
                            )),
                            selections["push"]({ step: skipTo - 0x2, selected: answer }),
                            (objIndex = selections[_0x5ea2bd(0x1de)](
                                (_0xf6a274) => _0xf6a274["step"] === x
                            )),
                            (selections[objIndex][_0x5ea2bd(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x5ea2bd(0x1c9)] = x)));
            }),
            $(steps[x])["find"](_0x418092(0x249))["find"](_0x418092(0x1e6))["each"](function(_0x2f082f) {
                const _0xa76cbb = _0x418092;
                $(this)["val"]() !== "" ?
                    (empReqDate = empReqDate["filter"](
                        (_0x2d1b32) => _0x2d1b32[_0xa76cbb(0x2be)] !== _0x2f082f
                    )) :
                    (!empReqDate[_0xa76cbb(0x13e)](
                            (_0x5c67a5) => _0x5c67a5[_0xa76cbb(0x2be)] === _0x2f082f
                        ) && empReqDate[_0xa76cbb(0x1dc)]({ input: _0x2f082f }),
                        unfilledArr["push"]({
                            input: $(this)[_0xa76cbb(0x198)](_0xa76cbb(0x15e)),
                        })),
                    empReqDate[_0xa76cbb(0x16e)] === 0x0 ?
                    (dateFilled = !![]) :
                    (dateFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")[_0x418092(0x13e)](":input[type=\x22date\x22]")["each"](function(_0x3e0e69) {
                const _0x9d9e5f = _0x418092;
                (skipTo = undefined),
                $(this)["parents"](_0x9d9e5f(0x29d))[_0x9d9e5f(0x261)](_0x9d9e5f(0x236)) !== "" &&
                    (skipTo = $(this)[_0x9d9e5f(0x1a6)](_0x9d9e5f(0x29d))["data"](_0x9d9e5f(0x236))),
                    $(this)["parents"]("[data-go-to]")[_0x9d9e5f(0x198)](_0x9d9e5f(0x273)) &&
                    ((answer = $(this)[_0x9d9e5f(0x1a6)](_0x9d9e5f(0x145))[_0x9d9e5f(0x198)](_0x9d9e5f(0x273))),
                        (selections = selections[_0x9d9e5f(0x13f)](
                            (_0x12a59c) => _0x12a59c[_0x9d9e5f(0x26d)] !== x
                        )),
                        selections[_0x9d9e5f(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections["filter"](
                                (_0x8ed815) => _0x8ed815[_0x9d9e5f(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x9d9e5f(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x9d9e5f(0x1de)](
                                (_0x55164f) => _0x55164f[_0x9d9e5f(0x26d)] === x
                            )),
                            (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x9d9e5f(0x1c9)] = x)));
            }),
            $(steps[x])["find"](_0x418092(0x249))[_0x418092(0x13e)](":input[type=\x22time\x22][required]")[_0x418092(0x297)](function(_0x482a9f) {
                const _0x113a1f = _0x418092;
                $(this)[_0x113a1f(0x1b8)]() !== "" ?
                    (empReqTime = empReqTime[_0x113a1f(0x13f)](
                        (_0x15dd61) => _0x15dd61[_0x113a1f(0x2be)] !== _0x482a9f
                    )) :
                    (!empReqTime["find"](
                            (_0x4b91d6) => _0x4b91d6["input"] === _0x482a9f
                        ) && empReqTime[_0x113a1f(0x1dc)]({ input: _0x482a9f }),
                        unfilledArr[_0x113a1f(0x1dc)]({
                            input: $(this)[_0x113a1f(0x198)]("name"),
                        })),
                    empReqTime["length"] === 0x0 ?
                    (timeFilled = !![]) :
                    (timeFilled = ![]);
            }),
            $(steps[x])["find"](".active-answer-card")[_0x418092(0x13e)](_0x418092(0x200))[_0x418092(0x297)](function(_0xd38903) {
                const _0x33fded = _0x418092;
                (skipTo = undefined),
                $(this)[_0x33fded(0x1a6)]("[data-skip-to]")[_0x33fded(0x261)](_0x33fded(0x236)) !== "" &&
                    (skipTo = $(this)[_0x33fded(0x1a6)]("[data-skip-to]")["data"]("skip-to")),
                    $(this)["parents"]("[data-go-to]")["attr"](_0x33fded(0x273)) &&
                    ((answer = $(this)[_0x33fded(0x1a6)](_0x33fded(0x145))[_0x33fded(0x198)](_0x33fded(0x273))),
                        (selections = selections[_0x33fded(0x13f)](
                            (_0x20f77b) => _0x20f77b[_0x33fded(0x26d)] !== x
                        )),
                        selections[_0x33fded(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x33fded(0x13f)](
                                (_0x495239) => _0x495239[_0x33fded(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x33fded(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x33fded(0x1de)](
                                (_0x374c21) => _0x374c21["step"] === x
                            )),
                            (selections[objIndex][_0x33fded(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x33fded(0x1c9)] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](":input[type=\x22number\x22][required]")[_0x418092(0x297)](function(_0x58fd34) {
                const _0x1b3d3d = _0x418092;
                let _0x5b5099 = $(this)[_0x1b3d3d(0x1b8)]()[_0x1b3d3d(0x16e)],
                    _0x204672 = $(this)[_0x1b3d3d(0x261)](_0x1b3d3d(0x18e)) ?
                    $(this)[_0x1b3d3d(0x261)](_0x1b3d3d(0x18e)) :
                    0x0;
                $(this)[_0x1b3d3d(0x1b8)]() !== "" && _0x5b5099 >= _0x204672 ?
                    (empReqNum = empReqNum[_0x1b3d3d(0x13f)](
                        (_0x22b4fe) => _0x22b4fe[_0x1b3d3d(0x2be)] !== _0x58fd34
                    )) :
                    (!empReqNum[_0x1b3d3d(0x13e)](
                            (_0x20a9e8) => _0x20a9e8[_0x1b3d3d(0x2be)] === _0x58fd34
                        ) && empReqNum[_0x1b3d3d(0x1dc)]({ input: _0x58fd34 }),
                        unfilledArr["push"]({
                            input: $(this)[_0x1b3d3d(0x198)](_0x1b3d3d(0x15e)),
                        })),
                    empReqNum[_0x1b3d3d(0x16e)] === 0x0 ?
                    (numFilled = !![]) :
                    (numFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x1cf))[_0x418092(0x297)](function(_0x4398c2) {
                const _0x2521bc = _0x418092;
                (skipTo = undefined),
                $(this)["parents"](_0x2521bc(0x29d))[_0x2521bc(0x261)](_0x2521bc(0x236)) !== "" &&
                    (skipTo = $(this)["parents"](_0x2521bc(0x29d))[_0x2521bc(0x261)]("skip-to")),
                    $(this)[_0x2521bc(0x1a6)](_0x2521bc(0x145))[_0x2521bc(0x198)](_0x2521bc(0x273)) &&
                    ((answer = $(this)[_0x2521bc(0x1a6)](_0x2521bc(0x145))[_0x2521bc(0x198)]("data-go-to")),
                        (selections = selections[_0x2521bc(0x13f)](
                            (_0x11c612) => _0x11c612[_0x2521bc(0x26d)] !== x
                        )),
                        selections[_0x2521bc(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x2521bc(0x13f)](
                                (_0x515b70) => _0x515b70[_0x2521bc(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x2521bc(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x2521bc(0x1de)](
                                (_0xfebe35) => _0xfebe35[_0x2521bc(0x26d)] === x
                            )),
                            (selections[objIndex][_0x2521bc(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")["find"](":input[type=\x22tel\x22][required]")[_0x418092(0x297)](function(_0x10cecc) {
                const _0x1c5360 = _0x418092;
                if ($(this)[_0x1c5360(0x1b8)]() !== "") {
                    let _0x134660 = $(this)[_0x1c5360(0x1b8)]()[_0x1c5360(0x16e)],
                        _0x22e772 = $(this)[_0x1c5360(0x261)](_0x1c5360(0x18e)) ?
                        $(this)[_0x1c5360(0x261)]("min-character") :
                        0x0;
                    if ($(this)["data"](_0x1c5360(0x14b))) {
                        var _0x2fc409 = phoneAutoFormat(
                            $(this)["data"](_0x1c5360(0x14b))
                        );
                        $(this)["val"](_0x2fc409($(this)[_0x1c5360(0x1b8)]()));
                    }
                    phoneValidation($(this)[_0x1c5360(0x1b8)](), _0x134660, _0x22e772) ?
                        (empReqTel = empReqTel[_0x1c5360(0x13f)](
                            (_0x1eadae) => _0x1eadae[_0x1c5360(0x2be)] !== _0x10cecc
                        )) :
                        empReqTel[_0x1c5360(0x1dc)]({ input: _0x10cecc });
                } else !empReqTel[_0x1c5360(0x13e)]((_0x415952) => _0x415952[_0x1c5360(0x2be)] === _0x10cecc) && empReqTel["push"]({ input: _0x10cecc }), unfilledArr[_0x1c5360(0x1dc)]({ input: $(this)["attr"](_0x1c5360(0x15e)) });
                empReqTel["length"] === 0x0 ? (telFilled = !![]) : (telFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](":input[type=\x22tel\x22]")[_0x418092(0x297)](function(_0x70b05a) {
                const _0x42e7b7 = _0x418092;
                (skipTo = undefined),
                $(this)["parents"](_0x42e7b7(0x29d))[_0x42e7b7(0x261)](_0x42e7b7(0x236)) !== "" &&
                    (skipTo = $(this)["parents"](_0x42e7b7(0x29d))["data"]("skip-to")),
                    $(this)[_0x42e7b7(0x1a6)]("[data-go-to]")[_0x42e7b7(0x198)](_0x42e7b7(0x273)) &&
                    ((answer = $(this)[_0x42e7b7(0x1a6)](_0x42e7b7(0x145))[_0x42e7b7(0x198)](_0x42e7b7(0x273))),
                        (selections = selections[_0x42e7b7(0x13f)](
                            (_0x506743) => _0x506743[_0x42e7b7(0x26d)] !== x
                        )),
                        selections[_0x42e7b7(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x42e7b7(0x13f)](
                                (_0x158fec) => _0x158fec["step"] !== skipTo - 0x2
                            )),
                            selections["push"]({ step: skipTo - 0x2, selected: answer }),
                            (objIndex = selections[_0x42e7b7(0x1de)](
                                (_0x4784d4) => _0x4784d4[_0x42e7b7(0x26d)] === x
                            )),
                            (selections[objIndex][_0x42e7b7(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x42e7b7(0x1c9)] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))["find"](_0x418092(0x235))[_0x418092(0x297)](function(_0x16a756) {
                const _0x5c8b46 = _0x418092;
                $(this)[_0x5c8b46(0x1b8)]() !== "" ?
                    (empReqFile = empReqFile[_0x5c8b46(0x13f)](
                        (_0x56b9bd) => _0x56b9bd[_0x5c8b46(0x2be)] !== _0x16a756
                    )) :
                    (!empReqFile[_0x5c8b46(0x13e)](
                            (_0x5c19c4) => _0x5c19c4["input"] === _0x16a756
                        ) && empReqFile[_0x5c8b46(0x1dc)]({ input: _0x16a756 }),
                        unfilledArr["push"]({
                            input: $(this)["attr"](_0x5c8b46(0x15e)),
                        })),
                    empReqFile[_0x5c8b46(0x16e)] === 0x0 ?
                    (fileFilled = !![]) :
                    (fileFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](":input[type=\x22file\x22]")[_0x418092(0x297)](function(_0x29e46c) {
                const _0x56ae18 = _0x418092;
                (skipTo = undefined),
                $(this)[_0x56ae18(0x1a6)](_0x56ae18(0x29d))[_0x56ae18(0x261)]("skip-to") !== "" &&
                    (skipTo = $(this)[_0x56ae18(0x1a6)](_0x56ae18(0x29d))["data"]("skip-to")),
                    $(this)["parents"](_0x56ae18(0x145))[_0x56ae18(0x198)](_0x56ae18(0x273)) &&
                    ((answer = $(this)[_0x56ae18(0x1a6)](_0x56ae18(0x145))[_0x56ae18(0x198)]("data-go-to")),
                        (selections = selections[_0x56ae18(0x13f)](
                            (_0x56dbe4) => _0x56dbe4["step"] !== x
                        )),
                        selections[_0x56ae18(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x56ae18(0x13f)](
                                (_0xe38ad0) => _0xe38ad0[_0x56ae18(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x56ae18(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x56ae18(0x1de)](
                                (_0x3ac747) => _0x3ac747[_0x56ae18(0x26d)] === x
                            )),
                            (selections[objIndex][_0x56ae18(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x269))[_0x418092(0x297)](function(_0x1060ea) {
                const _0x1b2efa = _0x418092;
                $(this)[_0x1b2efa(0x1b8)]() !== null && $(this)["val"]() !== "" ?
                    (empReqSelect = empReqSelect[_0x1b2efa(0x13f)](
                        (_0x3e7d6d) => _0x3e7d6d[_0x1b2efa(0x2be)] !== _0x1060ea
                    )) :
                    (!empReqSelect[_0x1b2efa(0x13e)](
                            (_0x426c0e) => _0x426c0e[_0x1b2efa(0x2be)] === _0x1060ea
                        ) && empReqSelect[_0x1b2efa(0x1dc)]({ input: _0x1060ea }),
                        unfilledArr[_0x1b2efa(0x1dc)]({
                            input: $(this)[_0x1b2efa(0x198)](_0x1b2efa(0x15e)),
                        })),
                    empReqSelect["length"] === 0x0 ?
                    (selectFilled = !![]) :
                    (selectFilled = ![]);
            }),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)]("select")[_0x418092(0x297)](function(_0x50bcba) {
                const _0x4bef16 = _0x418092;
                (skipTo = undefined),
                $(this)[_0x4bef16(0x1a6)](_0x4bef16(0x29d))["data"](_0x4bef16(0x236)) !== "" &&
                    (skipTo = $(this)[_0x4bef16(0x1a6)](_0x4bef16(0x29d))[_0x4bef16(0x261)](_0x4bef16(0x236))),
                    $(this)[_0x4bef16(0x1a6)](_0x4bef16(0x145))[_0x4bef16(0x198)]("data-go-to") &&
                    ((answer = $(this)[_0x4bef16(0x1a6)](_0x4bef16(0x145))[_0x4bef16(0x198)]("data-go-to")),
                        (selections = selections[_0x4bef16(0x13f)](
                            (_0x2e30ab) => _0x2e30ab[_0x4bef16(0x26d)] !== x
                        )),
                        selections[_0x4bef16(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x4bef16(0x13f)](
                                (_0x2849d3) => _0x2849d3[_0x4bef16(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x4bef16(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x4bef16(0x1de)](
                                (_0xd963d6) => _0xd963d6[_0x4bef16(0x26d)] === x
                            )),
                            (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x4bef16(0x1c9)] = x)));
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")[_0x418092(0x13e)]("textarea[required]")["each"](function(_0x4a60f0) {
                const _0x2c3e36 = _0x418092;
                let _0x76cb57 = $(this)["val"]()[_0x2c3e36(0x16e)],
                    _0x368bc7 = $(this)[_0x2c3e36(0x261)](_0x2c3e36(0x18e)) ?
                    $(this)["data"]("min-character") :
                    0x0;
                $(this)[_0x2c3e36(0x1b8)]() !== "" && _0x76cb57 >= _0x368bc7 ?
                    (empReqTextarea = empReqTextarea[_0x2c3e36(0x13f)](
                        (_0x461a85) => _0x461a85[_0x2c3e36(0x2be)] !== _0x4a60f0
                    )) :
                    (!empReqTextarea[_0x2c3e36(0x13e)](
                            (_0x4efc43) => _0x4efc43[_0x2c3e36(0x2be)] === _0x4a60f0
                        ) && empReqTextarea[_0x2c3e36(0x1dc)]({ input: _0x4a60f0 }),
                        unfilledArr[_0x2c3e36(0x1dc)]({
                            input: $(this)["attr"](_0x2c3e36(0x15e)),
                        })),
                    empReqTextarea["length"] === 0x0 ?
                    (textareaFilled = !![]) :
                    (textareaFilled = ![]);
            }),
            $(steps[x])["find"](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x189))[_0x418092(0x297)](function(_0x17d0cb) {
                const _0x15ef4b = _0x418092;
                (skipTo = undefined),
                $(this)["parents"]("[data-skip-to]")[_0x15ef4b(0x261)](_0x15ef4b(0x236)) !== "" &&
                    (skipTo = $(this)[_0x15ef4b(0x1a6)](_0x15ef4b(0x29d))[_0x15ef4b(0x261)]("skip-to")),
                    $(this)[_0x15ef4b(0x1a6)](_0x15ef4b(0x145))[_0x15ef4b(0x198)](_0x15ef4b(0x273)) &&
                    ((answer = $(this)[_0x15ef4b(0x1a6)]("[data-go-to]")["attr"](_0x15ef4b(0x273))),
                        (selections = selections[_0x15ef4b(0x13f)](
                            (_0x3aed2a) => _0x3aed2a[_0x15ef4b(0x26d)] !== x
                        )),
                        selections["push"]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x15ef4b(0x13f)](
                                (_0x467458) => _0x467458[_0x15ef4b(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x15ef4b(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0x560a2d) => _0x560a2d[_0x15ef4b(0x26d)] === x
                            )),
                            (selections[objIndex][_0x15ef4b(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex][_0x15ef4b(0x1c9)] = x)));
            }),
            $(steps[x])["find"](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x1c8))["each"](function(_0xa41de9) {
                const _0x136ad6 = _0x418092;
                $(this)[_0x136ad6(0x1b8)]() !== "" ?
                    validateEmail(
                        $(this)[_0x136ad6(0x1b8)](),
                        $(this)[_0x136ad6(0x261)](_0x136ad6(0x27f)),
                        $(this)[_0x136ad6(0x198)](_0x136ad6(0x15e))
                    ) :
                    ((emailFilled = ![]),
                        unfilledArr[_0x136ad6(0x1dc)]({
                            input: $(this)[_0x136ad6(0x198)](_0x136ad6(0x15e)),
                        }));
            }),
            $(steps[x])[_0x418092(0x13e)](".active-answer-card")[_0x418092(0x13e)](":input[type=\x22email\x22]")[_0x418092(0x297)](function(_0x5ef656) {
                const _0x376442 = _0x418092;
                (skipTo = undefined),
                $(this)[_0x376442(0x1a6)](_0x376442(0x29d))[_0x376442(0x261)]("skip-to") !== "" &&
                    (skipTo = $(this)[_0x376442(0x1a6)](_0x376442(0x29d))[_0x376442(0x261)](_0x376442(0x236))),
                    $(this)[_0x376442(0x1a6)](_0x376442(0x145))[_0x376442(0x198)]("data-go-to") &&
                    ((answer = $(this)[_0x376442(0x1a6)](_0x376442(0x145))[_0x376442(0x198)](_0x376442(0x273))),
                        (selections = selections[_0x376442(0x13f)](
                            (_0x35cfea) => _0x35cfea[_0x376442(0x26d)] !== x
                        )),
                        console["log"](_0x376442(0x1dd), selections, x),
                        selections[_0x376442(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections[_0x376442(0x13f)](
                                (_0x25e29a) => _0x25e29a[_0x376442(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x376442(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections[_0x376442(0x1de)](
                                (_0x1ddbc7) => _0x1ddbc7["step"] === x
                            )),
                            (selections[objIndex][_0x376442(0x25c)] =
                                parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            });
    }
    $(steps[x])["find"](":input[type=\x22radio\x22]")["is"](_0x418092(0x1f6)) &&
        ((selArr = []),
            $(steps)[_0x418092(0x13e)]("[data-selected]:checked")["each"](function(_0x1097ad, _0x4e3319) {
                const _0x3a469f = _0x418092;
                selArr[_0x3a469f(0x1dc)]({
                    selected: $(this)[_0x3a469f(0x261)]("selected"),
                });
            }),
            (selString = []),
            selArr[_0x418092(0x1e5)]((_0x49d48e) =>
                selString["push"](_0x49d48e[_0x418092(0x16f)])
            ),
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x249))[_0x418092(0x13e)](_0x418092(0x176))[_0x418092(0x297)](function() {
                const _0x42db77 = _0x418092;
                skipTo = undefined;
                if (
                    $(this)[_0x42db77(0x1a6)](_0x42db77(0x29d))[_0x42db77(0x261)](_0x42db77(0x236))
                )
                    skipTo = $(this)[_0x42db77(0x1a6)](_0x42db77(0x29d))[_0x42db77(0x261)]("skip-to");
                else
                    $(this)[_0x42db77(0x261)]("skip-to") &&
                    (skipTo = $(this)[_0x42db77(0x261)](_0x42db77(0x236)));
                selections = selections["filter"](
                    (_0x4a9c51) => _0x4a9c51[_0x42db77(0x26d)] !== x
                );
                if ($(this)[_0x42db77(0x261)](_0x42db77(0x2b5)))
                    (answer = $(this)[_0x42db77(0x198)]("data-go-to")),
                    selections[_0x42db77(0x1dc)]({ step: x, selected: answer }),
                    skipTo &&
                    ((selections = selections[_0x42db77(0x13f)](
                            (_0x2dd30f) => _0x2dd30f[_0x42db77(0x26d)] !== skipTo - 0x2
                        )),
                        selections[_0x42db77(0x1dc)]({
                            step: skipTo - 0x2,
                            selected: answer,
                        }),
                        (objIndex = selections["findIndex"](
                            (_0x4807b9) => _0x4807b9[_0x42db77(0x26d)] === x
                        )),
                        (selections[objIndex]["skipTo"] = parseInt(skipTo) - 0x1),
                        (selections[objIndex][_0x42db77(0x1c9)] = x));
                else
                    $(this)["parents"](_0x42db77(0x145))[_0x42db77(0x261)](_0x42db77(0x2b5)) &&
                    ((answer = $(this)[_0x42db77(0x1a6)]("[data-go-to]")[_0x42db77(0x261)](_0x42db77(0x2b5))),
                        selections[_0x42db77(0x1dc)]({ step: x, selected: answer }),
                        skipTo &&
                        ((selections = selections["filter"](
                                (_0x29dd61) => _0x29dd61[_0x42db77(0x26d)] !== skipTo - 0x2
                            )),
                            selections[_0x42db77(0x1dc)]({
                                step: skipTo - 0x2,
                                selected: answer,
                            }),
                            (objIndex = selections["findIndex"](
                                (_0x1eca94) => _0x1eca94[_0x42db77(0x26d)] === x
                            )),
                            (selections[objIndex][_0x42db77(0x25c)] = parseInt(skipTo) - 0x1),
                            (selections[objIndex]["backTo"] = x)));
            }),
            logicExtra ?
            ($(steps[x])["find"](_0x418092(0x249))["find"](_0x418092(0x17d))[_0x418092(0x261)](_0x418092(0x219)) === !![] ||
                $(steps[x])[_0x418092(0x13e)](_0x418092(0x2bd))[_0x418092(0x261)]("radio-skip") === !![]) &&
            skip &&
            selections[_0x418092(0x13f)](
                (_0x23c9ec) => _0x23c9ec[_0x418092(0x26d)] === x
            )["length"] > 0x0 &&
            textareaLength === 0x0 &&
            textInputLength === 0x0 &&
            emailInputLength === 0x0 &&
            checkboxInputLength === 0x0 &&
            setTimeout(function() {
                (next = !![]), (back = ![]), nextStep(), selectionQuiz();
            }, $(steps[x])[_0x418092(0x13e)](_0x418092(0x2ba))[_0x418092(0x261)]("radio-delay")) :
            $(steps[x])[_0x418092(0x13e)](_0x418092(0x17d))["data"](_0x418092(0x219)) === !![] &&
            skip &&
            textareaLength === 0x0 &&
            textInputLength === 0x0 &&
            emailInputLength === 0x0 &&
            checkboxInputLength === 0x0 &&
            setTimeout(function() {
                (next = !![]), (back = ![]), nextStep(), selectionQuiz();
            }, $(steps[x])[_0x418092(0x13e)](_0x418092(0x2ba))[_0x418092(0x261)]("radio-delay"))),
        inputFilled &&
        fileFilled &&
        numFilled &&
        checkboxFilled &&
        telFilled &&
        radioFilled &&
        emailFilled &&
        domainAllowed &&
        selectFilled &&
        textareaFilled &&
        passwordFilled &&
        urlFilled &&
        dateFilled ?
        enableBtn() :
        disableBtn(),
        andLogic(),
        cloneRemove(),
        cloneRemoveInput();
}

function disableRadioQuickTap() {
    const _0x48a7eb = _0x1d142c,
        _0x4f3770 = 0x1f4;
    $(_0x48a7eb(0x1b4))["on"](_0x48a7eb(0x2bf), function(_0x5042d9) {
        const _0x14ac2d = _0x48a7eb,
            _0x47881f = $(this);
        if (
            steps["eq"](x)[_0x14ac2d(0x13e)](_0x14ac2d(0x249))["find"](_0x14ac2d(0x17d))["data"]("radio-skip") === !![] ||
            steps["eq"](x)[_0x14ac2d(0x13e)]("[data-answer][data-radio-skip]:visible")[_0x14ac2d(0x261)](_0x14ac2d(0x219)) === !![] ||
            steps["eq"](x)[_0x14ac2d(0x13e)](_0x14ac2d(0x17d))[_0x14ac2d(0x261)](_0x14ac2d(0x219)) === !![] ||
            steps["eq"](x)[_0x14ac2d(0x13e)](_0x14ac2d(0x17d))[_0x14ac2d(0x261)]("radio-skip") === !![]
        ) {
            if (_0x47881f[_0x14ac2d(0x18f)](_0x14ac2d(0x2c2))) {
                _0x5042d9[_0x14ac2d(0x240)]();
                return;
            }
            _0x47881f["prop"]("disabled", !![]),
                setTimeout(() => {
                    const _0x489781 = _0x14ac2d;
                    _0x47881f[_0x489781(0x18f)](_0x489781(0x2c2), ![]);
                }, _0x4f3770);
        }
    });
}

function displayErrorMessage() {
    const _0x1e9aae = _0x1d142c;
    $(_0x1e9aae(0x238))[_0x1e9aae(0x1b7)](),
        unfilledArr[_0x1e9aae(0x16e)] > 0x0 &&
        unfilledArr[_0x1e9aae(0x1e5)](function(_0x3685e0) {
            const _0x2548a4 = _0x1e9aae;
            $(_0x2548a4(0x1b0) + _0x3685e0["input"] + "\x22]")[_0x2548a4(0x231)](_0x2548a4(0x238))["fadeIn"](),
                $(_0x2548a4(0x1b0) + _0x3685e0[_0x2548a4(0x2be)] + "\x22]")[_0x2548a4(0x1a6)]()["children"](_0x2548a4(0x238))[_0x2548a4(0x17e)](),
                $(_0x2548a4(0x1e9) + _0x3685e0["input"] + "\x22]")["siblings"]("[data-text=\x22error-message\x22]")[_0x2548a4(0x17e)](),
                $(_0x2548a4(0x1a9) + _0x3685e0["input"] + "\x22]")["siblings"]("[data-text=\x22error-message\x22]")[_0x2548a4(0x17e)]();
        });
}

function resetInputErrorMessage(_0x4950f3) {
    const _0x3b63a5 = _0x1d142c;
    $("input[name=\x22" + _0x4950f3 + "\x22]")[_0x3b63a5(0x231)](_0x3b63a5(0x238))[_0x3b63a5(0x1b7)](),
        $(_0x3b63a5(0x1b0) + _0x4950f3 + "\x22]")[_0x3b63a5(0x1a6)]()[_0x3b63a5(0x1a1)](_0x3b63a5(0x238))[_0x3b63a5(0x1b7)](),
        $(_0x3b63a5(0x1e9) + _0x4950f3 + "\x22]")[_0x3b63a5(0x231)](_0x3b63a5(0x238))[_0x3b63a5(0x1b7)](),
        $(_0x3b63a5(0x1a9) + _0x4950f3 + "\x22]")[_0x3b63a5(0x231)](_0x3b63a5(0x238))[_0x3b63a5(0x1b7)]();
}

function increaseCurstep() {
    const _0x152203 = _0x1d142c;
    countCard
        ?
        ((curStep = x + 0x1), $(_0x152203(0x181))["text"](steps["length"])) :
        $(steps[x])["data"](_0x152203(0x25b)) ?
        (curStep = x + 0x0) :
        (curStep = x + 0x1),
        $(_0x152203(0x19f))[_0x152203(0x13d)](curStep);
}

function decreaseCurstep() {
    const _0x45bd52 = _0x1d142c;
    countCard
        ?
        ((curStep = curStep - 0x1),
            console[_0x45bd52(0x194)](x),
            $(_0x45bd52(0x181))[_0x45bd52(0x13d)](steps[_0x45bd52(0x16e)])) :
        $(steps[x])[_0x45bd52(0x261)](_0x45bd52(0x25b)) ?
        (curStep = x - 0x0) :
        (curStep = x - 0x1),
        $(_0x45bd52(0x19f))[_0x45bd52(0x13d)](curStep);
}
$(_0x1d142c(0x1ac))["on"]("click", function(_0x5590b4) {
    const _0x7c70e4 = _0x1d142c;
    _0x5590b4["preventDefault"](), _0x5590b4[_0x7c70e4(0x21a)]();
    $(this)[_0x7c70e4(0x261)](_0x7c70e4(0x1e4)) &&
        (redirectTo = $(this)["data"](_0x7c70e4(0x1e4)));
    !$(this)[_0x7c70e4(0x261)](_0x7c70e4(0x1f9)) &&
        (newTab = $(this)[_0x7c70e4(0x261)](_0x7c70e4(0x1f9)));
    successCard = $(this)[_0x7c70e4(0x261)](_0x7c70e4(0x239));
    const _0xbf70ad = new URLSearchParams(
            window[_0x7c70e4(0x1d8)][_0x7c70e4(0x173)]
        ),
        _0x317952 = (_0x540b18, _0x4bf575) => {
            const _0x5c1f17 = _0x7c70e4,
                _0x2f1bf0 = document["querySelector"](
                    _0x5c1f17(0x22b) + _0x540b18 + "\x22]"
                );
            _0x2f1bf0 && (_0x2f1bf0[_0x5c1f17(0x285)] = _0x4bf575);
        };
    _0x317952(
            _0x7c70e4(0x283),
            _0xbf70ad[_0x7c70e4(0x1cb)](_0x7c70e4(0x283)) ||
            document[_0x7c70e4(0x283)] ||
            "Direct"
        ),
        _0x317952(_0x7c70e4(0x127), navigator["userAgent"]),
        _0x317952(_0x7c70e4(0x13a), new Date()["toISOString"]()),
        _0x317952(
            _0x7c70e4(0x260),
            Intl["DateTimeFormat"]()["resolvedOptions"]()[_0x7c70e4(0x1ec)]
        ),
        _0x317952(
            _0x7c70e4(0x2c3),
            window[_0x7c70e4(0x1d5)][_0x7c70e4(0x24e)] +
            "x" +
            window[_0x7c70e4(0x1d5)][_0x7c70e4(0x21e)]
        ),
        _0x317952(_0x7c70e4(0x15c), _0x7c70e4(0x19e));
    const _0x5e1ef7 = () => {
        const _0x364c79 = _0x7c70e4,
            _0x352d4a = document[_0x364c79(0x29a)](
                "[data-hidden-input=\x22page-visit-duration\x22]"
            );
        if (_0x352d4a) {
            const _0x73b9b8 = localStorage[_0x364c79(0x1e0)](_0x364c79(0x289));
            console["log"](_0x73b9b8);
            if (_0x73b9b8) {
                const _0x198423 = Math[_0x364c79(0x2bb)](
                    (Date[_0x364c79(0x164)]() - parseInt(_0x73b9b8)) / 0x3e8
                );
                _0x352d4a[_0x364c79(0x285)] = _0x198423 + _0x364c79(0x241);
            } else _0x352d4a["value"] = _0x364c79(0x19e);
        }
    };
    _0x5e1ef7();
    logicExtra &&
        fill &&
        ($(this)[_0x7c70e4(0x18f)](_0x7c70e4(0x29f), !![]),
            $(steps)[_0x7c70e4(0x13e)](":input")[_0x7c70e4(0x18f)](_0x7c70e4(0x1b9), ![]),
            console["log"](_0x7c70e4(0x24f)));
    localStorage[_0x7c70e4(0x284)](_0x7c70e4(0x220)),
        localStorage[_0x7c70e4(0x284)](_0x7c70e4(0x289)),
        localStorage[_0x7c70e4(0x284)]("formlyLastStep");
    typeof formlyCustomFunction === _0x7c70e4(0x27b) && formlyCustomFunction();
    if (fill) {
        if ($("[data-form=\x22multistep\x22]")["data"](_0x7c70e4(0x125))) {
            for (
                let _0x2215ce = 0x0; _0x2215ce < steps[_0x7c70e4(0x16e)]; _0x2215ce++
            ) {
                let _0x14943d = selections[_0x7c70e4(0x13f)](
                    (_0x13bbea) => _0x13bbea[_0x7c70e4(0x26d)] === _0x2215ce
                );
                _0x14943d[_0x7c70e4(0x16e)] > 0x0 ?
                    $(steps[_0x2215ce + 0x1])[_0x7c70e4(0x13e)](
                        _0x7c70e4(0x1c6) + _0x14943d[0x0]["selected"] + _0x7c70e4(0x27c)
                    )[_0x7c70e4(0x216)]() :
                    console[_0x7c70e4(0x194)](_0x14943d, _0x2215ce + 0x1);
            }
            console[_0x7c70e4(0x194)](_0x7c70e4(0x12a));
        }
        $(this)[_0x7c70e4(0x261)](_0x7c70e4(0x196)) ?
            (console["log"]($(this)[_0x7c70e4(0x261)]("wait")),
                $(this)[_0x7c70e4(0x13d)]($(this)[_0x7c70e4(0x261)](_0x7c70e4(0x196)))) :
            $(this)["val"]("Please\x20wait...")["text"]("Please\x20wait..."),
            $(_0x7c70e4(0x1f2))[_0x7c70e4(0x149)](),
            $(_0x7c70e4(0x1e8))[_0x7c70e4(0x16e)] > 0x0 &&
            grecaptcha["getResponse"]()[_0x7c70e4(0x16e)] === 0x0 &&
            ($(this)[_0x7c70e4(0x13d)](oldSubmitText),
                $(this)[_0x7c70e4(0x1b8)](oldSubmitText)),
            customError && $("[data-text=\x22error-message\x22]")[_0x7c70e4(0x1b7)]();
    } else customError && displayErrorMessage();
});

function progressPercentage() {
    const _0x2c0a40 = x + 0x1;
    return (percentage = (_0x2c0a40 / totalSteps) * 0x64);
}

function nextStep() {
    const _0x36e40c = _0x1d142c;
    customError
        ?
        ($("[data-text=\x22error-message\x22]")[_0x36e40c(0x1b7)](),
            fill ?
            (x++,
                (progress = x),
                x <= steps[_0x36e40c(0x16e)] - 0x1 &&
                (updateStep(), memory && saveFilledInput()),
                increaseCurstep()) :
            displayErrorMessage()) :
        (x++,
            increaseCurstep(),
            x > progress && (progress = x),
            x <= steps[_0x36e40c(0x16e)] - 0x1 &&
            (updateStep(), memory && saveFilledInput()),
            increaseCurstep()),
        andLogic();
}

function backStep() {
    const _0x1aeca9 = _0x1d142c;
    customError && $("[data-text=\x22error-message\x22]")[_0x1aeca9(0x1b7)](),
        decreaseCurstep(),
        x > 0x0 &&
        ($(progressbar[x])["removeClass"](_0x1aeca9(0x140)),
            selections[_0x1aeca9(0x13f)](
                (_0x557f1c) => _0x557f1c[_0x1aeca9(0x25c)] === x
            )[_0x1aeca9(0x16e)] > 0x0 ?
            (x = parseInt(
                getSafe(
                    () =>
                    selections[_0x1aeca9(0x13f)](
                        (_0xa13b31) => _0xa13b31[_0x1aeca9(0x25c)] === x
                    )[0x0]["backTo"]
                )
            )) :
            x--,
            updateStep()),
        ($(steps[x])[_0x1aeca9(0x13e)](_0x1aeca9(0x17d))["data"]("radio-skip") ===
            !![] ||
            $(steps[x])["find"](_0x1aeca9(0x249))["find"]("[data-radio-skip]:visible")["data"](_0x1aeca9(0x219)) === !![] ||
            $(steps[x])[_0x1aeca9(0x13e)](_0x1aeca9(0x2bd))[_0x1aeca9(0x261)](_0x1aeca9(0x219)) === !![]) &&
        ((all_data = all_data[_0x1aeca9(0x13f)](
                (_0x50fd8a) =>
                _0x50fd8a[_0x1aeca9(0x138)] !==
                $(steps[x])[_0x1aeca9(0x13e)](_0x1aeca9(0x146))["attr"]("name")
            )),
            $(
                "[data-input-field=\x22" +
                $(steps[x])["find"](_0x1aeca9(0x146))[_0x1aeca9(0x198)](_0x1aeca9(0x15e)) +
                "\x22]"
            )[_0x1aeca9(0x1b7)](),
            $(steps[x])[_0x1aeca9(0x13e)](_0x1aeca9(0x1b4))["prop"]("checked", ![]),
            $(steps[x])[_0x1aeca9(0x13e)](_0x1aeca9(0x1af))["removeClass"]("w--redirected-checked"),
            validation());
}
weightedSelectionRange &&
    $(_0x1d142c(0x185))["each"](function() {
        const _0x3a3bba = _0x1d142c;
        $(this)[_0x3a3bba(0x1e7)](
            _0x3a3bba(0x25a) + $(this)["data"]("selection") + "</div>"
        );
    });

function selectionQuiz() {
    const _0x68243 = _0x1d142c;
    if ($(this)[_0x68243(0x13e)](_0x68243(0x233))) {
        $(_0x68243(0x185))[_0x68243(0x1b7)](),
            $("[data-selection-weight]")[_0x68243(0x1b7)]();
        if (weightedSelection) {
            (selTotal = 0x0),
            selArr[_0x68243(0x1e5)](function(_0x1a349f) {
                    selTotal = selTotal + _0x1a349f["selected"];
                }),
                $("[data-text=\x22total-weight\x22]")["text"](selTotal);
            if ($(_0x68243(0x1d3) + selTotal + "\x22]")[_0x68243(0x16e)] > 0x0)
                $(_0x68243(0x1d3) + selTotal + "\x22]")["fadeIn"]();
            else
                $("[data-range]:contains(" + selTotal + ")") ?
                $(_0x68243(0x1d4) + selTotal + ")")[_0x68243(0x15b)](_0x68243(0x185))["eq"](0x0)["show"]() :
                $(_0x68243(0x192))[_0x68243(0x17e)]();
        } else {
            let _0x20977e = -0x1,
                _0x3a4332 = [];
            $(_0x68243(0x185))[_0x68243(0x297)](function(_0x353e67) {
                    const _0x482874 = _0x68243;
                    $($(_0x482874(0x185))[_0x353e67])[_0x482874(0x261)]("selection")[_0x482874(0x26c)](selString["join"]()) &&
                        ((_0x20977e = _0x353e67), _0x3a4332[_0x482874(0x1dc)](_0x353e67));
                }),
                multiSelections ?
                _0x3a4332[_0x68243(0x16e)] > 0x0 ?
                _0x3a4332[_0x68243(0x1e5)]((_0x230abd) => {
                    const _0x26647f = _0x68243;
                    $($("[data-selection]")[_0x230abd])[_0x26647f(0x17e)]();
                }) :
                $(_0x68243(0x192))["fadeIn"]() :
                _0x20977e > -0x1 ?
                $($(_0x68243(0x185))[_0x20977e])[_0x68243(0x17e)]() :
                $(_0x68243(0x192))[_0x68243(0x17e)]();
        }
    }
}

function triggerInputAllData() {
    const _0x1b0cb5 = _0x1d142c;
    if (savedFilledInput && memory)
        savedFilledInput[_0x1b0cb5(0x1e5)]((_0x51a9f6) => {
            const _0x1cbef0 = _0x1b0cb5;
            var _0x34447e = $(
                    _0x1cbef0(0x1b0) +
                    _0x51a9f6[_0x1cbef0(0x1a0)] +
                    _0x1cbef0(0x26e) +
                    _0x51a9f6["value"] +
                    _0x1cbef0(0x27a)
                ),
                _0x10eec8 = $(
                    _0x1cbef0(0x1b0) +
                    _0x51a9f6[_0x1cbef0(0x1a0)] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                ),
                _0x519345 = $(
                    _0x1cbef0(0x1e9) +
                    _0x51a9f6[_0x1cbef0(0x1a0)] +
                    "\x22]:not([data-prefill=\x22false\x22])"
                ),
                _0x312572 = $(_0x1cbef0(0x172) + _0x51a9f6[_0x1cbef0(0x1a0)] + "\x22]"),
                _0x3d2d6d = $(
                    _0x1cbef0(0x15a) +
                    _0x51a9f6[_0x1cbef0(0x1a0)] +
                    "\x22][value=\x22" +
                    _0x51a9f6[_0x1cbef0(0x285)] +
                    _0x1cbef0(0x27a)
                );
            if (_0x34447e["attr"](_0x1cbef0(0x272)) !== _0x1cbef0(0x183)) {
                if (
                    _0x34447e[_0x1cbef0(0x198)](_0x1cbef0(0x272)) === _0x1cbef0(0x1f7) &&
                    !_0x34447e[_0x1cbef0(0x1a6)](_0x1cbef0(0x17c))[_0x1cbef0(0x261)](
                        _0x1cbef0(0x219)
                    )
                )
                    _0x34447e[_0x1cbef0(0x2bf)](),
                    _0x34447e[_0x1cbef0(0x231)](_0x1cbef0(0x250))[_0x1cbef0(0x150)](
                        _0x1cbef0(0x177)
                    ),
                    _0x34447e[_0x1cbef0(0x2b0)]("input");
                else
                    _0x51a9f6[_0x1cbef0(0x285)] === "on" ?
                    (_0x10eec8["click"](),
                        _0x10eec8[_0x1cbef0(0x231)](_0x1cbef0(0x1bf))[_0x1cbef0(0x150)](
                            "w--redirected-checked"
                        ),
                        _0x10eec8[_0x1cbef0(0x2b0)]("input")) :
                    (_0x10eec8[_0x1cbef0(0x1b8)](_0x51a9f6[_0x1cbef0(0x285)]),
                        _0x519345[_0x1cbef0(0x1b8)](_0x51a9f6[_0x1cbef0(0x285)]),
                        $("select:not([data-prefill=\x22false\x22])")["find"](
                            _0x1cbef0(0x28e) + _0x51a9f6[_0x1cbef0(0x285)] + "\x22]"
                        )[_0x1cbef0(0x18f)](_0x1cbef0(0x16f), !![]),
                        _0x10eec8[_0x1cbef0(0x2b0)]("input"),
                        _0x10eec8["trigger"](_0x1cbef0(0x259)));
                const _0x49e794 = _0x3d2d6d[_0x1cbef0(0x261)](_0x1cbef0(0x281)),
                    _0x354dd4 = _0x312572[_0x1cbef0(0x261)]("click-addclass");
                _0x3d2d6d[_0x1cbef0(0x15b)]()["addClass"](_0x49e794),
                    _0x312572[_0x1cbef0(0x15b)]()[_0x1cbef0(0x150)](_0x354dd4);
            }
        });
    else
        _params &&
        (getParams(),
            searchQ["forEach"]((_0x52a056) => {
                const _0x451bfc = _0x1b0cb5;
                if (
                    $(
                        _0x451bfc(0x1b0) +
                        _0x52a056[_0x451bfc(0x1a0)] +
                        "\x22][value=\x22" +
                        _0x52a056[_0x451bfc(0x285)] +
                        _0x451bfc(0x27a)
                    )[_0x451bfc(0x198)](_0x451bfc(0x272)) !== _0x451bfc(0x183)
                ) {
                    if (
                        $(
                            "input[name=\x22" +
                            _0x52a056["key"] +
                            _0x451bfc(0x26e) +
                            _0x52a056[_0x451bfc(0x1b8)] +
                            _0x451bfc(0x27a)
                        )["attr"](_0x451bfc(0x272)) === _0x451bfc(0x1f7)
                    )
                        $(
                            _0x451bfc(0x1b0) +
                            _0x52a056[_0x451bfc(0x126)] +
                            _0x451bfc(0x26e) +
                            _0x52a056["val"] +
                            "\x22]:not([data-prefill=\x22false\x22])"
                        )[_0x451bfc(0x2bf)](),
                        $(
                            _0x451bfc(0x1b0) +
                            _0x52a056[_0x451bfc(0x126)] +
                            "\x22][value=\x22" +
                            _0x52a056["val"] +
                            _0x451bfc(0x27a)
                        )[_0x451bfc(0x231)](_0x451bfc(0x250))[_0x451bfc(0x150)](_0x451bfc(0x177)),
                        $(
                            _0x451bfc(0x1b0) +
                            _0x52a056[_0x451bfc(0x126)] +
                            _0x451bfc(0x26e) +
                            _0x52a056[_0x451bfc(0x1b8)] +
                            _0x451bfc(0x27a)
                        )[_0x451bfc(0x2b0)](_0x451bfc(0x2be));
                    else
                        _0x52a056[_0x451bfc(0x1b8)] === "on" ?
                        ($(_0x451bfc(0x1b0) + _0x52a056["key"] + _0x451bfc(0x27a))[
                                _0x451bfc(0x2bf)
                            ](),
                            $(
                                _0x451bfc(0x1b0) +
                                _0x52a056[_0x451bfc(0x126)] +
                                _0x451bfc(0x27a)
                            )[_0x451bfc(0x231)](_0x451bfc(0x1bf))[_0x451bfc(0x150)](_0x451bfc(0x177)),
                            $(_0x451bfc(0x1b0) + _0x52a056[_0x451bfc(0x126)] + "\x22]")[
                                _0x451bfc(0x2b0)
                            ](_0x451bfc(0x2be))) :
                        ($(_0x451bfc(0x1b0) + _0x52a056["key"] + _0x451bfc(0x27a))[
                                "val"
                            ](_0x52a056[_0x451bfc(0x1b8)]),
                            $(
                                _0x451bfc(0x1e9) +
                                _0x52a056[_0x451bfc(0x126)] +
                                _0x451bfc(0x27a)
                            )[_0x451bfc(0x1b8)](_0x52a056[_0x451bfc(0x1b8)]),
                            $("select[name=\x22" + _0x52a056["key"] + _0x451bfc(0x27a))[_0x451bfc(0x13e)](
                                _0x451bfc(0x28e) + _0x52a056[_0x451bfc(0x1b8)] + "\x22]"
                            )["prop"](_0x451bfc(0x16f), !![]),
                            $(
                                _0x451bfc(0x1b0) +
                                _0x52a056["key"] +
                                "\x22]:not([data-prefill=\x22false\x22])"
                            )["trigger"](_0x451bfc(0x2be)),
                            $(
                                _0x451bfc(0x1b0) +
                                _0x52a056[_0x451bfc(0x126)] +
                                _0x451bfc(0x27a)
                            )[_0x451bfc(0x2b0)](_0x451bfc(0x259)));
                }
            }));
}
$("[data-form=\x22next-btn\x22]")["on"]("click", function() {
        (next = !![]), (back = ![]), nextStep(), selectionQuiz();
    }),
    $(_0x1d142c(0x28d))["on"]("click", function() {
        (next = ![]), (back = !![]), backStep();
    }),
    $(steps)["find"](_0x1d142c(0x21c))[_0x1d142c(0x23a)]("[type=\x22radio\x22]")["on"](_0x1d142c(0x2be), function(_0x11a4f8) {
        validation(), andLogic(), addClickClass();
    }),
    $(steps)[_0x1d142c(0x13e)]("input[type=\x22radio\x22]")["on"](_0x1d142c(0x2bf), function() {
        (skip = !![]), validation(), addClickClass();
    });

function _0x263c(_0x1ec708, _0x83a713) {
    const _0x5d82fa = _0x5d82();
    return (
        (_0x263c = function(_0x263c90, _0x1513e5) {
            _0x263c90 = _0x263c90 - 0x124;
            let _0x2c9448 = _0x5d82fa[_0x263c90];
            return _0x2c9448;
        }),
        _0x263c(_0x1ec708, _0x83a713)
    );
}
$(_0x1d142c(0x188))[_0x1d142c(0x261)](_0x1d142c(0x252)) ?
    $(_0x1d142c(0x178))[_0x1d142c(0x21b)]("disabled") :
    $(_0x1d142c(0x178))["addClass"](_0x1d142c(0x2c2));

function clickableIndicator() {
    const _0x319633 = _0x1d142c;
    $("[data-clickable]")[_0x319633(0x261)](_0x319633(0x190)) &&
        ($(_0x319633(0x242))[_0x319633(0x21b)]("current"),
            $(_0x319633(0x157))[_0x319633(0x261)](_0x319633(0x252)) ?
            ((x = $(this)[_0x319633(0x224)]()), updateStep()) :
            $(this)[_0x319633(0x224)]() <= progress &&
            ((x = $(this)[_0x319633(0x224)]()), updateStep())),
        $(_0x319633(0x19f))[_0x319633(0x13d)](x + 0x1);
}
$(_0x1d142c(0x178))["on"]("click", clickableIndicator),
    (excludeCount = !$(_0x1d142c(0x1f2))[_0x1d142c(0x261)]("count-card")),
    steps[_0x1d142c(0x297)](function(_0x9d4f7a) {
        const _0x28ea4e = _0x1d142c,
            _0x4bb0a8 = $(this)[_0x28ea4e(0x261)](_0x28ea4e(0x25b));
        console[_0x28ea4e(0x194)](excludeCount),
            _0x4bb0a8 &&
            excludeCount &&
            $(_0x28ea4e(0x178))["eq"](_0x9d4f7a)[_0x28ea4e(0x1b7)]();
    });
$(_0x1d142c(0x1f2))[_0x1d142c(0x261)](_0x1d142c(0x258)) &&
    ($(_0x1d142c(0x145))["each"](function() {
            const _0x557875 = _0x1d142c;
            $(this)[_0x557875(0x1e7)](
                "<br>Data\x20Go\x20To\x20=\x20",
                $(this)[_0x557875(0x261)](_0x557875(0x2b5))
            );
        }),
        $("[data-answer]")[_0x1d142c(0x297)](function() {
            const _0x39aa63 = _0x1d142c;
            $(this)["append"](
                "<br>Data\x20Answer\x20=\x20",
                $(this)[_0x39aa63(0x261)](_0x39aa63(0x1a5))
            );
        }));

function resetFormly() {
    const _0x388d49 = _0x1d142c;
    $("[data-form=\x22multistep\x22]")[_0x388d49(0x2b0)](_0x388d49(0x1b6)),
        $(_0x388d49(0x1f2))[_0x388d49(0x1a6)]()[_0x388d49(0x13e)](".w-form-done")[_0x388d49(0x1b7)](),
        (x = 0x0),
        updateStep(),
        $(_0x388d49(0x1f2))[_0x388d49(0x29c)](),
        $("[data-form=\x22submit-btn\x22]")["text"](oldSubmitText),
        $(_0x388d49(0x1ac))[_0x388d49(0x1b8)](oldSubmitText),
        $(_0x388d49(0x19f))[_0x388d49(0x13d)](0x1),
        $("[data-form=\x22multistep\x22]")["find"]("input:checkbox")["siblings"](_0x388d49(0x1bf))[_0x388d49(0x21b)](_0x388d49(0x177));
}
$(document)[_0x1d142c(0x1f3)](function(_0x2e1ed7, _0x4d1891, _0x5b7b71) {
        const _0x4a7c0e = _0x1d142c;
        if (_0x5b7b71[_0x4a7c0e(0x24a)]["includes"](_0x4a7c0e(0x133))) {
            const _0x34c045 = _0x4d1891[_0x4a7c0e(0x184)] === 0xc8,
                _0x41e6fb = _0x4a7c0e(0x1a4);
            redirectTo &&
                _0x34c045 &&
                (newTab ?
                    window["open"](redirectTo, _0x4a7c0e(0x278)) :
                    setTimeout(() => {
                        location["href"] = redirectTo;
                    }, redirectDelay)),
                _0x34c045 &&
                successCard !== "" &&
                $("[data-success-card=\x22" + successCard + "\x22]")[
                    _0x4a7c0e(0x17e)
                ](),
                _0x34c045 &&
                formReset &&
                setTimeout(() => {
                    resetFormly();
                }, resetDelay), !_0x34c045 &&
                ($(_0x4a7c0e(0x1ac))[_0x4a7c0e(0x1b8)](_0x4a7c0e(0x1c4)),
                    $(_0x4a7c0e(0x1ac))["text"](_0x4a7c0e(0x1c4)));
        }
    }),
    $(_0x1d142c(0x155))["on"](_0x1d142c(0x2bf), function() {
        const _0x10f915 = _0x1d142c;
        var _0x40161a = $(this)[_0x10f915(0x15b)]()["find"](_0x10f915(0x17f))[_0x10f915(0x261)]("input-field");
        setTimeout(function() {
                const _0x17780b = _0x10f915;
                $(_0x17780b(0x1b0) + _0x40161a + "\x22]")[_0x17780b(0x1bb)]();
            }, 0x64),
            (back = !![]),
            (x = $(this)[_0x10f915(0x261)](_0x10f915(0x156)) - 0x1),
            updateStep(),
            countCard ?
            ((curStep = x + 0x1),
                $(_0x10f915(0x181))[_0x10f915(0x13d)](steps[_0x10f915(0x16e)])) :
            $(steps[x])["data"](_0x10f915(0x25b)) ?
            (curStep = x + 0x0) :
            (curStep = x + 0x1),
            $(_0x10f915(0x19f))["text"](curStep),
            (back = ![]);
    }),
    $(_0x1d142c(0x1f1))["on"](_0x1d142c(0x2bf), function() {
        const _0x1d2974 = _0x1d142c;
        $("[data-form=\x22multistep\x22]")[_0x1d2974(0x2b0)](_0x1d2974(0x1b6));
        let _0x27df66 = $(this);
        $(this)["text"]("Please\x20wait..."),
            setTimeout(function() {
                const _0xeaca3f = _0x1d2974;
                $(_0x27df66)[_0xeaca3f(0x13d)](oldResetText),
                    $(_0x27df66)["parents"](".w-form-done")[_0xeaca3f(0x1b7)](),
                    (x = 0x0),
                    updateStep(),
                    $(_0xeaca3f(0x1f2))[_0xeaca3f(0x29c)](),
                    $(_0xeaca3f(0x1ac))["text"](oldSubmitText),
                    $("[data-form=\x22submit-btn\x22]")[_0xeaca3f(0x1b8)](oldSubmitText),
                    $(_0x27df66)[_0xeaca3f(0x1b8)](oldSubmitText),
                    $(_0xeaca3f(0x19f))[_0xeaca3f(0x13d)](0x1),
                    $(_0xeaca3f(0x1f2))[_0xeaca3f(0x13e)](_0xeaca3f(0x257))[_0xeaca3f(0x231)](_0xeaca3f(0x1bf))[_0xeaca3f(0x21b)]("w--redirected-checked");
            }, resetDelay);
    }),
    $(_0x1d142c(0x24b))["on"](_0x1d142c(0x262), function(_0x6e73f0) {
        const _0x4f0db2 = _0x1d142c;
        if (_0x6e73f0["keyCode"] === 0xd) {
            _0x6e73f0["preventDefault"](), _0x6e73f0["stopPropagation"]();
            if ($(steps[x])["find"]("textarea")["is"](_0x4f0db2(0x14f)))
                $(steps[x])[_0x4f0db2(0x13e)](_0x4f0db2(0x24d))[_0x4f0db2(0x1b8)](
                    $(steps[x])[_0x4f0db2(0x13e)]("textarea:focus")[_0x4f0db2(0x1b8)]() + "\x0a"
                );
            else
                $("[data-enter]")["data"](_0x4f0db2(0x142)) &&
                fill &&
                totalSteps > curStep &&
                $("[data-form=\x22next-btn\x22]")[0x0][_0x4f0db2(0x2bf)]();
        }
    }),
    $(_0x1d142c(0x24b))[_0x1d142c(0x2a8)](function(_0x40f24b) {
        const _0x3578fd = _0x1d142c;
        (_0x40f24b["metaKey"] || _0x40f24b["ctrlKey"]) &&
        _0x40f24b["keyCode"] == 0xd &&
            (x >= steps["length"] - 0x1 && fill ?
                $(steps[x])["find"](_0x3578fd(0x287))[_0x3578fd(0x2bf)]() :
                (_0x40f24b[_0x3578fd(0x240)](), _0x40f24b[_0x3578fd(0x21a)]()));
    }),
    $("[data-form=\x22multistep\x22]")[_0x1d142c(0x13e)](":input")["on"](_0x1d142c(0x259), function() {
        const _0x3428b1 = _0x1d142c;
        (all_data = all_data[_0x3428b1(0x13f)](
            (_0x152ab5) =>
            _0x152ab5[_0x3428b1(0x138)] !==
            $(this)[_0x3428b1(0x198)](_0x3428b1(0x15e))
        )),
        $(this)[_0x3428b1(0x198)](_0x3428b1(0x272)) === _0x3428b1(0x19a) ?
            $(this)["is"](_0x3428b1(0x1f6)) ?
            all_data[_0x3428b1(0x1dc)]({
                field: $(this)[_0x3428b1(0x198)]("name"),
                value: $(this)[_0x3428b1(0x231)]("span")[_0x3428b1(0x13d)](),
            }) :
            $(_0x3428b1(0x223) + $(this)["attr"](_0x3428b1(0x15e)) + "\x22]")[
                _0x3428b1(0x1b7)
            ]() :
            (all_data[_0x3428b1(0x1dc)]({
                    field: $(this)[_0x3428b1(0x198)](_0x3428b1(0x15e)),
                    value: $(this)[_0x3428b1(0x1b8)](),
                }),
                $(this)[_0x3428b1(0x1b8)]() !== "" &&
                resetInputErrorMessage(
                    $(this)[_0x3428b1(0x198)](_0x3428b1(0x15e))
                )),
            all_data[_0x3428b1(0x1e5)](function(_0x209857) {
                const _0x4b8f82 = _0x3428b1;
                $(_0x4b8f82(0x223) + _0x209857[_0x4b8f82(0x138)] + "\x22]")["show"](),
                    $(_0x4b8f82(0x223) + _0x209857[_0x4b8f82(0x138)] + "\x22]")[
                        _0x4b8f82(0x13d)
                    ](_0x209857[_0x4b8f82(0x285)]);
            });
    }),
    $("[data-form=\x22multistep\x22]")[_0x1d142c(0x13e)]("textarea")["on"](_0x1d142c(0x259), function() {
        const _0x23c3b3 = _0x1d142c;
        $(this)["val"]() !== "" &&
            resetInputErrorMessage($(this)[_0x23c3b3(0x198)](_0x23c3b3(0x15e))),
            (all_data = all_data[_0x23c3b3(0x13f)](
                (_0x281cd8) =>
                _0x281cd8[_0x23c3b3(0x138)] !== $(this)[_0x23c3b3(0x198)]("name")
            )),
            all_data[_0x23c3b3(0x1dc)]({
                field: $(this)[_0x23c3b3(0x198)](_0x23c3b3(0x15e)),
                value: $(this)[_0x23c3b3(0x1b8)](),
            }),
            all_data[_0x23c3b3(0x1e5)](function(_0x5e52df) {
                const _0x14fe5f = _0x23c3b3;
                $("[data-input-field=\x22" + _0x5e52df["field"] + "\x22]")["show"](),
                    $(_0x14fe5f(0x223) + _0x5e52df[_0x14fe5f(0x138)] + "\x22]")[
                        _0x14fe5f(0x13d)
                    ](_0x5e52df["value"]);
            });
    }),
    $(_0x1d142c(0x1f2))[_0x1d142c(0x13e)](_0x1d142c(0x13b))["on"](_0x1d142c(0x259), function() {
        const _0x293992 = _0x1d142c;
        $(this)["val"]() !== "" &&
            resetInputErrorMessage($(this)[_0x293992(0x198)](_0x293992(0x15e)));
        var _0xac6141 = $(this)["data"](_0x293992(0x292));
        (all_data = all_data["filter"](
            (_0x1a56de) =>
            _0x1a56de[_0x293992(0x138)] !== $(this)["attr"](_0x293992(0x15e))
        )),
        all_data["push"]({
                field: $(this)[_0x293992(0x198)](_0x293992(0x15e)),
                value: _0xac6141 ?
                    $(this)["find"]("option[value=\x22$(this).val()\x22]")[_0x293992(0x13d)]() : $(this)["val"](),
            }),
            all_data[_0x293992(0x1e5)](function(_0x19f03b) {
                const _0x101bd9 = _0x293992;
                $(_0x101bd9(0x223) + _0x19f03b[_0x101bd9(0x138)] + "\x22]")[
                        _0x101bd9(0x29c)
                    ](),
                    $("[data-input-field=\x22" + _0x19f03b[_0x101bd9(0x138)] + "\x22]")[
                        _0x101bd9(0x13d)
                    ](_0x19f03b[_0x101bd9(0x285)]);
            });
    }),
    updateStep(),
    triggerInputAllData(),
    $(_0x1d142c(0x16a))[_0x1d142c(0x297)](function() {
        const _0x2d99ca = _0x1d142c,
            _0x518f22 = $(this)[_0x2d99ca(0x13e)](_0x2d99ca(0x1d2)),
            _0x2493a8 = [];
        _0x518f22[_0x2d99ca(0x297)](function() {
            const _0x291334 = _0x2d99ca;
            _0x2493a8["push"]($(this)[_0x291334(0x13d)]()[_0x291334(0x2b3)]());
        });
        const _0x222b6f = $(this)[_0x2d99ca(0x231)](_0x2d99ca(0x299));
        $["each"](_0x2493a8, function(_0x5fd274, _0x1e56cc) {
            const _0x7276c7 = _0x2d99ca,
                _0x1900da = $(_0x7276c7(0x1d9))[_0x7276c7(0x1b8)](_0x1e56cc)[_0x7276c7(0x13d)](_0x1e56cc);
            _0x222b6f[_0x7276c7(0x1e7)](_0x1900da);
        });
    });

function cloneRemove() {
    const _0x3529a7 = _0x1d142c;
    $(_0x3529a7(0x28b))["each"](function() {
        const _0x3ed39a = _0x3529a7;
        $(this)[_0x3ed39a(0x13e)](_0x3ed39a(0x293))[_0x3ed39a(0x16e)] < 0x2 ?
            $(this)[_0x3ed39a(0x13e)](_0x3ed39a(0x290))[_0x3ed39a(0x1b7)]() :
            $(this)[_0x3ed39a(0x13e)]("[data-form=\x22remove-clone\x22]")[_0x3ed39a(0x29c)]();
    });
}

function cloneRemoveInput() {
    const _0x2499f7 = _0x1d142c;
    $("[data-clone-input-wrapper]")[_0x2499f7(0x297)](function() {
        const _0x569827 = _0x2499f7;
        console["log"](
                $(this)[_0x569827(0x13e)]("[data-clone-input]")[_0x569827(0x16e)]
            ),
            $(this)["find"](_0x569827(0x1c0))[_0x569827(0x16e)] < 0x2 ?
            $(this)[_0x569827(0x13e)](_0x569827(0x213))[_0x569827(0x1b7)]() :
            $(this)["find"]("[data-form=\x22remove-input-clone\x22]")[_0x569827(0x29c)]();
    });
}
$(_0x1d142c(0x290))["on"](_0x1d142c(0x2bf), function() {
        const _0x1a449d = _0x1d142c,
            _0xc05646 =
            $(this)[_0x1a449d(0x1a6)](_0x1a449d(0x293))[_0x1a449d(0x16e)] > 0x0 ?
            $(this)[_0x1a449d(0x1a6)]("[data-clone]")[_0x1a449d(0x224)]() :
            $(this)["parents"](_0x1a449d(0x171))["index"](),
            _0x421ac4 =
            $(this)[_0x1a449d(0x1a6)](_0x1a449d(0x293))[_0x1a449d(0x16e)] > 0x0 ?
            $(this)[_0x1a449d(0x1a6)](_0x1a449d(0x293))[_0x1a449d(0x261)]("clone") :
            $(this)[_0x1a449d(0x1a6)](_0x1a449d(0x171))[_0x1a449d(0x261)](_0x1a449d(0x204));
        $(_0x1a449d(0x1ca) + _0x421ac4 + "\x22]")["eq"](_0xc05646)["remove"](),
            $(_0x1a449d(0x2a9) + _0x421ac4 + "\x22]")["eq"](_0xc05646)["remove"](),
            cloneRemove();
        let _0x3c79f1 = $("[data-add-new=\x22" + _0x421ac4 + "\x22]")[
                _0x1a449d(0x261)
            ](_0x1a449d(0x209)),
            _0x264bfc = $(_0x1a449d(0x1ca) + _0x421ac4 + "\x22]")[_0x1a449d(0x16e)];
        console[_0x1a449d(0x194)](_0x264bfc, _0x3c79f1),
            _0x264bfc < _0x3c79f1 &&
            (console[_0x1a449d(0x194)](_0x1a449d(0x29c)),
                $("[data-add-new=\x22" + _0x421ac4 + "\x22]")[_0x1a449d(0x29c)]()),
            validation();
    }),
    $(_0x1d142c(0x213))["on"](_0x1d142c(0x2bf), function() {
        const _0x56ed2b = _0x1d142c;
        let _0x1e8dbb = $(this)["parents"](_0x56ed2b(0x1c0))["find"](_0x56ed2b(0x18b))[_0x56ed2b(0x23c)]()[_0x56ed2b(0x198)](_0x56ed2b(0x15e)),
            _0x2d81a3 = $(this)[_0x56ed2b(0x1a6)](_0x56ed2b(0x1c0))["data"]("clone-input");
        $(this)[_0x56ed2b(0x15b)](_0x56ed2b(0x1c0))[_0x56ed2b(0x216)](),
            console["log"](_0x1e8dbb),
            $(_0x56ed2b(0x223) + _0x1e8dbb + "\x22]")["parent"]("[data-display-input]")[_0x56ed2b(0x216)]();
        let _0x444645 = $(_0x56ed2b(0x1b5) + _0x2d81a3 + "\x22]")[_0x56ed2b(0x261)](
                "add-new-input-limit"
            ),
            _0x4185b3 = $("[data-clone-input=\x22" + _0x2d81a3 + "\x22]")[
                _0x56ed2b(0x16e)
            ];
        _0x4185b3 < _0x444645 &&
            $(_0x56ed2b(0x1b5) + _0x2d81a3 + "\x22]")["show"](),
            validation();
    }),
    $(_0x1d142c(0x137))["on"](_0x1d142c(0x2bf), function() {
        const _0x23b7d9 = _0x1d142c;
        let _0x746284 = $(this)[_0x23b7d9(0x261)]("add-new"),
            _0x391a2f = $(this)[_0x23b7d9(0x261)](_0x23b7d9(0x209));
        var _0x4aa352 = $(_0x23b7d9(0x1ca) + _0x746284 + "\x22]")["eq"](0x0)["clone"](!![]),
            _0x3df23c = $(_0x23b7d9(0x2a9) + _0x746284 + "\x22]")["eq"](0x0)[_0x23b7d9(0x179)](!![]);
        let _0x37c378 = "";
        $(this)[_0x23b7d9(0x13e)](_0x23b7d9(0x290))[_0x23b7d9(0x29c)](),
            cloneRemove(),
            _0x4aa352["find"]("[data-clone-input]")[_0x23b7d9(0x13e)]("input")[_0x23b7d9(0x1b8)](""),
            _0x4aa352["find"](_0x23b7d9(0x1c0))[_0x23b7d9(0x13e)](_0x23b7d9(0x13b))[_0x23b7d9(0x1b8)](""),
            _0x4aa352[_0x23b7d9(0x13e)](_0x23b7d9(0x1c0))["find"](_0x23b7d9(0x189))[_0x23b7d9(0x1b8)](""),
            _0x4aa352[_0x23b7d9(0x13e)](_0x23b7d9(0x1c0))[_0x23b7d9(0x23a)](_0x23b7d9(0x158))["remove"](),
            _0x4aa352[_0x23b7d9(0x13e)](_0x23b7d9(0x1c0))["find"](_0x23b7d9(0x27d))["click"](),
            _0x3df23c["find"](_0x23b7d9(0x22e))["not"](":first")[_0x23b7d9(0x216)](),
            _0x4aa352[_0x23b7d9(0x13e)](_0x23b7d9(0x2be))[_0x23b7d9(0x297)](
                function() {
                    const _0x47ba15 = _0x23b7d9;
                    if (
                        $(this)[_0x47ba15(0x167)](_0x47ba15(0x1c0))[_0x47ba15(0x16e)] > 0x0
                    ) {
                        let _0x153346 = 0x0;
                        const _0xc2696b = $(this)[_0x47ba15(0x167)](_0x47ba15(0x1c0))[_0x47ba15(0x261)](_0x47ba15(0x288));
                        $("[data-clone-input=\x22" + _0xc2696b + _0x47ba15(0x19b))[
                                _0x47ba15(0x297)
                            ](function() {
                                const _0x39536f = _0x47ba15,
                                    _0x3309dd = $(this)["attr"]("name");
                                if (_0x3309dd && _0x3309dd[_0x39536f(0x15d)](_0x39536f(0x225))) {
                                    const _0x43d41a = parseInt(
                                        _0x3309dd[_0x39536f(0x254)]("-")[0x1]
                                    );
                                    !isNaN(_0x43d41a) &&
                                        _0x43d41a > _0x153346 &&
                                        (_0x153346 = _0x43d41a);
                                }
                            }),
                            _0x153346++,
                            (_0x37c378 = this["name"] + "-" + _0x153346);
                    } else
                        _0x37c378 =
                        this[_0x47ba15(0x15e)] +
                        "-" +
                        (parseInt(
                                $(_0x47ba15(0x1ca) + _0x746284 + "\x22]")["last"]()[_0x47ba15(0x224)]()
                            ) +
                            0x1);
                    $(this)["val"](""),
                        $(this)[_0x47ba15(0x198)](_0x47ba15(0x15e), _0x37c378),
                        $(this)[_0x47ba15(0x198)](_0x47ba15(0x29e), _0x37c378);
                }
            ),
            _0x4aa352["find"](_0x23b7d9(0x189))[_0x23b7d9(0x297)](function() {
                const _0x162b00 = _0x23b7d9;
                if (
                    $(this)[_0x162b00(0x167)](_0x162b00(0x1c0))[_0x162b00(0x16e)] > 0x0
                ) {
                    let _0x6307a8 = 0x0;
                    const _0x2f52f8 = $(this)["closest"](_0x162b00(0x1c0))[_0x162b00(0x261)](_0x162b00(0x288));
                    $(_0x162b00(0x1c3) + _0x2f52f8 + _0x162b00(0x1cc))[_0x162b00(0x297)](
                            function() {
                                const _0x5bf663 = _0x162b00,
                                    _0x339381 = $(this)[_0x5bf663(0x198)](_0x5bf663(0x15e));
                                if (_0x339381 && _0x339381[_0x5bf663(0x15d)]("relationship-")) {
                                    const _0x31c670 = parseInt(
                                        _0x339381[_0x5bf663(0x254)]("-")[0x1]
                                    );
                                    !isNaN(_0x31c670) &&
                                        _0x31c670 > _0x6307a8 &&
                                        (_0x6307a8 = _0x31c670);
                                }
                            }
                        ),
                        _0x6307a8++,
                        (_0x37c378 = this["name"] + "-" + _0x6307a8);
                } else
                    _0x37c378 =
                    this[_0x162b00(0x15e)] +
                    "-" +
                    (parseInt(
                            $(_0x162b00(0x1ca) + _0x746284 + "\x22]")["last"]()[_0x162b00(0x224)]()
                        ) +
                        0x1);
                $(this)[_0x162b00(0x1b8)](""),
                    $(this)[_0x162b00(0x198)]("name", _0x37c378),
                    $(this)[_0x162b00(0x198)]("data-name", _0x37c378);
            }),
            _0x4aa352[_0x23b7d9(0x13e)]("select")[_0x23b7d9(0x297)](function() {
                const _0x55fc87 = _0x23b7d9;
                if (
                    $(this)[_0x55fc87(0x167)]("[data-clone-input]")[_0x55fc87(0x16e)] >
                    0x0
                ) {
                    let _0x432841 = 0x0;
                    const _0x17ac7f = $(this)[_0x55fc87(0x167)](_0x55fc87(0x1c0))[_0x55fc87(0x261)](_0x55fc87(0x288));
                    $(_0x55fc87(0x1c3) + _0x17ac7f + "\x22]\x20select")[_0x55fc87(0x297)](
                            function() {
                                const _0x30c917 = _0x55fc87,
                                    _0x569392 = $(this)[_0x30c917(0x198)](_0x30c917(0x15e));
                                if (_0x569392 && _0x569392[_0x30c917(0x15d)](_0x30c917(0x225))) {
                                    const _0x557374 = parseInt(
                                        _0x569392[_0x30c917(0x254)]("-")[0x1]
                                    );
                                    !isNaN(_0x557374) &&
                                        _0x557374 > _0x432841 &&
                                        (_0x432841 = _0x557374);
                                }
                            }
                        ),
                        _0x432841++,
                        (_0x37c378 = this[_0x55fc87(0x15e)] + "-" + _0x432841);
                } else
                    _0x37c378 =
                    this["name"] +
                    "-" +
                    (parseInt(
                            $(_0x55fc87(0x1ca) + _0x746284 + "\x22]")[_0x55fc87(0x20b)]()["index"]()
                        ) +
                        0x1);
                $(this)[_0x55fc87(0x1b8)](""),
                    $(this)[_0x55fc87(0x198)](_0x55fc87(0x15e), _0x37c378),
                    $(this)[_0x55fc87(0x198)](_0x55fc87(0x29e), _0x37c378);
            }),
            _0x3df23c["find"](_0x23b7d9(0x17f))[_0x23b7d9(0x297)](function() {
                const _0x424684 = _0x23b7d9;
                if ($(this)[_0x424684(0x261)](_0x424684(0x16c))) {
                    let _0x3d917e = 0x0;
                    const _0x3c9804 = $(this)[_0x424684(0x261)](_0x424684(0x16c))[_0x424684(0x254)]("-")[0x0];
                    $(
                            _0x424684(0x2a9) +
                            _0x746284 +
                            _0x424684(0x1ed) +
                            _0x3c9804 +
                            "\x22]"
                        )[_0x424684(0x297)](function() {
                            const _0x4e6c36 = _0x424684,
                                _0x295808 = $(this)["attr"]("data-input-field"),
                                _0x295a6c = parseInt(_0x295808[_0x4e6c36(0x254)]("-")[0x1]);
                            !isNaN(_0x295a6c) &&
                                _0x295a6c > _0x3d917e &&
                                (_0x3d917e = _0x295a6c);
                        }),
                        _0x3d917e++;
                    const _0x941415 = _0x3c9804 + "-" + _0x3d917e;
                    $(this)["attr"](_0x424684(0x1cd), _0x941415);
                }
            }),
            $(_0x23b7d9(0x1b2) + _0x746284 + "\x22]")[_0x23b7d9(0x1e7)](_0x4aa352),
            $(_0x23b7d9(0x1fe) + _0x746284 + "\x22]")["append"](_0x3df23c),
            $(_0x23b7d9(0x274) + _0x746284 + "\x22]")[_0x23b7d9(0x297)](function() {
                const _0x44ae04 = _0x23b7d9;
                $(this)[_0x44ae04(0x13d)](
                    $(this)["parents"](_0x44ae04(0x1ca) + _0x746284 + "\x22]")["index"]() + 0x1
                );
            }),
            $(_0x23b7d9(0x22f) + _0x746284 + "\x22]")[_0x23b7d9(0x297)](function() {
                const _0x3c22c0 = _0x23b7d9;
                $(this)[_0x3c22c0(0x13d)](
                    $(this)["parents"]("[data-display=\x22" + _0x746284 + "\x22]")[_0x3c22c0(0x224)]() + 0x1
                );
            });
        let _0x33e465 = $(
            _0x23b7d9(0x1b2) +
            _0x746284 +
            "\x22]\x20[data-clone=\x22" +
            _0x746284 +
            "\x22]"
        )[_0x23b7d9(0x16e)];
        if (_0x33e465 >= _0x391a2f) {
            $(this)["hide"]();
            return;
        }
        $(this)[_0x23b7d9(0x29c)](), validation();
    }),
    $(_0x1d142c(0x294))["on"](_0x1d142c(0x2bf), function() {
        const _0x1a7e7f = _0x1d142c,
            _0x17b0ed = $(this)[_0x1a7e7f(0x167)](_0x1a7e7f(0x293)),
            _0x1966a2 = $(this)["closest"]("[data-clone]")[_0x1a7e7f(0x224)]();
        let _0x528ce5 = $(this)["data"](_0x1a7e7f(0x1a8));
        var _0x1a2fff = _0x17b0ed["find"](
                "[data-clone-input=\x22" + _0x528ce5 + "\x22]"
            )["eq"](0x0)[_0x1a7e7f(0x179)](!![]),
            _0x235942 = $(_0x1a7e7f(0x171))[_0x1a7e7f(0x13e)]("[data-display-input=\x22" + _0x528ce5 + "\x22]")["eq"](0x0)[_0x1a7e7f(0x179)](!![]);
        let _0x56c9a9 = $(this)[_0x1a7e7f(0x261)](_0x1a7e7f(0x2b8)),
            _0x2374ec = 0x0;
        _0x17b0ed[_0x1a7e7f(0x13e)](
                _0x1a7e7f(0x1c3) +
                _0x528ce5 +
                _0x1a7e7f(0x203) +
                _0x528ce5 +
                _0x1a7e7f(0x22a) +
                _0x528ce5 +
                _0x1a7e7f(0x1cc)
            )[_0x1a7e7f(0x297)](function() {
                const _0x552718 = _0x1a7e7f,
                    _0x38b884 = $(this)[_0x552718(0x198)](_0x552718(0x15e));
                if (_0x38b884) {
                    const _0x3d579b = parseInt(_0x38b884[_0x552718(0x254)]("-")[0x1]);
                    !isNaN(_0x3d579b) && _0x3d579b > _0x2374ec && (_0x2374ec = _0x3d579b);
                }
            }),
            _0x2374ec++,
            _0x1a2fff[_0x1a7e7f(0x13e)]("input,\x20select,\x20textarea")["each"](
                function() {
                    const _0x2ddd32 = _0x1a7e7f,
                        _0x209790 = $(this)[_0x2ddd32(0x198)]("name");
                    let _0xf04729 =
                        _0x209790[_0x2ddd32(0x254)]("-")[0x0] + "-" + _0x2374ec;
                    $(this)[_0x2ddd32(0x1b8)](""),
                        $(this)[_0x2ddd32(0x198)](_0x2ddd32(0x15e), _0xf04729),
                        $(this)[_0x2ddd32(0x198)](_0x2ddd32(0x29e), _0xf04729);
                }
            ),
            _0x235942["find"]("[data-input-field]")[_0x1a7e7f(0x297)](function() {
                const _0x11896b = _0x1a7e7f,
                    _0x2b3bf6 = $(this)[_0x11896b(0x198)](_0x11896b(0x1cd)),
                    _0xe74141 = _0x2b3bf6[_0x11896b(0x254)]("-")[0x0] + "-" + _0x2374ec;
                $(this)[_0x11896b(0x198)](_0x11896b(0x1cd), _0xe74141);
            }),
            _0x17b0ed[_0x1a7e7f(0x13e)](
                "[data-clone-input-wrapper=\x22" + _0x528ce5 + "\x22]"
            )[_0x1a7e7f(0x1e7)](_0x1a2fff),
            $("[data-display]")[_0x1a7e7f(0x13e)](_0x1a7e7f(0x22c) + _0x528ce5 + "\x22]")[_0x1a7e7f(0x1e7)](_0x235942),
            _0x17b0ed[_0x1a7e7f(0x13e)](
                "[data-input-index=\x22" + _0x528ce5 + "\x22]"
            )["each"](function() {
                const _0x3cba9b = _0x1a7e7f,
                    _0x5074d0 = $(this)[_0x3cba9b(0x167)](
                        _0x3cba9b(0x1c3) + _0x528ce5 + "\x22]"
                    ),
                    _0x4bf68e = _0x5074d0[_0x3cba9b(0x224)]() + 0x1;
                $(this)[_0x3cba9b(0x13d)](_0x4bf68e);
            }),
            $(_0x1a7e7f(0x171))[_0x1a7e7f(0x13e)](
                "[data-display-input-index=\x22" + _0x528ce5 + "\x22]"
            )[_0x1a7e7f(0x297)](function() {
                const _0x494e22 = _0x1a7e7f,
                    _0x57f4d2 = $(this)["closest"](
                        _0x494e22(0x2aa) + _0x528ce5 + "\x22]"
                    ),
                    _0x4fb79a = _0x57f4d2[_0x494e22(0x224)]() + 0x1;
                $(this)[_0x494e22(0x13d)](_0x4fb79a);
            });
        let _0xcb5b81 = _0x17b0ed[_0x1a7e7f(0x13e)](
            _0x1a7e7f(0x1ad) + _0x528ce5 + _0x1a7e7f(0x214) + _0x528ce5 + "\x22]"
        )[_0x1a7e7f(0x16e)];
        if (_0xcb5b81 >= _0x56c9a9) {
            $(this)["hide"]();
            return;
        }
        $(this)[_0x1a7e7f(0x29c)](), cloneRemoveInput(), validation();
    }),
    $(_0x1d142c(0x2b4))["on"](_0x1d142c(0x2bf), function() {
        const _0x418bad = _0x1d142c,
            _0x2c196f = $(this)["data"](_0x418bad(0x20c));
        $("input[name=\x22" + _0x2c196f + "\x22]")[_0x418bad(0x1b8)](""),
            validation();
    });

function andLogic() {
    const _0x263fd7 = _0x1d142c;
    conditionalResult &&
        (steps["eq"](x)[_0x263fd7(0x13e)](_0x263fd7(0x148))[_0x263fd7(0x1b7)](),
            steps["eq"](x)[_0x263fd7(0x13e)]("[data-show-if]")[_0x263fd7(0x297)](function() {
                const _0x538b12 = _0x263fd7;

                function _0xa3752f(_0x3ed6b4) {
                    const _0xc97e62 = _0x263c,
                        _0x3691fd = _0x3ed6b4[_0xc97e62(0x254)]("&"),
                        _0x2f87cc = [];
                    return (
                        _0x3691fd[_0xc97e62(0x1e5)]((_0x5130f0) => {
                            const _0x172343 = _0xc97e62,
                                [_0x7373, _0x3d525e] = _0x5130f0["split"]("=");
                            _0x2f87cc[_0x172343(0x1dc)]({ field: _0x7373, value: _0x3d525e });
                        }),
                        _0x2f87cc
                    );
                }
                const _0x484ae5 = $(this)[_0x538b12(0x198)](_0x538b12(0x20f)),
                    _0x3bcc12 = _0xa3752f(_0x484ae5);

                function _0x483aef(_0x4df6e0, _0x493367) {
                    return _0x493367["some"]((_0x5b3043, _0x3b8341) => {
                        const _0xeee1e7 = _0x263c;
                        if (
                            _0x4df6e0[0x0] &&
                            _0x5b3043["field"] === _0x4df6e0[0x0][_0xeee1e7(0x138)]
                        )
                            return _0x4df6e0[_0xeee1e7(0x230)](
                                (_0x443dab, _0x2b8a22) =>
                                _0x493367[_0x3b8341 + _0x2b8a22] &&
                                _0x493367[_0x3b8341 + _0x2b8a22][_0xeee1e7(0x138)] ===
                                _0x443dab["field"] &&
                                _0x493367[_0x3b8341 + _0x2b8a22][_0xeee1e7(0x285)] ===
                                _0x443dab[_0xeee1e7(0x285)]
                            );
                        return ![];
                    });
                }
                const _0x5ce19e = _0x483aef(_0x3bcc12, all_data);
                _0x5ce19e ? $(this)[_0x538b12(0x29c)]() : $(this)[_0x538b12(0x1b7)]();
            }));
}
progressiveTarget[_0x1d142c(0x150)](_0x1d142c(0x1b7)),
    progressiveInput["on"](_0x1d142c(0x2be), function() {
        const _0x2f1706 = _0x1d142c,
            _0x263115 = $(this)["data"](_0x2f1706(0x2a3)),
            _0x3bc596 = $(this)[_0x2f1706(0x1b8)](),
            _0x44b80f = form[_0x2f1706(0x13e)](
                _0x2f1706(0x1b1) + _0x263115 + "\x22]"
            )[_0x2f1706(0x261)](_0x2f1706(0x12d));
        let _0x6b2375 = form[_0x2f1706(0x13e)](
                "[data-input-target=\x22" + _0x263115 + "\x22][data-input-reveal-value]"
            )[_0x2f1706(0x13f)](function() {
                const _0x2d7d1d = _0x2f1706;
                return (
                    $(this)[_0x2d7d1d(0x261)](_0x2d7d1d(0x12d))[_0x2d7d1d(0x298)]() ===
                    _0x3bc596["toLowerCase"]()
                );
            }),
            _0x34d261 = form["find"](_0x2f1706(0x1b1) + _0x263115 + _0x2f1706(0x291));
        form["find"](_0x2f1706(0x1b1) + _0x263115 + "\x22]")[_0x2f1706(0x150)](
                _0x2f1706(0x1a7)
            ),
            form[_0x2f1706(0x13e)](_0x2f1706(0x1b1) + _0x263115 + "\x22]")[
                _0x2f1706(0x21b)
            ](_0x2f1706(0x1a3));
        _0x3bc596 !== "" &&
            (_0x44b80f[_0x2f1706(0x298)]() === "*" && _0x3bc596 !== "" ?
                (_0x34d261[_0x2f1706(0x21b)](_0x2f1706(0x1a7)),
                    _0x34d261[_0x2f1706(0x150)](_0x2f1706(0x1a3))) :
                (_0x6b2375[_0x2f1706(0x21b)]("f-hide"),
                    _0x6b2375["addClass"](_0x2f1706(0x1a3))));

        function _0x2ed1f8(_0x59b31f) {
            const _0x1b3aa0 = _0x2f1706;
            _0x59b31f &&
                form["find"](_0x1b3aa0(0x222) + _0x59b31f + "\x22]")[
                    _0x1b3aa0(0x1b8)
                ]() !== "" &&
                form[_0x1b3aa0(0x13e)](_0x1b3aa0(0x222) + _0x59b31f + "\x22]")[
                    _0x1b3aa0(0x2b0)
                ]("input");
        }
        let _0x55d882 = form[_0x2f1706(0x13e)](
            _0x2f1706(0x1b1) + _0x263115 + "\x22]"
        )[_0x2f1706(0x13e)](_0x2f1706(0x24c))[_0x2f1706(0x261)](_0x2f1706(0x2a3));
        _0x2ed1f8(_0x55d882),
            form[_0x2f1706(0x13e)](_0x2f1706(0x2a5))[_0x2f1706(0x297)](function() {
                const _0x25e9b9 = _0x2f1706,
                    _0x28847f = $(this)[_0x25e9b9(0x261)](_0x25e9b9(0x2a3));
                form[_0x25e9b9(0x13e)]("[data-input-target=\x22" + _0x28847f + "\x22]")[
                        "removeClass"
                    ]("f-show"),
                    form[_0x25e9b9(0x13e)](_0x25e9b9(0x1b1) + _0x28847f + "\x22]")[
                        _0x25e9b9(0x150)
                    ]("f-hide");
            });
    });

function addClickClass() {
    const _0x3798a0 = _0x1d142c,
        _0x5c405c = $(this)[_0x3798a0(0x261)](_0x3798a0(0x281)),
        _0x42dc00 = $(this)[_0x3798a0(0x198)]("name");
    $(_0x3798a0(0x1b0) + _0x42dc00 + "\x22]")[_0x3798a0(0x15b)]()["removeClass"](_0x5c405c),
        $(this)["is"](":checked") &&
        $(this)[_0x3798a0(0x15b)]()[_0x3798a0(0x150)](_0x5c405c);
}
$("[data-click-addclass]")["on"](_0x1d142c(0x259), addClickClass);

function updateCounter(_0xff1d99) {
    const _0x5e30a2 = _0x1d142c;
    var _0x173e0c = new Date(),
        _0x35b923 = _0x173e0c[_0x5e30a2(0x1ba)](),
        _0x4028cd = btoa("counter"),
        _0x3f512a = btoa(_0x35b923[_0x5e30a2(0x1e1)]()),
        _0x336a57 = getCookie(_0x4028cd);
    !_0x336a57 || _0x336a57 !== _0x3f512a ?
        $[_0x5e30a2(0x14e)](_0x5e30a2(0x144), function() {
            const _0x5261e6 = _0x5e30a2;
            console[_0x5261e6(0x194)]("Counter\x20updated\x20successfully."),
                (document[_0x5261e6(0x1d1)] = _0x4028cd + "=" + _0x3f512a);
        })["fail"](function(_0x911960, _0x1c2cbc, _0x227728) {
            const _0x294624 = _0x5e30a2;
            console[_0x294624(0x21d)](_0x294624(0x168), _0x227728);
        }) :
        console[_0x5e30a2(0x194)](_0x5e30a2(0x1ae));
}

function getCookie(_0x5b31a9) {
    const _0x51ee8f = _0x1d142c;
    var _0x156c80 = null;
    if (document[_0x51ee8f(0x1d1)] && document[_0x51ee8f(0x1d1)] !== "") {
        var _0x3684bd = document["cookie"]["split"](";");
        for (
            var _0x4bf27d = 0x0; _0x4bf27d < _0x3684bd[_0x51ee8f(0x16e)]; _0x4bf27d++
        ) {
            var _0x1c58ce = _0x3684bd[_0x4bf27d][_0x51ee8f(0x2b3)]();
            if (
                _0x1c58ce[_0x51ee8f(0x245)](0x0, _0x5b31a9[_0x51ee8f(0x16e)] + 0x1) ===
                _0x5b31a9 + "="
            ) {
                _0x156c80 = decodeURIComponent(
                    _0x1c58ce[_0x51ee8f(0x245)](_0x5b31a9[_0x51ee8f(0x16e)] + 0x1)
                );
                break;
            }
        }
    }
    return _0x156c80;
}
updateCounter(),
    scrollTop(),
    cloneRemove(),
    cloneRemoveInput(),
    disableRadioQuickTap();
const formlyUrlParams = new URLSearchParams(window[_0x1d142c(0x1d8)]["search"]),
    formlySupportParam = formlyUrlParams[_0x1d142c(0x1cb)](_0x1d142c(0x2a6)),
    showButton = formlySupportParam === _0x1d142c(0x1ce),
    passIcon = _0x1d142c(0x2b9),
    failIcon = _0x1d142c(0x267);
let isScriptLoaded = !![],
    scriptLocation = _0x1d142c(0x2a7),
    isMultistepAttributePresent = !![],
    isMultistepOnFormElement = !![],
    areButtonsPresent = !![],
    isNextBtnOnSubmit = ![],
    isSubmitBtnOnSubmit = !![],
    isBackBtnOnSubmit = ![],
    formType = logicExtra ? _0x1d142c(0x131) : _0x1d142c(0x277),
    resultStatus = _0x1d142c(0x201),
    scriptSrcAdded = "";

function isElementPresent(_0x1b8c77, _0x1591a8) {
    const _0x30ac4e = _0x1d142c;
    return (
        document[_0x30ac4e(0x29a)](
            "[" + _0x1591a8 + "=\x22" + _0x1b8c77 + "\x22]"
        ) !== null
    );
}
isMultistepAttributePresent = isElementPresent("multistep", _0x1d142c(0x2ac));
const multistepForm = document[_0x1d142c(0x29a)](_0x1d142c(0x130)),
    formStepLength = multistepForm[_0x1d142c(0x1fd)](_0x1d142c(0x2b6))[
        _0x1d142c(0x16e)
    ];
isMultistepOnFormElement = multistepForm !== null;
const multistepContainer = document["querySelector"](_0x1d142c(0x1f2)),
    nextBtnExist = multistepContainer["querySelector"](_0x1d142c(0x28c)),
    backBtnExist = multistepContainer[_0x1d142c(0x29a)](_0x1d142c(0x28d)),
    submitBtnExist = multistepContainer[_0x1d142c(0x29a)](_0x1d142c(0x1ac));
(areButtonsPresent =
    nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null),
(isNextBtnOnSubmit =
    nextBtnExist &&
    nextBtnExist[_0x1d142c(0x248)]["toLowerCase"]() === _0x1d142c(0x2be)),
(isSubmitBtnOnSubmit =
    submitBtnExist &&
    submitBtnExist[_0x1d142c(0x248)][_0x1d142c(0x298)]() === "input" &&
    submitBtnExist["type"][_0x1d142c(0x298)]() === _0x1d142c(0x149)),
(isBackBtnOnSubmit =
    backBtnExist &&
    backBtnExist[_0x1d142c(0x248)][_0x1d142c(0x298)]() === _0x1d142c(0x2be));
const checkPowerup = (_0x2aef46) =>
    document[_0x1d142c(0x29a)](_0x2aef46) !== null,
    progressBarAttr = checkPowerup("[data-form=\x22progress\x22]"),
    progressIndicatorAttr = checkPowerup(
        "[data-form=\x22progress-indicator\x22]"
    ),
    customProgressAttr = checkPowerup(_0x1d142c(0x242)),
    cardDivAttr = checkPowerup("[data-card=\x22true\x22]"),
    currentStepAttr = checkPowerup(_0x1d142c(0x19f)),
    totalStepAttr = checkPowerup(_0x1d142c(0x181)),
    enterAttr = checkPowerup(_0x1d142c(0x152)),
    submitAttr = checkPowerup(_0x1d142c(0x2c0)),
    radioSkipAttr = checkPowerup(_0x1d142c(0x1d7)),
    customCheckboxAttr = checkPowerup("[data-checkbox]"),
    recapatchaAttr = checkPowerup(_0x1d142c(0x1c1)),
    dataAnswerOnFirstStep =
    steps["eq"](0x0)[_0x1d142c(0x13e)](_0x1d142c(0x20e))[_0x1d142c(0x261)](_0x1d142c(0x1a5)) === "" ||
    !steps["eq"](0x0)[_0x1d142c(0x13e)](_0x1d142c(0x20e))[_0x1d142c(0x261)]("answer");
let dataGoToDataAnswerOnFormStep = "",
    dataAnswerAndDataGoToPairs = "",
    dataAnswerIsOnDataCard = "";
steps[_0x1d142c(0x297)]((_0x505873) => {
    const _0x2e97d6 = _0x1d142c,
        _0x435bfd = steps["eq"](_0x505873);
    _0x435bfd["data"](_0x2e97d6(0x1a5)) &&
        _0x435bfd["data"](_0x2e97d6(0x2b5)) &&
        (dataGoToDataAnswerOnFormStep +=
            _0x2e97d6(0x16d) + (_0x505873 + 0x1) + "</div>");
    const _0x251c80 = _0x435bfd[_0x2e97d6(0x13e)](_0x2e97d6(0x20e));
    _0x251c80[_0x2e97d6(0x16e)] &&
        ((dataAnswerAndDataGoToPairs +=
                "<div\x20class=\x22f-text_attribute-title\x22>Step\x20" +
                (_0x505873 + 0x1) +
                _0x2e97d6(0x217)),
            _0x251c80[_0x2e97d6(0x297)]((_0x316430, _0x182697) => {
                const _0x17ebaa = _0x2e97d6,
                    _0x4ecf4c = $(_0x182697);
                (dataAnswerAndDataGoToPairs +=
                    _0x17ebaa(0x234) + _0x4ecf4c[_0x17ebaa(0x261)]("answer") + "\x22"),
                _0x4ecf4c[_0x17ebaa(0x261)]("go-to") &&
                    (dataAnswerAndDataGoToPairs +=
                        "\x20|\x20<strong>data-go-to\x20</strong>\x20=\x22" +
                        _0x4ecf4c[_0x17ebaa(0x261)](_0x17ebaa(0x2b5)) +
                        "\x22"),
                    (dataAnswerAndDataGoToPairs += _0x17ebaa(0x217));
            })),
        steps["eq"](_0x505873)[_0x2e97d6(0x261)]("card") &&
        (steps["eq"](_0x505873)[_0x2e97d6(0x261)](_0x2e97d6(0x1a5)) ||
            steps["eq"](_0x505873)[_0x2e97d6(0x13e)](_0x2e97d6(0x20e))[_0x2e97d6(0x261)](_0x2e97d6(0x1a5))) &&
        (dataAnswerIsOnDataCard +=
            "<div>Step\x20" + (_0x505873 + 0x1) + _0x2e97d6(0x217));
});
(!isScriptLoaded ||
    scriptLocation !== _0x1d142c(0x2a7) ||
    !isMultistepAttributePresent ||
    !isMultistepOnFormElement ||
    !areButtonsPresent ||
    isNextBtnOnSubmit ||
    !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit) &&
(resultStatus = "FAIL");

function isScriptUrlMatch(_0x393ddb, _0x3fe898) {
    const _0x511b50 = _0x1d142c;
    for (
        var _0x2955bc = 0x0; _0x2955bc < _0x3fe898[_0x511b50(0x16e)]; _0x2955bc++
    ) {
        if (_0x393ddb[_0x511b50(0x26c)](_0x3fe898[_0x2955bc])) return !![];
    }
    return ![];
}
var keywordsToCheck = [
        _0x1d142c(0x264),
        _0x1d142c(0x205),
        "https://slater.app/4908/8862.js",
    ],
    scripts = document["getElementsByTagName"]("script"),
    matchedScripts = [];
for (var i = 0x0; i < scripts[_0x1d142c(0x16e)]; i++) {
    var scriptSrcs = scripts[i][_0x1d142c(0x139)];
    isScriptUrlMatch(scriptSrcs, keywordsToCheck) &&
        matchedScripts[_0x1d142c(0x1dc)](scriptSrcs);
}
if (matchedScripts[_0x1d142c(0x16e)] > 0x0) {
    scriptSrcAdded = matchedScripts;
    const script = document[_0x1d142c(0x29a)](
        "script[src=\x22" + scriptSrcAdded + "\x22]"
    );
    script &&
        (scriptLocation =
            script["parentNode"]["tagName"] === _0x1d142c(0x136) ?
            _0x1d142c(0x19d) :
            _0x1d142c(0x268));
} else scriptSrcAdded = _0x1d142c(0x2a0) + failIcon;
const newElement = document["createElement"]("div"),
    newStyle = document[_0x1d142c(0x1fb)](_0x1d142c(0x227));
(newStyle[_0x1d142c(0x182)] = _0x1d142c(0x208)),
document[_0x1d142c(0x2a7)][_0x1d142c(0x141)](newStyle);
showButton && document[_0x1d142c(0x24b)][_0x1d142c(0x141)](newElement);
newElement["innerHTML"] =
    _0x1d142c(0x280) +
    (!logicExtra ? passIcon : failIcon) +
    _0x1d142c(0x154) +
    (quiz ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20FormlyQuiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (weightedSelection ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text-regular\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20Formly\x20Weighted\x20Quiz\x20enabled<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Script\x20Info</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<strong\x20class=\x22f-text_bold\x22>Script\x20URL:\x20</strong>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_script\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    scriptSrcAdded +
    _0x1d142c(0x174) +
    (scriptLocation === _0x1d142c(0x2a7) ?
        "<div\x20class=\x22f-text_script\x22>Inside\x20&lt;head&gt;\x20tag<br/></div>" :
        _0x1d142c(0x270)) +
    _0x1d142c(0x162) +
    (formStepLength ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Multistep\x20form\x20attribute\x20is\x20on\x20Form\x20element\x20and\x20not\x20on\x20Form\x20Block\x20element</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_attribute\x20f-text_attribute-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>2.\x20Form\x20Steps:\x20data-form=step</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (formStepLength > 0x0 ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Number\x20of\x20steps:\x20" +
    formStepLength +
    _0x1d142c(0x14c) +
    (nextBtnExist ? passIcon : failIcon) +
    _0x1d142c(0x18c) +
    (isNextBtnOnSubmit ? failIcon : passIcon) +
    _0x1d142c(0x1df) +
    (backBtnExist ? passIcon : failIcon) +
    _0x1d142c(0x17b) +
    (isBackBtnOnSubmit ? failIcon : passIcon) +
    _0x1d142c(0x282) +
    (submitBtnExist ? passIcon : failIcon) +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div>Submit\x20button\x20attribute\x20IS\x20on\x20Form\x20Submit\x20Button</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (isSubmitBtnOnSubmit ? failIcon : passIcon) +
    _0x1d142c(0x1f8) +
    (progressBarAttr && progressIndicatorAttr ?
        _0x1d142c(0x1db) + passIcon + _0x1d142c(0x1bc) :
        "") +
    _0x1d142c(0x191) +
    (customProgressAttr ? _0x1d142c(0x13c) + passIcon + _0x1d142c(0x1bc) : "") +
    _0x1d142c(0x191) +
    (cardDivAttr ?
        _0x1d142c(0x12f) +
        passIcon +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
        "") +
    _0x1d142c(0x191) +
    (currentStepAttr ? _0x1d142c(0x218) + passIcon + _0x1d142c(0x1bc) : "") +
    _0x1d142c(0x191) +
    (totalStepAttr ? _0x1d142c(0x175) + passIcon + _0x1d142c(0x1bc) : "") +
    _0x1d142c(0x191) +
    (enterAttr ?
        "\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>Press\x20&quot;Enter\x20&quot;To\x20Progress</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        passIcon +
        _0x1d142c(0x1bc) :
        "") +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (submitAttr ? _0x1d142c(0x1a2) + passIcon + _0x1d142c(0x1bc) : "") +
    _0x1d142c(0x191) +
    (radioSkipAttr ? _0x1d142c(0x243) + passIcon + _0x1d142c(0x1bc) : "") +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (customCheckboxAttr ?
        _0x1d142c(0x263) +
        passIcon +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
        "") +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
    (recapatchaAttr ?
        _0x1d142c(0x2af) +
        passIcon +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
        "") +
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
    (logicExtra ?
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-section-wrapper\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-title\x22>Formly\x20Logic</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_type\x20_1\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-div_title\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22f-text_attribute-title\x22>data-answer=&quot;&quot;\x20on\x20first\x20step-wrapper</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20" +
        (dataAnswerOnFirstStep ? passIcon : failIcon) +
        _0x1d142c(0x210) +
        (dataGoToDataAnswerOnFormStep !== "" ?
            _0x1d142c(0x207) +
            dataGoToDataAnswerOnFormStep +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
            "") +
        _0x1d142c(0x237) +
        dataAnswerAndDataGoToPairs +
        _0x1d142c(0x1fc) +
        (dataAnswerIsOnDataCard !== "" ?
            _0x1d142c(0x12e) +
            dataAnswerIsOnDataCard +
            "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>" :
            "") +
        _0x1d142c(0x128) :
        "") +
    _0x1d142c(0x132);

function openNav() {
    const _0x376231 = _0x1d142c;
    console["log"](_0x376231(0x247)),
        (document[_0x376231(0x206)]("f-mySidenav")[_0x376231(0x227)][
            _0x376231(0x12b)
        ] = _0x376231(0x1c5));
}

function closeNav() {
    const _0x242cc4 = _0x1d142c;
    document[_0x242cc4(0x206)](_0x242cc4(0x279))[_0x242cc4(0x227)]["transform"] =
        _0x242cc4(0x215);
}