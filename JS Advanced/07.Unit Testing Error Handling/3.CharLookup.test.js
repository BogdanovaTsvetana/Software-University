const lookupChar = require('../3.CharLookup');
const { assert, expect } = require('chai');

// function lookupChar(string, index) {
//     if (typeof(string) !== 'string' || !Number.isInteger(index)) {
//         return undefined;
//     }
//     if (string.length <= index || index < 0) {
//         return "Incorrect index";
//     }

//     return string.charAt(index);
// }

describe('lookupChar CUCI', () => {
    it ('Should return undefined when the first parameter is NOT a string', () => {
        expect(lookupChar(undefined, 0)).to.equal(undefined);
        expect(lookupChar(null, 0)).to.equal(undefined);
        expect(lookupChar(2, 0)).to.equal(undefined);
    }); 

    it ('Should return undefined when the second parameter is NOT a number', () => {
        expect(lookupChar('string', 'string')).to.equal(undefined);
        expect(lookupChar('string', undefined)).to.equal(undefined);
        expect(lookupChar('string', null)).to.equal(undefined);
        expect(lookupChar('string', 2.2)).to.equal(undefined);
    }); 

    it ('Should return "Incorrect index" when the value of the index is incorrect', () => {
        expect(lookupChar('s', -1)).to.equal("Incorrect index");
        expect(lookupChar('s', 2)).to.equal("Incorrect index");
    }); 

    it ('Should return the character at the specified index in the string when both parameters have correct types and values', () => {
        expect(lookupChar('abc', 0)).to.equal('a');
        expect(lookupChar('abc', 1)).to.equal('b');
    }); 
});
