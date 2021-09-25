"use strict"

// Функция pow(a, b), которая возводит a в степень b. Оператор ** и Math.pow не использовать.

function pow(a, b) {

    let result = 1;
    for (let i = 1; i <= b; i += 1){
        result *= a;
    }
    return result;
}

const numberToCalculate = +prompt("Please enter the number to calculate.");
const exponentNumber = +prompt("Please enter the exponent number.");

const operationResult = pow(numberToCalculate, exponentNumber);
console.log(operationResult);

/* Функция createUser(firstName, lastName, age), которая принимает имя, фамилию и возраст, 
а возвращает объект вида {firstName, lastName, age}. Если один из параметров не задан - 
свойство принимает значение null.
*/

function createUser(firstName, lastName, age) {

    const userObject = {
        firstName,
        lastName,
        age,
    };

    for (let key in createUser) {
        if (!firstName || !lastName || !age) {
            userObject.key =  null;
    }
    }
    return userObject;
}

const getFirstName = prompt("Please enter your first name.");
const getlastName = prompt("Please enter your last name.");
const getAge = +prompt("Please enter your age.");

console.log(createUser(getFirstName, getlastName, getAge));

// Напишите функцию, которая принимает число и две другие функции. Если число меньше 100 - вызывается первая функция. Если больше - вторая.

function isBiggerThan100(enteredNumber, lowerThan100, biggerThan100){
    if(enteredNumber < 100){
        lowerThan100();
    }
    else {
        biggerThan100();
    }
}

const getNumber = +prompt("Please enter the number.");

isBiggerThan100(
    getNumber, 

    function() {
        console.log("Lower than 100.");
    },

    function(){
        console.log("Bigger than 100");
    }
    );