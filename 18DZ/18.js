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

    const bodyElem = document.querySelector("body");
    const tableElem = document.createElement("table");

    const tableHeader = document.createElement("tr");
    tableHeader.innerHTML = `<th>Country</th>
                            <th>Capital City</th>
                            <th>Continent</th>`;

    tableElem.prepend(tableHeader);

    for (let elem of arrayWIthData) {
        const newTrElem = document.createElement("tr");

        for (let value of elem) {
            const newTdElem = document.createElement("td");
            newTdElem.innerHTML = value;
            newTrElem.append(newTdElem);
        }
        tableElem.append(newTrElem);
    }
    bodyElem.prepend(tableElem);
    return;

}

const copiedInitialData = initialTableData.reduce((resultArray, elem, index) => {
    resultArray[index] = elem;
    return resultArray;
}, []);

let sortDirection = "none";
let columnNumber = 0; 

function sortTable(columnIndex) {

    removeTable();

    if (columnIndex !== columnNumber) {
        sortDirection = "none";
    }

    columnNumber = columnIndex;

        if (sortDirection === "none") {

            sortAscending(copiedInitialData, columnIndex);
            createTable(copiedInitialData);
            placeMarker(columnIndex);
            sortDirection = "sorted ascending";
            return;

        } else if (sortDirection === "sorted ascending") {

            sortDescending(copiedInitialData, columnIndex);
            createTable(copiedInitialData);
            placeMarker(columnIndex);
            sortDirection = "sorted descending";
            return;

        } else if (sortDirection === "sorted descending") {
            sortDirection = "none";
            columnNumber = 0;
            createTable(initialTableData);
        }
}

function removeTable() {
    const tableElem = document.querySelector("table");
    return tableElem.remove();
}

function sortAscending(array, columnIndex) {
    const elemIndex = columnIndex - 1;
    return array.sort((innerArray1, innerArray2) => innerArray1[elemIndex] < innerArray2[elemIndex] ? -1 : 1)
}

function sortDescending(array, columnIndex) {
    const elemIndex = columnIndex - 1;
    return array.sort((innerArray1, innerArray2) => innerArray1[elemIndex] > innerArray2[elemIndex] ? -1 : 1)
}

function placeMarker(columnIndex) {
    const tableHeaderElems = [...document.querySelectorAll('th')];
    let headerToMark;
    for (let elem of tableHeaderElems) {
        if (elem === tableHeaderElems[columnIndex - 1]) {
            headerToMark = elem;
        }
    }

    if (sortDirection === "none") {
        return headerToMark.classList.toggle("sorted-ascending");
    } else if (sortDirection === "sorted ascending") {
        return headerToMark.classList.toggle("sorted-descending");
    }
}