// Switch dark mode when lightbulb icon is pressed
function switchDarkMode () {
    $('body').toggleClass('darkMode');

    const body = document.querySelector('body');

    if (body.classList.contains('darkMode')) {
        $('#lightbulb').attr("src", "lampOn.png")
    } else {
        $('#lightbulb').attr("src", "lampOff.png")
    }
}

// Print values in display when buttons are pressed
function printButton (e) {
    let pressedKeyValue = e.target.getAttribute('value')
    document.getElementById("calculatorDisplay").value += pressedKeyValue
}

// Clear display when C button is pressed
function clearWindow () {
    $("#calculatorDisplay").val("")
}

// Show result in display when = button is pressed
function showResult () {
    console.log(eval(document.getElementById("calculatorDisplay").value))
    let result = eval(document.getElementById("calculatorDisplay").value)
    $("#calculatorDisplay").val(result)
}

// Link buttons with keyboard keys 
function keyBoardKeys (e) {
    switch (e.which) {
        case 27: clearWindow(); break;
        case 8: clearWindow(); break;
        case 13: showResult(); break;
        case 190: printButton($('#decimal').click()); break;
        case 189: printButton($('#substract').click()); break;
        case 187: printButton($('#add').click()); break;
        case 88: printButton($('#multiply').click()); break;
        case 191: printButton($('#divide').click()); break;
        case 48: printButton($('#0').click()); break;
        case 49: printButton($('#1').click()); break;
        case 50: printButton($('#2').click()); break;
        case 51: printButton($('#3').click()); break;
        case 52: printButton($('#4').click()); break;
        case 53: printButton($('#5').click()); break;
        case 54: printButton($('#6').click()); break;
        case 55: printButton($('#7').click()); break;
        case 56: printButton($('#8').click()); break;
        case 57: printButton($('#9').click()); break;
    }
}