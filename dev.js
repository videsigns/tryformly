// variables
let x = 0;
let lastStep = 0;
let curStep = 0;
let countCard = true;
let fill = false;
let inputFilled = true;
let skip;
let urlFilled = true;
let selectFilled = true;
let radioFilled = true;
let dateFilled = true;
let timeFilled = true;
let checkboxFilled = true;
let emailFilled = true;
let textareaFilled = true;
let telFilled = true;
let passwordFilled = true;
let fileFilled = true;
let numFilled = true;
let answer = "";
let selections = [];
let selection = [];
let empReqInput = [];
let empReqUrl = [];
let empReqDate = [];
let empReqTime = [];
let empReqRadio = [];
let empReqSelect = [];
let empReqTextarea = [];
let empReqFile = [];
let empReqPassword = [];
let empReqNum = [];
let empReqTel = [];
let textareaLength = 0;
let textInputLength = 0;
let emailInputLength = 0;
let selectInputLength = 0;
let checkboxInputLength = 0;
let filledInput = [];
let savedFilledInput = [];
let progress = 0;
let skipTo = 0;
let next = false;
let back = false;
let selArr = [];
let selString = [];
let emptyInput = 0;
let selTotal = 0;
let searchQ = [];
let domainAllowed = true;
let dom = [];
let successCard = "";
let redirectTo = "";
let totalSteps = 0;
let checkCount = 0;
let maxCheckCount = 0;
let newTab = true;
let unfilledArr = [];
let notRobot = true;
let all_data = [];
var ogCloneArr = [];

// Dom Elements
let form = $('[data-form="multistep"]');
let steps = $('[data-form="step"]');
let progressbarClone = $('[data-form="progress-indicator"]').clone();
let progressbar;
let weightedSelection = $("[data-weighted-selection]").data(
    "weighted-selection"
);
let weightedSelectionRange = $("[data-weighted-selection-range]").data(
    "weighted-selection-range"
);
const percentageBar = $('[data-form="percentage-bar"]');
const percentageIndicator = $('[data-form="percentage-text"]');
let selectMultiple = $("[data-select-multiple]").data("select-multiple");
let customError = $("[data-custom-error-message]").data("custom-error-message");
let reinitIX = $("[data-reinit]").data("reinit");
let memory = $("[data-memory]").data("memory");
let quiz = $("[data-quiz]").data("quiz");
const urlFormly = new URL(window.location.href);
let _params = $("[data-query-param]").data("query-param");
let logicExtra = $('[data-form="multistep"]').data("logic-extra");
let oldSubmitText = $('[data-form="submit-btn"]').val();
let oldResetText = $('[data-btn="reset"]').text();
let formReset = $('[data-form="multistep"]').data("reset");
let resetDelay = $("[data-reset-delay]").data("reset-delay") ?
    $("[data-reset-delay]").data("reset-delay") :
    2000;
let redirectDelay = $("[data-redirect-delay]").data("redirect-delay") ?
    $("[data-redirect-delay]").data("redirect-delay") :
    100;
let phoneFormat = $('[data-form="multistep"]').data("phone-validation");
let scrollToTop = $('[data-form="multistep"]').data("scroll-top");
let trackLastStep = $("[data-last-step]").data("last-step");
let conditionalResult =
    $("[data-conditional-result]").data("conditional-result") === "AND";
let scrollTopOffset = parseInt(
    $('[data-form="multistep"]').data("scroll-top-offset")
);
const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
savedFilledInput = JSON.parse(localStorage.getItem("filledInput"));
formlyLastStep = JSON.parse(localStorage.getItem("formlyLastStep"));
formlyLastStepAnswer = JSON.parse(localStorage.getItem("formlyLastStepAnswer"));
let paramUrl = $('[data-form="multistep"]').data("param-analytics");
const progressiveTarget = $('[data-form="multistep"]').find(
    "[data-input-target]"
);
const progressiveInput = $('[data-form="multistep"]').find(
    "[data-input-reveal]"
);
const multiSelections = $('[data-form="multistep"]').data("multiple-results");

// get the last step
if (trackLastStep) {
    if (formlyLastStep > x) {
        x = formlyLastStep;
    }

    if (formlyLastStepAnswer) {
        selections = formlyLastStepAnswer;
    }
}

// set percentage bar to 0%
percentageBar.css("width", "0%");

// get the original clone element
$("[data-clone]").each(function() {
    ogCloneArr.push({
        name: $(this).data("clone"),
        element: $(this).clone(true),
        display: $(`[data-display="${$(this).data("clone")}"]`)
            .eq(0)
            .clone(true),
    });
});

// Set the page load time in sessionStorage
const setPageLoadTime = () => {
    localStorage.setItem("pageLoadTime", Date.now().toString());
};

setPageLoadTime(); // Set page load time when the script runs

//recaptcha
if ($("div.g-recaptcha").length > 0) {
    notRobot = false;
}

function recaptcha(e) {
    notRobot = true;
}

// update next variable for validation on data card
if (
    $(steps[x]).data("card") ||
    $(steps[x]).find(".active-answer-card").data("card")
) {
    next = true;
}

if ($("[data-count-card]").length > 0) {
    countCard = $("[data-count-card]").data("count-card");
}
$('[data-text="error-message"]').hide();
$(progressbarClone).removeClass("current");
$('[data-form="progress"]').children().remove();

$('[data-form="submit-btn"]').hide();
//memberstack
$('[data-form-ms="submit-btn"]').hide();

steps.each(function() {
    $('[data-form="progress"]').append(progressbarClone.clone(true, true));
});

$("[data-input-field]").hide();

if (countCard) {
    curStep = x + 1;
    totalSteps = steps.length;
    $('[data-text="total-steps"]').text(totalSteps);
} else {
    $(steps[x]).data("card") ? (curStep = curStep + 0) : (curStep = curStep + 1);
    totalSteps = $('[data-form="step"]:not([data-card="true"])').length;
    $('[data-text="total-steps"]').text(totalSteps);

    $('[data-form="step"][data-card]').each(function() {
        $($('[data-form="progress-indicator"]')[$(this).index()]).hide();
    });
}

progressbar = $('[data-form="progress"]').children();
$('[data-form="progress-indicator"]').on("click", clickableIndicator);

//console.log(curStep)
$('[data-text="current-step"]').text(curStep);
steps.hide();
$("[data-success-card]").hide();

$('[data-form="next-btn"][type="submit"]').each(function() {
    $(this).attr("type", "button");
});

function getParams() {
    urlFormly.searchParams.forEach(function(val, key) {
        searchQ.push({ val, key });
    });
}

function getSafe(fn, defaultVal) {
    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

function phoneAutoFormat(format) {
    var previousInput = "";

    return function(phoneNumber) {
        var formattedInput = "";
        var numericInput = phoneNumber.replace(/\D/g, "");

        var inputIndex = 0;
        var formatIndex = 0;

        while (inputIndex < numericInput.length && formatIndex < format.length) {
            if (format[formatIndex] === "x") {
                formattedInput += numericInput[inputIndex];
                inputIndex++;
            } else {
                formattedInput += format[formatIndex];
            }

            formatIndex++;
        }

        if (phoneNumber.length < previousInput.length) {
            var remainingFormat = format.slice(formatIndex);
            formattedInput += remainingFormat.replace(/x/g, "");
        }

        previousInput = formattedInput;
        return formattedInput;
    };
}

function validateURL(url) {
    if (urlPattern.test(url)) {
        return true;
    } else {
        return false;
    }
}

if (quiz) {
    steps.each(function() {
        $(this).children().attr("data-radio-skip", true);
        $(this).children().attr("data-radio-delay", 250);
    });
}

function disableBtn(e) {
    fill = false;
    if (!customError) {
        //next button style
        $('[data-form="next-btn"]').css({
            opacity: "0.4",
            "pointer-events": "none",
        });
        $('[data-form="next-btn"]').addClass("disabled");

        //submit btn style
        $('[data-form="submit-btn"]').css({
            opacity: "0.4",
            "pointer-events": "none",
        });
        $('[data-form="submit-btn"]').addClass("disabled");

        //submit button to work with memberstack
        $('[data-form-ms="submit-btn"]').css({
            opacity: "0.4",
            "pointer-events": "none",
        });
        $('[data-form-ms="submit-btn"]').addClass("disabled");
    }
}

function enableBtn() {
    fill = true;
    //next button style
    $('[data-form="next-btn"]').css({
        "pointer-events": "auto",
        opacity: "1",
    });
    $('[data-form="next-btn"]').removeClass("disabled");
    //submit btn style
    $('[data-form="submit-btn"]').css({
        "pointer-events": "auto",
        opacity: "1",
    });
    $('[data-form="submit-btn"]').removeClass("disabled");

    //submit button to work with memberstack
    $('[data-form-ms="submit-btn"]').css({
        "pointer-events": "auto",
        opacity: "1",
    });
    $('[data-form-ms="submit-btn"]').removeClass("disabled");
}

function saveLastAnswer(selection) {
    // console.log(selection);
    localStorage.removeItem("formlyLastStepAnswer");
    localStorage.setItem("formlyLastStepAnswer", JSON.stringify(selection));
}

function saveFilledInput() {
    $('form[data-form="multistep"] :input')
        .not('[type="submit"]')
        .each(function() {
            if (
                $(this).attr("type") === "checkbox" ||
                $(this).attr("type") === "radio"
            ) {
                if ($(this).prop("checked")) {
                    if (filledInput.some((e) => e.inputName === $(this).attr("name"))) {
                        filledInput = filledInput.filter(
                            (e) => e.inputName !== $(this).attr("name")
                        );

                        if ($(this).val() !== "") {
                            filledInput.push({
                                inputName: $(this).attr("name"),
                                value: $(this).val(),
                            });
                        }
                    } else {
                        if ($(this).val() !== "") {
                            filledInput.push({
                                inputName: $(this).attr("name"),
                                value: $(this).val(),
                            });
                        }
                    }
                }
            } else {
                if (filledInput.some((e) => e.inputName === $(this).attr("name"))) {
                    filledInput = filledInput.filter(
                        (e) => e.inputName !== $(this).attr("name")
                    );

                    if ($(this).val() !== "") {
                        filledInput.push({
                            inputName: $(this).attr("name"),
                            value: $(this).val(),
                        });
                    }
                } else {
                    if ($(this).val() !== "") {
                        filledInput.push({
                            inputName: $(this).attr("name"),
                            value: $(this).val(),
                        });
                    }
                }
            }
        });

    // last step feature
    if (trackLastStep) {
        // console.log("last step");
        if (formlyLastStep > x) {
            lastStep = formlyLastStep;
        } else {
            lastStep = x;
        }
        localStorage.removeItem("formlyLastStep");
        localStorage.setItem("formlyLastStep", lastStep);
    }
    localStorage.removeItem("filledInput");
    localStorage.setItem("filledInput", JSON.stringify(filledInput));
    //console.log(savedFilledInput)
}

function scrollTop() {
    //scroll to top of page
    if (scrollToTop) {
        $("html, body").animate({
                scrollTop: $('[data-form="multistep"]').offset().top - scrollTopOffset,
            },
            1000
        );
    }
    //scroll to top of form
    //$('[data-form="multistep"]').scrollTop(0);
}

// Function to update the URL with the new step parameter
function updateURL(stepValue) {
    // Get the current URL
    var currentUrl = window.location.href;
    // Create a URLSearchParams object to easily manipulate query parameters
    var searchParams = new URLSearchParams(window.location.search);
    // Update the 'step' parameter value
    searchParams.set("step", stepValue);
    // Construct the new URL with updated parameters
    var newUrl = currentUrl.split("?")[0] + "?" + searchParams.toString();
    // Update the URL without redirecting
    window.history.pushState({}, "", newUrl);
}

function updateStep() {
    scrollTop();
    skip = false;
    //selections = []
    $('[data-form="custom-progress-indicator"]').removeClass("disabled");
    //custom clickable progress indicator
    if ($("[data-clickable]").data("clickable")) {
        //console.log('clickable indicator')
        steps.find(":input[required]").each(function() {
            $(
                $('[data-form="custom-progress-indicator"]')[
                    $(this).parents('[data-form="step"]').index()
                ]
            );
            if ($(this).val() === "") {
                emptyInput++;
                //$($('[data-form="custom-progress-indicator"]')[$(this).parents('[data-form="step"]').index()]).append('*')
            }
        });
        if (emptyInput > 0) {
            $('input[type="submit"]').addClass("disabled");
        } else {
            $('input[type="submit"]').removeClass("disabled");
        }
    }

    $('[data-form="custom-progress-indicator"]').removeClass("current");
    $('[data-form="custom-progress-indicator"]').addClass("disabled");
    $($('[data-form="custom-progress-indicator"]')[x]).addClass("current");

    //conditional logic
    selection = selections.filter((y) => y.step === x - 1);
    if (next) {
        x = getSafe(() => selection[0]["skipTo"]) ?
            parseInt(getSafe(() => selection[0]["skipTo"])) :
            x;
        // console.log("test", x);
    }
    $("[data-answer]").hide();

    //hide unhide steps
    steps.hide();
    if (reinitIX === true) {
        window.Webflow.destroy();
    }

    $(progressbar).removeClass("current");

    for (i = 0; i <= x; i++) {
        if (countCard) {
            $(progressbar[i]).addClass("current");
        } else {
            if (!$(steps[i]).data("card")) {
                $(progressbar[i]).addClass("current");
            }
        }
    }

    if (reinitIX === true) {
        window.Webflow && window.Webflow.require("ix2").init();
        document.dispatchEvent(new Event("readystatechange"));
        $(steps[x]).show();
    } else {
        $(steps[x]).fadeIn("slow");
    }

    $(".active-answer-card").removeClass("active-answer-card");

    if (x === 0 && !$(steps[x]).data("card")) {
        $(steps[x]).find(`[data-answer]`).show();
        $(steps[x]).find(`[data-answer]`).addClass("active-answer-card");
    }

    if (selection.length > 0) {
        $(steps[x]).find(`[data-answer="${selection[0].selected}"]`).show();
        $(steps[x])
            .find(`[data-answer="${selection[0].selected}"]`)
            .addClass("active-answer-card");
    } else {
        $(steps[x]).find(`[data-answer="${answer}"]`).show();
        $(steps[x])
            .find(`[data-answer="${answer}"]`)
            .addClass("active-answer-card");
    }

    //hide unhide button
    if (x === 0) {
        $('[data-form="back-btn"]').hide();
        $('[data-form="next-btn"]').show();
        $('[data-form="submit-btn"]').hide();
    } else if (
        x === steps.length - 1 ||
        $(steps[x]).find('[data-form="submit"]:visible').length > 0
    ) {
        $('[data-form="next-btn"]').hide();
        if (
            $(steps[x])
            .find('[data-form="submit-btn"][data-submit-show]')
            .data("submit-show")
        ) {
            $(steps[x]).find('[data-form="submit-btn"][data-submit-show]').show();
        } else if ($('[data-form="next-btn"]').data("submit-show")) {
            $('[data-form="next-btn"]').show();
        }
        $('[data-form="submit-btn"]').show();
        $('[data-form-ms="submit-btn"]').show();
        $('[data-form="back-btn"]').show();
    } else {
        $('[data-form="next-btn"]').show();
        $('[data-form="back-btn"]').show();
        $('[data-form="submit-btn"]').hide();
        //for memberstack
        $('[data-form-ms="submit-btn"]').hide();
    }

    //focus first input in every step
    $($(steps[x]).find("input[autofocus]")[0]).focus();
    $($(steps[x]).find("textarea[autofocus]")[0]).focus();

    validation();

    for (idx = 0; idx <= x; idx++) {
        $($('[data-form="custom-progress-indicator"]')[idx]).removeClass(
            "disabled"
        );
    }

    // for analytics
    if (paramUrl) {
        updateURL(curStep);
    }

    // for percentage indicator
    // percen
    // console.log(progressPercentage());
    if (percentageIndicator) {
        percentageIndicator.text(progressPercentage());
    }
    if (percentageBar) {
        percentageBar.css("width", `${progressPercentage()}%`);
    }
}

function validateEmail(email, blockDomain, inputName) {
    let domainEntered = email.includes("@") ?
        email.split("@")[1].split(".")[0] :
        [];
    dom = [];
    if (blockDomain !== undefined) {
        blockDomain.split(",").forEach(function(x) {
            if (x.includes(domainEntered)) {
                dom.push(domainEntered);
            }
        });
    }

    if (dom.length > 0) {
        domainAllowed = false;
    } else {
        domainAllowed = true;
    }

    var emailReg = /^([\w-\.+]+@([\w-]+\.)+[\w-]{2,20})?$/;
    // console.log(emailReg.test(email));
    if (!emailReg.test(email) || !domainAllowed) {
        emailFilled = false;
        unfilledArr.push({ input: inputName });
    } else {
        emailFilled = true;
    }
}

function phoneValidation(tel, inputLength, minChar) {
    if (phoneFormat) {
        if (inputLength >= minChar) {
            return true;
        } else {
            return false;
        }
    } else {
        if (inputLength >= minChar) {
            return true;
        }
    }
}

function validation() {
    //conditional logic
    if ($(steps[x]).data("card")) {
        enableBtn();
    }
    unfilledArr = [];
    inputFilled = true;
    radioFilled = true;
    checkboxFilled = true;
    numFilled = true;
    fileFilled = true;
    dateFilled = true;
    selectFilled = true;
    textareaFilled = true;
    telFilled = true;
    urlFilled = true;
    timeFilled = true;
    emailFilled = true;
    emptyInput = 0;
    empReqInput = [];
    empReqTime = [];
    empReqTel = [];
    empReqUrl = [];
    empReqDate = [];
    empReqSelect = [];
    empReqTextarea = [];
    empReqNum = [];
    empReqFile = [];
    empReqRadio = [];

    textareaLength = $(steps[x]).find("textarea[required]:visible").length;
    textInputLength = $(steps[x]).find(
        'input[type="text"][required]:visible'
    ).length;
    selectInputLength = $(steps[x]).find("select[required]:visible").length;
    emailInputLength = $(steps[x]).find('input[type="email"]:visible').length;
    checkboxInputLength = $(steps[x]).find(
        'input[type="checkbox"]:visible'
    ).length;

    if (textInputLength > 0 || selectInputLength > 0 || textareaLength > 0) {
        disableBtn();
    } else {
        enableBtn();
    }

    checkCount = $(steps[x]).data("checkbox") ?
        $(steps[x]).data("checkbox") :
        $(steps[x]).find("[data-checkbox]").length > 0 ?
        $(steps[x]).find("[data-checkbox]").data("checkbox") :
        0;
    maxCheckCount = $(steps[x]).data("max-checkbox") ?
        $(steps[x]).data("max-checkbox") :
        $(steps[x]).find("[data-max-checkbox]").length > 0 ?
        $(steps[x]).find("[data-max-checkbox]").data("max-checkbox") :
        0;

    if (!logicExtra) {
        // Get all checkbox inputs within steps[x]
        let checkboxInputs = $(steps[x]).find(':input[type="checkbox"]');
        // Filter required checkboxes
        let requiredCheckboxes = checkboxInputs.filter("[required]");
        // Filter checked checkboxes
        let checkedCheckboxes = checkboxInputs.filter(":checked");
        // Filter required checked checkboxes
        let requiredCheckedCheckboxes = requiredCheckboxes.filter(":checked");

        // Check if there are any checkbox inputs
        if (checkboxInputs.length > 0) {
            // Check if checkCount is "*", or if checkCount is greater than the total number of checkboxes
            if (checkCount === "*" || checkCount > checkboxInputs.length) {
                // Iterate over each checkbox input
                checkboxInputs.each(function() {
                    // Check if the current checkbox is checked
                    if ($(this).is(":checked")) {
                        // Set checkboxFilled to true and reset error message for the checkbox
                        checkboxFilled = true;
                        resetInputErrorMessage($(this).attr("name"));
                    } else {
                        // Set checkboxFilled to false and add the name of unchecked checkbox to unfilledArr
                        checkboxFilled = false;
                        unfilledArr.push({ input: $(this).attr("name") });
                    }
                });
            } else {
                // If the number of checked checkboxes is greater than or equal to checkCount
                if (checkedCheckboxes.length >= checkCount) {
                    // If there are required checkboxes
                    if (requiredCheckboxes.length > 0) {
                        // If the number of required checkboxes equals the number of checked checkboxes
                        if (
                            requiredCheckboxes.length === requiredCheckedCheckboxes.length
                        ) {
                            // Set checkboxFilled to true and reset error message for the first required checkbox
                            checkboxFilled = true;
                            resetInputErrorMessage(requiredCheckboxes.first().attr("name"));
                        } else {
                            // Set checkboxFilled to false and add the name of unchecked required checkboxes to unfilledArr
                            checkboxFilled = false;
                            requiredCheckboxes.not(":checked").each(function() {
                                console.log($(this).attr("name"));
                                unfilledArr.push({ input: $(this).attr("name") });
                            });
                        }
                    } else {
                        // If maxCheckCount is defined and the number of checked checkboxes is less than maxCheckCount
                        if (maxCheckCount > checkedCheckboxes.length) {
                            // Enable all checkboxes
                            $(steps[x])
                                .find('input[type="checkbox"]')
                                .prop("disabled", false);
                            // Remove 'disabled' class from all checkbox labels
                            $(steps[x])
                                .find('input[type="checkbox"]')
                                .parent("label")
                                .removeClass("disabled");
                        } else if (maxCheckCount > 0) {
                            //Disable unchecked checkboxes
                            $(steps[x])
                                .find('input[type="checkbox"]:not(:checked)')
                                .parent("label")
                                .addClass("disabled");
                            $(steps[x])
                                .find('input[type="checkbox"]:not(:checked)')
                                .prop("disabled", true);
                            requiredCheckboxes.not(":checked").each(function() {
                                unfilledArr.push({ input: $(this).attr("name") });
                            });
                        }
                    }
                } else {
                    if (checkCount > 0) {
                        // Set checkboxFilled to false and add the name of unchecked required checkboxes to unfilledArr
                        checkboxFilled = false;
                        requiredCheckboxes.not(":checked").each(function() {
                            unfilledArr.push({ input: $(this).attr("name") });
                        });
                        // Add the name of the first checkbox input to unfilledArr
                        unfilledArr.push({ input: checkboxInputs.first().attr("name") });
                    }
                }
            }
        }

        $(steps[x])
            .find("input:radio[required]")
            .each(function(i) {
                var name = $(this).attr("name");
                //console.log(name)
                if ($(`input:radio[name="${name}"]:checked`).length == 0) {
                    if (!empReqRadio.find((y) => y.input === i)) {
                        empReqRadio.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                } else {
                    empReqRadio = empReqRadio.filter((y) => y.input !== i);
                }

                if (empReqRadio.length === 0) {
                    radioFilled = true;
                } else {
                    radioFilled = false;
                }
            });

        $(steps[x])
            .find(':input[type="text"][required]')
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqInput = empReqInput.filter((y) => y.input !== i);
                } else {
                    if (!empReqInput.find((y) => y.input === i)) {
                        empReqInput.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqInput.length === 0) {
                    inputFilled = true;
                } else {
                    inputFilled = false;
                }
            });

        ////////////////////////////password input validation/////////////////////////////////////
        $(steps[x])
            .find(':input[type="password"][required]')
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqPassword = empReqPassword.filter((y) => y.input !== i);
                } else {
                    if (!empReqPassword.find((y) => y.input === i)) {
                        empReqPassword.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqPassword.length === 0) {
                    passwordFilled = true;
                } else {
                    passwordFilled = false;
                }
            });

        ////////////////////////////url input validation/////////////////////////////////////
        $(steps[x])
            .find(':input[type="url"][required]')
            .each(function(i) {
                let urlLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && urlLength >= minChar) {
                    empReqUrl = empReqUrl.filter((y) => y.input !== i);
                } else {
                    if (!empReqTime.find((y) => y.input === i)) {
                        empReqUrl.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqUrl.length === 0 && validateURL($(this).val())) {
                    urlFilled = true;
                    // console.log(timeFilled);
                } else {
                    urlFilled = false;
                }
            });

        /////////////////// Time Validation /////////////////////
        $(steps[x])
            .find(':input[type="time"][required]')
            .each(function(i) {
                let timeLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && timeLength >= minChar) {
                    empReqTime = empReqTime.filter((y) => y.input !== i);
                } else {
                    if (!empReqTime.find((y) => y.input === i)) {
                        empReqTime.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqTime.length === 0) {
                    timeFilled = true;
                    // console.log(urlFilled);
                } else {
                    timeFilled = false;
                }
            });

        /////////////////// Date Validation /////////////////////
        $(steps[x])
            .find(':input[type="date"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    empReqDate = empReqDate.filter((y) => y.input !== i);
                } else {
                    if (!empReqDate.find((y) => y.input === i)) {
                        empReqDate.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqDate.length === 0) {
                    dateFilled = true;
                } else {
                    dateFilled = false;
                }
            });

        /////////////////// Telephone iput Validation /////////////////////
        $(steps[x])
            .find(':input[type="tel"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    let inputLength = $(this).val().length;
                    let minChar = $(this).data("min-character") ?
                        $(this).data("min-character") :
                        0;

                    if ($(this).data("phone-autoformat")) {
                        var formatPhone = phoneAutoFormat($(this).data("phone-autoformat"));
                        $(this).val(formatPhone($(this).val()));
                    }

                    if (phoneValidation($(this).val(), inputLength, minChar)) {
                        empReqTel = empReqTel.filter((y) => y.input !== i);
                        // console.log(empReqTel);
                    } else {
                        empReqTel.push({ input: i });
                    }
                } else {
                    if (!empReqTel.find((y) => y.input === i)) {
                        empReqTel.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqTel.length === 0) {
                    telFilled = true;
                } else {
                    telFilled = false;
                }
            });

        /////////////////// File Validation /////////////////////
        $(steps[x])
            .find(':input[type="file"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    empReqFile = empReqFile.filter((y) => y.input !== i);
                } else {
                    if (!empReqFile.find((y) => y.input === i)) {
                        empReqFile.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqFile.length === 0) {
                    fileFilled = true;
                } else {
                    fileFilled = false;
                }
            });

        /////////////////// Number Validation /////////////////////
        $(steps[x])
            .find(':input[type="number"][required]')
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqNum = empReqNum.filter((y) => y.input !== i);
                } else {
                    if (!empReqNum.find((y) => y.input === i)) {
                        empReqNum.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqNum.length === 0) {
                    numFilled = true;
                } else {
                    numFilled = false;
                }
            });

        /////////////////// Select Validation /////////////////////
        $(steps[x])
            .find("select[required]")
            .each(function(i) {
                let selVal = $(this).val();
                if (selVal === "") {
                    selVal = null;
                }
                if (selVal != null) {
                    empReqSelect = empReqSelect.filter((y) => y.input !== i);
                } else {
                    if (!empReqSelect.find((y) => y.input === i)) {
                        empReqSelect.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqSelect.length === 0) {
                    selectFilled = true;
                } else {
                    selectFilled = false;
                }
            });

        /////////////////// textarea Validation /////////////////////
        $(steps[x])
            .find("textarea[required]")
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqTextarea = empReqTextarea.filter((y) => y.input !== i);
                } else {
                    if (!empReqTextarea.find((y) => y.input === i)) {
                        empReqTextarea.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqTextarea.length === 0) {
                    textareaFilled = true;
                } else {
                    textareaFilled = false;
                }
            });

        /////////////////// Email Validation /////////////////////
        $(steps[x])
            .find(':input[type="email"][required]')
            .each(function() {
                if ($(this).val() !== "") {
                    validateEmail(
                        $(this).val(),
                        $(this).data("block-domain"),
                        $(this).attr("name")
                    );
                } else {
                    emailFilled = false;
                    unfilledArr.push({ input: $(this).attr("name") });
                }
            });
    } else {
        //////////////////////////////////logic extra validation//////////////////////////////////////////////////
        if ($(steps[x]).data("card")) {
            answer = $(steps[x]).find("[data-go-to]").data("go-to");
            selections = selections.filter((y) => y.step !== x);
            selections.push({ step: x, selected: answer });
            next = true;
            back = false;
        } else if ($(steps[x]).find(".active-answer-card").data("card")) {
            answer = $(steps[x]).find(".active-answer-card").data("go-to");
            selections = selections.filter((y) => y.step !== x);
            selections.push({ step: x, selected: answer });
            next = true;
            back = false;
        }

        ///////////////////////////////////checkbox validation//////////////////////////////////////
        // Check if there are checkboxes inside the active-answer-card
        let checkboxInputs = $(steps[x]).find(
            ".active-answer-card :input[type='checkbox']"
        );
        let requiredCheckboxes = checkboxInputs.filter("[required]");
        let checkedCheckboxes = checkboxInputs.filter(":checked");
        let requiredCheckedCheckboxes = requiredCheckboxes.filter(":checked");
        let noRequiredInputs = requiredCheckboxes.length === 0;
        let checkedCheckboxesCount = checkedCheckboxes.length;
        let requiredCheckedCount = requiredCheckedCheckboxes.length;

        console.log(checkedCheckboxesCount);

        if (checkboxInputs.length > 0) {
            // Check for checkCount and maxCheckCount logic
            if (checkCount === "*" || checkCount > checkboxInputs.length) {
                checkboxInputs.each(function() {
                    let checkbox = $(this);
                    let isChecked = checkbox.is(":checked");

                    if (isChecked) {
                        checkboxFilled = true;
                        resetInputErrorMessage(checkbox.attr("name"));

                        if (noRequiredInputs) {
                            let skipTo = checkbox.closest("[data-skip-to]").data("skip-to");
                            let answer = checkbox.closest("[data-go-to]").attr("data-go-to");

                            if (answer) {
                                selections = selections.filter((y) => y.step !== x);
                                selections.push({ step: x, selected: answer });

                                if (skipTo) {
                                    selections = selections.filter((y) => y.step !== skipTo - 2);
                                    selections.push({ step: skipTo - 2, selected: answer });

                                    let objIndex = selections.findIndex((obj) => obj.step === x);
                                    selections[objIndex].skipTo = parseInt(skipTo) - 1;
                                    selections[objIndex].backTo = x;
                                }
                            }
                        }
                    } else {
                        checkboxFilled = false;
                        unfilledArr.push({ input: checkbox.attr("name") });
                    }
                });
            } else if (checkedCheckboxesCount >= checkCount) {
                console.log("test");
                // Ensure checkedCheckboxesCount does not exceed maxCheckCount
                if (requiredCheckboxes.length > 0) {
                    if (requiredCheckboxes.length === requiredCheckedCount) {
                        let checkedCheckbox = checkedCheckboxes.first();
                        let skipTo = checkedCheckbox
                            .closest("[data-skip-to]")
                            .data("skip-to");
                        let answer = checkedCheckbox
                            .closest("[data-go-to]")
                            .attr("data-go-to");

                        if (answer) {
                            selections = selections.filter((y) => y.step !== x);
                            selections.push({ step: x, selected: answer });

                            if (skipTo) {
                                selections = selections.filter((y) => y.step !== skipTo - 2);
                                selections.push({ step: skipTo - 2, selected: answer });

                                let objIndex = selections.findIndex((obj) => obj.step === x);
                                selections[objIndex].skipTo = parseInt(skipTo) - 1;
                                selections[objIndex].backTo = x;
                            }
                        }
                        checkboxFilled = true;
                        resetInputErrorMessage(requiredCheckboxes.first().attr("name"));
                    } else {
                        checkboxFilled = false;
                        requiredCheckboxes.not(":checked").each(function() {
                            unfilledArr.push({ input: $(this).attr("name") });
                        });
                    }
                } else {
                    if (maxCheckCount > checkedCheckboxesCount || maxCheckCount < 1) {
                        console.log("not maxed");
                        let checkedCheckbox = checkedCheckboxes.first();
                        let skipTo = checkedCheckbox
                            .closest("[data-skip-to]")
                            .data("skip-to");
                        let answer = checkedCheckbox
                            .closest("[data-go-to]")
                            .attr("data-go-to");

                        if (answer) {
                            selections = selections.filter((y) => y.step !== x);
                            selections.push({ step: x, selected: answer });

                            if (skipTo) {
                                selections = selections.filter((y) => y.step !== skipTo - 2);
                                selections.push({ step: skipTo - 2, selected: answer });

                                let objIndex = selections.findIndex((obj) => obj.step === x);
                                selections[objIndex].skipTo = parseInt(skipTo) - 1;
                                selections[objIndex].backTo = x;
                            }
                        }
                        checkboxFilled = true;
                        $(steps[x])
                            .find('input[type="checkbox"]:not(:checked)')
                            .parent("label")
                            .removeClass("disabled");
                        $(steps[x])
                            .find('input[type="checkbox"]:not(:checked)')
                            .prop("disabled", false);
                    } else if (maxCheckCount > 0) {
                        //Disable unchecked checkboxes
                        $(steps[x])
                            .find('input[type="checkbox"]:not(:checked)')
                            .parent("label")
                            .addClass("disabled");
                        $(steps[x])
                            .find('input[type="checkbox"]:not(:checked)')
                            .prop("disabled", true);
                    }
                }
            } else {
                if (checkCount >= 0) {
                    checkboxFilled = false;
                    requiredCheckboxes.not(":checked").each(function() {
                        unfilledArr.push({ input: $(this).attr("name") });
                    });
                    unfilledArr.push({ input: checkboxInputs.first().attr("name") });
                }
            }
        }

        ////////////////////////////////////radio input validation////////////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find("input:radio[required]")
            .each(function(i) {
                var name = $(this).attr("name");
                //console.log(name)
                if ($(`input:radio[name="${name}"]:checked`).length == 0) {
                    if (!empReqRadio.find((y) => y.input === i)) {
                        empReqRadio.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                } else {
                    empReqRadio = empReqRadio.filter((y) => y.input !== i);
                }

                if (empReqRadio.length === 0) {
                    radioFilled = true;
                } else {
                    radioFilled = false;
                }
            });

        ////////////////////////////text input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="text"][required]')
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqInput = empReqInput.filter((y) => y.input !== i);
                } else {
                    if (!empReqInput.find((y) => y.input === i)) {
                        empReqInput.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqInput.length === 0) {
                    inputFilled = true;
                } else {
                    inputFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="text"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////password input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="password"][required]')
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqPassword = empReqPassword.filter((y) => y.input !== i);
                } else {
                    if (!empReqPassword.find((y) => y.input === i)) {
                        empReqPassword.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqPassword.length === 0) {
                    passwordFilled = true;
                } else {
                    passwordFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="password"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////url input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="url"][required]')
            .each(function(i) {
                let urlLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && urlLength >= minChar) {
                    empReqUrl = empReqUrl.filter((y) => y.input !== i);
                } else {
                    if (!empReqUrl.find((y) => y.input === i)) {
                        empReqUrl.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqUrl.length === 0 && validateURL($(this).val())) {
                    urlFilled = true;
                } else {
                    urlFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="url"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////date input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="date"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    empReqDate = empReqDate.filter((y) => y.input !== i);
                } else {
                    if (!empReqDate.find((y) => y.input === i)) {
                        empReqDate.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqDate.length === 0) {
                    dateFilled = true;
                } else {
                    dateFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="date"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////time input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="time"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    empReqTime = empReqTime.filter((y) => y.input !== i);
                } else {
                    if (!empReqTime.find((y) => y.input === i)) {
                        empReqTime.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqTime.length === 0) {
                    timeFilled = true;
                } else {
                    timeFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="time"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////number input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="number"][required]')
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqNum = empReqNum.filter((y) => y.input !== i);
                } else {
                    if (!empReqNum.find((y) => y.input === i)) {
                        empReqNum.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqNum.length === 0) {
                    numFilled = true;
                } else {
                    numFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="number"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////phone input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="tel"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    let inputLength = $(this).val().length;
                    let minChar = $(this).data("min-character") ?
                        $(this).data("min-character") :
                        0;

                    if ($(this).data("phone-autoformat")) {
                        var formatPhone = phoneAutoFormat($(this).data("phone-autoformat"));
                        $(this).val(formatPhone($(this).val()));
                    }

                    if (phoneValidation($(this).val(), inputLength, minChar)) {
                        empReqTel = empReqTel.filter((y) => y.input !== i);
                    } else {
                        empReqTel.push({ input: i });
                    }
                } else {
                    if (!empReqTel.find((y) => y.input === i)) {
                        empReqTel.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqTel.length === 0) {
                    telFilled = true;
                } else {
                    telFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="tel"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////file input validation/////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="file"][required]')
            .each(function(i) {
                if ($(this).val() !== "") {
                    empReqFile = empReqFile.filter((y) => y.input !== i);
                } else {
                    if (!empReqFile.find((y) => y.input === i)) {
                        empReqFile.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqFile.length === 0) {
                    fileFilled = true;
                } else {
                    fileFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="file"]')
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////select input validation///////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find("select[required]")
            .each(function(i) {
                // console.log($(this).val());
                if ($(this).val() !== null && $(this).val() !== "") {
                    empReqSelect = empReqSelect.filter((y) => y.input !== i);
                } else {
                    if (!empReqSelect.find((y) => y.input === i)) {
                        empReqSelect.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqSelect.length === 0) {
                    selectFilled = true;
                } else {
                    selectFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find("select")
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ////////////////////////////textarea validation////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find("textarea[required]")
            .each(function(i) {
                let inputLength = $(this).val().length;
                let minChar = $(this).data("min-character") ?
                    $(this).data("min-character") :
                    0;

                if ($(this).val() !== "" && inputLength >= minChar) {
                    empReqTextarea = empReqTextarea.filter((y) => y.input !== i);
                } else {
                    if (!empReqTextarea.find((y) => y.input === i)) {
                        empReqTextarea.push({ input: i });
                    }
                    unfilledArr.push({ input: $(this).attr("name") });
                }

                if (empReqTextarea.length === 0) {
                    textareaFilled = true;
                } else {
                    textareaFilled = false;
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find("textarea")
            .each(function(i) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        ///////////////////////////email validation//////////////////////////////////////
        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="email"][required]')
            .each(function(m) {
                if ($(this).val() !== "") {
                    validateEmail(
                        $(this).val(),
                        $(this).data("block-domain"),
                        $(this).attr("name")
                    );
                } else {
                    emailFilled = false;
                    unfilledArr.push({ input: $(this).attr("name") });
                }
            });

        $(steps[x])
            .find(".active-answer-card")
            .find(':input[type="email"]')
            .each(function(m) {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to") !== "") {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                }
                if ($(this).parents("[data-go-to]").attr("data-go-to")) {
                    answer = $(this).parents("[data-go-to]").attr("data-go-to");
                    selections = selections.filter((y) => y.step !== x);
                    console.log("selections email", selections, x);
                    selections.push({ step: x, selected: answer });
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });
    }

    if ($(steps[x]).find(':input[type="radio"]').is(":checked")) {
        selArr = [];
        $(steps)
            .find("[data-selected]:checked")
            .each(function(y, i) {
                selArr.push({ selected: $(this).data("selected") });
            });

        selString = [];
        selArr.forEach((sel) => selString.push(sel.selected));

        $(steps[x])
            .find(".active-answer-card")
            .find(":input[type='radio']:checked")
            .each(function() {
                skipTo = undefined;
                if ($(this).parents("[data-skip-to]").data("skip-to")) {
                    skipTo = $(this).parents("[data-skip-to]").data("skip-to");
                } else if ($(this).data("skip-to")) {
                    skipTo = $(this).data("skip-to");
                }
                selections = selections.filter((y) => y.step !== x);
                // console.log(selections, curStep, x);

                if ($(this).data("go-to")) {
                    answer = $(this).attr("data-go-to");
                    selections.push({ step: x, selected: answer });
                    //console.log(skipTo);
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                } else if ($(this).parents("[data-go-to]").data("go-to")) {
                    answer = $(this).parents("[data-go-to]").data("go-to");
                    selections.push({ step: x, selected: answer });
                    //console.log(skipTo);
                    if (skipTo) {
                        selections = selections.filter((y) => y.step !== skipTo - 2);
                        selections.push({ step: skipTo - 2, selected: answer });
                        objIndex = selections.findIndex((obj) => obj.step === x);
                        selections[objIndex].skipTo = parseInt(skipTo) - 1;
                        selections[objIndex].backTo = x;
                    }
                }
            });

        // for auto skip
        if (logicExtra) {
            if (
                $(steps[x])
                .find(".active-answer-card")
                .find("[data-radio-skip]:visible")
                .data("radio-skip") === true ||
                $(steps[x])
                .find("[data-answer][data-radio-skip]:visible")
                .data("radio-skip") === true
            ) {
                if (skip && selections.filter((y) => y.step === x).length > 0) {
                    //console.log('radio skip true')
                    if (
                        textareaLength === 0 &&
                        textInputLength === 0 &&
                        emailInputLength === 0 &&
                        checkboxInputLength === 0
                    ) {
                        setTimeout(function() {
                            next = true;
                            back = false;
                            nextStep();
                            selectionQuiz();
                        }, $(steps[x]).find("[data-radio-delay]").data("radio-delay"));
                    }
                }
            }
        } else {
            if (
                $(steps[x]).find("[data-radio-skip]:visible").data("radio-skip") ===
                true
            ) {
                //console.log('skip',skip)
                if (skip) {
                    if (
                        textareaLength === 0 &&
                        textInputLength === 0 &&
                        emailInputLength === 0 &&
                        checkboxInputLength === 0
                    ) {
                        setTimeout(function() {
                            next = true;
                            back = false;
                            nextStep();
                            selectionQuiz();
                        }, $(steps[x]).find("[data-radio-delay]").data("radio-delay"));
                    }
                }
            }
        }
        // console.log(selections);
    }

    if (
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
        dateFilled
    ) {
        enableBtn();
    } else {
        disableBtn();
    }
    andLogic();
    cloneRemove();
    cloneRemoveInput();
}

function disableRadioQuickTap() {
    const delay = 500; // Delay in milliseconds
    $('input[type="radio"]').on("click", function(event) {
        const $radio = $(this);
        if (
            steps
            .eq(x)
            .find(".active-answer-card")
            .find("[data-radio-skip]:visible")
            .data("radio-skip") === true ||
            steps
            .eq(x)
            .find("[data-answer][data-radio-skip]:visible")
            .data("radio-skip") === true ||
            steps.eq(x).find("[data-radio-skip]:visible").data("radio-skip") ===
            true ||
            steps.eq(x).find("[data-radio-skip]:visible").data("radio-skip") === true
        ) {
            if ($radio.prop("disabled")) {
                event.preventDefault();
                return;
            }

            // Temporarily disable the radio button
            $radio.prop("disabled", true);

            // Re-enable the radio button after the delay
            setTimeout(() => {
                $radio.prop("disabled", false);
            }, delay);
        }
    });
}

function displayErrorMessage() {
    $('[data-text="error-message"]').hide();
    if (unfilledArr.length > 0) {
        unfilledArr.forEach(function(y) {
            $(`input[name="${y.input}"]`)
                .siblings('[data-text="error-message"]')
                .fadeIn();
            $(`input[name="${y.input}"]`)
                .parents()
                .children('[data-text="error-message"]')
                .fadeIn();
            $(`textarea[name="${y.input}"]`)
                .siblings('[data-text="error-message"]')
                .fadeIn();
            $(`select[name="${y.input}"]`)
                .siblings('[data-text="error-message"]')
                .fadeIn();
        });
    }
}

function resetInputErrorMessage(name) {
    //console.log(name)
    $(`input[name="${name}"]`).siblings('[data-text="error-message"]').hide();
    $(`input[name="${name}"]`)
        .parents()
        .children('[data-text="error-message"]')
        .hide();
    $(`textarea[name="${name}"]`).siblings('[data-text="error-message"]').hide();
    $(`select[name="${name}"]`).siblings('[data-text="error-message"]').hide();
}

function increaseCurstep() {
    if (countCard) {
        //console.log(curStep)
        curStep = x + 1;
        $('[data-text="total-steps"]').text(steps.length);
    } else {
        $(steps[x]).data("card") ? (curStep = x + 0) : (curStep = x + 1);
    }
    $('[data-text="current-step"]').text(curStep);
}

function decreaseCurstep() {
    if (countCard) {
        curStep = curStep - 1;
        console.log(x);
        //console.log(curStep)
        $('[data-text="total-steps"]').text(steps.length);
    } else {
        $(steps[x]).data("card") ? (curStep = x - 0) : (curStep = x - 1);
    }

    $('[data-text="current-step"]').text(curStep);
}

$('[data-form="submit-btn"]').on("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log("clicked enter");
    if ($(this).data("redirect")) {
        redirectTo = $(this).data("redirect");
    }
    //console.log($(this).data('new-tab'))
    if (!$(this).data("new-tab")) {
        newTab = $(this).data("new-tab");
    }
    //console.log('newTab',newTab)
    successCard = $(this).data("success");

    //console.log('form is being submitted')

    const urlParams = new URLSearchParams(window.location.search);

    const setInputValue = (elementId, value) => {
        const element = document.querySelector(
            `[data-hidden-input="${elementId}"]`
        );
        if (element) {
            element.value = value;
        }
    };

    setInputValue(
        "referrer",
        urlParams.get("referrer") || document.referrer || "Direct"
    );
    setInputValue("user-agent", navigator.userAgent);
    setInputValue("timestamp", new Date().toISOString());
    setInputValue("time-zone", Intl.DateTimeFormat().resolvedOptions().timeZone);
    setInputValue(
        "screen-resolution",
        `${window.screen.width}x${window.screen.height}`
    );
    setInputValue("click-path", "N/A"); // Assuming click path tracking is not implemented

    const setPageVisitDuration = () => {
        const pageVisitDurationElement = document.querySelector(
            '[data-hidden-input="page-visit-duration"]'
        );
        if (pageVisitDurationElement) {
            const pageLoadTime = localStorage.getItem("pageLoadTime");
            console.log(pageLoadTime);
            if (pageLoadTime) {
                const visitDuration = Math.round(
                    (Date.now() - parseInt(pageLoadTime)) / 1000
                ); // in seconds
                pageVisitDurationElement.value = `${visitDuration} seconds`;
            } else {
                pageVisitDurationElement.value = "N/A";
            }
        }
    };

    setPageVisitDuration();
    if (logicExtra && fill) {
        //if(x === $('[data-form="step"]:not([data-card="true"])').length || $(steps[x]).find('[data-form="submit"]:visible').length > 0){
        $(this).prop("novalidate", true);
        $(steps).find(":input").prop("required", false);
        console.log("nonvalidated");
    }

    localStorage.removeItem("filledInput");
    localStorage.removeItem("pageLoadTime");
    localStorage.removeItem("formlyLastStep");

    if (typeof formlyCustomFunction === "function") {
        formlyCustomFunction();
    }

    if (fill) {
        // function to remove unanswered card
        if ($('[data-form="multistep"]').data("remove-unfilled")) {
            // Remove unanswered card inside step
            for (let i = 0; i < steps.length; i++) {
                let selectedSelection = selections.filter((x) => x.step === i);
                if (selectedSelection.length > 0) {
                    $(steps[i + 1])
                        .find(
                            `[data-answer]:not([data-answer="${selectedSelection[0].selected}"])`
                        )
                        .remove();
                } else {
                    console.log(selectedSelection, i + 1);
                }
            }

            console.log("Removed unfilled divs");
        }

        if ($(this).data("wait")) {
            console.log($(this).data("wait"));
            $(this).text($(this).data("wait"));
        } else {
            $(this).val("Please wait...").text("Please wait...");
        }

        $('[data-form="multistep"]').submit();

        if ($("div.g-recaptcha").length > 0) {
            if (grecaptcha.getResponse().length === 0) {
                $(this).text(oldSubmitText);
                $(this).val(oldSubmitText);
            }
        }

        if (customError) {
            $('[data-text="error-message"]').hide();
        }
    } else {
        if (customError) {
            //console.log('custom error')
            displayErrorMessage();
        }
    }
});

function progressPercentage() {
    const index = x + 1;
    return (percentage = (index / totalSteps) * 100);
}

function nextStep() {
    if (customError) {
        $('[data-text="error-message"]').hide();
        if (fill) {
            x++;
            progress = x;
            if (x <= steps.length - 1) {
                updateStep();
                if (memory) {
                    saveFilledInput();
                }
            }
            increaseCurstep();
        } else {
            displayErrorMessage();
        }
    } else {
        x++;
        increaseCurstep();
        if (x > progress) {
            progress = x;
        }
        if (x <= steps.length - 1) {
            updateStep();
            if (memory) {
                saveFilledInput();
            }
        }
        increaseCurstep();
    }
    andLogic();
}

function backStep() {
    if (customError) {
        $('[data-text="error-message"]').hide();
    }
    decreaseCurstep();
    if (x > 0) {
        $(progressbar[x]).removeClass("current");
        selections.filter((sk) => sk.skipTo === x).length > 0 ?
            (x = parseInt(
                getSafe(() => selections.filter((sk) => sk.skipTo === x)[0].backTo)
            )) :
            x--;

        updateStep();
    }
    if (
        $(steps[x]).find("[data-radio-skip]:visible").data("radio-skip") === true ||
        $(steps[x])
        .find(".active-answer-card")
        .find("[data-radio-skip]:visible")
        .data("radio-skip") === true ||
        $(steps[x])
        .find("[data-answer][data-radio-skip]:visible")
        .data("radio-skip") === true
    ) {
        all_data = all_data.filter(
            (y) =>
            y.field !== $(steps[x]).find('input[type="radio"]:checked').attr("name")
        );
        $(
            `[data-input-field="${$(steps[x])
        .find('input[type="radio"]:checked')
        .attr("name")}"]`
        ).hide();
        $(steps[x]).find('input[type="radio"]').prop("checked", false);
        $(steps[x])
            .find(".w-form-formradioinput")
            .removeClass("w--redirected-checked");
        validation();
    }
    //scrollTop()
}

if (weightedSelectionRange) {
    //append a div that contains the range
    $(`[data-selection]`).each(function() {
        $(this).append(
            `<div data-range="selection" style="display:none !important">${$(
        this
      ).data("selection")}</div>`
        );
    });
}

function selectionQuiz() {
    if ($(this).find('[data-btn="check"]')) {
        $("[data-selection]").hide();
        $("[data-selection-weight]").hide();

        if (weightedSelection) {
            selTotal = 0;
            selArr.forEach(function(x) {
                selTotal = selTotal + x.selected;
            });
            $('[data-text="total-weight"]').text(selTotal);

            if ($(`[data-selection="${selTotal}"]`).length > 0) {
                $(`[data-selection="${selTotal}"]`).fadeIn();
            } else if ($(`[data-range]:contains(${selTotal})`)) {
                /*var elements = $(`[data-range]:contains(${selTotal})`).filter(function() {
                              return $(this).text().trim() === selTotal;
                            });
                            console.log(elements)
                            elements.parent(['data-selection']).show()*/

                $(`[data-range]:contains(${selTotal})`)
                    .parent("[data-selection]")
                    .eq(0)
                    .show();
            } else {
                $('[data-selection="other"]').fadeIn();
            }

            //for range type
        } else {
            let selectedIndex = -1;
            let selectedArr = [];
            $("[data-selection]").each(function(y) {
                if (
                    $($("[data-selection]")[y])
                    .data("selection")
                    .includes(selString.join())
                ) {
                    selectedIndex = y;
                    selectedArr.push(y);
                }
            });

            if (multiSelections) {
                if (selectedArr.length > 0) {
                    selectedArr.forEach((selected) => {
                        $($("[data-selection]")[selected]).fadeIn();
                    });
                } else {
                    $('[data-selection="other"]').fadeIn();
                }
            } else {
                if (selectedIndex > -1) {
                    $($("[data-selection]")[selectedIndex]).fadeIn();
                } else {
                    $('[data-selection="other"]').fadeIn();
                }
            }
        }
    }
}

function triggerInputAllData() {
    if (savedFilledInput && memory) {
        // console.log(savedFilledInput);
        //console.log('memory')
        savedFilledInput.forEach((y) => {
            var radioInput = $(
                `input[name="${y.inputName}"][value="${y.value}"]:not([data-prefill="false"])`
            );
            var generalInput = $(
                `input[name="${y.inputName}"]:not([data-prefill="false"])`
            );
            var textareaInput = $(
                `textarea[name="${y.inputName}"]:not([data-prefill="false"])`
            );
            var checkboxInputActive = $(
                `input[type="checkbox"][name="${y.inputName}"]`
            );
            var radioInputActive = $(
                `input[type="radio"][name="${y.inputName}"][value="${y.value}"]:not([data-prefill="false"])`
            );

            if (radioInput.attr("type") !== "file") {
                if (
                    radioInput.attr("type") === "radio" &&
                    !radioInput.parents("[data-radio-skip]").data("radio-skip")
                ) {
                    radioInput.click();
                    radioInput
                        .siblings(".w-radio-input")
                        .addClass("w--redirected-checked");
                    radioInput.trigger("input");
                } else if (y.value === "on") {
                    generalInput.click();
                    generalInput
                        .siblings(".w-checkbox-input")
                        .addClass("w--redirected-checked");
                    generalInput.trigger("input");
                    // console.log(radioInput);
                    // $(`input[name="${y.inputName}"]`).trigger('click');
                } else {
                    generalInput.val(y.value);
                    textareaInput.val(y.value);
                    $('select:not([data-prefill="false"])')
                        .find(`option[value="${y.value}"]`)
                        .prop("selected", true);
                    generalInput.trigger("input");
                    generalInput.trigger("change");
                }

                const radioActiveClassName = radioInputActive.data("click-addclass");
                const checkboxActiveClassName =
                    checkboxInputActive.data("click-addclass");
                radioInputActive.parent().addClass(radioActiveClassName);
                checkboxInputActive.parent().addClass(checkboxActiveClassName);
            }
        });
    } else if (_params) {
        getParams();
        searchQ.forEach((y) => {
            //console.log('aprams',y, $(`input[value="${y.val}"]`).attr("type"));
            if (
                $(
                    `input[name="${y.inputName}"][value="${y.value}"]:not([data-prefill="false"])`
                ).attr("type") !== "file"
            ) {
                if (
                    $(
                        `input[name="${y.key}"][value="${y.val}"]:not([data-prefill="false"])`
                    ).attr("type") === "radio"
                ) {
                    $(
                        `input[name="${y.key}"][value="${y.val}"]:not([data-prefill="false"])`
                    ).click();
                    $(
                            `input[name="${y.key}"][value="${y.val}"]:not([data-prefill="false"])`
                        )
                        .siblings(".w-radio-input")
                        .addClass("w--redirected-checked");
                    $(
                        `input[name="${y.key}"][value="${y.val}"]:not([data-prefill="false"])`
                    ).trigger("input");
                } else if (y.val === "on") {
                    $(`input[name="${y.key}"]:not([data-prefill="false"])`).click();
                    $(`input[name="${y.key}"]:not([data-prefill="false"])`)
                        .siblings(".w-checkbox-input")
                        .addClass("w--redirected-checked");
                    $(`input[name="${y.key}"]`).trigger("input");
                } else {
                    $(`input[name="${y.key}"]:not([data-prefill="false"])`).val(y.val);
                    $(`textarea[name="${y.key}"]:not([data-prefill="false"])`).val(y.val);
                    $(`select[name="${y.key}"]:not([data-prefill="false"])`)
                        .find(`option[value="${y.val}"]`)
                        .prop("selected", true);
                    $(`input[name="${y.key}"]:not([data-prefill="false"])`).trigger(
                        "input"
                    );
                    $(`input[name="${y.key}"]:not([data-prefill="false"])`).trigger(
                        "change"
                    );
                }
            }
        });
    }
}

$('[data-form="next-btn"]').on("click", function() {
    //scrollTop();
    next = true;
    back = false;
    nextStep();
    selectionQuiz();
});

$('[data-form="back-btn"]').on("click", function() {
    //scrollTop();
    next = false;
    back = true;
    backStep();
});

$(steps)
    .find(":input")
    .not('[type="radio"]')
    .on("input", function(input) {
        validation();
        andLogic();
        addClickClass();
    });
$(steps)
    .find('input[type="radio"]')
    .on("click", function() {
        skip = true;
        validation();
        addClickClass();
    });

////////////////////////////custom indicator nav
if ($("[data-clickable-all]").data("clickable-all")) {
    $('[data-form="custom-progress-indicator"]').removeClass("disabled");
} else {
    $('[data-form="custom-progress-indicator"]').addClass("disabled");
}

function clickableIndicator() {
    if ($("[data-clickable]").data("clickable")) {
        $('[data-form="progress-indicator"]').removeClass("current");
        if ($("[data-clickable]").data("clickable-all")) {
            x = $(this).index();
            updateStep();
        } else {
            if ($(this).index() <= progress) {
                x = $(this).index();
                updateStep();
            }
        }
    }
    $('[data-text="current-step"]').text(x + 1);
}
$('[data-form="custom-progress-indicator"]').on("click", clickableIndicator);

// hide custom progress indicator on data-card
excludeCount = !$('[data-form="multistep"]').data("count-card");
steps.each(function(i) {
    const cardStep = $(this).data("card");
    console.log(excludeCount);

    if (cardStep && excludeCount) {
        $('[data-form="custom-progress-indicator"]').eq(i).hide();
    }
});
/////////////////////

/////debug mode//////////////////
if ($('[data-form="multistep"]').data("debug-mode")) {
    //console.log("debug mode");
    //data go to attr
    $("[data-go-to]").each(function() {
        $(this).append("<br>Data Go To = ", $(this).data("go-to"));
    });
    //data answer attr
    $("[data-answer]").each(function() {
        $(this).append("<br>Data Answer = ", $(this).data("answer"));
    });
}
/////////////////////////////

function resetFormly() {
    $('[data-form="multistep"]').trigger("reset");
    $('[data-form="multistep"]').parents().find(".w-form-done").hide();
    x = 0;
    updateStep();
    $('[data-form="multistep"]').show();
    $('[data-form="submit-btn"]').text(oldSubmitText);
    $('[data-form="submit-btn"]').val(oldSubmitText);
    $('[data-text="current-step"]').text(1);
    $('[data-form="multistep"]')
        .find("input:checkbox")
        .siblings(".w-checkbox-input")
        .removeClass("w--redirected-checked");
}

$(document).ajaxComplete(function(event, xhr, settings) {
    if (settings.url.includes("https://webflow.com/api/v1/form/")) {
        const isSuccessful = xhr.status === 200;
        const redirectFormName = "redirect-form-hehexd";

        if (redirectTo && isSuccessful) {
            if (newTab) {
                window.open(redirectTo, "_blank");
            } else {
                setTimeout(() => {
                    location.href = redirectTo;
                }, redirectDelay);
            }
        }
        //console.log(successCard)
        if (isSuccessful && successCard !== "") {
            $(`[data-success-card="${successCard}"]`).fadeIn();
        }

        if (isSuccessful && formReset) {
            setTimeout(() => {
                resetFormly();
            }, resetDelay);
        }

        if (!isSuccessful) {
            $('[data-form="submit-btn"]').val("Please wait...");
            $('[data-form="submit-btn"]').text("Please wait...");
        }
    }
});

$('[data-btn="edit"]').on("click", function() {
    var editInput = $(this)
        .parent()
        .find("[data-input-field]")
        .data("input-field");
    setTimeout(function() {
        $(`input[name="${editInput}"]`).focus();
    }, 100);
    back = true;
    x = $(this).data("edit-step") - 1;
    updateStep();

    if (countCard) {
        curStep = x + 1;
        //console.log(curStep)
        $('[data-text="total-steps"]').text(steps.length);
    } else {
        $(steps[x]).data("card") ? (curStep = x + 0) : (curStep = x + 1);
    }

    $('[data-text="current-step"]').text(curStep);
    back = false;
});

$('[data-btn="reset"]').on("click", function() {
    $('[data-form="multistep"]').trigger("reset");
    let resetBtn = $(this);
    $(this).text("Please wait...");
    setTimeout(function() {
        $(resetBtn).text(oldResetText);
        $(resetBtn).parents(".w-form-done").hide();
        x = 0;
        updateStep();
        $('[data-form="multistep"]').show();
        $('[data-form="submit-btn"]').text(oldSubmitText);
        $('[data-form="submit-btn"]').val(oldSubmitText);
        $(resetBtn).val(oldSubmitText);
        $('[data-text="current-step"]').text(1);
        $('[data-form="multistep"]')
            .find("input:checkbox")
            .siblings(".w-checkbox-input")
            .removeClass("w--redirected-checked");
    }, resetDelay);
});

$("body").on("keypress", function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        e.stopPropagation();

        // check if textarea is focused
        if ($(steps[x]).find("textarea").is(":focus")) {
            $(steps[x])
                .find("textarea:focus")
                .val($(steps[x]).find("textarea:focus").val() + "\n");
        } else if ($("[data-enter]").data("enter") && fill) {
            if (totalSteps > curStep) {
                $('[data-form="next-btn"]')[0].click();
            }
        }
    }
});

$("body").keydown(function(e) {
    if ((e.metaKey || e.ctrlKey) && e.keyCode == 13) {
        if (x >= steps.length - 1 && fill) {
            $(steps[x]).find('[data-form="submit-btn"]:visible').click();
        } else {
            e.preventDefault();
            e.stopPropagation();
        }
    }
});

$('[data-form="multistep"]')
    .find(":input")
    .on("change", function() {
        all_data = all_data.filter((x) => x.field !== $(this).attr("name"));

        if ($(this).attr("type") === "checkbox") {
            if ($(this).is(":checked")) {
                all_data.push({
                    field: $(this).attr("name"),
                    value: $(this).siblings("span").text(),
                });
            } else {
                $(`[data-input-field="${$(this).attr("name")}"]`).hide();
            }
        } else {
            all_data.push({ field: $(this).attr("name"), value: $(this).val() });
            if ($(this).val() !== "") {
                resetInputErrorMessage($(this).attr("name"));
            }
        }

        // console.log(all_data)
        all_data.forEach(function(x) {
            $(`[data-input-field="${x.field}"]`).show();
            $(`[data-input-field="${x.field}"]`).text(x.value);
        });
    });

$('[data-form="multistep"]')
    .find("textarea")
    .on("change", function() {
        if ($(this).val() !== "") {
            resetInputErrorMessage($(this).attr("name"));
        }
        all_data = all_data.filter((x) => x.field !== $(this).attr("name"));
        //console.log(all_data)
        all_data.push({ field: $(this).attr("name"), value: $(this).val() });

        // console.log(all_data)
        all_data.forEach(function(x) {
            $(`[data-input-field="${x.field}"]`).show();
            $(`[data-input-field="${x.field}"]`).text(x.value);
        });
    });

$('[data-form="multistep"]')
    .find("select")
    .on("change", function() {
        if ($(this).val() !== "") {
            resetInputErrorMessage($(this).attr("name"));
        }
        var msField = $(this).data("ms-field");
        all_data = all_data.filter((x) => x.field !== $(this).attr("name"));
        all_data.push({
            field: $(this).attr("name"),
            value: msField ?
                $(this).find(`option[value="$(this).val()"]`).text() :
                $(this).val(),
        });

        //console.log(all_data)
        all_data.forEach(function(x) {
            $(`[data-input-field="${x.field}"]`).show();
            $(`[data-input-field="${x.field}"]`).text(x.value);
        });
    });

updateStep();
triggerInputAllData();

// Loop through each element with data-collection=list attribute
$("[data-cms-select=cms]").each(function() {
    // Find all items with data-cms-select=text attribute inside the current list element
    const textItems = $(this).find("[data-cms-select=text]");

    // Create an array to store the text of each item
    const textArray = [];

    // console.log(textArray);

    // Loop through each text item and add its text to the array
    textItems.each(function() {
        textArray.push($(this).text().trim());
    });

    // Find the nearest select input with data-cms-select=input attribute
    const selectInput = $(this).siblings("[data-cms-select=input]");
    // Add the text array as select options
    $.each(textArray, function(index, text) {
        const option = $("<option>").val(text).text(text);
        selectInput.append(option);
    });
});

function cloneRemove() {
    // only show remove button when child are more than one
    $("[data-clone-wrapper]").each(function() {
        if ($(this).find("[data-clone]").length < 2) {
            $(this).find('[data-form="remove-clone"]').hide();
        } else {
            $(this).find('[data-form="remove-clone"]').show();
        }
    });
    // console.log("remove clone button");
}

function cloneRemoveInput() {
    // only show remove button when child are more than one
    $("[data-clone-input-wrapper]").each(function() {
        console.log($(this).find("[data-clone-input]").length);
        if ($(this).find("[data-clone-input]").length < 2) {
            $(this).find('[data-form="remove-input-clone"]').hide();
        } else {
            $(this).find('[data-form="remove-input-clone"]').show();
        }
    });
    // console.log("remove clone input button");
}

$('[data-form="remove-clone"]').on("click", function() {
    const parentIndex =
        $(this).parents("[data-clone]").length > 0 ?
        $(this).parents("[data-clone]").index() :
        $(this).parents("[data-display]").index();

    const cloneName =
        $(this).parents("[data-clone]").length > 0 ?
        $(this).parents("[data-clone]").data("clone") :
        $(this).parents("[data-display]").data("display");

    $(`[data-clone="${cloneName}"]`).eq(parentIndex).remove();
    $(`[data-display="${cloneName}"]`).eq(parentIndex).remove();

    cloneRemove();

    // After removing an input, check the current input count
    let addNewLimit = $(`[data-add-new="${cloneName}"]`).data("add-new-limit");
    let currentInputCount = $(`[data-clone="${cloneName}"]`).length;
    console.log(currentInputCount, addNewLimit);
    // If the current input count is below the limit, show the add new input button
    if (currentInputCount < addNewLimit) {
        console.log("show");
        $(`[data-add-new="${cloneName}"]`).show();
    }

    validation();
});

$('[data-form="remove-input-clone"]').on("click", function() {
    let inputName = $(this)
        .parents("[data-clone-input]")
        .find("input, select, textarea")
        .first()
        .attr("name");
    let parentCloneName = $(this)
        .parents("[data-clone-input]")
        .data("clone-input");
    $(this).parent("[data-clone-input]").remove();
    console.log(inputName);
    $(`[data-input-field="${inputName}"]`)
        .parent("[data-display-input]")
        .remove();

    // After removing an input, check the current input count
    let addNewInputLimit = $(`[data-add-new-input="${parentCloneName}"]`).data(
        "add-new-input-limit"
    );
    let currentInputCount = $(`[data-clone-input="${parentCloneName}"]`).length;

    // If the current input count is below the limit, show the add new input button
    if (currentInputCount < addNewInputLimit) {
        $(`[data-add-new-input="${parentCloneName}"]`).show();
    }

    validation();
});

//recurring form
$("[data-add-new]").on("click", function() {
    let formName = $(this).data("add-new");
    let addNewLimit = $(this).data("add-new-limit");
    var newForm = $(`[data-clone="${formName}"]`).eq(0).clone(true);
    var newDisplay = $(`[data-display="${formName}"]`).eq(0).clone(true);
    let formCloneName = "";
    $(this).find('[data-form="remove-clone"]').show();
    cloneRemove();

    // reset all recurring input
    newForm.find("[data-clone-input]").find("input").val("");
    newForm.find("[data-clone-input]").find("select").val("");
    newForm.find("[data-clone-input]").find("textarea").val("");
    newForm.find("[data-clone-input]").not(":first").remove();
    newForm.find("[data-clone-input]").find('[aria-label="Remove file"]').click();
    newDisplay.find("[data-display-input]").not(":first").remove();

    //input
    newForm.find("input").each(function() {
        if ($(this).closest("[data-clone-input]").length > 0) {
            let highestIndex = 0;
            const cloneInputName = $(this)
                .closest("[data-clone-input]")
                .data("clone-input");

            // Find the highest index in existing input names
            $(`[data-clone-input="${cloneInputName}"] input`).each(function() {
                const name = $(this).attr("name");
                if (name && name.startsWith("relationship-")) {
                    const index = parseInt(name.split("-")[1]);
                    if (!isNaN(index) && index > highestIndex) {
                        highestIndex = index;
                    }
                }
            });

            // Increment the index
            highestIndex++;

            formCloneName = this.name + "-" + highestIndex;
            // console.log(cloneInputName, formCloneName);
        } else {
            formCloneName =
                this.name +
                "-" +
                (parseInt($(`[data-clone="${formName}"]`).last().index()) + 1);
        }
        $(this).val("");
        $(this).attr("name", formCloneName);
        $(this).attr("data-name", formCloneName);
    });

    //textarea
    newForm.find("textarea").each(function() {
        if ($(this).closest("[data-clone-input]").length > 0) {
            let highestIndex = 0;
            const cloneInputName = $(this)
                .closest("[data-clone-input]")
                .data("clone-input");

            // Find the highest index in existing textarea names
            $(`[data-clone-input="${cloneInputName}"] textarea`).each(function() {
                const name = $(this).attr("name");
                if (name && name.startsWith("relationship-")) {
                    const index = parseInt(name.split("-")[1]);
                    if (!isNaN(index) && index > highestIndex) {
                        highestIndex = index;
                    }
                }
            });

            // Increment the index
            highestIndex++;

            formCloneName = this.name + "-" + highestIndex;
            // console.log(cloneInputName, formCloneName);
        } else {
            formCloneName =
                this.name +
                "-" +
                (parseInt($(`[data-clone="${formName}"]`).last().index()) + 1);
        }
        $(this).val("");
        $(this).attr("name", formCloneName);
        $(this).attr("data-name", formCloneName);
    });

    // select
    newForm.find("select").each(function() {
        if ($(this).closest("[data-clone-input]").length > 0) {
            let highestIndex = 0;
            const cloneInputName = $(this)
                .closest("[data-clone-input]")
                .data("clone-input");
            // Find the highest index in existing select names
            $(`[data-clone-input="${cloneInputName}"] select`).each(function() {
                const name = $(this).attr("name");
                if (name && name.startsWith("relationship-")) {
                    const index = parseInt(name.split("-")[1]);
                    if (!isNaN(index) && index > highestIndex) {
                        highestIndex = index;
                    }
                }
            });

            // Increment the index
            highestIndex++;

            formCloneName = this.name + "-" + highestIndex;
            // console.log(cloneInputName, formCloneName);
        } else {
            formCloneName =
                this.name +
                "-" +
                (parseInt($(`[data-clone="${formName}"]`).last().index()) + 1);
        }
        $(this).val("");
        $(this).attr("name", formCloneName);
        $(this).attr("data-name", formCloneName);
    });

    newDisplay.find("[data-input-field]").each(function() {
        if ($(this).data("input-field")) {
            let highestIndex = 0;
            const cloneInputName = $(this).data("input-field").split("-")[0];
            // Find the highest index in existing data-input-field values
            $(
                `[data-display="${formName}"] [data-input-field^="${cloneInputName}"]`
            ).each(function() {
                const inputField = $(this).attr("data-input-field");
                const index = parseInt(inputField.split("-")[1]);
                if (!isNaN(index) && index > highestIndex) {
                    highestIndex = index;
                }
            });

            // Increment the index
            highestIndex++;

            const inputFieldCloneName = cloneInputName + "-" + highestIndex;
            // console.log(inputFieldCloneName);
            $(this).attr("data-input-field", inputFieldCloneName);
        }
    });

    $(`[data-clone-wrapper="${formName}"]`).append(newForm);
    $(`[data-display-wrapper="${formName}"]`).append(newDisplay);

    $(`[data-index="${formName}"]`).each(function() {
        $(this).text($(this).parents(`[data-clone="${formName}"]`).index() + 1);
    });

    $(`[data-display-index="${formName}"]`).each(function() {
        $(this).text($(this).parents(`[data-display="${formName}"]`).index() + 1);
    });

    let currentFormCount = $(
        `[data-clone-wrapper="${formName}"] [data-clone="${formName}"]`
    ).length;

    // Check if the current form count has reached the limit
    if (currentFormCount >= addNewLimit) {
        $(this).hide(); // Hide the add new button if limit is reached
        return; // Exit the function
    }

    // If limit is not reached, show the add new button
    $(this).show();

    validation();
});

// recurring input
$("[data-add-new-input]").on("click", function() {
    // Scope to the specific data-clone instance
    const $currentClone = $(this).closest("[data-clone]");
    const parentIndex = $(this).closest("[data-clone]").index(); // Scoped index
    let formName = $(this).data("add-new-input");

    // Clone the form and display from within the correct data-clone scope
    var newForm = $currentClone
        .find(`[data-clone-input="${formName}"]`)
        .eq(0)
        .clone(true);
    var newDisplay = $(`[data-display]`)
        .find(`[data-display-input="${formName}"]`)
        .eq(0)
        .clone(true);

    let addNewInputLimit = $(this).data("add-new-input-limit");

    let highestIndex = 0;

    // Find the highest index within the current data-clone instance
    $currentClone
        .find(
            `[data-clone-input="${formName}"] input, [data-clone-input="${formName}"] select, [data-clone-input="${formName}"] textarea`
        )
        .each(function() {
            const name = $(this).attr("name");
            if (name) {
                const index = parseInt(name.split("-")[1]);
                if (!isNaN(index) && index > highestIndex) {
                    highestIndex = index;
                }
            }
        });

    // Increment the index
    highestIndex++;

    // Update input, select, and textarea fields with the new index
    newForm.find("input, select, textarea").each(function() {
        const name = $(this).attr("name");
        let inputCloneName = name.split("-")[0] + "-" + highestIndex;
        $(this).val(""); // Clear value for new input
        $(this).attr("name", inputCloneName);
        $(this).attr("data-name", inputCloneName);
    });

    // Update display section's data-input-field with the new index
    newDisplay.find("[data-input-field]").each(function() {
        const originalField = $(this).attr("data-input-field");
        const updatedField = originalField.split("-")[0] + "-" + highestIndex; // Update field to have the correct index
        $(this).attr("data-input-field", updatedField);
    });

    // Append the new form section within the correct data-clone scope
    $currentClone
        .find(`[data-clone-input-wrapper="${formName}"]`)
        .append(newForm);

    // Append the new display section to the corresponding display area
    $(`[data-display]`)
        .find(`[data-display-input-wrapper="${formName}"]`)
        .append(newDisplay);

    // Update index for form inputs within the correct data-clone scope
    $currentClone.find(`[data-input-index="${formName}"]`).each(function() {
        const inputParent = $(this).closest(`[data-clone-input="${formName}"]`);
        const index = inputParent.index() + 1;
        $(this).text(index);
    });

    // Update index for display inputs within the correct display scope
    $(`[data-display]`)
        .find(`[data-display-input-index="${formName}"]`)
        .each(function() {
            const displayParent = $(this).closest(
                `[data-display-input="${formName}"]`
            );
            const index = displayParent.index() + 1;
            $(this).text(index);
        });

    let currentInputCount = $currentClone.find(
        `[data-clone-input-wrapper="${formName}"] [data-clone-input="${formName}"]`
    ).length;

    // Check if the current input count has reached the limit
    if (currentInputCount >= addNewInputLimit) {
        $(this).hide(); // Hide the add new input button if limit is reached
        return;
    }

    $(this).show();
    cloneRemoveInput();
    validation();
});

// file upload remove
$("[data-remove-upload]").on("click", function() {
    const fileToRemove = $(this).data("remove-upload");
    $(`input[name="${fileToRemove}"]`).val("");
    validation();
});

// AND logic
function andLogic() {
    if (conditionalResult) {
        steps.eq(x).find("[data-show-if]").hide();
        // console.log("clicked");
        steps
            .eq(x)
            .find("[data-show-if]")
            .each(function() {
                function stringToArray(inputString) {
                    const keyValuePairs = inputString.split("&");
                    const resultArray = [];

                    keyValuePairs.forEach((keyValue) => {
                        const [field, value] = keyValue.split("=");
                        resultArray.push({ field: field, value: value });
                    });

                    return resultArray;
                }

                const inputString = $(this).attr("data-show-if");
                // console.log(inputString);
                const array1 = stringToArray(inputString);

                function array1ExistsInArray2(array1, array2) {
                    return array2.some((element, index) => {
                        if (array1[0] && element.field === array1[0].field) {
                            // Check if array1 exists inside array2 starting at index
                            return array1.every(
                                (item, subIndex) =>
                                array2[index + subIndex] &&
                                array2[index + subIndex].field === item.field &&
                                array2[index + subIndex].value === item.value
                            );
                        }
                        return false;
                    });
                }

                const exists = array1ExistsInArray2(array1, all_data);
                if (exists) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
    }
}

// Progressive input
progressiveTarget.addClass("hide");
progressiveInput.on("input", function() {
    const progressiveType = $(this).data("input-reveal");
    const progressiveValue = $(this).val();
    const targetValue = form
        .find(`[data-input-target="${progressiveType}"]`)
        .data("input-reveal-value");

    let dependentField = form
        .find(`[data-input-target="${progressiveType}"][data-input-reveal-value]`)
        .filter(function() {
            return (
                $(this).data("input-reveal-value").toLowerCase() ===
                progressiveValue.toLowerCase()
            );
        });

    let anyField = form.find(
        `[data-input-target="${progressiveType}"][data-input-reveal-value="*"]`
    );

    form.find(`[data-input-target="${progressiveType}"]`).addClass("f-hide");
    form.find(`[data-input-target="${progressiveType}"]`).removeClass("f-show");

    if (progressiveValue !== "") {
        if (targetValue.toLowerCase() === "*" && progressiveValue !== "") {
            anyField.removeClass("f-hide");
            anyField.addClass("f-show");
        } else {
            dependentField.removeClass("f-hide");
            dependentField.addClass("f-show");
        }
    }

    function checkTargetExist(target) {
        if (target) {
            if (form.find(`[data-input-reveal="${target}"]`).val() !== "") {
                form.find(`[data-input-reveal="${target}"]`).trigger("input");
            }
        }
    }

    // to show other dependent fields
    let nextTarget = form
        .find(`[data-input-target="${progressiveType}"]`)
        .find("[data-input-reveal]")
        .data("input-reveal");
    checkTargetExist(nextTarget);

    form.find("[data-input-reveal]:not(:visible)").each(function() {
        const otherProgressiveType = $(this).data("input-reveal");
        form
            .find(`[data-input-target="${otherProgressiveType}"]`)
            .removeClass("f-show");
        form
            .find(`[data-input-target="${otherProgressiveType}"]`)
            .addClass("f-hide");
    });
});

function addClickClass() {
    const className = $(this).data("click-addclass");
    const inputName = $(this).attr("name");
    // console.log("radio", $(this).is(":checked"), $(this).attr("name"));

    $(`input[name="${inputName}"]`).parent().removeClass(className);
    if ($(this).is(":checked")) {
        $(this).parent().addClass(className);
    }
}

// click to add active class
$("[data-click-addclass]").on("change", addClickClass);

// Function to update the counter
function updateCounter(newCounterValue) {
    // Get the current date
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth(); // Get the current month

    // Encode the counter key and the current month value in Base64
    var encodedCounterKey = btoa("counter");
    var encodedMonth = btoa(currentMonth.toString());

    // Check if the counter cookie exists
    var counterCookie = getCookie(encodedCounterKey);

    // If the counter cookie doesn't exist or it's for a different month, update the counter
    if (!counterCookie || counterCookie !== encodedMonth) {
        //Send a POST request to update the counter
        $.post("https://videsigns-staging.co.uk/formly-counter", function() {
            console.log("Counter updated successfully.");
            // Store the encoded month in a cookie to mark that the counter has been updated for this month
            document.cookie = encodedCounterKey + "=" + encodedMonth;
        }).fail(function(xhr, status, error) {
            console.error("Failed to update counter:", error);
        });
    } else {
        console.log("Counter already updated for this month.");
    }
}

// Function to get a cookie by name
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== "") {
        var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

// getLiveCounter();
updateCounter();
scrollTop();
cloneRemove();
cloneRemoveInput();
disableRadioQuickTap();

// support
// Constants
const formlyUrlParams = new URLSearchParams(window.location.search);
const formlySupportParam = formlyUrlParams.get("formly-support");
const showButton = formlySupportParam === "true";
const passIcon = `<div class="icon-embed-xxsmall w-embed">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
<path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"></path>
</svg>
</div>`;
const failIcon = `<div class="icon-embed-xxsmall-2 w-embed">
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
      <path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path>
</svg>
</div>`;

// Variables
let isScriptLoaded = true;
let scriptLocation = "head";
let isMultistepAttributePresent = true;
let isMultistepOnFormElement = true;
let areButtonsPresent = true;
let isNextBtnOnSubmit = false;
let isSubmitBtnOnSubmit = true;
let isBackBtnOnSubmit = false;
let formType = logicExtra ? "FormlyLogic enabled" : "Basic (No Formly Logic)";
let resultStatus = "PASS";
let scriptSrcAdded = "";

// Helper function to check the presence of an element with a specific attribute
function isElementPresent(selector, attribute) {
    return document.querySelector(`[${attribute}="${selector}"]`) !== null;
}

// Check if data-form=multistep attribute is present
isMultistepAttributePresent = isElementPresent("multistep", "data-form");

// Check if data-form=multistep attribute is on the Form element
const multistepForm = document.querySelector('form[data-form="multistep"]');
const formStepLength =
    multistepForm.querySelectorAll('[data-form="step"]').length;
isMultistepOnFormElement = multistepForm !== null;

// Check if data-form="next-btn", data-form="submit-btn", and data-form="back-btn" exist inside data-form="multistep"
const multistepContainer = document.querySelector('[data-form="multistep"]');
const nextBtnExist = multistepContainer.querySelector('[data-form="next-btn"]');
const backBtnExist = multistepContainer.querySelector('[data-form="back-btn"]');
const submitBtnExist = multistepContainer.querySelector(
    '[data-form="submit-btn"]'
);
areButtonsPresent =
    nextBtnExist !== null && backBtnExist !== null && submitBtnExist !== null;

// Check if data-form="next-btn" and data-form="back-btn" are not on input type submit element, and data-form="submit-btn" is on input type submit element
isNextBtnOnSubmit =
    nextBtnExist && nextBtnExist.tagName.toLowerCase() === "input";
isSubmitBtnOnSubmit =
    submitBtnExist &&
    submitBtnExist.tagName.toLowerCase() === "input" &&
    submitBtnExist.type.toLowerCase() === "submit";
isBackBtnOnSubmit =
    backBtnExist && backBtnExist.tagName.toLowerCase() === "input";

// Powerups
const checkPowerup = (selector) => document.querySelector(selector) !== null;
const progressBarAttr = checkPowerup('[data-form="progress"]');
const progressIndicatorAttr = checkPowerup('[data-form="progress-indicator"]');
const customProgressAttr = checkPowerup('[data-form="progress-indicator"]');
const cardDivAttr = checkPowerup('[data-card="true"]');
const currentStepAttr = checkPowerup('[data-text="current-step"]');
const totalStepAttr = checkPowerup('[data-text="total-steps"]');
const enterAttr = checkPowerup('[data-enter="true"]');
const submitAttr = checkPowerup('[data-submit="true"]');
const radioSkipAttr = checkPowerup('[data-radio-skip="true"]');
const customCheckboxAttr = checkPowerup("[data-checkbox]");
const recapatchaAttr = checkPowerup('[data-callback="recaptcha"]');

// Logic
const dataAnswerOnFirstStep =
    steps.eq(0).find("[data-answer]").data("answer") === "" ||
    !steps.eq(0).find("[data-answer]").data("answer");
let dataGoToDataAnswerOnFormStep = "";
let dataAnswerAndDataGoToPairs = "";
let dataAnswerIsOnDataCard = "";

steps.each((y) => {
    const currentStep = steps.eq(y);

    if (currentStep.data("answer") && currentStep.data("go-to")) {
        dataGoToDataAnswerOnFormStep += `<div>Step ${y + 1}</div>`;
    }

    const dataAnswerElements = currentStep.find("[data-answer]");
    if (dataAnswerElements.length) {
        dataAnswerAndDataGoToPairs += `<div class="f-text_attribute-title">Step ${
      y + 1
    }</div>`;
        dataAnswerElements.each((index, element) => {
            const $element = $(element);
            dataAnswerAndDataGoToPairs += `<div class="f-logic-text"><strong>data-answer</strong>="${$element.data(
        "answer"
      )}"`;

            if ($element.data("go-to")) {
                dataAnswerAndDataGoToPairs += ` | <strong>data-go-to </strong> ="${$element.data(
          "go-to"
        )}"`;
            }

            dataAnswerAndDataGoToPairs += `</div>`;
        });
    }

    if (
        steps.eq(y).data("card") &&
        (steps.eq(y).data("answer") ||
            steps.eq(y).find("[data-answer]").data("answer"))
    ) {
        dataAnswerIsOnDataCard += `<div>Step ${y + 1}</div>`;
    }
});

// Update the result status based on checks
if (!isScriptLoaded ||
    scriptLocation !== "head" ||
    !isMultistepAttributePresent ||
    !isMultistepOnFormElement ||
    !areButtonsPresent ||
    isNextBtnOnSubmit ||
    !isSubmitBtnOnSubmit ||
    isBackBtnOnSubmit
) {
    resultStatus = "FAIL";
}

// Function to check if a script URL contains a specified keyword
function isScriptUrlMatch(scriptSrc, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (scriptSrc.includes(keywords[i])) {
            return true;
        }
    }
    return false;
}

// Specify the keywords to check in the script URLs
var keywordsToCheck = [
    "videsigns",
    "formly",
    "https://slater.app/4908/8862.js",
];

// Get all script elements on the page
var scripts = document.getElementsByTagName("script");

// Array to store matched script URLs
var matchedScripts = [];

// Check each script URL for the specified keywords
for (var i = 0; i < scripts.length; i++) {
    var scriptSrcs = scripts[i].src;
    if (isScriptUrlMatch(scriptSrcs, keywordsToCheck)) {
        matchedScripts.push(scriptSrcs);
    }
}

// Display the matched script URLs
if (matchedScripts.length > 0) {
    scriptSrcAdded = matchedScripts;
    const script = document.querySelector(`script[src="${scriptSrcAdded}"]`);
    if (script) {
        scriptLocation =
            script.parentNode.tagName === "BODY" ?
            `Before &lt;/body&gt; tag` :
            "Inside <head> tag";
    }
} else {
    scriptSrcAdded = "No Formly script added to the page!" + failIcon;
}

// Create elements
const newElement = document.createElement("div");
const newStyle = document.createElement("style");

// Set the CSS styles of the new style element
newStyle.innerHTML = `
  .f-icon-embed-xxsmall-2 {
    width: 1.3rem !important;
    height: 1.3rem !important;
    color: #ff3232 !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    display: flex !important;
  }
  .f-icon-embed-xxsmall {
    width: 1.3rem !important;
    height: 1.3rem !important;
    color: #57ff4b !important;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center !important;
    display: flex !important;
  }
  .f-sidenav {
    grid-column-gap: 2rem;
    grid-row-gap: 2rem;
    color: rgba(255, 255, 255, .73);
    background-color: #1a1a1a;
    border-right: 1px solid #fff;
    flex-direction: column;
    height: 100vh;
    height: 100% !important;
    width: 35%;
    position: fixed !important;
    z-index: 999999999999 !important;
    top: 0;
    left: 0;
    background-color: #1a1a1a !important;
    overflow-x: hidden !important;
    transition: 0.5s !important;
    max-height: 100vh;
    padding: 32px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Oxygen, Fira Sans, Droid Sans, sans-serif;
    font-size: 15px;
    display: flex;
    overflow: auto;
    transform: translateX(-40rem);
    box-shadow: 0 0 rgba(0, 0, 0, 0), 1.8px -.2px 5.8px rgba(0, 0, 0, .043), 3.9px -.4px 11.7px rgba(0, 0, 0, .05), 6.6px -.7px 18px rgba(0, 0, 0, .055), 11.4px -1.2px 25.3px rgba(0, 0, 0, .06), 22.3px -2.3px 35.9px rgba(0, 0, 0, .063);
    line-height:1.4 !important;
  }
  .f-openbtn {
    white-space: nowrap !important;
    cursor: pointer !important;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, .1), 0 1px 3px rgba(0, 0, 0, .1) !important;
    visibility: visible !important;
    z-index: 99 !important;
    color: #e7e7e7 !important;
    opacity: 1 !important;
    width: auto !important;
    height: auto !important;
    background-color: #1e1e1e !important;
    border-radius: 3px !important;
    margin: 0 !important;
    padding: 6px !important;
    font-size: 13px !important;
    line-height: 14px !important;
    text-decoration: none !important;
    display: flex !important;
    position: fixed !important;
    top: auto !important;
    bottom: 12px !important;
    left: 12px !important;
    right: auto !important;
    overflow: visible !important;
    transform: none !important;
    align-items: center !important;
  }
  .f-title {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
  
  .f-text_attribute-title {
    color: #fff;
    font-size: 15px;
    font-weight: 600;
  }
  
  .f-div_attribute {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    flex-direction: column;
    margin-bottom: 14px;
    display: flex;
  }
  
  .f-div_attribute.f-text_attribute-wrapper {
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 0;
  }
  
  .icon-embed-xxsmall {
    color: #1eee32;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    display: flex;
  }
  
  .f-div_title {
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    justify-content: space-between;
    align-items: center;
    display: flex;
  }
  
  .icon-embed-xxsmall-2 {
    color: #ff3232;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 1rem;
    height: 1rem;
    display: flex;
  }
  
  .f-section-header {
    grid-column-gap: .375rem;
    grid-row-gap: .375rem;
    flex-direction: column;
    display: flex;
  }
  
  .paragraph {
    margin-bottom: 0;
  }
  
  .f-tex, .f-text_bold {
    color: #fff;
  }
  
  .hide {
    display: none;
  }
  
  .f-text_type {
    grid-column-gap: .75rem;
    grid-row-gap: .75rem;
    background-color: rgba(255, 255, 255, .04);
    border: 1px solid rgba(255, 255, 255, .08);
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
    display: flex;
  }
  
  .f-text_type._1 {
    grid-column-gap: .5rem;
    grid-row-gap: .5rem;
    color: rgba(255, 255, 255, .88);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  
  .f-text_script {
    color: #fffc57;
    font-family: Inconsolata, monospace;
    font-size: 11px;
  }
  
  .f-section-wrapper {
    grid-column-gap: 12px;
    grid-row-gap: 12px;
    flex-flow: column;
    display: flex;
  }
  
  .f-link {
    color: #fff;
  }
  
  .f-support-title{
    color: #fff;
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  
  .f-closebtn{
    position: fixed;
    top: 0.3rem;
    right: 0.7rem;
    color: white;
    text-decoration: none;
    font-size: 22px;
  }
  .f-hide{
    display :none !important;
  }
  
  .f-logic-text{
    padding-left:1rem;
  }
  .f-logic-text strong{
    color : white !Important;
  }
`;

// Append the new style element to the head
document.head.appendChild(newStyle);

// Append the new HTML element to the body
if (showButton) {
    document.body.appendChild(newElement);
}

// Set the innerHTML of the new HTML element
newElement.innerHTML = `
  <button class="f-openbtn" onclick="openNav()">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="20px" height="20px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
      <path fill="currentColor" d="M11 21h-1l1-7H7.5c-.88 0-.33-.75-.31-.78C8.48 10.94 10.42 7.54 13.01 3h1l-1 7h3.51c.4 0 .62.19.4.66C12.97 17.55 11 21 11 21"></path>
    </svg> Check Form
  </button>
  <div id="f-mySidenav" class="f-sidenav">
        <a href="javascript:void(0)" class="f-closebtn" onclick="closeNav()">&times;</a>
        <div class="f-section-header">
            <div class="f-support-title">Formly Debugger</div>
            <p class="paragraph">
                If you have spotted a bug or require extra support, please reach out to us via Slack or email us at <a href="mailto:developer@videsigns.uk" class="f-link">developer@videsigns.uk</a> .
            </p>
        </div>
        <div class="f-section-wrapper">
            <div class="f-title">Form Type</div>
            <div class="f-text_type">
                ${!logicExtra ? passIcon : failIcon}
                <div class="f-text-regular">
                    Basic (No FormlyLogic)<br/>
                </div>
            </div>
            <div class="f-text_type">
                ${quiz ? passIcon : failIcon}
                <div class="f-text-regular">
                    FormlyQuiz enabled<br/>
                </div>
            </div>
            <div class="f-text_type">
                ${weightedSelection ? passIcon : failIcon}
                <div class="f-text-regular">
                    Formly Weighted Quiz enabled<br/>
                </div>
            </div>
        </div>
        <div class="f-section-wrapper">
            <div class="f-title">Formly Script Info</div>
            <div class="f-text_type _1">
                <div class="f-text_title">
                    <strong class="f-text_bold">Script URL: </strong>
                    <br/>
                </div>
                <div class="f-text_script">
                    ${scriptSrcAdded}<br/>
                </div>
            </div>
            <div class="f-text_type _1">
                <div class="f-text_title">
                    <strong class="f-text_bold">Script Location:</strong>
                </div>
                  ${
                    scriptLocation === "head"
                      ? '<div class="f-text_script">Inside &lt;head&gt; tag<br/></div>'
                      : '<div class="f-text_script">Before &lt;/body&gt; tag<br/></div>'
                  }
            </div>
        </div>
        <div class="f-section-wrapper">
            <div class="f-title">Core Attributes</div>
            <div class="f-div_attribute f-text_attribute-wrapper">
                <div class="f-div_title">
                    <div class="f-text_attribute-title">1. Form: data-form=multistep</div>
                    ${formStepLength ? passIcon : failIcon}
                </div>
                <div>Multistep form attribute is on Form element and not on Form Block element</div>
            </div>
            <div class="f-div_attribute f-text_attribute-wrapper">
                <div class="f-div_title">
                    <div class="f-text_attribute-title">2. Form Steps: data-form=step</div>
                    ${formStepLength > 0 ? passIcon : failIcon}
                </div>
                <div>Number of steps: ${formStepLength}</div>
            </div>
            <div class="f-div_attribute f-text_attribute-wrapper">
                <div class="f-div_title">
                    <div class="f-text_attribute-title">3. Next Buttons: data-form=next-btn</div>
                </div>
                <div class="f-div_title">
                    <div>Next button present?</div>
                    ${nextBtnExist ? passIcon : failIcon}
                </div>
                <div class="f-div_title">
                    <div>Next button attribute is NOT on Form Submit Button</div>
                    ${isNextBtnOnSubmit ? failIcon : passIcon}
                </div>
            </div>
            <div class="f-div_attribute f-text_attribute-wrapper">
                <div class="f-div_title">
                    <div class="f-text_attribute-title">4. Back Buttons: data-form=back-btn</div>
                </div>
                <div class="f-div_title">
                    <div>Back button present?</div>
                    ${backBtnExist ? passIcon : failIcon}
                </div>
                <div class="f-div_title">
                    <div>Back button attribute is NOT on Form Submit Button</div>
                    ${isBackBtnOnSubmit ? failIcon : passIcon}
                </div>
            </div>
            <div class="f-div_attribute f-text_attribute-wrapper">
                <div class="f-div_title">
                    <div class="f-text_attribute-title">5. Submit Buttons: data-form=submit-btn</div>
                </div>
                <div class="f-div_title">
                    <div>Submit button present?</div>
                    ${submitBtnExist ? passIcon : failIcon}
                </div>
                <div class="f-div_title">
                    <div>Submit button attribute IS on Form Submit Button</div>
                    ${isSubmitBtnOnSubmit ? failIcon : passIcon}
                </div>
            </div>
        </div>
        <div class="f-section-wrapper">
            <div class="f-title">Powerups</div>
            ${
              progressBarAttr && progressIndicatorAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Automatic Progress Indicators</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              customProgressAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Custom Progress Indicators</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              cardDivAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Intro Cards Or Steps Without Inputs</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              currentStepAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Current Step Text</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              totalStepAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Total Step Text</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              enterAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Press &quot;Enter &quot;To Progress</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              submitAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Press "⌘ + Enter " To Submit</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              radioSkipAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Radio Inputs</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              customCheckboxAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">Checkboxes</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
            ${
              recapatchaAttr
                ? `            
                <div class="f-text_type">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">ReCAPTCHA</div>
                      ${passIcon}
                  </div>
                </div>`
                : ""
            }
        </div>
        ${
          logicExtra
            ? `
          <div class="f-section-wrapper">
              <div class="f-title">Formly Logic</div>
              <div class="f-text_type _1">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">data-answer=&quot;&quot; on first step-wrapper</div>
                      ${dataAnswerOnFirstStep ? passIcon : failIcon}
                  </div>
              </div>
              ${
                dataGoToDataAnswerOnFormStep !== ""
                  ? ` 
                <div class="f-text_type _1">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">data-answer &amp; data-go on same element as data-step</div>
                  </div>
                    ${dataGoToDataAnswerOnFormStep}
                </div>`
                  : ""
              }
              <div class="f-text_type _1">
                  <div class="f-div_title">
                      <div class="f-text_attribute-title">data-answer &amp; data-go pairs</div>
                  </div>
                  ${dataAnswerAndDataGoToPairs}
              </div>
              ${
                dataAnswerIsOnDataCard !== ""
                  ? `
                <div class="f-text_type _1">
                    <div class="f-div_title">
                        <div class="f-text_attribute-title">data-answer is on data-card = true</div>
                    </div>
                    ${dataAnswerIsOnDataCard}
                </div>`
                  : ""
              }
          </div>`
            : ""
        }
        <div class="f-section-wrapper">
            <div class="f-text_type">
                <div class="f-div_title">
                    <div>
                        If all of these look fine and you &#x27;re still experiencing an issue. Please reach out to us via <a href="https://join.slack.com/t/vdscommunity/shared_invite/zt-2gal70tpg-wKFIK7gVlFDDmyPZOqOMrg" target="_blank" class="f-link">Slack</a>                        or <a href="#" class="f-link">developer@videsigns.uk</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

// Functions to open and close the side navigation
function openNav() {
  console.log("clicked");
  document.getElementById("f-mySidenav").style.transform = "translateX(0rem)";
}

function closeNav() {
  document.getElementById("f-mySidenav").style.transform = "translateX(-40rem)";
}