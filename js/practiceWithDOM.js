// const tittleRef = document.querySelector('.page-tittle');
// console.log(tittleRef);
// // Ищем через любой вид селектора(до первого совпадения!).
// // И получаем обычную ссылку на объект!
// // Можно, через селектор тега - h2, а можно
// // и через селектор класса - .page-tittle Вообщем обращаемся через селектор

// // Ищем все относящиеся
// const allLinks = document.querySelectorAll('.nav-item-link');
// console.log(allLinks);

// // Свойство textContent - задаёт текст
// tittleRef.textContent = 'JS - easy!';

// // Работа с атрибутами. Атрибуты тегов, как свойства узлов(элементов)

// const imageRef = document.querySelector('.hero-image');
// // console.dir(imageRef);
// imageRef.src = 'https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/pic_afbb21cfff8d776afb23c0d8d2a96a7c.jpg';
// imageRef.alt = 'Some cat!';

// // Либо, если этих атребутов на объекте нету - нам необходтмо будет на элементе использовать методы для работы с атрибутами
// console.log(imageRef.getAttribute('src'));
// imageRef.setAttribute('alt', 'Go go go')
// console.log(imageRef.getAttribute('alt'));


// // ЗаИнлайнить стиль(точечно) - юзаем .style
// const activeLink = document.querySelector('.nav-item-link-active')
// // console.dir(activeLink)
// activeLink.style.color = 'green';


// // Работа с классами ЭЛЕМЕНТОВ
// // Проверяем- есть ли данный класс на элементе
// console.log(activeLink.classList.contains('nav-item-link'));
// console.log(activeLink.classList.contains('nav'));
// // Добавляем класс на элемент(узел)
// activeLink.classList.add('nav');
// console.log(activeLink.classList.contains('nav'));

// СоЗДАниЕ DOM- узла

// Создаём динамически элемент + текс узел + класс
// const mainTittleRef = document.createElement('h1')
// mainTittleRef.textContent = 'I am main TITTLE!';
// mainTittleRef.classList.add('main-tittle')
// console.log(mainTittleRef)


// Карточка на товар
// const product = {
//     name: 'Datail',
//     description: 'Lorem for me andother people',
//     price: 2000,
//     available: true,
// };
// Создаём её динамическую разметку
//     <div>
//       <h2>Datail</h2>
//       <p>
//   Lorem for me andother people
//       </p>
//       <p>Value 2000</p>
//     </div>

// const productRef = document.createElement('div');
// productRef.classList.add('product-card');
// console.log(productRef)

// const tittleRef = document.createElement('h2');
// tittleRef.textContent = product.name;
// tittleRef.classList.add('product-tittle');
// console.log(tittleRef)

// const descrRef = document.createElement('p');
// descrRef.textContent = product.description;
// console.log(descrRef);

// const priceRef = document.createElement('p');
// priceRef.textContent = `Value: ${product.price}$`;
// console.log(priceRef);

// С отдельно полученных элементов мы создаём единое дерево с соответствующими вложенностями
// Когда один элемент

// productRef.appendChild(tittleRef);
// productRef.appendChild(descrRef);
// productRef.appendChild(priceRef);
// Когда множество

// productRef.append(tittleRef, descrRef, priceRef);

// Так как метод append садит дерево по умолчанию в самый низ элементами,
// то нам необходимо создать "точку" - от куда оно будет рости Делаем div в необходимом местеми на него уже цепляем дерево.
// const cardRoot = document.querySelector('#root'); 
// cardRoot.append(productRef);

// const navRef = document.querySelector('.nav');
// navRef.prepend(productRef);


// Пишем функцию для динамической работы с данными = создание подготовленной разметки в памяти.

const products = [
    {
    name: 'Datail',
    description: 'Lorem for me andother people',
    price: 2000,
    available: true,
    },
    {
    name: 'Engine',
    description: 'Give back whan u finish for me andother people',
    price: 5000,
    available: false,
    },
    {
    name: 'Turbo',
    description: 'Give back whan u finish for me andother people',
    price: 3000,
    available: true,
    },
];

// Функция принимает массив с объектами(данные/продукт с объектами) и возвращает уже готовую "гроздь" разметку, НЕ вставляя в DOM

const createProductCard = product => {
    const containerRef = document.createElement('div');
    containerRef.classList.add('container-card');

    const tittleRef = document.createElement('h2');
    tittleRef.textContent = product.name;
    // Добавляем на before (заголовка товара) класс общий(с разметкой before), и класс хранящийся
    //в переменной по условию = есть ли товар в наличии(через CSS свойства)
    // А если иконка, тогда прийдётся span делать и разметку для svg делать
    const inStockClass = product.available ? 'product-tittle-avaliable' : 'product-tittle-not-avaliable';
    tittleRef.classList.add('product-tittle', inStockClass);
// На classList.add можно сразу заюзать кучу классов, если задавать через запятую.
    const descrRef = document.createElement('p');
    descrRef.textContent = product.description;

    const priceRef = document.createElement('p');
    priceRef.textContent = `Value: ${product.price}$`;
    
// В каком порядке передаём - так и вставится
    containerRef.append(tittleRef, descrRef, priceRef);
    return containerRef;
};

// console.log(createProductCard(products[0]));
// console.log(createProductCard(products[1]));
// console.log(createProductCard(products[2]));

products.forEach(product => {
    console.log(createProductCard(product));
});

// Проходимся по массиву продуктов, и для каждого продукта возвращаем массив элементов(продуктовых карточек)
// с помощью Map;

const productCards = products.map((product) => createProductCard(product));
console.log(productCards);

// Получаем ссылочку на готовый нас принять ДИВ в ШТМЛ
const productListRef = document.querySelector('.js-products');
// Теперь чтобы добавить наши карточки имеющие вид массива, после метода map, мы делаем распыление(spred),
// чтобы в параметры append() пришли обычные элементы
productListRef.append(...productCards);