'use strict';
// Hàm constructor và toán tử new
const  Person = function(firstname, brirthYear){
    this.firstname = firstname;
    this.brirthYear = brirthYear;
}

const jonas = new Person('jonas', 1991);
const jack = new Person('jack', 2007);
console.log(jonas, jack);
console.log(jack instanceof Person);


// Prototype
console.log(Person.prototype);
Person.prototype.calcAge = function(){
    console.log(2037 - this.brirthYear);
}
jonas.calcAge();
console.log(jonas.__proto__);

console.log(Person.prototype.isPrototypeOf(jonas));
console.log(Person.prototype.isPrototypeOf(jack));

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, jack.species);
console.log(jonas.hasOwnProperty('firstname'));
console.log(jonas.hasOwnProperty('species'));


// Lab 13.1: Tạo Object
// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }
// Car.prototype.accelerate = function(){
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} Km/h`)
// }
// Car.prototype.brake = function(){
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} Km/h`)
// }
// const bmw = new Car('BMW', 120);
// const mercades = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// mercades.accelerate();
// mercades.accelerate();
// mercades.brake();


// Lab 13.2: Sử dụng ES6 Class

class CarCl {
    constructor(make, speed) {
      this.make = make;
      this.speed = speed;
    }
    accelerate() {
      this.speed += 10;
      console.log(`${this.make} is going at ${this.speed} km/h`);
    }
    brake() {
      this.speed -= 5;
      console.log(`${this.make} is going at ${this.speed} km/h`);
      return this;
    }
    get speedUS() {
      return this.speed / 1.6;
    }
    set speedUS(speed) {
      this.speed = speed * 1.6;
    }
  }
const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.brake();
ford.speed = 50;
console.log(ford);


// Lab 13.3: Tính kế thừa

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
}
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/h`)
}
Car.prototype.brake = function(){
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/h`)
}
const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.charge = charge;
}
    // Link prototype
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo){
    this.charge = chargeTo;
}
EV.prototype.accelerate = function(){
    this.speed += 20;
    this.charge--;
    console.log(`${this.make} is going at ${this.speed} Km/h, with a charge of ${this.charge}`)
}
const testla = new EV('Testla', 120, 23);
testla.chargeBattery(90);
console.log(testla)
testla.brake();
testla.accelerate();


// ES6 Classes
// Class expression
// const PersonCl = class {}
// Class declaration
const PersonCl = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  };
  PersonCl.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
  };
class StudentCl extends PersonCl{
    constructor(fullName, brirthYear, course){
        super(fullName, brirthYear);
        this.course = course;
    }
}
// Lab 13.4: Tính kế thừa sử dụng ES6
  class EVCl extends CarCl {
    #charge;
    constructor(make, speed, charge) {
      super(make, speed);
      this.#charge = charge;
    }
    chargeBattery(chargeTo) {
      this.#charge = chargeTo;
      return this;
    }
    accelerate() {
      this.speed += 20;
      this.#charge--;
      console.log(
        `${this.make} is going at ${this.speed} km/h, with a charge of ${
          this.#charge
        }`
      );
      return this;
    }
  }
  const rivian = new EVCl('Rivian', 120, 23);
  console.log(rivian);
  // console.log(rivian.#charge);
  rivian
    .accelerate()
    .accelerate()
    .accelerate()
    .brake()
    .chargeBattery(50)
    .accelerate();
  console.log(rivian.speedUS);