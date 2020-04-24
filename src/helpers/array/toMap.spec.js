import { toMap } from './toMap';
{
}
describe('test toMap', () => {
  it('returns map', () => {
    const arr = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }];
    const result = toMap(arr, 'id');
    expect(result).toMatchSnapshot();
  });

  it('returns map for duplicate', () => {
    const arr = [
      { id: '1', name: 'hej1' },
      { id: '2', name: 'hej2' },
      { id: '3', name: 'hej3' },
      { id: '4', name: 'hej4' },
      { id: '4', name: 'hej5' },
    ];
    const result = toMap(arr, 'id');
    expect(result).toMatchSnapshot();
  });
});
