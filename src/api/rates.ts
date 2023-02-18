import { AxiosError, AxiosResponse } from 'axios';
import qvapayAPI from '../helpers/axios';
import { CurrentRates } from '../interfaces';

export const currentRates = async (): Promise<CurrentRates[]> => {
  try {
    const { data } = await qvapayAPI.get('/rates/index');
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

export const currentCoins = async (): Promise<CurrentRates[]> => {
  try {
    const { data } = await qvapayAPI.get('/coins');
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};
