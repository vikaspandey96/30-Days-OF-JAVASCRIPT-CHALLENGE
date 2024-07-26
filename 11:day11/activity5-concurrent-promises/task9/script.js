// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises. 
const firstPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("Number first promise resolve");
	}, 2000);
  });
  
  const secondPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("Number second promise resolve");
	}, 5000);
  });
  
  const thirdPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
	  resolve("Number third promise resolve");
	}, 1000);
  });
  
  Promise.race([firstPromise, secondPromise, thirdPromise]).then((msg) => {
	console.log(msg);
  });
