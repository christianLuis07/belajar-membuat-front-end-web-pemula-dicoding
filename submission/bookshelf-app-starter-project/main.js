const books = [];
const RENDER_EVENT = "render-book";
const STORAGE_KEY = "BOOKSHELF_APPS";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    addBook();
  });

  const searchForm = document.getElementById("searchBook");
  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    searchBook();
  });

  if (isStorageExist()) {
    loadDataFromStorage();
  }
});

function generateId() {
  return +new Date();
}

function generateBookObject(id, title, author, year, isComplete) {
  return { id, title, author, year, isComplete };
}

function addBook() {
  const title = document.getElementById("bookFormTitle").value;
  const author = document.getElementById("bookFormAuthor").value;
  const year = parseInt(document.getElementById("bookFormYear").value);
  const isComplete = document.getElementById("bookFormIsComplete").checked;

  const id = generateId();
  const bookObject = generateBookObject(id, title, author, year, isComplete);
  books.push(bookObject);

  document.dispatchEvent(new Event(RENDER_EVENT));
  saveData();
}

function makeBookElement(bookObject) {
  const bookItem = document.createElement("div");
  bookItem.classList.add("book-item");
  bookItem.setAttribute("data-bookid", bookObject.id);
  bookItem.setAttribute("data-testid", "bookItem");

  const title = document.createElement("h3");
  title.innerText = bookObject.title;
  title.setAttribute("data-testid", "bookItemTitle");

  const author = document.createElement("p");
  author.innerText = "Penulis: " + bookObject.author;
  author.setAttribute("data-testid", "bookItemAuthor");

  const year = document.createElement("p");
  year.innerText = "Tahun: " + bookObject.year;
  year.setAttribute("data-testid", "bookItemYear");

  const buttonContainer = document.createElement("div");

  const toggleButton = document.createElement("button");
  toggleButton.setAttribute("data-testid", "bookItemIsCompleteButton");
  toggleButton.innerText = bookObject.isComplete
    ? "Belum selesai dibaca"
    : "Selesai dibaca";
  toggleButton.addEventListener("click", function () {
    bookObject.isComplete = !bookObject.isComplete;
    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  });

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("data-testid", "bookItemDeleteButton");
  deleteButton.innerText = "Hapus Buku";
  deleteButton.addEventListener("click", function () {
    const index = books.findIndex((b) => b.id === bookObject.id);
    if (index !== -1) {
      books.splice(index, 1);
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }
  });

  const editButton = document.createElement("button");
  editButton.setAttribute("data-testid", "bookItemEditButton");
  editButton.innerText = "Edit Buku";
  editButton.addEventListener("click", function () {
    const newTitle = prompt("Judul baru:", bookObject.title);
    const newAuthor = prompt("Penulis baru:", bookObject.author);
    const newYear = prompt("Tahun baru:", bookObject.year);

    if (newTitle && newAuthor && newYear) {
      bookObject.title = newTitle;
      bookObject.author = newAuthor;
      bookObject.year = parseInt(newYear);
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    }
  });

  buttonContainer.append(toggleButton, deleteButton, editButton);

  bookItem.append(title, author, year, buttonContainer);
  return bookItem;
}

document.addEventListener(RENDER_EVENT, function () {
  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  for (const book of books) {
    const bookElement = makeBookElement(book);
    if (book.isComplete) {
      completeBookList.append(bookElement);
    } else {
      incompleteBookList.append(bookElement);
    }
  }
});

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
  }
}

function loadDataFromStorage() {
  const serializedData = localStorage.getItem(STORAGE_KEY);
  if (serializedData) {
    const data = JSON.parse(serializedData);
    for (const book of data) {
      books.push(book);
    }
  }
  document.dispatchEvent(new Event(RENDER_EVENT));
}

function isStorageExist() {
  if (typeof Storage === "undefined") {
    alert("Browser kamu tidak mendukung local storage");
    return false;
  }
  return true;
}

function searchBook() {
  const query = document.getElementById("searchBookTitle").value.toLowerCase();
  const filtered = books.filter((book) =>
    book.title.toLowerCase().includes(query)
  );

  const incompleteBookList = document.getElementById("incompleteBookList");
  const completeBookList = document.getElementById("completeBookList");

  incompleteBookList.innerHTML = "";
  completeBookList.innerHTML = "";

  for (const book of filtered) {
    const bookElement = makeBookElement(book);
    if (book.isComplete) {
      completeBookList.append(bookElement);
    } else {
      incompleteBookList.append(bookElement);
    }
  }
}
