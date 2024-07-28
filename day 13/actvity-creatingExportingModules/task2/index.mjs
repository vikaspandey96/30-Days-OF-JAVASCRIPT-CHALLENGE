// Task 1: Create a module that exports a function to add two numbers. Imports and use this module in another script.
import {person} from "./person.mjs";
console.log(`First name:${person.fname}`);
console.log(`Last name :${person.lname}`);
console.log(`Fullname name: ${person.fullName()}`);
