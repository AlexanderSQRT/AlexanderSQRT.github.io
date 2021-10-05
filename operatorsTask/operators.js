"use strict"

let firstName; // - имя пользователя (строка)
let lastName; // - фамилия пользователя (строка)
const age = 30; // - возраст пользователя (число)
const gender = "female"; // - пол
const occupation = "Truck driver"; // - профессия (строка)
const isMarried = true; // - брачный статус (булеан)
const yearsOfExperience = 10; // - опыт работы (число)
const numberOfKids = 3; // - количество детей
const car = {
    seats: 5,
    brand: "BMW",
    maxWeight: 5,
}; // - машина, (объект вида {seats: количество сидений, число, brand: марка машины, строка, maxWeight: грузоподъёмность в тоннах (число) })

let expression;

// 1. Выражение, которое возвращает true, если имя определено, а фамилия - нет.

expression = !!firstName && !lastName;

// 2. Выражение, которое возвращает false, если имя или фамилия пользователя не определены

expression = !!firstName && !!lastName;

// 3. Выражение, которое вернёт true для пользователей с машиной младше 18.

expression = age < 18 && !!car;

// 4. Выражение, которое вернёт true для матерей не в браке без машины

expression = gender === "female" && !!numberOfKids && !isMarried && !car;

/* 5. Выражение, которое вернёт машину пользователя, если его профессия “Taxi Driver”
или “Truck Driver”. в противном случае - undefined.*/

expression = (occupation === "Taxi driver" || occupation === "Truck Driver") ? car : undefined;

/* 6. Выражение, которое вернёт true для пользователей с профессией “Software Developer”,
возрастом не больше 20 и опытом работы не менее 10 лет.*/

expression = occupation === "Software Developer" && age <= 20 && yearsOfExperience >= 10;

/* 7. Выражение, которое 
возвращает строку вида “имя фамилия”, если имя и фамилия определены, 
имя, если определено только имя
строку “Anonymous”, во всех остальных случаях.
*/

expression = (!!firstName && !!lastName) ? `${firstName} ${lastName}` :
!!firstName ? firstName :
"Anonymous";

/* 8. Выражение, которое вернёт true, если пользователь “Truck Driver”, 
при том грузоподъёмность его машины не менее 5 тонн при опыте работы 
не менее 5 лет в противном случае - грузоподъёмность не более 3 тонн.
*/

expression = (occupation === "Truck driver" && car.maxWeight >= 5 && yearsOfExperience >= 5) || car.maxWeight <= 3;

/* 9. Выражение, которое возвращает true для пользователей с машиной,
в которую поместятся все дети пользователя
*/

expression = !!car && car.seats >= numberOfKids;

/* 10. Выражение, которое возвращает true для пользователей в машину 
которых поместится вся семья (дети + супруг + пользователь)
*/

expression = !!car && !!isMarried && ((car.seats - 2) >= numberOfKids);

console.log(expression);