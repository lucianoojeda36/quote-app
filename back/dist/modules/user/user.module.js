"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_business_service_1 = require("../../bll/user/user.business.service");
const user_model_1 = require("../../dal/models/user.model");
const user_repository_1 = require("../../dal/repositories/user.repository");
const user_facade_1 = require("../../facades/user/user-facade");
const user_controller_1 = require("./user.controller");
const auth_module_1 = require("../auth/auth.module");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'User', schema: user_model_1.UserSchema }]),
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        providers: [user_business_service_1.UserBusinessService, user_repository_1.UserRepository, user_facade_1.UserFacade],
        controllers: [user_controller_1.UserController],
        exports: [user_facade_1.UserFacade, user_business_service_1.UserBusinessService],
    })
], UserModule);
//# sourceMappingURL=user.module.js.map