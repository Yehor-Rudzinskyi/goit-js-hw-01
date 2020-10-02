// const hotel = {
//   name: 'Spa resort',
//   stars: 5,
//   type: 'allIn',
// };

// { } - литерал объекта
// const hotel = {}
// console.log({})

// name: 'Spa resort', -свойство;
// name: -ключ; всегда строка
// 'Spa resort', -значение; может быть любой тип

// console.log(hotel);
// console.log(hotel.name); //обращение к значению свойства
// console.log(hotel['stars']); // если у свойства сложное имя, либо это значение ЛЕЖИТ В ПЕРЕМЕННОЙ

// Переопределение: НЕ КОПИРУЕТСЯ! ССЫЛОЧНЫЙ ТИП

// hotel.type = 'bb';
// console.log(hotel);

// hotel.guests = []; // Если не было такого свойства - то добавится
// console.log(hotel);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// hotel.address = '1, Beach ave.';
// hotel['manager'] = 'Chuck Norris';

// console.log(hotel); // name: "Resort Hotel", stars: 5, capacity: 100, address: "1, Beach ave.", manager: "Chuck Norris"

// Массивы и функции это подвид объекта!
// Просто в массиве ключи от нуля до бесконечности - по дефолту, а в объекте ты сам их клепаешь.

// Объект позволяет также хранить методы для работы с его данными(свойствами)
// Например, запись функции о изменении имени отеля
// const updateHotelName = function (hotel, newName) {
//   // В параметры функции, вносим то с чем онабудет работать
//   //поработай ка с данными о hotel и с вводимым именем
//   hotel.name = newName; // Запиши в это свойство новое значение
// };
// updateHotelName(hotel, 'Spa'); // Передай эти аргументы для функции, чтоб она с ними поработала и вернула результат на место вызова

// const hotel = {
//   name: 'Spa resort',
//   stars: 5,
//   type: 'allIn',
//   updateName: function (newName) {
//     this.name = newName;
//   },
//   //   Если хотим обратиться к свойству объекта, внутри метода объекта, то юзаем this
//   //   сейчас метод в объекте пишем так:
//   updateName(newName) {
//     this.name = newName;
//   },
// };
// hotel.updateName('Spa');

// Перебор Объектов
// for ... in

// const feedback = {
//   goood: 5,
//   bed: 10,
//   normal: 7,
// };

// console.log('bed' in feedback); // Єтот метод проверки вернёт нам true\false отвечая на вопрос
// // ест и данный ключ в объекте

// for (const keys in feedback) {
//   // бадяжим произвольную переменную и перебираем этим циклом название свойств(ключи) в объекте
//   console.log(keys);
//   console.log(feedback[keys]);
//   // чтобы в этом объекте не искалось свойство keys, а перебирало значения находящисиеся в нём используем []
//   // так так эти значения лежат в переменной, которую мы создали для перебора
// }

// это старый способ и переборы объектов сейчас лепят с помощью метода,
// который нам соберёт их в массив :
// const items = Object.keys(feedback); // присваиваем для переменной массив из ключей у объекта feedback
// // с помощью метода Object.keys
// console.log(items);
// // а количество свойст можно легко посмотреть с помощью свойства length :
// console.log(items.length);
// // после чего мы можем спокойно перебрать полученный массив и получить например сумму его значений
// let total = 0;
// for (const item of items) {
//   // перебираем полученный массив
//   total += feedback[item]; // обращаемся-достаём каждое значение item у объекта feedback и плюсуем его
// }
// console.log(total);

// Свойство Которое позволяет СОБРАТЬ\вывести сразу все значения объекта в один массив
// const values = Object.values(feedback);
// console.log(values);
// // теперь мы можем посчитать сумму этих значений
// let total = 0;
// for (const value of values) {
//   console.log(value);
//   total += value;
// }
// console.log(total);

// В ОБЩЕМ
// Object.keys(); метод ДЛЯ просмотра ключей  НАПРИМЕР можем глянуть пустой объект или нет
// - посмотреть на его массив ключей с помощью Object.keys() и length (если равен 0 - он пустой)
// Object.values() метод ДЛЯ просмотра ЗНАЧЕНИЙ ключей
// Object.entries() метод объекта, который позволяет создать из него массив массивов в котором первый элемент - имя ключа
// а второй - его значение

// const goods = {
//   apples: 6,
//   grapes: 3,
//   bread: 4,
//   cheese: 7,
// };

// const valueTotal = Object.values(goods);
// console.log(valueTotal);
// let total = 0;
// for (const value of valueTotal) {
//   total += value;
// }

// console.log('Total:', total);

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const entries = Object.entries(hotel);

// for (const entry of entries) {
//   let prop = entry[0];
//   let value = entry[1];
//   console.log(`${prop}: ${value}`);
// }
