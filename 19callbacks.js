const isOdd = (number) => {
  return number % 2 === 1;
};
const isEven = (number) => {
  return number % 2 === 0;
};
function filter(numbers, fn) {
  let result = [];
  for (i = 0; i < numbers.length; i++) {
    if (fn(numbers[i])) {
      result.push(numbers[i]);
    }
  }
  return result;
}

console.log(filter([1, 2, 3, 4, 5, 6], isOdd));
console.log(filter([1, 2, 3, 4, 5, 6], isEven));
