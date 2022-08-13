import app from './app.js';
import addMovieButton from './addMovieBtn.js';
import auth from './auth.js'
import moviePage from './moviePage.js'

let addMovieSectionElement = document.getElementById('add-movie');


let formElement = addMovieSectionElement.querySelector('form');

formElement.addEventListener('submit', addMovieHandler);

async function addMovieHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;

    let data = new FormData(e.currentTarget);

    let title = data.get('title');
    let description = data.get('description');
    let img = data.get('imageUrl');

    if (title === '' ||
        description === '' ||
        img === '') {
        alert('Fields must not be empty');
        return;
    };

    let message = {
        title,
        description,
        img
    }

    let token = auth.getToken();
    console.log(token)

    let url = 'http://localhost:3030/data/movies'
    let postResponse = await fetch(url, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(message)

    })
    let result = await postResponse.json();
    // console.log(result)
    // description: "d"
    // img: "d"
    // title: "dd"
    // _createdOn: 1626606666137
    // _id: "2fc7ee79-5ab9-42b6-8152-dcf4432b9451"
    // _ownerId: "584bb8de-a96d-4a60-9f6c-eb98f15837d9"

    moviePage.createMovie(result)

    form.reset();
    hidePage();
    app.goToSection('homePage');
    addMovieButton.showPage()

}



function showPage() {
    addMovieSectionElement.classList.remove('hidden');
}

function hidePage() {
    addMovieSectionElement.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}