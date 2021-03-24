var calculatorDisplay = document.getElementById("calculatorDisplay").innerHTML
var lastCharacter = calculatorDisplay.slice(-1)

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

// Tratar de prohibir repeticion de operadores basándose en el último botón apretado
// Print values in display when buttons are pressed
function printButton (e) {
    var pressedKeyValue = e.target.getAttribute('value')

        if (pressedKeyValue == '.' && calculatorDisplay.includes('.')
        ) {}
        else if (calculatorDisplay.length >= 10)
        {}
        else if (
            (pressedKeyValue == '.' && calculatorDisplay == '') ||
            (pressedKeyValue == '-' && calculatorDisplay == '') ||
            (pressedKeyValue == '+' && calculatorDisplay == '') ||
            (pressedKeyValue == '*' && calculatorDisplay == '') ||
            (pressedKeyValue == '/' && calculatorDisplay == '')
        ) {}
        else if (
            (pressedKeyValue == '.' && lastCharacter == '+') ||
            (pressedKeyValue == '.' && lastCharacter == '-') ||
            (pressedKeyValue == '.' && lastCharacter == '/') ||
            (pressedKeyValue == '.' && lastCharacter == '*') ||
    
            (pressedKeyValue == '+' && lastCharacter == '+') ||
            (pressedKeyValue == '+' && lastCharacter == '-') ||
            (pressedKeyValue == '+' && lastCharacter == '/') ||
            (pressedKeyValue == '+' && lastCharacter == '*') ||
            (pressedKeyValue == '+' && lastCharacter == '.') ||
    
            (pressedKeyValue == '-' && lastCharacter == '+') ||
            (pressedKeyValue == '-' && lastCharacter == '-') ||
            (pressedKeyValue == '-' && lastCharacter == '/') ||
            (pressedKeyValue == '-' && lastCharacter == '*') ||
            (pressedKeyValue == '-' && lastCharacter == '.') ||
    
            (pressedKeyValue == '*' && lastCharacter == '+') ||
            (pressedKeyValue == '*' && lastCharacter == '-') ||
            (pressedKeyValue == '*' && lastCharacter == '/') ||
            (pressedKeyValue == '*' && lastCharacter == '*') ||
            (pressedKeyValue == '*' && lastCharacter == '.') ||
    
            (pressedKeyValue == '/' && lastCharacter == '+') ||
            (pressedKeyValue == '/' && lastCharacter == '-') ||
            (pressedKeyValue == '/' && lastCharacter == '/') ||
            (pressedKeyValue == '/' && lastCharacter == '*') ||
            (pressedKeyValue == '/' && lastCharacter == '.')
        ) {}
        else if (calculatorDisplay == '') {
            calculatorDisplay += pressedKeyValue
            document.getElementById("calculatorDisplay").innerHTML = calculatorDisplay 
            lastCharacter = calculatorDisplay.slice(-1)
        }
        else {
            calculatorDisplay += pressedKeyValue
            document.getElementById("calculatorDisplay").innerHTML = calculatorDisplay 
            lastCharacter = calculatorDisplay.slice(-1)
        }
}

// Clear display when AC button is pressed
function clearDisplay () {
    document.getElementById("calculatorDisplay").innerHTML = ''
    calculatorDisplay = ''
}

// Erase last character when C button is pressed
function eraseLastCharacter () {
    let newDisplay = calculatorDisplay.slice(0, calculatorDisplay.length - 1);
    document.getElementById("calculatorDisplay").innerHTML = newDisplay
    calculatorDisplay = newDisplay
    lastCharacter = calculatorDisplay.slice(-1)
}

// Show result in display when = button is pressed
function showResult () {
    let result = eval(document.getElementById("calculatorDisplay").innerHTML)
    document.getElementById("calculatorDisplay").innerHTML = result
}

// Link buttons with keyboard keys 
function keyBoardKeys (e) {
    switch (e.which) {
        case 27: clearDisplay(); break;
        case 8: clearDisplay(); break;
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

