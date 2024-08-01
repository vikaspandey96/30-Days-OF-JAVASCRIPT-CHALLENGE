// Task 8: Write a recursive function to count the occurrence of a target element in an array.
function countValue(arr, value) {
    if (arr.length === 0) return 0;
    const currentCount = arr[0] === value ? 1 : 0;
    return currentCount + countValue(arr.slice(1), value);
}
const list1 = [3, 4, 5, 4, 6, 4, 7];
const list2 = [10, 11, 10, 12, 10, 13, 10];
const list3 = [2, 4, 6, 8, 10];

console.log(countValue(list1, 4));
console.log(countValue(list2, 10)); 
console.log(countValue(list3, 5)); 
console.log(countValue([], 3));   
