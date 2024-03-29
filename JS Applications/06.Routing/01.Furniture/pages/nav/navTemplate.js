import { html } from "./../../node_modules/lit-html/lit-html.js";
import { ifDefined} from './../../node_modules/lit-html/directives/if-defined.js';

export let navTemplate = (navInfo) => html`
<a id="catalogLink" href="/dashboard" 
class=${ifDefined(navInfo.currentPage.startsWith('/dashboard') 
    ? 'active'  
    : undefined)}>Dashboard</a>

${navInfo.isLoggedin
? html`
 <div id="user">
        <a id="createLink" href="/create" 
        class=${ifDefined(navInfo.currentPage.startsWith('/create') 
    ? 'active'  
    : undefined)}>Create Furniture</a>

        <a id="profileLink" href="/my-furniture" 
        class=${ifDefined(navInfo.currentPage.startsWith('/my-furniture') 
    ? 'active'  
    : undefined)}>My Publications</a>

        <a id="logoutBtn" href="javascript:void(0)">Logout</a>
    </div>`
: html`
<div id="guest">
    <a id="loginLink" href="/login" class=${ifDefined(navInfo.currentPage.startsWith('/login') 
    ? 'active'  
    : undefined)}>Login</a>
    
    <a id="registerLink" href="/register" class=${ifDefined(navInfo.currentPage.startsWith('/register') 
    ? 'active'  
    : undefined)}>Register</a>
</div> `
}
`;

/*
<div id="user">
                <a id="createLink" href="create.html" class="active">Create Furniture</a>
                <a id="profileLink" href="my-furniture.html" >My Publications</a>
                <a id="logoutBtn" href="javascript:void(0)">Logout</a>
            </div>
            <!-- <div id="guest">
                <a id="loginLink" href="login.html">Login</a>
                <a id="registerLink" href="register.html">Register</a>
            </div> -->

            */

  