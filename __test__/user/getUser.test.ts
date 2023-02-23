import 'dotenv/config';
import { login, getUser } from '../../src';
import { Login } from '../../src/interfaces';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get User', () => {
  test('should return a successful response', async () => {
    const expectedResponse = [
      'uuid',
      'username',
      'name',
      'lastname',
      'email',
      'bio',
      'profile_photo_path',
      'balance',
      'total_in',
      'total_out',
      'latestTransactions',
      'complete_name',
      'name_verified',
      'profile_photo_url',
      'average_rating',
    ];

    const { accessToken } = await login(loginData);
    const response = await getUser(accessToken);
    const compare = Object.keys(response);

    expect(compare).toEqual(expectedResponse);
  });

  test('should return an error response', async () => {
    const expectedErrorResponse = { message: 'Unauthenticated.' };

    const accessToken = '123456789';
    const response = await getUser(accessToken);

    expect(response).toEqual(expectedErrorResponse);
  });
});
