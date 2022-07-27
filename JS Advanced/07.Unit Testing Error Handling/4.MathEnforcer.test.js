const mathEnforcer = require('../4.MathEnforcer');
const { assert, expect } = require('chai');

describe('mathEnforcer CUCI', () => {
    describe('addFive', () => {
        it ('should return undefined when the parameter is NOT a number', () => {
            expect(mathEnforcer.addFive('o')).to.equal(undefined);
            expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
            expect(mathEnforcer.addFive(null)).to.equal(undefined);
            expect(mathEnforcer.addFive([1,2])).to.equal(undefined);
            
        });
        it ('should add 5 when the parameter is a number', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(-1)).to.equal(4);
            expect(mathEnforcer.addFive(1)).to.equal(6);
            expect(mathEnforcer.addFive(1.1)).to.closeTo(6.1, 0.01);
        });
    });

    describe('subtractTen', () => {
        it ('should return undefined when the parameter is NOT a number', () => {
            expect(mathEnforcer.subtractTen('o')).to.equal(undefined);
            expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
            expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
            expect(mathEnforcer.subtractTen([1,2])).to.equal(undefined);
        });
        it ('should subtract 10 when the parameter is a number', () => {
            expect(mathEnforcer.subtractTen(0)).to.equal(-10);
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
            expect(mathEnforcer.subtractTen(1)).to.equal(-9);
            expect(mathEnforcer.subtractTen(10.1)).to.closeTo(0.1, 0.01);
        });
    });

    describe('sum', () => {
        it ('should return undefined when the first parameter is NOT a number', () => {
            expect(mathEnforcer.sum('o', 0)).to.equal(undefined);
            expect(mathEnforcer.sum(undefined, 0)).to.equal(undefined);
            expect(mathEnforcer.sum(null, 0)).to.equal(undefined);
            expect(mathEnforcer.sum([1,2], 0)).to.equal(undefined);
        });
        it ('should return undefined when the second parameter is NOT a number', () => {
            expect(mathEnforcer.sum(0, 'o')).to.equal(undefined);
            expect(mathEnforcer.sum(0, undefined)).to.equal(undefined);
            expect(mathEnforcer.sum(0, null)).to.equal(undefined);
            expect(mathEnforcer.sum(0, [1,2])).to.equal(undefined);
        });
        it ('should return sum when both parameters are numbers', () => {
            expect(mathEnforcer.sum(0, 0)).to.equal(0);
            expect(mathEnforcer.sum(1, 1)).to.equal(2);
            expect(mathEnforcer.sum(-1, -1)).to.equal(-2);
            expect(mathEnforcer.sum(-1.1, -1.1)).to.closeTo(-2.2, 0.01);
        });
    });
});

