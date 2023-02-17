import { Coin } from './coin';

export interface CurrentRates {
  id: number;
  name: string;
  logo: string;
  coins: Coin[];
}
