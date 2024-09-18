// let scores = [1, 2, 3, 4, 5];
// let points = [1.1, 2.2, 3.3];
// let combine = [...scores];
// combine[0] = 12;
// console.log(combine);
// console.log(scores);
// // console.log(points);
// // points[0] = 12;
// // console.log(points);
// // console.log(scores);

const person = {
  name: "krish",
  age: 22,
};
const details = { ...person };
details.age = 23;
console.log(details);
console.log(person);

const contact = {
  ...person,
  phno: "9553741740",
};
console.log(contact);
