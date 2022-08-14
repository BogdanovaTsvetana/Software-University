import { html } from './../../node_modules/lit-html/lit-html.js';

export const templateOption = (option) => html`
    <option .value=${option._id}>${option.text}</option>
`;

export const templateAllOptions = (options) => html`
    ${options.map(o => templateOption(o))}
`;


