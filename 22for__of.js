let rank = [1, 2, 3, 4, 5];
for (scope of rank) {
  console.log(scope + 10);
}

let colors = ["red", "blue", "green"];
for (let [index, color] of colors.entries()) {
  console.log(color + " is at " + index);
}
