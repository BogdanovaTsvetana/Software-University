
import { render } from './../node_modules/lit-html/lit-html.js';
import { templateAllOptions } from './templates/templates.js';

let menuElement = document.getElementById('menu');
let formElement = document.getElementById('form');
formElement.addEventListener('submit', addHandler);

let url = 'http://localhost:3030/jsonstore/advanced/dropdown';
loadData();
let optionsInfo = [];

async function loadData() {
    let getResponse = await fetch(url);
    let listIlems = await getResponse.json();
    optionsInfo = Object.values(listIlems);
    render(templateAllOptions(optionsInfo), menuElement);
}

async function addHandler(e) {
    e.preventDefault();
    let form = e.currentTarget;
    let data = new FormData(form);
    let text = data.get('text');
    let newOption = {text,}

    let postResponse = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newOption)
    });

    if(postResponse.ok) {
        let result = await postResponse.json();
        optionsInfo.push(result)
        //console.log(optionsInfo);
        render(templateAllOptions(optionsInfo), menuElement);
        form.reset();
    }
}
