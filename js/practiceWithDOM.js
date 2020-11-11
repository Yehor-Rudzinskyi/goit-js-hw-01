const tittleRef = document.querySelector('.page-tittle');
// console.log(tittleRef);
// Ищем через любой вид селектора(до первого совпадения!).
// И получаем обычную ссылку на объект!
// Можно, через селектор тега - h2, а можно
// и через селектор класса - .page-tittle Вообщем обращаемся через селектор

// Ищем все относящиеся
const allLinks = document.querySelectorAll('.nav-item-link');
// console.log(allLinks);

// Свойчтво textContent - задаёт текст
tittleRef.textContent = 'JS - easy!';

// Работа с атрибутами. Атрибуты тегов, как свойства узлов(элементов)

const imageRef = document.querySelector('.hero-image');
// console.dir(imageRef);
imageRef.src = 'https://icdn.lenta.ru/images/2020/01/28/17/20200128170822958/pic_afbb21cfff8d776afb23c0d8d2a96a7c.jpg';
imageRef.alt = 'Some cat!';

// Либо, если этих атребутов на объекте нету - нам необходтмо будет на элементе использовать методы для работы с атрибутами
console.log(imageRef.getAttribute('src'));
imageRef.setAttribute('alt', 'Go go go')
console.log(imageRef.getAttribute('alt'));


// ЗаИнлайнить стиль(точечно) - юзаем .style
const activeLink = document.querySelector('.nav-item-link-active')
// console.dir(activeLink)
activeLink.style.color = 'green';


// Работа с классами ЭЛЕМЕНТОВ
// Проверяем- есть ли данный класс на элементе
console.log(activeLink.classList.contains('nav-item-link'));
console.log(activeLink.classList.contains('nav'));
// Добавляем класс на элемент(узел)
activeLink.classList.add('nav');
console.log(activeLink.classList.contains('nav'));