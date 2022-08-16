import services from "./../../services/services.js";
import { createTemplate } from "./createTemplate.js";

// za proba start 1
// async function getView(context) {
//     console.log(context)
//     console.log('YOU ARE IN CREATE')
// }
// export default {
//     getView
// }
// za proba end  1

// za proba start 2
// async function getView(context) {
//     console.log(context)
//     let templateResult = createTemplate();
//     context.renderView(templateResult);
// }

// export default {
//     getView
// }
// za proba end 2


//todo
async function getView(context) {

    let form = {
                submitHandler,
            }
    
    let templateResult = createTemplate(form);
    context.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        //form.isInvalide = {};

        let title = formData.get('title');
        let description = formData.get('description');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');
           

            let newItem = {
            title,
            description,
            imageUrl,
            type,
            }
    
            let data = Object.values(newItem)
        //console.log(data)
        if ( data.some(x => x == '') ) {
        //console.log('All fields are required')
        window.alert('All fields are required');
        return;
        }

       

        await services.createItem(newItem); 
        context.page.redirect('/dashboard');
    } 

    
}

export default {
    getView
}

