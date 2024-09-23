// function compareBy(propertyName) {
//   return function (a, b) {
//     let x = a[propertyName],
//       y = b[propertyName];

//     if (x > y) {
//       return 1;
//     } else if (x < y) {
//       return -1;
//     } else {
//       return 0;
//     }
//   };
// }
// const products = [
//   { name: "java", price: 2000 },
//   { name: "python", price: 300 },
//   { name: "javascript", price: 1000 },
// ];

// products.sort(compareBy("price"));
// console.log(products);

// let sum = function (a, b) {
//   return a + b;
// };

// setTimeout(function () {
//   console.log("waiting 3 seconds to execute");
// }, 3000);
// console.log(399);

// (function () {
//   console.log("hello");
// })();

// setTimeout(function () {
//   console.log("waiting 1 second");
// }, 1000);

// async function s() {
//   setTimeout(function () {
//     console.log("waiting 3 seconds to executesdfsfg");
//   }, 3000);
//   console.log(400);
//   setTimeout(function () {
//     console.log("waiting 1 secondgsagasg");
//   }, 1000);
// }
// s();

// let person = {
//   name: "krish",
//   age: 22,
// };
// (function () {
//   console.log(person.name + " " + person.age);
// })();

// function printNumber(num) {
//   console.log(num);
//   if (num - 1 > 0) {
//     printNumber(num - 1);
//   }
// }
// printNumber(5);

// function sum(n) {
//   if (n <= 1) {
//     return n;
//   }
//   return n + sum(n - 1);
// }
// let result = sum(10);
// console.log(result);

function example() {
  setTimeout(() => {
    console.log("Hello from setTimeOut");
  }, 2000);
  console.log("hello from function ");
}
console.log("fsgs");
(async function () {
  await example();
  console.log("sfsgf");
})();
console.log("after calling");
