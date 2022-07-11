function solve(x1, y1, x2, y2) {
    let x1y1TO00 = Math.sqrt(x1 * x1 + y1 * y1);
    let x2y2TO00 = Math.sqrt(x2 * x2 + y2 * y2);
    let distancePoints = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))

    if (Math.trunc(x1y1TO00) / x1y1TO00 === 1) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Math.trunc(x2y2TO00) / x2y2TO00 === 1) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Math.trunc(distancePoints) / distancePoints === 1) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

solve(2, 1, 1, 1)
