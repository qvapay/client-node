import 'dotenv/config';
import { Login, TransactionProps } from '../../src/interfaces';
import { login, getTransactionsFromUserAuth } from '../../src';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

describe('get Transactions From User Auth', () => {
  test('should return a instace of Array when the request is successful', async () => {
    const { accessToken } = await login(loginData);
    const props: TransactionProps = {
      status: 'pending',
    };
    const result = await getTransactionsFromUserAuth(accessToken, props);

    expect(result).toBeInstanceOf(Array);
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      message: 'Unauthenticated.',
    };
    const accessToken = 'test';
    const props: TransactionProps = {
      status: 'pending',
    };
    const result = await getTransactionsFromUserAuth(accessToken, props);

    expect(result).toEqual(expectedResult);
  });
});
