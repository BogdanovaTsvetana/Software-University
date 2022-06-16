
//  passed judge  100 / 100
function townInfo(arg1, arg2, arg3) {
    let nameOfTown = arg1;
    let polulation = arg2;
    let area = arg3;

    let output = `Town ${nameOfTown} has population of ${polulation} and area ${area} square km.`;
    console.log(output);
}

townInfo('Sofia',
    1286383,
    492)