/* 1. Получите случайное число от 1 до 20 с вероятностью ошибки 50%. В случае ошибки - выведите её в консоль. 
В случае удачного запроса - повторите в консоли строку “Hello World” равное полученному числу раз.
*/

const getNumberRequest = new XMLHttpRequest();

getNumberRequest.open("GET", "https://async-demo.herokuapp.com/unstable?maxRandom=20&prob=50&status=<error status>");

getNumberRequest.send();

getNumberRequest.addEventListener("load", () => {

  if (getNumberRequest.status !== 200) {
    console.error(getNumberRequest.response);
    return;
  }

  const randomNumber = getNumberRequest.response;
    for (let i = randomNumber; i > 0; i -= 1) {
      console.log("Hello World");
    }
})

/* 2. Создайте на сервере объект {firstName: ‘Vasya’, lastName: ‘Ivanov’}. Сразу после создания, расширьте его полем {age: 33}. 
Удалите объект после расширения. Все запросы должны быть отправлены с вероятностью ошибки 20%.
*/

const createNewUser = new XMLHttpRequest();

createNewUser.open("POST", "https://async-demo.herokuapp.com/objects/?prob=20");

createNewUser.setRequestHeader("Content-type", "application/json; charset=utf-8");

const user = JSON.stringify({
  firstName: "Vasya", 
  lastName: "Ivanov",
});

createNewUser.send(user);

createNewUser.addEventListener("load", () => {

  if (createNewUser.status !== 201 && createNewUser.status !== 200 && createNewUser.status !== 204) {
    console.error(createNewUser.response);
    return;
  }

  try {
    const userId = JSON.parse(createNewUser.response);
    console.log(userId);

      const updateUser = new XMLHttpRequest();
      updateUser.open("PATCH", `https://async-demo.herokuapp.com/objects/${userId.id}/?prob=20`);

      const age = JSON.stringify({age: 33});
      updateUser.setRequestHeader("Content-type", "application/json; charset=utf-8");

      updateUser.send(age);

      updateUser.addEventListener("load", () => {

        if (updateUser.status !== 201 && updateUser.status !== 200 && updateUser.status !== 204) {
          console.error(updateUser.response);
          return;
        }

        const updatedUserId = JSON.parse(updateUser.response);
        console.log(updatedUserId);
          
        const deleteUser = new XMLHttpRequest();
        deleteUser.open("DELETE", `https://async-demo.herokuapp.com/objects/${updatedUserId.id}/?prob=20`);
        deleteUser.send();
        deleteUser.addEventListener("load", () => {
          if (deleteUser.status !== 201 && deleteUser.status !== 200 && deleteUser.status !== 204) {
            console.error(deleteUser.response);
            return;
          }

          console.log(`User with the id ${updatedUserId.id} has been deleted.`);

        });

      })

  } catch (error) {
    console.error(error);
  }
})