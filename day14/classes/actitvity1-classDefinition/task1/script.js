/* Task 1: Define a class person with properties name and age, and a method to return a greeting message.
Create instance of the class and log the greeting message. */
class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greet(){
        console.log(`Your name is ${this.name} and your age is ${this.age}`);
    }
}

const person1=new person('vikas',33)
person1.greet()

//output - Your name is vikas and your age is 33
