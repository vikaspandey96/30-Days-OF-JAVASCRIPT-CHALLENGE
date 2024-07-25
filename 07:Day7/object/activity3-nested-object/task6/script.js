// Task6: Access and log the name of the libaray and the titles of all the books in the libaray. 
const libaray={
    name:'Sham libaray',
    book:[
        {
            title:'java script',
            author:'johne',
            year:1996
        },
        {
            title:'C++',
            author:'suman',
            year:2005
        }
    ]
}
console.log(libaray.name);
libaray.book.forEach((bookTile)=> console.log(bookTile.title)) 

/* output:
Sham libaray
java script
C++ */
