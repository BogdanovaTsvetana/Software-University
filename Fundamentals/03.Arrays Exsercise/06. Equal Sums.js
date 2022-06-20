//    passed judge  100 /100
function solve(arr) {
    let areEqual = false;
    let elementIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let j = i + 1; j < arr.length; j++) {
            rightSum += arr[j];
        }

        for (let j = i - 1; j >= 0; j--) {
            leftSum += arr[j];
        }

        if (leftSum === rightSum) {
            areEqual = true;
            elementIndex = i;
        }
    }

    if (areEqual) {
        console.log(elementIndex);
    } else {
        console.log('no')
    }

}

solve([1, 2])