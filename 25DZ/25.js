"use strict"

// 1. Расширьте тип данных String методом reverse(), который возвращает строку с обратным порядком символов


String.prototype.reverse = function() {
    let reverseString = '';

    for (let i = this.length - 1; i >= 0; i -= 1) {
        reverseString += this[i];
    }
    return reverseString;
}

const testString = new String("String");
console.log(testString.reverse());


// 2. Модифицируйте метод массива sort таким образом, чтобы он стал немутирующим.

Array.prototype.oldSort = Array.prototype.sort;

Array.prototype.sort = function(func) {
    return [...this].oldSort(func);
}

let arr = [1, 3, 10, 9, 15, 2];

let newArr = arr.sort((a, b) => {return a < b ? -1 : 1});
console.log(newArr);

// 3. Добавьте к коллекции, возвращаемой методом querySelectorAll методы массива map, reduce и find

const divElem = document.querySelectorAll("div");

NodeList.prototype.map = Array.prototype.map;
NodeList.prototype.reduce = Array.prototype.reduce;
NodeList.prototype.find = Array.prototype.find;

const changedElems = divElem
                            .map((elem) => elem.innerHTML * 2)
                            .reduce((result, elem) => {
                                result.push(elem / 2)
                                return result;
                            }, [])
                            .find((elem) => elem === 3);
                            
                    
console.log(changedElems);