function store1(stock, ordered) {
    let shop = {}

    for (let i = 0; i < stock.length; i+=2) {
        const element = stock[i];
        shop[element] = Number(stock[i + 1]);

    }

    for (let i = 0; i < ordered.length; i += 2) {
        const element = ordered[i];

        // if(shop.hasOwnProperty(element)){
        //     shop[element] += Number(ordered[i + 1]);
        // } else{
        //     shop[element] = Number(ordered[i + 1]);
        // }

        if (!shop.hasOwnProperty(element)) {
            shop[element] = 0;
        }

        shop[element] += Number(ordered[i + 1]);
    }

    for (const key in shop) {
        console.log(`${key} -> ${shop[key]}`);
    }

}



store1([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])
