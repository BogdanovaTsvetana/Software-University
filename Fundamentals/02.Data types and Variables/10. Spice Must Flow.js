// passed judje, 100 / 100
function solve(yieldInput) {
    let yield = yieldInput;
    let spice = 0;
    let yieldDaylyDrop = 10;
    let daylyCrewConsum = 26;
    let finalCrewConsum = 26;
    let days = 0;

    while (yield >= 100) {
        spice += (yield - daylyCrewConsum);
        days++;
        yield -= yieldDaylyDrop;

    }

    if (spice >= finalCrewConsum) {
        spice -= finalCrewConsum;
    }

    console.log(days);
    console.log(spice);

}

solve(111)