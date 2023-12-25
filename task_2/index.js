const timeDisplay = document.querySelector(".time-display");
const hours = timeDisplay.querySelector(".hours");
const minutes = timeDisplay.querySelector(".minutes");
const seconds = timeDisplay.querySelector(".seconds");
const milliseconds = timeDisplay.querySelector(".milliseconds");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

const lapButton = document.getElementById("lap");
const lapList = document.getElementById("lap-list");

let isRunning = false;
let startTime = 0;
let lapTimes = [];

function startStopwatch() {
    isRunning = true;
    startTime = Date.now();
    updateTime();
}

function stopStopwatch() {
    isRunning = false;
}

function resetStopwatch() {
    isRunning = false;
    startTime = 0;
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
    milliseconds.textContent = "00";
    lapTimes = [];
    lapList.innerHTML = "";
}

function recordLap() {
    const lapTime = calculateTimeElapsed();
    lapTimes.push(lapTime);
    createLapItem(lapTime);
}

function createLapItem(lapTime) {
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapList.appendChild(lapItem);
}

function update