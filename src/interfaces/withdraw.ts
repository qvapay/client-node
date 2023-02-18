export interface Withdraw {
  pay_method: string;
  amount: number;
  details: Detail[];
}

export interface Detail {
  Wallet: string;
}
