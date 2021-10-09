import bubble_sort from "./bubble_sort";

describe("[TEST BUBBLE SORT] -", () => {
  it("should return sorted array", () => {
    const list = [1, 3, 8, 7, 6];
    const result = bubble_sort(list);
    expect(result).toStrictEqual([1, 3, 6, 7, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    const result = bubble_sort(list);
    expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 2, 3];
    const result = bubble_sort(list);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
