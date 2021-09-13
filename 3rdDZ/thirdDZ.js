"use strict"

const userName = "John";
const userAge = 20;
const userRole = "Admin";
const userOccupation = "CEO";


// Операцию, которая вернёт true, если имя пользователя определено И его возраст больше 18
const operation1 = userName !== undefined && userAge > 18;
console.log(operation1);

// Операцию, которая вернёт false, если роль пользователя НЕ "Admin" ИЛИ род деятельности НЕ "CEO".
const operation2 = userRole === "Admin" || userOccupation === "CEO";
console.log(operation2);

// Операцию, которая вернёт род деятельности пользователя, если он определён. Если нет - роль.

const operation3 = userOccupation ?? userRole;
console.log(operation3);

// Операцию, которая вернёт true, если имя пользователя опеределено И ему больше 18, ИЛИ когда его роль "Admin".
const operation4 = (userName !== undefined && userAge > 18) || userRole === "Admin";
console.log(operation4);

// Операцию, которая вернёт возраст пользователя, если его роль НЕ "Admin" И имя опредено. В противном случае - false.

const operation5 = (userRole !== "Admin" && userName !== undefined) ? userAge : false;
console.log(operation5);