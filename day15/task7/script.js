// Task 7:Write a function that memoizes the results of another function. Use a closure to store the resultls of previous computations. 
function memoize(fn) {
    const cache = {};

    return function(str) {

        if (cache[str] !== undefined) {
            console.log('Fetching from cache:', str);
            return cache[str];
        }

        console.log('Computing result for:', str);
        const result = fn(str);
        cache[str] = result;
        return result;
    };
}

function reverseString(str) {
    return str.split('').reverse().join('');
}


const memoizedReverseString = memoize(reverseString);

console.log(memoizedReverseString('hello')); // Output: Computing result for: hello \n olleh
console.log(memoizedReverseString('hello')); // Output: Fetching from cache: hello \n olleh
console.log(memoizedReverseString('world')); // Output: Computing result for: world \n dlrow
console.log(memoizedReverseString('world')); // Output: Fetching from cache: world \n dlrow
