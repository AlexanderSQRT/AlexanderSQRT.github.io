"use strict"

// 1. Выберите section с id “container” без метода querySelector и с ним.

console.log(document.getElementById("container"));
console.log(document.querySelector("#container"));

// 2. Выберите все li с классом "second".

console.log(document.querySelectorAll("li.second"));

// 3. Выберите li с классом "third" внутри ol.

console.log(document.querySelector("ol li.third"));

// 4. Поместите текст “Hello” в элемент с классом “header”.

const elemHeader = document.querySelector(".header");
elemHeader.innerHTML = "Hello";
console.log(elemHeader);

// 5. Добавьте класс “main” элементу с классом “footer”, а затем уберите его.

const footerElem = document.querySelector(".footer");
footerElem.classList.add("main");
footerElem.classList.toggle("main");

// 6. Создайте новый элемент li, затем добавьте в него текст "four".

const newElemLi = document.createElement("li");
newElemLi.innerHTML = "four";
console.log(newElemLi);

// 7. Поместите li в элемент ul.

const elemUl = document.querySelector("ul");
elemUl.append(newElemLi);

// 8. Сделайте зелёный фон всем li внутри ol.

const liElems = document.querySelectorAll("ol li");
for (let elem of liElems) {
    elem.style.backgroundColor = "green";
}

// 9. Удалите div с классом “footer”.

const divFooter = document.querySelector("div.footer"); 
divFooter.remove();