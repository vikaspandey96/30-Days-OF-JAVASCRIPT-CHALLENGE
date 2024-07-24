// Task 4: Add a method to the book object that takes a parameter(year) and updates the book's year property,then log the updated obejct
let book={
    title:'java',
    author:'Mohit',
    year:2000
}
book.updateYear=function(newyear){
    this.year=newyear
}
book.updateYear=2024
console.log(book); 

// output: {title: 'java', author: 'Mohit', year: 2000, updateYear: 2024}
