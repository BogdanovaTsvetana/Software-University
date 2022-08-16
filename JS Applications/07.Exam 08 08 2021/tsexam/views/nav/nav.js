 import authService from "./../../services/authService.js";
 import { navTemplate } from "./navTemplate.js"

function getView(context, next){
    console.log(context);     // to del
    let currentView = context.pathname;

    let navInfo = {
        
        addClass(href){
            if (currentView.startsWith(href)) {
                return "active";
            } else {
                return undefined;
            }
        },
        isLoggedIn: authService.isLoggedIn(),
        email: authService.getEmail(),
    }
   
    let templateResult = navTemplate(navInfo);
    //let templateResult = navTemplate();
    
    context.renderNav(templateResult);
    next();
}

export default {
    getView
}

