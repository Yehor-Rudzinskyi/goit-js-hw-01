// const add = function (a, b, c) {
//   return a + b + c;
// };

// Определение функции начинается с ключевого слова function,
// за которым может следовать необязательное имя функции.
//     Имя функции это действие, глагол начинающийся с маленькой буквы,
//     отвечающий на вопрос 'Что сделать?'.
//     Например: findSmallesNumber, fetchUserInfo, validateInput.

// В круглых скобках идут параметры — перечисление данных которые функция будет получать из вне.
// Параметров может быть несколько, или вообще их не быть,
// тогда записываются просто пустые круглые скобки().

// Далее идет тело функции, заключенное в фигурные скобки { },
// содержащее инструкции которые необходимо выполнить при вызове функции.
// Тело функции всегда заключают в фигурные скобки, даже если оно состоит из одной инструкции.

// Оператор return определяет возвращаемое значение.
// Когда интерпретатор доходит до return, он сразу же выходит из функции,
// и возвращает это значение в то место кода, где функция была вызвана.

// Оператор return без выражения возвращает значение undefined.
// При отсутствии return в теле функции, она все равно вернет значение undefined.

// const neWest = function (x, y) {
//   // в скобки передаём ПАРАМЕТРЫ
//   console.log(x);
//   console.log(y);
//   console.log('Use thise function');
//   return x + y;
//   // стопорит функцию и выдаёт результат
// };

// объявляем функцию
// const res1 = neWest(3, 7);
// console.log(res1);
//  вызываем функцию и в скобки вносим АРГУМЕНТЫ
// Аргументы - это значения для параметров

// Задача 1

// const cart = [2, 45, 58, 7, 9, 6, 5, 4, 58, 71, 25, 45];
// let total = 0;

// for (const value of cart) {
//   total += value;
// }

// console.log('Total:', total);

// Напишем функцию calculateTotalPrice(items), которая принимает массив цен(чисел) и возвращает их сумму

// const calculateTotalPrice = function (items) {
//   // объявляем функцию с параметром
//   let total = 0;
//   // объявляем переменную, хранящую результат
//   for (const item of items) {
//     total += item;
//     // производим вычесления
//   }
//   return total;
//   // возвращаем результат
// };

// console.log(calculateTotalPrice([10, 20, 30]));
// // вызываем функцию, указав аргумент для её параметров

// Задача 2

// Пишем функцию logItems(items), для перебора и логирования массива

// const logItems = function (items) {
//   for (const item of items) {
//     console.log(item);
//   }
// };

// logItems([2, 23, 32, 3, 34, 45, 56, 67]);

// Задача 3

// const logins = ['one', 'two', 'three', 'four'];
// const findLogins = 'twot';
// const message = logins.includes(findLogins)
//   ? `User ${findLogins} is found`
//   : `User ${findLogins} isn't found`;
// console.log(message);

// Пишем функцию, которая примет все логины и один логины

// const logins = ['one', 'two', 'three', 'four'];
// const findLogins = function (allLogins, loginToFind) {
//   // Объявляем функцию в параметры которой вводим значения "все логины" и "логин, кторыый необходимо найти"
//   // вызывая функцию, в аргумент передаём массив "logins"(содержащий перечень) и логин, который необходимо проверить.
//   // перебираем циклом for наш массив и заполняем переменную ответом, после сравнения логина со списком,
//   // изначально установив ответ по умолчанию
//   let message = `User ${loginToFind} isn't found`;
//   for (login of allLogins) {
//     if (login === loginToFind) {
//       message = `User ${loginToFind} is found`;
//     }
//   }
//   // После решения задачи возврвщаем необходимый результат
//   return message;
//   // который вернётся в ту строку, от куда его вызывали
// };
// console.log(findLogins(logins, 'two'));
// // т.е вот сюда)

// const findLogins = function (allLogins, loginToFind) {
//   for (login of allLogins) {
//     if (login === loginToFind) {
//       return `User ${loginToFind} is found`;
//       // упрощаем работу в фенкции убирая не нужную переменную, выводя результат сразу с return
//     }
//   }
//   return `User ${loginToFind} isn't found`;
// };

// console.log(findLogins(logins, 'two'));

// // Упрощаем тернарник
// const findLogins = function (allLogins, loginToFind) {
//   return allLogins.includes(loginToFind)
//     ? `User ${loginToFind} is found`
//     : `User ${loginToFind} isn't found`;
// };
