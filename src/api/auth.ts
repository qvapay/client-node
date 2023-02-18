import { AxiosError, AxiosResponse } from 'axios';
import { Login, LoginResponse, Register } from '../interfaces';
import qvapayAPI from '../helpers/axios';

export const login = async (loginData: Login): Promise<LoginResponse> => {
  try {
    const { data } = await qvapayAPI.post('/auth/login', loginData);
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

export const register = async (registerData: Register) => {
  try {
    const { data } = await qvapayAPI.post('/auth/register', registerData);
    return data;
  } catch (error) {
    const { response } = <AxiosError>error;
    const { data } = <AxiosResponse>response;
    return data;
  }
};

//* accessToken es el token que retorna la función login
export const logout = async (
  accessToken: string
): Promise<{ message: string }> => {
  try {
    const { data } = await qvapayAPI.get('/auth/logout', {
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
