"use strict"
function newNumberToGuess(){
    return Math.ceil(Math.random() * 100);
}

let numberToGuess = newNumberToGuess();
let isUserWantPlay = true;

while (isUserWantPlay) {

    let isNumberGuessed = false;

    while(!isNumberGuessed){

        const enteredNumber = +prompt("Please enter your guess. Number from 1 to 100.");

        if (!enteredNumber){
            console.log("You rejected to guess the number.");
            break;

        }else if (enteredNumber > numberToGuess) {
            console.log("Too much.");
            continue;

        } else if (enteredNumber < numberToGuess) {
            console.log("Too little.");
            continue;

        } else {
            console.log("Congratulations! You're right.");
            isNumberGuessed = true;
        }
    }

    let askUserToPlay = confirm("Game over. Do you want to play again?");

    if(askUserToPlay) {
        numberToGuess = newNumberToGuess();
        isNumberGuessed = false;

    } else {
        isUserWantPlay = false; 
    }
}

console.log("Thank you for playing.");