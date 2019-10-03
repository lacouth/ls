import {mirror} from './mirror_sequence.js'

describe('Tests',()=>{
    test('1 test',()=>{
        expect(mirror(1,5)).toBe(1234554321)
    })
    test('2 test',()=>{
        expect(mirror(10,13)).toBe(1011121331211101)
    })
    test('3 test',()=>{
        expect(mirror(98,101)).toBe(98991001011010019989)
    })
})