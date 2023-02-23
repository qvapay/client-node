import { currentRates } from '../../src';

describe('current Rates', () => {
  test('should return an array that in its first position contains an object with the coins', async () => {
    const result = await currentRates();

    expect(Object.keys(result[0])).toContain('coins');
  });
});
