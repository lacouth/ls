import {velas} from './velas'

describe('Testes', () => {
    test('1 test', () => {
        expect(velas([1,1,1,3])).toBe(1)
    });
    test('2 test', () => {
        expect(velas([1,3,1,3])).toBe(2)
    });
    test('3 test', () => {
        expect(velas([1,3,3,3])).toBe(3)
    });
    test('4 test', () => {
        expect(velas([3,2,1,3])).toBe(2)
    });
    test('1 test', () => {
        expect(velas([18, 90, 90, 13, 90, 75, 90, 8, 90, 43])).toBe(5)
    });
});