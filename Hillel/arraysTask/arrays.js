"use strict"

// 1. Напишите функцию mulNumbers(arr), которая принимает массив чисел и возвращает их общее произведение.

function mulNumbers(arr) {
    return arr.reduce((result, elem) => result * elem);
}

console.log(mulNumbers([1, 2, 3, 4, 5]));

/* 2. Напишите функцию camelize, которая принимает строку в кебаб-кейсе, а возвращает в кэмелкейсе: 
camelize("background-color") -> 'backgroundColor';
camelize("list-style-image") -> 'listStyleImage';
camelize("-webkit-transition") -> 'WebkitTransition';
*/

function camelize(string) {
    return string
            .split("-")
            .map((elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1))
            .join("");
}

console.log(camelize("background-color"));

/* 3. Напишите функцию deserializeKeys(string), которая принимает строку вида “key1:value1;key2:value2” 
и возвращает объект вида {key1: value1, key2: value2}
*/

function deserializeKeys(string) {
    return string
            .split(";")
            .map((elem => elem.split(":")))
            .reduce((resultOBj, elem) => {
                resultOBj[elem[0]] = elem[1];
                return resultOBj;
            }, {});
}

console.log(deserializeKeys("key1:value1;key2:value2"));

/* 4. Напишите функцию filterNonCapitalized(arr), которая принимает массив строк и 
возвращает массив лишь с теми строками, которые начинаются с большой буквы
*/

function filterNonCapitalized(arr) {
        return arr.reduce((resultArr, elem) => {
            if (elem[0] === elem[0].toUpperCase()) {
                resultArr.push(elem);
                return resultArr;
            }
            return resultArr;
        }, [])
}

console.log(filterNonCapitalized(["Abc", "bca", "Cba"]));