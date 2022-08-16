import services from "./../../services/services.js";
import { editTemplate } from "./editTemplate.js";

// za proba start 1
// async function getView(context) {
//     console.log(context)
//     console.log('You are in edit')
// }
// export default {
//     getView
// }
// za proba end 1

//za proba start 2
// async function getView(context) {
//     console.log(context)
//     let templateResult = editTemplate();
//     context.renderView(templateResult);
// }

// export default {
//     getView
// }
// za proba end 2

//todo
async function getView(context) {
    let id = context.params.id;
    console.log(id)     //  to del
    let item = await services.getOneItem(id);
    console.log(item)     //  to del

    let form = {
        item,
        submitHandler,
    }

    let templateResult = editTemplate(form);
    context.renderView(templateResult);

    async function submitHandler(e) {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        //form.isInvalide = {};

        let title = formData.get('title');
        let imageUrl = formData.get('imageUrl');
        let type = formData.get('type');
        let description = formData.get('description');

        let newItem = {
            title,
            description,
            imageUrl,
            type,
            
        }

        let data = Object.values(newItem)
        console.log(data)
        if ( data.some(x => x == '') ) {
            console.log('All fields are required')
            window.alert('All fields are required');
            context.renderView(templateResult);
            return;
        }

        

        await services.editItem(newItem, id);
        context.page.redirect(`/details/${id}`);
        console.log('EDIT DONE')     //  to del

    } 

}

export default {
    getView
}

