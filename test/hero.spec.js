import { filtrarPorRoles, filtrarPorDifficultad } from '../src/hero.js';

describe('filtros', () => {
    it('is a function', () => {
      expect(typeof filtrarPorRoles).toBe('function');
    });
  
    it('returns filtered list with one element', () => {
        let tag = 'rolA';
        let list = [{tags: ['rol', 'rolB']}, {tags: ['rol', 'rolA']}, {tags: ['rol']}];
        let filteredList = filtrarPorRoles(tag, list);
        expect(filteredList.length).toEqual(1);
    });

    
    it('returns empty list', () => {
        let tag = 'aaa';
        let list = [{tags: ['rol', 'rolB']}, {tags: ['rol', 'rolA']}, {tags: ['rol']}];
        let filteredList = filtrarPorRoles(tag, list);
        expect(filteredList.length).toEqual(0);
    });
});





























describe('filtros', () => {
    it('is a function', () => {
        expect(typeof filtrarPorDifficultad).toBe('function');
    });

    it('returns filtered list with one element', () => {
    let difficulty = '4' ;
    let list = [{info: {attack: '8', defense: '5', magic: '3', difficulty: '4'}}]
    let filteredList = filtrarPorDifficultad(difficulty, list);
     expect(filteredList.length).toEqual(1);
    });

    it('returns empty list', () => {
    let difficulty = '0' ;
    let list = [{info: {attack: '8', defense: '5', magic: '3', difficulty: '4'}}]
    let filteredList = filtrarPorDifficultad(difficulty, list);
     expect(filteredList.length).toEqual(0);
    });

});
