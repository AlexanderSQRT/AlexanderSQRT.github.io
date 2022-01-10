"use strict"

const fibNumber = prompt("Please enter the number from Fibonacci list you would like to get.");

if (fibNumber === null){
    console.log("You have not entered any number!");
} else {
    let a = 1;
    let b = 1;
    let simpleNumbers = [];

    Fibonacci:
    for (let i = 2; Number(fibNumber) > i; i += 1){
        let numbersSum = a + b;
        a = b;
        b = numbersSum;

        for (let j = 2; j < i; j += 1) {
            
            if (i % j === 0) continue Fibonacci; // если число может без остатка поделится на j, число не подходит, возвращаемся к циклу
        }
        simpleNumbers.push(i); // срабатывает, если проверка условия во 2м цикле дает фолс
    }

    console.log(`Number from Fibonacci list: ${b}`);
    console.log(`Simple numbers before the entered one: ${simpleNumbers}`);
}