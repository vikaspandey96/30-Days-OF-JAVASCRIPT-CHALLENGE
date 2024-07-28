//Task 4: Create a module that exports a single function using defalult export.Import and use this function in another script.
import addNumber from "./math.mjs";
const num1=33;
const num2=12;
const sum=addNumber(num1,num2)
console.log(`The first number is :${num1}`);
console.log(`The second number is :${num2}`);
console.log(`Sum of two number is ${sum}`);
