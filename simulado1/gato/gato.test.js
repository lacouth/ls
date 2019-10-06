import {gato} from './gato'

describe('Testes', () => {
    test('1 test', () => {
        expect(gato([1,2,3])).toBe('Cat B')
    });
    test('2 test', () => {
        expect(gato([1,3,2])).toBe('Mouse C')
    });

    test('3 test', () => {
        expect(gato([1,4,2])).toBe('Cat A')
    });
});