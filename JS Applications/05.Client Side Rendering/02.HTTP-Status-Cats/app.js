import {
    render
} from '../../node_modules/lit-html/lit-html.js';
import {
    cats
} from './catSeeder.js';
import templateAllCats from './templates/templateAllCats.js';

let catsSectionElement = document.getElementById('allCats');

function toggleBtn(e) {
    let button = e.target;
    button.textContent = button.textContent === 'Show status code' ?
    'Hide status code' :
    'Show status code';

    let statusDivEl = button.nextElementSibling;
    statusDivEl.style.display = statusDivEl.style.display === 'none' ?
    'block' :
    'none';
}

render(templateAllCats(cats, toggleBtn), catsSectionElement);
