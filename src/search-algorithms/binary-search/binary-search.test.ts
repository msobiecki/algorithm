import binarySearch from "./binary-search";

describe("check binarySearch", () => {
  it("should return position 1", () => {
    const list = [1, 3, 5, 7, 9];
    const search = 3;
    const result = binarySearch(list, search);
    expect(result).toBe(1);
  });

  it("should return position 3", () => {
    const list = [1, 3, 5, 7, 9];
    const search = 7;
    const result = binarySearch(list, search);
    expect(result).toBe(3);
  });

  it("should return position null", () => {
    const list = [1, 3, 5, 7, 9];
    const search = 10;
    const result = binarySearch(list, search);
    // eslint-disable-next-line unicorn/no-null
    expect(result).toBe(null);
  });
});
