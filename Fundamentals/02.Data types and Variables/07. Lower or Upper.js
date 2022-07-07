
function lowerOrUpper(charInput){
    let character = charInput;

}

// teacher's 3 May 2020, passed judge
function lowerOrUpper3(character){
    let lowerCaseVersion = character.toLowerCase();
    let upperCaseVersion = character.toUpperCase();

    if(character === lowerCaseVersion){
        console.log('lower-case');
    } else if(character === upperCaseVersion){
        console.log('upper-case');
    }
}

// teacher's 2 May 2020, passed judge
function lowerOrUpper2(character){

    console.log(character === character.toLowerCase() ? 'lower-case' : 'upper-case');
}

// teacher's  1 May 2020, passed judge
function lowerOrUpper1(character){
    let charValue = character.charCodeAt(0);

    if(charValue >= 65 && charValue <= 90){
        console.log('upper-case');
    } else if(charValue >= 97 && charValue <= 122){
        console.log('lower-case');
    }
}



lowerOrUpper2('mok')

