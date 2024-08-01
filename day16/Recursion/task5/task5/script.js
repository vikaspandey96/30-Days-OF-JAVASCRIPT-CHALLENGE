// Task 5: Write a recursive function to reverse a string.Log the result for a few test cases.
function reverseString(str) {
	if (str === "") {
		return "";
	}
	return reverseString(str.slice(1)) + str[0];
}
console.log('Reverse string of Name:', reverseString('Name'));
