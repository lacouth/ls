import {code_sort} from './code_sort.js'

describe('testes', () => {
    test('simple sort', () => {
        expect(code_sort(['3000', '2000', '1000']))
                        .toStrictEqual(['1000', '2000', '3000'])
    });
    test('should ', () => {
        expect(code_sort(['1233', '0015', '0100']))
                        .toStrictEqual(['0015', '0100', '1233'])
    });

    test('should 2', () => {
        expect(code_sort(['0752', '1110', '0001', '6322', '8000', '6321', '0000']))
            .toStrictEqual(['0000', '0001', '0752', '1110', '6321', '6322', '8000'])
    });
});