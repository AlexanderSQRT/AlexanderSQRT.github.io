/* 1. Получите случайное число от 1 до 20 с вероятностью ошибки 50%. В случае ошибки - выведите её в консоль. 
В случае удачного запроса - повторите в консоли строку “Hello World” равное полученному числу раз.
*/

// fetch

fetch('/unstable?maxRandom=20&prob=50')
    .then((response) => {
        if (!response.ok) {
            return response.text()
                .then(errorMessage => {
                throw new Error(errorMessage);
            })
        }
        return response.text();
    })
    .then(response => handleResponse(response))
    .catch(error => console.error(error.message));

function handleResponse(response) {
    for (let i = response; i > 0; i -= 1) {
        console.log("Hello World");
    }
}

// async & await

async function sendRequest() {
    try {
        const request = await fetch('/unstable?maxRandom=20&prob=50');
        if (!request.ok) {
            return request.text()
                .then(errorMessage => {
                throw new Error(errorMessage);
            })
        }
        const response = await request.text();
        handleResponse(response);
    } catch (error) {
        console.error(error);
    }
}

/* 2. Создайте на сервере объект {firstName: ‘Vasya’, lastName: ‘Ivanov’}. Сразу после создания, расширьте его полем {age: 33}. 
Удалите объект после расширения. Все запросы должны быть отправлены с вероятностью ошибки 20%.
*/

// fetch

let userId;

function userFetch(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                                .then((errorMessage) => {
                                throw new Error(errorMessage);
                    });
            }
            return response;
        });
}

userFetch("/objects/?prob=20", {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
        firstName: "Vasya", 
        lastName: "Ivanov",
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(response => response.json())

.then(response => {
    userId = response.id;
    return userFetch(`/objects/${userId}/?prob=20`, {
        method: "PATCH",
        body: JSON.stringify({age: 33}),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
})

.then(response => {
    return userFetch(`/objects/${userId}/?prob=20`, {method: "DELETE"});
})
.then(() => console.log(`user with the id ${userId} has been deleted`))

.catch(error => console.error(error));


// async & await

let userId;

function userFetch(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                                .then((errorMessage) => {
                                throw new Error(errorMessage);
                    });
            }
            return response;
        });
}

async function sendRequest() {
    try {
        const addUser = await userFetch("/objects/?prob=20", {
            method: "POST",
            body: JSON.stringify({
                firstName: "Biba", 
                lastName: "Boba",
            }),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });

        const response = await addUser.json();
        userId = response.id;

        const modifyUser = await userFetch(`/objects/${userId}/?prob=20`, {
            method: "PATCH",
            body: JSON.stringify({age: 33}),
            headers: {"Content-type": "application/json; charset=UTF-8"}
        });

        const deleteUser = await userFetch(`/objects/${userId}/?prob=20`, {method: "DELETE"});

        console.log(`user with the id ${userId} has been deleted`);

    } catch (error) {
        console.error(error);
    }
}

/* 3. Совершите серии запросов:
- Все операции выполняйте с вероятностью ошибки 5%.*/

// fetch

function createFetchRequest(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                                .then((errorMessage) => {
                                throw new Error(errorMessage);
                    });
            }
            return response;
        });
}

// - Создайте три пользователя с произвольными именами и фамилиями. 

Promise.all([
    createFetchRequest("/objects/?prob=5", {
        method: "POST",
        body: JSON.stringify({
            firstName: "Dima", 
            lastName: "Popov",
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()),
    createFetchRequest("/objects/?prob=5", {
        method: "POST",
        body: JSON.stringify({
            firstName: "Oleg", 
            lastName: "Neoleg",
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json()),
    createFetchRequest("/objects/?prob=5", {
        method: "POST",
        body: JSON.stringify({
            firstName: "Andrey", 
            lastName: "Vodkin",
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
    })
    .then(response => response.json())
])
.then(response => addAgeToUsers(response))
.catch(error => console.error(error.message));

// - Получите три случайных числа от 1 до 100 с сервера и добавьте их созданным пользователям в качестве возраста. 

function addAgeToUsers(users) {
    
    const usersIds = users.map((elem) => elem.id);

    Promise.all([
        createFetchRequest("/stable?maxRandom=100&prob=5").then(response => response.text()),
        createFetchRequest("/stable?maxRandom=100&prob=5").then(response => response.text()),
        createFetchRequest("/stable?maxRandom=100&prob=5").then(response => response.text())
    ])
    .then(randomNumbers => {
        
        Promise.all([
            createFetchRequest(`/objects/${usersIds[0]}/?prob=5`, {
                method: "PATCH",
                body: JSON.stringify({age: randomNumbers[0]}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }),
            createFetchRequest(`/objects/${usersIds[1]}/?prob=5`, {
                method: "PATCH",
                body: JSON.stringify({age: randomNumbers[1]}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }),
            createFetchRequest(`/objects/${usersIds[2]}/?prob=5`, {
                method: "PATCH",
                body: JSON.stringify({age: randomNumbers[2]}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
        ])
        .then(deleteUsers(usersIds))
        .catch(error => console.error(error.message));
    })
    .catch(error => console.error(error.message));
}

// - Получите случайное число от 1 до 3. 
// - Удалите всех пользователей, кроме пользователя с порядковым номером, равным случайно полученному числу. 

function deleteUsers(usersIds) {
    createFetchRequest("/stable?maxRandom=2&prob=5")
        .then(response => response.text())
        .then(response => {

                for (let i = 0; i < 3; i += 1) {
                    let generatedNumber = response;
                    let arrIndex = usersIds.indexOf(usersIds[i]);
                        if (Number(generatedNumber) === arrIndex) continue;
                        
                        createFetchRequest(`/objects/${usersIds[i]}/?prob=5`, {method: "DELETE"})
                        .catch(error => console.log(error.message));

                    console.log(`user with the id ${usersIds[i]} has been deleted`);
                }
            })

        .catch(error => console.error(error.message));
}

// async & await

function createFetchRequest(...args) {
    return fetch(...args)
        .then(response => {
            if (!response.ok) {
                return response.text()
                                .then((errorMessage) => {
                                throw new Error(errorMessage);
                    });
            }
            return response;
        });
}

async function createUsers() {
    try {
        const createdUsers = await Promise.all([
            createFetchRequest("/objects/?prob=5", {
                method: "POST",
                body: JSON.stringify({
                    firstName: "Dima", 
                    lastName: "Popov",
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()),
            createFetchRequest("/objects/?prob=5", {
                method: "POST",
                body: JSON.stringify({
                    firstName: "Oleg", 
                    lastName: "Neoleg",
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json()),
            createFetchRequest("/objects/?prob=5", {
                method: "POST",
                body: JSON.stringify({
                    firstName: "Andrey", 
                    lastName: "Vodkin",
                }),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
            .then(response => response.json())
        ]);

        addAgeToUsers(createdUsers);

    } catch (error) {
        console.error(error);
    }
}

async function addAgeToUsers(users) {

    const usersIds = users.map((elem) => elem.id);

    try {
        const generatedNumbers = await Promise.all([
            createFetchRequest("/stable?maxRandom=100&prob=5").then(response => response.text()),
            createFetchRequest("/stable?maxRandom=100&prob=5").then(response => response.text()),
            createFetchRequest("/stable?maxRandom=100&prob=5").then(response => response.text())
        ]);
        
        const updateUsersWithAge = await Promise.all([
            createFetchRequest(`/objects/${usersIds[0]}/?prob=5`, {
                method: "PATCH",
                body: JSON.stringify({age: generatedNumbers[0]}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }),
            createFetchRequest(`/objects/${usersIds[1]}/?prob=5`, {
                method: "PATCH",
                body: JSON.stringify({age: generatedNumbers[1]}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            }),
            createFetchRequest(`/objects/${usersIds[2]}/?prob=5`, {
                method: "PATCH",
                body: JSON.stringify({age: generatedNumbers[2]}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            })
        ])

        deleteUsers(usersIds);

    } catch (error) {
        console.error(error);
    }
}

async function deleteUsers(usersIds) {
    try {
        const getRandomNumber = await createFetchRequest("/stable?maxRandom=2&prob=5");
        const randomNumber = await getRandomNumber.text();

            for (let i = 0; i < 3; i += 1) {
                let arrIndex = usersIds.indexOf(usersIds[i]);
                    if (Number(randomNumber) === arrIndex) continue;
                    
                    createFetchRequest(`/objects/${usersIds[i]}/?prob=5`, {method: "DELETE"})
                    .catch(error => console.log(error.message));

                console.log(`user with the id ${usersIds[i]} has been deleted`);
            }
    
    } catch (error) {
        console.error(error);
    }
}