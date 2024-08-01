// Task 2: Create a closure that maintains a private counter.Implement functions to increment and get the current value of the counter.
function FunCounter(){
    counter=0;
    return function(){
       return ++counter
    }
}
let incrementval=FunCounter()
console.log(incrementval());
console.log(incrementval());
