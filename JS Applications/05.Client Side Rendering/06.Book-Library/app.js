import {render} from './../node_modules/lit-html/lit-html.js';
import booksService from './services/booksService.js';
import { allBooksTemplate, addformTemplate, editformTemplate, bookLibaryTemplate, } from './templates/templates.js';

let body = document.querySelector('body');

let addForm = {
    id: 'add-form',
    type: 'add',
    title: 'Add Book',
    submitText: 'Submit',
    submitHandler: createBook
};

let editForm = {
    id: 'edit-form',
    type: 'edit',
    title: 'Edit Book',
    submitText: 'Save',
    submitHandler: editBook,
    idValue: '',
    authoValue: '',
    titleValie: ''
};

let books = [];
render(bookLibaryTemplate(loadBooks), body);
let sectionForm = document.getElementById('form-section');
render(addformTemplate(addForm), sectionForm)
let booksContainer = document.getElementById('books-container');

async function loadBooks(e) {
    let booksObj = await booksService.getAllBooks();
    books = Object.entries(booksObj).map(([key, val]) => {
        val._id = key;
        return val;
    });
    render(allBooksTemplate(books, prepareEdit, deleteBook), booksContainer);
}

async function createBook(e){
    e.preventDefault();
    
    let form = e.target;
    let formData = new FormData(form);
    let newBook = {
        author: formData.get('author'),
        title: formData.get('title')
    }

    let createResult = await booksService.createBook(newBook);
    books.push(createResult);
    render(allBooksTemplate(books, prepareEdit, deleteBook), booksContainer);
    form.reset()
}

async function prepareEdit(e){
    let book = e.target.closest('.book');
    let id = book.dataset.id;
    
    let bookSource = await booksService.getBook(id);
    editForm.idValue = id;
    editForm.authorValue = bookSource.author;
    editForm.titleValue = bookSource.title;

    render(editformTemplate(editForm), sectionForm);    
}

async function editBook(e){
    e.preventDefault();
    let booksContainer = document.getElementById('books-container');
    let form = e.target;
    let formData = new FormData(form);
    let id = formData.get('id');
    let newBook = {
        author: formData.get('author'),
        title: formData.get('title')
    }

    let createResult = await booksService.editBook(id, newBook);
    console.log(createResult);
    books = books.filter(x => x._id !== id);
    books.push(createResult);
    render(allBooksTemplate(books, prepareEdit, deleteBook), booksContainer);

    render(addformTemplate(addForm), sectionForm)
}

async function deleteBook(e){
    let book = e.target.closest('.book');
    let id = book.dataset.id;
    
    let bookSource = await booksService.deleteBook(id);
    console.log(bookSource)

    books = books.filter(x => x._id !== id);
    render(allBooksTemplate(books, prepareEdit, deleteBook), booksContainer);

    render(addformTemplate(addForm), sectionForm);
}