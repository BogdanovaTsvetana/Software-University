function solve(word, text) {
    text = text.toLowerCase().split(' ');  

    if (text.includes(word.toLowerCase())) {
       return word;
    } 
    
    return `${word} not found!`;
}

console.log(solve('python',
'JavaScript is the best programming language'))