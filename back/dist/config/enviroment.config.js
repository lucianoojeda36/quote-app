"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.environmentConfig = void 0;
exports.environmentConfig = {
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1h',
};
//# sourceMappingURL=enviroment.config.js.map