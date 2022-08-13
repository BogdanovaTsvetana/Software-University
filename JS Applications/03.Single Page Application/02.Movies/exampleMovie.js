
let exampleSectionElement = document.getElementById('movie-example');
let containerDiv = exampleSectionElement.querySelector('.container');

async function example(id) {
    let url = `http://localhost:3030/data/movies/${id}`;
    let getResponse = await fetch(url);
    let movieInfo = await getResponse.json();
     
    console.log(movieInfo)
    containerDiv.children[0].remove();
    createMovieDetails(movieInfo)
    // description: "d"
    // img: "d"
    // title: "dd"
    // _createdOn: 1626606666137
    // _id: "2fc7ee79-5ab9-42b6-8152-dcf4432b9451"
    // _ownerId: "584bb8de-a96d-4a60-9f6c-eb98f15837d9"

    
}

function createMovieDetails(movieInfo) {
    let divRowEl = document.createElement('div');
    divRowEl.classList.add('row');
    divRowEl.classList.add('bg-light');
    divRowEl.classList.add('text-dark');

    let h1El = document.createElement('h1');
    h1El.textContent = `Movie title: ${movieInfo.title}`;
    divRowEl.appendChild(h1El);

    let col1DivEl = document.createElement('div');
    col1DivEl.classList.add('col-md-8');
    divRowEl.appendChild(col1DivEl);

    let imgEl = document.createElement('img');
    imgEl.classList.add('img-thumbnail');
    imgEl.setAttribute('src', movieInfo.img);
    col1DivEl.appendChild(imgEl);
    

    let col2DivEl = document.createElement('div');
    col2DivEl.classList.add('col-md-4');
    col2DivEl.classList.add('text-center');
    divRowEl.appendChild(col2DivEl)

    let h3El = document.createElement('div');
    h3El.classList.add('my-3');
    h3El.textContent = 'Movie Description';
    col2DivEl.appendChild(h3El);

    let pEl = document.createElement('p');
    pEl.textContent = movieInfo.description;
    col2DivEl.appendChild(pEl);

    //let 1 = document.createElement('button');


    containerDiv.appendChild(divRowEl)
}

function showPage() {
    exampleSectionElement.classList.remove('hidden');
}

function hidePage() {
    exampleSectionElement.classList.add('hidden');
}

export default {
    showPage,
    hidePage,
    example
}