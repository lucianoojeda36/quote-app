"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthBusinessService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt = require("bcryptjs");
const auth_repository_1 = require("../../dal/repositories/auth.repository");
let AuthBusinessService = class AuthBusinessService {
    constructor(authRepository, jwtService) {
        this.authRepository = authRepository;
        this.jwtService = jwtService;
    }
    async validateCredentials(credentials) {
        const user = await this.authRepository.findByEmail(credentials.email);
        if (!user)
            return false;
        return bcrypt.compare(credentials.password, user.password);
    }
    async generateToken(user) {
        const payload = { sub: user.userId, email: user.email };
        return this.jwtService.sign(payload);
    }
    async setupInitialAuth(user) {
        await this.authRepository.createAuthSettings(user.userId);
    }
    async verifyToken(token) {
        try {
            const decoded = this.jwtService.verify(token);
            return !!decoded;
        }
        catch (error) {
            return false;
        }
    }
};
exports.AuthBusinessService = AuthBusinessService;
exports.AuthBusinessService = AuthBusinessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthBusinessService);
//# sourceMappingURL=auth.business.service.js.map