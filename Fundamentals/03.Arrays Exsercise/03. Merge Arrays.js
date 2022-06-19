// passed judge 100 / 100
function solve(arr1, arr2) {

    let output = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i % 2 === 0) {
            output[i] = Number(arr1[i]) + Number(arr2[i]);
        } else {
            output[i] = arr1[i] + arr2[i];
        }
    }

    let result = '';
    for (let i = 0; i < output.length; i++) {
        if (i === output.length - 1) {
            result += output[i]
        } else {
            result += output[i] + ' - ';
        }
    }
    console.log(result)
}

solve(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])