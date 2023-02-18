import { AppAuth } from './appAuth';

export interface Invoice extends AppAuth {
  amount: number;
  description: string;
  remote_id: string;
  signed: number;
}
