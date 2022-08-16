import { html } from './../../node_modules/lit-html/lit-html.js';

// / za proba start
// export let allTemplate = () => html`
//  <div>Cuci ALL template </div>
// `;
// // za proba end

// todo   // details btn  !!!!!
export let allTemplate = (data) => html`   

<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
    <ul class="other-books-list">
                
    ${data.map(x => itemTemplate(x))}

    </ul>
            <!-- Display paragraph: If there are no books in the database -->
       
    </section>

`;
// href="/details/${_id}"  !!
export let itemTemplate = ({
    _id,   // 
    title,    //   //
    description, //   // 
    imageUrl,   //
    type, // 
}) => html`

<li class="otherBooks">
                    <h3>${title}</h3>
                    <p>Type: ${type}</p>
                    <p class="img"><img src=${imageUrl}></p>
                    <a class="button" href="/details/${_id}">Details</a>
                </li>

`;

export let noListingTemplate = () => html`

<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
            <!-- Display ul: with list-items for All books (If any) -->
    
            <!-- Display paragraph: If there are no books in the database -->
            <p class="no-books">No books in database!</p>
    </section>


 
`;

