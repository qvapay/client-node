import 'dotenv/config';
import { AppAuth } from '../../src/interfaces';
import { getTransactionsFromApp } from '../../src';

const authApp: AppAuth = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
};

describe('get Transactions From App', () => {
  test('should return the invoice created', async () => {
    const expectedResult = [
      'current_page',
      'data',
      'first_page_url',
      'from',
      'last_page',
      'last_page_url',
      'links',
      'next_page_url',
      'path',
      'per_page',
      'prev_page_url',
      'to',
      'total',
    ];
    const result = await getTransactionsFromApp(authApp);

    expect(Object.keys(result)).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      error: 'APP no existe',
    };

    const authApp: AppAuth = {
      app_id: 'test',
      app_secret: 'test',
    };
    const result = await getTransactionsFromApp(authApp);

    expect(result).toEqual(expectedResult);
  });
});
