/* Task 4: Ovverride the greeting method in the Students class to include the Student ID in the 
message. LOg the overriden greeting message */
class student{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    greet(){
        console.log(`your name is ${this.name} and your age ${this.age}`);
    }
}

class person extends student{
    constructor(name,age,studentID){
        super(name,age)
        this.studentID=studentID
    }
    getID(){
        return this.studentID
    }
    greet(){
        return `your name is ${this.name} and your ID is ${this.getID()}`
    }
}

const  vikas=new person('vikas',22,1)
console.log(vikas.greet());   
// output your name is vikas and your ID is 1
