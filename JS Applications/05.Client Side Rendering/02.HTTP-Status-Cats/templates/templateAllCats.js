import {
    html
} from '../../node_modules/lit-html/lit-html.js';

// id, statusCode, statusMessage, imageLocation
let templateCatCard = (cat, showStatusHandler) => html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" @click=${showStatusHandler}>Show status code</button>
            <div class="status" style="display: none" id=${cat.id}>
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>
`;

let templateAllCats = (cats, showStatusHandler) => html`
    <ul>
        ${cats.map(c => templateCatCard(c, showStatusHandler))}
    </ul>
`;

export default templateAllCats;
