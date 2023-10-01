
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
let timerref = document.querySelector(".timerdisplay"); // Corrected class name

let int = null;

document.getElementById("startTimer").addEventListener("click", () => {
    if (int !== null) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

function displayTimer() {
    milliseconds += 10;
    seconds = milliseconds === 1000 ? (milliseconds = 0, seconds + 1) : seconds;
    minutes = seconds === 60 ? (seconds = 0, minutes + 1) : minutes;
    hours = minutes === 60 ? (minutes = 0, hours + 1) : hours;

    let h = String(hours).padStart(2, "0");
    let m = String(minutes).padStart(2, "0");
    let s = String(seconds).padStart(2, "0");
    let ms = String(milliseconds).padStart(3, "0");

    timerref.innerHTML = `${h}:${m}:${s}:${ms}`; // Corrected timer format
}

document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(int);
});

document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
    timerref.innerHTML = "00:00:00:000"; // Corrected timer format
});
