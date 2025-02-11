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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const _login_dto_1 = require("../../modules/auth/dto/ login.dto");
const auth_business_service_1 = require("../../bll/auth/auth.business.service");
const bcrypt = require("bcryptjs");
let UserRepository = class UserRepository {
    constructor(userModel, authBusinessService) {
        this.userModel = userModel;
        this.authBusinessService = authBusinessService;
    }
    async create(userData) {
        return this.userModel.create(userData);
    }
    async findById(id) {
        return this.userModel.findById(id);
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email });
    }
    async login(loginData) {
        const user = await this.userModel
            .findOne({ email: loginData.email })
            .exec();
        if (!user) {
            throw new common_1.NotFoundException('Usuario not found');
        }
        const isPasswordValid = await bcrypt.compare(loginData.password, user.password);
        if (!isPasswordValid) {
            throw new common_1.NotFoundException('Incorrect Credencials');
        }
        const accessToken = await this.authBusinessService.generateToken(user);
        return { user, token: accessToken };
    }
};
exports.UserRepository = UserRepository;
__decorate([
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [_login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], UserRepository.prototype, "login", null);
exports.UserRepository = UserRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('User')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        auth_business_service_1.AuthBusinessService])
], UserRepository);
//# sourceMappingURL=user.repository.js.map