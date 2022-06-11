//  passed judge  100/100
function solve(arg) {
    let num = arg;

    for (let row = 1; row <= num; row++) {
        let currentRow = '';
        for (let col = 1; col <= row; col++) {
            currentRow += row + ' ';
        }
        console.log(currentRow);
    }
}

solve(6)