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
exports.AuthFacade = void 0;
const common_1 = require("@nestjs/common");
const user_business_service_1 = require("../../bll/user/user.business.service");
const auth_business_service_1 = require("../../bll/auth/auth.business.service");
let AuthFacade = class AuthFacade {
    constructor(authBusinessService, userBusinessService) {
        this.authBusinessService = authBusinessService;
        this.userBusinessService = userBusinessService;
    }
    async login(credentials) {
        const isValid = await this.authBusinessService.validateCredentials(credentials);
        if (!isValid)
            throw new common_1.UnauthorizedException();
        const user = await this.userBusinessService.findByEmail(credentials.email);
        const token = await this.authBusinessService.generateToken(user);
        return { user, token };
    }
    async register(userData) {
        const exists = await this.userBusinessService.findByEmail(userData.email);
        const user = await this.userBusinessService.create(userData);
        const token = await this.authBusinessService.generateToken(user);
        return { user, token };
    }
    async validateToken(token) {
        return this.authBusinessService.verifyToken(token);
    }
};
exports.AuthFacade = AuthFacade;
exports.AuthFacade = AuthFacade = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_business_service_1.AuthBusinessService,
        user_business_service_1.UserBusinessService])
], AuthFacade);
//# sourceMappingURL=auth-facade.js.map