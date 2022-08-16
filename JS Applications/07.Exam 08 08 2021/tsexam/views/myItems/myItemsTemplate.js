import { html } from './../../node_modules/lit-html/lit-html.js';

// za proba start
// export let myItemsTemplate = () => html`
//  <div>Cuci my items template </div>
// `;
// za proba end

// todo
export let noItemsTemplate = () => html`
    
    <p class="no-books">No books in database!</p>    
`;

export let oneItemTemplate = ({
    _id,   // 
    title,    //   ////   // 
    imageUrl,   //
    type,  // 

}) => html`

<li class="otherBooks">
    <h3>${title}</h3>
    <p>Type: ${type}</p>
    <p class="img"><img src=${imageUrl}></p>
    <a class="button" href="/details/${_id}">Details</a>
</li>

`;

export let myItemsTemplate = (data) => html`   

<section id="my-books-page" class="my-books">
            <h1>My Books</h1>
            <!-- Display ul: with list-items for every user's books (if any) -->
            <ul class="my-books-list">
            ${data.map(x => oneItemTemplate(x))}
            </ul>

            <!-- Display paragraph: If the user doesn't have his own books  -->
           
        </section>

    
`;

