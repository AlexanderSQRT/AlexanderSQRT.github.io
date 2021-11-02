"use strict"

const buttonPlus = document.querySelector(".add_button");

    function addLiElem() {
        const elemsList = document.querySelector("ol");
        const inputText = document.querySelector("input");

        const newLiElem = document.createElement("li");

        newLiElem.innerHTML = `${inputText.value}`;
        elemsList.append(newLiElem);
        inputText.value = "";
        
    }

buttonPlus.addEventListener("click", addLiElem);

const buttonMinus = document.querySelector(".remove_button");

    function removeLiElem() {
        const markedLiElem = document.querySelector(".marked_li");
        markedLiElem.remove();
    }

buttonMinus.addEventListener("click", removeLiElem);

const olElem = document.querySelector("ol");

    function markLiElem(event) {
        const liElem = event.target.closest("li");
        liElem.classList.add("marked_li");
    }

olElem.addEventListener("click", markLiElem);