import { AxiosError, AxiosResponse } from 'axios';
import qvapayAPI from '../helpers/axios';
import { PaymentLink, PaymentLinkResponse } from '../interfaces';

export const getAllPaymentLinks = async (
  accessToken: string
): Promise<PaymentLinkResponse[]> => {
  try {
    const { data } = await qvapayAPI.get('/payment_links', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

export const createPaymentLink = async (
  accessToken: string,
  info: PaymentLink
): Promise<PaymentLinkResponse> => {
  try {
    const { data } = await qvapayAPI.post('/payment_links/create', info, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};
