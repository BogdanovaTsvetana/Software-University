function partyTime(input) {
    let listObj = {
        vip: [],
        regular: [],
    }

    // fill the list
    let line = input.shift();
    while (line !== 'PARTY') {
        let name = line;        // diff 
        let char = name[0];

        if (isNaN(char)) { // not a num
            listObj.regular.push(name);
        } else {
            listObj.vip.push(name);
        }

        line = input.shift();
    };

    // guests are coming,  del from list the guests who came
    input.forEach(guest => {
        if (listObj.vip.includes(guest)) {
            let index = listObj.vip.indexOf(guest);
            listObj.vip.splice(index, 1);
        } else if (listObj.regular.includes(guest)) {
            let index = listObj.regular.indexOf(guest);
            listObj.regular.splice(index, 1);
        }
    });

    // print
    let count = listObj.vip.length + listObj.regular.length;   // diff
    let guestsWhoDidNotCome = listObj.vip.concat(listObj.regular);  // diff
    return `${count}\n${guestsWhoDidNotCome.join('\n')}`;       // diff
}


partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])