function solve(arr) {
    let result = true;
    let sumFirstRow = arr[0].reduce((a, x) => a + x, 0);
    for(let i = 0; i < arr.length; i++) {
        let sumCurrRow = arr[i].reduce((a, x) => a + x, 0);
        if(sumCurrRow !== sumFirstRow) {
            result = false;
            // break;
        }

        let sumCorrColumn = 0;
        for(let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j])
        }
        
    }
    //return sumfirstRow
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]))
