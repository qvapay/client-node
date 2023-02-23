import 'dotenv/config';
import { Login } from '../../src/interfaces';
import { login } from '../../src';

describe('login', () => {
  test('should return a LoginResponse when the request is successful', async () => {
    const loginData: Login = {
      email: <string>process.env.EMAIL,
      password: <string>process.env.PASSWORD,
    };

    const expectedResult = [
      'uuid',
      'username',
      'name',
      'lastname',
      'bio',
      'profile_photo_path',
      'balance',
      'complete_name',
      'name_verified',
      'profile_photo_url',
      'average_rating',
    ];

    const { me } = await login(loginData);
    const result = Object.keys(me);

    expect(result).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the email fails', async () => {
    const loginData: Login = {
      email: 'asd@asd.asd',
      password: <string>process.env.PASSWORD,
    };

    const expectedResult = {
      error: 'User does not exist',
    };

    const result = await login(loginData);

    expect(result).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the password fails', async () => {
    const loginData: Login = {
      email: <string>process.env.EMAIL,
      password: '123test',
    };

    const expectedResult = {
      error: 'Password mismatch',
    };

    const result = await login(loginData);

    expect(result).toEqual(expectedResult);
  });
});
