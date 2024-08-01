// Task 2: Write a recursive function to calculate the nth Fibonacci number.Log the result for a few test cases.
// Recursive function to calculate the nth Fibonacci number
function fibonacci(n) {
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;

    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Test the function with a few test cases
console.log(fibonacci(5));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(7));
console.log(fibonacci(5));
