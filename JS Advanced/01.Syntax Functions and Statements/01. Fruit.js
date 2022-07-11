function solve(fruit, gr, pricePerKg) {
    let money = gr / 1000 * pricePerKg;
    return `I need $${money.toFixed(2)} to buy ${(gr / 1000).toFixed(2)} kilograms ${fruit}.`
}

console.log(solve('orange', 2500, 1.80));

function solve1(arg1, arg2, arg3) {
    let sumLength = arg1.length + arg2.length + arg3.length;
    let average = Math.floor(sumLength / 3);

    return `${sumLength}\n${average}`;
}

console.log(solve1('chocolate', 'ice cream', 'cake'))