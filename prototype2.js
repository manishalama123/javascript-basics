function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

}
Book.prototype.getSummary = function() {
    console.log(`Title: ${this.title}, Author: ${this.author}. Tolkien, Year: ${this.year}`)
};
const book = new Book("Atomic Habits", "James", 2005);
book.getSummary();
