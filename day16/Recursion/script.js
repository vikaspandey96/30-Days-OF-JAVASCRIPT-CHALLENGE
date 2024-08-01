// Task 1: Write a recursive function to calculate the factorial of a number.Log the result for a few test cases. 
function facto(num){
    if(num<=1){
        return 1;
    }
    return num*facto(num-1)
}
console.log(facto(5));
