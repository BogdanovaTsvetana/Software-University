function getFibonator() {
    let start = [0, 1];

    return function fib() {
        let fibNum = start.slice(start.length - 2).reduce((a, c) => a + c);
        start.push(fibNum);
        return start[start.length - 2]     
       
    }
}


