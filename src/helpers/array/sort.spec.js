import { sort } from './sort';

describe('sort', () => {
  it('test sort by key', () => {
    const items = [{ key: 'a2' }, { key: 'a1' }, { key: 'a3' }];

    const result = sort(items)('key');

    expect(result).toMatchSnapshot();
  });

  it('test sort by undefined key', () => {
    const items = [{ key: 'a2' }, { key: 'a1' }, { key: 'a3' }];

    const result = sort(items)('bad_key');

    expect(result).toMatchSnapshot();
  });

  it('test sort by key numbers', () => {
    const items = [{ key: 2 }, { key: 1 }, { key: 3 }];

    const result = sort(items)('key');

    expect(result).toMatchSnapshot();
  });
});
