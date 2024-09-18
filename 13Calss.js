class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const krish = new Person("Krishna");

console.log(krish.getName());

console.log(typeof Person);

console.log(krish instanceof Person);

console.log(krish instanceof Object);
