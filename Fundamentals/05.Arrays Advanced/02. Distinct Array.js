function distinctArrays1(input){
    let newArr = [];
    
    for(let el of input){
        if(!newArr.includes(el)){
            newArr.push(el);
        }
    }

    console.log(newArr.join(' '));
}


distinctArrays1([20, 8, 12, 13, 4, 4, 8, 5])