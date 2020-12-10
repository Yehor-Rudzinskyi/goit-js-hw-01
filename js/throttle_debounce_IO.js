// Mousemove

const coordsOutputRef = document.querySelector('.js-coords');
let outputMouseCounterCallback = 0

// window.addEventListener('mousemove', event => {
//     outputMouseCounterCallback += 1;
//     coordsOutputRef.textContent = `Кол-во вызовов:${outputMouseCounterCallback}`;
// })



// Когда мы через скрипт и CDN подключаемся к Lodash, он глобально открывает нам переменную "_" 
// "_" - это функция(объект, с необходимыми нам методами) Отсюда, через ".", достаём необходимый нам "_.trottle"!
// console.dir(_);
const trottledCallback = _.throttle( event => {
    outputMouseCounterCallback += 1;
    coordsOutputRef.textContent = `Кол-во вызовов:${outputMouseCounterCallback}`;
}, 300)

window.addEventListener('mousemove', trottledCallback)

// Теперь скачав и вставив скрипт trottle в HTML - разметку, мы оборачиваем эту функцию в него
// и передаём её как cb-ф в обработчик события. Где первым аргументом, в throttle передаём нашу функцию,
// а вторым - раз в сколько млСекунд оно будет срабатывать


// Input
// Аналогичная движуха с debounce, Где первым аргументом, в debounce передаём нашу функцию,
// а вторым - через сколько млСекунд бездействия пользователя оно будет срабатывать
const inputRef = document.querySelector('.input-js');
const outputRef = document.querySelector('.js-outputed');

let inputCounterCallback = 0;

// inputRef.addEventListener('input', event => {
//     inputCounterCallback += 1;
//     outputRef.textContent = `Кол-во вызовов:${inputCounterCallback},
//     Значение:${event.target.value}`;
// });

const debounceCallbackFunction = _.debounce ( event => {
    inputCounterCallback += 1;
    outputRef.textContent = `Кол-во вызовов:${inputCounterCallback},
    Значение:${event.target.value}`;
}, 200)

inputRef.addEventListener('input', debounceCallbackFunction);



// IntersectionObserver

// первым делом нам необходимо создать класс IO в который войдёт cb-ф с двумя аргуметнами
// 1. entries - все вхождения.Массив вхождений
// 2. observer - ссылка на сам экземпляр, то что он вернёт

// const io = new IntersectionObserver((entries, observer) => { 
//     entries.forEach((element) => {
//         console.log(observer)
//         if (element.isIntersecting) {
//             console.log(`Box ${element.target.textContent} пересекает ROOT`);
//         }
//     });

// });

// теперь мы передаём ссылку на элемкент за которым хотим наблюдать
const boxRef = document.querySelector('.js-box-test');
// io.observe(boxRef)

// Теперькогда наш тест - бокс(target) будет пересекать наш root(viewport) - начнёт выролняться наш колл - бэк в классе "io", а значение "entries"
// это будет массив пересечений(спец. объект, хранящий инфо-как пересекает его {isIntersecting: false/true}, {target: div.box-for-observer.js-box-test})
// Вообщем IOA позволяет нам узнать, находится ли элемент в данный момент в viewport.

// Вторым моментом, после CB-ф мы пердаём опции/настройки. Чтоб запись была удоной, лучше поделить эти входящие данные на функцию и объект

const options = {
    rootMargin: '200px',
};

const onEntry = ((entries, observer) => {
    entries.forEach((element) => {
        console.log(entries)
        if (element.isIntersecting) {
            console.log(`Box ${element.target.textContent} пересекает ROOT`);
            // тормознуть пересечения можно вызвав на "observer" метод disconnect(), после чего наблюдатель не будет срабатывать
            // observer.disconnect()
        }
    });
    
});

const io = new IntersectionObserver(onEntry, options);

io.observe(boxRef)
// Например в опциях, мы можем указать ссылку(document.querySelector('selector')) на ROOT;
// Либо обозначить + - границы элемента с которых начнёт срабатывать наблюдатель (rootMargin)
// Порог вхождения (threshold) - сколько % элемента, должно попасть в ROOT, для срабатывания cb-ф

// МАСТЕРСКАЯ "ЛЕНИВАЯ ЗАГРУЗКА КАРТИНОК"

// Создаём один IOA(обзервер) на все картиночки которые у нас есть
// Для этого получаем ссылку на картиночки и записываем в переменную КЛАСС IOA
const imgRef = document.querySelectorAll('.img');


// В аргументы класса поступают аргументы: cb - фия с двумя аргументами
// entries - массив объектов показываемых в viewport
// observer - ссылка на сам экземпляр обзёрва
// Соответственно каджый объект массива мы перебираем методом массива forEach и пишем туда логику для проверки вхождения

// FlashBack! А тут мы дбавляем доп. опции для нашего наблюдателя, чтоб у каждой картинки был корневойМаржин, для прогрузки "заранее"

const options = {
    rootMargin: '200px',
};
const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            console.log(element.target);
            // element.target- каждая картинка на которой сработает IO
            // если объект(картинка) зоходит в ROOT(viewport) то ...
            // 1. переменная image - будет этой картинкой
            // 2. переменная src - будет значением data - атрибута(адресса - ссылки на каартинку) этой картинки
            // 3. у элемента находящегося в пересечении, его src - будет равно data - атрибуту картинки
            // 4. добавляем класс с CSS анимацией
            const image = element.target;
            const src = image.dataset.lazy;
            image.src = src;
            image.classList.add('appear');
            // 5. теперь, чтобы IO более не срабатывал на наших элементах мы на самом экземпляре обзёрва вызываем метод unobserve()
            //  и передаём в него image - наш элемент, за которым можно более не наблюдать
            observer.unobserve(image);
        };
    });
}, options);

// IntersectionObserver может обслуживать произвольное кол-во элементов, нам просто нужно вызвать наблюдателя за пересечением для каждого из них!
// Поэтому берём массив наших картинок и для каждой из них благодаря методу forEach - применяем io(наблюдателя за пересечением)
imgRef.forEach((element) => io.observe(element));

// ОТЛИЧНО! Мы отработали "ленивую загрузку"! Теперь наведём красоту.Вынесем cb - ф в отдельную функцию
// и вместе с объектом красиво передадим в аргументы нашего наблюдателя пересечений (IO)

const imgRef = document.querySelectorAll('.img');

const options = {
    rootMargin: '200px',
};
const onEntries = (entries, observer) => {
    entries.forEach((element) => {
        if (element.isIntersecting) {
            console.log(element.target);
            // element.target- каждая картинка на которой сработает IO
            // если объект(картинка) зоходит в ROOT(viewport) то ...
            // 1. переменная image - будет этой картинкой
            // 2. переменная src - будет значением data - атрибута(адресса - ссылки на каартинку) этой картинки
            // 3. у элемента находящегося в пересечении, его src - будет равно data - атрибуту картинки
            // 4. добавляем класс с CSS анимацией
            const image = element.target;
            const src = image.dataset.lazy;
            image.src = src;
            image.classList.add('appear');
            // 5. теперь, чтобы IO более не срабатывал на наших элементах мы на самом экземпляре обзёрва вызываем метод unobserve()
            //  и передаём в него image - наш элемент, за которым можно более не наблюдать
            observer.observe(image);
        };
    });
};
const io = new IntersectionObserver(onEntries, options);

imgRef.forEach((element) => io.observe(element));