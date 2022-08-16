import {html} from './../../node_modules/lit-html/lit-html.js';
import {ifDefined} from './../../node_modules/lit-html/directives/if-defined.js'

// proba start 1
// export let navTemplate = () => html`
// <div>PROBA</div>
// `;
// proba start 2

// todo
export let navTemplate = ({
    addClass,
    isLoggedIn,
    email
}) => html`

<nav class="navbar">
    <section class="navbar-dashboard">
        <a href="/dashboard">Dashboard</a>
    
        ${isLoggedIn ? loggedTemplate(addClass, email) : guestTemplate(addClass)}                       <!-- Guest users -->
                    
                    <!-- Logged-in users -->
                    
        </section>
</nav>      
           
`;

let guestTemplate = (addClass) => html`

<div id="guest">
    <a class="button" href="/login">Login</a>
    <a class="button" href="register">Register</a>
</div>

`;

let loggedTemplate = (addClass, email) => html`

<div id="user">
    <span>Welcome, ${email}</span>
        <a class="button" href="/profile">My Books</a>
        <a class="button" href="/create">Add Book</a>
        <a class="button" href="/logout">Logout</a>
</div>    

`;

