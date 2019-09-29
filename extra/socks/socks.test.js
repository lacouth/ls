import {socksCount} from './socks.js'

describe('Tests',()=>{
    test('Sem par',()=>{
        expect(socksCount([1,2,3])).toBe(0)
    })
    test('1 par',()=>{
        expect(socksCount([1,1,1,2])).toBe(1)
    })
    test('2 pares', ()=>{
        expect(socksCount([1, 2, 1, 2, 1, 3, 2])).toBe(2)
    })
    test('3 pares',()=>{
        expect(socksCount([10, 20, 20, 10, 10, 30, 50, 10, 20])).toBe(3)
    })
})