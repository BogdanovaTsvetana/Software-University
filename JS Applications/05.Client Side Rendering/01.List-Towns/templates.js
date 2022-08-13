import {html} from '../../node_modules/lit-html/lit-html.js';

const templateTown = (town) => html`<li>${town}</li>`;

const templateAllTowns = (towns) => html`
    <ul>
    ${towns.map(t => templateTown(t))}
    </ul>
`;

export default templateAllTowns;
