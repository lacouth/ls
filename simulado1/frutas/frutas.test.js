import {frutas} from './frutas'

describe('Testes', () => {
    test('1 test', () => {
        expect(frutas([5, 10, 0, 15, 0, 3, 6, 17, 20])).toStrictEqual([1,0])
    });
    test('2 test', () => {
        expect(frutas([7, 11, 5, 15, -2, 2, 1, 5, -6])).toStrictEqual([1,1])
    });
    test('3 test', () => {
        expect(frutas([8, 9, -1, 15, -2, 2, 10, 20, 21])).toStrictEqual([1,0])
    });
    
});