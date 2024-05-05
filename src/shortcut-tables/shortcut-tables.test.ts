import shortcutTables from "./shortcut-tables";

describe("check shortcutTables", () => {
  it("should return correct frequency map for first dataset", () => {
    const data = ["ONE", "TWO", "TWO", "THREE", "THREE", "FOUR"];
    const result = shortcutTables(data);
    expect(result).toEqual({ ONE: 1, TWO: 2, THREE: 2, FOUR: 1 });
  });

  it("should return correct frequency map for second dataset", () => {
    const data = [
      "TWO",
      "TWO",
      "THREE",
      "THREE",
      "FOUR",
      "ONE",
      "ONE",
      "ONE",
      "ONE",
    ];
    const result = shortcutTables(data);
    expect(result).toEqual({ ONE: 4, TWO: 2, THREE: 2, FOUR: 1 });
  });
});
