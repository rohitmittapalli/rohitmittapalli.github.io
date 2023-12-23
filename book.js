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
document.addEventListener("DOMContentLoaded", function () {
    // Fetch the book data from the text file (books.txt)
    fetch("books.txt")
        .then(response => response.text())
        .then(data => {
            // Split the data into individual book entries
            const bookEntries = data.split("\n\n");

            console.log(bookEntries);
            // Create a container to hold the book cards
            const bookList = document.getElementById("bookList");

            // Iterate through book entries and create cards
            bookEntries.forEach(entry => {
                const bookCard = document.createElement("div");
                bookCard.classList.add("book-card");

                // Parse book details from the entry
                const lines = entry.split("\n");
                lines.forEach(line => {
                    const [key, value] = line.split(": ");
                    if (key && value) {
                        const detail = document.createElement("p");
                        detail.classList.add(key.toLowerCase());
                        detail.textContent = value;
                        bookCard.appendChild(detail);
                    }
                });

                // Append the book card to the container
                bookList.appendChild(bookCard);
            });
        })
        .catch(error => {
            console.error("Error fetching book data: " + error);
        });
});

