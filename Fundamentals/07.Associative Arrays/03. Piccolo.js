function piccolo1(input){
    let parkingObj = {};

    input
        .forEach(line => {
            let [direction, carNumber] = line.split(', ');

            if(direction === 'IN'){
                parkingObj[carNumber] = 1;
            } else {
                delete parkingObj[carNumber];
            }
        });

    let result = Object.keys(parkingObj)
        .sort((a, b) => a.localeCompare(b))
        .join('\n');

    return result ? result : 'Parking Lot is Empty';
    
}

console.log(piccolo1(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]))

