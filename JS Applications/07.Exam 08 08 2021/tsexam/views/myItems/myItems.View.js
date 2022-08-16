import services from "./../../services/services.js";
import authService from "./../../services/authService.js";
import { myItemsTemplate, noItemsTemplate } from "./myItemsTemplate.js";

// za proba start 1
// async function getView(context) {
    
//     console.log(context)
//     console.log('You are in MY ITEMS VIEW')
// }
// export default {
//     getView
// }
// za proba end 1

//za proba start 2
// async function getView(context) {
//     console.log(context)
//     let templateResult = myItemsTemplate();
//     context.renderView(templateResult);
// }

// export default {
//     getView
// }
// za proba end 2

// todo

async function getView(context) {
    let userId = authService.getUserId();
    console.log(`userId:` + userId)  // to del
    console.log(context)   // to del
    let myItems = await services.getMyItems(userId);
    console.log(`my Items: ` + myItems)

    if ( myItems.length > 0 ) {
        let templateResult = myItemsTemplate(myItems);
    context.renderView(templateResult);
    } else {
        let templateResult = noItemsTemplate();
    context.renderView(templateResult);
    }

    // let templateResult = myItemsTemplate(myItems);
    // context.renderView(templateResult);

}

export default {
    getView
}

