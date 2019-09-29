import {dataGenerator} from './data.js';

describe('Data Generator',()=>{
    test('Data Simples',()=>{
        expect(dataGenerator('29/10/1969')).toBe('29 de outubro de 1969')
        expect(dataGenerator('01/01/1970')).toBe('01 de janeiro de 1970')
        expect(dataGenerator('15/09/1975')).toBe('15 de setembro de 1975')
    })

    test('Invalid data',()=>{
        expect(dataGenerator('01-04-1976')).toBe('Invalid data input')
        expect(dataGenerator('1976')).toBe('Invalid data input')
        expect(dataGenerator('aaa')).toBe('Invalid data input')
    })
})