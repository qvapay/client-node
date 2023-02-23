import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login, getOneService } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};
const id: string = '629f7ec8-579e-4282-892c-f13a342a0975';

describe('get One Service', () => {
  test('should return an object with the information of the service that is consulted', async () => {
    const expectedResult = [
      'uuid',
      'name',
      'lead',
      'price',
      'desc',
      'service_photo_url',
    ];
    const { accessToken } = await login(loginData);
    const result = await getOneService(accessToken, id);

    expect(Object.keys(result)).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const result = await getOneService(accessToken, id);

    expect(result).toEqual(expectedResult);
  });
});
