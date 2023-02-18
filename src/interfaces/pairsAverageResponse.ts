export interface PairsAverageResponse {
  average: number;
  average_buy: number;
  average_sell: number;
  median_buy: number | null;
  median_sell: number;
  offers: number[];
}
