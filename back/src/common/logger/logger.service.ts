import { Injectable, LoggerService } from '@nestjs/common';

@Injectable()
export class CustomLoggerService implements LoggerService {
  log(message: string) {
    console.log(`[LOG]: ${message}`);
  }

  error(message: string, trace: string) {
    console.error(`[ERROR]: ${message}\n${trace}`);
  }

  warn(message: string) {
    console.warn(`[WARN]: ${message}`);
  }

  debug(message: string) {
    console.debug(`[DEBUG]: ${message}`);
  }

  verbose(message: string) {
    console.log(`[VERBOSE]: ${message}`);
  }
}
