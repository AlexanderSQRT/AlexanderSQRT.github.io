"use strict"

const exampleObj = {
    a: 1,
    b: {
        d: {
            e: 5,
        }
    },
    string: "123",
    f: {
        h: {
            i: 5,
        }
    },
    arr: [["jfdskgsjdflgk"]],
};

const exampleArr = [["ja", "ja"], ["ja", "ja"], ["ja", "ja"]];

function copyValue(value) {
    let copiedValue = {};

        if (typeof(value) !== 'object') {
            return value;

        } else if (Array.isArray(value)) {
            return value.map((elem) => copyValue(elem));

        } else {
            for (let prop in value) {
                copiedValue[prop] = copyValue(value[prop]);
            }
        }

    return copiedValue;
}

//--------- check

console.log(exampleObj);
let newValue = copyValue(exampleObj);
newValue.b.d.e = "some new string";
newValue.f.h.i = "another new string";
console.log(newValue);


console.log(exampleArr);
newValue = copyValue(exampleArr);
let newString = newValue[0];
newString[0] = "some new string";
console.log(newValue);