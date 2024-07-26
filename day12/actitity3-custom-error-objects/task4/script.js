// Task 4: Create a custom error class that extends the built-in-error class. Throw an instance of this custom error in a function and handle it using a try-catch block
class CustomError extends Error {
	constructor(message) {
		super(message);
		this.name = "customError";
	}
}

function throwError() {
	throw new CustomError("This is a custom error");
}

try {
	throwError();
} catch (error) {
	console.log(error.message);
}
