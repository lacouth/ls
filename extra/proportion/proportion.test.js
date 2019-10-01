import {proportion} from './proportion.js'

describe("Teste",()=>{
    test("Apenas positivos",()=>{
        expect(proportion([1,1,1])).toStrictEqual([0.0,0.0,1.0])
    })
    test("0 e 1",()=>{
        expect(proportion([0,0,1,1])).toStrictEqual([0.0,0.5,0.5])
    })
    test("0, 1, -1",()=>{
        expect(proportion([-4,3,-9,0,4,1]))
        .toStrictEqual([0.3333333333333333,0.16666666666666666,0.5])
    })
})