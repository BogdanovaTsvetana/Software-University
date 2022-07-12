function solve1(arr, rotations) {

    for(let i = 0; i < rotations % arr.length; i++) {  // !!!!
        let element = arr.pop();
        arr.unshift(element);
    }

    return arr.join(' ');
}


console.log(solve1(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15))