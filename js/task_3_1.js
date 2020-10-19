// TASK 1

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.premium = false;
// user.hobby = 'skydiving';
// console.table(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }

// console.log(message);

// TASK 2

// const countProps = obj => {
//   return Object.keys(obj).length;
// };
// console.log(countProps({}));
// console.log(countProps({ a: 1, b: 1 }));
// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 }));

//  TASK 3

// const findBestEmployee = function (employees) {
//   const values = Object.values(employees);
//   let max = Math.max(...values);
//   let message = '';
//   const names = Object.keys(employees);

//   for (const name of names) {
//     if (employees[name] === max) {
//       return (message = name) || '';
//     }
//   }
// for (const key of employees) {
//   if (employees[key] === max) {
//     return (message = key);
//   }
// }
// return message;
// };

// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));

//  TASK 4

// const countTotalSalary = function (employees) {
//   let arrowOfNumbers = Object.values(employees);
//   console.log(arrowOfNumbers);
//   let totalSalary = 0;
//   for (const number of arrowOfNumbers) {
//     totalSalary += number;
//   }
//   return totalSalary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));

//  TASK 5
// к нам приходят объект и его ключи
// мы должны вернуть массив значений свойства которое нам прилетает из аргумента
// 1. Перебиаем массив объектов
// 2. С помощью in проверяем, есть ли значение у свойства
// 3. Условием, если true - пушим в новый массив
// function getAllPropValues(array, prop) {
//   let newArray = [];
//   for (const key of array) {
//     if (prop in key) {
//       newArray.push(key[prop]);
//     }
//   }
//   return newArray;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, 'name'));
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

//console.log(getAllPropValues(products, 'quantity'));
// [4, 2, 1, 1, 3, 7, 2]

//console.log(getAllPropValues(products, 'category'));
//  []

// TASK 6
// К нам прилетает массив объектов и значение свойств, которые нам нужно совокупить
// Задача, веернуть объщую стоимость сплюсовав свойство price и умеожив на quantity
// 1. Перебираем массив объектов
// 2. Сравниваем имя свойства прилитевшее из аргумента с свойствами в массиве
// 3. Если true - делаем вычисления, умножая цену на кол-во, и запихиваем/плюсуем в ранее созданную переменную
// function calculateTotalPrice(array, prop) {
//   let total = 0;
//   for (const arr of array) {
//     if (arr.name === prop) {
//       total += arr.price * arr.quantity;
//     }
//   }
//   return total;
// }

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Радар', price: 1280, quantity: 2 },
//   { name: 'Радар', price: 1320, quantity: 1 },
//   { name: 'Сканер', price: 2700, quantity: 1 },
//   { name: 'Сканер', price: 2500, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];
// console.log(calculateTotalPrice(products, 'Радар'));
// 9080

//console.log(calculateTotalPrice(products, 'Сканер'));
// 10200

//console.log(calculateTotalPrice(products, 'Захват'));
// 2400

//console.log(calculateTotalPrice(products, 'Дроид'));
// 2800

// let name = 'Brienna';

// // BEGIN
// name.split('').reverse().join('');

// // END

// console.log(name.split('').reverse().join(''));

// let eurosCount = 100;

// BEGIN
// let dollarCount = eurosCount * 1.25;
// let rubCount = dollarCount * 60;
// console.log(
//   `${(dollarCount = eurosCount * 1.25)}\n${(rubCount = dollarCount * 60)}`,
// );

const transactions = [
  { id: 635, quantity: 500, type: 'deposit' },
  { id: 1862, quantity: 700, type: 'deposit' },
  { id: 9991, quantity: 200, type: 'withdraw' },
];
for (i = 0; i < transactions.length; i += 1) {
  numberId = `${i + 1}`;
  console.log(numberId);
}

// for (const obj of transactions) {
//   console.log(obj);
//   console.log(obj.id === 635);
// }

// const numberId = Object.values();
// console.log(numberId);
