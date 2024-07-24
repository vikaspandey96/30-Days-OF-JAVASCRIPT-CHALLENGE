// Task 3: Write a Function Expression to find the maximum of two numbers and log the result to the console. 
const findMax=function maxNum(num1,num2){
    console.log(`Number first is :${num1}`);
    console.log(`Number second is: ${num2}`);
    if(num1>num2){
        console.log(`Maximum number is ${num1}`);
    }else{
        console.log(`Maximum number is ${num2}`);
    }
}
findMax(22,33)

// output:
// Number first is :22
// Number second is: 33
// Maximum number is 33
