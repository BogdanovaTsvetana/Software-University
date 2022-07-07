/* You will receive a single string. 
This string is written in PascalCase format. Your task here is to split this string by every word in it. 
Print them joined by comma and space.
Examples
Input	                                Output
'SplitMeIfYouCanHaHaYouCantOrYouCan'	Split, Me, If, You, Can, Ha, Ha, You, Cant, Or, You, Can

'HoldTheDoor'	                        Hold, The, Door

'ThisIsSoAnnoyingToDo'                 	This, Is, So, Annoying, To, Do   */
// 2021, Denitsa, passed judge
function solve(str) {
    let result = [];
    let upperIndex = 0;

    for (let i = 1; i < str.length; i++) {

        if (str[i] === str[i].toUpperCase()) {
            let word = str.substring(upperIndex, i);
            result.push(word);
            upperIndex = i;
        }
    }

    result.push(str.substring(upperIndex));
    console.log(result.join(', '))
}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')