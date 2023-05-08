// Select each button
const redBtn = document.getElementById("redButton");
const yellowBtn = document.getElementById("yellowButton");
const blueBtn = document.getElementById("blueButton");
const whiteBtn = document.getElementById("whiteButton");

// Define event handlers for each button
function switchToRed() {
  document.body.classList.remove("yellow-theme", "blue-theme", "white-theme");
  document.body.classList.add("red-theme");
}

function switchToYellow() {
  document.body.classList.remove("red-theme", "blue-theme", "white-theme");
  document.body.classList.add("yellow-theme");
}

function switchToBlue() {
  document.body.classList.remove("red-theme", "yellow-theme", "white-theme");
  document.body.classList.add("blue-theme");
}

function switchToWhite() {
  document.body.classList.remove("red-theme", "yellow-theme", "blue-theme");
  document.body.classList.add("white-theme");
}

// Add event listeners to each button
redBtn.addEventListener("click", switchToRed);
yellowBtn.addEventListener("click", switchToYellow);
blueBtn.addEventListener("click", switchToBlue);
whiteBtn.addEventListener("click", switchToWhite);
