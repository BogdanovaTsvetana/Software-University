let productCatalogueExample = {
    'D': {'divan': 20, 'dk oo': 5},
    'A': {'Apple': 50, 'Apd': 40}
}
// -----------
function solveTs(inputArr) {
    let productCatalogue = {};
    for (let index = 0; index < inputArr.length; index++) {
        let [productName, productPrice] = inputArr[index].split(' : ');
        productPrice = Number(productPrice);
        let initial = productName[0].toUpperCase(); // firstLetter

        if (productCatalogue[initial] === undefined) {
            productCatalogue[initial] = {}; //     productCatalogue { 'D': {} }
        }

        productCatalogue[initial][productName] = productPrice //  productCatalogue { 'D': {'Deodorant': 10, 'Dnm': 20} }
    }
   
    return Object.entries(productCatalogue)    // [['D': {'Deod': 10, 'Dnm': 20}], ['A': {'Apple': 10, 'Abv': 20}], ]
        .sort((a, b) => a[0].localeCompare(b[0]))  // [['A': {'Apple': 10, 'Abv': 20}], ['D': {'Deod': 10, 'Dnm': 20}],  ]
        .map(letterGroup => {                          // letterGroup   ['A': {'Apple': 10, 'Abv': 20}]
            let stringProducts = Object.entries(letterGroup[1])    //  el[1]    [[Apple', 10],[Abv', 20], ]
                .sort((a, b) => a[0].localeCompare(b[0]))  // [[Abv', 20],[Apple', 10], ]
                .map(x => `  ${x[0]}: ${x[1]}`)   //  x   ` apple : 10`
                .join('\n')                         // '  Anti-Bug Spray: 15
                                                    //    Apple: 1.25
                                                    //    Appricot: 20.4'
            let stringLetterGroup = `${letterGroup[0]}\n${stringProducts}`;   /*A
                                                                    Anti-Bug Spray: 15
                                                                    Apple: 1.25
                                                                    Appricot: 20.4 */          
            return stringLetterGroup;
        })
        .join('\n');
}



console.log(solveTs(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]))
