import { LatestTransaction } from './index';

export interface User {
  uuid: string;
  username: string;
  name: string;
  lastname: string;
  email: string;
  bio: string;
  balance: string;
  total_in: string;
  total_out: string;
  latestTransactions: LatestTransaction[];
  profile_photo_path: string;
  complete_name: string;
  name_verified: string;
  profile_photo_url: string;
  average_rating: string;
}
