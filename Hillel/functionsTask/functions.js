"use strict"

// 1. Функция, которая принимает число и возвращает true для чисел больше 10 и меньше 20. false - для всех прочих.

function isBetween10and20(number) {
    return number > 10 && number < 20;
}

console.log(isBetween10and20(12));

// 2. Функция min(a, b), которая возвращает меньшее из чисел.

function min(a, b) {
    return Math.min(a, b);
}

console.log(min(5, 1));

// 3. Функция, checkPermission(age, role), которая возвращает true, если возраст не меньше 18, а роль определена и не равна “Guest”

function checkPermission(age, role) {
    return age >= 18 && !!role && role !== "Guest";
}

console.log(checkPermission(18, "Admin"));

// 4. Функция calcZeroes(number), которая считает количество нулей в числе.

function calcZeroes(number) {
    let zerosNumber = 0;
    let numberToString = number + '';

    for (let i = 0; i < numberToString.length; i += 1) {
        if (numberToString[i] === '0') {
            zerosNumber += 1;
        }
    }
    return zerosNumber;
}

console.log(calcZeroes(1000222));

// 5. Функция calcDigits(number, digit), которая считает количество цифр digit в числе.

function calcDigits(number, digit) {
    let digitsInNumber = 0;
    let numberToString = number + '';

    for (let i = 0; i < numberToString.length; i += 1) {
        if (numberToString[i] === String(digit)) {
            digitsInNumber += 1;
        }
    }
    return digitsInNumber;
}

console.log(calcDigits(121, 1));

// 6. Функция reverse(string), которая принимает строку и возвращает строку с переставленными в обратном порядке символами.

function reverse(string) {
    let reverseString = '';

    for (let i = string.length - 1; i >= 0; i -= 1) {
        reverseString += string[i];
    }
    return reverseString;
}

console.log(reverse("abc"));

// 7. Функция sliceAfter(string, symbol), которая обрезает строку после символа symbol

function sliceAfter(string, symbol) {
    let cutString = '';

    for (let i = 0; i < string.length; i += 1) {

        cutString += string[i];

        if (string[i] === symbol) {
            return cutString;
        }
    }
    return cutString;
}

console.log(sliceAfter("string$sfdgsdgsdfg", "$"));

// 8. Функция insertAfter(string, substring, index), которая вставляет строку substring в строку string после символа на позиции index

function insertAfter(string, substring, index) {
    let newString = '';

    for (let i = 0; i <= index; i += 1) {
        newString += string[i]
    }
    newString += substring;
    return newString;
}

console.log(insertAfter("stringand", "substring", 5));