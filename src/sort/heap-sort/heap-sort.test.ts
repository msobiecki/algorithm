import heapSort from "./heap-sort";

describe("check heapSort", () => {
  it("should return sorted array", () => {
    const list = [1, 3, 8, 7, 6];
    const result = heapSort([...list]);
    expect(result).toEqual([1, 3, 6, 7, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 1, 1, 8, 1, 1, 1, 1, 1];
    const result = heapSort([...list]);
    expect(result).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 8]);
  });

  it("should return sorted array", () => {
    const list = [1, 2, 3];
    const result = heapSort([...list]);
    expect(result).toEqual([1, 2, 3]);
  });
});
