import {navTemplate} from './navTemplate.js';
import authService from '../../services/authService.js';

function getView(context, next) {
    
    let navInfo = {
        isLoggedIn: authService.isLoggedIn(),
        currentPage: context.pathname
    }
    let templateResult = navTemplate(navInfo);
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}


