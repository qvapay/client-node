export interface WithdrawResponse {
  current_page: number;
  data: Datum[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: Link[];
  next_page_url: null;
  path: string;
  per_page: number;
  prev_page_url: null;
  to: number;
  total: number;
}

interface Datum {
  id: number;
  user_id: number;
  transaction_id: number;
  amount: string;
  receive: string;
  payment_method: string;
  details: string;
  status: string;
  tx_id: null;
  created_at: string;
  updated_at: string;
  transaction: Transaction;
  coin: Coin;
}

interface Coin {
  id: number;
  coins_categories_id: number;
  name: string;
  logo: string;
  tick: string;
  fee_in: string;
  fee_out: string;
  min_in: string;
  min_out: string;
  price: string;
}

interface Transaction {
  uuid: string;
  app_id: number;
  amount: string;
  description: string;
  remote_id: string;
  status: string;
  created_at: string;
  updated_at: string;
}

interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
