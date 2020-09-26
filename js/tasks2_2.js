// Напиши функцию logItems(array), которая получает массив и использует цикл for,
//   который для каждого элемента массива будет выводить в консоль сообщение
// в формате[номер элемента]-[значение элемента].

// Нумерация должна начинаться с 1. К примеру для первого элемента массива
// ['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// const getItemsString = function (array) {
//   let result = '';
//   for (i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }
//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));

// Напиши скрипт подсчета стоимости гравировки украшений.
// Для этого создай функцию calculateEngravingPrice(message, pricePerWord)
// принимающую строку(в строке будут только слова и пробелы) и цену гравировки одного слова,
//   и возвращающую цену гравировки всех слов в строке.

// const calculateEngravingPrice = function (message, pricePerWord) {
//   return (priceForWork = message.split(' ').length * pricePerWord);
// };

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку
//   (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// const findLongestWord = function (string) {
//   let words = string.split(' '); //Разбиваем строку на массив
//   let biggestWord = words[0]; // Обьявляем переменную, содержащую элемент полученного массива, который мы будем сравнивать

//   for (const value of words) {
//     // Создаём цикл, в котором перебираем элементы
//     if (value.length > biggestWord.length) {
//       //Сравниваем ДЛИННУ каждого элемента с произвольно выбранным
//       biggestWord = value; // Элемент, самый большой по длине записываем в переменную
//     }
//   }
//   return biggestWord; // Выводим результат
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'

// Напиши функцию formatString(string) которая принимает строку и форматирует ее если необходимо.

// Если длина строки не превышает 40 символов, функция возвращает ее в исходном виде.
// Если длина больше 40 символов,
//   то функция обрезает строку до 40 - ка символов и добавляет в конец строки троеточие '...',
//  после чего возвращает укороченную версию.

// const formatString = function (string) {
//   if (string.length > 40) {
//     return `${string.slice(0, 40)} ...`;
//   } else {
//     return string;
//   }
// };

// function formatString(string, maxLength = 40) {
//   const dots = '...';
//   return string.length >= maxLength //если длинна строки больше 40ка
//     ? string.slice(0, maxLength).concat(dots) // обрезаем по 40ый знак и плюсуем точки
//     : string; // если нет = возвращаем начальный вариант
// }

// /*
//  * Вызовы функции для проверки работоспособности твоей реализации.
//  */
// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// // вернется оригинальная строка

// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// // вернется форматированная строка

// console.log(formatString('Curabitur ligula sapien.'));
// // вернется оригинальная строка

// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );
// вернется форматированная строка

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.
// Функция проверяет ее на содержание слов spam и sale.
// Если нашли зарещенное слово то функция возвращает true,
//   если запрещенных слов нет функция возвращает false.
// Слова в строке могут быть в произвольном регистре.

// const checkForSpam = function (message) {
//   return (
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale')
//   );
// };

// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// function mapArray(array) {
//   'use strict';
//   const numbers = new Array();
//   for (let i = 0; i < array.length; i += 1) {
//     numbers.push(array[i] * 10);
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));

// console.log(mapArray([-2.5, 0, 2.5]));

// function filterArray(array) {
//   'use strict';
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));

// console.log(filterArray([1, NaN, Infinity]));

// console.log(filterArray([0, -0, 100, '100']));

// console.log(filterArray([undefined, false, null, [], 1]));

// console.log(filterArray([{}, () => {}, 2]));

function reduceArray(array) {
  'use strict';
  let total = 0;
  if (array[0]) {
    return 0;
  }
  return total;
}

console.log(reduceArray([1, 2, 3]));
6;

console.log(reduceArray([-2, 0, 2]));
0;

console.log(reduceArray([1, 2, 2.5]));
