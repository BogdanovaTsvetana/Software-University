//import app from './app.js'  // 18-07

export function saveToken(token) {
    localStorage.setItem('authToken', token);
}

export function getToken() {
    return localStorage.getItem('authToken');
}

export function setUserId(userId){
    localStorage.setItem('userId', userId);
}

export function getUserId(){
    return localStorage.getItem('userId');
}



let auth = {
    saveToken,
    getToken,
    setUserId,
    getUserId,
}

export default auth;

