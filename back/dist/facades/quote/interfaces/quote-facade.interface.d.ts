import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { QuoteResponse } from 'src/modules/quote/dto/quote-response.dto';
export interface IQuoteFacade {
    createQuote(quoteData: CreateQuoteDto): Promise<QuoteResponse>;
    getQuoteById(id: string): Promise<QuoteResponse>;
}
