// const radius = [2, 3, 4, 5];
// const areas = radius.map((r) => Math.floor(Math.PI * r * r));

// console.log(areas);

// const squares = [16, 25, 36];
// console.log(squares.map(Math.sqrt));

// // Filter Method

// const nums = [1, 2, 3, 4, 5, 6];
// const odds = nums.filter((num) => num % 2 == 1);
// console.log(odds);
// const cities = [
//   { name: "Los Angeles", population: 3792621 },
//   { name: "New York", population: 8175133 },
//   { name: "Chicago", population: 2695598 },
//   { name: "Houston", population: 2099451 },
//   { name: "Philadelphia", population: 1526006 },
// ];

// const bigCities = cities.filter((e) => e.population > 3000000);
// console.log(bigCities);

// //Reduce Method

// const elem = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(
//   elem.reduce((a, b) => {
//     return a + b;
//   })
// );

// //Every method
// let numbers = [1, 3, 5];

// let result = numbers.every((e) => e > 0);

// console.log(result);

// //Sort Method

// const numbers = [21, 3, 22, 98];
// numbers.sort((a, b) => a - b);
// console.log(numbers);
// //descending
// numbers.sort((a, b) => b - a);
// console.log(numbers);

//forEach Method

const nums = [1, 2, 3, 4, 5];
nums.forEach((e) => console.log(e));
