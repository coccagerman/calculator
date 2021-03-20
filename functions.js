function printButton (e) {
    document.getElementById("calculatorDisplay").value += e.target.textContent
    console.log(e.target.attr(value))
    // $("#calculatorDisplay").val(e.target.textContent += e.target.textContent)
    // document.getElementById("calculatorDisplay").value += e.target.textContent;
}

function clearWindow () {
    $("#calculatorDisplay").val("")
}

function switchDarkMode () {
    $('body').toggleClass('darkMode');

    const body = document.querySelector('body');

    if (body.classList.contains('darkMode')) {
        $('#lightbulb').attr("src", "lampOn.png")
    } else {
        $('#lightbulb').attr("src", "lampOff.png")
    }
}

function showResult (input) {
    console.log('value ' + $("#calculatorDisplay").val())
    console.log('input ' + input)
    return parseFloat(input)
}