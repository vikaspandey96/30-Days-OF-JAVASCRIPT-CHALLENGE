/* Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName).
Update the name using the setter and log the updated full name. */
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    get fullName(){
        return `My full name is ${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [firstName ,lastName]= name.split(' ')
        this.firstName=firstName
        this.lastName=lastName
    }
}
const myName=new Person('vikas', 'pandey')
// console.log(myName.fullName);
myName.fullName='Radha Rani'
console.log(myName.fullName);

// output: My full name is Radha Rani
