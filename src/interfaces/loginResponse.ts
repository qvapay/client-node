import { Me } from './me';

export interface LoginResponse {
  accessToken: string;
  token_type: string;
  me: Me;
}
