
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
// Для того, чтобы получить все имена пользователей: 
// 1. Создаём функцию, которая получает массив объектов.
// 2. На массив объектов применяем метод 'map', который нам перебёт каждый объект.
// 3. С помощью деструктеризции, присваиваем парамметру 'map' свойство "name" с его значением и выводим как результат. 


// Деструктурирующее присваивание для параметра функции

// function userId({id}) {
//   return id;
// }
// function whois({displayName, fullName: {firstName: name}}){
//   console.log(displayName + " is " + name);
// }

// var user = { 
    //   id: 42, 
    //   displayName: "jdoe" 
    //   fullName: { 
        //       firstName: "John" 
        //       lastName: "Doe 
        //    
        // };
                
// console.log("userId: " + userId(user)); // "userId: 42"
// whois(user); // "jdoe is John"

// HOme Work 6 - 1
// Получи массив имен всех пользователей(свойство name) используя деструктурирующее присваивание
// для параметра функции({ name }) без пробелов и переносов на новую строку.
                
const getUserNames = array => array.map(({name}) => name);
// console.log(getUserNames(users));
                
// HW 6-2
// Получи массив объектов пользователей, отобранный по цвету глаз(свойство eyeColor),
// используя деструктурирующее присваивание для параметра функции({ eyeColor }) без пробелов и переносов на новую строку.
                
const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color);
// console.log(getUsersWithEyeColor(users, 'blue'));
                
// HW 6-3
// Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).
                
const getUsersWithGender = (array, genderLookingFor) => array.filter(({gender}) => gender === genderLookingFor).map(({name}) => name);
// console.log(getUsersWithGender(users, 'male'));
                
// HW 6-4
// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive) юзая оператор *!*
                
const getInactiveUsers = array  => array.filter(({isActive}) => !isActive);
// console.log(getInactiveUsers(users));
                
// HW 6-5
// Получи объект пользователя (не массив) по уникальному значению свойства email.

const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);
// console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));

// HW 6-6
// Получи массив из объектов, которые состоят только из свойств name и email тех пользователей,
// которые попадают в возрастную категорию от min до max лет(значение свойства age).
const getUsersWithAge = (array, min, max) => array.filter(({ age }) => age > min && age < max).map(({ name, email }) => ({name,email}));  

// console.log(getUsersWithAge(users, 20, 30));
// console.log(getUsersWithAge(users, 30, 40));


//  Сравнение, пример

// const x = 13;

// // num больше 10 ?
// const larger = num > 10; // true

// // num меньше 100 ?
// const smaller = 100 > num; // true

// // num находитя между 10 и 100 ?
// const between = smaller && larger; // true

// Создание анонимных объектов:

// const arr = Array(3)
//   .fill('')
//   .map((e,i) => ({['index']: i }));
/* [ { index: 0 }, { index: 1 }, { index: 2 } ] */
                 
// HW 6-7
// Получи общую сумму баланса (сумму значений свойства balance) всех пользователей.

const calculateTotalBalance = array => array.reduce((total, {balance}) => total + balance,0);
//  console.log(calculateTotalBalance(users)); 

//  HW 6-8
// filter, includes и map
// Получи массив имен всех пользователей у которых есть друг с заданным именем.

const getUsersWithFriend = (array, friendName) => array.filter(({ friends }) => friends.includes(friendName)).map(({name}) => name);
// console.log(getUsersWithFriend(users, 'Briana Decker'));

// HW 6 - 9
// sort и map
// Получи массив имен(поле name) людей,
// отсортированных в зависимости от количества их друзей(поле friends)
// Тк sort() по умолчанию сортирует, преобразуя к строке - мы тут будем использовать свойство длинны .length 

const getNamesSortedByFriendsCount = (array) => array.slice().sort((a,b)  => a.friends.length - b.friends.length).map(({name}) => name);
// console.log(getNamesSortedByFriendsCount(users));
 
// HW 6 - 10
// Получи массив всех умений всех пользователей(поле skills),
// при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.
// Слияние массивов:
// const odd = [1, 3, 5];
// const even = [2, 4, 6];
// // 1
// [...odd, ...even];
// //  [1, 3, 5, 2, 4, 6]
// // 2
// odd.concat(even)
// //  [1, 3, 5, 2, 4, 6]

// reduce, filter, sort
// В функции редюс, мы конкатенируем отфильтрованный массив
// (в который при каждой итерации попадает уникальный элемент не содержащийся в аккумуляторе)
// с аккумулятором. После чего сортируем массив с уникальными элементами по алфавиту.
// const getSortedUniqueSkills = (array) => array.reduce((acc, { skills }) => skills.filter((element) => !acc.includes(element) ).concat(acc), []).sort();
const getSortedUniqueSkills = (array) => array.reduce((acc, element) => [...acc, ...element.skills], []).sort().filter((skill, index, array) => array.indexOf(skill) === index);
console.log(getSortedUniqueSkills(users));
 