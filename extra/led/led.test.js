import {led} from './led.js'

describe('Tests',()=>{
    test('1 test',()=>{
        expect(led(1)).toBe(2)
        expect(led(2)).toBe(5)
        expect(led(23456)).toBe(25)
        expect(led(2819311)).toBe(29)
    })
})