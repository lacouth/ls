import {birds} from './birds.js'

describe("Testes",()=>{
    test('1 caso',()=>{
        expect(birds([1,4,4,4,5,3])).toBe(4)
    })
    test('2 caso',()=>{
        expect(birds([1,1,1,4,5,3])).toBe(1)
    })
    test('3 caso',()=>{
        expect(birds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])).toBe(3)
    })
})