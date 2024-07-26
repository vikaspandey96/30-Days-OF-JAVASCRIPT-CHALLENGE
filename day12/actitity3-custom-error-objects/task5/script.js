// Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using a try-catch-block. 
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = 'CustomError'; 
    }
}

function validateInput(input) {
    if (input === "") {
        throw new CustomError("Input cannot be empty");
    }
    console.log(input); 

}
try {
    validateInput(""); 
} catch (error) {
    console.log(error.message); 
}
