// Task 8: USe Promise.all to wait for multiple promises to resolve and then log all their values.
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
  
  Promise.all([firstPromise, secondPromise, thirdPromise]).then((msg) => {
	msg.forEach((msg) => {
	  console.log(msg);
	});
  });
