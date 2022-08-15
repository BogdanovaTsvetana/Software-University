import { html } from "./../../node_modules/lit-html/lit-html.js";

export let tableTemplate = () => html`
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody id="books-container">
    </tbody>
</table>`;

export let bookTemplate = (book, editHandler, deleteHandler) => html`
<tr class="book" data-id=${book._id}>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button class="edit" @click=${editHandler}>Edit</button>
        <button class="delete" @click=${deleteHandler}>Delete</button>
    </td>
</tr>`;

export let allBooksTemplate = (books, editHandler, deleteHandler) => html`${books.map(b => bookTemplate(b, editHandler, deleteHandler))}`;

export let addformTemplate = (form) => html`
<form @submit=${form.submitHandler} id=${form.id}>
    <h3>${form.title}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." >
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value=${form.submitText}>
</form>`;

export let editformTemplate = (form) => html`
<form @submit=${form.submitHandler} id=${form.id}>
    <input type="hidden" name="id" .value=${form.idValue}>
    <h3>${form.title}</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${form.titleValue}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${form.authorValue}>
    <input type="submit" value=${form.submitText}>
</form>`;

export let bookLibaryTemplate = (loadBooksHandler) => html`
   <button id="loadBooks"  @click=${loadBooksHandler}>LOAD ALL BOOKS</button>
   ${tableTemplate()}
   <section id="form-section"></section>
`; 

