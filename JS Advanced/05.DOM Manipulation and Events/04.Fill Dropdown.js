/* Your task is to take values from input fields with ids "newItemText" and "newItemValue". Then you should create and append an <option> to the <select> with id "menu".
•	Your function should take the values of newItemText and newItemValue. After that you should create a new option element and set its textContent and its value to the newly taken ones. 
•	Once you have done all of that, you should append the newly created option as a child to the select item with id "menu".
•	Finally, you should clear the value of the two input fields. */
// 20-06-21, passed judge
function addItem1() {
    let inputTextElement = document.getElementById('newItemText');
    let inputValueElement = document.getElementById('newItemValue');
    let selectElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = inputTextElement.value;
    optionElement.value = inputValueElement.value;

    inputTextElement.value = '';
    inputValueElement.value = '';

    selectElement.appendChild(optionElement);
}
