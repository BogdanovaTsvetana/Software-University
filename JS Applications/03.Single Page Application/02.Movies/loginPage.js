import {
    saveToken
} from './auth.js';
import app from './app.js'
import addMovieButton from './addMovieBtn.js'

let loginSectionElement = document.getElementById('form-login');
let formLoginElement = loginSectionElement.querySelector('form');

formLoginElement.addEventListener('submit', loginHandler);

async function loginHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;

    let data = new FormData(e.currentTarget);
    let email = data.get('email');
    let password = data.get('password');

    let message = {
        email, 
        password,
    }

    let url = 'http://localhost:3030/users/login';
    let postResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Conntent-Type': 'applicatiom/json',
            
        },
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
    loginSectionElement.classList.remove('hidden');
}

function hidePage() {
    loginSectionElement.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}