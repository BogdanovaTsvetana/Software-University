const solve1 = (arr) => {
    let result = [];
    let currentNum = 1;

    for (let command of arr) {
        
        if (command === 'add') {
            result.push(currentNum)
        } else if (command === 'remove') {
            result.pop();
        }

        currentNum++;
    }

    return result.length != 0 ? result.join('\n') : "Empty";
    // return result.length > 0 ? result.join('\n') : "Empty";
}


const solve = (arr) => {
    let result = [];
    let currentNum = 1;

    for (let command of arr) {
        
        if (command === 'add') {
            result.push(currentNum)
        } else if (command === 'remove') {
            result.pop();
        }

        currentNum++;
    }

    if (result.length > 0) {
        return result.join('\n');
    } else {
        return "Empty";
    }
}

console.log(solve2(['add', 
'add', 
'add', 
'add']))
