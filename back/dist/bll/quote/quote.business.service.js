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
exports.QuoteBusinessService = void 0;
const common_1 = require("@nestjs/common");
const quote_repository_1 = require("../../dal/repositories/quote.repository");
const exchange_rate_provider_1 = require("../../providers/exchange-rate/exchange-rate.provider");
let QuoteBusinessService = class QuoteBusinessService {
    constructor(quoteRepository, exchangeRateProvider) {
        this.quoteRepository = quoteRepository;
        this.exchangeRateProvider = exchangeRateProvider;
    }
    async createQuote(data) {
        const rate = await this.exchangeRateProvider.getRate(data.from, data.to);
        if (!rate || isNaN(rate)) {
            throw new Error('Exchange rate is invalid');
        }
        const convertedAmount = data.amount * rate;
        const now = new Date();
        const expiresAt = new Date(now.getTime() + 5 * 60 * 1000);
        const quote = await this.quoteRepository.create({
            from: data.from,
            to: data.to,
            amount: data.amount,
            rate,
            convertedAmount,
            timestamp: now,
            expiresAt,
        });
        return this.mapToResponse(quote);
    }
    async getQuote(id) {
        const quote = await this.quoteRepository.findValidQuote(id);
        if (!quote) {
            throw new common_1.NotFoundException('Quote not found or has expired');
        }
        return this.mapToResponse(quote);
    }
    mapToResponse(quote) {
        return {
            from: quote.from,
            to: quote.to,
            amount: quote.amount,
            rate: quote.rate,
            convertedAmount: quote.convertedAmount,
            timestamp: quote.timestamp.toISOString(),
            expiresAt: quote.expiresAt.toISOString(),
        };
    }
};
exports.QuoteBusinessService = QuoteBusinessService;
exports.QuoteBusinessService = QuoteBusinessService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [quote_repository_1.QuoteRepository,
        exchange_rate_provider_1.ExchangeRateProvider])
], QuoteBusinessService);
//# sourceMappingURL=quote.business.service.js.map