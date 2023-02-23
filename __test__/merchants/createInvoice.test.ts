import 'dotenv/config';
import { AppAuth, Invoice, InvoiceResponse } from '../../src/interfaces';
import { createInvoice } from '../../src';

const authApp: AppAuth = {
  app_id: <string>process.env.APP_ID,
  app_secret: <string>process.env.APP_SECRET,
};

describe('create invoice', () => {
  test('should return the invoice created', async () => {
    const expectedResult: InvoiceResponse = {
      app_id: '',
      amount: 0,
      description: '',
      remote_id: '',
      signed: 0,
      transation_uuid: '',
      url: '',
      signedUrl: '',
    };
    const invoice: Invoice = {
      ...authApp,
      amount: 99.99,
      description: 'Enanitos verdes',
      remote_id: 'MY_OWN_CUSTOM_ID',
      signed: 1,
    };

    const result = await createInvoice(invoice);

    expect(Object.keys(result)).toEqual(Object.keys(expectedResult));
  });

  test('should return an AxiosResponse when the request fails', async () => {
    const expectedResult = {
      error: 'APP no existe',
    };
    const invoice: Invoice = {
      app_id: 'test',
      app_secret: 'test',
      amount: 99.99,
      description: 'Enanitos verdes',
      remote_id: 'MY_OWN_CUSTOM_ID',
      signed: 1,
    };
    const result = await createInvoice(invoice);

    expect(result).toEqual(expectedResult);
  });
});
