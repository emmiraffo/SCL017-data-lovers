import filtrarPorRoles from '../src/main'; 

describe('filtrarPorRoles', () => {
  it('is an array', () => {
    expect(typeof filtrarPorRoles).toBe('object');
  });

  it('returns true', () => {
    expect(filtrarPorRoles()).toBe('true');
  });
});


/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
