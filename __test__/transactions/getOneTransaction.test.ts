import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login, getOneTransaction } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get one transaction', () => {
  test('should return a successful response', async () => {
    const expectedResult = [
      'uuid',
      'app_id',
      'amount',
      'description',
      'remote_id',
      'status',
      'created_at',
      'updated_at',
      'app',
      'paid_by',
      'app_owner',
      'owner',
      'wallet',
      'servicebuy',
    ];

    const { accessToken } = await login(loginData);
    const id = '252952e6-4f19-46a8-83ae-491abcdf93e4';
    const result = await getOneTransaction(accessToken, id);

    expect(Object.keys(result)).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const id = '252952e6-4f19-46a8-83ae-491abcdf93e4';
    const result = await getOneTransaction(accessToken, id);

    expect(result).toEqual(expectedResult);
  });
});
