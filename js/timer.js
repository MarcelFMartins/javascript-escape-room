// --------; TIMER ;-------------- //

const initialTimerDuration = 180;

const timerElement = document.getElementById("timer");

function updateTimer(duration) {
const minutes = Math.floor(duration / 60);
const seconds = duration % 60;
timerElement.textContent = `${minutes}:${
    seconds < 10? "0" : ""
}${seconds}`;
}

function startTimer() {
let timerDuration = initialTimerDuration;
updateTimer(timerDuration);
timer = setInterval(() => {
    timerDuration--;
    if (timerDuration < 0) {
    clearInterval(timer);

    alert("Game Over!");
    window.location.href = "index.html";
    } else {
    updateTimer(timerDuration);
    }
}, 1000);
}

window.onload = function () {
    startTimer();
};