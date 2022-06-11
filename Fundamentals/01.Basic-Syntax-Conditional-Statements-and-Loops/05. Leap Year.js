/*  Write a JS function to check whether a year is leap. Leap years are either divisible by 4 but not by 100 or are divisible by 400. Return the result like examples below:
Examples
Input	Output
1984	yes
2003	no
4   	yes         */
// 11-01-21 passed judge
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