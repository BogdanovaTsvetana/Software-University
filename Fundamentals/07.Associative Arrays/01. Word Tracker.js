function solve2(input) {
    let wordsToFindObj = {};

    input
        .shift()
        .split(' ')
        .forEach(w => {
            wordsToFindObj[w] = 0;
        });

    input.forEach(w => {
        if (wordsToFindObj.hasOwnProperty(w)) {
            wordsToFindObj[w]++;
        }
    });

    return Object.keys(wordsToFindObj)
        .sort((a, b) => wordsToFindObj[b] - wordsToFindObj[a])
        .map(key => `${key} - ${wordsToFindObj[key]}`)
        .join('\n')
}



function solve(input) {
    let wordsToSearchArr = input.shift().split(' ');

    let wordsToSearch = {};
    wordsToSearchArr.forEach(word => {

        wordsToSearch[word] = 0;
    });

    input.forEach(word => {
        if (wordsToSearch.hasOwnProperty(word)) { //  if(wordsToSearch[word]) не работи, когато 
            // wordsToSearch[word] = 0;
            let oldCount = wordsToSearch[word];
            let newCount = oldCount + 1;
            wordsToSearch[word] = newCount;
        }
    })

    let entries = Object.entries(wordsToSearch);
    let sortedEntries = entries.sort((a, b) => {
        return b[1] - a[1];
    })
    sortedEntries.forEach(kvp => console.log(`${kvp[0]} - ${kvp[1]}`));
}


console.log(solve2([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]))