import shortcutTables from "./shortcut-tables";

describe("check shortcutTables", () => {
  it("should return 0", () => {
    const data = ["ONE", "TWO", "TWO", "THREE", "THREE", "FOUR"];
    const result = shortcutTables(data);
    expect(result).toStrictEqual({ ONE: 1, TWO: 2, THREE: 2, FOUR: 1 });
  });

  it("should return 0", () => {
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
    expect(result).toStrictEqual({ ONE: 4, TWO: 2, THREE: 2, FOUR: 1 });
  });
});
