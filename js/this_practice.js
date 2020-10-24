// const showTag = function () {
//     console.log(`show this:`, this);
//     console.log(`showTag:`, this.tag);
// }

// const user = {
//     tag: 'Mango'
// }
// user.showTag = showTag;
// user.showTag()

// Копируем ссылку функции и передаём её в свойстве объекта user. 
// Через свойство объекта вызываем теперь функцию, как метод объекта user.
// При вызове контекст метода опирается на бъект user.



// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log(`show this:`, this);
//         console.log(`showTag:`, this.tag);
//     },
// };

// user.showTag()
// // Вызвал в контексте объекта. Родился/оглянулся/нашёл свойсва объекта)
// const outerShowTag = user.showTag;
// // console.log(outerShowTag)
// outerShowTag();
// Вызвал в НЕ контексте объекта.
// Есть у на метод объекта и у него соответственно контекст этого объекта. 
// Но если мы передадим ссылку на этот метод в переменную и вызовем функцию по этой ссылке(здесь и сейсас)
//     - то она уже ничего не знает об объекте и его лексическом окружении.Она ведь вызвана(рождена заново)
//     и только начинает оглядываться,а в итоге не видит нихрена, ведь вызвана в Глобальной области видимости.

// THIS в callback функциях

// const user = {
//     tag: 'Mango',
//     showTag() {
//         console.log(`show this:`, this);
//         console.log(`showTag:`, this.tag);
//     },
// };

// const invokeAction = function (action) {
//     console.log(action);

//     action()
// }

// invokeAction(user.showTag)
// Передаём ссылку на метод объекта в функцию HOF в качестве параметра.
// HOF - получает функцию, которую потом вызывает, но для неё this - это уже глобалка undefined...

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         this.color = color;
//     }

//     const sweater = {
//         color: 'green',

//     }

//     sweater.changeColor = changeColor;
//     return sweater.changeColor;

// }

// const changeColor = makeChangeColor();
// changeColor('blue');

// 1. Видим объявленную функцию.Ок, идём дальше...
// 2. Натыкаемся на вызов функции "makeChangeColor", результат которой падает в переменную "changeColor"...
// 3. Ок, залазим в неё.Тут есть функция "changeColor", которая принимает параметр и записывает его значение в его контексте.
// 4. Есть объект "sweater"...
// 5. Ссылка на функцию "changeColor" передаётся и записывается как метод в объект"sweater".
// 6. В итоге, функция "makeChangeColor" возвращает значение свойства "changeColor", находящегося в объекте "sweater".
// Значение свойства "changeColor", является ссылка на функцию(её тело)
// function (color) {
//         this.color = color;
// }
// 7. В переменную changeColor записываем результат вызова функции makeChangeColor, после чего получив ссылку на функцию,
//     changeColor - становится функцией...
// 8. Вызываем функцию "changeColor" и передаём ей аргумент. 
// 9. Выполняясь функция даст ошибку, ввиду того что она вызвана в глобальном лексическом окружении её this будет соответствовать
// undefined... А попытка скрипта обратиться к undefined.параметр = параметр
// - даст Cannot set property 'color' of undefined at changeColor

// const makeChangeColor = function () {
//     const changeColor = function (color) {
//         this.color = color;
//     }
//     return changeColor
// }
// const hat = {
//     color: 'blue',
//     changeColor = makeChangeColor(),
// }

// hat.changeColor('orange');

// Цвет в шапке поменяется, ведь функция changeColor была вызвана В КОНТЕКСТЕ объекта hat и this имел куда обратиться!

// PraCtiSE

// const vasya = {
//     name: 'Vasya',
//     sales: 5,
//     sell(prodact) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${prodact}.`;
//     },
// };

// console.log(vasya.sell('Member'))
// console.log(vasya.sales)
// console.log(vasya.sell('Dildo'))
// console.log(vasya.sales)

// const dima = {
//     name: 'Dima',
//     sales: 0,
//     sell(prodact) {
//         this.sales += 1;
//         return `Manager ${this.name} sold ${prodact}.`;
//     },
// };

// console.log(dima.sell('Child'))
// console.log(dima.sales)

// MAKE CONSTRUCTOR

// const Manager = function (name = 'manager', sales = 0) {
//     this.name = name;
//     this.sales = sales;
//     this.sell = function (prodact) {
//         this.sales += 1;
//         return `Manager ${this.name} finaly sold ${prodact} and have ${this.sales} sales!`
//     }
// }

// const vova = new Manager('Vova');

// console.log(vova.sell('Child'))
// console.log(vova.sell('Dildo'))

// const gena = new Manager('Gena', 10);
// console.log(gena.sell('Chivas'))