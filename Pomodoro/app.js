// Work on adding the buttons like 5 min, 30 min, 60 min and a custom input box for minutes
// Make sure the timmer stops when off is pressed
// Find a way to keep 00:00:00 when user types it just replaces the 0s
// Add sound when timer ends



let timer;
let enteredMinutes = null;
let chosenMinutes5 = null;
let chosenMinutes30 = null;
let chosenMinutes60 = null;



const chime = new Audio('chime.mp3');
const onButton = document.querySelector('#onButton');
const offButton = document.querySelector('#offButton');
cons