function minerTask(input) {
    let mine = {};

    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!mine.hasOwnProperty(resource)) {
            mine[resource] = 0;
        }

        mine[resource] += quantity;
    } // {Gold: 155, Silver: 10, Copper: 17}

    return Object.keys(mine)
        .map(key => `${key} -> ${mine[key]}`)
        .join('\n')
}

console.log(minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]))

