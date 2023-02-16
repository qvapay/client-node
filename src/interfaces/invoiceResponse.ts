export interface InvoiceResponse {
  app_id: string;
  amount: number;
  description: string;
  remote_id: string;
  signed: number;
  transation_uuid: string;
  url: string;
  signedUrl: string;
}
