let listTownsInfoExample = [{
        'Town': 'Sofia',
        'Latitude': 42.7,
        'Longitude': 23.32
    },
    {
        'Town': 'Beijing',
        'Latitude': 39.91,
        'Longitude': 116.36
    }
];

function solve(input) {
    let arr = [];
    let [_, townPr, latitudePr, longitudePr] = input.shift().split('|');
    townPr = townPr.trim();
    latitudePr = latitudePr.trim();
    longitudePr = longitudePr.trim();

    function createObj(town, lat, long) {
        let obj = {};
        obj[townPr] = town;
        obj[latitudePr] = lat;
        obj[longitudePr] = long;
        return obj;
    }

    input.forEach(line => {
        let [_, townName, latitude, longitude] = line.split('|');
        townName = townName.trim();
        latitude = Number(latitude.trim()).toFixed(2);
        latitude = Number(latitude)
        longitude = Number(longitude.trim()).toFixed(2);
        longitude = Number(longitude)

        arr.push(createObj(townName, latitude, longitude));
    })
    return JSON.stringify(arr);
}

console.log(solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]))

