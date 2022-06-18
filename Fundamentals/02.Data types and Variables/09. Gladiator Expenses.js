// passed judge, 100 / 100
function solve(lostInput, helmetInput, swordInput, shieldInput, armourInput) {
    let lostFightsCount = lostInput;
    let helmetPrice = helmetInput;
    let swordPrice = swordInput;
    let shieldPrice = shieldInput;
    let armourPrice = armourInput;
    let expenses = 0;
    let shieldBrakesCount = 0;

    for (let i = 1; i <= lostFightsCount; i++) {
        if (i % 2 === 0) {
            expenses += helmetPrice;
        }

        if (i % 3 === 0) {
            expenses += swordPrice;
        }

        if (i % 2 === 0 && i % 3 === 0) {
            shieldBrakesCount++;
            expenses += shieldPrice;

            if (shieldBrakesCount % 2 === 0) {  
                expenses += armourPrice;
            }
        }

    }

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}

solve(23,
    12.50,
    21.50,
    40,
    200)