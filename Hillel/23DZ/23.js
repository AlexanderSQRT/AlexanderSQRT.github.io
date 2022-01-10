"use strict"

/* 1. Напишите функцию printNumbers(arr), которая принимает массив чисел 
и выводит все числа в консоль с временным промежутком в одну секунду. 
Сделайте задание с помощью setInterval и рекурсивного setTimeout
*/

// setInterval

function printNumbers(arr) {

    let elemIndex = 0;
    let intervalID = setInterval(() => {

        console.log(arr[elemIndex]);
        elemIndex += 1;

        if (elemIndex === arr.length) clearInterval(intervalID);
    }, 1000);
    
}

printNumbers([1, 2, 3, 4, 5, 6, 7]);

// рекурсивный setTimeout

function recursionPrintNumbers(arr) {
    let elemIndex = 0;
    
    setTimeout(function displayElem() {

        console.log(arr[elemIndex]);
        elemIndex += 1;

        if (elemIndex === arr.length) return;

        setTimeout(displayElem, 1000);
        
    }, 1000);
    
}

recursionPrintNumbers([1, 2, 3, 4, 5, 6, 7]);

/* 2. Напишите декоратор debounce(func, timeout), который при многократном вызове функции 
вызывает её лишь в том случае, если в течение времени timeout вызовов не было
*/

function debounce(func, timeout) {

    let wasFunctionCalled = false;

    return function() {

        if (wasFunctionCalled) return;
        func.apply(this, arguments);
  
        wasFunctionCalled = true;
  
        setTimeout(() => wasFunctionCalled = false, timeout);
    };
  

}

const showMesage = debounce(console.log, 5000);

showMesage("Hello world!");


/* 3. Напишите декоратор throttle(func, timeout), который при многократном вызове функции 
вызывает её не чаще, чем раз в timeout.
*/

function throttle(func, timeout) {

    let isThrottled = false;
    let savedArgs;
    let savedThis;


    function wrapper() {

        if (isThrottled) {
            
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments);
        isThrottled = true;

        setTimeout(() => {
            
            isThrottled = false;
            
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
            
        }, timeout);

    }
    
    return wrapper;
}

function showMesage2() {
    console.log("Hello");
}

showMesage2 = throttle(showMesage2, 3000);
setInterval(showMesage2, 1000);