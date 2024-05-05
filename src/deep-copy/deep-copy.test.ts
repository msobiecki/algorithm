import deepCopy from "./deep-copy";

describe("check deepCopy", () => {
  describe("when copying a simple array", () => {
    it("should return a non-mutated array", () => {
      const original = [1, 3, 8, 7, 6];
      const copied = deepCopy(original);

      copied[1] = 0;

      expect(original).toEqual([1, 3, 8, 7, 6]);
      expect(copied).toEqual([1, 0, 8, 7, 6]);
    });
  });

  describe("when copying an array with nested objects", () => {
    it("should return a non-mutated array", () => {
      const original = [1, 1, 1, { value: 5 }, 1, 1, 1, 1, 1];
      const copied = deepCopy(original);

      if (typeof copied[3] === "object" && "value" in copied[3]) {
        copied[3].value = 0;
      }

      expect(original).toEqual([1, 1, 1, { value: 5 }, 1, 1, 1, 1, 1]);
      expect(copied).toEqual([1, 1, 1, { value: 0 }, 1, 1, 1, 1, 1]);
    });
  });
});
