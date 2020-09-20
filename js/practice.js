// console.log('Hi dork');

// const isOnline = true;
// const isFrend = true;
// const isDnd = true;

// const canOpenChat = isOnline && isFrend && isDnd === true;
// console.log(canOpenChat);

// let balance = 10000;
// const payment = 20000;

// console.log(
//   `Общая стоимость заказов ${payment} кредитов. Проверяем кол-во доступных средств на счету`,
// );
// if (payment < balance) {
//   balance -= payment;
//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету недостаточно средств для операции!');
// }
// console.log('Операция завершена');

// let balance = 10000;
// const payment = 2000;

// console.log(
//   `Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету,
// `,
// );

// const message =
//   payment < balance
//     ? `На счету осталось ${balance - payment} кредитов`
//     : `На счету недостаточно средств для проведения операции!`;

// console.log(message);

// console.log('Операция завершена');

// let totalSpent = 29800;
// let payment = 500;
// let discount = 0;

// if (totalSpent > 100 && totalSpent < 1000) {
//   discount = 0.02;
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//   discount = 0.05;
// } else if (totalSpent > 5000) {
//   discount = 0.1;
// } else {
//   discount = 0;
// }

// payment -= payment * discount;

// console.log(
//   `Oформляем заказ на сумму ${payment} co скидкой ${discount * 100}%`,
// );

// totalSpent += payment;
// console.log(`Spend by all time ${totalSpent}`);

// const option = 0;
// let massege = '';
// switch (option) {
//   case 1:
//     massege = 'Tomorrow';
//     break;
//   case 2:
//     massege = 'today';
//     break;
//   case 3:
//     massege = 'yesterday';
//     break;
//   default:
//     massege = 'you are dork';
// }

// console.log(massege);

// const employees = 5;
// let totalSalary = 0;
// const minSal = 500;
// const maxSel = 5000;

// for (let i = 1; i <= employees; i += 1) {
//   let salary = Math.round(Math.random() * (maxSel - minSal) + minSal);
//   console.log(`Зарплата работника ${i} - ${salary}`);
//   totalSalary += salary;
// }

// console.log(`Total: ${totalSalary}`);

// const min = 6;
// const max = 13;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//   console.log(i);
//   if (i % 2 === 0) {
//     console.log(`Even numner: `, i);
//     total += i;
//   }
// }
// console.log(`Total:`, total);

// const btnAdd = document.querySelector('button');
// btnAdd.textContent = 'No way';
// const outputEl = document.querySelector('.js-outPut span');
// let total = 0;
// const valueInput = document.querySelector('input[data-value]');

// btnAdd.addEventListener('click', function () {
//   const value = Number(valueInput.value);
//   total += value;
//   outputEl.textContent = total;
// });

// const bro = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// bro[3] = 'End';
// console.table(bro);

// const clients = ['Mango', 'Poly', 'Ajax'];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log('Logging clients: ', clients[i]);
// }

// const clients = ['Mango', 'Poly', 'Ajax'];
// const clientNameToFind = 'Poly';
// let message;

// for (const client of clients) {

//   if (client === clientNameToFind) {
//     message = 'Клиент с таким именем есть в базе данных!';
//     break;
//   }

//   message = 'Клиента с таким именем нету в базе данных!';
// }

// console.log(message);

// let total = 0;
// const prices = [20, 8, 54, 65, 78, 120, 12];

// for (let i = 0; i < prices.length; i += 1) {
//   value = prices[i];
//   if (value % 2 === 0) {
//     total += value;
//   }
// }
// console.log('Total:', total);
//     console.log(`User ${loginToFind} is found`);

// const login = ['Bro', 'PeoLe', 'Greg', 'LoNy'];
// const loginToFind = 'Greg';
// let message = `User ${loginToFind} not found`;

// for (let i = 0; i < login.length; i += 1) {
//   const logins = login[i];

//   if (logins === loginToFind) {
//     message = `User ${loginToFind} is found`;
//   }
// }

// console.log(message);

// const prices = [20, 8, 54, 65, 78, 120, 12];

// let biggestNum = prices[0];

// for (const value of prices) {
//   if (value > biggestNum) {
//     biggestNum = value;
//   }
// }

// console.log(biggestNum);

// const bro = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let message = '';
// for (const br of bro) {
//   message += br + ',';
// }

// message = message.slice(0, message.length - 1);
// console.log(message);

const Bro = ['er', 'ere', 'rerrr'];
for (const broo of Bro) {
  console.log(broo);
}

const string = '4546843134345';

for (const character of string) {
  console.log(character);
}
