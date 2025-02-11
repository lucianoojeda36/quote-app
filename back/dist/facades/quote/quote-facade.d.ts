import { IQuoteFacade } from './interfaces/quote-facade.interface';
import { QuoteBusinessService } from 'src/bll/quote/quote.business.service';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { QuoteResponse } from 'src/modules/quote/dto/quote-response.dto';
export declare class QuoteFacade implements IQuoteFacade {
    private quoteBusinessService;
    constructor(quoteBusinessService: QuoteBusinessService);
    createQuote(quoteData: CreateQuoteDto): Promise<QuoteResponse>;
    getQuoteById(id: string): Promise<QuoteResponse>;
}
