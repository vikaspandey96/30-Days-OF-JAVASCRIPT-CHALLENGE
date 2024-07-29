// Use a module bundle like Webpack or parcel to bundle multiple java script files into a single file. Write a script demonstrate the bundling process
import * as math from './math.js';

const num1 = 10;
const num2 = 5;

console.log(`The value of PI is ${math.PI}.`);
console.log(`The sum of ${num1} and ${num2} is ${math.add(num1, num2)}.`);
console.log(`The product of ${num1} and ${num2} is ${math.multiply(num1, num2)}.`);
console.log(`The quotient of ${num1} and ${num2} is ${math.divide(num1, num2)}.`);
console.log(`The difference between ${num1} and ${num2} is ${math.subtract(num1, num2)}.`);