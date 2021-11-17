const minutesInput = document.querySelector("input.minutes");
const secondsInput = document.querySelector("input.seconds");

function updatingTime() {
    const timeMinutesValue = document.querySelector(".time.minutes");
    const timeSecondsValue = document.querySelector(".time.seconds");

    timeMinutesValue.innerHTML = minutesInput.value;
    timeSecondsValue.innerHTML = secondsInput.value;

}

startUpdatingTime();

function startUpdatingTime() {

minutesInput.addEventListener("keyup", updatingTime);
secondsInput.addEventListener("keyup", updatingTime);

}

const startButton = document.querySelector(".button-start");

function reverseCount() {

    if (secondsInput.value > 59 || secondsInput.value < 0) {
        console.log("Invalid seconds format. It should be from 0 to 59.");
        return; 
    } else if (minutesInput.value > 59 || minutesInput.value < 0) {
        console.log("Invalid minutes format. It should be from 0 to 59.");
        return;
    } else if (!minutesInput.value || !secondsInput.value) {
        console.log("You have not entered the time.");
        return;
    }

    stopUpdatingTime();
    startButton.removeEventListener("click", reverseCount);


    const timeMinutesValue = document.querySelector(".time.minutes");
    const timeSecondsValue = document.querySelector(".time.seconds");

    const intervalId = setInterval(() => {

        if (timeSecondsValue.innerHTML === "0" && timeMinutesValue.innerHTML === "0") {
            clearInterval(intervalId);
            displayMessage();
            return;
        }

        timeSecondsValue.innerHTML -= 1;

        if (timeSecondsValue.innerHTML === "-1") timeSecondsValue.innerHTML = "59";
        if (timeSecondsValue.innerHTML === "59") timeMinutesValue.innerHTML -= 1;

    }, 1000);
}

startButton.addEventListener("click", reverseCount);

function stopUpdatingTime() {
    minutesInput.removeEventListener("keyup", updatingTime);
    secondsInput.removeEventListener("keyup", updatingTime);
}

function displayMessage() {
    const messageElem = document.querySelector(".countOverMessage");
    messageElem.style.display = "flex";
}

const newCountBtn = document.querySelector(".newCount");

function startNewCountdown() {
    startUpdatingTime();
    startButton.addEventListener("click", reverseCount);
    const messageElem = document.querySelector(".countOverMessage");
    messageElem.style.display = "none";

}

newCountBtn.addEventListener("click", startNewCountdown);