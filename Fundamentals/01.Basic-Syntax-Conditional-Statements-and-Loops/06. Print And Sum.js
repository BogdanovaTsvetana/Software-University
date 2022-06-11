//   passed judge   100/100
function printAndSum(arg1, arg2) {
    let num1 = arg1;
    let num2 = arg2;
    let result = '';
    let sum = 0;

    for (let i = num1; i <= num2; i++) {
        result += i + ' ';
        //  result += `${i} `;
        sum += i;
    }

    console.log(result);
    console.log(`Sum: ${sum}`);
}

printAndSum(0, 26)