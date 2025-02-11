"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLoggerService = void 0;
const common_1 = require("@nestjs/common");
let CustomLoggerService = class CustomLoggerService {
    log(message) {
        console.log(`[LOG]: ${message}`);
    }
    error(message, trace) {
        console.error(`[ERROR]: ${message}\n${trace}`);
    }
    warn(message) {
        console.warn(`[WARN]: ${message}`);
    }
    debug(message) {
        console.debug(`[DEBUG]: ${message}`);
    }
    verbose(message) {
        console.log(`[VERBOSE]: ${message}`);
    }
};
exports.CustomLoggerService = CustomLoggerService;
exports.CustomLoggerService = CustomLoggerService = __decorate([
    (0, common_1.Injectable)()
], CustomLoggerService);
//# sourceMappingURL=logger.service.js.map