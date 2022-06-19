//  passed judge  100 / 100
function solve(input) {
    let newArr = [];
    let originalArrSum = 0;
    let modifiedArrSum = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] % 2 === 0) {
            newArr[i] = input[i] + i;
        } else {
            newArr[i] = input[i] - i;
        }
        originalArrSum += input[i];
        modifiedArrSum += newArr[i];
    }

    console.log(newArr);
    console.log(originalArrSum);
    console.log(modifiedArrSum);
}

solve1([5, 15, 23, 56, 35])