import auth from './auth.js';
import app from './app.js'
import addMovieButton from './addMovieBtn.js'

let registerSectionElement = document.getElementById('form-sign-up');
let formRegisterElement = registerSectionElement.querySelector('form');

formRegisterElement.addEventListener('submit', registerHandler);

async function registerHandler(e) {
    e.preventDefault();
    let form = e.currentTarget

    let data = new FormData(e.currentTarget);

    let email = data.get('email');
    let password = data.get('password');
    let repeatPassword = data.get('repeatPassword');

    if (email === '' ||
        password === '' ||
        repeatPassword === '') {
        alert('Fields must not be empty');
        return;
    };

    if (password.length < 6) {
        alert('Password shoud be at least 6 characters long');
        return;
    };

    if (password !== repeatPassword) {
        alert('Repeat password does not match the password');
        return;
    };

    let message = {
        email,
        password,
    }

    let url = 'http://localhost:3030/users/register';
    let postResponse = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(message)
    })
    let result = await postResponse.json();

    auth.saveToken(result.accessToken);
    auth.setUserId(result._id);
     
    form.reset();
    app.goToSection('homePage');
    addMovieButton.showPage()


}


function showPage() {
    formRegisterElement.classList.remove('hidden');
}

function hidePage() {
    formRegisterElement.classList.add('hidden');
}



export default {
    showPage,
    hidePage,
}