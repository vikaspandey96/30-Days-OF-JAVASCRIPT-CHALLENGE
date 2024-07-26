// Task 6: Create a promise that randomly resolves or rejects.Use .catch() to handle the rejection and log an appropriate message to the console. 
const randomPromise = new Promise((resolve, reject) => {
	const random = Math.floor(Math.random() <0.7);
	if (random === 1) {
		resolve("The promise is Resolved");
	} else {
		reject("The promise is Rejected");
	}
});

randomPromise.then((data) => console.log(data))
.catch((error) => console.log(error));
