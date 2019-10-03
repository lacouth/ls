import {string_repeat} from './string_repeat.js'

describe('Tests',()=>{
    test('1 test',()=>{
        expect(string_repeat('aba',10)).toBe(7)
    })
})