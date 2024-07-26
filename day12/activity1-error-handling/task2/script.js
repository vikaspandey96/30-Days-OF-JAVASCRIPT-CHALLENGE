// Task 2: Create a function that divides two numbers and throws an error if the denominator is zero.Use a try-catch block to handle this error
function divide(numerator, denominator) {
	if (denominator === 0) {
	  throw new Error("Division by zero is not allowed");
	}
	console.log(numerator/denominator);;
  }
  
  try {
	 divide(10, 2);
  } catch (error) {
	console.log("Error : ", error.message);
  }
  
