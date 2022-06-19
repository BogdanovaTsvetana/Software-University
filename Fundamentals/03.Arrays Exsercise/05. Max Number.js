//  passed judge  100 / 100
function solve(arr) {
    let topArr = [];

    for (let i = 0; i < arr.length; i++) {
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                isTop = false;
            }
        }

        if (isTop) {
            topArr.push(arr[i]);
        }
    }

    let output = '';
    for(let el of topArr){
        output += el + ' ';
    }
    console.log(output)
}

solve([41, 41, 34, 20])