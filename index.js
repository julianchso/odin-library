let myLibrary = [];

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.listBooks = function listBooks() {
      console.log(`${title}, ${author}, {read}`);
    };
  }
}

function addBookToLibrary() {
  // do stuff here
}

harryPotter = new Book('Harry Potter', 'JK Rowling', 'read');
console.log(harryPotter);
