import {render} from '../../node_modules/lit-html/lit-html.js';
import templateAllTowns from './templates.js';

let formElement = document.getElementById('form');
let rootElement = document.getElementById('root');

formElement.addEventListener('submit', loadHandler);

function loadHandler(e) {
    e.preventDefault();
    let data = new FormData(e.currentTarget);
    let towns = data.get('towns').split(', ');
    //console.log(towns)

    render(templateAllTowns(towns), rootElement);
    e.currentTarget.reset();
}


// let inputElement = document.getElementById('towns');
// let btnElement = document.getElementById('btnLoadTowns');

// btnElement.addEventListener('click', loadHandler);

// function loadHandler(e) {
//     e.preventDefault();
//     let townsString = inputElement.value;
//     let townsArray = townsString.split(', ');
//     //console.log(townsArray)

//     render(templateAllTowns(townsArray), rootElement);
//     inputElement.value = '';
// }