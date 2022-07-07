function solve(input) {
    let result = 'Bought furniture:';
    let sum = 0;
    
    for (const line of input) {
        let regex = />>(?<name>[A-Za-z]+)<<(?<price>[\d]+(\.[\d]+)?)!(?<count>[\d]+)/;  
        let match = regex.exec(line);

        if (match) {
            result += `\n${match.groups.name}`;
            sum += Number(match.groups.price) * Number(match.groups.count);
        }
    }

    result += `\nTotal money spend: ${sum.toFixed(2)}`;
    return result;
}

console.log(solve(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']))
