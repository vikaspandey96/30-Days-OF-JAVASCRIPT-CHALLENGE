// Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch .LOg an appropriate error message.

async function fetchFromInvalidURL() {
    try {
        
        const response = await fetch('https://jsonplaceholder.typicoode.com/posts');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        
        console.error('Failed to fetch data:', error.message);
    }
}

fetchFromInvalidURL();
