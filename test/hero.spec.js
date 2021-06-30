
import { filtrarPorRoles , filtrarPorPoder, barraBuscadora , filtrarPorDifficultad} from '../src/hero.js';


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



describe('filtro Por Poder', () => {
    it('is a function', () => {
        expect( typeof filtrarPorPoder).toBe('function');
    });

    it('return filtered list with one element', () => {
        let partype = 'MP';
        let list = [{partype: 'MP'}, {partype: '1'} , {partype: ['1','B','C']}];
        let filteredList = filtrarPorPoder(partype , list);
        expect(filteredList.length).toEqual(1);
    });

    it('returns empty list', () => {
        let partype = 'D';
        let list = [{partype: ['MP','B','C']},{partype: ['1','2','3']},{partype: ['1','B','C']}];
        let filteredList = filtrarPorPoder(partype , list);
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

describe ('Función barra buscadora', () => {
    it('is a function', () => {
        expect(typeof barraBuscadora).toBe('function');
    });

    it('retuns filtered list with event input', () =>{
        let searched = 'k'  ;
        let list = [{name:'kilo'}, {name: 'Viktor'}, {name: 'rol'}];
        let filteredList = barraBuscadora (searched ,list);
        expect(filteredList.length).toEqual(2);
    });
});

