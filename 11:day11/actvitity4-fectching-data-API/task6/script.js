// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises. 
// URL of the public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Function to fetch data from the API and log the response
function fetchDataFromAPI(url) {
    fetch(url)
        .then(response => {
            // Check if the response is ok (status code 200-299)
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            // Log the response data to the console
            console.log('Fetched Data:', data);
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            console.error('Fetch error:', error);
        });
}

// Call the function with the API URL
fetchDataFromAPI(apiUrl);
