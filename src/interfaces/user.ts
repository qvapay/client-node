import { LatestTransaction } from './index';

export interface User {
  uuid: string;
  username: string;
  name: string;
  lastname: string;
  bio: string;
  logo: string;
  balance: string;
  kyc: number;
  total_in: string;
  total_out: string;
  latestTransactions: LatestTransaction[];
}
