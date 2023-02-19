// TODO: add css fancy input later
// https://codepen.io/avstorm/pen/gKGbxo
// https://codepen.io/lucasyem/pen/ZEEYKdj

let submitBtn = document.querySelector('#submitBtn');
let title = document.querySelector('#title');
let author = document.querySelector('#author');
let readStatus = document.querySelectorAll('input[name="readStatus"]');
let table = document.querySelector('table');
let tbody = document.querySelector('tbody');
let readStatus_value;
let myLibrary = [];

submitBtn.addEventListener('click', () => {
  changeReadStatus();
  addBookToLibrary();
  renderBookList();
  clearInput();
});

function changeReadStatus() {
  for (let i = 0; i < readStatus.length; i++) {
    if (readStatus[i].checked) {
      readStatus_value = readStatus[i].value;
      break;
    }
  }
}

class Book {
  constructor(title, author, readStatus) {
    this.title = title;
    this.author = author;
    this.readStatus = readStatus;
  }
}

function addBookToLibrary() {
  // do stuff here
  if (title.value == '' && author.value == '') {
    alert('Title and Author must not be blank!');
    return;
  }
  newBook = new Book(title.value, author.value, readStatus_value);
  myLibrary.push(newBook);
}

function deleteBook(e) {
  let deleteTitle = e.target.parentNode.parentNode.childNodes[0].innerHTML;
  let deleteAuthor = e.target.parentNode.parentNode.childNodes[1].innerHTML;
  let index;
  console.log(deleteTitle);

  myLibrary.forEach((book) => {
    // console.log(book);
    if (book.title == deleteTitle && book.author == deleteAuthor) {
      index = myLibrary.indexOf(book);
      console.log(`findBook index: ${index}`);
    }
  });

  myLibrary.splice(index, 1);
  renderBookList();
}

function renderBookList() {
  tbody.innerHTML = '';

  for (let i = 0; i < myLibrary.length; i++) {
    newRow = document.createElement('tr');
    const deleteBtn = document.createElement('span');

    Object.keys(myLibrary[i]).forEach((key) => {
      const cell = document.createElement('td');
      const cellText = document.createTextNode(myLibrary[i][key]);

      if (key == 'readStatus') {
        const btn = document.createElement('button');
        const value = myLibrary[i][key];
        const btnText = document.createTextNode(value);

        if (value == 'read') {
          btn.classList.add('btn-lightGreen');
        } else if (value == 'not read') {
          btn.classList.add('btn-lightRed');
        }
        btn.appendChild(btnText);
        cell.appendChild(btn);
      } else {
        cell.appendChild(cellText);
      }
      newRow.appendChild(cell);
    });
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can deleteBtn"></i>';

    newRow.appendChild(deleteBtn);
    tbody.appendChild(newRow);

    // TODO
    deleteBtn.addEventListener('click', deleteBook);
  }
  table.appendChild(tbody);
}

function clearInput() {
  title.value = '';
  author.value = '';
}
