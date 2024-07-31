/* Task 6: Add a static property to the Student clas to keep track of the number of students created.
Call this static method without creating an instance of the class and log the message. */
class Student{
    static studentCount=0;
    constructor(name,age){
        this.name=name
        this.age=age
        Student.studentCount++
    }
    greet(){
        return`your name is ${this.name}. you are ${this.age} year old`
    }
    static getStudentsCount(){
        return `Number of ${Student.studentCount} students Data created `
    }
}
const student1=new Student('vikas',22)
const student2=new Student('Ram',43)
console.log(Student.getStudentsCount())
