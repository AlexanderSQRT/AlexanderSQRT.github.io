"use strict"

/* 1. Создайте функцию createRangeFilter(min, max), которая возвращает функцию filter(num). 
Функция должна возвращать true для значений, которые входят в интевал и false для значений, которые не входят. 
Пример: [1, 2, 3, 4, 5, 6].filter(createRangeFilter(2, 4)) -> [2, 3, 4]
*/

function createRangeFilter(min, max) {
    return function filter(num) {
        return num >= min && num <= max;
    }
}

console.log([1, 2, 3, 4, 5, 6].filter(createRangeFilter(2, 4)));
const check2 = createRangeFilter(7, 9);
console.log(check2(8));

/* 2. Создайте функцию createKeyBy(propName), которая возвращает функцию keyBy(arr). 
Функция keyBy должна группировать массив по свойству propName объектов массива.
*/

function createKeyBy(propName) {
    return function keyBy(arr) {

        return arr.reduce((result, object) => {

            if (!result[object[propName]]){
                result[object[propName]] = [];
            }
            result[object[propName]].push(object);
    
            return result;
        }, {})

    }
}

const sortByName = createKeyBy("name");
const arr = [
    {name: "Vasya", surname: "Ivanov"},
    {name: "Vasya", surname: "Petrov"},
    {name: "Vanya", surname: "Ivanov"},
    {name: "Albert", surname: "Vasyliev"},
  ];
console.log(sortByName(arr));

/* 3. Создайте функцию createCalcPercent(percent), которая возвращает функцию calcPercent(value). 
Функция calcPercent должна считать percent процентов от value.
*/

function createCalcPercent(percent) {
    return function calcPercent(value) {
        return (percent/100) * value;
    }
}

const percentFromNum = createCalcPercent(10);
console.log(percentFromNum(90));