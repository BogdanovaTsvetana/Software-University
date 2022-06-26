function perfectNumber(number) {
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    // if (number === sum || number === (sum / 2)) {
    //     return "We have a perfect number!";
    // } else {
    //     return "It's not so perfect.";
    // }

    return (number === sum || number === (sum / 2)) ? "We have a perfect number!" : "It's not so perfect.";
}

console.log(perfectNumber(1236498));