import {textTransform} from './text-transform.js'


describe('Text Tranformation',()=>{
    test('Test1',()=>{
        expect(textTransform('programador')).toBe('P-R-O-G-R-A-M-A-D-O-R')
    })
    test('Test 2',()=>{
        expect(textTransform('o dia está chuvoso')).toBe('O-D-I-A-E-S-T-Á-C-H-U-V-O-S-O')
    })
})