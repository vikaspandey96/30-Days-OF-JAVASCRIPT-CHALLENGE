/* Task 3: Define a clas Student that extends the person class.Add a property studentsId and a method to return the student Id. 
Create an instance of the studentsID class and log the studentsID */
class student{
    constructor(name,age){
        this.name=name
        this.age=age
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
}

const  vikas=new person('vikas',22,1)  //person { name: 'vikas', age: 22, studentID: 1 }
console.log(vikas.studentID);// 1
