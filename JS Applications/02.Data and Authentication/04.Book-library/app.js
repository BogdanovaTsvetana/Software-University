let loadBooksBtnElement = document.getElementById('loadBooks');
let loadedBooksTbodyEl = document.getElementById('tbody');
let formElement = document.getElementById('form');
let submitBtnElement = document.getElementById('submit');
let titleFromBookFormElement = document.getElementById('title');
let authorFromBookFormElement = document.getElementById('author');

loadBooksBtnElement.addEventListener('click', loadAllBooks)
formElement.addEventListener('submit', submitHandler);

let baseUrl = `http://localhost:3030/jsonstore/collections/books`

async function loadAllBooks() {
    try {
        let getResponse = await fetch(baseUrl);
        let booksInfo = await getResponse.json();

        loadedBooksTbodyEl.querySelectorAll('tr').forEach(tr => tr.remove());

        Object.entries(booksInfo).forEach(b => {
            let id = b[0];
            let bookInfo = b[1];
            createTr(id, bookInfo);
        });
    } catch (err) {
        console.error(err);
    }
}

function editBookPart1(e) {
    let trEl = e.target.parentElement.parentElement;
    let id = trEl.dataset.id;
    let titleOldEl = trEl.querySelectorAll('td')[0];
    let authorOldEl = trEl.querySelectorAll('td')[1];
    formElement.dataset.idBook = id;
    formElement.dataset.toEdit = true;

    let formTypeH3Element = formElement.querySelector('h3');
    formTypeH3Element.textContent = 'Edit FORM'; 
    titleFromBookFormElement.value = titleOldEl.textContent;
    authorFromBookFormElement.value = authorOldEl.textContent;
}

function submitHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;
    console.log(form.dataset.toEdit, form.dataset.idBook)

    let data = new FormData(form);
    let bookInfo = {
        author: data.get('author'),
        title: data.get('title')
    }

    if (bookInfo.author == '' || bookInfo.title == '') {
        return;
    }

    if (form.dataset.toEdit == 'true') {
        let id = form.dataset.idBook;
        editBookPart2(id, bookInfo);   
    } else {
        createBook(bookInfo);
    }

    titleFromBookFormElement.value = '';
    authorFromBookFormElement.value = '';
}

async function createBook(bookInfo) {
    try {
        let createResponse = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        });
        let book = await createResponse.json()
        createTr(book._id, book);

    } catch (err) {
        console.error(err);
    }
}

async function editBookPart2(id, bookInfo) {
    try {
        let editResponse = await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookInfo)
        })
        let editInfo = await editResponse.json();
        let trBookToReplace = loadedBooksTbodyEl.querySelector(`tr[data-id="${id}"]`);
        
        trBookToReplace.remove();        
        createTr(editInfo._id, editInfo);
    } catch (err) {
        console.log(err);
    }
    
}

async function deleteBookTr(e) {
    let trEl = e.target.parentElement.parentElement;
    let id = trEl.dataset.id;

    let deleteResponse = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE'
    });

    trEl.remove();
}

function createTr(id, bookInfo) {
    let trEl = createEl('tr');
    let tdTitleEl = createEl('td', bookInfo.title, trEl);
    let tdAuthoeEl = createEl('td', bookInfo.author, trEl);
    let tdBtnEl = createEl('td', '', trEl);
    let editBtnEl = createEl('button', 'Edit', tdBtnEl);
    let deleteBtnEl = createEl('button', 'Deletet', tdBtnEl);
    deleteBtnEl.addEventListener('click', deleteBookTr);
    editBtnEl.addEventListener('click', editBookPart1)

    trEl.dataset.id = id;
    loadedBooksTbodyEl.appendChild(trEl);
}

function createEl(type, textContent, parent) {
    let element = document.createElement(type);
    if (textContent) {
        element.textContent = textContent;
    }
    if (parent) {
        parent.appendChild(element);
    }

    return element;
}