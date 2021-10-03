/* Создайте функцию-конструктор Cat(name, breed), которая создаёт объект
 вида {name, breed} с методом meow(), который выводит сообщение “Мяу!”
*/

function Cat(name, breed) {

    this.name = name;
    this.breed = breed;
    this.meow = function() {
        alert("Мяу!");
    };
}

let cat = new Cat("cat", "bengal");
cat.meow();

/* Создайте функцию-конструктор User(firstName, lastName, age), 
которая создаёт объект вида {firstName, lastName, age} с методом greet, 
выводящим приветствие с именем юзера
*/

function User(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.greet = function() {
        alert(`Hi, ${firstName}!`);
    };
}

let user = new User("John", "Black", "30");
user.greet();