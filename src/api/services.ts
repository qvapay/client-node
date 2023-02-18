import { AxiosError, AxiosResponse } from 'axios';
import qvapayAPI from '../helpers/axios';
import { Service, ServiceResponse } from '../interfaces';

export const getAllServices = async (
  accessToken: string
): Promise<ServiceResponse> => {
  try {
    const { data } = await qvapayAPI.get('/services', {
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

export const getOneService = async (
  accessToken: string,
  id: string
): Promise<Service> => {
  try {
    const { data } = await qvapayAPI.get(`/services/${id}`, {
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
