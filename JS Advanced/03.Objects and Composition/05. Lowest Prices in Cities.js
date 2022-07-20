function solve1(input) {
    let productsData = {};
    input.forEach(el => {
        let [town, productType, price] = el.split(' | ');
        price = Number(price);

        if (!productsData.hasOwnProperty(productType)) {
            productsData[productType] = {
                price,
                town
            }
        } else if (productsData.hasOwnProperty(productType) && productsData[productType].hasOwnProperty(town)) {
            productsData[productType].price = price;

        } else if (productsData.hasOwnProperty(productType) && productsData[productType].price > price) {
            productsData[productType].price = price;
            productsData[productType].town = town;
        }
    })

    // return Object.keys(productsData).map(product => {
    //     return `${product} -> ${productsData[product].price} (${productsData[product].town})`
    // }).join('\n');

    return Object.entries(productsData).map(kvp => {
        return `${kvp[0]} -> ${kvp[1].price} (${kvp[1].town})`
    }).join('\n');
}

console.log(solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]))
