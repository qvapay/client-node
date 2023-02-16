export interface PayResponse {
  uuid: string;
  app_id: number;
  amount: string;
  description: string;
  remote_id: string;
  status: string;
  created_at: string;
  updated_at: string;
  owner: Owner;
}

interface Owner {
  uuid: string;
  username: string;
  name: string;
  lastname: string;
  bio: string;
  logo: string;
  kyc: number;
}
