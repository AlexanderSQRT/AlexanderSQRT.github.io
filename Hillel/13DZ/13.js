"use strict"

/*
1. Создайте массив [‘Apple’, ‘Banana’, ‘Pineapple’]
2. Добавьте в конец массива ‘Orange’ и ‘Grapes’
3. Замените значение ‘Banana’ на ‘Peer’
4. Удалите последний элемент массива и выведите его в консоль
5. Добавьте в начало массива “Watermelon”
*/

// 1
const array1 = ["Apple", "Banana", "Pineapple"];

// 2 
array1.push("Orange", "Grapes");

// 3
array1[1] = "Peer";

// 4
const removedItem = array1.pop();
console.log(removedItem);

// 5
array1.unshift("Watermelon");