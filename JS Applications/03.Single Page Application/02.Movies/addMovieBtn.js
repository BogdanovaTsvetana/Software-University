import app from './app.js'
import homePage from './homePage.js';


let addMovieBtnSectionElement = document.getElementById('add-movie-button');
addMovieBtnSectionElement.addEventListener('click', showAddMovieSection);

function showAddMovieSection() {
    app.goToSection('addMovie');
    homePage.hidePage();
}


function showPage() {
    addMovieBtnSectionElement.classList.remove('hidden');
}

function hidePage() {
    addMovieBtnSectionElement.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}