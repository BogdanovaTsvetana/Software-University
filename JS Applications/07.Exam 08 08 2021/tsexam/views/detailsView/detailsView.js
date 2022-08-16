import authService from "./../../services/authService.js";
import services from "./../../services/services.js";
import { detailsTemplate } from "./detailsTemplate.js";


// za proba start
// async function getView(context) {
//     console.log(context)
//     console.log('YOU ARE IN DETAILS')
// }
// export default {
//     getView
// }
// za proba end

// todo

async function getView(context) {
    let bookId = context.params.id;

    
    
    //let item = await services.getOneItem(id);
    //console.log(item)   
    //let userId = authService.getUserId()   
    //console.log(`userId:` + userId)                       //  to del
    //item.imageUrl = item.imageUrl.startsWith('.') ? item.imageUrl.substring(1) : item.imageUrl;  //  !!!!!!
    //let isOwner = userId == item._ownerId;                    // !!
    //let templateResult = detailsTemplate(item, deleteHandler, isOwner);
    //let templateResult = detailsTemplate();
    //context.renderView(templateResult);
    //console.log('DETAILS DONE')     //  to del


    
    let userId = authService.getUserId();
    let item = await services.getOneItem(bookId);
    let isLogged = await authService.isLoggedIn();
    
    console.log(item)
    item.imageUrl = item.imageUrl.startsWith('.') ? item.imageUrl.substring(1) : item.imageUrl;
    let bookLikes = await services.getBookLikes(bookId); 
    let userLikesForBook = await services.getUserLikesForBook(userId, bookId);
    
    console.log(userId, bookId)
    console.log(`bookikes:` + bookLikes)
    console.log(`userLikesForBook:` + userLikesForBook)
    
    let isOwner = userId == item._ownerId;   
    let canLike = false;

    if (isLogged && !isOwner) {
    canLike = true;
    }

    if( Number(userLikesForBook) > 0 || isOwner) {
        canLike = false;
    }

    //<!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->

    let templateResult = detailsTemplate(item, deleteHandler, isOwner, likeHandler, canLike, bookLikes);
    context.renderView(templateResult);
    console.log('DETAILS DONE')     //  to del

    async function likeHandler(e) {
        await services.likeItem(bookId);
        getView(context);  
    }

    async function deleteHandler(e) {
        let confirmed = confirm(`Are you shure?`);
        if(confirmed){
            await services.deleteItem(bookId);
            console.log('deleted')      //  to del
            context.page.redirect('/dashboard');
        }

    }



}

export default {
    getView
}

// old

// async function getView(context) {
//     let id = context.params.id;

//     async function deleteHandler(e) {
//         let confirmed = confirm(`Are you shure?`);
//         if(confirmed){
//             await services.deleteItem(id);
//             console.log('deleted')      //  to del
//             context.page.redirect('/all');
//         }

//     }
    
//     let item = await services.getOneItem(id);
//     console.log(item)   
//     let userId = authService.getUserId()   
//     console.log(`userId:` + userId)                       //  to del
//     item.imageUrl = item.imageUrl.startsWith('.') ? item.imageUrl.substring(1) : item.imageUrl;  //  !!!!!!
//     let isOwner = userId == item._ownerId;                    // !!
//     let templateResult = detailsTemplate(item, deleteHandler, isOwner);
//     //let templateResult = detailsTemplate();
//     context.renderView(templateResult);
//     console.log('DETAILS DONE')     //  to del
// }

// export default {
//     getView
// }