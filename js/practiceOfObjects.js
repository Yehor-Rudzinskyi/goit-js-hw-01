// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Pole', online: true },
//   { name: 'Ajaks', online: false },
// ];

// console.table(friends);
// console.log(friends[0]);
// message = '';
// const nameToFind = 'Kiwi';
// for (const friend of friends) {
//   console.log(friend.name);
//   if (friend.name === nameToFind) {
//     message = 'Yep';
//     break;
//   }
// }
// console.log(message);

// const toFindeForName = (allFriends, name) => {
//   for (const friend of allFriends) {
//     if (friend.name === name) {
//       return 'Yep :)';
//     }
//   }
//   return 'No :(';
// };

// console.log(toFindeForName(friends, 'Petr'));
// console.log(toFindeForName(friends, 'Kiwi'));
// let tittle = '';
// const getAllNames = allFriends => {
//   for (const friend of allFriends) {
//     tittle += `${friend.name}\n`;
//   }
//   return tittle;
// };

// console.log(getAllNames(friends));

// const getAllNames = allFriends => {
//   const tittle = [];
//   for (const friend of allFriends) {
//     tittle.push(friend.name);
//   }
//   return tittle;
// };

// console.log(getAllNames(friends));

// const getOnlyOnline = allFriends => {
//   let isOnline = [];
//   for (const friend of allFriends) {
//     console.log(friend);
//     if (friend.online) {
//       isOnline.push(friend.name);
//     }
//   }
//   return isOnline;
// };
// console.log(getOnlyOnline(friends));

// BAG OF FRIUTS

//   { name: 'apple', price: 50 },
//   { name: 'grape', price: 70 },
//   { name: 'lemone', price: 60},
//   { name: 'strawberry', price: 120 },

const cart = {
  // наша корзина покупок
  items: [], // создаём пустой массив, куда будут добавляться покупки (объектами)
  getItems() {
    // метод, котороый позваляет нам получить все объекты лежащие в корзине
    return this.items; // возвращаем все объекты, находящиеся в массиве item, у объекта cart
  },
  add(product) {
    //метод, который будет добавлять продукт в массив item
    for (const item of this.items) {
      // делаем перебор свойств в корзине и если туда пытаются добавить такойже свойство,
      // то плюсуем на единицу его кол - во
      if (item.name === product.name) {
        item.quantity += 1;
        return; // если находит совпадение, то просто ретёрнет и усё, пойдёёт дальше по коду добавлять
      }
    }
    product.quantity = 1; //создаём свойство, для кол-ва продуктов в корзине
    this.items.push(product);
  },
  remove(productName) {
    console.log(productName);
    // Удаляем продукт из корзины
    for (let i = 0; i < this.items.length; i += 1) {
      // перебераем имеющиеся свойства в корзине. Тк для удаления, нам необходим индекс, чтоб использовать splice, используем "итемный перебор"
      if (productName === this.items[i].name) {
        // обращаемся к массиву items и берём у него с таким индексом элемент, и у этого элемента берём значение ключа name
        // сравниваем их имена с тем, что запросили для удаления
        this.items.splice(i, 1); // при совпадении с этого индекса убрать 1но свойство. Удаляется вся строка. Не важно какое кол-во этого наименования там было
        console.log('Yepp!!!');
      }
    }
  },
  clear() {
    // сщздаём метод, для чистки корзины.
    this.items = []; // присваиваем массиву новое значение - пустой массив
  },
  countTotalPrice() {
    //Пишем метод позволяющий подсчитать всю сумму товаров(свойств) в нашей корзине
    let total = 0;
    for (const item of this.items) {
      total += item.price * item.quantity; // Берём у каждого свойства цену за одну штуку и умножаем на их заказанное кол-во
    }
    return total;
  },
  increaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        item.quantity += 1;
      }
    }
  },
  decreaseQuantity(productName) {
    for (const item of this.items) {
      if (item.name === productName) {
        if (item.quantity - 1 === 0) {
          this.remove(productName);
          //Если у текущего значения колва мы отнимаем единицу и это равно нулю, тогда мы удаляем это свойство
          return;
        }
        // Если же колво больше нуля, то значение quantity просто меняется на минус один, дальше по коду
        item.quantity -= 1;
      }
    }
  },
};

cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'strawberry', price: 120 });
cart.add({ name: 'strawberry', price: 120 });
// cart.remove('apple');
console.table(cart.getItems());
// cart.clear();
// console.log(cart.getItems());
console.log('Total:', cart.countTotalPrice());
cart.decreaseQuantity('apple');
cart.decreaseQuantity('apple');
console.table(cart.getItems());
