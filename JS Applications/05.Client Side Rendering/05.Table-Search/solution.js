import {
  render
} from './../node_modules/lit-html/lit-html.js';
import {
  templateBody
} from './templates/templateTable.js';

let tbodyElement = document.getElementById('tbody');
let searchFieldElement = document.getElementById('searchField');
let url = 'http://localhost:3030/jsonstore/advanced/table';
let allStudentsInfo = [];
loadData();

function solve() {
  document.querySelector('#searchBtn').addEventListener('click', onClick);

  function onClick() {
    allStudentsInfo.filter(r => (r.className)).forEach(r => {
      (delete r.className)
    });

    // allStudentsInfo.forEach(r => {
    //   if (r.className) {
    //     delete r.className
    //   }
    // });

    let searchText = searchFieldElement.value.toLowerCase();
    console.log(searchText)  //
    console.log(allStudentsInfo) //

    let machedRows = allStudentsInfo.filter(r => (
      r.firstName.toLowerCase().includes(searchText) ||
      r.lastName.toLowerCase().includes(searchText) ||
      r.email.toLowerCase().includes(searchText) ||
      r.course.toLowerCase().includes(searchText)
    ));

    machedRows.forEach(r => (r.className = 'select'));
    render(templateBody(allStudentsInfo), tbodyElement);

    console.log(machedRows) //
    searchFieldElement.value = '';
  }
}

solve();

async function loadData() {
  let getResponse = await fetch(url);
  let result = await getResponse.json();
  allStudentsInfo = Object.values(result);
  console.log(allStudentsInfo)    //
  render(templateBody(allStudentsInfo), tbodyElement);
}

/*
"firstName": "John",
        "lastName": "Dan",
        "email": "john@john-dam.com",
        "course": "JS-CORE",
        "_id": "50537fbe-5d7e-44bf-a90f-69383c3b5bf4"
        */