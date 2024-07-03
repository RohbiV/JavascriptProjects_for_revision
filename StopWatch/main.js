// global variables
let hr_time = 0, 
    min_time = 0,
    sec_time = 0;

//dom elements
    // for time
let hr = document.querySelector("#hour");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");

    // for buttons
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".Stop");
let resetBtn = document.querySelector(".Reset");

startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stopTimer);
resetBtn.addEventListener("click",resetTimer);

function startTimer() {
    interval = setInterval(updateTimer,1000);
    startBtn.disabled = true;
}

function stopTimer() {
    clearInterval(interval);
    startBtn.disabled = false;
}

function resetTimer() {
    clearInterval(interval);
    resetTimerData();
    startBtn.disabled = false;
}

function updateTimer() {
    sec_time++;
    if(sec_time === 60) {
        sec_time = 0;
        min_time++;
        if(min_time == 60) {
            min_time = 0;
            hr_time++;
        }
    }

    displayTimer();
}


function displayTimer() {
    hr.textContent = padTime(hr_time);
    min.textContent = padTime(min_time);
    sec.textContent = padTime(sec_time);
}

function padTime(time) {
    return time.toString().padStart(2,"0");
}

function resetTimerData() {
    hr_time = 0;
    min_time = 0;
    sec_time = 0;
    displayTimer();
}

