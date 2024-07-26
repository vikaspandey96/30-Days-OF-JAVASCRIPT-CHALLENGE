// Task 7:Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message. 
const randomPromise = new Promise((resolve, reject) => {
	const random = Math.floor(Math.random() *3);
	if (random === 2) {
		resolve("The promise is Resolved");
	} else {
		reject("The promise is Rejected");
	}
});

async function handlePromise() {
	try {
		const data = await randomPromise;
		console.log(data);
	} catch (error) {
		console.log(error);
	}
}

handlePromise();
