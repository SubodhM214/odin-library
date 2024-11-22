const myLibrary = [];

const bookForm = document.querySelector("#bookForm");
bookForm.style.display = "none";
const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  bookForm.style.display = "";
  // btn.style.display = "none";
});

function Book(title, author, year, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
}

displayBooks = () => {
  const cards = document.querySelector(".cards");
  cards.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.id = `${index}`;
    div.innerHTML = `
    <h2>${book.title}</h2>
    <h3>${book.author}</h3>
    <p>${book.year}</p>
    <p>${book.read ? "Read" : "Not Read"}</p>`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove");
    div.appendChild(removeButton);

    cards.appendChild(div);

    //function to remove book cards
    removeButton.addEventListener("click", (e) => {
      console.log(e.target.parentNode.id);
      console.log(myLibrary[e.target.parentNode.id]);
      myLibrary.splice(e.target.parentNode.id, 1);
      displayBooks();
    });
  });
  // console.log(myLibrary);
};

// const removeBook = document.querySelector(".remove");

function addBookToLibrary() {
  // do stuff here
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const year = document.getElementById("year").value;
  const read = document.getElementById("read").checked;

  const newBook = new Book(title, author, year, read);
  myLibrary.push(newBook);

  document.getElementById("bookForm").reset();
  displayBooks();
}

document.getElementById("bookForm").addEventListener("submit", (e) => {
  addBookToLibrary();
  e.preventDefault();
});
