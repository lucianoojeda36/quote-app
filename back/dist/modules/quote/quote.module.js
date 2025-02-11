"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const quote_business_service_1 = require("../../bll/quote/quote.business.service");
const quote_model_1 = require("../../dal/models/quote.model");
const quote_repository_1 = require("../../dal/repositories/quote.repository");
const quote_facade_1 = require("../../facades/quote/quote-facade");
const quote_controller_1 = require("./quote.controller");
const user_module_1 = require("../user/user.module");
const exchange_rate_provider_1 = require("../../providers/exchange-rate/exchange-rate.provider");
const axios_1 = require("@nestjs/axios");
const auth_module_1 = require("../auth/auth.module");
let QuoteModule = class QuoteModule {
};
exports.QuoteModule = QuoteModule;
exports.QuoteModule = QuoteModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Quote', schema: quote_model_1.QuoteSchema }]),
            (0, common_1.forwardRef)(() => user_module_1.UserModule),
            axios_1.HttpModule,
            (0, common_1.forwardRef)(() => auth_module_1.AuthModule),
        ],
        providers: [
            quote_business_service_1.QuoteBusinessService,
            quote_repository_1.QuoteRepository,
            quote_facade_1.QuoteFacade,
            exchange_rate_provider_1.ExchangeRateProvider,
        ],
        controllers: [quote_controller_1.QuoteController],
        exports: [quote_facade_1.QuoteFacade],
    })
], QuoteModule);
//# sourceMappingURL=quote.module.js.map