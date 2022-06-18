//   passed judje.  100 /100
function calculator(number1Input, operatorInput, number2Input) {
    let number1 = number1Input;
    let operator = operatorInput;
    let number2 = number2Input;
    let result = 0;

    switch (operator) {
        case '+': result = number1 + number2; break;
        case '-': result = number1 - number2; break;
        case '*': result = number1 * number2; break;
        case '/': result = number1 / number2; break;
        case '%': result = number1 % number2; break; 
    }

    console.log(result.toFixed(2))
}

calculator(10,
    '%',
    8)