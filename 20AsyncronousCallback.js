// async function downloading(url) {
//   setTimeout(function () {
//     console.log(`downloading ${url}`);
//   }, 2000);
//   console.log("hiii");
// }
// console.log("hello");
// function processing(url) {
//   console.log(`prcessing ${url}`);
// }

// downloading("https://www.javascripttutorial.net/pic.jpg");
// processing("https://www.javascripttutorial.net/pic.jpg");

console.log(1);
setTimeout(() => {
  console.log(2);
}, 2000);
console.log(3);
setTimeout(() => {
  console.log(4);
}, 1000);
