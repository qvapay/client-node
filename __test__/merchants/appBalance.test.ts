import 'dotenv/config';
import { AppAuth } from '../../src/interfaces';
import { appBalance } from '../../src';

const authApp: AppAuth = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
};

describe('app balance', () => {
  test('should return a app balance', async () => {
    const result = await appBalance(authApp);

    expect(typeof result).toEqual('number');
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      error: 'APP no existe',
    };

    const authApp: AppAuth = {
      app_id: 'test',
      app_secret: 'test',
    };
    const result = await appBalance(authApp);

    expect(result).toEqual(expectedResult);
  });
});
