// Work on adding the buttons like 5 min, 30 min, 60 min and a custom input box for minutes
// Make sure the timmer stops when off is pressed
// Find a way to keep 00:00:00 when user types it just replaces the 0s
// Add sound when timer ends


// Global variables

// When user types in the input box it will replace the 00:00 and format it to 00:00:00
//A variable to store the time input by the user
let input = document.getElementById('timeInput');
// If user select the 5 min button set the timer to 5 min
let minFive = document.getElementById('+5');
// If user select the 30 min button set the timer to 30 min
let minThirty = document.getElementById('+30');
// If user select the 60 min button set the timer to 60 min
let minSixty = document.getElementById('+1h');

//if user inputs valid time start countdown  and presses the ON button then alert valid time
let leninput = input.length;
if ((leninput >= 0) && (leninputinput <= 6) && (input.includes(":"))) {
    //Format input to 00:00:00
    alert("Valid time");
}
//else alert user to input valid time when press ON button
else{
    alert("Please enter a valid time in the format HH:MM:SS");
}

//when timer reaches 0 play sound

// when user presses off button stop countdown

// When user presses on button start countdown and play music until timer ends

// When user presses enter isntead of on button warn user to press on button

// when user presses music on/off button once music with turn off, however, if music is pressed twice music will turn on.










