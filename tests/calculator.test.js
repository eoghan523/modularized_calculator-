
const calculator = require('../calculator');

describe('calculator', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });

    test('subract 8 - 3 to equal 5', () => { 
        expect(calculator.subtract(8, 3)).toBe(5);
    });

    test('multiply 5 * 6 to equal 30', () => {
        expect(calculator.multiply(5, 6)).toBe(30);
    });

    test('divide 10 / 0 to throw  error', () => {
        expect(() => calculator.divide(10, 0)).toThrow("Can't divide by 0...");
    });

    test('divide 12 / 3 equals 4', () => {
        expect(calculator.divide(12, 3)).toBe(4);
    });

    test('add 100 + 450 to equal 550', () => {
        expect(calculator.add(100, 450)).toBe(550);
    });

    test('subtracts -5 - -3 to equal -2', () => {
        expect(calculator.subtract(-5, -3)).toBe(-2);
    });

    test('add -4 + -1 to equal -5', () => {
        expect(calculator.add(-4, -1)).toBe(-5);
    });

    










});
