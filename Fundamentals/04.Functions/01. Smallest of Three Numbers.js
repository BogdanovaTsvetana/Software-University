// passed judge
function smallestOfThree(x, y, z){
    let smallest = Number.MAX_SAFE_INTEGER;

    // if(x < smallest){
    //     smallest = x;
    // }

    // if(y < smallest){
    //     smallest = y;
    // }

    // if(z < smallest){
    //     smallest = z;
    // }

    smallest = smaller(x, smallest);
    smallest = smaller(y, smallest);
    smallest = smaller(z, smallest);

    function smaller(n, small){
        if(n < small){
            small = n;
        }
        return small;
    }

    return smallest;
}

console.log(smallestOfThree(2, 5, 3))

