"use strict"

// Первая схема

const isUserWantBeer = confirm("Do you want beer?");
let replyMessage;

if (isUserWantBeer){
    replyMessage = "Have a sit!";
} else {
    replyMessage = "Go away!";
}

// с тернарным

replyMessage = isUserWantBeer ? "Have a sit!" : "Go away!";

// ------------ Вторая схема ------------

const userAge = +prompt("What's your age?");
let greeting;

if (userAge >= 18 && userAge <= 30){
    greeting = "Hi!";
} else if (userAge > 30){
    greeting = "Hello, sir.";
} else {
    greeting = "Sorry, but you can't enter.";
}

// с тернарным

greeting = (userAge >= 18 && userAge <= 30) ? "Hi!" :
(userAge > 30) ? "Hello, sir." :
"Sorry, but you can't enter.";

// ------------ Третья схема ------------

const userDrinkChoice = prompt("What would you like to drink? We have coffee and tea.");
const sugarChoice = confirm("Sugar?");
let userDrink;

if (userDrinkChoice === "tea" && sugarChoice){
    userDrink = "A cup of tea with sugar.";

} else if (userDrinkChoice === "tea" && sugarChoice === false) {
    userDrink = "A cup of tea without sugar.";

} else if (userDrinkChoice === "coffee" && sugarChoice){
    userDrink = "A cup of coffee with sugar.";
    
} else if (userDrinkChoice === "coffee" && sugarChoice === false){
    userDrink = "A cup of coffee without sugar.";
}

// с тернарным

userDrink = (userDrinkChoice === "tea" && sugarChoice) ? "A cup of tea with sugar." :
(userDrinkChoice === "tea" && sugarChoice === false) ? "A cup of tea without sugar." :
(userDrinkChoice === "coffee" && sugarChoice) ? "A cup of coffee with sugar.":
"A cup of coffee without sugar.";