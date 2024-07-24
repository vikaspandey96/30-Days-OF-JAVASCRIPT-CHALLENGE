// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method. 
const book={
    title:'java',
    author:'Mohit',
    year:2014
}
book.bookDetail=function(){
    return `Title of this book ${this.title} and author name is ${this.author}`
}
console.log(book.bookDetail());

// outuput: Title of this book java and author name is Mohit
