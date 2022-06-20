//  passed judge, 100 / 100
function solve(arr, magicNumber){

    for(let i = 0; i < arr.length; i++){
        
        for(let j = i + 1; j < arr.length; j++){
            let sum = arr[i] + arr[j];

            if(sum === magicNumber){
                let otput = `${arr[i]} ${arr[j]}`;
                console.log(otput);
            }
        }
    }
}

solve([14, 20, 60, 13, 7, 19, 8],
    27)

