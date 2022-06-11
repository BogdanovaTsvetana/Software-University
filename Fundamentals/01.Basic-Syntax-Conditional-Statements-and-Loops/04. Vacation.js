//  passed judge 100/100
function vacation(arg1, arg2, arg3){
    let numPeople = arg1;
    let type = arg2;
    let day = arg3;
    let price = 0;

    if(type === 'Students'){
        if(day === 'Friday'){
           price =  numPeople * 8.45;
        }else if(day === 'Saturday'){
            price =  numPeople * 9.80;
        }else if(day === 'Sunday'){
            price =  numPeople * 10.46;
        }

        if(numPeople >= 30){
            price *= 0.85;
        }
    } else if(type === 'Business'){
        if(day === 'Friday'){
            price =  numPeople * 10.90;
         }else if(day === 'Saturday'){
             price =  numPeople * 15.60;
         }else if(day === 'Sunday'){
             price =  numPeople * 16;
         }

         if(numPeople >= 100){
             price = (price / numPeople ) * ( numPeople - 10);
         }
    } else if(type === 'Regular'){
        if(day === 'Friday'){
            price =  numPeople * 15;
         }else if(day === 'Saturday'){
             price =  numPeople * 20;
         }else if(day === 'Sunday'){
             price =  numPeople * 22.5;
         }

         if(numPeople >= 10 && numPeople <= 20){
             price *= 0.95;
         }
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}

vacation(40,
    "Regular",
    "Saturday")