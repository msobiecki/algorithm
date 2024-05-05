import recursion from "./recursion";

describe("check recursion", () => {
  it("should return 0", () => {
    const result = recursion(
      5,
      (data: number) => data <= 0,
      (data: number) => data - 1,
      (data: number) => data,
    );
    expect(result).toBe(0);
  });

  it("should return 5", () => {
    const result = recursion(
      25,
      (data: number) => data <= 5,
      (data: number) => data - 1,
      (data: number) => data,
    );
    expect(result).toBe(5);
  });

  it("should return sum of 20", () => {
    const result = recursion(
      { arr: [5, 5, 10, 5], sum: 0 },
      (data) => data.sum >= 20,
      (data) => ({ arr: data.arr.slice(1), sum: data.sum + data.arr[0] }),
      (data) => data,
    );
    expect(result.sum).toBe(20);
  });

  it("should return sum of 13", () => {
    const result = recursion(
      { arr: [2, 1, 10, 1, 5], sum: 0 },
      (data) => data.sum >= 4,
      (data) => ({ arr: data.arr.slice(1), sum: data.sum + data.arr[0] }),
      (data) => data,
    );
    expect(result.sum).toBe(13);
  });
});
