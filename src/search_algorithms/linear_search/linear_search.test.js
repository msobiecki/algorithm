import linear_search from './linear_search';

describe('[TEST LINEAR SEARCH] -', () => {
  it('should return position 1', () => {
    const list = [1, 3, 5, 7, 9];
    const search = 3;
    const result = linear_search(list, search);
    expect(result).toBe(1);
  });

  it('should return position 3', () => {
    const list = [1, 3, 5, 7, 9];
    const search = 7;
    const result = linear_search(list, search);
    expect(result).toBe(3);
  });

  it('should return position null', () => {
    const list = [1, 3, 5, 7, 9];
    const search = 10;
    const result = linear_search(list, search);
    expect(result).toBe(null);
  });
});
