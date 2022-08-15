import {render} from './../node_modules/lit-html/lit-html.js';


let navContainer = undefined;
let viewContainer = undefined;

function initialize(viewContainerDomEl, navContainerDomEl) {
    viewContainer = viewContainerDomEl;
    navContainer = navContainerDomEl;
    
}

async function renderNav(templateResult) {
    render(templateResult, navContainer)
}

async function renderView(templateResult) {
    render(templateResult, viewContainer)
}

function contextDecorate(context, next) {
    context.renderView = renderView;
    context.renderNav = renderNav;
    next();
}


export default {
    initialize,
    renderNav,
    renderView,
    contextDecorate,
}