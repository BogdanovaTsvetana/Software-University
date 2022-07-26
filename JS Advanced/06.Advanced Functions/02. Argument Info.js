function solve(...input) {
    let tally = {};

    input.forEach(line => {
        let type = typeof line;

        if (!tally.hasOwnProperty(type)) {
            tally[type] = 0;
        }

        tally[type]++;
        console.log(`${type}: ${line}`);
    })

    return Object.entries(tally)
        .sort((a, b) => b[1] - a[1])
        .map(el => el = `${el[0]} = ${el[1]}`)
        .forEach(x => console.log(x))
}

solve('cat', 42, 'dog', function () {
    console.log('Hello world!');
}, 45, 6)
