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

const displayBooks = () => {
    const tBody = document.getElementById('table-body');

    let newLibrary = localStorage.getItem('library');
    newLibrary = JSON.parse(newLibrary);

    let htmlBlock = '';
    for (let i = 0; i < newLibrary.length; i++) {
        htmlBlock += `
        <tr>
            <td>${newLibrary[i].title}</td>
            <td>${newLibrary[i].author}</td>
            <td>${newLibrary[i].status}</td>
        </tr>
        `;

        tBody.innerHTML = htmlBlock;
        
    }
}

displayBooks();