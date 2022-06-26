function carWash(input) {
    let value = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        switch (command) {
            case 'soap':
                value += 10;
                break;
            case 'water':
                value *= 1.20;
                break;
            case 'vacuum cleaner':
                value *= 1.25;
                break;
            case 'mud':
                value *= 0.90;
                break;
        }
    }

    return `The car is ${value.toFixed(2)}% clean.`
}


function carWash1(input) {
    let value = 0;
    let operation = null;  // change value

    for (let i = 0; i < input.length; i++) {
        let command = input[i];

        switch (command) {
            case 'soap':
                operation = v => (v += 10);
                break;
            case 'water':
                operation = v => (v *= 1.2);
                break;
            case 'vacuum cleaner':
                operation = v => (v *= 1.25)
                break;
            case 'mud':
                operation = v => (v *= 0.90);
                break;
        }

        value = operation(value);
    }

    return `The car is ${value.toFixed(2)}% clean.`
}

console.log(carWash1(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']))