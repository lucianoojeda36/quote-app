export type QuoteEntity = {
  from: string;
  to: string;
  amount: number;
  rate: number;
  convertedAmount: number;
  timestamp: Date;
  expiresAt: Date;
  createdAt: Date;
  updatedAt: Date;
};
