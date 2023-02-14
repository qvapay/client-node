import { AxiosError, AxiosResponse } from 'axios';

import qvapayAPI from '../helpers/axios';
import {
  Me,
  Deposit,
  UpdateUser,
  User,
  Transaction,
  Withdraw,
} from '../interfaces';

export const getUser = async (bearerToken: string): Promise<User> => {
  try {
    const { data } = await qvapayAPI.get('/user', {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

export const updateUser = async (
  bearerToken: string,
  dataToUpdate: UpdateUser
): Promise<Me> => {
  try {
    const { data } = await qvapayAPI.put('/user', dataToUpdate, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

export const deposit = async (
  bearerToken: string,
  newDeposit: Deposit
): Promise<Transaction> => {
  try {
    const { data } = await qvapayAPI.post('/topup', newDeposit, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

export const withdraw = async (bearerToken: string, newWithdraw: Withdraw) => {
  try {
    const { data } = await qvapayAPI.post('/withdraw', newWithdraw, {
      headers: {
        Authorization: `Bearer ${bearerToken}`,
      },
    });
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};
