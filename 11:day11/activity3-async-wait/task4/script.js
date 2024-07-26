// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value. 
const waitForPromise = async () => {
	const result = await new Promise((resolve) => {
		setTimeout(() => {
			resolve("Promise successfully resovled");
		}, 1000);
	});
	console.log(result);
};

waitForPromise();
