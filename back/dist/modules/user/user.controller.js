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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_facade_1 = require("../../facades/user/user-facade");
const logger_service_1 = require("../../common/logger/logger.service");
let UserController = class UserController {
    constructor(userFacade, logger) {
        this.userFacade = userFacade;
        this.logger = logger;
    }
    async getUser(id) {
        this.logger.log(`Fetching user with ID: ${id}`);
        try {
            const result = await this.userFacade.findById(id);
            if (!result) {
                this.logger.warn(`User with ID: ${id} not found`);
            }
            else {
                this.logger.log(`User with ID: ${id} retrieved successfully`);
            }
            return result;
        }
        catch (error) {
            this.logger.error('Error fetching user', error.stack);
            throw error;
        }
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getUser", null);
exports.UserController = UserController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [user_facade_1.UserFacade,
        logger_service_1.CustomLoggerService])
], UserController);
//# sourceMappingURL=user.controller.js.map