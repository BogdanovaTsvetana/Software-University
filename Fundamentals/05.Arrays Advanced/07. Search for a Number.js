function solve(arr1, arr2){
    let [x, y, z] = arr2;
    let newArr = arr1.splice(0, x);
    newArr.splice(0, y); 
    let filteredArr = newArr.filter(el => el === z);
    let count = filteredArr.length;

    let output = `Number ${z} occurs ${count} times.`;
    return output;
}

console.log(solve([5, 2, 3, 4, 1, 6],
    [5, 2, 3]))
