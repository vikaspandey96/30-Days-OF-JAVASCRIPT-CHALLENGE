// task 1: Create a promise that resolves with a message after a 2-sceond timeout and log the message to the console
const promises = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("hello, promiss work");
	}, 2000);
}).then((data) => {
	console.log(data);
});

//it will output after 2 second
output: hello, promiss work fine       
