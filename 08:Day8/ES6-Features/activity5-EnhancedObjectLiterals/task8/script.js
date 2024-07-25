// Task 8: Use enhanced object literals to create an object with methods and properties and log the object to the console.
let person={
    fname:'vikas',
    lname:'Pandey',
    age:22,
    detail(){
        return `person name is ${this.fname} ${this.lname} and person age ${this.age}`
    }
}
console.log(person);
console.log(person.detail());

// output: {fname: 'vikas', lname: 'Pandey', age: 22, detail: ƒ}
// person name is vikas Pandey and person age 22
