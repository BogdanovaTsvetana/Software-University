import { jsonRequest } from "./../helpers/jsonRequest.js";

let baseUrl = 'http://localhost:3030/users';
 

async function login(user){
    let result = await jsonRequest(`${baseUrl}/login`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('email', result.email);   /// 
}

function isLoggedIn(){
    return localStorage.getItem('authToken') !== null;
}

async function register(user){
    let result = await jsonRequest(`${baseUrl}/register`, 'Post', user);
    localStorage.setItem('authToken', result.accessToken);
    localStorage.setItem('userId', result._id);
    localStorage.setItem('email', result.email);   ///
  
}

async function logout(){
    await jsonRequest(`${baseUrl}/logout`, 'Get', undefined, true, true);
    localStorage.clear();
}

function getAuthToken(){
    return localStorage.getItem('authToken');
}

function getUserId(){
    return localStorage.getItem('userId');
}


function getEmail(){
    return localStorage.getItem('email');
}


export default {
    getAuthToken,
    getUserId,
    getEmail,
    isLoggedIn,
    login,
    register,
    logout
}