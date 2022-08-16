
import renderingMiddleware from './rendering/renderingMiddleware.js';
import authService from './services/authService.js';

import page from './node_modules/page/page.mjs';

import nav from './views/nav/nav.js';

import registerView from './views/registerView/registerView.js';
import loginView from './views/loginView/loginView.js';
import allView from './views/allView/allView.js';
import detailsView from './views/detailsView/detailsView.js';
import createView from './views/createView/createView.js';
import editView from './views/editView/editView.js';
import myItemsView from './views/myItems/myItems.View.js';


console.log(page)  // to dell
console.log(99)
page('/index.html', '/dashboard');
page('/', '/dashboard');
page('/all', '/dashboard');


page('/register', renderingMiddleware.decorateContext, nav.getView, registerView.getView);
page('/login', renderingMiddleware.decorateContext, nav.getView, loginView.getView);
page('/logout', logout);
page('/dashboard', renderingMiddleware.decorateContext, nav.getView, allView.getView);
page('/details/:id', renderingMiddleware.decorateContext, nav.getView, detailsView.getView);
page('/create', renderingMiddleware.decorateContext, nav.getView, createView.getView);
page('/edit/:id', renderingMiddleware.decorateContext, nav.getView, editView.getView);
page('/profile', renderingMiddleware.decorateContext, nav.getView, myItemsView.getView);


async function logout(context) {
    await authService.logout();
    context.page.redirect('/'); 
    console.log('you are logged out')
}

page.start();


