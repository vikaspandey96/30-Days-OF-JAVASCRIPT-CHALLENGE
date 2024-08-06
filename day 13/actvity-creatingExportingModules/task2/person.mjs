// Task 2:Create a module that exports an object representing a person with properties and methods.Imports and use this module in another script.  
export {person}
const person={
    fname:"vikas",
    lname:"pandey",
    fullname(){
        return this.fname +"" + this.lname
    }
}
