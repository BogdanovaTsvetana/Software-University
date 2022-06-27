function houseParty(input) {
    let list = [];
    for (let element of input) {
        let command = element.split(' ');
        let name = command[0];

        if (!command.includes('not')) {
            if (!list.includes(name)) {
                list.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (list.includes(name)) {
                list = list.filter(n => n != name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    for (el of list) {
        console.log(el);
    }
}


houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
])

