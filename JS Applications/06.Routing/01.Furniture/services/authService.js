import { jsonRequest } from "./../heplers/jsonRequest.js";

function getAuthToken(){
    return localStorage.getItem('authToken');
}

function getUsername(){
    return localStorage.getItem('username');
}

function getUserId(){
    return localStorage.getItem('userId');
}

function isLoggedIn(){
    return localStorage.getItem('authToken') !== null;
}

async function login(user){
    let result = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
}

async function register(user){
    let result = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('username', result.email);
}


export default {
    getAuthToken,
    getUsername,
    getUserId,
    isLoggedIn,
    login,
    register
}