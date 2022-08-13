
let editMovieSectionElement = document.getElementById('edit-movie');


function showPage() {
    editMovieSectionElement.classList.remove('hidden');
}

function hidePage() {
    editMovieSectionElement.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
}