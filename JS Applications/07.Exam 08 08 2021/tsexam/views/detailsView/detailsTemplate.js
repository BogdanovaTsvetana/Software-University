import { html } from './../../node_modules/lit-html/lit-html.js';


export let detailsTemplate = (item, deleteHandler, isOwner, likeHandler, canLike, bookLikes) => html`
 
 <section id="details-page" class="details">
            <div class="book-information">
                <h3>${item.title}</h3>
                <p class="type">Type: ${item.type}</p>
                <p class="img"><img src=${item.imageUrl}></p>
                <div class="actions">
                    <!-- Edit/Delete buttons ( Only for creator of this book )  -->
                    

    ${isOwner
      ? html`  
     <a class="button" href="/edit/${item._id}">Edit</a>
     <a class="button" href="javascript:void(0);" @click=${deleteHandler}>Delete</a>
      `
      : html``}  

                    <!-- Bonus -->
                    <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                    <!-- ( for Guests and Users )  -->
                    
                     ${canLike
                    ?  html`
                    <a class="button" href="javascript:void(0);" @click=${likeHandler}>Like</a>
                     ` 
                    : html`
                     <div class="likes">
                        <img class="hearts" src="/images/heart.png">
                        <span id="total-likes">Likes: ${bookLikes}</span>
                    </div>
                     ` 
                     }
                    
  
                </div>
            </div>
            <div class="book-description">
                <h3>Description:</h3>
                <p>${item.description}</p>
            </div>
        </section> 
 
`;



