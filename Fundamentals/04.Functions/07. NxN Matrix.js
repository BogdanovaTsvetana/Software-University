function nXnMatrix(integer){
    let n = integer;
    for(let i = 0; i < n; i++){
        let currentRow = '';
        for(let j = 0; j < n; j++){
            currentRow += n + ' ';
        }
        console.log(currentRow);
    }
}

nXnMatrix(7)

