function sortBy2Criteria1(input) {
    function compareFunction(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }

    input.sort(compareFunction);

    for(let el of input){       
        console.log(el);
    }  

    // console.log(input.join('/n'))   
}


function sortBy2Criteria(input) {
    function compareFunction(a, b) {
        if (a.length > b.length) {
            return 1;
        } else if (a.length < b.length) {
            return -1;
        } else {
            return a.localeCompare(b);
        }
    }

    let resul = input.sort(compareFunction)

    for(let el of result){
        console.log(el);
    }  
}

sortBy2Criteria1(["alpha", "beta", "gamma"])

//  words.sort((a, b) => a.localeCompare(b));