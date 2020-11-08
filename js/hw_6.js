
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
console.log(getUserNames(users));
                
// HW 6-2
// Получи массив объектов пользователей, отобранный по цвету глаз(свойство eyeColor),
// используя деструктурирующее присваивание для параметра функции({ eyeColor }) без пробелов и переносов на новую строку.
                
const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue'));
                
// HW 6-3
// Получи массив имен пользователей (значение свойства name) по полу (значение свойства gender).
                
const getUsersWithGender = (array, genderLookingFor) => array.filter(({gender}) => gender === genderLookingFor).map(({name}) => name);
console.log(getUsersWithGender(users, 'male'));
                
// HW 6-4
// Получи массив только неактивных пользователей (отфильтруй по значению свойства isActive) юзая оператор *!*
                
const getInactiveUsers = array  => array.filter(({isActive}) => !isActive);
console.log(getInactiveUsers(users));
                
// HW 6-5
// Получи объект пользователя (не массив) по уникальному значению свойства email.

const getUserWithEmail = (array, mail) => array.find(({email}) => email === mail);
console.log(getUserWithEmail(users, 'rossvazquez@xinware.com'));
                
                 

