import mergeSort from "./merge-sort";

describe("check mergeSort", () => {
  it("should return sorted array", () => {
    const list = [1, 3, 8, 7, 6];
    const result = mergeSort(list);
    expect(result).toStrictEqual([1, 3, 6, 7, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    const result = mergeSort(list);
    expect(result).toStrictEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 2, 3];
    const result = mergeSort(list);
    expect(result).toStrictEqual([1, 2, 3]);
  });
});
