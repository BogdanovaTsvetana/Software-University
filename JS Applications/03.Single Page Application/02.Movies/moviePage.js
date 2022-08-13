
import exampleMovie from "./exampleMovie.js";
import app from './app.js'

let moviePageSectionElement = document.getElementById('movie');
let movieContainer = moviePageSectionElement.querySelector('#movie-container');

moviePageSectionElement.addEventListener('click', showDetails);

async function getMovies() {
    let url = 'http://localhost:3030/data/movies';
    let getResponse = await fetch(url);
    let moviesInfo = await getResponse.json();
     
    // description: "d"
    // img: "d"
    // title: "dd"
    // _createdOn: 1626606666137
    // _id: "2fc7ee79-5ab9-42b6-8152-dcf4432b9451"
    // _ownerId: "584bb8de-a96d-4a60-9f6c-eb98f15837d9"

    movieContainer.querySelectorAll('.movie').forEach(el => el.remove());
    moviesInfo.forEach(m => createMovie(m));

}


function createMovie(movie){
    let movieDivEl = document.createElement('div');
    movieDivEl.classList.add('card');
    movieDivEl.classList.add('mb-4');
    movieDivEl.classList.add('movie');

    let imgEl = document.createElement('img');
    imgEl.classList.add('card-img-top');
    imgEl.setAttribute('alt', 'Card image cap');
    imgEl.setAttribute('src', movie.img);
    imgEl.setAttribute('width', '400');  // ?

    let bodyDivEl = document.createElement('div');
    bodyDivEl.classList.add('card-body');

    let titleH4El = document.createElement('h4');
    titleH4El.classList.add('card-title');
    titleH4El.textContent = movie.title;

    let footerDivEl = document.createElement('div');
    footerDivEl.classList.add('card-footer');
    let aEl = document.createElement('a');
    
    aEl.dataset.id = movie._id;
    aEl.dataset.ownerId = movie._ownerId;

    let buttonEl = document.createElement('button');
    buttonEl.setAttribute('type', 'button');
    buttonEl.classList.add('btn');
    buttonEl.classList.add('btn-info');
    buttonEl.value = 'Details';

    movieDivEl.appendChild(imgEl);
    bodyDivEl.appendChild(titleH4El)
    movieDivEl.appendChild(bodyDivEl);
    aEl.appendChild(buttonEl);
    footerDivEl.appendChild(aEl);
    movieDivEl.appendChild(footerDivEl);
   
    movieContainer.appendChild(movieDivEl);
}


function showDetails(e) {
    e.preventDefault();

    if(e.target.tagName !== 'BUTTON') {
         return;
    }

    let btn = e.target;
    let id = btn.parentElement.dataset.id;
    let ownerId = btn.parentElement.dataset.ownerId;
    exampleMovie.example(id)

    app.goToSection('exampleMovie');
    
}


function showPage() {
    moviePageSectionElement.classList.remove('hidden');
}

function hidePage() {
    moviePageSectionElement.classList.add('hidden');
}

let moviePage = {
    showPage,
    hidePage,
    getMovies,
    createMovie
}

export default moviePage;