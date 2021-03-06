"use strict"

const initialTableData = [["Ukraine", "Kyiv", "Europe"],
                            ["Belgium", "Brussels", "Europe"],
                            ["Poland", "Warsaw", "Europe"],
                            ["Czech Republic", "Prague", "Europe"],
                            ["Germany", "Berlin", "Europe"],
                            ["England", "London", "Europe"],
                            ["Sweden", "Stockholm", "Europe"],
                            ["Costa Rica", "San José", "America"],
                            ["Cuba", "Havana", "America"],
                            ["Egypt", "Cairo", "Africa"],
                            ["Ghana", "Accra", "Africa"],
                            ["Laos", "Vientiane", "Asia"],
                            ["Mongolia", "Ulaanbaatar", "Asia"]];

createTable(initialTableData);

function createTable(arrayWIthData) {

    const tbodyElem = document.querySelector("tbody");

    const arrayToInsert = arrayWIthData
                                .map((elem) => {
                                    const tempContent = elem.map((value) => `<td>${value}</td>`)
                                    .join('');
                                    return `<tr>${tempContent}</tr>`;
                                }
                                )
                                .join('');
                                
    tbodyElem.innerHTML = arrayToInsert;
}

const copiedInitialData = initialTableData.reduce((resultArray, elem, index) => {
    resultArray[index] = elem;
    return resultArray;
}, []);

let sortDirections = ["none", "none", "none"];
let columnNumber = 0;

function sortTable(columnIndex) {

    if (columnIndex !== columnNumber) {
        sortDirections[columnIndex -1] = "none";
    }

    columnNumber = columnIndex;

        if (sortDirections[columnIndex -1] === "none") {

            sortData(copiedInitialData, columnIndex);
            createTable(copiedInitialData);
            placeMarker(columnIndex);
            sortDirections[columnIndex -1] = "sorted ascending";
            return;

        } else if (sortDirections[columnIndex -1] === "sorted ascending") {

            sortData(copiedInitialData, columnIndex);
            createTable(copiedInitialData);
            placeMarker(columnIndex);
            sortDirections[columnIndex -1] = "sorted descending";
            return;

        } else if (sortDirections[columnIndex -1] === "sorted descending") {
            sortDirections[columnIndex -1] = "none";
            columnNumber = 0;
            createTable(initialTableData);
        }
}

function removeTable() {
    const tableElem = document.querySelector("table");
    return tableElem.remove();
}

function sortData(array, columnIndex) {
    const elemIndex = columnIndex - 1;

    if (sortDirections[elemIndex] === "none") {
        return array.sort((innerArray1, innerArray2) => innerArray1[elemIndex] < innerArray2[elemIndex] ? -1 : 1);

    } else if (sortDirections[elemIndex] === "sorted ascending") {
        return array.sort((innerArray1, innerArray2) => innerArray1[elemIndex] > innerArray2[elemIndex] ? -1 : 1);
    }
}

function placeMarker(columnIndex) {
    const tableHeaderElems = [...document.querySelectorAll('th')];
    let headerToMark;
    for (let elem of tableHeaderElems) {
        if (elem === tableHeaderElems[columnIndex - 1]) {
            headerToMark = elem;
        }
    }

    if (sortDirections[columnIndex -1] === "none") {
        return headerToMark.classList.toggle("sorted-ascending");

    } else if (sortDirections[columnIndex -1] === "sorted ascending") {
        return headerToMark.classList.toggle("sorted-descending");
    }
}