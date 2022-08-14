
import {html} from '../../node_modules/lit-html/lit-html.js';
import {ifDefined} from '../../node_modules/lit-html/directives/if-defined.js';

const templateTown = (town) => html`
<li class=${ifDefined(town.className)}>${town.name}</li>
`;

export const templateAllTowns = (towns) => html`
<ul>
${towns.map(t => templateTown(t))}
</ul>
`;