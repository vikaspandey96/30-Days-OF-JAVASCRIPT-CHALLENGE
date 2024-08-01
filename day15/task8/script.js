// Task 8:Create a memoized version of a function that calculates the factorial of a numbers.
function memoize(fn) {
    const cache = {};
    return function(n) {
       
        console.log('Factorial of ', n);
        const result = fn(n);
        cache[n] = result;

        return result;
    };
}

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


const memoizedFactorial = memoize(factorial);

console.log(memoizedFactorial(5));
