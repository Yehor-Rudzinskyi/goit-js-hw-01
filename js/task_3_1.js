// TASK 1

// let message = '';
// const user = {
//   age: 20,
//   hobby: 'html',
//   name: 'Mango',
//   premium: true,
// };

// user.mood = 'happy';
// user['full time'] = true;
// user.premium = false;
// user.hobby = 'skydiving';
// console.table(user);

// const keys = Object.keys(user);
// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }

// console.log(message);

// TASK 2

// const countProps = obj => {
//   return Object.keys(obj).length;
// };
// console.log(countProps({}));
// console.log(countProps({ a: 1, b: 1 }));
// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 }));

//  TASK 3

const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  let max = Math.max(...values);

  for (const key in employees) {
    if (employees[key] === max) {
      return key;
    }
  }
};

const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
