/* Task 7: Write a function that takes two parameter and returns their product, with the second parameter 
having a default value of 1. L og the result of calling this function with and without the second parameter. */
function Sum(num1,num2=1){
    return num1+num2
}
let result=Sum(4,5)
let value=Sum(4)

console.log(result); // 9  without using default value
console.log(value); //5   with using detault value
