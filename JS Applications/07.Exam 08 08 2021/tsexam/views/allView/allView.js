import services from "./../../services/services.js";
import { allTemplate, noListingTemplate } from "./allTemplate.js";


// za proba start 1
// async function getView(context) {
//     console.log(context)
//     console.log('You are in HOME VIEW')
// }
// export default {
//     getView
// }
// za proba end 1

//za proba start 2
// async function getView(context) {
//     console.log(context)
//     let templateResult = allTemplate();
//     context.renderView(templateResult);
// }

// export default {
//     getView
// }
// za proba end 2

// todo
async function getView(context) {
    // console.log(context)     //  to del
    // let allItems = await services.getAll();
    // let templateResult = homeTemplate(allItems);
    // context.renderView(templateResult);

   // other
    console.log(context)     //  to del
    let allItems = await services.getAll();
    console.log(allItems)

   // if no listing
   if ( allItems.length > 0) {
    let templateResult = allTemplate(allItems);
    context.renderView(templateResult);
   } else {
    let templateResult = noListingTemplate();
    context.renderView(templateResult);
   }

    
}

export default {
    getView
}

