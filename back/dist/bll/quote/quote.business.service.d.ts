import { QuoteRepository } from 'src/dal/repositories/quote.repository';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { QuoteResponse } from 'src/modules/quote/dto/quote-response.dto';
import { ExchangeRateProvider } from '../../providers/exchange-rate/exchange-rate.provider';
export declare class QuoteBusinessService {
    private quoteRepository;
    private exchangeRateProvider;
    constructor(quoteRepository: QuoteRepository, exchangeRateProvider: ExchangeRateProvider);
    createQuote(data: CreateQuoteDto): Promise<QuoteResponse>;
    getQuote(id: string): Promise<QuoteResponse>;
    private mapToResponse;
}
