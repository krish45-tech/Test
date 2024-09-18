const cat = { type: "cat", sound: "Meow" };
const dog = { type: "dog", sound: "Bow" };

const say = function (message) {
  console.log(message);
  console.log(this.type + " say " + this.sound);
};
// say.apply(cat, ["what does a cat say"]);
// say.call(dog, "what does a dog say");
// say.apply(cat);
// say.call(dog);
// apply(say(), cat, ["what does a cat say"]); // will not work

// Bind Method

let car = {
  speed: 5,
  start: function () {
    console.log("starting with " + this.speed + " km/h");
  },
};
let aircraft = {
  speed: 10,
  fly: function () {
    console.log(flying);
  },
};
let takingOff = car.start.bind(aircraft);
takingOff();
//equilent to
car.start.call(aircraft);
