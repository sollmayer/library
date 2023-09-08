let myLibrary = [];

const books_div = document.querySelector('.books');
const showForm = document.querySelector('#showForm')
const formDialog = document.querySelector("#form_dialog");
const outputBox = document.querySelector("output");
const addBookBtn = formDialog.querySelector("#addBook_btn");

showForm.addEventListener('click', ()=>formDialog.showModal())

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
    
    if(!myLibrary.some(item => item.title === book.title)){
        myLibrary.push(book);
    }else return;
}


function clearLibrary(){
    // while (books_div.firstChild) {
    //     books_div.removeChild(books_div.lastChild);
    // }
    document.querySelector('.books').innerHTML = '';

}

function showBooks(){
    clearLibrary();
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
        div.appendChild(delete_btn);
        books_div.appendChild(div);
    }

}
addBookBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    formDialog.close();
    showBooks();
})
