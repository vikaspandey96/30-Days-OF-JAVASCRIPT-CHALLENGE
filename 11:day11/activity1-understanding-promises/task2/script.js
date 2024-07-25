// Task 2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const promiseError = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Something goes wrong");
	}, 2000);
});

promiseError.catch((error) => {
	console.error(error); 
});
