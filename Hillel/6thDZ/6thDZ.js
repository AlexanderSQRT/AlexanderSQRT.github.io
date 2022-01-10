"use strict"

const savedLogin = "login123";
const savedPassword = "password123";

const userLogin = prompt("Please enter your login data.");
let userPassword = prompt("Please enter your password.");

if(userLogin !== savedLogin){
    console.log("Error! Wrong login. Please reload the page and start again.");

} else if (userPassword === savedPassword){
    console.log(`Hello, ${userLogin}!`);

} else {
    while (userPassword !== savedPassword){
        userPassword = prompt("Wrong Password. You may try to enter it again.");

        if (userPassword === savedPassword) {
            console.log(`Hello, ${userLogin}!`);
        }
        else if(userPassword === null) {
            console.log("Wrong password!");
            break;
        }
    }
}