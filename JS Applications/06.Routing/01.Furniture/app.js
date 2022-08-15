import page from './node_modules/page/page.mjs';
import dashboardPage from './pages/dashboard/dashboardPage.js';
import rendering from './render/rendering.js';
import nav from './pages/nav/nav.js';
import loginPage from './pages/login/loginPage.js';
import registerPage from './pages/login/registerPage.js'

let navContainerElement = document.getElementById('nav-bar');

let dashboardContainerElement = document.getElementById('container');
rendering.initialize(dashboardContainerElement, navContainerElement);

page('/index.html', '/dashboard');
page('/', '/dashboard');


page('/dashboard', rendering.contextDecorate, nav.getView, dashboardPage.getView);
page('/login', rendering.contextDecorate, nav.getView, loginPage.getView);
page('/register', rendering.contextDecorate, nav.getView, registerPage.getView);


console.log(page)


page.start();