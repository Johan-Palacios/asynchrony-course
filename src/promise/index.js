const promise = new Promise((resolve, reject) => {});

const cows = 9;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows}`);
  } else {
    reject("There is not cows in the farm");
  }
});

countCows
  .then((resolve) => {
    console.log(resolve);
  })
  .catch((reject) => console.log(reject))
  .finally(() => console.log("Finally"));
