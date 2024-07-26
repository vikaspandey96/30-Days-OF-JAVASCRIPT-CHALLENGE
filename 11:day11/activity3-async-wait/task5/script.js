// Task 5:Write an async function that handles a rejected promise using try-catch and logs the error message. 
const rejectPromise = async () => {
	try {
		await new Promise((resolve, reject) => {
			setTimeout(() => {
				reject("Something problem in promise Rejected function reject task");
			}, 1000);
		});
	} catch (error) {
		console.log(error);
	}
};

rejectPromise();
