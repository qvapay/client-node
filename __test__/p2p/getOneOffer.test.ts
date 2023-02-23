import 'dotenv/config';
import { login, getOneOffer } from '../../src';
import { Login } from '../../src/interfaces';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};
const id = '9e94e64d-3f4c-4010-9c3d-a855fbf0f04f';

describe('get one offer', () => {
  test('should return an object with the data of the offers in an array', async () => {
    const { accessToken } = await login(loginData);
    const result = await getOneOffer(accessToken, id);

    expect(Object.keys(result)).toContain('data');
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const result = await getOneOffer('test', id);

    expect(result).toEqual(expectedResult);
  });
});
