import { Injectable } from '@nestjs/common';
import { IQuoteFacade } from './interfaces/quote-facade.interface';
import { QuoteBusinessService } from 'src/bll/quote/quote.business.service';
import { CreateQuoteDto } from 'src/modules/quote/dto/create-quote.dto';
import { QuoteResponse } from 'src/modules/quote/dto/quote-response.dto';

@Injectable()
export class QuoteFacade implements IQuoteFacade {
  constructor(private quoteBusinessService: QuoteBusinessService) {}

  async createQuote(quoteData: CreateQuoteDto): Promise<QuoteResponse> {
    return this.quoteBusinessService.createQuote(quoteData);
  }

  async getQuoteById(id: string): Promise<QuoteResponse> {
    return this.quoteBusinessService.getQuote(id);
  }
}
