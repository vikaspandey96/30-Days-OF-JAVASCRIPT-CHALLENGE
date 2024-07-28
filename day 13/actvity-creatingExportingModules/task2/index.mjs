Task 2:Create a module that exports an object representing a person with properties and methods.Imports and use this module in another script. import {person} from "./person.mjs";
console.log(`First name:${person.fname}`);
console.log(`Last name :${person.lname}`);
console.log(`Fullname name: ${person.fullName()}`);
