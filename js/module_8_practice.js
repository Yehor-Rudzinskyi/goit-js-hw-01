// Стрелочные функции.


// const add = function (a, b) {
//    return a + b
// }

// function some(d, f) {
//    return d + f;   
// };

// const sthn = a => {
//     if (a) {
//         return a
//     };
// };
// const smth = () => console.log();
// const red = (e, r) => e - r;

// const tittleRef = document.createElement('h1')
// tittleRef.textContent = 'Sone Text for u'
// tittleRef.setAttribute('alt', 'bro');
// tittleRef.classList.add('tittle');
// console.dir(tittleRef);

// ДЕЛЕГИРОВАНИЕ! = когда есть однотипная коллекция элементов, на которой нужно обрабатывать одно и тоже событие

// event.target = тот элемент, над которым мы физически осуществили действие.
//     event.currentTarget = это уже типо "родители" того элемента, над которым происходит действие,
//     при всплытии, когда тип события один и тот же.
// То есть получается, что у нас в КАЖДОМ обработчике событий есть event.currentTarget если нужно к текущему элементу достучаться,
//         либо event.target - если нужно постучать к целевому/исходному(где изначально произошло событие)
// <ul>
//   <li>
//       <button></button>
//       </li>
//   <li>
//       <button></button>
//       </li>
//   <li>
//       <button></button>
//       </li>
//   <li>
//       <button></button>
//       </li>
//   <li>
//       <button></button>
//       </li>
// </ul>

// В данной структуре не корректно вешать на каждую кнопку слушателя событий...
// На нашего предка < ul > мы вешаем слущатель события клика и прослушивать клики всех элементов=потомков этого дерева.(гуляем по корням!)
// Теперь на нашей < ul > висит слушатель который в свойстве event.target - покажет нам элемент НА котором произошло событие!
// Вплоть до того, что кроме <button> он покажет клик по <li> и <ul>

// const ref = {
//     tags: document.querySelector('.tags'),
//     activeTag: document.querySelector('.js-active-teg'),
// };

// ref.tags.addEventListener('click', onTagsClick)

// function onTagsClick(event) {
//     console.log(event.target);
//     const tagBtn = event.target;
//     // теперь добавляем на физический клик event.target; класс tags-btn-active с файла ЦСС, чтобы красить элемент
//     // tagBtn.classList.add('tags-btn-active');
//     // Проблема заключается в том, что у нас "красится"(добавляется класс) каждый элемент, поэтому при использовании общего слушателя,
//     // нам необходимо убедиться в томм, что физическое действие происходит именно там где это нам необходимо и не где более!
//     // Поможет свойство event.target.nodeName - имя узла, которое мы можем сравнивать при условии выполнения действий
//     // В event.target.nodeName например <button> = 'BUTTON' либо <ul> = 'UL' и т.д. по тегам
//     // Получается, что если наше физическое действие event.target. не является кнопкой 'BUTTON'- то мы выходим из функции return,
//     // а если соврадает, то выполняем указанную инструкцию функции 
//     if (event.target.nodeName !== 'BUTTON') {
//         console.log('Клацнули не по кнопке, выходим');
//         return
//     }
//     tagBtn.classList.add('tags-btn-active');
//     // Это отличный юзКейс, чтоб отрабатывали только нужные нам элементы!
// };
// А когда нам нужно чтобы активным был только один тег: при клике на него мы должны глянуть или на нём уже есть активный класс...
// Если нет - добавляем, если есть - снимаеи

// function onTagsClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         console.log('Клацнули не по кнопке, выходим');
//         return
//     }
//     // надо найти "(предИдущий) элемент", который мы можем найти внути этого списка
//     // с помощью document.querySelector(''), по классу tags-btn-active
//     const currentActiveTag = event.currentTarget.querySelector('.tags-btn-active');
//     // "event.currentTarget" этои есть наш "ref.tags" - исходник события который висит во главе "грозди" на <ul> 
//     // Вешаем на него querySelector('tags-btn-active'), который "спрашивает" видит ли он/находит ли он его в <ul>/"ref.tags"/"event.currentTarget"????
//     if (currentActiveTag) {
//     currentActiveTag.classList.remove('tags-btn-active')
//     };
//     // Как ток мы создали "гроздь" = селектор её не висит event.currentTarget.querySelector('.tags-btn-active') === null
//     // После того как первый раз клацнули - он уже появился и теперь при следующем клике, как только он его видит - удаляет!


//     // это типа как следущий элемент на который уже вновь повиснет наш селектор "tags-btn-active"
//     const nextActivTagBtn = event.target;
//     nextActivTagBtn.classList.add('tags-btn-active');

//     // Чтобы ещ1 поработать с data-atributes='...' создадим <p class='js-active-teg'>, в которую будем выводить выбранный элемент!
//     // То есть в её textContent будем ложить значение data-atributes='...' выбранного элемента(того на котором клацнули(event.target))
//     ref.activeTag.textContent = event.target.dataset.value;
// };

// Всё енто конечно хорошо. Но У нас одна здоровенна функция, которую по хорошему нам бы разбить на логические меньшие.


// function onTagsClick(event) {
//     if (event.target.nodeName !== 'BUTTON') {
//         console.log('Клацнули не по кнопке, выходим');
//         return
//     }
//     // НУ и чтобы нащ код был чуть почище - мы в аргументы наших функций передадим готовые переменные
//     const nextActivTag = event.target;
//     const activeTagValue = event.target.dataset.value
//     // Теперь аргументами передаём наши переменные
//     setActiveTag(event.target);
//     updateOutput(event.target.dataset.value);
// };


// function setActiveTag(nextActivTagBtn) {
//     // Соответственно находясь в функции onTagsClick нам прийдётся замениить  event.currentTarget.querySelector('.tags-btn-active') на 
//     // ссылку  ref.tags.querySelector('.tags-btn-active');
//    const currentActiveTag = ref.tags.querySelector('.tags-btn-active');
//     if (currentActiveTag) {
//     currentActiveTag.classList.remove('tags-btn-active')
//     };
//     // А event.target мы будем получать через параметр nextActivTagBtn передавая аргумент event.target из фенкции, где оно будет вызываться.
//     // const nextActivTagBtn = event.target;
//     nextActivTagBtn.classList.add('tags-btn-active');
// };
// function updateOutput(value) { 
//     // Задача этой функции получить параметром какой = то value / значение, которое мы получаем из функции слушателя.
//     //     Соответственно, аргументом - мы будем передавать необходимое нам значение event.target.dataset.value
//      ref.activeTag.textContent = value;
// }



// В конечном итоге получаем ВОТ такую КРАСОТУ!


const ref = {
    tags: document.querySelector('.tags'),
    activeTag: document.querySelector('.js-active-teg'),
};

ref.tags.addEventListener('click', onTagsClick)

function onTagsClick(event) {
    if (event.target.nodeName !== 'BUTTON') {
        console.log('Клацнули не по кнопке, выходим');
        return
    }
    const nextActivTag = event.target;
    const activeTagValue = event.target.dataset.value
    setActiveTag(nextActivTag);
    updateOutput(activeTagValue);
};


function setActiveTag(nextActivTagBtn) {
   const currentActiveTag = ref.tags.querySelector('.tags-btn-active');
    if (currentActiveTag) {
    currentActiveTag.classList.remove('tags-btn-active')
    };
    nextActivTagBtn.classList.add('tags-btn-active');
};
function updateOutput(value) { 
     ref.activeTag.textContent = value;
}