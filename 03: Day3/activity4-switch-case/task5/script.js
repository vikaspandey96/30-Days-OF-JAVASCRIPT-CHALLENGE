// Task 5:write a program that uses a switch case to assign a grade(A,B,C,D,F).
let marks=33;
let grade;
switch(true){
    case marks>=80: grade='A'
    break;
    case marks>=60: grade='B'
    break;
    case marks>=40: grade='C'
    break;
    case marks>=33: grade='D'
    break;
    default:grade='F'
}
console.log(`your marks ${marks} and your grade ${grade}`);

// output: your marks 33 and your grade D
