"use strict"

/* Создайте функцию, которая будет возвращать true для пустого объекта ({}) и false для любого, 
в котором есть хотя бы одной свойство.
*/

const emptyObject = {};
const justObject = {
    a : 1,
    b : 2,
};

function isObjectEmpty(object){
    for (let key in object) {

            if (key) {
            return false;
            }
        }

    return true;
}

console.log(isObjectEmpty(justObject));

// Создайте функцию, которая будет выводить в консоль значения только с числовыми ключами.

const numberKeys = {
        "0": "zero", 
        42: "answer", 
        "greeting" : "Hello",
        "3.14": "PI",
};

function findNumberKey (object) {
    for (let prop in object) {
        if (+prop || +prop === 0) {
            console.log(object[prop]);
        }
    }
}

findNumberKey(numberKeys);

/*
Создайте функцию doubleSalaries(salaries), которая будет принимать подобный объект и возвращать его копию, 
в которой все значения будут умножены на два. Первоначальный объект должен остаться неизменным.
*/

const salaries = {
    HRs: { Alice: 500, Bob: 700  },
    Devs: { Carol: 2500, Carlos: 1000, Charles: 1500 },
    QAs: { Chuck: 1650, Craig: 850, Dave: 3000},
 };

function doubleSalaries(salaries) {
    const salariesCopy = {};

    for (let prop in salaries) {
        if (typeof(salaries[prop]) === 'object' && typeof(salaries[prop]) !== null) {
            salariesCopy[prop] = Object.assign({}, salaries[prop]);
        } else {
            salariesCopy[prop] = salaries[prop];
        }
    }

    for (let key in salariesCopy) {
        for (let prop in salariesCopy[key]){
        salariesCopy[key][prop] *= 2;
        }
    }

    return salariesCopy;
}

const copiedSalaries = doubleSalaries(salaries);


console.log(salaries);
console.log(copiedSalaries);