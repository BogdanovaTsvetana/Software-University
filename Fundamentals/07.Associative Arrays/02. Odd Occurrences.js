function solve1(input) {
    let wordsToFindMap = new Map();

    input
        .split(' ')
        .map(w => w.toLowerCase())   //  diff with Denitsa
        .forEach(w => {
            if (!wordsToFindMap.has(w)) {
                wordsToFindMap.set(w, 0);
            }

            wordsToFindMap.set(w, wordsToFindMap.get(w) + 1);
        });

    return Array.from(wordsToFindMap.keys())
        .filter(w => wordsToFindMap.get(w) % 2 !== 0)
        .join(' ');
}



console.log(solve1('Java C# Php PHP Java PhP 3 C# 3 1 5 C#'))

