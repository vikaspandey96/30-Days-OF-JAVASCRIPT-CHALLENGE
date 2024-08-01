// Task 7: Write a recursive function to perform a binary search on a sorted array.Log the index of the target element for a few test cases.
function binarySearch(arr, item, left = 0, right = arr.length - 1) {
    const mid = Math.floor((left + right) / 2);
  
    if (left === right || left > right) {
      return "Not Found";
    }
  
    if (item === arr[mid]) return mid;
  
    if (item < arr[mid]) {
      return binarySearch(arr, item, left, mid);
    } else {
      return binarySearch(arr, item, mid + 1, right);
    }
  }
//   console.log(binarySearch([2,3,4,5,8,9]));
  console.log( binarySearch([2, 4, 5, 8, 9], 8));
  console.log( binarySearch([2,8,12,34], 8));
