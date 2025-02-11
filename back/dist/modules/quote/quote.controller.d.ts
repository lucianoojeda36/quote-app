import { QuoteFacade } from 'src/facades/quote/quote-facade';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuoteResponse } from './dto/quote-response.dto';
import { CustomLoggerService } from 'src/common/logger/logger.service';
export declare class QuoteController {
    private quoteFacade;
    private logger;
    constructor(quoteFacade: QuoteFacade, logger: CustomLoggerService);
    createQuote(quoteData: CreateQuoteDto): Promise<QuoteResponse>;
    getQuote(id: string): Promise<QuoteResponse>;
}
