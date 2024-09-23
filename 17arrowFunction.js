// let object = (color) => {
//   return {
//     color: color,
//   };
// };
// console.log(object("blue"));

// let object = (color) => ({ color: color });
// console.log(object("blue"));

let add = (...arguments) => {
  let total = 0;
  for (i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};
console.log(add(1, 2, 3, 4, 5));
