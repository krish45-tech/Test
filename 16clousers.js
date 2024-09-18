function greeting(message) {
  return function (name) {
    return message + " " + name;
  };
}
let sayHi = greeting("Hi");
let sayHello = greeting("Hello");
console.log(sayHi("Gopi"));
console.log(sayHello("krish"));
