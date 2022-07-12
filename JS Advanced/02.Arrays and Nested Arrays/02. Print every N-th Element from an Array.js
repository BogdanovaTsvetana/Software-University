
const solve2 = (arr, step) => {
    return arr.filter((x, i) => i % step === 0);
}


function solve(arr, step) {
    let result = [];

    for (let i = 0; i < arr.length; i += step) {
        result.push(arr[i]);
    }

    return result;
}

console.log(solve2(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2))