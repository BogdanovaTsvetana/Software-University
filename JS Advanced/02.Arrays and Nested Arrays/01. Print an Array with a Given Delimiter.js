function solve(arr, delimiter) {
    let newArr = [];
    arr.forEach(x => {
        newArr.push(x);
        newArr.push(delimiter);
    });

    newArr.pop();
    console.log(newArr.join(''));
}

console.log(solve2(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'
    ],
    '_'))