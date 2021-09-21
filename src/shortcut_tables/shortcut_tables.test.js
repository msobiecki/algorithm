import shortcut_tables from "./shortcut_tables";

describe("[TEST SHORTCUT TABLES] -", () => {
  it("should return 0", () => {
    const data = ["ONE", "TWO", "TWO", "THREE", "THREE", "FOUR"];
    const result = shortcut_tables(data);
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
    const result = shortcut_tables(data);
    expect(result).toStrictEqual({ ONE: 4, TWO: 2, THREE: 2, FOUR: 1 });
  });
});
