const color = ["red", "green", "blue"];
// console.log(color.length);
// color.length = 10;
// console.log(color);
// color.length = 0;
// console.log(color);
// const colors = [];
// colors.push("orange");
// colors.push(...color);
// console.log(colors);
var scores = [10, 20, 30, 10, 40, 20];

console.log(scores.indexOf(20, 3));

const val = scores.find((num) => num % 20 == 0);
console.log(scores.find((num) => num % 20 == 0));

console.log(scores.findIndex((num, index) => num % 20 == 0 && index > 2));
