import authService from "./../../services/authService.js";
import { registerTemplate } from "./registerTemplate.js";

// za proba start
// async function getView(context) {        
//     console.log(context)
//     console.log('You are in register')
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
        
        let email = formData.get('email');
        let password = formData.get('password');
        let rePass = formData.get('confirm-pass');

        if ( email == '' || password == '' || rePass == '') {
        window.alert(`All fields are required`);
        return;
    } 
    if ( password !== rePass) {
        alert(`The repeated password doesn't match`);
        return;
    }
    

        let user = {
            email,
            password,
        }

        await authService.register(user);
        console.log('registered')
        context.page.redirect('/dashboard')
    }

    console.log('You are in register')
    console.log(context)
    let templateResult = registerTemplate(submitHandler);
    context.renderView(templateResult);
}



export default {
    getView
}


