import {rotation} from './rotation.js'

describe('Rotation Tests', ()=>{
    test('1 rotation',()=>
        expect(rotation([1,2,3,4,5],1)).toStrictEqual([2,3,4,5,1])
    )
    test('4 rotations',()=>{
        expect(rotation([1,2,3,4,5],4)).toStrictEqual([5,1,2,3,4])
    })
    test("10 rotations",()=>{
        expect(rotation([41, 73, 89, 7, 10, 1, 59,
            58, 84, 77, 77, 97, 58, 1,
            86, 58, 26, 10, 86, 51],10)).toStrictEqual([77, 97, 58, 1, 86, 58, 26,
                10, 86, 51, 41, 73, 89, 7,
                10, 1, 59, 58, 84, 77])
    })
})