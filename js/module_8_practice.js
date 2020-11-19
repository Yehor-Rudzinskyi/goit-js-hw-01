// Стрелочные функции.
const add = function (a, b) {
   return a + b
}

function some(d, f) {
   return d + f;   
};

const sthn = a => {
    if (a) {
        return a
    };
};
const smth = () => console.log();
const red = (e, r) => e - r;

const tittleRef = document.createElement('h1')
tittleRef.textContent = 'Sone Text for u'
tittleRef.setAttribute('alt', 'bro');
tittleRef.classList.add('tittle');
console.dir(tittleRef);