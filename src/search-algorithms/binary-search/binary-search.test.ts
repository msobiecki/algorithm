import binarySearch from "./binary-search";

describe("check binarySearch", () => {
  const list = [1, 3, 5, 7, 9];

  it("should return position 1", () => {
    const search = 3;
    const result = binarySearch(list, search);
    expect(result).toBe(1);
  });

  it("should return position 3", () => {
    const search = 7;
    const result = binarySearch(list, search);
    expect(result).toBe(3);
  });

  it("should return position null", () => {
    const search = 10;
    const result = binarySearch(list, search);
    expect(result).toBeNull();
  });
});
