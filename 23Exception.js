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
