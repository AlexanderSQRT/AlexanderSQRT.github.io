"use strict"

/* 1. Напишите функцию, которая принимает массив с числами, возвращает их сумму.
Решите задачу двумя способами: с помощью цикла и с помощью метода reduce.
*/

const numbersArray = [1, 2, 3, 4, 5];

// с помощью цикла

function getNumbersSum(array) {
    let sum = 0;

    for (let elem of array) {
        sum += elem;
    }

    return sum;
}

console.log(getNumbersSum(numbersArray));

// с помощью метода reduce

const numbersSum = numbersArray.reduce((sum, elem) => sum + elem, 0);
console.log(numbersSum);


/* 2. Напишите функцию mapToUpperCase(arr), которая принимает массив строк, 
а возвращает новый массив строк в верхнем регистре.
Решите задачу с помощью цикла и метода map
*/

const stringsArray = ["justString", "justanotherString"];

// с помощью цикла

function mapToUpperCase(arr) {
    let upperCaseStrings = [];

    for (let elem of arr) {
        upperCaseStrings.push(elem.toUpperCase());
    }

    return upperCaseStrings;
}

console.log(mapToUpperCase(stringsArray));

// с помощью метода map

const stringsInUpperCase = stringsArray.map((elem) => elem.toUpperCase());
console.log(stringsInUpperCase);