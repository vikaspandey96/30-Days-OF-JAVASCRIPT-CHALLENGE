// Task 7: Write a function that takes two parameters and returns their product. provides a defalut value for the second parameter. 
function product(productOne,producttwo="Book"){
    return `${productOne} ${producttwo}`
}
console.log(product('Ink')); // it takes defalut value second parameter Book , output : Ink Book
console.log(product('Ink', 'keypad')); // we passed here second arguement keypad, so output is Ink keypad

// output:
// Ink Book
// Ink keypad
