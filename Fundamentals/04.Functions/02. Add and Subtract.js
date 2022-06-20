//  passed judge
function sumAndSubtracts(x,y,z){
    function sum(a, b){
        return a + b;
    }

    return sum(x,y) - z;
}

console.log(sumAndSubtracts(23, 6, 10));

// passed judge
function sumAndSubtracts1(x,y,z){
    function sum(a, b){
        return a + b;
    }

    let result = sum(x, y);
    return result - z;
}

let final = sumAndSubtracts1(23, 6, 10);
console.log(final)