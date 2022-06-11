//  passed judge   100 / 100
function leapYear(arg){
    let year = arg;
    let result = '';
    if(year % 4 === 0 && year % 100 !== 0){
        result = 'yes';
    } else if(year % 400 === 0){
        result = 'yes';
    } else{
        result = 'no';
    }
    console.log(result);
}

leapYear(4)