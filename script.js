const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function addBookToLibrary() {
    let bookTitle = document.querySelector("#bookName").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let bookStatus = document.querySelector("#status").value;

    let book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);
    myLibrary.push(book);
}
const books_div = document.querySelector('.books');

function showBooks(){

    for(let book of myLibrary){
        console.log(book);
        let div = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let pages = document.createElement('p');
        let status = document.createElement('p');
        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = book.pages;
        status.textContent = book.status;
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);
        books_div.appendChild(div);
    }

}
const addButton = document.querySelector('#addBook');
addButton.addEventListener('click', ()=>{
    addBookToLibrary();
})
