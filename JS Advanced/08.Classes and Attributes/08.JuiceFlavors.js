function solve(input) {
    let store = {};
    let bottlesStore = new Map();

    input.forEach(line => {
        let [juice, quantity] = line.split(' => ');
        quantity = Number(quantity);

        if (!store.hasOwnProperty(juice)) {
            store[juice] = 0;
        }
        store[juice] += quantity;
        if (store[juice] >= 1000) {
            return makeBottles(juice);
        }
    })

    function makeBottles(juice) {
        let left = store[juice] % 1000;
        let bottles = (store[juice] - left) / 1000;
        store[juice] = left;

        if (!bottlesStore.has(juice)) {
            bottlesStore.set(juice, 0);
        }
        let currQuantity = bottlesStore.get(juice);
        let newQuantity = currQuantity + bottles;
        bottlesStore.set(juice, newQuantity);
    }

    return Array.from(bottlesStore.entries())
        .map(line => `${line[0]} => ${line[1]}`)
        .join('\n');
}


console.log(solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'
]))
