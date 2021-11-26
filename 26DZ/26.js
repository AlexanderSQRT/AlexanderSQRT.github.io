// 1. Создайте класс Vegetable(name), содержащий в себе имя овоща.

class Vegetable {
    constructor(name) {
        this.name = name;
    }
}

const cucumber = new Vegetable("cucumber");

/* 2. Создайте класс Animal(legs), реализующий метод eat(food). 
У каждого животного должен быть массив объектов stomach, в который попадает еда food
*/

class Animal {
    constructor(numberOfLegs, isPredator) {
        this.numberOfLegs = numberOfLegs;
        this.isPredator = isPredator;
    }

    stomach = [];

    eat(food) {
        this.stomach.push(food);
    }
}

const tiger = new Animal(4, true);

/* 3. Создайте класс Rabbit(breed), наследующий от Animal и реализующий метод jump(). 
При этом, метод eat должен выбрасывать ошибку, если кролик пытается съесть что-то, кроме овощей.
*/

class Rabbit extends Animal {
    constructor(numberOfLegs, isPredator) {
        super(numberOfLegs, isPredator);
    }
    
    jump() {
        console.log("jump!");
    }

    eat(food) {
        if (!(food instanceof Vegetable)) throw new Error("Rabbits can eat Vegatables only.");
            super.eat(food);
    }

}

const rabbit = new Rabbit(4, false);

/* 4. Создайте класс Snake(isPoisonous), наследующий от Animal и реализующий метод crawl(). 
При этом, метод eat должен выбрасывать ошибку, если змея ест что-либо, кроме кроликов.
*/

class Snake extends Animal {
    constructor(numberOfLegs, isPredator, isPoisonous) {
        super(numberOfLegs, isPredator);

        this.isPoisonous = isPoisonous;
    }

    crawl() {
        console.log("crawl...");
    }

    eat(food) {
        if (!(food instanceof Rabbit)) throw new Error("Snakes can eat rabbits only.");
            super.eat(food);
    }

}

const snake = new Snake(0, true, true);

/* 5. Создайте класс Human(firstName, lastName), наследующий от Animal и реализующий метод walk() и greet(). 
При этом, метод eat должен выбрасывать ошибку, если человек пытается съесть другого человека.
*/

class Human extends Animal {
    constructor(numberOfLegs, isPredator, firstName, lastName) {
        super(numberOfLegs, isPredator);
        this.firstName = firstName;
        this.lastName = lastName;
    }

    walk () {
        console.log("walking");
    }

    greet () {
        console.log("Hi");
    }

    eat(food) {
        if(food instanceof Human) throw new Error("Cannibalism is forbidden!");
        super.eat(food);
    }
}

const den = new Human(2, true, "Den", "Denis");
const ivan = new Human(2, true, "ivan", "ivan");