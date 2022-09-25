let [defaultHours, defaultMinutes, defaultSec, defaultMilisec] = [0, 0, 0, 0];
// Target all time
const miliseconds = document.getElementById("miliseconds");
const seconds = document.getElementById("seconds");
const minutes = document.getElementById("minutes");
const hours = document.getElementById("hours");

// Button
const startStopval = document.getElementById("startStopval");
// Icons
const icons = document.querySelector(".fa-solid");

// Initial value null and after click the start button the value will be setInterval
let miliSec = null;
let sec = null;
let minute = null;
let hour = null;

// Toggle button means start and stop occurs just click single button
const toggle = () => {
  if (startStopval.innerHTML === "Start") {
    startStopval.innerHTML = "Stop";
    miliSec = setInterval(miliSceFunc, 10);
    sec = setInterval(secFunc, 1000);
    minute = setInterval(minuteFunc, 60000);
    hour = setInterval(hourFunc, 3600000);
  } else {
    clearInterval(miliSec);
    clearInterval(sec);
    clearInterval(minute);
    clearInterval(hour);
    startStopval.innerHTML = "Start";
  }
};

// Reset button
const reset = () => {
  clearInterval(miliSec);
  clearInterval(sec);
  clearInterval(minute);
  clearInterval(hour);
  [defaultHours, defaultMinutes, defaultSec, defaultMilisec] = [0, 0, 0, 0];
  miliseconds.innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  hours.innerHTML = "00";
};

function miliSceFunc() {
  if (defaultMilisec === 100) {
    defaultMilisec = 0;
  }
  defaultMilisec++;
  miliseconds.innerHTML = defaultMilisec;
}

function secFunc() {
  if (defaultSec === 60) {
    defaultSec = 0;
  }
  defaultSec++;
  seconds.innerHTML = defaultSec;
}

function minuteFunc() {
  if (defaultMinutes === 60) {
    defaultMilisec = 0;
  }
  defaultMinutes++;
  minutes.innerHTML = defaultMinutes;
}

function hourFunc() {
  defaultHours++;
  hours.innerHTML = defaultHours;
}
