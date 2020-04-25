import {
  filterOnSingleChoice,
  filterOnTextInput,
  filterOnMultipleChoices,
} from './filters';

describe('filter on single choice', () => {
  const items = [
    { id: '1', a: 'hej', b: 'hej' },
    { id: '2', a: 'hej', b: null },
    { id: '3', a: null, b: 'hej' },
    { id: '4', a: 'hej', b: 'hej' },
    { id: '5', a: 'hej', b: null },
    { id: '6', a: null, b: 'hej' },
  ];

  it('filterOnSingleChoice returns correct a b', () => {
    const map = {
      a: true,
      b: true,
    };
    const result = items.filter(filterOnSingleChoice(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnSingleChoice returns correct a', () => {
    const map = {
      a: true,
      b: false,
    };
    const result = items.filter(filterOnSingleChoice(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnSingleChoice returns correct b', () => {
    const map = {
      a: false,
      b: true,
    };
    const result = items.filter(filterOnSingleChoice(map));
    expect(result).toMatchSnapshot();
  });
});

describe('filter on text input', () => {
  const items = [
    { id: '1', text: 'abcdef' },
    { id: '2', text: 'abcfff' },
    { id: '3', text: 'bcdef' },
  ];

  it('filterOnTextInput returns correct for text: abc', () => {
    const map = {
      text: 'abc',
    };
    const result = items.filter(filterOnTextInput(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnTextInput returns correct for text: abcd', () => {
    const map = {
      text: 'abcd',
    };
    const result = items.filter(filterOnTextInput(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnTextInput returns correct for text: b', () => {
    const map = {
      text: 'b',
    };
    const result = items.filter(filterOnTextInput(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnTextInput returns correct for text: e', () => {
    const map = {
      text: 'e',
    };
    const result = items.filter(filterOnTextInput(map));
    expect(result).toMatchSnapshot();
  });
});

describe('filter on multiple choices', () => {
  const items = [
    { id: '1', text: 'abc' },
    { id: '2', text: 'abc' },
    { id: '3', text: 'def' },
    { id: '4', text: 'ghi' },
  ];

  it('filterOnMultipleChoices returns correct for text: abc', () => {
    const map = {
      text: ['abc'],
    };
    const result = items.filter(filterOnMultipleChoices(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnMultipleChoices returns correct for text: abc, def', () => {
    const map = {
      text: ['abc', 'def'],
    };
    const result = items.filter(filterOnMultipleChoices(map));
    expect(result).toMatchSnapshot();
  });

  it('filterOnMultipleChoices returns correct for text: empty', () => {
    const map = {
      text: [],
    };
    const result = items.filter(filterOnMultipleChoices(map));
    expect(result).toMatchSnapshot();
  });
});
