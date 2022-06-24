//  passed judge
function oddAndEvenSum(numberInput){
    let number = numberInput;
    let oddSum = 0;
    let evenSum = 0;

    while(number > 0){
    let gg = number % 10;
    gg % 2 === 0 ? evenSum += gg : oddSum += gg;

    number = Math.trunc(number / 10);
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(oddAndEvenSum(3495892137259234));



