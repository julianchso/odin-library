// TODO: add css fancy input later
// https://codepen.io/avstorm/pen/gKGbxo
// https://codepen.io/lucasyem/pen/ZEEYKdj

let submitBtn = document.querySelector('#submitBtn');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let readStatus = document.querySelectorAll('input[name="readStatus"]');
let readStatus_value;
let myLibrary = [];

submitBtn.addEventListener('click', () => {
  changeReadStatus();
  addBookToLibrary();
  renderBookList();
});
// submitBtn.addEventListener('click', addBookToLibrary);

function changeReadStatus() {
  for (let i = 0; i < readStatus.length; i++) {
    if (readStatus[i].checked) {
      console.log(readStatus[i]);
      readStatus_value = readStatus[i].value;
      console.log(readStatus_value);
      break;
    }
  }
}

class Book {
  constructor(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
    this.listBooks = function listBooks() {
      console.log(`${title}, ${author}, ${read}`);
    };
  }
}

function addBookToLibrary() {
  // do stuff here
  console.log(title.value);
  console.log(author.value);

  currentBook = new Book(title.value, author.value, readStatus_value);
  myLibrary.push(currentBook);
  console.log(myLibrary);
}

function renderBookList() {
  TODO;
}
