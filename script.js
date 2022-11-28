const name = document.getElementById('name');
const author = document.getElementById('author');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
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
    const newBook = new Book();
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