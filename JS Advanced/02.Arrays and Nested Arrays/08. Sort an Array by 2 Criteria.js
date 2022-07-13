function solve(arr) {
    return arr
        .sort((a, b) => {
            if (a.length == b.length) {
                return a.toLowerCase().localeCompare(b.toLowerCase());
            } else {
                return a.length - b.length;
            }
        })
        .join('\n');
}

console.log(solve2(['test',
    'Deny',
    'omen',
    'Default'
]))
