// let greet = function () {
//   console.log("hello");
// };
// let person = {
//   name: "krish",
//   age: 22,
//   greet: greet,
//   detials: function () {
//     console.log(this.name + " " + this.age);
//   },
// };
// person.greet();
// person.detials();

// constructor function
function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
  return "krish";
}
let person1 = new person("john", "doe");

// console.log(person1.getFullName());

let person2 = new person("jimmy", "kulie");
console.log(person2);
