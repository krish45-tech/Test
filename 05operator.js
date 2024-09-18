// console.log(!null);
// console.log(!0);
// console.log(!"");
// console.log(!{});
// console.log(![1]);
// console.log(!undefined);

// let title;
let title = "java";
title ||= "No title";
console.log(title);

let title1 = "java";
title1 &&= "title";
console.log(title1);

let score = 23;
score ??= 45;
console.log(score);
