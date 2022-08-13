import app from './app.js'
import moviePage from './moviePage.js'

let homeSectionElement = document.getElementById('home-page');


moviePage.getMovies()


function showPage() {
    homeSectionElement.classList.remove('hidden');
}

function hidePage() {
    homeSectionElement.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}