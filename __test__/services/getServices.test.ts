import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login, getAllServices } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get All Services', () => {
  test('should return an arrangement with all the services offered', async () => {
    const { accessToken } = await login(loginData);
    const result = await getAllServices(accessToken);

    expect(result).toBeInstanceOf(Array);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const result = await getAllServices(accessToken);

    expect(result).toEqual(expectedResult);
  });
});
