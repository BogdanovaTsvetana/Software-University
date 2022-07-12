function solve1(arr) {
    let newArr = [];
    arr.forEach(el => {
        if (el >= newArr[newArr.length - 1] || newArr.length === 0) {
            newArr.push(el);
        }
    })

    return newArr;
}


function solve2(arr) {
    let newArr = [arr.shift()];
    arr.forEach(el => {
        let currentBigest = newArr[newArr.length - 1];
        if (el >= currentBigest) {
            newArr.push(el);
        }
    })

    return newArr;
}

console.log(solve1([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]))

