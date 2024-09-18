// function createPerson(firstName, lastName) {
//   return {
//     firstName: firstName,
//     lastName: lastName,
//   };
// }
// const person = createPerson("krish", "g");
// const person2 = createPerson("jdfkj", "dfSDGF");
// console.log(person);
// console.log(person2);

let personActions = {
  getFullName() {
    return this.firstName + " " + this.lastName;
  },
};

function createPerson(firstName, lastName) {
  const person = Object.create(personActions);
  person.firstName = firstName;
  person.lastName = lastName;
  return person;
}
const person = createPerson("Gopi", "krishna");
const person1 = createPerson("g", "krish");
console.log(person.getFullName());
console.log(person1.getFullName());
