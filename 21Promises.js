const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first promise has been resolved");
    resolve(10);
  }, 1 * 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("seconde promise has been resolved ");
    reject(20);
  }, 2 * 1000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("third promise has been resolved");
    resolve(30);
  }, 3 * 1000);
});

Promise.all([p1, p2, p3])
  .then((results) => {
    const total = results.reduce((p, c) => p + c);
    console.log(`results ${results}`);
    console.log(total);
  })
  .catch((err) => {
    console.log(err);
  });
