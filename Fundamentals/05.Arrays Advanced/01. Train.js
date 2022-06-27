function train1(arr) {
    let wagons = arr.shift().split(' ').map(Number);
    let capacity = Number(arr.shift());

    for (let line of arr) {
        let command = line.split(' ');

        if (line.includes('Add')) {
            let wag = Number(command[1]);
            wagons.push(wag);
        } else {
            let wag = Number(command[0]);
            for (let i = 0; i < wagons.length; i++) {

                if ((wag + wagons[i]) <= capacity) {
                    wagons[i] += wag;
                    break;
                }
            }
        }
    }

    console.log(wagons.join(' '));
}


train1(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
])

