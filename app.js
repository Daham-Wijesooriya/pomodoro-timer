const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");
const addTime = document.getElementById("+time");
const subtractTime = document.getElementById("-time");
const timer = document.getElementById("timer");

let time = 1500; // 25 minutes in seconds
let timeleft = time; 
let interval;

const updateTimer = () => {
    const minutes = Math.floor(timeleft / 60);
    const seconds = timeleft % 60;
    timer.innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

const startTimer = () => {
    interval = setInterval(() => {
        timeleft--;
        updateTimer();

        if (timeleft <= 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeleft = 1500;
            updateTimer();
        }
    }, 1000);
};

const pauseTimer = () => {
    clearInterval(interval);
};

const resetTimer = () => {
    clearInterval(interval);
    timeleft = time;
    updateTimer();
};

const addTimeFunc = () => {
    time += 300;
    timeleft += 300;
    updateTimer();
};

const subtractTimeFunc = () => {
    if (time > 300) {
        time -= 300;
        timeleft -= 300;
        updateTimer();
    }
};

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
addTime.addEventListener("click", addTimeFunc);
subtractTime.addEventListener("click", subtractTimeFunc);
