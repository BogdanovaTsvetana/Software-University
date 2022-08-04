function lockedProfile() {
    let mainElement = document.getElementById('main');

    fetch(`http://localhost:3030/jsonstore/advanced/profiles`)
        .then(res => res.json())
        .then(allProfiles => {

            Object.entries(allProfiles).forEach((x, i) => {
                let profile = x[1];
                let username = profile.username;
                let email = profile.email;
                let age = profile.age;
                let countUser = i + 1;
                // console.log(idP, username, email, age);
                let currProfile = createProfile(username, email, age, countUser);
            })
        })

    function createProfile(username, email, age, countUser) {
        let profileDivEl = createEl('div');  // to append at the end
        profileDivEl.classList.add('profile');

        let imgEl = createEl('img', profileDivEl);
        imgEl.src = "./iconProfile2.png";  
        imgEl.classList.add('userIcon');

        let lockLabelEl = createEl('label', profileDivEl);
        lockLabelEl.textContent = 'Lock';

        let lockInputEl = createEl('input', profileDivEl, 'radio', `user${countUser}Locked`, 'lock'); // 
        lockInputEl.checked = true;

        let unlockLabelEl = createEl('label', profileDivEl);
        unlockLabelEl.textContent = 'Unlock';

        let unlockInputEl = createEl('input', profileDivEl, 'radio', `user${countUser}Locked`, 'unlock'); // 

        let brEl = createEl('br', profileDivEl); 
        let hr1El = createEl('hr', profileDivEl); 

        let usernameLabelEl = createEl('label', profileDivEl);
        usernameLabelEl.textContent = username;

        let usernameInputEl = createEl('input', profileDivEl, 'text', `user${countUser}Username`, username) //
        usernameInputEl.disabled = true;
        usernameInputEl.readOnly = true; 

        let hiddenFieldsDivEl = createEl('div', profileDivEl);
        hiddenFieldsDivEl.id = `user${countUser}HiddenFields`;

        let hr2El= createEl('hr', hiddenFieldsDivEl);
        let emailLabelEl= createEl('label', hiddenFieldsDivEl);
        emailLabelEl.textContent = 'Email:';

        let emailInputEl = createEl('input', hiddenFieldsDivEl, 'email', `user${countUser}Email`, email); // 
        emailInputEl.disabled = true;
        emailInputEl.readOnly = true;

        let ageLabelEl = createEl('label', hiddenFieldsDivEl);
        ageLabelEl.textContent = 'Age:';
        
        let ageInputEl = createEl('input', hiddenFieldsDivEl, 'email', `user${countUser}Age`, age); // 
        ageInputEl.disabled = true;
        ageInputEl.readOnly = true;

        let buttonProfEl = createEl('button', profileDivEl);
        buttonProfEl.textContent = 'Show more';
        buttonProfEl.addEventListener('click', buttonF);
            
        mainElement.appendChild(profileDivEl); 
    }

    function buttonF(e) {
        let button = e.target;
        let profile = button.parentElement;
        let radioButton = profile.querySelector('input:checked');
        console.log(radioButton)
       
        if(radioButton.value === 'unlock') {
            let hiddenFieldElement = button.previousElementSibling;
            hiddenFieldElement.style.display = hiddenFieldElement.style.display === 'block' 
                ? 'none'
                : 'block';
            button.textContent = button.textContent === 'Show more'
                ? 'Hide it'
                : 'Show more';
        }
    }

    function createEl(typeOfEl, parent, type, name, value) {
        let element = document.createElement(typeOfEl);

        if (type) {
            element.type = type;
        }

        if (name) {
            element.name = name;
        }

        if (value) {
            element.value = value;
        }

        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }
}