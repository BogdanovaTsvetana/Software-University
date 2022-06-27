function sorting2(arr) {
    let newArr = [];
    arr.sort((a, b) => b - a)

    while (arr.length > 0) {
        let biggest = arr.splice(0, 1);
        let smallest = arr.splice(arr.length - 1)
        newArr.push(biggest[0]);
        newArr.push(smallest[0]);
    }
    console.log(newArr.join(' '));
}


sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])