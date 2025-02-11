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
exports.ExchangeRateProvider = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const rxjs_1 = require("rxjs");
let ExchangeRateProvider = class ExchangeRateProvider {
    constructor(httpService) {
        this.httpService = httpService;
        this.apiUrl = 'https://api.exchange.cryptomkt.com/api/3/public/price/rate';
    }
    async getRate(from, to) {
        try {
            const response = await (0, rxjs_1.lastValueFrom)(this.httpService.get(`${this.apiUrl}?from=${from}&to=${to}`));
            const rateData = response.data[from];
            if (!rateData || rateData.currency !== to) {
                throw new Error(`Exchange rate not found for ${from} to ${to}`);
            }
            return parseFloat(rateData.price);
        }
        catch (error) {
            console.error('Error fetching exchange rate:', error.message);
            if (from === 'ARS' && to === 'ETH') {
                return 0.0000023;
            }
            else if (from === 'ETH' && to === 'ARS') {
                return 434782.61;
            }
            throw new Error('Failed to fetch exchange rate');
        }
    }
};
exports.ExchangeRateProvider = ExchangeRateProvider;
exports.ExchangeRateProvider = ExchangeRateProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], ExchangeRateProvider);
//# sourceMappingURL=exchange-rate.provider.js.map