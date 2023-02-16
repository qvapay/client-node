import { Me } from './me';

export interface AppOneTransactionResponse {
  uuid: string;
  app_id: number;
  amount: string;
  description: string;
  remote_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  paid_by: PaidBy;
  app: App;
  owner: Me;
}

interface App {
  name: string;
  url: string;
  desc: string;
  logo: string;
  uuid: string;
  active: number;
  enabled: number;
  created_at: string;
  updated_at: string;
  app_photo_url: string;
}

interface PaidBy {
  username: string;
  name: string;
  logo: string;
  complete_name: string;
  name_verified: string;
  profile_photo_url: string;
  average_rating: string;
}
