function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw `arguments must be numbers`;
  }
  return a + b;
}

try {
  let result = add("11" + 22);
  console.log(result);
} catch (err) {
  console.log(err);
}
function add(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("arguments should be numbers");
  }
  return a + b;
}
try {
  let result = add(10, "32");
  console.log(result);
} catch (err) {
  console.log({ name: err.name, message: err.message });
}

class NumberError extends Error {
  constructor(value) {
    super(value);
    this.name = "Number Error";
  }
}
