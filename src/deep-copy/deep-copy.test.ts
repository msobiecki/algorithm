import deepCopy from "./deep-copy";

describe("check deepCopy", () => {
  it("should return non-mutated array", () => {
    const list = [1, 3, 8, 7, 6];
    const result = deepCopy(list);
    result[1] = 0;
    expect(list).toStrictEqual([1, 3, 8, 7, 6]);
    expect(list).not.toStrictEqual([1, 0, 8, 7, 6]);
    expect(result).toStrictEqual([1, 0, 8, 7, 6]);
  });

  describe("when has nested object", () => {
    it("should return non-mutated array", () => {
      const list = [1, 1, 1, { value: 5 }, 1, 1, 1, 1, 1];
      const result = deepCopy(list);
      if (result[3] && typeof result[3] === "object" && "value" in result[3]) {
        result[3].value = 0;
      }
      expect(list).toStrictEqual([1, 1, 1, { value: 5 }, 1, 1, 1, 1, 1]);
      expect(list).not.toStrictEqual([1, 1, 1, { value: 0 }, 1, 1, 1, 1, 1]);
      expect(result).toStrictEqual([1, 1, 1, { value: 0 }, 1, 1, 1, 1, 1]);
    });
  });
});
