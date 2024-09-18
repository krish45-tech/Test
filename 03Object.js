const person = {
  name: "krish",
  age: 22,
  dept: "IT",
};
// console.log(person);
// person.age = 23;
// console.log(person.age);
// console.log(person["dept"]);
// console.log(person["add ress"]);
// console.log(person.add_res);
// console.log("age" in person);
// console.log(delete person.age);
// delete person["add ress"];
// console.log("age" in person);
// console.log(person);
const member = person;
console.log(member);

member.age = 24;
console.log(member);
console.log(person);
