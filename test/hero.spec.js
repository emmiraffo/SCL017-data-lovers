import { filtrarPorRoles } from '../src/hero.js';

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

    [{tags: ['rol', 'rolA']}]
});