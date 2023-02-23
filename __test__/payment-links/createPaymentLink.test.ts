import 'dotenv/config';
import { Login, PaymentLink } from '../../src/interfaces';
import { login, createPaymentLink } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

const info: PaymentLink = {
  name: 'Pulover de guinga azul',
  product_id: 'PVG-AZUL',
  amount: 10.32,
};

describe('get All Payment Links', () => {
  test('should return an object with the payment link information', async () => {
    const expectedResult = [
      'name',
      'product_id',
      'amount',
      'updated_at',
      'created_at',
      'payment_link_url',
    ];
    const { accessToken } = await login(loginData);
    const result = await createPaymentLink(accessToken, info);

    expect(Object.keys(result)).toEqual(expectedResult);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const result = await createPaymentLink(accessToken, info);

    expect(result).toEqual(expectedResult);
  });
});
