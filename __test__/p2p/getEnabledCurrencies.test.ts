import { getEnabledCurrencies } from '../../src';

describe('get Enabled Currencies', () => {
  test('should return an array with the list of available currencies', async () => {
    const result = await getEnabledCurrencies();

    expect(result).toBeInstanceOf(Array);
  });
});
