function attachEvents() {
    let phonebookUlElement = document.getElementById('phonebook');
    let loadBtnElement = document.getElementById('btnLoad');
    loadBtnElement.addEventListener('click', loadPhonebook);
    let createBtnElement = document.getElementById('btnCreate');
    createBtnElement.addEventListener('click', createPhone);
    let personInputElement = document.getElementById('person');
    let phoneInputElement = document.getElementById('phone');


    let baseUrl = `http://localhost:3030/jsonstore/phonebook`;

    async function loadPhonebook() {
        try {
            let phonebookResponse = await fetch(baseUrl);
            let phonebookData = await phonebookResponse.json();
            console.log(phonebookData);

            phonebookUlElement.querySelectorAll('li').forEach(li => li.remove());

            Object.keys(phonebookData).forEach(key => {
                createLiPhoneElement(key, phonebookData[key])
            })
        } catch (err) {
            console.error(err);
        }
    }

    async function createPhone() {
        try {
            if ( personInputElement.value == '' || phoneInputElement.value == '') {
                return
            }
    
            let message = {
                person: personInputElement.value,
                phone: phoneInputElement.value
            }

            let createResponse = await fetch(baseUrl, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(message)
            })
            
            personInputElement.value = '';
            phoneInputElement.value = '';
            loadPhonebook();
    
        } catch(err) {
            console.error(err);
        }
        
    }

    async function deletePhone(e) {
        try {
            let buttonEl = e.target;
            let liEl = buttonEl.parentElement;
            let id = liEl.dataset.id;
           
            let deleteResponse = await fetch(`${baseUrl}/${id}`, {
                method: 'Delete'
            });
    
            liEl.remove();
        } catch(err) {
            console.error(err);
        }
    }

    function createLiPhoneElement(id, infoPhone) {
        let liPhoneElement = document.createElement('li');
        liPhoneElement.textContent = `${infoPhone.person}: ${infoPhone.phone}`;
        liPhoneElement.dataset.id = id;

        let deleteButtonEl = document.createElement('button');
        deleteButtonEl.textContent = 'Delete';
        deleteButtonEl.addEventListener('click', deletePhone);

        liPhoneElement.appendChild(deleteButtonEl)
        phonebookUlElement.appendChild(liPhoneElement)
        console.log(liPhoneElement)
    }
}

attachEvents();