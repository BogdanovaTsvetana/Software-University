//  passed judge  100 / 100
function solve(input) {
    let rooms = input
        .shift()
        .split('|');

    let health = 100;
    let coins = 0;
    let room = 0;
    let isWin = true;

    for (let line of rooms) {
        let [itemMonster, number] = line.split(' ');
        number = Number(number);
        room++;

        if (itemMonster === 'potion') {
            let healed = Math.min(number, (100 - health));      // !!
            health += healed;
            console.log(`You healed for ${healed} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (itemMonster === 'chest') {
            coins += number;
            console.log(`You found ${number} coins.`)

        } else {
            health -= number;

            if (health > 0) {
                console.log(`You slayed ${itemMonster}.`);
            } else {
                console.log(`You died! Killed by ${itemMonster}.`);
                console.log(`Best room: ${room}`);
                isWin = false;
                break;
            }

        }
    }

    if (isWin) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}


solve(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);

/* 
Input	    Output
["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]	

You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 coins.
You died! Killed by boss.
Best room: 6

["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]	

You slayed cat.
You healed for 10 hp.
Current health: 100 hp.
You slayed orc.
You found 10 coins.
You slayed snake.
You found 110 coins.
You've made it!
Coins: 120
Health: 65   */