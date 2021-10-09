import recursion from "./recursion";

describe("[TEST RECURSION] -", () => {
  it("should return 0", async () => {
    const data = 5;
    const condition = (data) => data <= 0;
    const operation = (data) => data - 1;
    const callback = (data) => data;
    const result = await recursion(data, condition, operation, callback);
    expect(result).toBe(0);
  });

  it("should return 5", async () => {
    const data = 25;
    const condition = (data) => data <= 5;
    const operation = (data) => data - 1;
    const callback = (data) => data;
    const result = await recursion(data, condition, operation, callback);
    expect(result).toBe(5);
  });

  it("should return 20", async () => {
    const data = { arr: [5, 5, 10, 5], sum: 0 };
    const condition = (data) => data.sum >= 20;
    const operation = (data) => {
      const value = data.arr.shift();
      return { arr: data.arr, sum: data.sum + value };
    };
    const callback = (data) => data;
    const result = await recursion(data, condition, operation, callback);
    expect(result.sum).toBe(20);
  });

  it("should return 13", async () => {
    const data = { arr: [2, 1, 10, 1, 5], sum: 0 };
    const condition = (data) => data.sum >= 4;
    const operation = (data) => {
      const value = data.arr.shift();
      return { arr: data.arr, sum: data.sum + value };
    };
    const callback = (data) => data;
    const result = await recursion(data, condition, operation, callback);
    expect(result.sum).toBe(13);
  });
});
