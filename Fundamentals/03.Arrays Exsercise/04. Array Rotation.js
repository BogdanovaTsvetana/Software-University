// 24-02-21,  passed judge ,  100 / 100
function solve1(arr, number){
    let rotations = number % arr.length;
    let splicedPart = arr.splice(0, rotations);
    arr.push(...splicedPart);
    return arr.join(' ');
}

// 24-02-21,  passed judge  100 /100
function solve2(arr, number){
    let rotations = number % arr.length;

    for(let i = 0; i < rotations; i++){
        let cutPart = arr.shift();
        arr.push(cutPart);
    }
    
    return arr.join(' ');
}

// 24-02-21,  passed judge 100 / 100
function solve2(arr, number){
    
    for(let i = 0; i < number; i++){
        let cutPart = arr.shift();
        arr.push(cutPart);
    }
    
    return arr.join(' ');
}


console.log(solve2([2, 4, 15, 31], 5))