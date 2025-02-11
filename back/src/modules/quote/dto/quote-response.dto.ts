export type QuoteResponse = {
  from: string;
  to: string;
  amount: number;
  rate: number;
  convertedAmount: number;
  timestamp: string;
  expiresAt: string;
};
