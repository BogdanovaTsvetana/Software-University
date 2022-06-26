function numberModification(numberInput) {
    let number = numberInput;

    function findAverageValue(x) {
        let sumOfDigits = 0;
        let countOfDigits = 0;
        let averageValue = 0;

        while (x > 0) {
            sumOfDigits += x % 10;
            x = Math.trunc(x / 10);
            countOfDigits++;
        }

        averageValue = sumOfDigits / countOfDigits;
        return averageValue;
    }

    function modifyNumber(y, average) {
        while (average <= 5) {
            y = y.toString();
            y += 9;
            y = Number(y);
            average = findAverageValue(y);
        }

        return y;
    }

    let initialAverageValue = findAverageValue(number);

    if (initialAverageValue > 5) {
        return number;
    } else {
        let modifiedNumber = modifyNumber(number, initialAverageValue);
        return modifiedNumber;
    }

}

console.log(numberModification(5835));