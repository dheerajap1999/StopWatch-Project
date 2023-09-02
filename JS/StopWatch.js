// Get necessary elements
const timerElement = document.getElementById("timer");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

let startTime = 0;
let elapsedTime = 0;
let intervalId = null;

// Start button click event
startButton.addEventListener("click", () => {
    if (!intervalId) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTimer, 1000);
    }
});

// Stop button click event
stopButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    elapsedTime = Date.now() - startTime;
});

// Reset button click event
resetButton.addEventListener("click", () => {
    clearInterval(intervalId);
    intervalId = null;
    startTime = 0;
    elapsedTime = 0;
    updateTimer();
});

// Update timer function
function updateTimer() {
    if (intervalId) {
        const currentTime = Date.now() - startTime;
        const totalSeconds = Math.floor(currentTime / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        timerElement.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timerElement.textContent = '00:00';
    }
}

