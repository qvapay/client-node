export interface TransactionResponse {
  uuid: string;
  app_id: number;
  amount: string;
  description: string;
  remote_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  logo: string;
  app: App;
  paid_by: PaidBy;
  app_owner: App;
  owner: Owner;
  wallet: Wallet;
  servicebuy: null;
}

interface App {
  logo: string;
  url: string;
  name: string;
  app_photo_url: string;
}

interface Owner {
  uuid: string;
  username: string;
  name: string;
  lastname: string;
  email: string;
  bio: string;
  profile_photo_path: string;
  complete_name: string;
  name_verified: string;
  profile_photo_url: string;
  average_rating: string;
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

interface Wallet {
  transaction_id: number;
  invoice_id: string;
  wallet_type: string;
  wallet: string;
  value: string;
  received: string;
  txid: string;
  status: string;
  created_at: string;
  updated_at: string;
}
