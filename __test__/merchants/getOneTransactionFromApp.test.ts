import 'dotenv/config';
import { AppAuth } from '../../src/interfaces';
import { getOneTransactionFromApp } from '../../src';

const authApp: AppAuth = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
};

describe('get Transactions From App', () => {
  test('should return the invoice created', async () => {
    const id = 'ae06dce6-309c-4f96-9ef3-01b14938e8d7';
    const result = await getOneTransactionFromApp(authApp, id);

    expect(result).toBeInstanceOf(Object);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      error: 'APP no existe',
    };

    const authApp: AppAuth = {
      app_id: 'test',
      app_secret: 'test',
    };
    const id = 'ae06dce6-309c-4f96-9ef3-01b14938e8d7';
    const result = await getOneTransactionFromApp(authApp, id);

    expect(result).toEqual(expectedResult);
  });
});
