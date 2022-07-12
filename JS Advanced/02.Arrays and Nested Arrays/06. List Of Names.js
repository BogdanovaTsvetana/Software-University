function solve(arr) {
    return arr
        .sort((a, b) => a.localeCompare(b))
        .map((el, i) => el = `${i + 1}.${el}`)
        .join('\n');
}

console.log(solve(["John", "Bob", "Christina", "Ema"]))