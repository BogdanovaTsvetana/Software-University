import authService from "./../../services/authService.js";
import { loginTemplate } from "./loginTemplate.js";


// za proba start
// async function getView(context) {
//     console.log('You are in login')
//     console.log(context)
// }
// export default {
//     getView
// }
// za proba end

// todo
async function getView(context) {
    async function submitHandler(e) {
        e.preventDefault();
    
        let form = e.currentTarget;
        let formData = new FormData(form);
        
        let email = formData.get('email').trim();
        let password = formData.get('password').trim();
            
        

        if ( email == '' || password == '' ) {
            window.alert(`All fields are required`);
            return;
        } 

        let user = {
            email,
            password,
        }

        await authService.login(user);
        
        context.page.redirect('/dashboard')
        console.log('LOGGED')   // to del
    }

    console.log(context)    // to del
    let templateResult = loginTemplate(submitHandler);
    context.renderView(templateResult);
}



export default {
    getView
}

