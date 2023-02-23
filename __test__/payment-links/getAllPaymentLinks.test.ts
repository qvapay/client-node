import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login, getAllPaymentLinks } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get All Payment Links', () => {
  test('should return an array with all payment links', async () => {
    const { accessToken } = await login(loginData);
    const result = await getAllPaymentLinks(accessToken);

    expect(result).toBeInstanceOf(Array);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const result = await getAllPaymentLinks(accessToken);

    expect(result).toEqual(expectedResult);
  });
});
