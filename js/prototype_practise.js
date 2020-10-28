// const animal = { eats: true };
// const dog = Object.create(animal);
// console.log(dog)
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

// const Guest = function(name, room) {
//   this.name = name;
//   this.room = room;

//   Guest.prototype.showGuestInfo = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
  
//   }

//     Guest.prototype.showGuest = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
//   }

//     Guest.prototype.show = function () {
//     console.log(`name: ${this.name}, room: ${this.room}`);
//   }
// };

// // console.log(Guest.prototype); // {constructor: ƒ}
// const mango = new Guest('Mango', 28);

// console.log(mango);

// Prototype inheritance

// const objA = {
//   x: 1,
//   y: 2,
// };
// const objB = Object.create(objA)
// objB.z = 10
// objB.w = 'bro';
// objB.q = 666;
// console.log(objB.qwe)
// console.log(objB.hasOwnProperty('z'))

// Class
// const Manager = function (name, sales) {
//   this.name = name;
//   this.sales = sales;
// };
// Manager.prototype.sale = function () {
//   this.sales += 1
// }
// console.dir(Manager);

// // Objects copies
// const mango = new Manager('Bratik', 5);
// console.log(mango)

// const billi = new Manager('Gilli', 10);
// console.log(billi);

// ES 6 CLASSES

// remember

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.newName = function (name) {
//   this.name = name;
// }

// const human = new Hero('Jim', 1000);

// console.log(human);

// PRACTICE

// class Hero {

//   static description = `This is basic hero!`;

//   constructor(name, xp) {
//     this.name = name;
//     this.xp = xp;
//   }

//     changeName(name) {
//       this.name = name;
//   }
  
//   gainXp(quantity) {
//     console.log(`${this.name} earned ${quantity} experience!`)
//     this.xp += quantity;
//   }
  
// };

// const human = new Hero('Jim', 1000);
// human.gainXp(500);
// console.log(human);


// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.description = 'I am HERO!';
// Hero.showStsts = function (hero) {
//   console.log(hero);
// };

// Hero.prototype.changeName = function (name) {
//   this.name = name;
// };


// const jimi = new Hero('Jimi', 75);
// console.log(jimi)
// jimi.changeName('Bro')
// console.log(jimi)
// console.dir(Hero)

// class Hero {
//   constructor(name, xp) {
//     this._name = name;
//     this._xp = xp;
//   };
  
//   get name() {
//     console.log(this._name);
//   }

//   set name(name) {
//     this._name = name;
//   }
//   // changeName(name) {
//   //   this.name = name;
//   // };
//   // getName() {
//   //   return this.name;
//   // };

//   gainXp(quantity) {
//     this._xp += quantity;
//     console.log(`Recive ${quantity} xp!`)
//   };

// }

// const hero = new Hero('Bil', 35);
// console.log(hero);
// hero.gainXp(50);
// console.log(hero);
// hero.name = 'Brendon';
// hero.name

// INHERITANCE PrACTICE

// class Hero {
//   constructor(name, xp) {
//     this._name = name;
//     this._xp = xp;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(newName) {
//     this._name = newName;
//   }

//   gainXp(amount) {
//     console.log(`${this._name} get ${amount} exp! `)
//     this._xp += amount;
//   }
// }
// class Warrior extends Hero {
//   constructor(name, xp, weapon) {
//     super(name, xp)
//     this.weapon = weapon;
//   }
//   attack() {
//     console.log(`${this._name} attack with: ${this.weapon}!!!`)
//   }
// }

// const human = new  Warrior('Bill', 10, 'Knife');
// console.log(human);
// human.attack()
// human.gainXp(50)

// const bob = {
//   name: 'Bob',
//   age: 14,
//   walk() {
//     console.log(`${this.name} is walking`)
//   }
// }

// const bill = {
//   name: 'Bill',
//   age: 33,
//     walk() {
//     console.log(`${this.name} is walking`)
//   }
// }

// bob.walk()

// const Human = function (name, age) {
//   this.name = name;
//   this.age = age;

//    this.walk = function() {
//     console.log(`${this.name} is walking`)
//   }
// } 

// const bob = new Human('Bob', 15);
// console.log(bob)
// const bill = new Human('Bill', 77);
// console.log(bill)
// bob.walk()

const 