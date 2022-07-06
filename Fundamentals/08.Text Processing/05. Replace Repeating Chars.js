function solve1(input) {
    let result = '';

    for (const ch of input) {
        if (!result.endsWith(ch)) {
            result = result + ch;
        }
    }

    console.log(result)
}



solve('qqqwerqwecccwd')