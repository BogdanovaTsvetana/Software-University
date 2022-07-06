function solve(text) {
    text = text.split(' ');
    let words = [];

    text.forEach(w => {
        if (w.startsWith('#') && isLetters(w.substring(1)) && w.substring(1) !== '') {
            words.push(w.substring(1));
        }
    });

    function isLetters(str) {
        let isValid = true;

        for (let ch of str) {
            let code = ch.charCodeAt(0);
            if (code < 65 || (code > 90 && code < 97) || code > 122) {
                isValid = false;
                break;
            }
        }
        return isValid;
    }

    return words.join('\n');
}

console.log(solve('Nowadays everyone uses # to tag a #special word in #socialMedia'))