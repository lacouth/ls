import {vales} from './vales'

describe('Testes', () => {
    test('1 test', () => {
        expect(vales('DU')).toBe(1)
    });
    test('2 test', () => {
        expect(vales('DUDU')).toBe(2)
    });
    test('3 test', () => {
        expect(vales('UDDDUDUU')).toBe(1)
    });
    test('4 test', () => {
        expect(vales('DDUUDDUDUUUD')).toBe(2)
    });
    
});