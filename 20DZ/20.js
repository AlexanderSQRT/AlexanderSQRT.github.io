"use strict"

// 1. Напишите вывод числа Фибоначчи по порядковому номеру двумя способами: рекурсией и циклом

// рекурсией

function recursionFibonacci(num) {
    if (num <= 1) return num;

    return recursionFibonacci(num - 1) + recursionFibonacci(num - 2);
}

console.log(recursionFibonacci(8));

// циклом

function cycleFibonacci(num) {
    if (num === 0) return 0;
    
    let a = 1;
    let b = 1;
    let result;

        for (let i = 3; i <= num; i++) {
            result = a + b;
            a = b;
            b = result;
        }

    return b;
  }

console.log(cycleFibonacci(8));

// 2. Напишите функцию, которая считает факториал числа рекурсивно и циклом

// рекурсивно

function recursionFactorial(num) {
    if (num === 0) return 1;

    return num * recursionFactorial(num - 1);
}

console.log(recursionFactorial(5));

// циклом

function cycleFactorial(num) {
    let result = 1;

        for (let i = 1; i <= num; i += 1) {
            result *= i;
        }
    return result;
}

console.log(cycleFactorial(5));