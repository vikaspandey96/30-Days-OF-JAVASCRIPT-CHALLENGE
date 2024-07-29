// Task 5: Create a module that exports multiple constant and functions. Imports the entrie module as an object in another script and use properties. 
import * as person from './person.mjs'
const obj={
    name:person.name,
    age:person.age,
    personDetail:person.personD()
}
console.log(obj.name);
console.log(obj.age);
console.log(obj.personDetail);
