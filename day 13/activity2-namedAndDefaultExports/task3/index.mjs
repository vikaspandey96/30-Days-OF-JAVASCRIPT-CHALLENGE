// Task 3:Create a module that exports multiple functions using named exports. Import and use there functions in another script.
import {addNumber,subtractNumber,divideNumber,multiplyNumber} from "./math.mjs";
const num1=33;
const num2=12;
const sum=addNumber(num1,num2)
const multiply=  multiplyNumber(num1,num2)
const divide=divideNumber(num1,num2)
console.log( `The first number is ${num1} and the second Number ${num2}. Sum of this number result:${sum}`);
console.log( `The first number is ${num1} and the second Number ${num2}. multiplay of this number result:${multiply}`);
console.log( `The first number is ${num1} and the second Number ${num2}. divide  of this number result:${divide}`);

