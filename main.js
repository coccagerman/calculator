// let pressedKeyValue = e.target.getAttribute('value')
// let calculatorDisplay = document.getElementById("calculatorDisplay").value
// let lastCharacter = String(calculatorDisplay).slice(-1)
// console.log('lastCharacter ' + lastCharacter)

// Switch dark mode when lightbulb icon is pressed
$("#lightbulb").on('click', switchDarkMode)

// Print values in display when buttons are pressed
$(".value-btn").on('click', printButton)

// Clear display when C button is pressed
$("#clear-btn").on('click', clearWindow)

// Show result in display when = button is pressed
$("#equal-btn").on('click', showResult)

// Link buttons with keyboard keys 
$(window).keydown(keyBoardKeys)