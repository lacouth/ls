import {funny} from './funny'

describe('Testes', () => {
    test('abc', () => {
        expect(funny('abc')).toBe('Funny')
    });
    test('abd', () => {
        expect(funny('abd')).toBe('Not Funny')
    });
    test('acxz', () => {
        expect(funny('acxz')).toBe('Funny')
    });
    test('bcxz', () => {
        expect(funny('bcxz')).toBe('Not Funny')
    });
});