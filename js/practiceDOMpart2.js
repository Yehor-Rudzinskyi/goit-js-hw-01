// const targetBtnRef = document.querySelector('.js-target-btn');
// const addListenerBtnRef = document.querySelector('.js-add-listener');
// const removeListenerBtnRef = document.querySelector('.js-remove-listener');

// const whatOnPicture = document.querySelector('.hero-image');
// whatOnPicture.addEventListener('click', (e) => console.log(e));
// У ссылки targetBtnRef есть метод, который позволяет реагировать на действие с этим элементом
// путём указания типа действия и добавлением функции для самого действия
// targetBtnRef.addEventListener('click', () => { console.log('Click!') })
// На один и тот же ТИП действия можноклепаст кучу разных функций(действий), и они будут вызываться
// в той последовательности как их написали
// targetBtnRef.addEventListener('click', () => { console.log('HELLO!') })

// Р
// На кнопочки кинем динамики.Добавим на targetBtnRef слушателя, чтоб она срабатывала и заберём его
// const doSmthOnClick = () => console.log('JS - is my sweetdreem!');
// addListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.addEventListener('click', doSmthOnClick);
// });
// removeListenerBtnRef.addEventListener('click', () => {
//     targetBtnRef.removeEventListener('click', doSmthOnClick);
// });

// События SUBMIT

// Вешаем на сам элемент <form>. тАК КАК ТАМ ВНУТРИ ИМЕЕМ КНОПКУ, КОТОРАЯ И БУДЕТ сАБМИТИТЬСЯ.
// НО! Чтобы автоматом, браузером не отправлялась форма НА СЛУШАТЕЛЬ вешаем event.preventDefault();

const formRef = document.querySelector('.js-register-form');
formRef.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log('submit');
    // console.dir(event.target.elements);
    // У event слушателя submit, есть свойство target, которое покажет нам все интерактивные элементы узла / элемента,
    // на котором оно работает (<form>) + elements - даст инфу :тип элемента и его инфа. Достучимся к каждому.
    // Cоответственно получить доступ к элементам формы  =
    const formElement = event.target.elements;
    // console.log(formElement.subscription.value);
    // А вот если необходимо составить объект с данными из формы и отправить его на бэк, то нам поможет  "конструктор-карта" браузера
    // В КОТОРУЮ МЫ ПЕРЕДАЁМ ССЫЛКУ НА УЗЕЛ нашей формы event.target 
    const formData = new FormData(event.target)
    // В этой formData в proto выляется метод forEach, который работает с параметрами: (значение, ключ)
    const gatherInObjFormData = {};
    formData.forEach((value, key) => {
        console.log(`value:`, value);
        console.log(`key:`, key);
        // Теперь, чтобы собрать всю эту красоту в объектик, мы создадим заранее переменную - ссылку на пустой объект
        // и на каждой итерации метода forEach "в его ключ [key](такое обращение ведь в переменной) - присвоим значение value"
        gatherInObjFormData[key] = value;
    });
    console.log(gatherInObjFormData);
});

// События инпутов

// Событие 'change' - срабатывает, когда теряешь фокус...
// targetBtnRef.addEventListener('click', (e) => { console.log(e) });
// Лепим ссылочки к окошку инпута, где вводим имя. К спану на кнопке, чтоб потом менять её значение. К самой кнопке
const inputRef = document.querySelector('.js-input');
const nameLabelRef = document.querySelector('.js-button > span');
const btnRef = document.querySelector('.js-button')
inputRef.addEventListener('input', (e) => {
    // Слушатель input - позволит нам отслеживать каждое изменение в этом Инпуте, которое мы можем получить 
    // из объекта слушателя, в его "target.value"
    // console.log(e.target.value);
    // console.log('hello');
    // Если я хочу, чтоб в неактивной кнопке, в её спане отображалось то, что я набираю в Инпуте, то мне понадобится ссылка
    // на этот спан/ её свойство textContent и путь к значению в объекте события (то что набирается в Инпуте)
    nameLabelRef.textContent = e.target.value;
    //  Также на приходящем в параметре событии event есть значение которое мы вводим в элемент импут
    // и можем его получить по пути e.target.value
});
// А вот событие change прекрасно подойдёт для чекБоксов.Вешаем его на элемент(узел) инпут с типом чекБокс и по пути e.target.checked - 
// сможем отслеживать значение на нём = true/false.
const licenceRef = document.querySelector('.js-licence');
licenceRef.addEventListener('change', (e) => {
    console.log(e);
    console.log(e.target.checked);
    // Теперь нам нужно на неактивной кнопке, опираясь на событие/состояние чекБокса убирать атрибут disabled - делая её активной
    // Так как атрибут disabled является свойством ссылки, которую мы назначили на кнопку, то обращаемся btnRef.disabled,
    // который будет не ТРУ если в чекБоксе стоит галочка(он ТРУ) 
    btnRef.disabled = !e.target.checked;
})

// Фокус и Блур - события при фокусе и при ухода фокуса с элемента ИнПут

// inputRef.addEventListener('focus', () => console.log('In'));
// inputRef.addEventListener('blur', () => console.log('out'));

// Когда у на много действий - разбиваем поиск и связь узла, обозначение слушателя события и  функцию на 3ри части

// 1. Ссылка на элемент\узел

// const inputRef = document.querySelector('.js-input');
// const nameLabelRef = document.querySelector('.js-button > span');
// const btnRef = document.querySelector('.js-button')
// const licenceRef = document.querySelector('.js-licence');

// 2. Слушатель на элемент\узел с типом события и  СВ-функцией

// inputRef.addEventListener('focus', handleInputFocus);
// inputRef.addEventListener('blur', handleInputBlur);
// inputRef.addEventListener('input', handleInputChange);
// licenceRef.addEventListener('change', handleLicenseChange);

// 3. СВ-функции

// function handleInputFocus(e) {
//     console.log('In');
// }
// function handleInputBlur(e) {
//     console.log('out');
// }
// function handleInputChange(e) {
 //     nameLabelRef.textContent = e.target.value;
// }
// function handleLicenseChange(e) {
 //     btnRef.disabled = !e.target.checked;
 // }

//  Также запись СВ-функций может быть удобна в формате 'licenseChangeHandleк' || 'onChangeHandleк'
                
// РАБОТА С КЛАВИАТУРО
// Keyup и keydown дают нам прослушать все возможные кнопки.
// Keypress - только символьные (без "служебных")

// только если генерирует символ
// Проверка на нажатие определённой клавиши
window.addEventListener('keypress', event => {
    console.log(event.key);
    console.log(event.code);
    // event.key - отображает нажатый СИМВОЛ в зависимость от вида раскладки клавиатуры\языка и т.д.
    // event.code - отображает "физическое" значение клавиатуры
    if (event.code === 'KeyE') {
        console.log('WIN!')
    };
});
   



const outPutRef = document.querySelector('.js-output');
const clearBtnRef = document.querySelector('.clear');

        //    Прослеживаем (плюсуем) каждое нажатие клавиши и очищаем элемент от текстового узла             
window.addEventListener('keypress', onPutKey);
clearBtnRef.addEventListener('click', onClearOutpoot);
                        
function onPutKey(event) {
     outPutRef.textContent += event.key;
};
function onClearOutpoot() {
    outPutRef.textContent = '';
};
                            
// window.addEventListener('keydown', event => {
//     console.log(event);
//     console.log(`Key: ${event.key}\nkeyCode: ${event.code}`);
// });

// СОБЫТИЯ МЫШКОЙ

// mouseenter - когда на элементе произойдёт событие входа курсора мышки - сделай этот код\ Типо ховера в CSS

const boxRef = document.querySelector('.js-box');
// boxRef.addEventListener('mouseenter', event => {
    // Добавим ка к основному блоку класс с другим нараметром ФОНА
    // const box = event.target;
    // box.classList.add('box-active');
// });

// mouseleave - когда на элементе произойдёт событие ухода курсора мышки - \ Типо ховера в CSS
// boxRef.addEventListener('mouseleave', event => event.target.classList.remove('box-active'));

// События mouseleave и mouseenter ИГНОРИРУЮТ детей элемента на котором они происходят!


// События mouseover и mouseout - работают при контакте с поверхностью элемента, учитывая детей, которые находятся внутри элемента!
// Ведь, также срабатывает и на них при ВХОДЕ и ВЫХОДЕ на ВСЕХ элементах внутри родительского!
// boxRef.addEventListener('mouseout', event => console.log(event));
// boxRef.addEventListener('mouseover', event => console.log(event));


// События mousemove отслеживает все движения по элементу и его ДЕТЯМ!
// boxRef.addEventListener('mousemove', event => console.log(event));

// MODAL WINDOW!

// При описании бэкдропа НЕ используем display: none - ибо НЕ анимируется! 
// Юзаем * pointer-events: none; - события через бэкдроп НЕ будут пропускаться!
//       * opacity: 0; - скрывает бэкдроп - визуально
//       * visibility: hidden; - скрывает бэкдроп - от читалок и т.д.

// Для того, что бы показать модалку, на тэг.body лепим / вешаем класс.show - modal и когда он там появится,
//     то на.backdrop сработают следущие свойства:

// body.show-modal .backdrop {
//   pointer-events: initial;
//   opacity: 1;
//   visibility: visible;
// }

// А к классу .modal применится трансформ!
// body.show-modal .modal {
//   transform: scale(1);

// Соответственно на кнопку OpenModal - достаточно повесить слушатель, который при срабатывании повесит класс ".show-modal" на <body>
// ПОлучаем ссылку на кнопку открытия модалки, юзая обычный селектор атрибута

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
openModalBtn.addEventListener('click', onOpenModal);

// Благополучно вешаем слушатель КЛИКА на кнопку, который через объект document в элемент body добавит наш класс show-modal.
// Модалочку мы не создаём и не вставляем, каждый раз, а просто прячем и показываем в нужный момент

const closeModalBtn = document.querySelector('button[data-action="close-modal"]');
closeModalBtn.addEventListener('click', onCloseModal);

// Ставим сопровождающие ТРАНЗИШЕНЫ для доп анимации.На.modal, когда срабатывает transform: scale(1) при появлении
// и на .backdrop, когда срабатывает   opacity: 1; visibility: visible; при закрытии!
// Для того, чтобы закрывать модалку при клике на .backdrop - вешаем просто на него слушателя события и удаляем класс show-modal из элемента body

const backdropRef = document.querySelector('.js-backdrop');
// Вешаем на него слушателя и теперь разбираемся с нашим currentTarget в нём
backdropRef.addEventListener('click', event => {
    console.log('event.target', event.target);
    console.log('event.currentTarget', event.currentTarget);
    // Для того, чтобы проверить, что событие происходит именно на "backdrop" - мы сравниваем -
    // куда был повешан слушатель и где происходит событие в данный момент. И если равно- то убираем класс с элемента body!
    if (event.target === event.currentTarget) {
       onCloseModal();
    }
});
// И вот тутоньки - currentTarget = всегда будет "backdrop", а target = тем местом, куда мы клацнули.
//     event.currentTarget - цель. А сам обработчик события хранится тутоньки, та где повесили слушатель
//     event.target - текущая цель. Тот элемент на котором буквально произошло событие

function onOpenModal() {
    document.body.classList.add('show-modal')
    window.addEventListener('keydown', onClickEscape);
};
function onCloseModal () {
    document.body.classList.remove('show-modal');
    window.removeEventListener('keydown', onClickEscape);
};

// Также, выход из модалки мы реализовываем через Esc, который мы вешаем на глобальный объект window в момент открытия окна этого модального окна.
// Когда открываем модальное окно- регестрируем слушателя события на window, который отслеживает нажатие клавиши и если сработал Esc - закрываем!
// Но! Есть трабл! 
// При закрытии модалки, слушатель 'Escape' всё ещё будет висеть и срабатывать КАЖДЫЙ раз, как она будет открываться.Поэтому необходимо,
// При выходе из модального окна - снимать слушатель! Делаем ссылку на функцию, чтоб можно было remove слушатель.
function onClickEscape(event) {
      if (event.code === 'Escape') {
            onCloseModal();
    };
}
