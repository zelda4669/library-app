const myLibrary = [
    {'title': 'The Hobbit', 'author': 'J.R.R. Tolkein', 'read': 'read'},
    {'title': 'A Game of Thrones', 'author': 'George R.R. Martin', 'read': 'read'},
    {'title': 'Pride and Prejudice', 'author': 'Jane Austen', 'read': 'read'},
]

let shelf = document.querySelector('.shelf')
// let newTitle = document.forms.title()
let newAuthor = document.querySelector('#author')
let isRead = document.querySelector('#read')
let button = document.querySelector('#submit')

class Book {
    constructor(title, author, read) {
        this.title = title
        this.author = author
        this.read = read

        this.info = function () {
            return `${title} by ${author}, ${read}.`
        }
    }
}

button.addEventListener('click', addBookToLibrary)

function addBookToLibrary() {
    console.log(newTitle)
    let book = new Book(newTitle, newAuthor, isRead)
    myLibrary.push(book)
}


function generateBook(book) {
    let item = document.createElement('div')
    let title = document.createElement('p')
    let author = document.createElement('p')
    let readLabel = document.createElement('label')
    let checkbox = document.createElement('input')

    checkbox.type = 'checkbox'
    checkbox.name = 'isRead'
    checkbox.id = 'isRead'
    readLabel.for = 'isRead'

    item.classList.add('book')
    title.textContent = book.title
    author.textContent = book.author
    readLabel.textContent = 'read?'

    item.appendChild(title)
    item.appendChild(author)
    item.appendChild(readLabel)
    item.appendChild(checkbox)

    shelf.appendChild(item)
}

for(let i=0; i<myLibrary.length; i++) {
    generateBook(myLibrary[i])
}