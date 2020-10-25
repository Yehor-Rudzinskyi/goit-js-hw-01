// const animal = { eats: true };
// const dog = Object.create(animal);
// console.log(dog)
// dog.barks = true;

// console.log(dog.barks); // true
// console.log(dog.eats); // true

const Guest = function(name, room) {
  this.name = name;
  this.room = room;

  Guest.prototype.showGuestInfo = function () {
    console.log(`name: ${this.name}, room: ${this.room}`);
  
  }

    Guest.prototype.showGuest = function () {
    console.log(`name: ${this.name}, room: ${this.room}`);
  }

    Guest.prototype.show = function () {
    console.log(`name: ${this.name}, room: ${this.room}`);
  }
};

// console.log(Guest.prototype); // {constructor: ƒ}
const mango = new Guest('Mango', 28);

console.log(mango);