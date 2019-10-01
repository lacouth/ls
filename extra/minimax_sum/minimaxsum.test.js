import {minimaxsum} from './minimaxsum.js'

describe("Testes",()=>{
    test("1 caso",()=>{
        expect(minimaxsum([1,2,3,4,5])).toStrictEqual([10,14])
    })
    test("2 caso",()=>{
        expect(minimaxsum([0,2,6,3,4])).toStrictEqual([9,15])
    })

    test("3 caso", ()=>{
        expect(minimaxsum([10,23,61,37,41])).toStrictEqual([111,162])
    })
})