import { dropdownTags, dropdownPower, dropdownDifficulty } from '../src/data.js';

describe('dropdown Tags', () => {
  it('is a function', () => {
    expect(typeof dropdownTags).toBe('function');
  });
});

describe('dropdown Power', () => {
  it('is a function', () => {
    expect(typeof dropdownPower).toBe('function');
  });
});

describe('dropdown Difficulty', () => {
  it('is a function', () => {
    expect(typeof dropdownDifficulty).toBe('function');
  });
});
