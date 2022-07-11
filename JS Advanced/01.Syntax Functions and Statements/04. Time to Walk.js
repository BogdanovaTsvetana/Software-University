function solve(steps, footprintLength, speed) {
    let distanceM = footprintLength * steps; // in m
    let speedInMins = speed / 60 * 1000; //  m/min
    let timeInMins = distanceM / speedInMins; // mins
    for (let i = 1; i < distanceM; i++) {
        if (i % 500 === 0) {
            timeInMins++;
        }
    }

    let mins = Math.trunc(timeInMins);
    let sec = 0;
    if (timeInMins % mins !== 0) {
        sec = Math.round((timeInMins - mins) * 60);
    }

    let hours = 0;
    if (mins >= 60) {
        hours = Math.floor(mins / 60);
        mins = mins - hours * 60;
    }

    console.log(`${hours.toString().padStart(2, 0)}:${mins.toString().padStart(2, 0)}:${sec.toString().padStart(2, 0)}`)
}

solve(4000, 0.60, 5)