import recursion from './recursion';

describe('[TEST RECURSION] -', () => {
  it('should return 0', async () => {
    const COUNTDOWN = 5;
    const condition = data => data <= 0;
    const operation = data => data - 1;
    const callback = data => data;
    const result = await recursion(COUNTDOWN, condition, operation, callback);
    expect(result).toBe(0);
  });

  it('should return 5', async () => {
    const COUNTDOWN = 25;
    const condition = data => data <= 5;
    const operation = data => data - 1;
    const callback = data => data;
    const result = await recursion(COUNTDOWN, condition, operation, callback);
    expect(result).toBe(5);
  });
});
