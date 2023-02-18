import { Owner, Wallet } from './index';

export interface LatestTransaction {
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
  paid_by: Owner;
  app_owner: App;
  owner: Owner;
  wallet: Wallet | null;
  servicebuy: null;
}

export interface App {
  logo: string;
  url: string;
  name: string;
}
