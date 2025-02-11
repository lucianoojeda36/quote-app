"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const user_model_1 = require("../../dal/models/user.model");
const auth_business_service_1 = require("../../bll/auth/auth.business.service");
const auth_repository_1 = require("../../dal/repositories/auth.repository");
const auth_facade_1 = require("../../facades/auth/auth-facade");
const auth_controller_1 = require("./auth.controller");
const user_module_1 = require("../user/user.module");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const jwt_strategy_1 = require("../../common/strategies/jwt.strategy");
const auth_model_1 = require("../../dal/models/auth.model");
const dotenv = require("dotenv");
dotenv.config();
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '1h' },
            }),
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_model_1.UserSchema },
                { name: 'Auth', schema: auth_model_1.AuthSchema },
            ]),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
        ],
        providers: [
            auth_business_service_1.AuthBusinessService,
            auth_repository_1.AuthRepository,
            auth_facade_1.AuthFacade,
            jwt_strategy_1.JwtAuthStrategy,
            jwt_auth_guard_1.JwtAuthGuard,
        ],
        controllers: [auth_controller_1.AuthController],
        exports: [auth_facade_1.AuthFacade, auth_business_service_1.AuthBusinessService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map