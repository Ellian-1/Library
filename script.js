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