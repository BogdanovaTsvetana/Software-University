function loadingBar(number) {
    let count = number / 10;
    let percents = '';
    let dots = '';

    for (let i = 0; i < count; i++) {
        percents += '%';
    }

    for (let i = 0; i < 10 - count; i++) {
        dots += '.';
    }

    let result = '';
    let result2 = '';

    if (number !== 100) {
        result = `${number}% [${percents}${dots}]`;
        result2 = 'Still loading...'
    } else {
        result = '100% Complete!';
        result2 = `[${percents}]`;
    }

    console.log(result);
    console.log(result2);
}

loadingBar(50);