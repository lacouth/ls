import {soma} from './soma.js'

describe('Testes',()=>{
    test('Test sem zero',()=>{
        expect(soma(7,8)).toBe(15)
    })
    test('Test 1 zero',()=>{
        expect(soma(15,5)).toBe(2)
    })
    test('Test n zeros',()=>{
        expect(soma(999,6)).toBe(15)
    })
})