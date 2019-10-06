import {hackerrank} from './hackerrank'

describe('Testes', () => {
    test('1 test', () => {
        expect(hackerrank('hereiamstackerrank')).toBe('YES')
    });
    test('2 test', () => {
        expect(hackerrank('hackerworld')).toBe('NO')
    });
    test('3 test', () => {
        expect(hackerrank('hhaacckkekraraannk')).toBe('YES')
    });
    test('4 test', () => {
        expect(hackerrank('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt')).toBe('NO')
    });

    
});