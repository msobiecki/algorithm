import merge_sort from "./merge_sort";

describe("[TEST MERGE SORT] -", () => {
  it("should return sorted array", () => {
    const list = [1, 3, 8, 7, 6];
    const result = merge_sort(list);
    expect(result).toStrictEqual([1, 3, 6, 7, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    const result = merge_sort(list);
    expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 2, 3];
    const result = merge_sort(list);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
