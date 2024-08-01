// Task 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases. 
function maxArray(arr) {
	if (arr.length === 1) {
		return arr[0];
	}
	const restMax = maxArray(arr.slice(1));
	return arr[0] > restMax ? arr[0] : restMax;
}
console.log('Max Number of :', maxArray([3,5,7,2]));
