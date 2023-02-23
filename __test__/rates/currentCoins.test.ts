import { currentCoins } from '../../src';

describe('current Coins', () => {
  test('should return an array that in its first position contains an object with the coins', async () => {
    const result = await currentCoins();

    expect(Object.keys(result[0])).toContain('coins');
  });
});
