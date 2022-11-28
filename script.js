const nameBook = document.getElementById('name');
const author = document.getElementById('author');
const form = document.getElementById('form');
const text = document.getElementById('text');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
    listOfBooks();
    nameBook.value = "";
    author.value = "";
    //text.textContent = nameBook.value;

})

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

let library = [
    {
        name: 'Meditations',
        author: 'Marcus Aurelius'
    },
    {
        name: 'Moral letters to Lucilius',
        author: 'Seneca the younger'
    }
]

const addBookToLibrary = () => {
    const newBook = new Book(nameBook.value, author.value);
    library.push(newBook);
    updateLocalStorage();
}

const deleteToLibrary = (book) => {
    library.splice(book, book + 1)
}

const selectFromLibrary = (booksLibrary, name) => {
    for (let book of booksLibrary) {
        book.name == name ? library.indexOf(book) : alert('The book is not in the library');
    }
}

const updateLocalStorage = () => {
    localStorage.setItem('library', JSON.stringify(library));
}

const checkLocalStorage = () => {
    library = JSON.parse(localStorage.getItem(library));
}

const listOfBooks = () => {
    checkLocalStorage();
    library.forEach((book) => {
        const dataBook = `
        <div class="data-book">
            <div class="book-title">
                <h1>Name:</h1>
                <p>${book.name}</p>
            </div>
            <div class="book-author">
                <h1>Author:</h1>
                <p>${book.author}</p>
            </div>
        </div>
        `;

        text.insertAdjacentElement('afterbegin', dataBook);
    })
}