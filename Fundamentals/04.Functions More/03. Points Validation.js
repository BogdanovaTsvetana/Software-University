function pointsValidation(input) {
    let pointAx1 = input[0];
    let pointAy1 = input[1];
    let pointBx2 = input[2];
    let pointBy2 = input[3];

    function findingDistanceToZero(x, y) {
        let sumOftheSquaresOfLengths = Math.pow(x, 2) + Math.pow(y, 2);
        let distance = Math.sqrt(sumOftheSquaresOfLengths);
        return distance;
    }

    function findingDistanceBetweenPoints(x1, y1, x2, y2) {
        let som = Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2);
        let distanceBetweenPoints = Math.sqrt(som);
        return distanceBetweenPoints;
    }

    function isValidDistanceToZero(x, y) {
        let distanceToZero = findingDistanceToZero(x, y);

        if (Number.isInteger(distanceToZero)) {
            return `{${x}, ${y}} to {0, 0} is valid`;
        } else {
            return `{${x}, ${y}} to {0, 0} is invalid`;
        }
    }

    function isValidDistanceBetweenPoints(x1, y1, x2, y2) {
        let distanceBetweenPoints = findingDistanceBetweenPoints(x1, y1, x2, y2);

        if (Number.isInteger(distanceBetweenPoints)) {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is valid`;
        } else {
            return `{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`;
        }
    }

    let isValidDistanceToZeroOfPointA = isValidDistanceToZero(pointAx1, pointAy1);
    console.log(isValidDistanceToZeroOfPointA);

    let isValidDistanceToZeroOfPointB = isValidDistanceToZero(pointBx2, pointBy2);
    console.log(isValidDistanceToZeroOfPointB);

    let isValidDistanceBetweenOurPoints = isValidDistanceBetweenPoints(pointAx1, pointAy1, pointBx2, pointBy2);
    console.log(isValidDistanceBetweenOurPoints);

}

pointsValidation([2, 1, 1, 1])