const tittleRef = document.querySelector('.page-tittle');
console.log(tittleRef);
// Ищем через любой вид селектора(до первого совпадения!).
// И получаем обычную ссылку на объект!
// Можно, через селектор тега - h2, а можно
// и через селектор класса - .page-tittle Вообщем обращаемся через селектор

// Ищем все относящиеся
const allLinks = document.querySelectorAll('.nav-item-link');
console.log(allLinks);

// Свойчтво textContent - задаёт текст
tittleRef.textContent = 'JS - easy!';