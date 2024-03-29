import counting_sort from "./counting_sort";

describe("[TEST COUNTING SORT] -", () => {
  it("should return sorted array", () => {
    const list = [1, 3, 8, 7, 6];
    const result = counting_sort(list, 1, 8);
    expect(result).toStrictEqual([1, 3, 6, 7, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    const result = counting_sort(list, 1, 8);
    expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 2, 3];
    const result = counting_sort(list, 1, 3);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
