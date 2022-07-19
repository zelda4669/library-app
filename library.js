const myLibrary = []

let shelf = document.querySelector('.shelf')
let form = document.querySelector('form')
form.addEventListener('submit', addBookToLibrary)

let newTitle = document.querySelector('#title')
let newAuthor = document.querySelector('#author')
let isRead = document.querySelector('#read')

class Book {
    constructor(title, author, read) {
        this.title = title
        this.author = author
        this.read = read
    }
}

function addBookToLibrary() {
    let book = new Book(newTitle.value, newAuthor.value)
    book.read = isRead.checked
    myLibrary.push(book)
    generateBook(book)
    form.reset()
}


function generateBook(book) {
    let item = document.createElement('div')
    let title = document.createElement('p')
    let author = document.createElement('p')
    let readLabel = document.createElement('label')
    let checkbox = document.createElement('input')
    let deleteBook = document.createElement('button')

    deleteBook.classList.add('delete')
    title.classList.add('title')

    checkbox.type = 'checkbox'
    checkbox.name = 'isRead'
    checkbox.id = 'isRead'
    readLabel.for = 'isRead'

    checkbox.addEventListener('change', () => {
        book.read = checkbox.checked
        console.log(book)
    })
    
    if(book.read) {
        checkbox.checked = true
    }

    item.classList.add('book')
    title.textContent = book.title
    author.textContent = book.author
    readLabel.textContent = 'read?'
    deleteBook.textContent = 'X'

    item.appendChild(title)
    item.appendChild(author)
    item.appendChild(readLabel)
    item.appendChild(checkbox)
    item.appendChild(deleteBook)

    shelf.appendChild(item)
}



for(let i=0; i<myLibrary.length; i++) {
    generateBook(myLibrary[i])
}