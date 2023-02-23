import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login, getWithdrawsFromUserAuth } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get Withdraws From User Auth', () => {
  test('should return a successful response', async () => {
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

    const { accessToken } = await login(loginData);
    const result = await getWithdrawsFromUserAuth(accessToken);

    expect(Object.keys(result)).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const result = await getWithdrawsFromUserAuth(accessToken);

    expect(result).toEqual(expectedResult);
  });
});
