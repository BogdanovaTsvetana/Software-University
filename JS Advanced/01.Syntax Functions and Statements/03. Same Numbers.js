function solve1(integer) {
    let isAllDigitsSame = true;
    let sum = 0;
    let lastDigit = integer % 10;

    while (integer > 0) {
        let currentDigit = integer % 10;
        sum += currentDigit;
        if (currentDigit !== lastDigit) {
            isAllDigitsSame = false;
        }

        // lastDigit = currentDigit;
        integer = Math.floor(integer / 10);
    }

    console.log(isAllDigitsSame);
    console.log(sum)
}


function solve(integer) {
    let string = integer.toString();
    let isAllDigitsSame = true;
    let firstCh = string[0];
    let sum = Number(firstCh);

    for (let i = 1; i < string.length; i++) {
        if (string[i] != firstCh) {
            isAllDigitsSame = false;
        }

        sum += Number(string[i]);
    }

    console.log(isAllDigitsSame)
    console.log(sum)
}


solve1(1234)