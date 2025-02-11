"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteSchema = void 0;
const mongoose_1 = require("mongoose");
exports.QuoteSchema = new mongoose_1.Schema({
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
//# sourceMappingURL=quote.model.js.map