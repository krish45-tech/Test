function person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello");
  };
}

person.prototype.details = function () {
  console.log(this.name + " " + this.age);
};

let p1 = new person("krish", 22);
