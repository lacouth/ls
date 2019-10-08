import {triplets} from './triplets'

describe('Testes',()=>{
    test('a > b', () => {
        expect(triplets([1,1,1],[0,0,0])).toStrictEqual([3,0])
    });
    test('a < b', () => {
        expect(triplets([0,0,0],[1,1,1])).toStrictEqual([0,3])
    });
    test('a +- b', () => {
        expect(triplets([17,28,30],[99,16,8])).toStrictEqual([2,1])
    });
    test('a == b', () => {
        expect(triplets([5,6,7],[3,6,10])).toStrictEqual([1,1])
    });
})