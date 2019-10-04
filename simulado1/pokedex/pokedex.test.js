import {pokedex} from './pokedex.js'

describe('Testes', () => {
    test('1 pokemon', () => {
        expect(pokedex(['Zubat'])).toBe(150)
    });
    test('3 poke 2 repeat', () => {
        expect(pokedex(['Zubat', 'Pikachu', 'Pikachu'])).toBe(149)
    });
    test('all repeats', () => {
        expect(pokedex(['Zubat', 
                       'Zubat', 'Zubat', 'Zubat', 
                       'Zubat', 'Zubat', 'Zubat', 'Zubat'])).toBe(150)
    });

    test('all repeats 2', () => {
        expect(pokedex(['Charmander', 'Caterpie', 'Pidgeot', 
        'Rattata', 'Zubat', 'Zubat', 'Zubat'])).toBe(146)
    });
});