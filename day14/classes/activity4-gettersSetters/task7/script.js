/* Task 7: Add a getter method to the Person class to return the full name(assume a firstname and lastname property).
Create an instance and log the full name using the getter. */
class Person{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    get fullName(){
        return `My full name is ${this.firstName} ${this.lastName}`
    }
}
const myName=new Person('vikas', 'pandey')
console.log(myName.fullName);
//outupt :My full name is vikas pandey
