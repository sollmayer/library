let myLibrary = [];

const books_div = document.querySelector('.books');
const showForm = document.querySelector('#showForm')
const formDialog = document.querySelector("#form_dialog");
const outputBox = document.querySelector("output");
// const addBookBtn = formDialog.querySelector("#addBook_btn");
const cancel_btn = formDialog.querySelector("#cancel_btn");

cancel_btn.onclick = (e)=> {
    e.preventDefault();
    formDialog.close()
}

document.querySelector('#book_form').addEventListener('submit', (e)=>{
    e.preventDefault();
    addBookToLibrary();
    formDialog.close();
    showBooks();
})
let del_btn;
showForm.addEventListener('click', ()=>formDialog.showModal())

// function Book(title, author, pages, status) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status
    
//     this.changeStatus = () => {
//         this.status = this.status === "read" ? "not read" : "read";
//     }
// }
class Book {
    constructor(title,author,pages,status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    changeStatus = () => {
        this.status =  this.status === "read"? "not read": "read";
    }
}
function addBookToLibrary() {
    let bookTitle = document.querySelector("#bookName").value;
    let bookAuthor = document.querySelector("#author").value;
    let bookPages = document.querySelector("#pages").value;
    let bookStatus = document.querySelector("#status").checked;
    let book = new Book(bookTitle, bookAuthor, bookPages, bookStatus?"read":"not read");
    
    if(!myLibrary.some(item => item.title === book.title)){
        myLibrary.push(book);
    }else return;
}


function clearLibrary(){
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
        let btn_div = document.createElement('div');
        let delete_btn = document.createElement('button'); 
        let change_status = document.createElement('button'); 

        title.textContent = book.title;
        author.textContent = `by ${book.author}`;
        pages.textContent = book.pages + ' pages';
        status.textContent = book.status;
        delete_btn.textContent = 'Delete';
        delete_btn.setAttribute(`data-title`,book.title);
        change_status.setAttribute(`data-status`,book.status);
        change_status.textContent = book.status=="read" ? "READ":"NOT READ";
        change_status.classList.add('change_status');
        
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(status);
        btn_div.appendChild(delete_btn);
        btn_div.appendChild(change_status);
        div.appendChild(btn_div);
        books_div.appendChild(div);
    }
    addButtons();

}

function addButtons(){
    document.querySelectorAll('.books div button[data-title]').forEach(btn => {
        btn.addEventListener('click',()=>{
            console.log("delete_btn clicked", btn.dataset.title)
            myLibrary = myLibrary.filter(book => book.title !== btn.dataset.title);
            showBooks();
        })
    })
    document.querySelectorAll('.change_status').forEach(btn => {
        btn.addEventListener('click', ()=>{
            console.log('changeStatus')
            const book = myLibrary.find(book => book.title === btn.parentElement.parentElement.firstChild.textContent)
            console.log(book);
            book.changeStatus();
            showBooks();
        })
    })

}

