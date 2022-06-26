function palindrome1(input) {
    for (let i = 0; i < input.length; i++) {
        let num = input[i].toString();
        let count = Math.floor(num.length / 2);
        let isPalindrome = true;

        for (let j = 0; j <= count; j++) {
            if (num[j] !== num[num.length - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }
        console.log(isPalindrome)
    }
}

function palindrome2(input) {
    for (let i = 0; i < input.length; i++) {
        let currentNumber = input[i];
        let currentNumberStr = toString(currentNumber);
        let count = Math.ceil(currentNumberStr.length / 2);
        let isPalindrome = true;

        for (let j = 0; j < count; j++) {
            //  currentNumber[j] !== currentNumber[currentNumber.length - 1 - j] ? isPalindrome = false
            if (currentNumberStr[j] !== currentNumberStr[currentNumberStr.length - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }


        console.log(isPalindrome ? 'true' : 'false')
    }
}

palindrome1([123, 323, 421, 121])