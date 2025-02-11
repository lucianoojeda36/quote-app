"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const quote_model_1 = require("./dal/models/quote.model");
const auth_module_1 = require("./modules/auth/auth.module");
const user_module_1 = require("./modules/user/user.module");
const quote_module_1 = require("./modules/quote/quote.module");
const user_model_1 = require("./dal/models/user.model");
const logger_service_1 = require("./common/logger/logger.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            mongoose_1.MongooseModule.forRoot(process.env.MONGODB_URI),
            mongoose_1.MongooseModule.forFeature([
                { name: 'User', schema: user_model_1.UserSchema },
                { name: 'Quote', schema: quote_model_1.QuoteSchema },
            ]),
            auth_module_1.AuthModule,
            user_module_1.UserModule,
            quote_module_1.QuoteModule,
        ],
        controllers: [],
        providers: [logger_service_1.CustomLoggerService],
        exports: [logger_service_1.CustomLoggerService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map