import { ConditionalRender } from './';

describe('ConditionalRender', () => {
  it('Conditional returns fallback: condition = false', () => {
    const result = ConditionalRender({
      fallback: 'fallback',
      children: 'children',
      condition: false,
    });

    expect(result).toEqual('fallback');
  });

  it('Conditional returns children: condition = true', () => {
    const result = ConditionalRender({
      fallback: 'fallback',
      children: 'children',
      condition: true,
    });

    expect(result).toEqual('children');
  });

  it('Conditional returns fallback: no condition', () => {
    const result = ConditionalRender({
      condition: false,
      children: 'children',
    });

    expect(result).toEqual(null);
  });
});
