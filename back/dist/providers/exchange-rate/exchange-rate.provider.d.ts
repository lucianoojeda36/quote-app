import { HttpService } from '@nestjs/axios';
export declare class ExchangeRateProvider {
    private readonly httpService;
    private readonly apiUrl;
    constructor(httpService: HttpService);
    getRate(from: string, to: string): Promise<number>;
}
