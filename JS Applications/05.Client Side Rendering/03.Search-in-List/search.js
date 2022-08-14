import {render} from '../../node_modules/lit-html/lit-html.js';
import {towns} from './towns.js';
import {templateAllTowns} from './templates/templateTowns.js'

let townsElement = document.getElementById('towns');
let inputElement = document.getElementById('searchText');
let resultElement =document.getElementById('result');
let buttonSearch = document.getElementById('search');
buttonSearch.addEventListener('click', search);

let townsObj = towns.map(t => ({ name: t }));

render(templateAllTowns(townsObj), townsElement);

function search() {
   let text = inputElement.value.toLowerCase();

   let machedTowns = townsObj.filter(t => t.name.toLowerCase().includes(text));
   machedTowns.forEach(t => (t.className = 'active'));

   resultElement.textContent = `${machedTowns.length} maches found`;

   render(templateAllTowns(townsObj), townsElement);
   
   inputElement.value = '';
}



