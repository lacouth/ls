import {ascii_count} from './ascii_count.js'

describe("Testes",()=>{
    test('letter a',()=>{
        expect(ascii_count('a')).toBe(97)
    })
    test('letter b',()=>{
        expect(ascii_count('b')).toBe(98)
    })
    test('letter A',()=>{
        expect(ascii_count('A')).toBe(65)
    })
    test('ifpb',()=>{
        expect(ascii_count('ifpb')).toBe(417)
    })
    test('lorem',()=>{
        expect(ascii_count('lorem')).toBe(543)
    })
    test('lorem ipsum',()=>{
        expect(ascii_count('lorem ipsum')).toBe(1133)
    })


})