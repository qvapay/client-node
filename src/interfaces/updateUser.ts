export interface UpdateUser {
  name: string;
  username: string;
  lastname?: string;
  bio?: string;
  logo?: string;
  kyc?: number;
  email?: string;
  password?: string;
}
