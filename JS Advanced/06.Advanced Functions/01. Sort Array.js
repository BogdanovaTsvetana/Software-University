function solve(arr, str) {

    let obj = {
        asc,
        desc
    }

    return obj[str](arr);

    function asc(array) {
        return array.sort((a, b) => a - b);
    }

    function desc(array) {
        return array.sort((a, b) => b - a);
    }
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))