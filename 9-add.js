// 9-add.js

function add(a, b) {
  return a + b;
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

console.log(add(num1, num2));
// Example: node 9-add.js 3 5