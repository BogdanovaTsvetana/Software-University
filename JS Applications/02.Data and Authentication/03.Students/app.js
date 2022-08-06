let formElement = document.getElementById('form');
let resultsTbodyElement = document.querySelector('#results tbody');
let submitBtnElement = document.getElementById('submit');
formElement.addEventListener('submit', createStudent);

async function createStudent(e) {
    try {
        e.preventDefault();
    let formEl = e.currentTarget;

    let firstNameInput = formEl.querySelector('input[name="firstName"]');
    let lastNameInput = formEl.querySelector('input[name="lastName"]');
    let facultyNumberInput = formEl.querySelector('input[name="facultyNumber"]');
    let gradeInput = formEl.querySelector('input[name="grade"]');

    if (firstNameInput.value == '' ||
        lastNameInput.value == '' ||
        facultyNumberInput.value == '' ||
        gradeInput.value == '') {
        return;
    }

    let data = new FormData(formEl);

    let message = {
        FirstName: data.get('firstName'),
        LastName: data.get('lastName'),
        FacultyNumber: data.get('facultyNumber'),
        Grade: data.get('grade')
    }

    let url = `http://localhost:3030/jsonstore/students`

    // POST

    let createResponse = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(message)
    });

    firstNameInput.value = '';
    lastNameInput.value = '';
    facultyNumberInput.value = '';
    gradeInput.value = '';

    

    let getResponse = await fetch(url);
    let allStudentsInfo = await getResponse.json();

    resultsTbodyElement.querySelectorAll('tr').forEach(tr => tr.remove());

    Object.keys(allStudentsInfo).forEach(key => {
        createTrStudentEl(key, allStudentsInfo[key])
    });

    } catch(err) {
        console.error(err);
    }
}

function createTrStudentEl(id, infoStudent) {
    let trStudent = document.createElement('tr');

    let tdFirstName = document.createElement('td');
    let tdLastName = document.createElement('td');
    let tdFacultyNumber = document.createElement('td');
    let tdGrade = document.createElement('td');

    tdFirstName.textContent = infoStudent.FirstName;
    tdLastName.textContent = infoStudent.LastName;
    tdFacultyNumber.textContent = infoStudent.FacultyNumber;
    tdGrade.textContent = infoStudent.Grade;

    trStudent.dataset.id = id;

    trStudent.appendChild(tdFirstName);
    trStudent.appendChild(tdLastName);
    trStudent.appendChild(tdFacultyNumber);
    trStudent.appendChild(tdGrade);

    resultsTbodyElement.appendChild(trStudent);
}