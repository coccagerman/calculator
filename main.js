// Switch dark mode when lightbulb icon is pressed
$("#lightbulb").on('click', switchDarkMode)

// Print values in display when buttons are pressed
$(".value-btn").on('click', printButton)

// Clear display when AC button is pressed
$("#clear-btn").on('click', clearDisplay)

// Erase last character when C button is pressed
$("#eraseLast-btn").on('click', eraseLastCharacter)

// Show result in display when = button is pressed
$("#equal-btn").on('click', showResult)

// Link buttons with keyboard keys 
$(window).keydown(keyBoardKeys)