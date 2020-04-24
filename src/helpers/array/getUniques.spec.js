import { getUniques } from './';

describe('test getUniques', () => {
  it('getUniques returns correct for array of numbers', () => {
    const arr = [1, 2, 3, 4, 4, 5, 2, 1];
    const result = getUniques(arr);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('getUniques returns correct for array of strings', () => {
    const arr = ['a', 'b', 'a', 'b', 'c'];
    const result = getUniques(arr);
    expect(result).toEqual(['a', 'b', 'c']);
  });
});
