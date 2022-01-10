"use strict"

const arr = [
    {name: "Vasya", surname: "Ivanov"},
    {name: "Vanya", surname: "Ivanov"},
    {name: "Albert", surname: "Vasyliev"},
  ];

function keyBy(arr, key) {

    const usersByKey = arr.reduce((newArray, user) => {

        if (!newArray[user[key]]){
            newArray[user[key]] = [];
        }
        newArray[user[key]].push(user);

        return newArray;
    }, {})

    return usersByKey;

}

console.log(keyBy(arr, "name"));