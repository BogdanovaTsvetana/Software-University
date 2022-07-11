/*  Write a program that receives 6 parameters which are a number and a list of five operations. Perform the operations sequentially by starting with the input number and using the result of every operation as starting point for the next one. Print the result of every operation in order. The operations can be one of the following:
•	chop - divide the number by two
•	dice - square root of number
•	spice - add 1 to number
•	bake - multiply number by 3
•	fillet - subtract 20% from number
The input comes as 6 string elements. The first element is the starting point and must be parsed to a number. The remaining 5 elements are the names of the operations to be performed.
The output should be printed on the console. */
// 01-05-21,  passed judge, easy
function solve(num, arg1, arg2, arg3, arg4, arg5) {
    num = Number(num);
    let commands = [arg1, arg2, arg3, arg4, arg5];
    for (let i = 0; i < commands.length; i++) {
        let toDo = commands[i];
        switch (toDo) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num = num * 0.80;
                break;
        }
        console.log(num);
    }

}

solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')
/* Input	                                            Output
'32', 'chop', 'chop', 'chop', 'chop', 'chop'    	16
8
4
2
1

Input	                                                Output
'9', 'dice', 'spice', 'chop', 'bake', 'fillet'      	3
4
2
6
4.8     */