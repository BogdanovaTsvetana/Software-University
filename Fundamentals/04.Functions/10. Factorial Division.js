function factorialDivision(num1, num2) {

    function findFactorial(x) {
        let factorial = 1;

        for (let i = x; i > 0; i--) {
            factorial *= i;
        }

        return factorial;
    }

    let factorialNum1 = findFactorial(num1);
    let factorialNum2 = findFactorial(num2);

    let division = (a, b) => a / b;

    let result = division(factorialNum1, factorialNum2);
    return result.toFixed(2);
}

console.log(factorialDivision(6, 2))