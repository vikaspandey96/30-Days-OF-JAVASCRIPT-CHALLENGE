// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them and return the result.
function Sum(...num){
    return num.reduce((total,num)=> total+num)
}
console.log(Sum(1,2,3,4,5));// 15
