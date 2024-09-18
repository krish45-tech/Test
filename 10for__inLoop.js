// let person = {
//   firstName: "Gopi",
//   lastName: "Krishna",
//   age: 23,
// };
// for (const prop in person) {
//   console.log(prop + " \t" + person[prop]);
// }

// const decoration = {
//   color: "red",
// };
// const circle = Object.create(decoration);
// circle.radius = 10;
// console.log(circle);

// // for (const prop in circle) {
// //   console.log(prop);
// // }

// for (const prop in circle) {
//   if (circle.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

//Arrays;
let items = [10, 20, 30];
let total = 0;
for (const item in items) {
  total += items[item];
}
console.log(total);

Array.prototype.foo = 100;
total = 0;
for (const item in items) {
  total += items[item];
}
console.log(total);
