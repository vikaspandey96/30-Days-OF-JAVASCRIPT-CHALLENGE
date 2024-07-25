// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value. 
const book={
    title:'OS',
    author:'Ram',
    year:2020
}
for(let detail in book){
    console.log(detail + ":" + book[detail]);
}

/* output:
title:Os
author: Ram
year:2020 */
