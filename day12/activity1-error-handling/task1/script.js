// Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwErrorMessage() {
	try {
		throw new Error('intentional error');
	} catch (error) {
		console.log(error.message);
	}
}

throwErrorMessage();
