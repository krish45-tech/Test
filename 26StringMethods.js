//Search Method

// const re = /[A-Z]/;
// const re1 = /[@,!]/;
// const str = "hi There! How are you?";
// console.log(str.search(re1));

// indexOf(subStr,fromIndex) Method

// let str = "You do not know what you do not know until you know.";
// let substr = "know";
// let count = 0;
// let index = str.indexOf(substr);
// while (index > 0) {
//   count++;
//   index = str.indexOf(substr, index + 1);
// }
// console.log(count);

//includes() Method

// let email = "admin@example.com";
// console.log(email.includes("@"));

// const str = "JavaScript String";
// console.log(str.includes("Script"));
// console.log(str.includes("script"));

// split(str or regex, limit) Method

let paragraph = "Good Morning! How are you? This is John. John is my friend.";
let sentences = paragraph.split(/[!,?,.]/);
console.log(sentences);
let sentences1 = paragraph.split(/([!,?,.])/);
console.log(sentences1);

let str = "JavaScript String split()";
let subStrings = str.split(" ");
let subStrings1 = str.split(" ", 2);
console.log(subStrings);
console.log(subStrings1);
