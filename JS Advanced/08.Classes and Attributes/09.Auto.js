function solve(input) {
    let storage = {};

    input.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (storage.hasOwnProperty(carBrand)) {
            if (storage[carBrand].hasOwnProperty(carModel)) {
                producedCars = producedCars + storage[carBrand][carModel];
            }

            storage[carBrand][carModel] = producedCars;

        } else {
            storage[carBrand] = {
                [carModel]: producedCars
            };
        }
    });

    return Object.entries(storage)
        .map(c => {
            let stringModels = Object.entries(c[1])
                .map(m => `###${m[0]} -> ${m[1]}`)
                .join('\n');

            return `${c[0]}\n${stringModels}`;
        })
        .join('\n');
}

function solve1(input) {
    let register = new Map();

    input.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (register.has(carBrand)) {
            let carBrandOld = register.get(carBrand);

            if (carBrandOld.hasOwnProperty(carModel)) {
                producedCars = producedCars + carBrandOld[carModel];
            }

            carBrandOld[carModel] = producedCars;

        }
    })


}

console.log(solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]))

