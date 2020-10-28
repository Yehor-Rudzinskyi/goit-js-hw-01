// class Storage {
//     constructor(items) {
//         this.items = items;
//     }
  
//     getItems() {
//         return this.items
//     }
  
  
//     addItem(item) {
//         this.items.push(item);
//     }
  
//     removeItem(item) {
//         if (this.items.includes(item)) {
//             this.items.splice(this.items.indexOf(item), 1);
//         }
//     }
// }

// console.log(typeof Storage);
// 'function'

// const goods = [
//   'Нанитоиды',
//   'Пролонгер',
//   'Железные жупи',
//   'Антигравитатор'
// ];

//  const storage = new Storage(goods);

//  console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор'
] */

// storage.addItem('Дроид');
//  console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */

// storage.removeItem('Пролонгер');
//  console.log(storage.getItems());
/* [
  'Нанитоиды',
  'Железные жупи',
  'Антигравитатор',
  'Дроид'
] */


//   class StringBuilder {
//   constructor (value){
//   this._value = value;
//   }
    
//     get value () {
//   return this._value;
//   }

//  append(str) {
// this._value += str
// }

//     prepend(str) {
// this._value = str + this._value
// }
      
//       pad(str) {
//        this.prepend(str) + this.append(str);
//       }
      
//   }

// console.log(typeof StringBuilder);
// 'function'


//  const builder = new StringBuilder('.');

//  builder.append('^');
//  console.log(builder.value); // '.^'

//  builder.prepend('^');
//  console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='

  /*
   * Добавь `статический` метод 
   * `getSpecs(car)`, который принимает 
   * объект-машину как параметр 
   * и возвращает шаблонную строку 
   * со свойствами и значениями объекта.
   * Свойства: 
   *   maxSpeed, 
   *   speed, 
   *   isOn, 
   *   distance,
   *   price
   * Пример строки, полученной этим методом:
   * 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'
   */

 /*
   * Конструктор получает объект настроек.
   *
   * Добавь свойства будущеего экземпляра класса:
   *  speed - текущая скорость, 
   *          начальное значение `0`
   *  price - цена автомобиля
   *  maxSpeed - максимальная скорость
   *  isOn - заведен ли автомобиль. 
   *         Значения `true` или `false`,  
   *         начальное значение false
   *  distance - пробег в километрах, 
   *             начальное значение `0`
   */
//   constructor() {}

class Car {
 // Write code under this line
    static getSpecs(car) {
        return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
  }
  
    constructor(car) {
        //  const { maxSpeed, speed = 0, isOn = false, distance = 0, price } = car;
         this.maxSpeed = car.maxSpeed;
        this.speed = 0;
        this.isOn = true;
        this.distance = 0;
        this._price = car.price
    }
    
    get price() {
      return this._price;
  }
    set price(value) {
      this._price = value
  }
    turnOn() {
      this.isOn = true
  }
    turnOff() {
        this.isOn = false;
        this.speed = 0;
  }
    accelerate(value) {
        if (this.speed < this.maxSpeed) {
            this.speed += value;
      }
  }
    decelerate(value) {
        if (this.speed > 0) {
          this.speed -= value
      }
  }
    drive(hours) {
        if (this.isOn) {
            this.distance = hours * this.speed;
      }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
// console.log(mustang)
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000




class Car {
 // Write code under this line
    static getSpecs(car) {
        return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`
  }
  
    constructor(car) {
         this.maxSpeed = car.maxSpeed;
        this.speed = 0;
        this.isOn = false;
        this.distance = 0;
        this._price = car.price
    }
    
    get price() {
      return this._price;
  }
    set price(value) {
      this._price = value
  }
    turnOn() {
      this.isOn = true;
  }
    turnOff() {
        this.speed = 0;
        this.isOn = false;
       
  }
    accelerate(value) {
            this.speed += value;
              if (this.speed > this.maxSpeed) {
            this.speed = this.maxSpeed;
        }
  }
    decelerate(value) {
          this.speed -= value
        
        if (this.speed < 0) {
            this.speed = 0;
        }
    }
    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
      }
  }
} 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

 console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

 console.log(mustang.price); // 2000
mustang.price = 4000;
 console.log(mustang.price); // 4000