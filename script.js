const form = document.getElementById('formulary');
form.addEventListener('submit', e => {
    e.preventDefault();
    addBookToLibrary();
});

let myLibrary = [
    {
        name: 'Meditations',
        author: 'Marcus Aurelius'
    },
    {
        name: 'Moral letters to Lucilius',
        author: 'Seneca the younger'
    }
];

class Book {
    constructor(title, author, status) {
        this.title = title;
        this.author = author;
        this.status = status;
    }
}

const addBookToLibrary = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const status = document.getElementById('status').value;
    
    const newBook = new Book(title, author, status);

    myLibrary.push(newBook);
    localStorage.setItem('library', JSON.stringify(myLibrary));
}