import 'dotenv/config';
import { AppAuth } from '../../src/interfaces';
import { appInfo } from '../../src';

const authApp: AppAuth = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
};

describe('app info', () => {
  test('should return a successful response', async () => {
    const expectedResult = [
      'name',
      'url',
      'desc',
      'logo',
      'uuid',
      'active',
      'enabled',
      'created_at',
      'updated_at',
      'app_photo_url',
    ];
    const result = await appInfo(authApp);

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
    const result = await appInfo(authApp);

    expect(result).toEqual(expectedResult);
  });
});
