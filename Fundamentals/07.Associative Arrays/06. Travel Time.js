function travelTime1(input) {
    let travelingObj = {};
    // fill in the Obj
    input.forEach(line => {
        let [country, town, cost] = line.split(' > ');

        if (!travelingObj.hasOwnProperty(country)) {
            travelingObj[country] = {};
        }

        if (!travelingObj[country].hasOwnProperty(town)) {
            travelingObj[country][town] = cost;
        }

        travelingObj[country][town] = Math.min(travelingObj[country][town], cost);
    })

    // sort
    let countriesArrEntries = Object.entries(travelingObj)
        .map(x => [x[0], Object.entries(x[1])])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => a[1][1] - b[1][1]);

    // print
    countriesArrEntries.forEach(kvp => {
        let result = `${kvp[0]} -> `;

        kvp[1].forEach(town => {
            result += `${town[0]} -> ${town[1]} `;
        });
        console.log(result);
    })
}



function travelTime(input) {
    let travelingObj = {};
    // fill in the Obj
    input.forEach(line => {
        let [country, town, cost] = line.split(' > ');

        if (!travelingObj.hasOwnProperty(country)) {
            travelingObj[country] = {};
        }

        if (!travelingObj[country].hasOwnProperty(town)) {
            travelingObj[country][town] = cost;
        }

        travelingObj[country][town] = Math.min(travelingObj[country][town], cost);
    })

    // sort
    let countriesArrEntries = Object.entries(travelingObj)
        .map(x => [x[0], Object.entries(x[1])])
        .sort((a, b) => a[0].localeCompare(b[0]))
        .sort((a, b) => a[1][1] - b[1][1]);

    // print
    for (let kvp of countriesArrEntries) {
        let country = kvp[0];
        let towns = kvp[1];
        let result = `${country} -> `;

        for (let town of towns) {
            result += `${town[0]} -> ${town[1]} `;
        }
        console.log(result);
    }
}

travelTime1([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])

