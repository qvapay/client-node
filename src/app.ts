import 'dotenv/config';
import { login, getOneTransaction, getOffers } from './api';
import { OffersParams } from './interfaces';
import { Login } from './interfaces/login';

(async () => {
  const loginData: Login = {
    email: <string>process.env.EMAIL,
    password: <string>process.env.PASSWORD,
  };
  const props: OffersParams = {
    coin: 'ETECSA',
  };
  const id = '252952e6-4f19-46a8-83ae-491abcdf93e4';
  const { accessToken } = await login(loginData);

  const res = await getOffers(accessToken, props);

  console.log(res);
})();
