import 'dotenv/config';
import { login, logout } from '../../src/api/auth';
import { Login } from '../../src/interfaces';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('logout', () => {
  test('should return a successful response', async () => {
    const expectedResponse = {
      message: 'You have been successfully logged out!',
    };

    const { accessToken } = await login(loginData);
    const response = await logout(accessToken);

    expect(response).toEqual(expectedResponse);
  });

  test('should return an error response', async () => {
    const expectedErrorResponse = { message: 'Unauthenticated.' };

    const accessToken = '123456789';
    const response = await logout(accessToken);

    expect(response).toEqual(expectedErrorResponse);
  });
});
