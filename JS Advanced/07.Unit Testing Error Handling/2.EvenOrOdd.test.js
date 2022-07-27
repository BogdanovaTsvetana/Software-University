const isOddOrEven = require('../2.EvenOrOdd');
let { expect} = require('chai');
// function isOddOrEven(string) {
//     if (typeof(string) !== 'string') {
//         return undefined;
//     }
//     if (string.length % 2 === 0) {
//         return "even";
//     }

//     return "odd";
// }

describe('is oddOrEven CUCI', () => {
    it ('Should return undefined when the passed parameter is NOT a string', () => {
        expect(isOddOrEven(2)).to.equal(undefined);
        expect(isOddOrEven(undefined)).to.equal(undefined);
        expect(isOddOrEven(null)).to.equal(undefined);
        expect(isOddOrEven(true)).to.equal(undefined);
        expect(isOddOrEven(false)).to.equal(undefined);
        expect(isOddOrEven(2)).to.equal(undefined);
    });

    it('Should retur even when the length of the string is even', () => {
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('12')).to.equal('even');
        expect(isOddOrEven('1234')).to.equal('even');
    });

    it('Should retur odd when the length of the string is odd', () => {
        expect(isOddOrEven('1')).to.equal('odd');
        expect(isOddOrEven('123')).to.equal('odd');
    });
});

