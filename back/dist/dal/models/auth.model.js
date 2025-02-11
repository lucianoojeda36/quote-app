"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AuthSchema = new mongoose_1.Schema({
    lastLogin: { type: Date, required: true },
    isActive: { type: Boolean, required: true },
    failedAttempts: { type: Number, required: true, defaultIfEmpty: 0 },
});
//# sourceMappingURL=auth.model.js.map