"use strict"

const existingAccounts = {
    login123 : "password123",
    login321 : "password321",
};

function enterLogin() {
    const loginData = prompt("Please enter your login data.");
    return loginData;
}
function enterPassword() {
    const passwordData = prompt("Please enter your password.");
    return passwordData;
}

let enteredLogin = enterLogin();
let enteredPassword = enterPassword();

// ============================== запросили логин и пароль

let isLoginValid;
let savedPassword;

checkLogin();

function checkLogin(){

    for (let key in existingAccounts) {
        if (key === enteredLogin) {
            isLoginValid = true;
            savedPassword = existingAccounts[key];
        }
    }
}

// ============================== проверка валиден ли логин. если да, сохранить значение пароля для него

authentification();

function authentification() {

        if (isLoginValid) {
        checkPassword();

        } else {
        createNewUser();
        }
    }

function checkPassword (){

            if (enteredPassword === savedPassword) {
                greetUser();
            
            } else {
                requestNewPassword();
            }
}

function greetUser(){
    console.log(`Hello, ${enteredLogin}!`);
}

function requestNewPassword (){
    let doesUserWantAgain = confirm("Wrong PW. Would you like to enter it again?");

        if (doesUserWantAgain) {
            enteredPassword = enterPassword();
            checkPassword();

        } else {
            console.log("You refused to enter the PW again.");
            }
    }

function createNewUser (){
    let doesUserWantRegister = confirm("You entered the wrong login. Would you like to register with the username you entered?");

    if (doesUserWantRegister) {

        let newLogin = enteredLogin;
        let newPassword = prompt("Please enter the password for your login.");

        if (!newLogin || !newPassword){
            console.log("You refused to register.");
            return;
        }

        existingAccounts[newLogin] = newPassword;
        tryNewLogin();

    } else {
        console.log("You refused to register.");
    }
}

function tryNewLogin() {
    let isTryNewLogin = confirm("You have successfully registered on the site. Would you like to login?");

            if (isTryNewLogin) {
                enteredLogin = enterLogin();
                enteredPassword = enterPassword();
                checkLogin();
                authentification();
            } else {
                console.log("You refused to login.");
            }
}