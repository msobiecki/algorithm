/* eslint-disable eslint-comments/disable-enable-pair, unicorn/consistent-function-scoping */
import recursion from "./recursion";

describe("check recursion", () => {
  it("should return 0", () => {
    const condition = (data: number) => data <= 0;
    const operation = (data: number) => data - 1;
    const callback = (data: number) => data;
    const result = recursion(5, condition, operation, callback);
    expect(result).toBe(0);
  });

  it("should return 5", () => {
    const condition = (data: number) => data <= 5;
    const operation = (data: number) => data - 1;
    const callback = (data: number) => data;
    const result = recursion(25, condition, operation, callback);
    expect(result).toBe(5);
  });

  it("should return 20", () => {
    const condition = (data: { arr: number[]; sum: number }) => data.sum >= 20;
    const operation = (data: { arr: number[]; sum: number }) => {
      const value = data.arr.shift() ?? 0;
      return { arr: data.arr, sum: data.sum + value };
    };
    const callback = (data: { arr: number[]; sum: number }) => data;
    const result = recursion(
      { arr: [5, 5, 10, 5], sum: 0 },
      condition,
      operation,
      callback,
    );
    expect(result.sum).toBe(20);
  });

  it("should return 13", () => {
    const condition = (data: { arr: number[]; sum: number }) => data.sum >= 4;
    const operation = (data: { arr: number[]; sum: number }) => {
      const value = data.arr.shift() ?? 0;
      return { arr: data.arr, sum: data.sum + value };
    };
    const callback = (data: { arr: number[]; sum: number }) => data;
    const result = recursion(
      { arr: [2, 1, 10, 1, 5], sum: 0 },
      condition,
      operation,
      callback,
    );
    expect(result.sum).toBe(13);
  });
});
