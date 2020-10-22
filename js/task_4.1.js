// TASK 1

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

// TASK 2

// const isUniq = (element, index, arr) => arr.indexOf(element) === index;
// const isEven = (element) => element % 2 === 0;

// function filterArray(array, cb) {
//   const numbers = [];
//   for(let i = 0; i < array.length; i += 1) {
//     const element = array[i];
//     const index = i;
//  if (cb(element, index, array)){
    //   numbers.push(element)
    // }
//   }
//   return numbers;
// }

// const arr  = [1,2,3,4,5,1,2,5];

// console.log(filterArray(arr, isUniq));
// // [1, 2, 3, 4, 5]

// console.log(filterArray(arr, isEven));
// // [2, 4, 2]

// TASK 3


// Функции add, sub и mult принимают два параметра - accum и element, возвращает число - сумму,
// разность или произведение параметров.

// Дополни тело функции reduceArray строкой присвоения accum вызова функции cb.
// Функция reduceArray должна будет подсчитать сумму или разность или произведение всех элементов массива
// в зависимости от того какая именно из трех функция(add, mult, sub) будет передана в качестве cb.


// const add = (accum, element) => accum + element;
// const mult = (accum, element) => accum * element;
// const sub = (accum, element) => accum - element;

// function reduceArray(array, cb, initial) {
//   'use strict';
//   let i;
//     let accum;
//     console.log(arguments)
//   if(arguments.length >= 3) {
//     accum = initial;
//     i = 0;
//   }
//   if(arguments.length === 2) {
//     accum = array[0];
//     i = 1;
//   }
//   for(i; i < array.length; i += 1) {
//     const element = array[i];
//     // Write code under this line
// accum = cb(accum, element)
//   }
//   return accum;
// }

// const arr  = [1,2,3,4,5];

// console.log(reduceArray(arr, add)); // 15
// console.log(reduceArray(arr, add, 10)); // 25

// console.log(reduceArray(arr, mult)); // 120
// console.log(reduceArray(arr, mult, 10)); // 1200

// console.log(reduceArray(arr, sub)); // -13
// console.log(reduceArray(arr, sub, 10)); // -5

// TASK 4.4

// асставь отсутствующие this в методах объекта account.
// В комментариях показаны операции с объектом и ожидаемые результаты.

// const account = {
//   owner: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['order-1', 'order-2', 'order-3'],
//   changeDiscount(value) {
//     discount = value; // Write code in this line
//   },
//   showOrders() {
//     return orders; // Write code in this line
//   },
//   addOrder(cost, order) {
//     balance -= cost; // Write code in this line
//     orders.push(order); // Write code in this line
//   },
// };
// const copyAccount =  Object.assign({},account);
// copyAccount.orders = [...account.orders];
// копируем для автотестов ссылочные типы

/*
account.changeDiscount(0.15);
//console.log(account.discount); // 0.15

//console.log(account.showOrders()); 
// ['order-1', 'order-2', 'order-3']

account.addOrder(5000, 'order-4');
//console.log(account.balance); // 19000

//console.log(account.showOrders());
// ['order-1', 'order-2', 'order-3', 'order-4']
*/

// TASK 5

// bind для замены this в методах объекта
// Оформи вызов метода invokeInventoryAction таким образом, чтобы в качестве this для методов

// inventory.add
// inventory.remove выступал объект inventory

// const inventory = {
//   items: ['Knife', 'Gas mask'],
//   add(itemName) {
//     this.items.push(itemName);
//     return `Adding ${itemName} to inventory`;
//   },
//   remove(itemName) {
//     this.items = this.items.filter(item => item !== itemName);
//     return `Removing ${itemName} from inventory`;
//   },
// };

// const invokeInventoryAction = function(itemName, action) {
//   const act =  action(itemName);
//   const msg =  `Invoking action on ${itemName}`;
//   return {act, msg};
// };

// const invokeAdd = invokeInventoryAction(
//   'Medkit',
//   inventory.add.bind(inventory)  // Write code in this line
// );
// const arrayAdd = [...inventory.items];
// /* 
// //console.log(invokeAdd);
// //{ act: 'Adding Medkit to inventory', msg: 'Invoking action on Medkit' }

// //console.log(arrayAdd);
// // ['Knife', 'Gas mask', 'Medkit']
// */

// const invokeRemove = invokeInventoryAction(
//   'Gas mask',
//   inventory.remove.bind(inventory) // Write code in this line
// );

// const arrayRemove = [...inventory.items];

/* 
//console.log(invokeRemove);
//{ act: 'Removing Gas mask from inventory', msg: 'Invoking action on Gas mask' }

//console.log(arrayRemove);
// ['Knife', 'Medkit']
*/

// ЛЕНА TASK 7

// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };
// // Создаем переменную под счетчик, чтобы для удобства тестирования создавать последовательные айди.
// let counter = 0;
// const account = {
//   balance: 0,
//   transactions: [],
// createTransaction(amount, type) {
//     let transId = (counter += 1);
//     const transaction = {
//       id: transId,
//       amount,
//       type,
//     }
//     return transaction;
//   },
//   deposit(amount) {
//     this.balance += amount;
//     return this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },
//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(this.getBalance());
//       return `${amount} - Снятие такой суммы невозможно, недостаточно средств`;
//     }
//     this.balance -= amount;
//     return this.transactions.push(this.createTransaction(amount, Transaction.WITHDRAW));
//   },
//   getBalance() {
//     return this.balance;
//   },
//   getTransactionDetails(id) {
//     for (let i = 0; i < this.transactions.length; i += 1) {
//       if (this.transactions[i].id === id) {
//         return this.transactions[i];
//       }
//     }
//     return `Такого id: ${id} не обнаружено!`;
//   },
//   getTransactionTotal(type) {
//     let sum = 0;
//     for (const transaction of this.transactions) {
//       if (type === transaction.type) {
//         sum += transaction.amount;
//       }
//     }
//     return `сумма ${type} = ${sum}`;
//   },
// };
// console.log(account.createTransaction(200, Transaction.DEPOSIT));
// console.log(account.createTransaction(600, Transaction.DEPOSIT));
// account.deposit(200);
// console.log(account.getBalance());
// console.log(account.transactions);
// console.log(account.withdraw(500));
// account.withdraw(100);
// console.log(account.getBalance());
// console.log(account.transactions);
// account.withdraw(50);
// console.log(account.transactions);
// console.log(account.getBalance());
// console.log(account.getTransactionDetails(3));
// console.log(account.getTransactionDetails(100));
// account.deposit(400);
// console.log(account.getTransactionTotal(Transaction.DEPOSIT))
// console.log(account.getTransactionTotal(Transac.WITHDR


// const printValue = function (value) {
//     console.log(`Value:`, value)
// }

// CALL BACK FUNCTION

// const newNumber = function (n, worker) {
//     for (let i = 0; i < n; i += 1) {
//         worker(i)
//     }
// }
// newNumber(3, value => { console.log(`Hi`, value) })
// Вызываем функцию, которой передаём значение и работягу.
// Значение учавствует в переборе.
// Работяга выводит на консоль передаваемые ему значения.

// ФИЛЬТР МАССИВ!

// const filter = function (array, test) {
//     const filteredElements = [];
//     for (const element of array) {
//         const passed = test(element)
//         if (passed) {
//             filteredElements.push(element)
//         }
//     }
//     return filteredElements
// }
// const fruits = [
//   { name: 'apples', quantity: 200, isFresh: true },
//   { name: 'grapes', quantity: 150, isFresh: false },
//   { name: 'bananas', quantity: 100, isFresh: true },
// ];
// const freshFruits = filter(fruits, fruit => fruit.isFresh);
// console.log(freshFruits); // массив с объектами apples и bananas

// const fruitsWithQuantity = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(fruitsWithQuantity); // массив с объектами apples и grapes
// Для фильтрации массива используем получаемые данные и функцию - проверку,
//     которая наполнит новый отфильтрованный массив, через условие.
// Создаём балванку для отфильтровааонного массива.
// Делаем перебор получаемого массива.
// Присваиваем переменной результат сверки данных: каждого перебраного элемента поступающего массива,
//     который мы даём функции работяге, как инструмент.
// сама же функция - работяга получает объект и заглядывает в его свойства,
//     чтобы в итоге сравнить значения и отдать переменной результат true or false
// которую мы используем в условии и наролняем нашу балванку, если условие = true
// Фильтр Массива возвращает нам в итоге наполненную йбалванку 


// ЗАМЫКАНИЕ

// const createCounter = function() {

//   let privateValue = 0;

//   const increment = function() {
//     privateValue += 1;
//     console.log(privateValue);
//   };

//   return {
//     increment,
//   };
// };

// const counterA = createCounter();
// console.dir(counterA)
// counterA.increment(); // 1
// counterA.increment(); // 2

// const counterB = createCounter();
// counterB.increment(); // 1
// counterB.increment(); // 2
// counterB.increment(); // 3


// function person() {
//   let name = 'Peter';
  
//   return function displayName() {
//     console.log(name);
//   };
// }
// let peter = person();
// peter()
// В переменную peter мы прсваиваем результат возврата функции person. 
// Результатаом явдяется возврат функции displayName
// Имея теперь функцию displayName в переменной peter - ьы вызываем её результат.peter()
// Функция person уже давно завершила свою работу, а peter до сих пор получает значение её локальной переменной name... 
// Соответственно функция displayName является ЗАМЫКАНИЕМ

// function getCounter() {
//     let counter = 0;
//     return function () {
//         return counter += 1
//     }
// }

// const count = getCounter();
// console.log(count())
// console.log(count())
// console.log(count())
// console.log(count())

// Имеем функцию с объявленной переменной и анонимной функцией, которая в свою очередь, выполняет арифметическое действие.
//     Присваиваем(идентифицируем) анонимной функции имя count и выводим в консоль результат её возврата.
// При каждом вызове функции count, перезаписывается значение counter. 
// Так происходит, потому что при каждом вызове count(), создаётся новая область видимости,
//     но есть только одна область видимости, созданная для getCounter,
//     так как переменная counter объявлена в области видимости getCounter(),
//     она увеличится при каждом вызове функции count, вместо того, чтобы сброситься до 0.


// ПроПУСК Элемента при переборе Массива.

// var arr = [1,2,42,3];
// var brr = [];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === 42) {
//         i++
// // меняем значение i на +1, пропуская при этом пуш на этот элемент
        
//   }

//   brr.push(arr[i]);
// }

// console.log(brr)

// let purse = 50;
// const tolerance =  18;
// const input = 25;
// const priceChildren = 25;
// const price = 50;
// const promo = 0.8;
// purse -= tolerance  >= input ? priceChildren : price * promo;
    
// console.log(purse);

const createCounter = function() {
  let privateValue = 0;

  const increment = function() {
    privateValue += 1;
    console.log(privateValue);
  };

  return {
    increment,
  };
};

const counterA = createCounter();
console.log(counterA)
counterA.increment(); // 1

counterA.increment(); // 2

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
