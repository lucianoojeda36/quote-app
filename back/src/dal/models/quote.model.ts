import { Schema } from 'mongoose';

export const QuoteSchema = new Schema({
  from: { type: String, required: true },
  to: { type: String, required: true },
  amount: { type: Number, required: true },
  rate: { type: Number, required: true },
  convertedAmount: { type: Number, required: true },
  timestamp: { type: Date, required: true },
  expiresAt: { type: Date, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
});
