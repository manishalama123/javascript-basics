// Extract title and author from the following object.
// Rename title to bookTitle.

const book={
    title:"Atomic Habit",
    author:"James Clear",
    year:2010
};
const{title, author}=book;
console.log(title, author);
const {title:bookTitle}=book;//renaming:doesnot modify the "title" but holds the same value in bookTitle.
console.log(bookTitle);
