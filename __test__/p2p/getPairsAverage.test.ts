import { getPairsAverage } from '../../src';

describe('get Pairs Average', () => {
  test('should return an object containing an array with the available offers', async () => {
    const coin = 'usdt';
    const result = await getPairsAverage(coin);

    expect(Object.keys(result)).toContain('offers');
  });

  test('should return 0 when no result is found', async () => {
    const coin = 'test';
    const result = await getPairsAverage(coin);

    expect(result).toBe(0);
  });
});
