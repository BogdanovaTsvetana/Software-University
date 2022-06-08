// passed judge 100/100
function rounding(numToBeRoundedInput, precisionInput){
    let numToBeRounded = numToBeRoundedInput;
    let precision = precisionInput;
    let roundedNum = 0;

    if(precision > 15){
        precision = 15;
    }

    roundedNum = numToBeRounded.toFixed(precision);
    let result  = parseFloat(roundedNum);

    console.log(result)
}

rounding(3.1415926535897932384626433832795,2)

