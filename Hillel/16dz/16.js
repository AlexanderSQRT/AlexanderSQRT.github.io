/* 1. Создайте функцию capitalize(string), которая принимает строку со словами через пробел и 
заменяет первую букву каждого слова на заглавную
*/

function capitalize(string) {
    return string.split(" ")
    .map ((elem) => elem[0].toUpperCase() + elem.slice(1))
    .join(" ");
}

console.log(capitalize("abc abc abc"));

/* 2. Напишите функцию checkSubstring(string, substring), 
которая проверяет наличие подстроки substring в строке string. 
Проверка должна быть нечувствительна к регистру.
*/

function checkSubstring(string, substring) {
    return string.toUpperCase()
    .includes(substring.toUpperCase());
}

console.log(checkSubstring("This is just a string with a SUBstring", "substring"));