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
exports.QuoteController = void 0;
const common_1 = require("@nestjs/common");
const quote_facade_1 = require("../../facades/quote/quote-facade");
const create_quote_dto_1 = require("./dto/create-quote.dto");
const jwt_auth_guard_1 = require("../../common/guards/jwt-auth.guard");
const logger_service_1 = require("../../common/logger/logger.service");
let QuoteController = class QuoteController {
    constructor(quoteFacade, logger) {
        this.quoteFacade = quoteFacade;
        this.logger = logger;
    }
    async createQuote(quoteData) {
        this.logger.log(`Creating quote for ${quoteData.amount} ${quoteData.from} to ${quoteData.to}`);
        try {
            const result = await this.quoteFacade.createQuote(quoteData);
            this.logger.log(`Quote created successfully : ${result}`);
            return result;
        }
        catch (error) {
            this.logger.error('Error creating quote', error.stack);
            throw error;
        }
    }
    async getQuote(id) {
        this.logger.log(`Fetching quote with ID: ${id}`);
        try {
            const result = await this.quoteFacade.getQuoteById(id);
            if (!result) {
                this.logger.warn(`Quote with ID: ${id} not found`);
            }
            else {
                this.logger.log(`Quote with ID: ${id} retrieved successfully`);
            }
            return result;
        }
        catch (error) {
            this.logger.error('Error fetching quote', error.stack);
            throw error;
        }
    }
};
exports.QuoteController = QuoteController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_quote_dto_1.CreateQuoteDto]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "createQuote", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], QuoteController.prototype, "getQuote", null);
exports.QuoteController = QuoteController = __decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('quotes'),
    __metadata("design:paramtypes", [quote_facade_1.QuoteFacade,
        logger_service_1.CustomLoggerService])
], QuoteController);
//# sourceMappingURL=quote.controller.js.map