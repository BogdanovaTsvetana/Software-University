function passValidator(pass){

    function isValidLength(pass){
        if(pass.length >= 6 && pass.length <= 10){
            return true;
        } else {
            return 'Password must be between 6 and 10 characters';
        }
    }
    
    function consistLettAndDigg(pass){
        let isValidPass = true;
        for(let i = 0; i < pass.length; i++){
            let isValid = true;
            let asciiNum = pass[i].charCodeAt(0);
            if((asciiNum >= 48 && asciiNum <= 57) || 
            (asciiNum >= 65 && asciiNum <= 90) || 
            (asciiNum >= 97 && asciiNum <=122)){
                isValid = true;
            } else {
                isValid = false;
                isValidPass = false;
                break;
            }
        }

        if(isValidPass){
            return true;
        } else{
            return 'Password must consist only of letters and digits';
        }
    }
    
    function atLeast2(pass){
        let countDigits = 0;
        for(let i = 0; i < pass.length; i++){
            let asciiNum = pass.charCodeAt(i);
            if(asciiNum >= 48 && asciiNum <= 57){
                countDigits++;
            }
        }
    
        if(countDigits >= 2){
            return true;
        } else{
            return 'Password must have at least 2 digits';
        }
    }
    

    if(isValidLength(pass) == true && consistLettAndDigg(pass) == true && atLeast2(pass) == true){
        console.log('Password is valid')
    } 
    
    if(isValidLength(pass) !== true){
        console.log(isValidLength(pass));
    }

    if(consistLettAndDigg(pass) !== true){
        console.log(consistLettAndDigg(pass));
    }

    if(atLeast2(pass) !== true){
        console.log(atLeast2(pass));
    }
}

passValidator('MyPass123')

//  85/100
function passValidator1(input){
    let pass = input;
    let isLongEnough = false;
    let doesConsistLettAndDigg = false;
    let haveAtLeast2Dijits = false;
    let countDigits = 0;

    if(pass.length >= 6 && pass.length <= 10){
        isLongEnough = true;
    } else {
        console.log('Password must be between 6 and 10 characters');
    }

    for(let i = 0; i < pass.length; i++){
        let asciiNum = pass.charCodeAt(i);
        if((asciiNum >= 48 && asciiNum <= 57) || 
        (asciiNum >= 65 && asciiNum <= 90) || 
        (asciiNum >= 97 && asciiNum<=122)){
            doesConsistLettAndDigg = true;
        } else{
            console.log('Password must consist only of letters and digits');
            break;
        }
    }

    for(let i = 0; i < pass.length; i++){
        let asciiNum = pass.charCodeAt(i);
        if(asciiNum >= 48 && asciiNum <= 57){
            countDigits++;
        }
    }

    if(countDigits >= 2){
        haveAtLeast2Dijits = true;
    } else{
        console.log('Password must have at least 2 digits');
    }

    if(isLongEnough && doesConsistLettAndDigg && haveAtLeast2Dijits){
        console.log('Password is valid')
    }
}

//passValidator1('MyPass123')
