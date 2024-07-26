// Task 7:Use the fetch API to get data from a public API and log the response data to the console using promises
// URL of the public API
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/7';

// Function to fetch data from the API and log the response
function fetchDataFromAPI(url) {
    fetch(url)
        .then(response => response.ok ? response.json() : Promise.reject('Network response was not ok'))
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
