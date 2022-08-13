import registerPage from './registerPage.js';
import loginPage from './loginPage.js';
import editMoviePage from './editMovie.js';
import exampleMoviePage from './exampleMovie.js';
import homePage from './homePage.js';
import moviePage from './moviePage.js';
import addMovieButton from './addMovieBtn.js';
import addMoviePage from './addMoviePage.js';


let pages = {
    homePage: homePage,
    register: registerPage,
    login: loginPage,
    addMovieButton: addMovieButton,
    addMovie: addMoviePage,
    editMovie: editMoviePage,
    moviePage: moviePage,
    exampleMovie: exampleMoviePage,
}

goToSection('homePage');


let navlement = document.querySelector('nav');
navlement.addEventListener('click', findSection)

function findSection(e) {
    if (e.target.tagName !== 'A') {
        return;
    }

    let dataLink = e.target.getAttribute('data-link');

    goToSection(dataLink)

}

function goToSection(dataLink) {
    
    if (pages.hasOwnProperty(dataLink)) {
        hidePages();

        let currentPage = pages[dataLink];

        currentPage.showPage();
        if (dataLink == 'homePage') {
            moviePage.showPage();
        }

    }

}

function hidePages() {
    Object.values(pages).forEach(x => x.hidePage());
}

let app = {
    goToSection,
}

export default app;