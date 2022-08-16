import { render } from './../node_modules/lit-html/lit-html.js';


let mainElement = document.getElementById('site-content')   //
let navigationElement = document.getElementById('site-header');     //

  
async function renderNav(templateResult){
    render(templateResult, navigationElement);
}

async function renderView(templateResult){
    render(templateResult, mainElement);
}


function decorateContext(context, next) {
    context.renderNav = renderNav;
    context.renderView = renderView;
    next();
}

export default {
    decorateContext,
    renderNav,
    renderView
}