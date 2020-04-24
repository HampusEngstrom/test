import { groupBy } from './groupBy';
{
}
describe('test groupBy', () => {
  it('returns grouped object', () => {
    const arr = [
      { id: '1', a: 'a1', b: 'b1' },
      { id: '2', a: 'a2', b: 'b2' },
      { id: '3', a: 'a2', b: 'b1' },
      { id: '4', c: 'c1', d: 'd1' },
    ];
    const key = 'b';
    const result = groupBy(arr, key);
    expect(result).toMatchSnapshot();
  });
});
