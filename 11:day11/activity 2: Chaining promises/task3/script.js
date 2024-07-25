// Task 3: Create a sequence of promises that simulate fetching data from a server Chain the promises to log messages in a specific order.
// Function to fetch data from the API
function getDataFromAPI(url) {
    return fetch(url)
        .then(response => response.json())
        .then(result => {
            displayData(result);
        })
        .catch(error => {
            handleError(error);
        });
}

// Function to display the data
function displayData(data) {
    console.log('Here is the fetched data:', data);
}

// Function to handle errors
function handleError(error) {
    console.error('Oops, something went wrong:', error);
}

// Call the function with the API URL
getDataFromAPI('https://jsonplaceholder.typicode.com/posts/1');
