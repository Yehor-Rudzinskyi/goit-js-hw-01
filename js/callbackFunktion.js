// const iCanShow = (message) => {
//     console.log(message)
// }

// const showMe = (tool) => {
//     const mes = 'Hello'
//     tool(mes)
// }

// showMe(iCanShow)

// ПРИМЕР 1

// Создаём фильтр, который сделает нам выборку с массива и вернёт значение по условию 'x > 3'

// const numbers = [1, 2, 3, 4, 5, 6, 7]

// console.log(filter(numbers, x => x > 3));
// console.log(filter(numbers, x => x < 4));
// console.log(filter(numbers, x => x < 4 && x > 2));
// Вызываем функцию, внутрь которой передаём наш массив 
// function filter(arr, callback) {
// // создаём массивчик для результата
//     const result = [];
//     // делаем перебор массива и проверку на условие. Если всё чётко - пушим в новый массив 
//     // const check = x => x > 3; передаём функцию, как параметры и она же получается callback. 
//     for (const value of arr) {
//         if (callback(value)) {
//           result.push(value)
//       }  
//     }
//     return result;
// }
// Всё вроде бы классно, но функция является одноразовой.Соответственно нам лучше вносить в неё параметры динамически.
// В Условия if мы можем передать функцию, которая будет динамически получать аргументы и выводить true or false

// ПРИМЕР 2
// Создаём функцию с поиском и выводом необходимого значения по условию

// function find(arr, callback) {
//     for (const value of arr) {
//         if (callback(value)) {
//           return value
//       }  
//     }
// }

// console.log(find(numbers, x => x === 4));
// console.log(find(numbers, x => x > 4));


// ПРИМЕР 3
// Пробуем найти индекс элемента и вывести его номер на консоль

// const fruits = ['apple', 'mango', 'grape', 'tomato', 'plumb']

// function indexOf(array, callback){
//     for (let i = 0; i < array.length; i += 1) {
//         if (callback(array[i])) {
//             return i
//         };

//     }
//     return -1
// }
// console.log(indexOf(fruits, fruit => fruit === 'grape'));
// console.log(indexOf(fruits, fruit => fruit === 'onion'));


// THIS

// function fn() {
//     console.log(this)
// }

// fn()


//  this в методе объекта

// const petya = {
//   name: 'Petya',
//   showThis() {
//     console.log(this);
//   },
//   showName() {
//     console.log(this.name);
//   },
// };

// petya.showThis(); // {name: "Petya", showThis: ƒ, showName: ƒ}
// petya.showName(); // 'Petya'


// function showThis() {
//   console.log('this in showThis: ', this);
// }

// const greet = function (guest) {
//   return `${guest}, welcome to ${this.name}!`;
// }

// const hotel = { name: 'Spa' };

// const hotelGreeter = greet.bind(hotel, 'Bro');

// console.log(hotelGreeter());


// const repeat = function(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const labels = [];

// repeat(5, value => {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// const addIndex = (element, index) => element + index;
// // Write code under this line
// const subIndex = (element, index) => element - index;
  
// function mapArray(array, cb) {
//   'use strict';
// // Write code under this line
//   const numbers = new Array(array.length);
//   console.log(numbers)
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//      numbers[i] = cb(element, index);
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5];

// console.log(mapArray(arr, addIndex));




// const add = function(...args) {
//   console.log(args); // массив всех аргументов
// };

// add(1, 2, 3);
// add(1, 2, 3, 4, 5);

const isUniq = (element, index, arr) => arr.indexOf(element) === index;
const isEven = (element) => element % 2 === 0;

function filterArray(array, cb) {
  const numbers = [];
  for(let i = 0; i < array.length; i += 1) {
    const element = array[i];
    const index = i;
  const pass = cb(element, index, arr)
    console.log(pass)
    // Write code under this line
    if (pass){
      numbers.push(element)
      
    }
  }
  return numbers;
}

const arr  = [1,2,3,4,5,1,2,5];

console.log(filterArray(arr, isUniq));
// [1, 2, 3, 4, 5]

console.log(filterArray(arr, isEven));
// [2, 4, 2]

