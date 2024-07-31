/* Task 5: Add a static method to the person class that returns a generic greeting message.
Call this static method without creating an instance of the class and log the message. */
class Person{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        return `Hello ${this.name} welcome to my house`
    }
    static genericGreetingMsg(){
        return `Hello welcome to our house`
    }
}
console.log(Person.genericGreetingMsg());
// output: Hello welcome to our house
