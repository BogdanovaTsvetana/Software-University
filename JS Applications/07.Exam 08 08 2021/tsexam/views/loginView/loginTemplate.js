import { html } from './../../node_modules/lit-html/lit-html.js';

// za proba start
// export let loginTemplate = (submitHandler) => html`
//  <div>loginView Template</div>
// `;
// za proba end

// todo
export let loginTemplate = (submitHandler) => html`

<section id="login-page" class="login">
            <form @submit=${submitHandler} id="login-form" action="" method="">
                <fieldset>
                    <legend>Login Form</legend>
                    <p class="field">
                        <label for="email">Email</label>
                        <span class="input">
                            <input type="text" name="email" id="email" placeholder="Email">
                        </span>
                    </p>
                    <p class="field">
                        <label for="password">Password</label>
                        <span class="input">
                            <input type="password" name="password" id="password" placeholder="Password">
                        </span>
                    </p>
                    <input class="button submit" type="submit" value="Login">
                </fieldset>
            </form>
        </section>

`;

