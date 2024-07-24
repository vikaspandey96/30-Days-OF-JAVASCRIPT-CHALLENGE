// Task 3: Write a program to find the largest of three numbers using nested if else statements.
let num1=33
let num2=4
let num3=12
if(num1>num2){
    if(num1>num3){
        console.log(`Number ${num1} is greater than ${num2} and ${num3}`);
    }else{
        console.log(`Number ${num3} is greater than ${num1} and ${num2}`);
    }
}else{
    if(num2>num3){
        console.log(`Number ${num2} is greater than ${num1} and ${num3}`);
    }else{
        console.log(`Number ${num3} is greater than ${num2} and ${num1}`);
    }
}

// output :Number 33 is greater then 4 and 12
