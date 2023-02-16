import 'dotenv/config';

import { login, register, logout } from './api/auth';
import {
  appBalance,
  appInfo,
  createInvoice,
  getOneTransactionFromApp,
  getTransactionsFromApp,
} from './api/merchant';
import { createPaymentLink, getAllPaymentLinks } from './api/paymentLinks';
import {
  getTransactionsFromUserAuth,
  getOneTransaction,
  getWithdrawsFromUserAuth,
} from './api/transactions';
import { getUser, deposit, updateUser, withdraw } from './api/user';
import { AppAuth, Deposit, Invoice, PaymentLink, Withdraw } from './interfaces';
import { Login } from './interfaces/login';

const loginData: Login = {
  email: <string>process.env.EMAIL,
  password: <string>process.env.PASSWORD,
};

const auth: AppAuth = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
};

const invoice: Invoice = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
  amount: 99.99,
  description: 'Enanitos verdes',
  remote_id: 'MY_OWN_CUSTOM_ID',
  signed: 1,
};

const newDeposit: Deposit = {
  pay_method: 'BTCLN',
  amount: 67,
};

const newWithdraw: Withdraw = {
  pay_method: 'BTCLN',
  amount: 8,
  details: [
    {
      Wallet: 'bc1qs67kwcf7znpnc06xjh8cnc0zwsechcfxscghun',
    },
  ],
};

const newPaymentLink: PaymentLink = {
  name: 'Pulover de guinga azul',
  product_id: 'PVG-AZUL',
  amount: 10.32,
};

(async () => {
  const data = await createPaymentLink(
    '379350|u4sPlJET7B2fO1900AUfFZz5kw9mrMWcN6HqjnWi',
    newPaymentLink
  );
  console.log(data);
})();
