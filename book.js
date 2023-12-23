// popup.js

function openBookPopup() {
    var popup = document.querySelector('.book-popup');
    popup.style.display = 'block';
}

function closeBookPopup() {
    var popup = document.querySelector('.book-popup');
    popup.style.display = 'none';
}

document.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('books-link')) {
        event.preventDefault();
        openBookPopup();
    } else if (
        !target.classList.contains('book-popup') &&
        !target.classList.contains('books-link') &&
        !target.closest('.book-popup')
    ) {
        closeBookPopup();
    }
});

// book.js
// Function to parse book data from text
function parseBooks(text) {
  const books = [];
  const bookDataArray = text.split('\n\n');

  for (const bookData of bookDataArray) {
    const book = {};
    const lines = bookData.split('\n');

    for (const line of lines) {
      const [key, value] = line.split(': ');
      book[key] = value;
    }

    books.push(book);
  }

  return books;
}

// Function to create book cards
function createBookCards(books) {
  const container = document.getElementById('book-container');

  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const bookImage = document.createElement('img');
    bookImage.classList.add('book-image'); // Add the book-image class
    bookImage.src = book['Image'];
    bookImage.alt = book['Title'];

    const bookDetails = document.createElement('div');
    bookDetails.classList.add('book-details');

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = book['Title'];

    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = `by ${book['Author']}`;

    const bookReview = document.createElement('p');
    bookReview.classList.add('book-review');
    bookReview.textContent = book['Review'];

    bookDetails.appendChild(bookTitle);
    bookDetails.appendChild(bookAuthor);
    bookDetails.appendChild(bookReview);

    bookCard.appendChild(bookImage);
    bookCard.appendChild(bookDetails);

    container.appendChild(bookCard);
  });
}

// Fetch the book data from the URL
fetch('https://raw.githubusercontent.com/rohitmittapalli/website/main/books.txt')
  .then((response) => response.text())
  .then((text) => {
    const books = parseBooks(text);
    createBookCards(books);
  })
  .catch((error) => {
    console.error('Error fetching book data:', error);
  });

