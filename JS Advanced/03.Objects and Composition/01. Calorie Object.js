function solve1(arr) {
    let result = {}

    arr.forEach((el, i) => {
        if (i % 2 === 0) {
            result[el] = undefined;
        } else {
            result[arr[i - 1]] = Number(el);
        }
    });

    return result;
}

function solve(arr) {
    let result = {}

    arr.forEach((el, i) => {
        if(i % 2 === 0) {
            result[el] = Number(arr[i + 1]);
        }
    })

    return result;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']))