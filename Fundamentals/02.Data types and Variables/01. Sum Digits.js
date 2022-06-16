
// 14-01-21 passed judge
function sumDigits(numberInput) {
    let num = numberInput;
    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.trunc(num / 10);
    }
    console.log(sum)
}

// 14-01-21  passed judge
function sumDigits1(numberInput){
    let num = numberInput;
    let numString = num.toString();
    let sum = 0;
    for(let i = 0; i < numString.length; i++){
        sum += Number(numString[i]);
    }
    console.log(sum);
}

sumDigits(245678)