import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login, getOneWithdraw } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get one withdraw', () => {
  test('should return a successful response', async () => {
    const { accessToken } = await login(loginData);
    const id = '10790';
    const result = await getOneWithdraw(accessToken, id);

    expect(result).toBeInstanceOf(Object);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const id = '252952e6-4f19-46a8-83ae-491abcdf93e4';
    const result = await getOneWithdraw(accessToken, id);

    expect(result).toEqual(expectedResult);
  });
});
