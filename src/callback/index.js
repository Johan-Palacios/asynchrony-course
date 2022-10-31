function add(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(1, 2, add));

setTimeout(function () {
  console.log("Hola JS");
}, 2000);

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, "Johan");
