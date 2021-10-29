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

function sortTable(columnIndex) {

    removeTable();
    const elemIndex = columnIndex - 1;

    copiedInitialData.sort((innerArray1, innerArray2) => {
        return innerArray1[elemIndex] < innerArray2[elemIndex] ? -1 : 1;
    })

    createTable(copiedInitialData);
}

function removeTable() {
    const tableElem = document.querySelector("table");
    return tableElem.remove();
}