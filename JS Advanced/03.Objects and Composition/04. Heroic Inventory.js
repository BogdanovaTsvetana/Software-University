function solve(input) {
    let result = [];
    input.forEach(el => {
        let [name, level, items] = el.split(' / ');
       
        if(items){
            items = items.split(', ');
        } else {
            items = [];
        }

        let data = {
            name,
            level: Number(level),
            items
        }
        result.push(data);
    })

    return JSON.stringify(result);
}


console.log(solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']))
