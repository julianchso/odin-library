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
});
// submitBtn.addEventListener('click', addBookToLibrary);

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
    // this.listBooks = function listBooks() {
    //   console.log(`${title}, ${author}, ${read}`);
    // };
  }
}

function addBookToLibrary() {
  // do stuff here
  currentBook = new Book(title.value, author.value, readStatus_value);
  myLibrary.push(currentBook);
}

function renderBookList() {
  const deleteBtn = document.createElement('button');
  tbody.innerHTML = '';

  //   table.innerHTML = `
  //   <tr>
  //   <th class="columnTitle">Title</th>
  //   <th class="columnAuthor">Author</th>
  //   <th class="columnStatus">Status</th>
  //   <th class="columnDelete"></th>
  // </tr>`;

  for (let i = 0; i < myLibrary.length; i++) {
    newRow = document.createElement('tr');

    Object.keys(myLibrary[i]).forEach((key) => {
      if (key == 'readStatus') {
        const cell = document.createElement('button');
        const cellText = document.createTextNode(myLibrary[i][key]);
        if (myLibrary[i][key] == 'read') {
          cell.classList.add('btn-lightGreen');
        } else if (myLibrary[i][key] == 'not read') {
          cell.classList.add('btn-lightRed');
        }
        cell.appendChild(cellText);
        // TODO: add delete button afterwards
        // cell.appendChild(deleteBtn);
        newRow.appendChild(cell);
      } else {
        const cell = document.createElement('td');
        const cellText = document.createTextNode(myLibrary[i][key]);
        cell.appendChild(cellText);
        newRow.appendChild(cell);
      }

      console.log(key, myLibrary[i][key]);
    });
    tbody.appendChild(newRow);
  }
  table.appendChild(tbody);
}
