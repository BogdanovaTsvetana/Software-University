import { html } from './../../node_modules/lit-html/lit-html.js';
import { ifDefined } from './../../node_modules/lit-html/directives/if-defined.js';

export const templateRow = (row) => html`
    <tr class=${ifDefined(row.className)}>
        <td>${row.firstName} ${row.lastName}</td>
        <td>${row.email}</td>
        <td>${row.course}</td>
    </tr>
`;

export const templateBody = (bodyInfo) => html`
    ${bodyInfo.map(r => templateRow(r))}
`;


/*
"firstName": "John",
        "lastName": "Dan",
        "email": "john@john-dam.com",
        "course": "JS-CORE",
        "_id": "50537fbe-5d7e-44bf-a90f-69383c3b5bf4"
        */