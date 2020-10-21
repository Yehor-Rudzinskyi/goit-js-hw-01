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
//   const pass = cb(element, index, arr)
//     console.log(pass)
//     // Write code under this line
//     if (pass){
//       numbers.push(element)
      
//     }
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


const add = (accum, element) => accum + element;
const mult = (accum, element) => accum * element;
const sub = (accum, element) => accum - element;

function reduceArray(array, cb, initial) {
  'use strict';
  let i;
    let accum;
    console.log(arguments)
  if(arguments.length >= 3) {
    accum = initial;
    i = 0;
  }
  if(arguments.length === 2) {
    accum = array[0];
    i = 1;
  }
  for(i; i < array.length; i += 1) {
    const element = array[i];
    // Write code under this line
accum = cb(accum, element)
  }
  return accum;
}

const arr  = [1,2,3,4,5];

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
// console.log(account.getTransactionTotal(Transaction.WITHDRAW))