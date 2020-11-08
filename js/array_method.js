// 1. ARRAY FOR EACH METHOD
// Классический перебор - императивный код.
// const numbers = [1, 2, 3];
// for (let i = 0; i < numbers.length; i+=1) {
//     console.log(numbers[i]);
// }
// // Функциональный forEach
// numbers.forEach(num => console.log(num));
// // Указываем параметр idx если нужен доступ к счётчику
// numbers.forEach((num, idx) => console.log(`index ${idx}, value ${num}`));

// 2.  ARRAY MAP
// const numbers = [1, 2, 3];
// const doubledNumbers = numbers.map(num => num * 2);
// console.log(doubledNumbers);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
// ];

// // Для каждого элемента коллекции (user) вернем значение поля name
// const names = users.map(user => user.name);

// console.log(names); // ["Mango", "Poly", "Ajax"]

// 3. ARRAY FILTER

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const filteredNumber = numbers.filter(num => num > 5);
// const filteredNumbers = numbers.filter(num => num < 5);
// console.log(filteredNumbers);
// console.log(filteredNumber);

// const users = [
//   { name: 'Mango', isActive: true },
//   { name: 'Poly', isActive: false },
//   { name: 'Ajax', isActive: true },
//   { name: 'Chelsey', isActive: false },
// ];

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно true, то текущий элемент (user) будет записан в результирующий массив.
// const activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers);

// // Для каждого элемента коллекции (user) проверим поле isActive.
// // Если оно false, то текущий элемент (user) будет записан в результирующий массив.
// const inactiveUsers = users.filter(user => !user.isActive);
// console.log(inactiveUsers);

// 4. ARRAY FIND

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// const foundNumber = numbers.find(num => num > 5);
// console.log(foundNumber);


// const users = [
//   { id: '000', name: 'Mango', isActive: true },
//   { id: '001', name: 'Poly', isActive: false },
//   { id: '002', name: 'Ajax', isActive: true },
//   { id: '003', name: 'Chelsey', isActive: false },
// ];
// // // Для каждого элемента коллекции (user) проверим поле id.
// // // Если оно совпадает с искомым идентификатором, то find прекратит
// // // выполнение и вернет текущий элемент (user) как результат выполнения
// // const user = users.find(user => user.id === '002');
// // console.log(user);
// // Создадим функцию которая будет возвращать нам пользователя по id
// const getUserById = (arr, id) => arr.find(x => x.id === id);
// console.log(getUserById(users, '001'));
// console.log(getUserById(users, '004'));

// array.reduce(сallback[(previousValue, currentItem, index, array)], initialValue)

// 5. ReDUCE

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const getTags = tweets => tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);
//     return allTags;
// }, [])

// console.log(getTags(tweets));

// const getTags = tweets =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);
// console.log(tags)

// 6. SORT
// const numbers = [3, 2, 4, 5, 1];
// console.log(numbers.sort());

// const users = [
//   { name: 'Mango', daysActive: 15 },
//   { name: 'Poly', daysActive: 4 },
//   { name: 'Ajax', daysActive: 27 },
//   { name: 'Chelsey', daysActive: 2 },
// ];

// const sortByActiveDays = (a, b) => a.daysActive - b.daysActive;

// console.log(users.sort(sortByActiveDays));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const even = numbers.filter(x => x % 2 === 0);

// const doubled = even.map(x => x * 2);

// const reversed = doubled.reverse();

// console.log(reversed);

// const result = numbers
//   .filter(x => x % 2 === 0)
//   .map(y => y * 2)
//   .reverse();

// console.log(result);


// PRACTICE

// const numbers = [15, 25, 35];
// const newArray = numbers.map(function (elements, index, array) {
//    return elements * 2;
// })
// console.log(newArray)

// const players = [
//     { id: 'player-1', name: 'Bikk', timePlayed: 10, points: 67, online: false },
//     { id: 'player-2', name: 'Geri', timePlayed: 340, points: 98, online: true },
//     { id: 'player-3', name: 'Pol', timePlayed: 255, points: 76, online: false },
//     { id: 'player-4', name: 'Jeck', timePlayed: 13, points: 45, online: true },
//     { id: 'player-5', name: 'Gogi', timePlayed: 310, points: 88, online: false },
//     { id: 'player-6', name: 'Den', timePlayed: 23, points: 56, online: true },
// ];

// Увеличиваем на определённое колво очки каждого объекта

// const allPlayersName = players.map(player => player.name);
// console.log(allPlayersName)

// const iventIncreasePoints = players.map(function (player) {
//     return{
//      ...player,
//     points: player.points * 0.1 + player.points }});
// console.table(iventIncreasePoints)

// Изменяем значение свойства по его Ай=Ди 

// const playerToUpdate = 'player-2'
// const increaseTimePlayed = players.map(function (player) {
//     if (player.id === playerToUpdate) {
//         return {
//             player,
//             timePlayed: player.timePlayed + 150,
//         }
//     }
//     return player;
// });

// console.log(increaseTimePlayed)

// Practice filter
// console.log(players);
// // Просто фильтр
// const numbers = [2, 4, 67, 14, 56, 9];
// const filteredNum = numbers.filter(function (number) {
//    return number > 15;
// })
// console.log(filteredNum);

// // Игроки онЛайн
// const onlinePlayers = players.filter(function (player) {
//     return player.online
// });
// console.log(onlinePlayers);

// // Игроки оффЛайн
// const offlinePlayers = players.filter(function (player) {
//     return !player.online
// });
// console.log(offlinePlayers);

// // Наигравшие более 250 часов
// const lotOfTimesPlayers = players.filter(function (player) {
//     return player.timePlayed > 250;
// });
// console.log(lotOfTimesPlayers);

// Practice findMethod

// const numbers = [2, 4, 67, 14, 56, 9];

// console.log(numbers.find(x => x === 9));

// FiND player for id

// const playerToFind = 'player-3';
// const findPlayerForId = (arr, x) =>  arr.find(player => player.id === x);

// console.log(findPlayerForId(players, playerToFind));

// Practice every ana some Method!
// Проверим на Игроков он лайн!
// const isAllOnline = players.every(player => player.online);
// console.log(isAllOnline);

// const isAnyOnline = players.some(function (player) {
//     return player.online;
// });
// console.log(isAnyOnline);

// Методы Мэп и фильтр под капотом


// const numbers = [2, 4, 67, 14, 56, 9];
// const map = function (arr, callback) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i += 1) {
//         // console.log(arr[i]);
//         const result = callback(arr[i], i, arr);
//         newArray.push(result);
//     }
//     return newArray;
//  };
// const doubledNumbers = map(numbers, function (number, ind, array) {
//     console.log(number);
//     console.log(ind);
//     console.log(array);
//     return number * 10;
// });



// const multiplyNumber = numbers.map(function (number) {
//     return number * 10;
// });



// const multiplyNumber = numbers.map(number => number * 10);

// Редюсим!

// const numbers = [2, 4, 67, 14, 56, 9];
// const total = numbers.reduce((total, number) => total + number, 0);
// console.log(total);

// const total1 = numbers.reduce(function (total1, number) {
//   return  total1 + number; 
// }, 0);

// console.log(total1);

// const salary = {
//     mango: 150,
//     poly: 225,
//     greg: 958,
// };
// const values = Object.values(salary);
//     console.log(values)
// const tooalSalary = values.reduce(function (total, element) {

//     return total + element;
// }, 0);

    
// const tooalSalary = Object.values(salary).reduce( (total, element) => total + element, 0);
// console.log(tooalSalary)

// const totalHoursInGame = players.reduce((total, element) => total + element.timePlayed, 0);
// console.log(totalHoursInGame)

// const cards = [
//   { label: '000', price: 20, quantity: 2 },
//   { label: '001', price: 10, quantity: 5 },
//   { label: '002', price: 15, quantity: 8 },
//   { label: '003', price: 25, quantity: 3 },
// ];

// const totalPrice = cards.reduce((total, element) => total + element.price * element.quantity, 0);
// console.log(totalPrice);

// Выборка значений - массивов у объекта. Пушим в аккум, предварительно распылив на элементы массив свойства tag.
// const totalTags = tweets.reduce(function (total, element) {
//     console.log(element);
//     total.push(...element.tags);
//     return total
// }, []);
// console.log(totalTags);
// const tagsStats = totalTags.reduce(function (acc, element) {
//     if (acc.hasOwnProperty(element)) {
//         acc[element] += 1;
//         return acc;
//     }
//     acc[element] = 1;
//     return acc;
// }, {});
// console.log(tagsStats);

// // Тернарником, грязный метод бо мутирует аккумулятор
// // Значением свойства tag, объекта асс будет то, что удовлетворит (или нет) условия тернарника
// const tagsTernarStats = totalTags.reduce(function (acc, tag) {
//     acc[tag] = acc.hasOwnProperty(tag) ? acc[tag] + 1 : 1;
//     return acc
// }, {});
// console.log(tagsTernarStats);

// SORT!

// const numbers = [1, 5, 2, 6, 7, 3];
// console.log(numbers.sort());

// const letters = ['a', 'r', 'G', 'q','S','w'];
// console.log(letters.sort());

// Порядок сортировки

// numbers.sort(function (prev, next) {
//     return next - prev;
// });
// console.log(numbers);

// Делаем копию массива, не сортируя оригинальный и на нём уже проводим сорт
// const copy = numbers.slice();
// const spredCopy = [...numbers].sort((a,b) => b - a );
// console.log(copy);
// console.log(spredCopy);

// const players = [
//     { id: 'player-1', name: 'Bikk', timePlayed: 10, points: 67, online: false },
//     { id: 'player-2', name: 'Geri', timePlayed: 340, points: 98, online: true },
//     { id: 'player-3', name: 'Pol', timePlayed: 255, points: 76, online: false },
//     { id: 'player-4', name: 'Jeck', timePlayed: 13, points: 45, online: true },
//     { id: 'player-5', name: 'Gogi', timePlayed: 310, points: 88, online: false },
//     { id: 'player-6', name: 'Den', timePlayed: 23, points: 56, online: true },
// ];

// const sortByTopPlayers = players.slice().sort(function (prevPlayer, nextPlayer) {
//     // по возрастанию значения свойств
//     return prevPlayer.timePlayed - nextPlayer.timePlayed;
// // по убыванию значения свойств
//     // return nextPlayer.timePlayed - prevPlayer.timePlayed;

// })
// console.table(sortByTopPlayers);

// const sortByWorstPlayers = [...players].sort(function (prevPlayer, nextPlayer) {
//     // по возрастанию значения свойств
//     // return prevPlayer.timePlayed - nextPlayer.timePlayed;
// // по убыванию значения свойств
//     return nextPlayer.timePlayed - prevPlayer.timePlayed;

// })
// console.table(sortByWorstPlayers);

// Цепочка вызовов


// HOme Work 6 - 1
const users = [
    {
        id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
 name: 'Moore Hensley',
 email: 'moorehensley@indexia.com',
 eyeColor: 'blue',
 friends: [ 'Sharron Pace' ],
 isActive: false,
 balance: 2811,
 skills: [ 'ipsum', 'lorem' ],
 gender: 'male',
 age: 37
 },
 {
     id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
 name: 'Sharlene Bush',
 email: 'sharlenebush@tubesys.com',
 eyeColor: 'blue',
 friends: [ 'Briana Decker', 'Sharron Pace' ],
 isActive: true,
 balance: 3821,
 skills: [ 'tempor', 'mollit', 'commodo', 'veniam', 'laborum' ],
 gender: 'female',
 age: 34
},
{
    id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: [ 'Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner' ],
    isActive: false,
    balance: 3793,
    skills: [ 'nulla', 'anim', 'proident', 'ipsum', 'elit' ],
    gender: 'male',
    age: 24
},
{
    id: '249b6175-5c30-44c6-b154-f120923736f5',
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: [ 'Goldie Gentry', 'Aisha Tran' ],
    isActive: true,
    balance: 2278,
    skills: [ 'adipisicing', 'irure', 'velit' ],
    gender: 'female',
    age: 21
},
{
    id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: [ 'Jordan Sampson', 'Eddie Strong' ],
    isActive: true,
    balance: 3951,
    skills: [ 'ex', 'culpa', 'nostrud' ],
    gender: 'male',
    age: 27
},
{
 id: '150b00fb-dd82-427d-9faf-2879ea87c695',
 name: 'Blackburn Dotson',
 email: 'blackburndotson@furnigeer.com',
 eyeColor: 'brown',
 friends: [ 'Jacklyn Lucas', 'Linda Chapman' ],
 isActive: false,
 balance: 1498,
 skills: [ 'non', 'amet', 'ipsum' ],
 gender: 'male',
 age: 38
},
{
    id: 'e1bf46ab-7168-491e-925e-f01e21394812',
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: [ 'Goldie Gentry', 'Briana Decker' ],
    isActive: true,
    balance: 2764,
    skills: [ 'lorem', 'veniam', 'culpa' ],
    gender: 'female',
    age: 39
}
]
const getUserNames = array => array.map(({name}) => name);

 console.log(getUserNames(users));

