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

class Hero {

  static description = `This is basic hero!`;

  constructor(name, xp) {
    this.name = name;
    this.xp = xp;
  }

    changeName(name) {
      this.name = name;
  }
  
  gainXp(quantity) {
    console.log(`${this.name} earned ${quantity} experience!`)
    this.xp += quantity;
  }
  
};

const human = new Hero('Jim', 1000);
human.gainXp(500);
console.log(human);

 