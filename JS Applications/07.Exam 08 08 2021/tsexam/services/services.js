import { jsonRequest } from "./../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/data/books';  



async function getAll(){
    let result = await jsonRequest(`${baseUrl}?sortBy=_createdOn%20desc`);  //
    return result;
}

async function getOneItem(id){  
    let result = await jsonRequest(`${baseUrl}/${id}`);
    return result;
}

async function createItem(item){  
    let result = await jsonRequest(`${baseUrl}`, 'Post', item, true);
    return result;
}

async function editItem(item, id){
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Put', item, true);
    return result;
}

async function deleteItem(id){
    let result = await jsonRequest(`${baseUrl}/${id}`, 'Delete', undefined, true);
    return result;
}

async function getMyItems(userId){
    let result = await jsonRequest(`http://localhost:3030/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc
    `);  ////  !!!!!   ${userId}
    return result;
}

async function likeItem(id){
    let item = { bookId: id};
    let result = await jsonRequest(`http://localhost:3030/data/likes`, 'Post',  item, true);
    return result;
}

async function getBookLikes(bookId) {
    let result = await jsonRequest(`http://localhost:3030/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`);
    return result;
}


async function getUserLikesForBook(userId, bookId) {
    let result = await jsonRequest(`http://localhost:3030/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
    return result;
}


export default {
    getAll,
    getOneItem,
    createItem,
    editItem,
    deleteItem,
    getMyItems,
    getBookLikes,
    getUserLikesForBook,
    likeItem
}