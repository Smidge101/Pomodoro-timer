// Work on adding the buttons like 5 min, 30 min, 60 min and a custom input box for minutes
// Make sure the timmer stops when off is pressed
// Find a way to keep 00:00:00 when user types it just replaces the 0s
// Add sound when timer ends

// Global variables

// When user types in the input box it will replace the 00:00 and format it to 00:00:00
//A variable to store the time input by the user

// let input = document.querySelector('timeInput');;
// // If user select the 5 min button set the timer to 5 min
// let minFive = document.getElementById('+5');
// // If user select the 30 min button set the timer to 30 min
// let minThirty = document.getElementById('+30');
// // If user select the 60 min button set the timer to 60 min
// let minSixty = document.getElementById('+1hr');
// // If user select the ON button start the timer
// let onButton = document.querySelector('start');
// // If user select the OFF button stop the timer
// let offButton = document.getElementById('stop');
const startButton = document.querySelector(".start");
const stopButton = document.querySelector(".stop");
const minFive = document.getElementById("+5");
const minThirty = document.getElementById("+30");
const minSixty = document.getElementById("+1hr");
const sessionMinutes = document.querySelector(".minutes");
const sessionSeconds = document.querySelector(".seconds");
const sessionHours = document.querySelector(".hours");
let myInterval;
let state = true;

startButton.addEventListener("click", appTimer);
stopButton.addEventListener("click", stopTimer);
minFive.addEventListener("click", addFiveMinutes);
minThirty.addEventListener("click", addThirtyMinutes);
minSixty.addEventListener("click", addSixtyMinutes);


function appTimer() {
    const sessionAmount = Number.parseInt(sessionMinutes.textContent);

    if (state) {
        state = false;
        let totalSeconds = sessionAmount * 60;

        myInterval = setInterval(() => {
            totalSeconds--;

            let minutesLeft = Math.floor(totalSeconds / 60);
            let secondsLeft = totalSeconds % 60;

            sessionMinutes.textContent = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
            sessionSeconds.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

            if (totalSeconds <= 0) {
                clearInterval(myInterval);
                alert("Time's up!");
                state = true; // Reset state so timer can be used again
            }
        }, 1000);

    } else {
        alert("Timer is already running");
    }
}
function stopTimer() {
    clearInterval(myInterval);
    state = true;
}

function addFiveMinutes() {
    let currentMinutes = Number.parseInt(sessionMinutes.textContent);
    currentMinutes += 5;
    sessionMinutes.textContent = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
}

function addThirtyMinutes() {
    let currentMinutes = Number.parseInt(sessionMinutes.textContent);
    currentMinutes += 30;
    sessionMinutes.textContent = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;

    if (currentMinutes >= 60){
        let extraHours = Math.floor(currentMinutes / 60);
        let remainingMinutes = currentMinutes % 60;
        sessionHours.textContent = (Number.parseInt(sessionHours.textContent) + extraHours).toString().padStart(2, '0');
        sessionMinutes.textContent = remainingMinutes.toString().padStart(2, '0');
    }
}
function addSixtyMinutes() {
    let currentMinutes = Number.parseInt(sessionHours.textContent);
    currentMinutes += 1;
    sessionHours.textContent = currentMinutes < 10 ? "0" + currentMinutes : currentMinutes;
}


// function buttonClicked(){
//     //Get length of input
//     let inputValue = input.value;
//     let lenInput = inputValue.length;
//     let isValidTime = /^\d{2}:\d{2}:\d{2}$/.test(inputValue);

//     //if user inputs valid time start countdown  and presses the ON button then alert valid time
//     if ((lenInput >= 0) && (lenInput <= 8) && isValidTime){
//         //Once user presses ON button start countdown
//         onButton.addEventListener('click', buttonClicked);
//         console.log("Valid time");
//     }
//     //else alert user to input valid time when press ON button
//     else{
//         alert("Please enter a valid time in the format HH:MM:SS");
//     }


// }
// onButton.addEventListener('click', buttonClicked);
// offButton.addEventListener('click', buttonClicked);


//when timer reaches 0 play sound

// when user presses off button stop countdown

// When user presses on button start countdown and play music until timer ends

// When user presses enter isntead of on button warn user to press on button

// when user presses music on/off button once music with turn off, however, if music is pressed twice music will turn on.










