import { Schema } from 'mongoose';

export const AuthSchema = new Schema({
  lastLogin: { type: Date, required: true },
  isActive: { type: Boolean, required: true },
  failedAttempts: { type: Number, required: true, defaultIfEmpty: 0 },
});
