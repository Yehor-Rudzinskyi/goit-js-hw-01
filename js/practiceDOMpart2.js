const targetBtnRef = document.querySelector('.js-target-btn');
const addListenerBtnRef = document.querySelector('.js-add-listener');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');
// У ссылки targetBtnRef есть метод, который позволяет реагировать на действие с этим элементом
// путём указания типа действия и добавлением функции для самого действия
// targetBtnRef.addEventListener('click', () => { console.log('Click!') })
// На один и тот же ТИП действия можноклепаст кучу разных функций(действий), и они будут вызываться
// в той последовательности как их написали
// targetBtnRef.addEventListener('click', () => { console.log('HELLO!') })

// Ра кнопочки кинем динамики. Добавим на targetBtnRef слушателя, чтоб она срабатывала и заберём его
// const doSmthOnClick = () => console.log('JS - is my sweetdreem!');
// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doSmthOnClick);
// });
// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doSmthOnClick);
// });

// События инпутов
// Событие 'change' - срабатывает, когда теряешь фокус...
targetBtnRef.addEventListener('click', (e) => { console.log(e) });

const inputRef = document.querySelector('.js-input');
const nameLabelRef = document.querySelector('.js-button > span');
const btnRef = document.querySelector('.js-button')
inputRef.addEventListener('change', (e) => {
    // console.log(e.target.value);
    // console.log('hello');
    nameLabelRef.textContent = e.target.value;
});

//  Также на приходящем в параметре событии event есть значение которое мы вводим в импут и можем его получить по пути e.target.value
const licenceRef = document.querySelector('.js-licence');
licenceRef.addEventListener('change', (e) => {
    console.log(e);
    console.log(e.target.checked);
    btnRef.disabled = !e.target.checked;
})