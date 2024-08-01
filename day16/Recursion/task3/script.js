// Task 3: Write a recrsive function to find the sum of all elements in an array.Log the result for a few test cases.
function arrSum(arr){
    if(arr.length ===0){
        return 0;
    }
    return arr[0] + arrSum(arr.slice(1))
}
console.log(arrSum([3,4,5,6]));
console.log(arrSum([36,4]));
