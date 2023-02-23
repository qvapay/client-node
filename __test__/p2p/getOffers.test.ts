import 'dotenv/config';
import { login, getOffers } from '../../src';
import { Login, OffersParams } from '../../src/interfaces';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};
const props: OffersParams = {
  coin: 'ETECSA',
  min: 1,
  max: 50,
  type: 'buy'
};

describe('get Offers', () => {
  test('should return an object with the data of the offers in an array', async () => {
    const { accessToken } = await login(loginData);
    const result = await getOffers(accessToken, props);

    expect(Object.keys(result)).toContain('data');
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const result = await getOffers('test', props);

    expect(result).toEqual(expectedResult);
  });
});
