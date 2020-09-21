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
