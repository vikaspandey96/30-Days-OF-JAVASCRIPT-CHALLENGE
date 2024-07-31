// Task 2: Add a method to the person class that update the age property log the greeting logs the updated age.
class person{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    greet(){
        console.log(`Your name is ${this.name} and your age is ${this.age}`);
    };
    set updateAge(newAge){
        this.age=newAge;
        this.greet()
        console.log(`update age is :${this.age}`);
    }
}

const person1=new person('vikas',33)
// person1.greet()
person.updateAge=12
console.log(person.updateAge);
