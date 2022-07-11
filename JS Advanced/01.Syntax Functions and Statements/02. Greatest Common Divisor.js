function solve(firstNum, secondNum) {
    let commonDivisor = Math.min(firstNum, secondNum);
    let isGCD = false;

    for (let i = commonDivisor; i > 0; i--) {
        if (firstNum % commonDivisor === 0 && secondNum % commonDivisor === 0) {
            isGCD = true;
            break;
        }
        commonDivisor--;
    }
    return commonDivisor;
}

console.log(solve(2154, 458))