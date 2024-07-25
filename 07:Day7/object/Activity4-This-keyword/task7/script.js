// task7: Add a method to the book object that uses the this keyword to return a string with the book's title, year and log the result of calling this method. 
const book={
    title:'Data science',
    author:'Ram',
    year:2002
}
book.detail=function(){
    return `Book titile ${this.title} and publish in ${this.year}`
}
console.log(book.detail());

// output :Book titile Data science and publish in 2002
