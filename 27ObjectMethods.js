// groupBy(items,callBackFn)

// const books = [
//   { title: "The Catcher in the Rye", genre: "Fiction" },
//   { title: "Sapiens", genre: "Non-Fiction" },
//   { title: "Dune", genre: "Science Fiction" },
//   { title: "To Kill a Mockingbird", genre: "Fiction" },
// ];
// const group = Object.group(books, (book) => book.genre); // not working
// console.log(group);

// Object.values()

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
// };
// console.log(Object.values(person));

//Object.entries()

// const ssn = Symbol("ssn");
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 25,
//   [ssn]: "123-345-789",
// };
// const kv = Object.entries(person);
// console.log(kv);

//Object.assign()

let box = {
  height: 10,
  width: 20,
  color: "Red",
};
let style = {
  color: "Blue",
  borderStyle: "solid",
};
let styleBox = Object.assign({}, box, style);
console.log(styleBox);
console.log(box);
