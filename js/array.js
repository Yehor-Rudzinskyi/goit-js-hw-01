// < ARRAY SYNTAX > | | | | | | | | | | |

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
// console.log(`User ${loginToFind} is found`);

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

// let biggestNum = prices[3];

// for (const value of prices) {
//   if (value > biggestNum) {
//     biggestNum = value;
//   }
// }

// console.log(biggestNum);

// const bro = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
// let message = '';
// for (const br of bro) {
//   message += br + ', ';
// }

// message = message.slice(0, message.length - 2);
// console.log(message);

// const Bro = ['er', 'ere', 'rerrr'];
// for (const broo of Bro) {
//   console.log(broo);
// }

// const string = '4546843134345';

// for (const character of string) {
//   console.log(character);
// }
// const fruit = 'apple';

// if (fruit === 'apple' || fruit === 'strawberry') {
//   console.log('It is a red fruit!');
// }

// !Метод.includes!

// Выносим варианты в массив
// const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
// const fruit = 'cherry';

// if (redFruits.includes(fruit)) {
//   console.log('It is a red fruit!');
// }

// !Метод.slice(begin,end)!

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];

// // Вернет новый массив в котором будут элементы с индексами от 1 до 2
// console.log(clients.slice(1, 3)); // ["Ajax", "Poly"]

// // Вернет новый массив в котором будут
// // элементы с индексами от 1 до (clients.length - 1)
// console.log(clients.slice(1)); // ["Ajax", "Poly", "Kiwi"]

// // Вернет копию исходного массива
// console.log(clients.slice()); // ["Mango", Ajax", "Poly", "Kiwi"]

// // Вернет новый массив состоящих из последних двух элементом исходного
// console.log(clients.slice(-2)); // ["Poly", "Kiwi"]

!SPLICE!

// Предположим, у нас есть массив оценок, который содержит пять чисел от 1 до 5.
const scores = [1, 2, 3, 4, 5];

// Следующая операция удаляет три элемента массива,
// начиная с первого элемента (индекс 0).
const deletedScores = scores.splice(0, 3);

// Теперь массив scores содержит два элемента.
console.log(scores); // [4, 5]

// А массив deletedScores содержит три удаленных элемента.
console.log(deletedScores); // [1, 2, 3]


splice(position, 0, new_element_1, new_element_2, ...)

// Предположим, что у вас есть массив с названиями цветов в виде строк.
const colors = ['red', 'green', 'blue'];

// Следующая операция помещает один новый элемент перед вторым элементом.
colors.splice(2, 0, 'purple');

// Теперь массив цветов содержит четыре элемента
// с новым элементом, вставленным во вторую позицию.
console.log(colors); // ["red", "green", "purple", "blue"]

// Вы можете вставить более одного элемента, передав четвертый, пятый аргумент и т. д.
colors.splice(1, 0, 'yellow', 'pink');


// Предположим, у вас есть массив языков программирования из четырех элементов.
const languages = ['C', 'C++', 'Java', 'JavaScript'];

// Следующая операция заменяет второй элемент на новый.
languages.splice(1, 1, 'Python');

// В массиве языков теперь все еще четыре элемента,
// но второй элемент теперь «Python» вместо «C++».
console.log(languages); // ["C", "Python", "Java", "JavaScript"]

// Вы можете заменить один элемент на несколько элементов,
// передав больше аргументов
languages.splice(2, 1, 'C#', 'Swift', 'Go');

console.log(languages);
// ["C", "Python", "C#", "Swift", "Go", "JavaScript"]


!concat()!

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];

const allClients = oldClients.concat(newClients);

console.log(allClients);
// ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

console.log(oldClients);
// ["Mango", "Ajax", "Poly", "Kiwi"]

console.log(newClients);
// ["Monkong", "Singu"]
