function solve(input) {
    let {model, power, color, carriage, wheelsize} = input;

    function getEngine(power) {
        let engine = [{ power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
            ];
        engine.sort((a, b) => a.power - b.power);

        return engine.find(el => el.power >= power);
    }

    function getCarriage(color, carriage) {
        return {
            type: carriage,
            color: color
        }
    }
    
    function getWheels(wheelsize) {
        if(wheelsize % 2 === 0) {
            wheelsize--;
        }
    return [wheelsize, wheelsize, wheelsize, wheelsize];
    }

    let car = {}
        car.model = model;
        car.engine = getEngine(power);
        car.carriage = getCarriage(color, carriage);
        car.wheels = getWheels(wheelsize);

    return car;
}





console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));
