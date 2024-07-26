// Task 8: USe fetch API to request data from an invalid URL and handle the error using .catch(). Log an appropriate error message to the console.
  // Incorrect URL to simulate an error
  fetch('https://jsonplaceholder.typicode.com/invalid-endpoint')
  .then(response => {
	  if (!response.ok) {
		  // Throw an error if response status is not OK
		  throw new Error(`HTTP error! Status: ${response.status}`);
	  }
	  return response.json();
  })
  .then(data => {
	  console.log(data); // This will not be reached if there's an error
  })
  .catch(error => {
	  console.error('Failed to fetch data:', error.message); // Log the error message
  });
