import deep_copy from './deep_copy';

describe('[TEST DEEP COPY] -', () => {
  it('should return non-mutated array', () => {
    const list = [1, 3, 8, 7, 6];
    const result = deep_copy(list);
    result[1] = 0;
    expect(list).toStrictEqual([1, 3, 8, 7, 6]);
    expect(list).not.toStrictEqual([1, 0, 8, 7, 6]);
    expect(result).toStrictEqual([1, 0, 8, 7, 6]);
  });

  it('should return sorted array', () => {
    const list = [1, 1, 1, { value: 5 }, 1, 1, 1, 1, 1];
    const result = deep_copy(list);
    result[3].value = 0;
    expect(list).toStrictEqual([1, 1, 1, { value: 5 }, 1, 1, 1, 1, 1]);
    expect(list).not.toStrictEqual([1, 1, 1, { value: 0 }, 1, 1, 1, 1, 1]);
    expect(result).toStrictEqual([1, 1, 1, { value: 0 }, 1, 1, 1, 1, 1]);
  });
});
